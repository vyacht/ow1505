#
# Copyright (C) 2014 Bernd Ocklin <bernd@vyacht.net>
#
# This file is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
# 
# For the license of the actually jquery please check subfolders.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=bootstrap
PKG_VERSION:=3.3.6
PKG_RELEASE:=dist

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION)-$(PKG_RELEASE).zip
#PKG_SOURCE_URL:=http://download-mirror.savannah.gnu.org/releases/gpsd
#PKG_MD5SUM:=53a88f24a0973d23427e82e9a8914f19

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)-$(PKG_RELEASE)

include $(INCLUDE_DIR)/package.mk

define Package/bootstrap
	CATEGORY:=VYACHT
	TITLE:=bootstrap
	MAINTAINER:=Bernd Ocklin <bernd@vyacht.net>
endef

define Package/bootstrap/description
  Package for bootstrap dependencies.
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	unzip $(DL_DIR)/$(PKG_SOURCE) -d $(BUILD_DIR)
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/bootstrap/install
	$(INSTALL_DIR) $(1)/www/bootstrap
	$(INSTALL_DIR) $(1)/www/bootstrap/css
	$(INSTALL_DIR) $(1)/www/bootstrap/fonts
	$(INSTALL_DIR) $(1)/www/bootstrap/js
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/css/* $(1)/www/bootstrap/css/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/fonts/* $(1)/www/bootstrap/fonts/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/js/* $(1)/www/bootstrap/js/
endef

$(eval $(call BuildPackage,bootstrap))
