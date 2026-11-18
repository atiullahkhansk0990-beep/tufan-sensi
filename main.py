import json
import platform
import subprocess

def prop(name):
    try:
        return subprocess.check_output(["getprop", name], text=True, stderr=subprocess.DEVNULL).strip()
    except Exception:
        return ""

def total_ram_mb():
    try:
        with open("/proc/meminfo", encoding="utf-8") as f:
            for line in f:
                if line.startswith("MemTotal:"):
                    return round(int(line.split()[1]) / 1024)
    except Exception:
        pass
    return None

report = {
    "brand": prop("ro.product.brand") or platform.machine(),
    "model": prop("ro.product.model") or platform.node() or "Unknown",
    "android_version": prop("ro.build.version.release") or "Unknown",
    "resolution": "Not available",
    "refresh_rate_hz": None,
    "ram_total_mb": total_ram_mb(),
    "scanner_version": "1.0",
    "note": "Basic device properties only; no personal files or account data accessed."
}
try:
    output = subprocess.check_output(["wm", "size"], text=True, stderr=subprocess.DEVNULL)
    report["resolution"] = output.strip().splitlines()[-1].replace("Physical size: ", "").replace("Override size: ", "")
except Exception:
    pass

with open("device_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2)
print("Saved device_report.json in the current folder.")
