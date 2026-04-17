# Static Export Guide

This guide explains how to export your HaltSec website as a static bundle and manage access-controlled distribution through the backend.

## Overview

The HaltSec static bundle is **no longer publicly accessible** at `/haltsec-static-bundle.zip`. Instead, it is managed through a secure, authorization-controlled system:

- **Authorized admins** can upload the bundle to the backend
- **Authorized users** can download the bundle through the `/download` page after logging in with Internet Identity
- **Admins** can also access the bundle via a hidden admin-only URL
- The bundle is stored securely in the backend and served only to users with proper permissions

## Important: Stable Domain vs Draft URLs

### Why Draft URLs Fail

If you see an error like **"Error 400 - Canister ID Not Resolved"**, it means you're using an outdated draft URL. Draft URLs in the format `draft-version-*.icp0.io` are temporary and get replaced with each new deployment.

### Use the Stable Domain Instead

Your application has a **stable live domain** based on the frontend canister ID:

