#
# Copyright (C) 2014 Bernd Ocklin <bernd@vyacht.net>
#
# This file is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
# 
# For the license of the actually jquery please check subfolders.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=font-awesome
PKG_VERSION:=4.5.0
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).zip
#PKG_SOURCE_URL:=http://download-mirror.savannah.gnu.org/releases/gpsd
#PKG_MD5SUM:=53a88f24a0973d23427e82e9a8914f19

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/font-awesome
	CATEGORY:=VYACHT
	TITLE:=font-awesome
	MAINTAINER:=Bernd Ocklin <bernd@vyacht.net>
endef

define Package/font-awesome/description
  Package for font-awesome dependencies.
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	unzip $(DL_DIR)/$(PKG_SOURCE) -d $(BUILD_DIR)
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/font-awesome/install
	$(INSTALL_DIR) $(1)/www/font-awesome
	$(INSTALL_DIR) $(1)/www/font-awesome/css
	$(INSTALL_DIR) $(1)/www/font-awesome/fonts
	$(INSTALL_DIR) $(1)/www/font-awesome/less
	$(INSTALL_DIR) $(1)/www/font-awesome/scss
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/css/* $(1)/www/font-awesome/css/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/fonts/* $(1)/www/font-awesome/fonts/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/less/* $(1)/www/font-awesome/less/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/scss/* $(1)/www/font-awesome/scss/
endef

$(eval $(call BuildPackage,font-awesome))
