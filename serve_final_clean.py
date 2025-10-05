#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from datetime import datetime

class UltraCleanHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Force serve index.html for root requests
        if self.path == '/' or self.path == '/index.html':
            self.path = '/index.html'
        return super().do_GET()
    
    def end_headers(self):
        # NUCLEAR cache-busting headers with current timestamp
        timestamp = int(datetime.now().timestamp())
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('ETag', f'"ultra-clean-{timestamp}"')
        self.send_header('Last-Modified', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('Vary', '*')
        self.send_header('X-Cache-Control', 'no-cache')
        super().end_headers()
    
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sys.stdout.write(f"[{timestamp}] CLEAN SERVER: {format % args}\n")
        sys.stdout.flush()

if __name__ == "__main__":
    PORT = 3334
    os.chdir('/home/user/webapp')
    
    print(f"🧹 ULTRA CLEAN SERVER STARTING")
    print(f"📄 Serving: index.html (REAL WORKING VERSION)")
    print(f"🌐 Port: {PORT}")
    print(f"💥 Cache: NUCLEAR DISABLED")
    print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    with socketserver.TCPServer(("0.0.0.0", PORT), UltraCleanHandler) as httpd:
        sys.stdout.flush()
        httpd.serve_forever()
