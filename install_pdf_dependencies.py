#!/usr/bin/env python3
"""
PDF Dependencies Installer
=========================

This script installs the required PDF processing libraries for the portfolio analyzer.
"""

import subprocess
import sys

def install_pdf_library():
    """Install PDF processing library"""
    libraries = [
        "pdfplumber",  # Most accurate for text extraction
        "PyPDF2",      # Lightweight alternative
        "PyMuPDF"      # Fast alternative
    ]
    
    print("🔧 Installing PDF processing libraries...")
    
    for lib in libraries:
        try:
            print(f"📦 Installing {lib}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", lib])
            print(f"✅ {lib} installed successfully!")
            return lib
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to install {lib}: {e}")
            continue
    
    print("❌ Could not install any PDF processing library")
    return None

if __name__ == "__main__":
    print("🎯 PDF Portfolio Analyzer - Dependency Installer")
    print("=" * 55)
    
    installed_lib = install_pdf_library()
    
    if installed_lib:
        print(f"\n✅ Ready to extract PDFs using {installed_lib}!")
        print("🚀 Run the main analyzer: python ultimate_pdf_portfolio_analyzer.py")
    else:
        print("\n❌ Manual installation required:")
        print("   pip install pdfplumber")
        print("   pip install PyPDF2")
        print("   pip install PyMuPDF")
