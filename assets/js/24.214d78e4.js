(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{417:function(e,t,s){"use strict";s.r(t);var a=s(5),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"set-up-a-production-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-production-environment"}},[e._v("#")]),e._v(" Set up a production environment")]),e._v(" "),s("p",[e._v("Use the following information to set up and manage your production-level full Terra node.")]),e._v(" "),s("p",[e._v("For information about running a validator node, visit the "),s("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/Overview.html"}},[e._v("validator guide")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"create-a-dedicated-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-dedicated-user"}},[e._v("#")]),e._v(" Create a dedicated user")]),e._v(" "),s("p",[e._v("Although "),s("code",[e._v("terrad")]),e._v(" does not require a super user account, during the setup process you'll need super user permission to create and modify some files. It is strongly recommended to use a normal user when running "),s("code",[e._v("terrad")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"increase-the-maximum-files-terrad-can-open"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increase-the-maximum-files-terrad-can-open"}},[e._v("#")]),e._v(" Increase the maximum files "),s("code",[e._v("terrad")]),e._v(" can open")]),e._v(" "),s("p",[s("code",[e._v("terrad")]),e._v(" is set to open 1024 files by default. It is recommended that you increase this amount.")]),e._v(" "),s("p",[e._v("Modify "),s("code",[e._v("/etc/security/limits.conf")]),s("a",{attrs:{href:"https://linux.die.net/man/5/limits.conf",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),s("OutboundLink")],1),e._v(" to increase the amount, where "),s("code",[e._v("nofile")]),e._v(" is the number of files "),s("code",[e._v("terrad")]),e._v(" can open.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If you have never changed this system config or your system is fresh, most of this file will be commented")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n*                soft    nofile          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("65535")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Uncomment the following two lines at the bottom")]),e._v("\n*                hard    nofile          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("65535")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change the default values to ~65535")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n")])])]),s("h1",{attrs:{id:"running-the-server-as-a-daemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-server-as-a-daemon"}},[e._v("#")]),e._v(" Running the server as a daemon")]),e._v(" "),s("p",[s("code",[e._v("terrad")]),e._v(" must be running at all times. It is recommended that you register "),s("code",[e._v("terrad")]),e._v(" as a "),s("code",[e._v("systemd")]),e._v(" service so that it will be started automatically when the system reboots.")]),e._v(" "),s("h2",{attrs:{id:"register-terrad-as-a-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-terrad-as-a-service"}},[e._v("#")]),e._v(" Register terrad as a service")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create a service definition file in "),s("code",[e._v("/etc/systemd/system/terrad.service")]),e._v(", as shown in the following example:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Terra Daemon\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("network.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("simple\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("TERRA_USER"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PATH_TO_TERRAD"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/terrad start  \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-abort\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LimitNOFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("65535")]),e._v("  \n")])])])]),e._v(" "),s("li",[s("p",[e._v("Modify the "),s("code",[e._v("Service")]),e._v(" section according to your environment:")]),e._v(" "),s("ul",[s("li",[e._v("Enter the user (likely your username, unless you created a user specifically for "),s("code",[e._v("terrad")]),e._v(")")]),e._v(" "),s("li",[e._v("Enter the path to the "),s("code",[e._v("terrad")]),e._v(" executable. "),s("code",[e._v("<PATH_TO_TERRAD>")]),e._v(" is likely "),s("code",[e._v("/home/<YOUR_USER>/go/bin/terrad")]),e._v(" or "),s("code",[e._v("/usr/go/bin")]),e._v(". Confirm this with "),s("code",[e._v("whereis terrad")])]),e._v(" "),s("li",[e._v("Make sure you made the correct edits to /etc/security/limits.conf")])])]),e._v(" "),s("li",[s("p",[e._v("Run "),s("code",[e._v("systemctl daemon-reload")]),e._v(" followed by "),s("code",[e._v("systemctl enable terrad")]),e._v(". This will register "),s("code",[e._v("terrad")]),e._v(" as a system service and turn it on upon startup.")])]),e._v(" "),s("li",[s("p",[e._v("Now start the serivce with "),s("code",[e._v("systemctl start terrad")]),e._v(".")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Controlling the service.")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("systemctl")]),e._v(" to start, stop, and restart the service.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check health")]),e._v("\nsystemctl status terrad\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start")]),e._v("\nsystemctl start terrad\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop")]),e._v("\nsystemctl stop terrad\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restart")]),e._v("\nsystemctl restart terrad\n")])])]),s("h2",{attrs:{id:"access-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-logs"}},[e._v("#")]),e._v(" Access logs")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("journalctl -t")]),e._v(" to access entire logs, entire logs in reverse, and the latest and continuous log.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Entire log reversed")]),e._v("\njournalctl -t terrad -r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Entire log")]),e._v("\njournalctl -t terrad\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest and continuous")]),e._v("\njournalctl -t terrad -f\n")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);