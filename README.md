# OpenIPC Improver

OpenIPC Improver (legacy) for setting up FPV and URLLC devices

*This is a work in progress.*

Idea was to create a multiplatform application that can run anywhere (Windows, Mac or Linux).


## Setup


### Windows

Please download and install PuTTy before running the Improver

---

Run the "OpenIPC Improver.exe" file.

Enter the IP of the camera/NVR/Radxa Zero 3w.

Click Fetch to receive the setting files.

Then click Read to read the current settings.

Edit the settings.

Then click Save.

Then click Upload to send the settings to the camera/NVR/Radxa Zero 3w.

![alt text](./images/configurator.png)

### Mac

![alt text](./images/openipc-control-suite.png)



## Build
npm run build

* For macOS
    ```bash
    npx electron-packager . my-electron-app --platform=darwin --arch=x64 --out=dist/
    ```

* For Windows
    ```shell
    npx electron-packager . my-electron-app --platform=win32 --arch=x64 --out=dist/
    ```

* For Linux
    ```bash
    npx electron-packager . my-electron-app --platform=linux --arch=x64 --out=dist/
    ```



## Debug





## Running dependencies

sshpass



## Development

#### Ubuntu

sudo apt install libgbm1 libasound2

### Mac and Linux

headless setup x11

Install Xvfb:
```bash
sudo apt-get install xvfb
```
Start Xvfb:
```bash
Xvfb :99 -screen 0 1024x768x24 &
```

Set the DISPLAY Variable:
```bash
export DISPLAY=:99
```

Setup
```bash
npm install
```

Run Your Electron App:

```bash
npm start
```
