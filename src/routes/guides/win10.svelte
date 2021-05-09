<script>
    import PageTitle from "/src/components/pageTitle.svelte"
    import Highlight from "svelte-highlight"
    import "svelte-highlight/src/styles/material-darker.css";

</script>

<body>
    <PageTitle>
        <span slot="title">
              How do I install Windows 10 manually?
          </span>
          <span slot="subtitle">
              On today's episode of worthless guides, we'll show you how!
          </span>
    </PageTitle>

    <h2>Foreword</h2>
    <div>All commands demonstrated are from <a href="https://youtu.be/JxJ6a-PY1KA" target=_blank>this video</a>. I just created this guide because I dislike video tutorials.</div>
    <p>This has been confirmed to work on the latest Windows 10 version (20H2).</p>
    <p>This tutorial assumes your Windows install is UEFI/EFI.</p>
    <br>

    <h2>Method</h2>
    <div>
        <h3>1. Boot into the Windows PE, and on the first screen, open a Command Prompt with Shift + F10.</h3>
        <Highlight code="TODO: put an image here" />
        <br>

        <h3>2. Enter DiskPart:</h3>
        <Highlight code="diskpart" />
        <br>

        <h3>3. In DiskPart:</h3>
        Select disk 0.
        <Highlight code="sel disk 0" />
        Convert it to GPT.
        <Highlight code="convert gpt" />
        Create the EFI partition, with size 500mb.
        <Highlight  code="create part efi size=500" />
        Format it, changing the filesystem to FAT32.
        <Highlight code="format fs=fat32 quick" />
        Assign it the drive letter W.
        <Highlight code="assign letter w" />
        Create the primary partition. We don't specify a size because we want it to be the rest of the drive's free space.
        <Highlight code="create part primary" />
        Format it, changing the filesystem to NTFS.
        <Highlight code="format fs=ntfs quick" />
        Assign it the drive letter C.
        <Highlight code="assign letter c" />
        Finally, exit DiskPart.
        <Highlight code="exit" />
        <br>

        <h3>4. Applying the Windows image</h3>
        Change the active directory to D:\sources.
        <Highlight code="cd /d D:\sources" />
        OPTIONAL: Clear the terminal. This just makes things look a little nicer, clearing away all the DiskPart commands.
        <Highlight code="cls" />
        Apply the Windows image with DISM. This may take a while.
        <Highlight code="dism /apply-image /imagefile:install.wim /index:1 /applydir:C:\" />
        
        <h3>5. Creating boot files</h3>
        Using bcdboot, we create boot files on the EFI partition we made earlier, allowing the system to boot.
        <Highlight code="bcdboot C:\Windows /s W:" />
        <br>

        <h3>6. Loading Registry Hives</h3>
        Now, the fun begins! We need to load two hives into the Registry. Start by opening Registry Editor.
        <Highlight code="regedit" />
        Select <code>HKEY_LOCAL_MACHINE</code> with a click, then click <code>File</code> in the topbar. In the dropdown, select <code>Load Hive</code>.
        <Highlight code="TODO: put an image here" />
        Load the hives <code>SOFTWARE</code> and <code>SYSTEM</code>, located at <code>C:\System32\config</code>. Give them the names <code>SOFT</code> and <code>SYS</code> respectively.
        <Highlight code="TODO: put an image here" />
        <br>

        <h3>7. Modifying the Registry</h3>
        <strong>I would recommend following the video tutorial here. It shows what you need to do a little easier.</strong>
        <p>In the <code>SOFT</code> hive we just loaded, go to <code>Microsoft\Windows\CurrentVersion\Policies\System</code> and add a new DWORD. Name it <code>VerboseStatus</code> and give it a value of 1.</p>
        Set the value of the alreadt existing DWORD named <code>EnableCursorSuppression</code> to 0.
        <p>Next, in to the <code>SYS</code> hive we made earlier, go to <code>Setup</code> and change the CmdLine DWORD's value to <code>cmd.exe</code>. Then, reboot with: </p>
        <Highlight code="wpeutil reboot" />
        <br>

        <h3>8. Setting up drivers and services</h3>
        As soon as you get into the Command Prompt, set up drivers and services with windeploy:
        <Highlight code="oobe\windeploy" />
        Once the status message changes to "Getting ready", add a user. Replace <code>(username)</code> with your preferred username.
        <Highlight code="net user add (username)" />
        Next, add it to important localgroups, because Windows is unable to do this for us. Once again, replace <code>(username)</code> with the username you set.
        <Highlight code="net localgroup /add users (username)" />
        <Highlight code="net localgroup /add administrators (username)" />
        <br>

        <h3>Modifying the Registry Part 2: Electric Boogaloo</h3>
        Start Registry Editor once again. We're going to set 3 values to 0.
        <Highlight code="regedit" />
        Navigate to <code>HKEY_LOCAL_MACHINE\SYSTEM\Setup</code> and set <code>OobeInProgress</code>, <code>SetupType</code> and <code>SystemSetupInProgress</code> to 0.
        <p>Once you're done, exit regedit and the Command Prompt.</p>
        <br>

        <h3>9. That one vague step</h3>
        <p>There's no logical explanation, but for whatever reason, when you reach the "Please wait for the Windows Modules Installer" screen, wait around 5 minutes.</p>
        <p>After this, the machine will reboot, showing that we must be up and running.</p>
        <br>

        <h3>10. Finishing touches</h3>
        <p>Once the machine boots, you should see the login screen. Once you log in, set your privacy options. If you're smart, you'll set them all to Limited or Off.</p>
        And, just like that, you've manually installed Windows 10! We even skipped most of the OOBE!
    </div>
</body>

<style>

</style>