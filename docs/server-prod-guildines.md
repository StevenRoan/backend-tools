# Some Guildlines For Production Server

* Increase maximum open file [ref](http://www.cyberciti.biz/faq/linux-increase-the-maximum-number-of-open-files/)
 * `/etc/security/limits.conf`:
   * `* soft nofile 4096`
   * `* hard nofile 10240`
     * `*` can be replaced by account name
 * NOTE: we need to reconnect ssh to make this config reload