function getDomainName(hostName) <!-- making sure we set the cookie at the base level domain -->
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}

function getCookie(cookie_name) {
  let name = cookie_name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

function generateCookie(cookie_name) {
  let cookie = getCookie(cookie_name);
  if (cookie == "") { <!-- check to see if cookie esists -->
    let cookie_id = create_UUID();
    let cookie_domain = getDomainName(window.location.hostname);
    let cookie_expiration = 365;

    const d = new Date();
    d.setTime(d.getTime() + cookie_expiration * 24 * 60 * 60 * 1000);
    let expires = ";expires=" + d.toUTCString();
    document.cookie =
      cookie_name +
      "=" +
      cookie_id +
      ";" +
      "Domain=" +
      cookie_domain +
      ";" + 
      cookie_expiration +
      ";path=/" +
      expires;
  }
}

generateCookie('mcpGuid');
getCookie('mcpGuid');