#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8006
Handler = http.server.SimpleHTTPRequestHandler

class NoCacheHTTPRequestHandler(Handler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        mimetype, encoding = super().guess_type(path)
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        return mimetype

if __name__ == "__main__":
    os.chdir('/home/user/webapp')
    with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()