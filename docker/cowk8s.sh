#!/bin/env bash

set -e
ubuntu_version=$(lsb_release -a 2>/dev/null | grep -v "No LSB modules are available." | grep "Description:" | awk -F "Description:\t" '{print $2}')

install_formbricks() {
  # Friendly welcome
  echo "🧱 Welcome to the Formbricks Setup Script"
  echo ""
  echo "🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your $ubuntu_version server."
  echo ""

  # Remove any old Docker installations, without stopping the script if they're not found
  echo "🧹 Time to sweep away any old Docker installations."
  sudo apt-get remove docker docker-engine docker.io containerd runc >/dev/null 2>&1 || true

  echo "Updating your package list."
  sudo apt-get update >/dev/null 2>&1

  # Install dependencies
  echo "📦 Installing the necessary dependencies."
  sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release >/dev/null 2>&1  
}

case "$1" in
install)
  install_formbricks
  ;;
*)
  echo "🚀 Executing default step of installing Formbricks"
  install_formbricks
  ;;
esac