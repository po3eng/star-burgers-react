type TCokieProps = {
  expires?: string | Date;
  path?: string;
} & { [key: string]: string };

export function setCookie(name: string, value: string, props?: TCokieProps) {
  props = props || { path: "/" };
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp instanceof Date && exp) {
    props.expires = exp.toUTCString();
  }

  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (!propValue) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}
export function removeCookie(name: string) {
  console.log(name);
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
export function getCookie(name: string) {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
