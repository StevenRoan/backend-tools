# Disk Partition
### Information Get Command
* `fdisk -l`: list all the **physical** disk
 * `fdisk /dev/sdb -l`: get single disk
* `mount`/ `cat /proc/mount`: get all the mount information
* `df -T`: Get all file system type currently mounted

### Flow
Ref:
[Linux Hard Disk Format Command](http://www.cyberciti.biz/faq/linux-disk-format/)
[掛載與卸載檔案系統](https://www.freebsd.org/doc/zh_TW/books/handbook/mount-unmount.html)
1. Create partition by `fdisk` (not mandatory)
2. Format each partition

##### Partition Create Commnad
* `fdisk <dev name(e.g. /dev/sdb)>`: enter fdisk interactvie prompt

##### Format Partition
* `mkfs.ext4 /dev/sdX`: create file system in specific partition(e.g.: /dev/sda1), or a hardrive (e.g.: /dev/sda)
 * NOTE: `df -H` still cannot detect the hardrive

##### Mount Partition
* `mount /dev/sdX /mnt/mntpt`

##### `fstab`: auto mount when system reboot (optional)
* `sudo vim /etc/fstab`
 * `/dev/sdb /mnt/pd1 ext4 defaults  0 0`
 * if set label by `e2label`
  * Use `LABEL=data-disk /mnt/pd1 ext4 defaults  0 0` can work as well


## Reference
*[Linux how to determine the file system type](http://www.cyberciti.biz/faq/linux-how-to-determine-find-out-file-system-type/)