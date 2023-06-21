var _0x5e75 = ["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x73\x6C\x69\x63\x65", "\x30", "\x72\x6F\x75\x6E\x64", "\x6D\x69\x6E", "\x6D\x61\x78", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x64\x69\x76", "\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68", "\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74", "\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74", "\x72\x61\x6E\x64\x6F\x6D", "\x73\x74\x61\x72\x66\x69\x65\x6C\x64", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x73\x74\x79\x6C\x65", "\x61\x62\x73\x6F\x6C\x75\x74\x65", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x72\x67\x62\x28\x32\x2C\x32\x2C\x32\x29", "\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65", "\x72\x67\x62\x28\x32\x32\x32\x2C\x32\x32\x32\x2C\x32\x32\x32\x29", "\x66\x69\x6C\x6C\x52\x65\x63\x74", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x69\x6E\x65\x54\x6F", "\x73\x74\x72\x6F\x6B\x65", "\x63\x6C\x6F\x73\x65\x50\x61\x74\x68", "\x61\x6E\x69\x6D\x28\x29", "\x77\x3D", "\x69\x6E\x64\x65\x78\x4F\x66", "\x26", "\x6C\x65\x6E\x67\x74\x68", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x68\x3D", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x6E\x3D"];

function $i(_0x2056x2) {
    return document[_0x5e75[0]](_0x2056x2)
}

function $r(_0x2056x2, _0x2056x4) {
    document[_0x5e75[0]](_0x2056x2)[_0x5e75[1]](document[_0x5e75[0]](_0x2056x4))
}

function $t(_0x2056x2) {
    return document[_0x5e75[2]](_0x2056x2)
}

function $c(_0x2056x2) {
    return String[_0x5e75[3]](_0x2056x2)
}

function $h(_0x2056x2) {
    return (_0x5e75[5] + Math[_0x5e75[8]](0, Math[_0x5e75[7]](255, Math[_0x5e75[6]](_0x2056x2))).toString(16))[_0x5e75[4]](-2)
}

function _i(_0x2056x2, _0x2056x4) {
    $t(_0x5e75[10])[_0x2056x2][_0x5e75[9]] += _0x2056x4
}

function _h(_0x2056x2) {
    return hires ? Math[_0x5e75[6]](_0x2056x2 / 2) : _0x2056x2
}

function get_screen_size() {
    var _0x2056x2 = document[_0x5e75[12]][_0x5e75[11]],
        _0x2056x4 = document[_0x5e75[12]][_0x5e75[13]];
    return Array(_0x2056x2, _0x2056x4)
}

function init() {
    for (var _0x2056x2 = 0; n > _0x2056x2; _0x2056x2++) {
        star[_0x2056x2] = new Array(5), star[_0x2056x2][0] = Math[_0x5e75[14]]() * w * 2 - 2 * x, star[_0x2056x2][1] = Math[_0x5e75[14]]() * h * 2 - 2 * y, star[_0x2056x2][2] = Math[_0x5e75[6]](Math[_0x5e75[14]]() * z), star[_0x2056x2][3] = 0, star[_0x2056x2][4] = 0
    };
    var _0x2056x4 = $i(_0x5e75[15]);
    _0x2056x4[_0x5e75[17]][_0x5e75[16]] = _0x5e75[18], _0x2056x4[_0x5e75[19]] = w, _0x2056x4[_0x5e75[20]] = h, context = _0x2056x4[_0x5e75[22]](_0x5e75[21]), context[_0x5e75[23]] = _0x5e75[24], context[_0x5e75[25]] = _0x5e75[26]
}

function anim() {
    mouse_x = cursor_x - x, mouse_y = cursor_y - y, context[_0x5e75[27]](0, 0, w, h);
    for (var _0x2056x2 = 0; n > _0x2056x2; _0x2056x2++) {
        test = !0, star_x_save = star[_0x2056x2][3], star_y_save = star[_0x2056x2][4], star[_0x2056x2][0] += mouse_x >> 4, star[_0x2056x2][0] > x << 1 && (star[_0x2056x2][0] -= w << 1, test = !1), star[_0x2056x2][0] < -x << 1 && (star[_0x2056x2][0] += w << 1, test = !1), star[_0x2056x2][1] += mouse_y >> 4, star[_0x2056x2][1] > y << 1 && (star[_0x2056x2][1] -= h << 1, test = !1), star[_0x2056x2][1] < -y << 1 && (star[_0x2056x2][1] += h << 1, test = !1), star[_0x2056x2][2] -= star_speed, star[_0x2056x2][2] > z && (star[_0x2056x2][2] -= z, test = !1), star[_0x2056x2][2] < 0 && (star[_0x2056x2][2] += z, test = !1), star[_0x2056x2][3] = x + star[_0x2056x2][0] / star[_0x2056x2][2] * star_ratio, star[_0x2056x2][4] = y + star[_0x2056x2][1] / star[_0x2056x2][2] * star_ratio, star_x_save > 0 && w > star_x_save && star_y_save > 0 && h > star_y_save && test && (context[_0x5e75[28]] = 2 * (1 - star_color_ratio * star[_0x2056x2][2]), context[_0x5e75[29]](), context[_0x5e75[30]](star_x_save, star_y_save), context[_0x5e75[31]](star[_0x2056x2][3], star[_0x2056x2][4]), context[_0x5e75[32]](), context[_0x5e75[33]]())
    };
    timeout = setTimeout(_0x5e75[34], fps)
}

function start() {
    resize(), anim()
}

function resize() {
    w = parseInt(-1 != url[_0x5e75[36]](_0x5e75[35]) ? url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[35]) + 2, -1 != url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[35]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) ? url[_0x5e75[36]](_0x5e75[35]) + 2 + url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[35]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) : url[_0x5e75[38]]) : get_screen_size()[0]), h = parseInt(-1 != url[_0x5e75[36]](_0x5e75[40]) ? url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[40]) + 2, -1 != url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[40]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) ? url[_0x5e75[36]](_0x5e75[40]) + 2 + url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[40]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) : url[_0x5e75[38]]) : get_screen_size()[1]), x = Math[_0x5e75[6]](w / 2), y = Math[_0x5e75[6]](h / 2), z = (w + h) / 2, star_color_ratio = 1 / z, cursor_x = x, cursor_y = y, init()
}

var url = document[_0x5e75[42]][_0x5e75[41]],
    flag = !0,
    test = !0,
    n = parseInt(-1 != url[_0x5e75[36]](_0x5e75[43]) ? url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[43]) + 2, -1 != url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[43]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) ? url[_0x5e75[36]](_0x5e75[43]) + 2 + url[_0x5e75[39]](url[_0x5e75[36]](_0x5e75[43]) + 2, url[_0x5e75[38]])[_0x5e75[36]](_0x5e75[37]) : url[_0x5e75[38]]) : 812),
    w = 0,
    h = 0,
    x = 0,
    y = 0,
    z = 0,
    star_color_ratio = 0,
    star_x_save, star_y_save, star_ratio = 115,
    star_speed = 2,
    star_speed_save = 0,
    star = new Array(n),
    color, opacity = 0.1,
    cursor_x = 0,
    cursor_y = 0,
    mouse_x = 0,
    mouse_y = 0,
    canvas_x = 0,
    canvas_y = 0,
    canvas_w = 0,
    canvas_h = 0,
    context, key, ctrl, timeout, fps = 0;
start()