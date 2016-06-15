#
# Copyright (C) 2013 Bernd Ocklin <bernd@vyacht.net>
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=vy-web
PKG_VERSION:=0.3
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/vy-web
	CATEGORY:=VYACHT
  DEPENDS:=+uhttpd +uhttpd-mod-lua +jquery-ui +lua +liblua +libuci-lua +libubus-lua +libuci-lua +luci-lib-nixio +luci-lib-nixio +font-lato
	TITLE:=allows easy web based configuartion of an vYachtWiFi Router
	MAINTAINER:=Bernd Ocklin <bernd@vyacht.net>
endef

define Package/vy-web/description
  A tiny package to allow web based router configuration.
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/vy-web/install
	$(INSTALL_DIR) $(1)/www
	$(INSTALL_DIR) $(1)/www/img
	$(INSTALL_DIR) $(1)/www/css
	$(INSTALL_DIR) $(1)/www/js
	$(INSTALL_DIR) $(1)/www/docs
	$(INSTALL_DIR) $(1)/www/dls

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_DIR) $(1)/usr/lib/lua/vyacht/

	$(INSTALL_DATA) ./files/index.html $(1)/www/index.html
	$(INSTALL_DATA) ./files/test.html $(1)/www/test.html
	$(INSTALL_BIN)  ./files/vyacht.lua $(1)/www/vyacht.lua
	$(INSTALL_BIN)  ./files/test-vyacht.lua $(1)/www/
	$(INSTALL_BIN)  ./files/cmd-vyacht.lua $(1)/www/
	$(INSTALL_BIN)  ./files/upgrade.lua $(1)/www/

	$(INSTALL_BIN)  ./files/fix_hosts $(1)/etc/init.d/fix_hosts

	$(INSTALL_BIN)  ./files/lib/get-opt-alt.lua $(1)/usr/lib/lua/vyacht/get-opt-alt.lua
	$(INSTALL_BIN)  ./files/lib/ip.lua $(1)/usr/lib/lua/vyacht/ip.lua
	$(INSTALL_BIN)  ./files/lib/mime.lua $(1)/usr/lib/lua/vyacht/mime.lua
	$(INSTALL_BIN)  ./files/lib/json.lua $(1)/usr/lib/lua/vyacht/json.lua
	$(INSTALL_BIN)  ./files/lib/sys.lua $(1)/usr/lib/lua/vyacht/sys.lua
	$(INSTALL_BIN)  ./files/lib/version.lua $(1)/usr/lib/lua/vyacht/version.lua
	$(INSTALL_BIN)  ./files/lib/protocol.lua $(1)/usr/lib/lua/vyacht/protocol.lua
	$(INSTALL_BIN)  ./files/lib/config.lua $(1)/usr/lib/lua/vyacht/config.lua

	$(INSTALL_DATA) ./files/css/global.css $(1)/www/css/global.css
	$(INSTALL_DATA) ./files/css/screen.css $(1)/www/css/screen.css

	$(INSTALL_DATA) ./files/js/vy-spin.js $(1)/www/js/vy-spin.js
	$(INSTALL_DATA) ./files/js/vy-settings.js $(1)/www/js/vy-settings.js

	$(INSTALL_DATA) ./files/documentation.html  $(1)/www/documentation.html
	$(INSTALL_DATA) ./files/docs/*  $(1)/www/docs/
	$(INSTALL_DATA) ./files/dls/*  $(1)/www/dls/

	$(INSTALL_DATA) ./files/img/glyphicons_085_repeat.png $(1)/www/img/glyphicons_085_repeat.png
	$(INSTALL_DATA) ./files/img/glyphicons_206_ok_2.png $(1)/www/img/glyphicons_206_ok_2.png
	$(INSTALL_DATA) ./files/img/vyacht-logo-04.png $(1)/www/img/vyacht-logo-04.png
	$(INSTALL_DATA) ./files/img/vyacht-logo.png $(1)/www/img/vyacht-logo.png
	$(INSTALL_DATA) ./files/img/signalk-instrumentpanel.png $(1)/www/img/signalk-instrumentpanel.png
	$(INSTALL_DATA) ./files/img/connecting-router-detail.png $(1)/www/img/connecting-router-detail.png
	$(INSTALL_DATA) ./files/img/connecting-router.svg $(1)/www/img/connecting-router.svg
	$(INSTALL_DATA) ./files/img/connecting-router-details.svg $(1)/www/img/connecting-router-details.svg
	$(INSTALL_DATA) ./files/img/vyacht-logo-04-249x115.png $(1)/www/img/vyacht-logo-04-249x115.png
	$(INSTALL_DATA) ./files/img/system-overview-mkIII.png $(1)/www/img/system-overview-mkIII.png

endef

$(eval $(call BuildPackage,vy-web))
