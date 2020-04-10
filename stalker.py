import sys
import frida

def on_message(message, data):
	print("[%s] -> %s" % (message, data))

def main(target_process):
    device = frida.get_usb_device()
    # pid = device.spawn("cn.wps.moffice_eng")
    # device.resume(pid)
    time.sleep(1)  # Without it Java.perform silently fails
    session = device.attach("cn.wps.moffice_eng")
	with open("stalker.js") as f:
        script = session.create_script(f.read())
	script.on('message', on_message)
	script.load()
	input('[!] Press <Enter> at any time to detach from instrumented program.\n\n')
	session.detach()

main()