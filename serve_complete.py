#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from datetime import datetime

class CompleteWebsiteHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If requesting root or index.html, serve the complete website file
        if self.path == '/' or self.path == '/index.html':
            self.path = '/empty-nest-website/index-backup.html'
        
        # Continue with normal file serving
        return super().do_GET()
    
    def end_headers(self):
        # Aggressive cache-busting headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('ETag', f'"complete-nocache-{int(datetime.now().timestamp())}"')
        self.send_header('Last-Modified', 'Thu, 01 Jan 1970 00:00:00 GMT')
        super().end_headers()
    
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sys.stdout.write(f"[{timestamp}] {format % args}\n")
        sys.stdout.flush()

if __name__ == "__main__":
    PORT = 8888
    Handler = CompleteWebsiteHandler
    
    # Ensure we're serving from the webapp directory
    os.chdir('/home/user/webapp')
    
    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"✅ SERVING COMPLETE WEBSITE (213K FILE)")
        print(f"📁 Directory: /home/user/webapp/")
        print(f"📄 File: empty-nest-website/index-backup.html")
        print(f"📊 Size: 213K (COMPLETE VERSION)")
        print(f"🌐 Port: {PORT}")  
        print(f"🚫 Cache: DISABLED (no-cache headers)")
        print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        sys.stdout.flush()
        httpd.serve_forever()
