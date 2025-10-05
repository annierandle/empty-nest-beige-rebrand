#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from datetime import datetime

class CandidateHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve different candidate files based on path
        candidates = {
            '/candidate1': '/empty-nest-website/index-backup.html',  # 213K - most complete
            '/candidate2': '/MASTER_CLEAN.html',                    # 206K - clean version  
            '/candidate3': '/empty-nest-deploy/index.html',         # 203K - deploy version
            '/candidate4': '/index-integrated-correct.html',        # 83K - "correct" named
            '/candidate5': '/empty-nest-website/index.html',        # 59K - recently modified
        }
        
        # If requesting root, show index of candidates
        if self.path == '/' or self.path == '/index.html':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            html = '''
            <!DOCTYPE html>
            <html>
            <head><title>Website Candidates - Find Your Correct Version</title></head>
            <body style="font-family: Arial; padding: 2rem; background: #f5f5f5;">
                <h1>🔍 Find Your Correct Website Version</h1>
                <p>Click each candidate to test which one matches your correct version:</p>
                <div style="display: grid; gap: 1rem; max-width: 800px;">
                    <a href="/candidate1" style="padding: 1rem; background: white; text-decoration: none; border-radius: 8px; border: 1px solid #ddd;">
                        <h3 style="margin: 0; color: #333;">Candidate 1: index-backup.html</h3>
                        <p style="margin: 0.5rem 0 0; color: #666;">213K - Most complete version</p>
                    </a>
                    <a href="/candidate2" style="padding: 1rem; background: white; text-decoration: none; border-radius: 8px; border: 1px solid #ddd;">
                        <h3 style="margin: 0; color: #333;">Candidate 2: MASTER_CLEAN.html</h3>
                        <p style="margin: 0.5rem 0 0; color: #666;">206K - Clean version</p>
                    </a>
                    <a href="/candidate3" style="padding: 1rem; background: white; text-decoration: none; border-radius: 8px; border: 1px solid #ddd;">
                        <h3 style="margin: 0; color: #333;">Candidate 3: Deploy version</h3>
                        <p style="margin: 0.5rem 0 0; color: #666;">203K - Deploy directory</p>
                    </a>
                    <a href="/candidate4" style="padding: 1rem; background: white; text-decoration: none; border-radius: 8px; border: 1px solid #ddd;">
                        <h3 style="margin: 0; color: #333;">Candidate 4: integrated-correct</h3>
                        <p style="margin: 0.5rem 0 0; color: #666;">83K - Named "correct"</p>
                    </a>
                    <a href="/candidate5" style="padding: 1rem; background: white; text-decoration: none; border-radius: 8px; border: 1px solid #ddd;">
                        <h3 style="margin: 0; color: #333;">Candidate 5: Recently modified</h3>
                        <p style="margin: 0.5rem 0 0; color: #666;">59K - Recently updated</p>
                    </a>
                </div>
                <p style="margin-top: 2rem; color: #666;">Test each candidate and let me know which one shows the correct "Make the Next Part Yours" hero + Meet Kellie + Nest Approved sections.</p>
            </body>
            </html>
            '''
            self.wfile.write(html.encode())
            return
        
        # Serve candidate files
        if self.path in candidates:
            self.path = candidates[self.path]
            
        return super().do_GET()
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        super().end_headers()

if __name__ == "__main__":
    PORT = 3334
    os.chdir('/home/user/webapp')
    
    with socketserver.TCPServer(("0.0.0.0", PORT), CandidateHandler) as httpd:
        print(f"✅ CANDIDATE TESTING SERVER")
        print(f"🌐 Port: {PORT}")
        print(f"🔍 Test each candidate to find your correct version")
        print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        sys.stdout.flush()
        httpd.serve_forever()
