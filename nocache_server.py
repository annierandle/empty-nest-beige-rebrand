#!/usr/bin/env python3
import http.server
import socketserver
from datetime import datetime
import os

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Last-Modified', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('ETag', f'"nocache-{datetime.now().timestamp()}"')
        super().end_headers()

if __name__ == "__main__":
    PORT = 8007
    os.chdir('/home/user/webapp')
    
    with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHTTPRequestHandler) as httpd:
        print(f"Serving at http://0.0.0.0:{PORT}/ with NO CACHE headers")
        httpd.serve_forever()