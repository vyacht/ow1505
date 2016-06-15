#
# Copyright (C) 2014 Bernd Ocklin <bernd@vyacht.net>
#
# This file is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
# 
# For the license of the actually jquery please check subfolders.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=vy-instrumentpanel
PKG_VERSION:=0.0.1
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tgz
#PKG_SOURCE_URL:=http://download-mirror.savannah.gnu.org/releases/gpsd
#PKG_MD5SUM:=53a88f24a0973d23427e82e9a8914f19

include $(INCLUDE_DIR)/package.mk

define Package/vy-instrumentpanel
	CATEGORY:=VYACHT
  DEPENDS:=+uhttpd +font-awesome +bootstrap
  TITLE:=SignalK Instrumentpanel
	MAINTAINER:=Bernd Ocklin <bernd@vyacht.net>
endef

define Package/vy-instrumentpanel/description
  Package for SignalK instrument panel dependencies.
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/vy-instrumentpanel/install
	$(INSTALL_DIR) $(1)/www
	$(INSTALL_DIR) $(1)/www/dist
	$(INSTALL_DIR) $(1)/www/css
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/instrumentpanel.html $(1)/www/instrumentpanel.html
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/dist/ui.js $(1)/www/dist/ui.js
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/dist/vendor.js $(1)/www/dist/vendor.js
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/css/react-grid-layout.css $(1)/www/css/react-grid-layout.css
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/css/react-resizable.css $(1)/www/css/react-resizable.css
endef

$(eval $(call BuildPackage,vy-instrumentpanel))
