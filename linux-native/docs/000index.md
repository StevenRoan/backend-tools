# Linux knowledge


#### Crontab and logrotate
* Test if system logrotate is fine: `/usr/local/sbin/logrotate /etc/logrotate.conf`
 * This command is added in `/etc/cron.daily/logrotate` by default
 * [concept and ref](http://unix.stackexchange.com/questions/116136/how-to-make-log-rotate-change-take-effect)

#### Useful Sytem Modules
* `sudo service <name> <action>`
 * Common interfaces (start, restart, status), are implemented. All the defined behaviors is in `/etc/init.d` directory