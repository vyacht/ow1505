#
# Copyright (C) 2014 Bernd Ocklin <bernd@vyacht.net>
#
# This file is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
# 
# For the license of the actually jquery please check subfolders.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=font-lato
PKG_VERSION:=4.5.0

include $(INCLUDE_DIR)/package.mk

define Package/font-lato
	CATEGORY:=VYACHT
	TITLE:=font-lato
	MAINTAINER:=Bernd Ocklin <bernd@vyacht.net>
endef

define Package/font-lato/description
  Package for font-lato dependencies.
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/font-lato/install
	$(INSTALL_DIR) $(1)/www/font-lato
	$(INSTALL_DIR) $(1)/www/font-lato/css
	$(INSTALL_DIR) $(1)/www/font-lato/fonts
	$(INSTALL_DATA) css/font-lato.css $(1)/www/font-lato/css/font-lato.css
	$(INSTALL_DATA) fonts/lato-black-900.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-bolditalic-700.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-lightitalic-300.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-normal-400.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-bold-700.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-italic-400.woff2 $(1)/www/font-lato/fonts/
	$(INSTALL_DATA) fonts/lato-normal-300.woff2 $(1)/www/font-lato/fonts/      
	$(INSTALL_DATA) fonts/lato-regular-400.woff2  $(1)/www/font-lato/fonts/
endef

$(eval $(call BuildPackage,font-lato))
