#!/usr/bin/env python3
import http.server
import socketserver
import os
import shutil
from datetime import datetime

# Use port 3338 to avoid conflicts
PORT = 3338

class FreshHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Aggressive no-cache headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache') 
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == "__main__":
    os.chdir('/home/user/webapp')
    
    # Always copy MASTER.html to index.html before serving
    if os.path.exists('MASTER.html'):
        shutil.copy2('MASTER.html', 'index.html')
        print("✅ Copied MASTER.html to index.html")
    
    with socketserver.TCPServer(("0.0.0.0", PORT), FreshHandler) as httpd:
        print(f"🚀 Serving MASTER version at port {PORT}")
        httpd.serve_forever()