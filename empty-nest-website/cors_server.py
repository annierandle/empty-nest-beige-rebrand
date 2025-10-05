#!/usr/bin/env python3
import http.server
import socketserver
from urllib.parse import urlparse
import os
import mimetypes

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        
        # Add aggressive cache-busting headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Last-Modified', 'Mon, 30 Sep 2024 20:55:00 GMT')
        
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
    
    def log_message(self, format, *args):
        # Print access logs to help debug
        print(f"[{self.date_time_string()}] {format % args}")

if __name__ == "__main__":
    PORT = 8089
    os.chdir('/home/user/webapp/empty-nest-deploy')
    
    with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
        print(f"Serving at port {PORT} with CORS and cache-busting headers")
        print(f"Directory: {os.getcwd()}")
        httpd.serve_forever()