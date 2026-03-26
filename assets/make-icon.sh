#!/bin/bash
# Generates a minimal SONA icon using ImageMagick
# Run once: bash assets/make-icon.sh
convert -size 512x512 xc:#fcfaf2 \
  -font Courier-Bold -pointsize 160 \
  -fill '#1a1a1a' -gravity Center -annotate 0 'S' \
  -fill '#ff3c00' -draw "rectangle 0,460 512,512" \
  assets/icon.png
echo "icon.png created"
