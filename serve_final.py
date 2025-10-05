#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from datetime import datetime

class FinalWebsiteHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If requesting root or index.html, serve the FINAL correct version
        if self.path == '/' or self.path == '/index.html':
            self.path = '/FINAL_CORRECT_VERSION.html'
        
        return super().do_GET()
    
    def end_headers(self):
        # Aggressive cache-busting headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('ETag', f'"final-nocache-{int(datetime.now().timestamp())}"')
        self.send_header('Last-Modified', 'Thu, 01 Jan 1970 00:00:00 GMT')
        super().end_headers()
    
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sys.stdout.write(f"[{timestamp}] {format % args}\n")
        sys.stdout.flush()

if __name__ == "__main__":
    PORT = 3334
    os.chdir('/home/user/webapp')
    
    with socketserver.TCPServer(("0.0.0.0", PORT), FinalWebsiteHandler) as httpd:
        print(f"✅ FINAL CORRECT VERSION SERVER")
        print(f"📁 File: FINAL_CORRECT_VERSION.html")
        print(f"🎯 Hero: 'Make the Next Part Yours' ✅")
        print(f"👩‍💼 Meet Kellie: Restaurant photo ✅") 
        print(f"🏪 Nest Approved: Amazon & ShopMy storefronts ✅")
        print(f"🌟 Just Ingredients: With MP4 video background ✅")
        print(f"🚫 Discount Codes: REMOVED as requested ✅")
        print(f"🌐 Port: {PORT}")
        print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        sys.stdout.flush()
        httpd.serve_forever()
