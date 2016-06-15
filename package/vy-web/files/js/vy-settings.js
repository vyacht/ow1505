function changeWifiIP(value) {

        var sw = "on";

	if(document.getElementById('wifi_off').checked) {
        	sw = "off";
	}
        var params = "ip=" + value + "&switch=" + sw;
        
	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);

        $.ajax({
                url: "/lua/changeWifi",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if((res != null) && res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function changeWifiPwd(value) {
  var re = /^[-\w_]+$/;
  if(!re.test(value)) {
    alert("New wireless key contains illegal characters.");
    return;
  }
  
  var params = "key=" + value;

  var spinner = showSpinningWheel('NMEA1Waiter');
  setTimeout("timeout()", 10000);
  $.ajax({
    url: "/lua/changeWifi",
    type: "GET",
    data: params,
    dataType: "json",
    success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
    },
    error: function(xhr, status, thrown) {
      spinner.stop();
      console.log(status);
      console.log(thrown);
    }
  });
}

function changeGpsPort(value) {

        var params = "port=" + value;

	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
        $.ajax({
                url: "/lua/changeGps",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function changeGpsFeed(value) {

        var params = "feed=" + value;

	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
        $.ajax({
                url: "/lua/changeGps",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function changeUdpBroadcast(value) {

        var params = "broadcast=" + value;

	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
        $.ajax({
                url: "/lua/changeGps",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function changeEthIP(device, value) {

        var lanwan = "lan";
        if(device == "eth00") {
		if(document.getElementById('eth1_wan').checked) {
			lanwan = "wan";
		} else if (document.getElementById('eth1_lan').checked) {
			lanwan = "lan";
		}
        } else if (device == "eth01") {

		if(document.getElementById('eth2_wan').checked) {
			lanwan = "wan";
		} else if (document.getElementById('eth2_lan').checked) {
			lanwan = "lan";
		}

	}
	
        /*  value is the new IP address and the device */
        var params = "ip=" + value + "&device=" + device + "&wan=" + lanwan;
        
	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
        $.ajax({
                url: "/lua/changeEthernet",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
			alert(status);
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function changeNMEASpeed(device, value) {

	var speed = 4800;
	var type = "";

	var arr = value.split(":");
	if(arr.length < 1 || arr.length > 2) {
		return;
	}
	
	type  = arr[0];
	speed = parseInt(arr[1]);		

        var params = "speed=" + speed + "&port=" + device + "&type=" + type;
        console.log("sending: " + params);

	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
        $.ajax({
                url: "/lua/changeNMEA",
                type: "GET",
                data: params,
                dataType: "json",
                success: function(res) {
                	spinner.stop();
			if(res.error) {
				alert(res.error);
			}
                },
                error: function(xhr, status, thrown) {
                	spinner.stop();
			alert(status);
                        console.log(status);
                        console.log(thrown);
                }
        });
}

function updateStatus(res) {
	document.getElementById('Hostname').innerHTML = res.Hostname;
	document.getElementById('OS_version').innerHTML = res.OS;
	document.getElementById('Firmware_version').innerHTML = res.Firmware;
	document.getElementById('Time').innerHTML = res.Time; 
	document.getElementById('Uptime').innerHTML = res.Uptime;

 	  $( "#port_n2k" ).show();
	  
	  // $( "#NMEA2kStatus" ).innerHTML = res.NMEAStatus[0].DeviceName;
	  document.getElementById('NMEA2kStatus').innerHTML = "250k Baud";

          if(res.NMEAStatus.length < 2) {
            $( "#port_serial_1" ).hide();
	    $( "#port_serial_2" ).hide();
          }
	  
	  for (var i = 0; i < res.NMEAStatus.length; i++) {
	      var eln = "NMEA" + res.NMEAStatus[i].port + "Status"; 
	      var eln1 = "#port_serial_" + res.NMEAStatus[i].port;
	      var el = document.getElementById(eln);
	      if(el != null) {
	          el.innerHTML = res.NMEAStatus[i].actual;
	      } else {
	          console.log("Element " + eln + " not found!");
	      }
	      eln = "NMEA" + res.NMEAStatus[i].port + "Speed"; 
	      el = document.getElementById(eln);
	      if(el != null) {
	          var val = res.NMEAStatus[i].type + ":" + res.NMEAStatus[i].speed;
	          el.value = val;
	          console.log("Element value " + val + "");
	      } else {
	          console.log("Element " + eln + " not found!");
	      }
	  }
	
	document.getElementById('GpsStatus').innerHTML = res.GpsStatus.Status;
	document.getElementById('GpsPort').value = res.GpsStatus.Port;
	document.getElementById('GpsFeed').value = res.GpsFeed;
	document.getElementById('UdpBroadcast').value = res.UdpBroadcast;
	
	var ip = "0.0.0.0";
	var pref = "0";
	document.getElementById('WifiStatus').innerHTML = res.NetDevices.wifi.status;
	ip = res.NetDevices.wifi.HostIP;
	pref = res.NetDevices.wifi.prefix;
	if((ip == "undefined") || (ip == "") || (pref == "undefined") || (pref == "")) {
		ip = "0.0.0.0"; pref = "0";
	}
	
	if(res.NetDevices.wifi.status == "Up") {
		document.getElementById('wifi_off').checked = false;
		document.getElementById('wifi_on').checked = true;
	} else {
		document.getElementById('wifi_off').checked = true;
		document.getElementById('wifi_on').checked = false;
	}
	toggleWifi();
	
	document.getElementById('WifiIP').value = ip + "/" + pref;
	document.getElementById('WifiPwd').value = res.NetDevices.wifi.key;

        if(!res.NetDevices.eth01.installed) {	
          if(res.NetDevices.eth00.installed) {	
  	    if(res.NetDevices.eth00.type == "wan") {
              $( "#eth1_wan" ).prop("checked", true);
              $( "#eth1_lan" ).prop("checked", false);
	    } else {
              $( "#eth1_wan" ).prop("checked", false);
              $( "#eth1_lan" ).prop("checked", true);
	    }

            $( "#eth2_lan_wan" ).hide();
            $( "#eth1_lan_wan" ).show();

          } else {

            $( "#eth2_lan_wan" ).hide();
            $( "#eth1_lan_wan" ).hide();
          }

        } else {

          $( "#eth2_lan_wan" ).show();
          $( "#eth1_lan_wan" ).hide();

	  if(res.NetDevices.eth01.type == "wan") {
            $( "#eth2_wan" ).prop("checked", true);
            $( "#eth2_lan" ).prop("checked", false);
            $( "#Eth2IP" ).prop("disabled", true);
	  } else {
            $( "#eth2_wan" ).prop("checked", false);
            $( "#eth2_lan" ).prop("checked", true);
            $( "#Eth2IP" ).prop("disabled", false);
	  }

        }

	ip = "0.0.0.0";
	pref = "0";
	if(res.NetDevices.eth00.installed) {	
		ip = res.NetDevices.eth00.HostIP;
		pref = res.NetDevices.eth00.prefix;
		if((ip == "undefined") || (ip == "") || (pref == "undefined") || (pref == "")) {
			ip = "0.0.0.0"; pref = "0";
		}
		document.getElementById('Eth1IP').value = ip + "/" + pref; 
		document.getElementById('Eth1IP').disabled = false;
	} else {
		document.getElementById('Eth1IP').disabled = true;
	}
	document.getElementById('Eth1IP').value = ip + "/" + pref; 
	document.getElementById('Eth1Status').innerHTML = res.NetDevices.eth00.status;
	
	ip = "0.0.0.0";
	pref = "0";
	var dis = false;
	if(res.NetDevices.eth01.installed) {	
		ip = res.NetDevices.eth01.HostIP;
		pref = res.NetDevices.eth01.prefix;
		if((typeof ip == "undefined") || (ip == "") || (typeof pref == "undefined") || (pref == "")) {
			ip = "0.0.0.0"; pref = "0";
			dis = true;
		}
	} else {
		dis = true;
	}
	document.getElementById('Eth2IP').value = ip + "/" + pref;
	document.getElementById('Eth2Status').innerHTML = res.NetDevices.eth01.status;
}

function togglePasswd(value) {
	console.log(value);
}

function toggleLANWAN(ethElementId) {
  console.log("toggleLANWAN: " + ethElementId + " : " + $('input[name=wan]:checked', '#eth2form').val());
  if(ethElementId == "Eth2IP") {
    if($('input[name=wan]:checked', '#eth2form').val() == "wan") {
       $( "#Eth2IP" ).prop("disabled", true);
    } 
    if($('input[name=wan]:checked', '#eth2form').val() == "lan") {
       $( "#Eth2IP" ).prop("disabled", false);
    } 

  } else {

    if(ethElementId == "Eth1IP") {
      if($('input[name=wan]:checked', '#eth1form').val() == "wan") {
        $( "#Eth1IP" ).prop("disabled", true);
      } 
      if($('input[name=wan]:checked', '#eth1form').val() == "lan") {
        $( "#Eth1IP" ).prop("disabled", false);
      } 
    }
  }
}

function toggleWifi() {
  if(document.getElementById('wifi_on').checked) {
	document.getElementById('WifiIP').disabled = false;
	document.getElementById('WifiPwd').disabled = false;
  } else if(document.getElementById('wifi_off').checked) {
	document.getElementById('WifiIP').disabled = true;
	document.getElementById('WifiPwd').disabled = true;
  } 
}

var spinningWheel = null;

function showSpinningWheel(element) {
  var opts = {
    lines: 13, // The number of lines to draw
    length: 20, // The length of each line
    width: 10, // The line thickness
    radius: 30, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
  };
  var target = $('#NMEA1Waiter').get(0);
  if (!spinningWheel) {
	  spinningWheel = new Spinner(opts).spin(target);
  } else {
  	  spinningWheel.spin(target);
  }
  return spinningWheel;
}

function timeout() {
  	spinningWheel.stop();
}

function GetStatus() {
	var spinner = showSpinningWheel('NMEA1Waiter');
	setTimeout("timeout()", 10000);
	
        var params = "id=this";
        $.ajax({
                url: "/lua/getStatus",
		type: "GET",
		data: params,
		dataType: "json",
                success: function(res) {
                	spinner.stop();
			updateStatus(res);
                },
		error: function(xhr, status, thrown) {
                	spinner.stop();
			alert(status);
		}
	});
}

	function progressHandlingFunction(e){
  	  if(e.lengthComputable){
	    $('progress').attr({value:e.loaded,max:e.total});
	  }
	}
	
	function uploadAndUpgrade() { 

        $('progress').show();
        var formData = new FormData($('#fileUploadForm')[0]);
        $.ajax({
          	url: '/lua/upload',  //Server script to process data
	          type: 'POST',
          	dataType: 'json',
          	xhr: function() {  // Custom XMLHttpRequest

            	var myXhr = $.ajaxSettings.xhr();
            	if(myXhr.upload) { // Check if upload property exists
              	myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
            	}
            	return myXhr;
         	},
          // Ajax events
         	beforeSend: function() {                                                                                                  
            $('progress').attr({value:0, max:100});
	        },
        	success: function(res) {
        
            console.log("%j", res);

        	  if(res.error) {                                                                                                   
        	    alert(res.error);                                                                                         
        	  } else {
        	    alert("Successful upload. Going into actual upgrade procedure and reboot of new version " 
                + res.success + " now. Please be patient."); 
         	  }

    	      $( "#upgrade-dialog" ).hide();
            $('progress').attr({value:100, max:100});
      	},
      	error: function(xhr, status, thrown) {
     	    $( "#upgrade-dialog" ).hide();
          $('progress').attr({value:0, max:100});
          console.log("error: %j %j", thrown, status);
          console.log(thrown);
          console.log(status);
	},
	// Form data
	data: formData,
	// Options to tell jQuery not to process data or worry about content-type.
	cache: false,
	contentType: false,
	processData: false
	});
};

$(function() {                                                    
        $('#fileUpload').click(function() {$ ('#upgrade-dialog').show() });
});

