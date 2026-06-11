var Br = (L => (L[L.UNKNOWN = 0] = "UNKNOWN",
L[L.AE_ENABLE = 1] = "AE_ENABLE",
L[L.AE_STATE = 2] = "AE_STATE",
L[L.AE_METERING_MODE = 3] = "AE_METERING_MODE",
L[L.AE_CONSTRAINT_MODE = 4] = "AE_CONSTRAINT_MODE",
L[L.AE_EXPOSURE_MODE = 5] = "AE_EXPOSURE_MODE",
L[L.EXPOSURE_VALUE = 6] = "EXPOSURE_VALUE",
L[L.EXPOSURE_TIME = 7] = "EXPOSURE_TIME",
L[L.EXPOSURE_TIME_MODE = 8] = "EXPOSURE_TIME_MODE",
L[L.ANALOGUE_GAIN = 9] = "ANALOGUE_GAIN",
L[L.ANALOGUE_GAIN_MODE = 10] = "ANALOGUE_GAIN_MODE",
L[L.AE_FLICKER_MODE = 11] = "AE_FLICKER_MODE",
L[L.AE_FLICKER_PERIOD = 12] = "AE_FLICKER_PERIOD",
L[L.AE_FLICKER_DETECTED = 13] = "AE_FLICKER_DETECTED",
L[L.BRIGHTNESS = 14] = "BRIGHTNESS",
L[L.CONTRAST = 15] = "CONTRAST",
L[L.LUX = 16] = "LUX",
L[L.AWB_ENABLE = 17] = "AWB_ENABLE",
L[L.AWB_MODE = 18] = "AWB_MODE",
L[L.AWB_LOCKED = 19] = "AWB_LOCKED",
L[L.COLOUR_GAINS = 20] = "COLOUR_GAINS",
L[L.COLOUR_TEMPERATURE = 21] = "COLOUR_TEMPERATURE",
L[L.SATURATION = 22] = "SATURATION",
L[L.SENSOR_BLACK_LEVELS = 23] = "SENSOR_BLACK_LEVELS",
L[L.SHARPNESS = 24] = "SHARPNESS",
L[L.FOCUS_FO_M = 25] = "FOCUS_FO_M",
L[L.COLOUR_CORRECTION_MATRIX = 26] = "COLOUR_CORRECTION_MATRIX",
L[L.SCALER_CROP = 27] = "SCALER_CROP",
L[L.DIGITAL_GAIN = 28] = "DIGITAL_GAIN",
L[L.FRAME_DURATION = 29] = "FRAME_DURATION",
L[L.FRAME_DURATION_LIMITS = 30] = "FRAME_DURATION_LIMITS",
L[L.SENSOR_TEMPERATURE = 31] = "SENSOR_TEMPERATURE",
L[L.SENSOR_TIMESTAMP = 32] = "SENSOR_TIMESTAMP",
L[L.AF_MODE = 33] = "AF_MODE",
L[L.AF_RANGE = 34] = "AF_RANGE",
L[L.AF_SPEED = 35] = "AF_SPEED",
L[L.AF_METERING = 36] = "AF_METERING",
L[L.AF_WINDOWS = 37] = "AF_WINDOWS",
L[L.AF_TRIGGER = 38] = "AF_TRIGGER",
L[L.AF_PAUSE = 39] = "AF_PAUSE",
L[L.LENS_POSITION = 40] = "LENS_POSITION",
L[L.AF_STATE = 41] = "AF_STATE",
L[L.AF_PAUSE_STATE = 42] = "AF_PAUSE_STATE",
L[L.HDR_MODE = 43] = "HDR_MODE",
L[L.HDR_CHANNEL = 44] = "HDR_CHANNEL",
L[L.GAMMA = 45] = "GAMMA",
L[L.DEBUG_METADATA_ENABLE = 46] = "DEBUG_METADATA_ENABLE",
L[L.FRAME_WALL_CLOCK = 47] = "FRAME_WALL_CLOCK",
L[L.UNRECOGNIZED = -1] = "UNRECOGNIZED",
L))(Br || {});
var xc = {
    1: "Auto Exposure Enable",
    3: "AE Metering Mode",
    4: "AE Constraint Mode",
    5: "AE Exposure Mode",
    6: "Exposure Value",
    7: "Exposure Time",
    8: "Exposure Time Mode",
    9: "Analogue Gain",
    10: "Analogue Gain Mode",
    11: "AE Flicker Mode",
    12: "AE Flicker Period",
    13: "AE Flicker Detected",
    14: "Brightness",
    15: "Contrast",
    16: "Lux",
    17: "AWB Enable",
    18: "AWB Mode",
    19: "AWB Locked",
    20: "Colour Gains",
    21: "Colour Temperature",
    22: "Saturation",
    23: "Sensor Black Levels",
    24: "Sharpness",
    25: "Focus (FO_M)",
    26: "Colour Correction Matrix",
    27: "Scaler Crop",
    28: "Digital Gain",
    29: "Frame Duration",
    30: "Frame Duration Limits",
    31: "Sensor Temperature",
    32: "Sensor Timestamp",
    33: "Auto Focus Mode",
    34: "Auto Focus Range",
    35: "Auto Focus Speed",
    36: "Auto Focus Metering",
    37: "Auto Focus Windows",
    38: "Auto Focus Trigger",
    39: "Auto Focus Pause",
    40: "Lens Position",
    41: "Auto Focus State",
    42: "Auto Focus Pause State",
    43: "HDR Mode",
    44: "HDR Channel",
    45: "Gamma",
    46: "Debug Metadata Enable",
    47: "Frame Wall Clock",
    2: "AE State"
}
  , Dc = {
    2: {
        0: "Idle",
        1: "Searching",
        2: "Converged"
    },
    3: {
        0: "Centre Weighted",
        1: "Spot",
        2: "Matrix",
        3: "Custom"
    },
    4: {
        0: "Normal",
        1: "Highlight",
        2: "Shadows",
        3: "Custom"
    },
    5: {
        0: "Normal",
        1: "Short",
        2: "Long",
        3: "Custom"
    },
    8: {
        0: "Auto",
        1: "Manual"
    },
    10: {
        0: "Auto",
        1: "Manual"
    },
    11: {
        0: "Off",
        1: "Manual",
        2: "Auto"
    },
    18: {
        0: "Auto",
        1: "Incandescent",
        2: "Tungsten",
        3: "Fluorescent",
        4: "Indoor",
        5: "Daylight",
        6: "Cloudy",
        7: "Custom"
    },
    33: {
        0: "Manual",
        1: "Auto",
        2: "Continuous"
    },
    34: {
        0: "Normal",
        1: "Macro",
        2: "Full"
    },
    35: {
        0: "Normal",
        1: "Fast"
    },
    36: {
        0: "Auto",
        1: "Windows"
    },
    38: {
        0: "Start",
        1: "Cancel"
    },
    39: {
        0: "Immediate",
        1: "Deferred",
        2: "Resume"
    },
    41: {
        0: "Idle",
        1: "Scanning",
        2: "Focused",
        3: "Failed"
    },
    42: {
        0: "Running",
        1: "Pausing",
        2: "Paused"
    },
    43: {
        0: "Off",
        1: "Multi-Exposure (Unmerged)",
        2: "Multi-Exposure",
        3: "Single Exposure",
        4: "Night"
    },
    44: {
        0: "None",
        1: "Short",
        2: "Medium",
        3: "Long"
    }
};
function ts() {
    let e = 0
      , t = 0;
    for (let i = 0; i < 28; i += 7) {
        let s = this.buf[this.pos++];
        if (e |= (s & 127) << i,
        (s & 128) == 0)
            return this.assertBounds(),
            [e, t]
    }
    let n = this.buf[this.pos++];
    if (e |= (n & 15) << 28,
    t = (n & 112) >> 4,
    (n & 128) == 0)
        return this.assertBounds(),
        [e, t];
    for (let i = 3; i <= 31; i += 7) {
        let s = this.buf[this.pos++];
        if (t |= (s & 127) << i,
        (s & 128) == 0)
            return this.assertBounds(),
            [e, t]
    }
    throw new Error("invalid varint")
}
function On(e, t, n) {
    for (let r = 0; r < 28; r = r + 7) {
        let o = e >>> r
          , a = !(!(o >>> 7) && t == 0)
          , l = (a ? o | 128 : o) & 255;
        if (n.push(l),
        !a)
            return
    }
    let i = e >>> 28 & 15 | (t & 7) << 4
      , s = t >> 3 != 0;
    if (n.push((s ? i | 128 : i) & 255),
    !!s) {
        for (let r = 3; r < 31; r = r + 7) {
            let o = t >>> r
              , a = !!(o >>> 7)
              , l = (a ? o | 128 : o) & 255;
            if (n.push(l),
            !a)
                return
        }
        n.push(t >>> 31 & 1)
    }
}
var An = 4294967296;
function Fr(e) {
    let t = e[0] === "-";
    t && (e = e.slice(1));
    let n = 1e6
      , i = 0
      , s = 0;
    function r(o, a) {
        let l = Number(e.slice(o, a));
        s *= n,
        i = i * n + l,
        i >= An && (s = s + (i / An | 0),
        i = i % An)
    }
    return r(-24, -18),
    r(-18, -12),
    r(-12, -6),
    r(-6),
    t ? rs(i, s) : jr(i, s)
}
function ns(e, t) {
    let n = jr(e, t)
      , i = n.hi & 2147483648;
    i && (n = rs(n.lo, n.hi));
    let s = qr(n.lo, n.hi);
    return i ? "-" + s : s
}
function qr(e, t) {
    if ({lo: e, hi: t} = Lc(e, t),
    t <= 2097151)
        return String(An * t + e);
    let n = e & 16777215
      , i = (e >>> 24 | t << 8) & 16777215
      , s = t >> 16 & 65535
      , r = n + i * 6777216 + s * 6710656
      , o = i + s * 8147497
      , a = s * 2
      , l = 1e7;
    return r >= l && (o += Math.floor(r / l),
    r %= l),
    o >= l && (a += Math.floor(o / l),
    o %= l),
    a.toString() + es(o) + es(r)
}
function Lc(e, t) {
    return {
        lo: e >>> 0,
        hi: t >>> 0
    }
}
function jr(e, t) {
    return {
        lo: e | 0,
        hi: t | 0
    }
}
function rs(e, t) {
    return t = ~t,
    e ? e = ~e + 1 : t += 1,
    jr(e, t)
}
var es = e => {
    let t = String(e);
    return "0000000".slice(t.length) + t
}
;
function Wr(e, t) {
    if (e >= 0) {
        for (; e > 127; )
            t.push(e & 127 | 128),
            e = e >>> 7;
        t.push(e)
    } else {
        for (let n = 0; n < 9; n++)
            t.push(e & 127 | 128),
            e = e >> 7;
        t.push(1)
    }
}
function is() {
    let e = this.buf[this.pos++]
      , t = e & 127;
    if ((e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 7,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 14,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 21,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    e = this.buf[this.pos++],
    t |= (e & 15) << 28;
    for (let n = 5; (e & 128) !== 0 && n < 10; n++)
        e = this.buf[this.pos++];
    if ((e & 128) != 0)
        throw new Error("invalid varint");
    return this.assertBounds(),
    t >>> 0
}
var Ze = Bc();
function Bc() {
    let e = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (!!globalThis.Deno || typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        let n = BigInt("-9223372036854775808")
          , i = BigInt("9223372036854775807")
          , s = BigInt("0")
          , r = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse(o) {
                let a = typeof o == "bigint" ? o : BigInt(o);
                if (a > i || a < n)
                    throw new Error(`invalid int64: ${o}`);
                return a
            },
            uParse(o) {
                let a = typeof o == "bigint" ? o : BigInt(o);
                if (a > r || a < s)
                    throw new Error(`invalid uint64: ${o}`);
                return a
            },
            enc(o) {
                return e.setBigInt64(0, this.parse(o), !0),
                {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            uEnc(o) {
                return e.setBigInt64(0, this.uParse(o), !0),
                {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            dec(o, a) {
                return e.setInt32(0, o, !0),
                e.setInt32(4, a, !0),
                e.getBigInt64(0, !0)
            },
            uDec(o, a) {
                return e.setInt32(0, o, !0),
                e.setInt32(4, a, !0),
                e.getBigUint64(0, !0)
            }
        }
    }
    return {
        zero: "0",
        supported: !1,
        parse(n) {
            return typeof n != "string" && (n = n.toString()),
            os(n),
            n
        },
        uParse(n) {
            return typeof n != "string" && (n = n.toString()),
            ss(n),
            n
        },
        enc(n) {
            return typeof n != "string" && (n = n.toString()),
            os(n),
            Fr(n)
        },
        uEnc(n) {
            return typeof n != "string" && (n = n.toString()),
            ss(n),
            Fr(n)
        },
        dec(n, i) {
            return ns(n, i)
        },
        uDec(n, i) {
            return qr(n, i)
        }
    }
}
function os(e) {
    if (!/^-?[0-9]+$/.test(e))
        throw new Error("invalid int64: " + e)
}
function ss(e) {
    if (!/^[0-9]+$/.test(e))
        throw new Error("invalid uint64: " + e)
}
var Vr = Symbol.for("@bufbuild/protobuf/text-encoding");
function Gr() {
    if (globalThis[Vr] == null) {
        let e = new globalThis.TextEncoder
          , t = new globalThis.TextDecoder;
        globalThis[Vr] = {
            encodeUtf8(n) {
                return e.encode(n)
            },
            decodeUtf8(n) {
                return t.decode(n)
            },
            checkUtf8(n) {
                try {
                    return encodeURIComponent(n),
                    !0
                } catch {
                    return !1
                }
            }
        }
    }
    return globalThis[Vr]
}
var Ot;
(function(e) {
    e[e.Varint = 0] = "Varint",
    e[e.Bit64 = 1] = "Bit64",
    e[e.LengthDelimited = 2] = "LengthDelimited",
    e[e.StartGroup = 3] = "StartGroup",
    e[e.EndGroup = 4] = "EndGroup",
    e[e.Bit32 = 5] = "Bit32"
}
)(Ot || (Ot = {}));
var Fc = 34028234663852886e22
  , qc = -34028234663852886e22
  , jc = 4294967295
  , Wc = 2147483647
  , Vc = -2147483648
  , $e = class {
    constructor(t=Gr().encodeUtf8) {
        this.encodeUtf8 = t,
        this.stack = [],
        this.chunks = [],
        this.buf = []
    }
    finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
        this.buf = []);
        let t = 0;
        for (let s = 0; s < this.chunks.length; s++)
            t += this.chunks[s].length;
        let n = new Uint8Array(t)
          , i = 0;
        for (let s = 0; s < this.chunks.length; s++)
            n.set(this.chunks[s], i),
            i += this.chunks[s].length;
        return this.chunks = [],
        n
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }),
        this.chunks = [],
        this.buf = [],
        this
    }
    join() {
        let t = this.finish()
          , n = this.stack.pop();
        if (!n)
            throw new Error("invalid state, fork stack empty");
        return this.chunks = n.chunks,
        this.buf = n.buf,
        this.uint32(t.byteLength),
        this.raw(t)
    }
    tag(t, n) {
        return this.uint32((t << 3 | n) >>> 0)
    }
    raw(t) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
        this.buf = []),
        this.chunks.push(t),
        this
    }
    uint32(t) {
        for (as(t); t > 127; )
            this.buf.push(t & 127 | 128),
            t = t >>> 7;
        return this.buf.push(t),
        this
    }
    int32(t) {
        return Hr(t),
        Wr(t, this.buf),
        this
    }
    bool(t) {
        return this.buf.push(t ? 1 : 0),
        this
    }
    bytes(t) {
        return this.uint32(t.byteLength),
        this.raw(t)
    }
    string(t) {
        let n = this.encodeUtf8(t);
        return this.uint32(n.byteLength),
        this.raw(n)
    }
    float(t) {
        Gc(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, t, !0),
        this.raw(n)
    }
    double(t) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, t, !0),
        this.raw(n)
    }
    fixed32(t) {
        as(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, t, !0),
        this.raw(n)
    }
    sfixed32(t) {
        Hr(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, t, !0),
        this.raw(n)
    }
    sint32(t) {
        return Hr(t),
        t = (t << 1 ^ t >> 31) >>> 0,
        Wr(t, this.buf),
        this
    }
    sfixed64(t) {
        let n = new Uint8Array(8)
          , i = new DataView(n.buffer)
          , s = Ze.enc(t);
        return i.setInt32(0, s.lo, !0),
        i.setInt32(4, s.hi, !0),
        this.raw(n)
    }
    fixed64(t) {
        let n = new Uint8Array(8)
          , i = new DataView(n.buffer)
          , s = Ze.uEnc(t);
        return i.setInt32(0, s.lo, !0),
        i.setInt32(4, s.hi, !0),
        this.raw(n)
    }
    int64(t) {
        let n = Ze.enc(t);
        return On(n.lo, n.hi, this.buf),
        this
    }
    sint64(t) {
        let n = Ze.enc(t)
          , i = n.hi >> 31
          , s = n.lo << 1 ^ i
          , r = (n.hi << 1 | n.lo >>> 31) ^ i;
        return On(s, r, this.buf),
        this
    }
    uint64(t) {
        let n = Ze.uEnc(t);
        return On(n.lo, n.hi, this.buf),
        this
    }
}
  , Oe = class {
    constructor(t, n=Gr().decodeUtf8) {
        this.decodeUtf8 = n,
        this.varint64 = ts,
        this.uint32 = is,
        this.buf = t,
        this.len = t.length,
        this.pos = 0,
        this.view = new DataView(t.buffer,t.byteOffset,t.byteLength)
    }
    tag() {
        let t = this.uint32()
          , n = t >>> 3
          , i = t & 7;
        if (n <= 0 || i < 0 || i > 5)
            throw new Error("illegal tag: field no " + n + " wire type " + i);
        return [n, i]
    }
    skip(t, n) {
        let i = this.pos;
        switch (t) {
        case Ot.Varint:
            for (; this.buf[this.pos++] & 128; )
                ;
            break;
        case Ot.Bit64:
            this.pos += 4;
        case Ot.Bit32:
            this.pos += 4;
            break;
        case Ot.LengthDelimited:
            let s = this.uint32();
            this.pos += s;
            break;
        case Ot.StartGroup:
            for (; ; ) {
                let[r,o] = this.tag();
                if (o === Ot.EndGroup) {
                    if (n !== void 0 && r !== n)
                        throw new Error("invalid end group tag");
                    break
                }
                this.skip(o, r)
            }
            break;
        default:
            throw new Error("cant skip wire type " + t)
        }
        return this.assertBounds(),
        this.buf.subarray(i, this.pos)
    }
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF")
    }
    int32() {
        return this.uint32() | 0
    }
    sint32() {
        let t = this.uint32();
        return t >>> 1 ^ -(t & 1)
    }
    int64() {
        return Ze.dec(...this.varint64())
    }
    uint64() {
        return Ze.uDec(...this.varint64())
    }
    sint64() {
        let[t,n] = this.varint64()
          , i = -(t & 1);
        return t = (t >>> 1 | (n & 1) << 31) ^ i,
        n = n >>> 1 ^ i,
        Ze.dec(t, n)
    }
    bool() {
        let[t,n] = this.varint64();
        return t !== 0 || n !== 0
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0)
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0)
    }
    fixed64() {
        return Ze.uDec(this.sfixed32(), this.sfixed32())
    }
    sfixed64() {
        return Ze.dec(this.sfixed32(), this.sfixed32())
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0)
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0)
    }
    bytes() {
        let t = this.uint32()
          , n = this.pos;
        return this.pos += t,
        this.assertBounds(),
        this.buf.subarray(n, n + t)
    }
    string() {
        return this.decodeUtf8(this.bytes())
    }
}
;
function Hr(e) {
    if (typeof e == "string")
        e = Number(e);
    else if (typeof e != "number")
        throw new Error("invalid int32: " + typeof e);
    if (!Number.isInteger(e) || e > Wc || e < Vc)
        throw new Error("invalid int32: " + e)
}
function as(e) {
    if (typeof e == "string")
        e = Number(e);
    else if (typeof e != "number")
        throw new Error("invalid uint32: " + typeof e);
    if (!Number.isInteger(e) || e > jc || e < 0)
        throw new Error("invalid uint32: " + e)
}
function Gc(e) {
    if (typeof e == "string") {
        let t = e;
        if (e = Number(e),
        Number.isNaN(e) && t !== "NaN")
            throw new Error("invalid float32: " + t)
    } else if (typeof e != "number")
        throw new Error("invalid float32: " + typeof e);
    if (Number.isFinite(e) && (e > Fc || e < qc))
        throw new Error("invalid float32: " + e)
}
var pn = (c => (c[c.DISCONNECT = 0] = "DISCONNECT",
c[c.CONTROL_CAMERA = 1] = "CONTROL_CAMERA",
c[c.TAKE_SNAPSHOT = 2] = "TAKE_SNAPSHOT",
c[c.QUERY_FILE = 3] = "QUERY_FILE",
c[c.TRANSFER_FILE = 4] = "TRANSFER_FILE",
c[c.START_RECORDING = 5] = "START_RECORDING",
c[c.STOP_RECORDING = 6] = "STOP_RECORDING",
c[c.CUSTOM = 100] = "CUSTOM",
c[c.UNRECOGNIZED = -1] = "UNRECOGNIZED",
c))(pn || {});
function ls() {
    return {
        isRecording: !1,
        filepath: ""
    }
}
var Pn = {
    encode(e, t=new $e) {
        return e.isRecording !== !1 && t.uint32(8).bool(e.isRecording),
        e.filepath !== "" && t.uint32(18).string(e.filepath),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = ls();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.isRecording = n.bool();
                    continue
                }
            case 2:
                {
                    if (r !== 18)
                        break;
                    s.filepath = n.string();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Pn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = ls();
        return t.isRecording = e.isRecording ?? !1,
        t.filepath = e.filepath ?? "",
        t
    }
};
function cs() {
    return {
        reason: 0
    }
}
var en = {
    encode(e, t=new $e) {
        return e.reason !== 0 && t.uint32(8).int32(e.reason),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = cs();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.reason = n.int32();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return en.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = cs();
        return t.reason = e.reason ?? 0,
        t
    }
};
function us() {
    return {
        id: 0,
        value: 0
    }
}
var Nn = {
    encode(e, t=new $e) {
        return e.id !== 0 && t.uint32(8).int32(e.id),
        e.value !== 0 && t.uint32(16).uint32(e.value),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = us();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.id = n.int32();
                    continue
                }
            case 2:
                {
                    if (r !== 16)
                        break;
                    s.value = n.uint32();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Nn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = us();
        return t.id = e.id ?? 0,
        t.value = e.value ?? 0,
        t
    }
};
function hs() {
    return {
        quality: 0
    }
}
var Cn = {
    encode(e, t=new $e) {
        return e.quality !== 0 && t.uint32(8).uint32(e.quality),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = hs();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.quality = n.uint32();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Cn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = hs();
        return t.quality = e.quality ?? 0,
        t
    }
};
function ds() {
    return {
        type: 0,
        parameter: ""
    }
}
var tn = {
    encode(e, t=new $e) {
        return e.type !== 0 && t.uint32(8).int32(e.type),
        e.parameter !== "" && t.uint32(18).string(e.parameter),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = ds();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.type = n.int32();
                    continue
                }
            case 2:
                {
                    if (r !== 18)
                        break;
                    s.parameter = n.string();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return tn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = ds();
        return t.type = e.type ?? 0,
        t.parameter = e.parameter ?? "",
        t
    }
};
function fs() {
    return {
        filepath: "",
        durationSec: 0,
        thumbnail: ""
    }
}
var fn = {
    encode(e, t=new $e) {
        return e.filepath !== "" && t.uint32(10).string(e.filepath),
        e.durationSec !== 0 && t.uint32(16).uint32(e.durationSec),
        e.thumbnail !== "" && t.uint32(26).string(e.thumbnail),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = fs();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.filepath = n.string();
                    continue
                }
            case 2:
                {
                    if (r !== 16)
                        break;
                    s.durationSec = n.uint32();
                    continue
                }
            case 3:
                {
                    if (r !== 26)
                        break;
                    s.thumbnail = n.string();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return fn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = fs();
        return t.filepath = e.filepath ?? "",
        t.durationSec = e.durationSec ?? 0,
        t.thumbnail = e.thumbnail ?? "",
        t
    }
};
function ps() {
    return {
        files: []
    }
}
var Ln = {
    encode(e, t=new $e) {
        for (let n of e.files)
            fn.encode(n, t.uint32(10).fork()).join();
        return t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = ps();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.files.push(fn.decode(n, n.uint32()));
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Ln.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = ps();
        return t.files = e.files?.map(n => fn.fromPartial(n)) || [],
        t
    }
};
function ms() {
    return {
        filepath: ""
    }
}
var Un = {
    encode(e, t=new $e) {
        return e.filepath !== "" && t.uint32(10).string(e.filepath),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = ms();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.filepath = n.string();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Un.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = ms();
        return t.filepath = e.filepath ?? "",
        t
    }
};
function gs() {
    return {
        type: 0,
        disconnectionRequest: void 0,
        controlCameraRequest: void 0,
        takeSnapshotRequest: void 0,
        queryFileRequest: void 0,
        transferFileRequest: void 0,
        recordingResponse: void 0,
        streamHeader: void 0,
        streamChunk: void 0,
        streamTrailer: void 0,
        customCommand: void 0
    }
}
var xe = {
    encode(e, t=new $e) {
        return e.type !== 0 && t.uint32(8).int32(e.type),
        e.disconnectionRequest !== void 0 && en.encode(e.disconnectionRequest, t.uint32(18).fork()).join(),
        e.controlCameraRequest !== void 0 && Nn.encode(e.controlCameraRequest, t.uint32(26).fork()).join(),
        e.takeSnapshotRequest !== void 0 && Cn.encode(e.takeSnapshotRequest, t.uint32(34).fork()).join(),
        e.queryFileRequest !== void 0 && tn.encode(e.queryFileRequest, t.uint32(42).fork()).join(),
        e.transferFileRequest !== void 0 && Un.encode(e.transferFileRequest, t.uint32(50).fork()).join(),
        e.recordingResponse !== void 0 && Pn.encode(e.recordingResponse, t.uint32(82).fork()).join(),
        e.streamHeader !== void 0 && Mn.encode(e.streamHeader, t.uint32(58).fork()).join(),
        e.streamChunk !== void 0 && xn.encode(e.streamChunk, t.uint32(66).fork()).join(),
        e.streamTrailer !== void 0 && Dn.encode(e.streamTrailer, t.uint32(74).fork()).join(),
        e.customCommand !== void 0 && t.uint32(802).bytes(e.customCommand),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = gs();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 8)
                        break;
                    s.type = n.int32();
                    continue
                }
            case 2:
                {
                    if (r !== 18)
                        break;
                    s.disconnectionRequest = en.decode(n, n.uint32());
                    continue
                }
            case 3:
                {
                    if (r !== 26)
                        break;
                    s.controlCameraRequest = Nn.decode(n, n.uint32());
                    continue
                }
            case 4:
                {
                    if (r !== 34)
                        break;
                    s.takeSnapshotRequest = Cn.decode(n, n.uint32());
                    continue
                }
            case 5:
                {
                    if (r !== 42)
                        break;
                    s.queryFileRequest = tn.decode(n, n.uint32());
                    continue
                }
            case 6:
                {
                    if (r !== 50)
                        break;
                    s.transferFileRequest = Un.decode(n, n.uint32());
                    continue
                }
            case 10:
                {
                    if (r !== 82)
                        break;
                    s.recordingResponse = Pn.decode(n, n.uint32());
                    continue
                }
            case 7:
                {
                    if (r !== 58)
                        break;
                    s.streamHeader = Mn.decode(n, n.uint32());
                    continue
                }
            case 8:
                {
                    if (r !== 66)
                        break;
                    s.streamChunk = xn.decode(n, n.uint32());
                    continue
                }
            case 9:
                {
                    if (r !== 74)
                        break;
                    s.streamTrailer = Dn.decode(n, n.uint32());
                    continue
                }
            case 100:
                {
                    if (r !== 802)
                        break;
                    s.customCommand = n.bytes();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return xe.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = gs();
        return t.type = e.type ?? 0,
        t.disconnectionRequest = e.disconnectionRequest !== void 0 && e.disconnectionRequest !== null ? en.fromPartial(e.disconnectionRequest) : void 0,
        t.controlCameraRequest = e.controlCameraRequest !== void 0 && e.controlCameraRequest !== null ? Nn.fromPartial(e.controlCameraRequest) : void 0,
        t.takeSnapshotRequest = e.takeSnapshotRequest !== void 0 && e.takeSnapshotRequest !== null ? Cn.fromPartial(e.takeSnapshotRequest) : void 0,
        t.queryFileRequest = e.queryFileRequest !== void 0 && e.queryFileRequest !== null ? tn.fromPartial(e.queryFileRequest) : void 0,
        t.transferFileRequest = e.transferFileRequest !== void 0 && e.transferFileRequest !== null ? Un.fromPartial(e.transferFileRequest) : void 0,
        t.recordingResponse = e.recordingResponse !== void 0 && e.recordingResponse !== null ? Pn.fromPartial(e.recordingResponse) : void 0,
        t.streamHeader = e.streamHeader !== void 0 && e.streamHeader !== null ? Mn.fromPartial(e.streamHeader) : void 0,
        t.streamChunk = e.streamChunk !== void 0 && e.streamChunk !== null ? xn.fromPartial(e.streamChunk) : void 0,
        t.streamTrailer = e.streamTrailer !== void 0 && e.streamTrailer !== null ? Dn.fromPartial(e.streamTrailer) : void 0,
        t.customCommand = e.customCommand ?? void 0,
        t
    }
};
function ys() {
    return {
        streamId: "",
        totalLength: 0
    }
}
var Mn = {
    encode(e, t=new $e) {
        return e.streamId !== "" && t.uint32(10).string(e.streamId),
        e.totalLength !== 0 && t.uint32(16).uint64(e.totalLength),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = ys();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.streamId = n.string();
                    continue
                }
            case 2:
                {
                    if (r !== 16)
                        break;
                    s.totalLength = Ts(n.uint64());
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Mn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = ys();
        return t.streamId = e.streamId ?? "",
        t.totalLength = e.totalLength ?? 0,
        t
    }
};
function _s() {
    return {
        streamId: "",
        offset: 0,
        data: new Uint8Array(0)
    }
}
var xn = {
    encode(e, t=new $e) {
        return e.streamId !== "" && t.uint32(10).string(e.streamId),
        e.offset !== 0 && t.uint32(16).uint64(e.offset),
        e.data.length !== 0 && t.uint32(26).bytes(e.data),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = _s();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.streamId = n.string();
                    continue
                }
            case 2:
                {
                    if (r !== 16)
                        break;
                    s.offset = Ts(n.uint64());
                    continue
                }
            case 3:
                {
                    if (r !== 26)
                        break;
                    s.data = n.bytes();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return xn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = _s();
        return t.streamId = e.streamId ?? "",
        t.offset = e.offset ?? 0,
        t.data = e.data ?? new Uint8Array(0),
        t
    }
};
function bs() {
    return {
        streamId: "",
        reason: ""
    }
}
var Dn = {
    encode(e, t=new $e) {
        return e.streamId !== "" && t.uint32(10).string(e.streamId),
        e.reason !== "" && t.uint32(18).string(e.reason),
        t
    },
    decode(e, t) {
        let n = e instanceof Oe ? e : new Oe(e)
          , i = t === void 0 ? n.len : n.pos + t
          , s = bs();
        for (; n.pos < i; ) {
            let r = n.uint32();
            switch (r >>> 3) {
            case 1:
                {
                    if (r !== 10)
                        break;
                    s.streamId = n.string();
                    continue
                }
            case 2:
                {
                    if (r !== 18)
                        break;
                    s.reason = n.string();
                    continue
                }
            }
            if ((r & 7) === 4 || r === 0)
                break;
            n.skip(r & 7)
        }
        return s
    },
    create(e) {
        return Dn.fromPartial(e ?? {})
    },
    fromPartial(e) {
        let t = bs();
        return t.streamId = e.streamId ?? "",
        t.reason = e.reason ?? "",
        t
    }
};
function Ts(e) {
    let t = globalThis.Number(e.toString());
    if (t > globalThis.Number.MAX_SAFE_INTEGER)
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    if (t < globalThis.Number.MIN_SAFE_INTEGER)
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    return t
}
var Dt = class {
    totalLength = 0;
    receivedLength = 0;
    fileBuffer = null;
    onProgress;
    onComplete;
    constructor(t) {
        this.onProgress = t.onProgress,
        this.onComplete = t.onComplete
    }
    receiveData(t) {
        if (t.streamHeader) {
            this.totalLength = t.streamHeader.totalLength,
            this.fileBuffer = new Uint8Array(this.totalLength),
            this.receivedLength = 0;
            return
        }
        if (t.streamChunk && this.fileBuffer) {
            let n = t.streamChunk.offset
              , i = t.streamChunk.data;
            this.fileBuffer.set(i, n),
            this.receivedLength += i.length,
            this.onProgress?.(this.receivedLength, this.totalLength),
            this.receivedLength >= this.totalLength && this.onComplete(this.fileBuffer);
            return
        }
        t.streamTrailer && this.reset()
    }
    reset() {
        this.fileBuffer = null,
        this.totalLength = 0,
        this.receivedLength = 0
    }
}
;
var Hc = "H264"
  , $c = ["H264", "VP8", "VP9", "AV1"];
function Kc(e, t) {
    let n = i => {
        let s = new RegExp("(a=rtpmap:(\\d*) " + t + "/90000\\r\\n)")
          , r = i.match(s);
        if (r == null || r.length <= 2)
            return i;
        let o = r[2]
          , a = i.replace(s, "")
          , l = new RegExp("(a=rtcp-fb:" + o + `.*\r
)`,"g");
        a = a.replace(l, "");
        let c = new RegExp("(a=fmtp:" + o + `.*\r
)`,"g");
        a = a.replace(c, "");
        let u = new RegExp("(a=fmtp:(\\d*) apt=" + o + "\\r\\n)")
          , d = a.match(u)
          , m = "";
        if (d != null && d.length >= 3) {
            m = d[2],
            a = a.replace(u, "");
            let g = new RegExp("(a=rtpmap:" + m + `.*\r
)`,"g");
            a = a.replace(g, "")
        }
        let y = /(m=video.*\r\n)/
          , _ = a.match(y);
        if (_ != null) {
            let b = _[0].substring(0, _[0].length - 2).split(" ")
              , k = b[0];
            b.forEach( (w, T) => {
                T !== 0 && (w == o || w == m || (k += " " + w))
            }
            ),
            k += `\r
`,
            a = a.replace(y, k)
        }
        return n(a)
    }
    ;
    return n(e)
}
function ks(e, t=Hc) {
    let n = e;
    for (let i of $c)
        i !== t && (n = Kc(n, i));
    return n
}
function zc(e) {
    return e.reduce( (t, n) => t + String.fromCharCode(n), "")
}
function ws(e) {
    return btoa(zc(e))
}
var nn = e => e.toString().padStart(2, "0");
var Bn = (i => (i[i.Command = 0] = "Command",
i[i.Lossy = 1] = "Lossy",
i[i.Reliable = 2] = "Reliable",
i))(Bn || {})
  , Fn = {
    0: "command",
    1: "_lossy",
    2: "_reliable"
}
  , Jc = {
    command: 0,
    _lossy: 1,
    _reliable: 2
}
  , Pt = class {
    onSnapshot;
    onVideoListLoaded;
    onProgress;
    onVideoDownloaded;
    onDatachannel;
    onMessage;
    onRecording;
    onStream;
    onSfuStream;
    onIceCandidate;
    onConnectionStateChange;
    options;
    peer;
    localStream;
    remoteStreamMap = new Map;
    pendingIceCandidates = [];
    channelReceivers = {};
    lossyChannel;
    reliableChannel;
    constructor(t) {
        this.options = t.options,
        this.peer = new RTCPeerConnection(t),
        this.peer.ontrack = n => this.handleTrack(n),
        this.peer.onicecandidate = n => {
            n.candidate && this.onIceCandidate?.(n)
        }
        ,
        this.peer.onconnectionstatechange = () => {
            this.onConnectionStateChange?.(this.peer.connectionState)
        }
        ,
        this.peer.ondatachannel = n => {
            let i = n.channel
              , s = i.label
              , r = Jc[s];
            (r === 1 && t.options.ipcMode === "lossy" || r === 2 && t.options.ipcMode === "reliable") && (r === 1 ? this.lossyChannel = i : r === 2 && (this.reliableChannel = i),
            this.createReceivers(s),
            i.onmessage = o => this.onDataChannelMessage(s, o))
        }
    }
    get connectionState() {
        return this.peer.connectionState
    }
    close() {
        for (let t in this.channelReceivers) {
            let n = this.channelReceivers[t];
            n.snapshotReceiver.reset(),
            n.queryFileReceiver.reset(),
            n.fileReceiver.reset(),
            n.customReceiver.reset()
        }
        this.channelReceivers = {},
        this.lossyChannel && (this.lossyChannel.onmessage = null),
        this.reliableChannel && (this.reliableChannel.onmessage = null),
        this.lossyChannel = void 0,
        this.reliableChannel = void 0,
        this.localStream?.getTracks().forEach(t => {
            t.stop()
        }
        ),
        this.localStream = void 0,
        this.remoteStreamMap.forEach(t => {
            t.getTracks().forEach(n => {
                n.stop()
            }
            )
        }
        ),
        this.remoteStreamMap.clear(),
        this.peer.close(),
        this.peer.ontrack = null,
        this.peer.onicecandidate = null,
        this.peer.onconnectionstatechange = null,
        this.onSnapshot = void 0,
        this.onVideoListLoaded = void 0,
        this.onProgress = void 0,
        this.onVideoDownloaded = void 0,
        this.onMessage = void 0,
        this.onRecording = void 0,
        this.onStream = void 0,
        this.onIceCandidate = void 0,
        this.onConnectionStateChange = void 0,
        console.debug("webrtc peer is closed.")
    }
    createDataChannel(t, n) {
        return this.peer.createDataChannel(Fn[t], n)
    }
    createOffer = async t => {
        let n = await this.peer.createOffer(t);
        return await this.peer.setLocalDescription(n),
        console.debug("createOffer: ", n),
        n
    }
    ;
    createAnswer = async t => {
        await this.setRemoteDescription(t);
        let n = await this.peer.createAnswer();
        return await this.peer.setLocalDescription(n),
        console.debug("createAnswer: ", n),
        n
    }
    ;
    createlocalAudioStream = async () => {
        this.localStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: !0,
                noiseSuppression: !0,
                autoGainControl: !0
            },
            video: !1
        }),
        this.localStream.getAudioTracks().forEach(t => {
            this.peer.addTrack(t, this.localStream),
            t.enabled = this.options.isMicOn ?? !1
        }
        )
    }
    ;
    setRemoteDescription = async t => {
        await this.peer.setRemoteDescription(t),
        this.pendingIceCandidates.forEach(n => {
            this.peer.addIceCandidate(n)
        }
        ),
        this.pendingIceCandidates = []
    }
    ;
    addIceCandidate = t => {
        !this.peer.remoteDescription && t ? this.pendingIceCandidates.push(t) : this.peer.addIceCandidate(t)
    }
    ;
    toggleMic = (t=!this.options.isMicOn) => {
        this.options.isMicOn = t,
        this.toggleTrack(t, this.localStream)
    }
    ;
    toggleSpeaker = (t=!this.options.isSpeakerOn) => {
        this.options.isSpeakerOn = t,
        this.remoteStreamMap.forEach(n => {
            this.toggleTrack(t, n)
        }
        )
    }
    ;
    toggleTrack = (t, n) => {
        n?.getAudioTracks().forEach(i => {
            i.enabled = t
        }
        )
    }
    ;
    handleTrack = t => {
        let[n] = t.streams[0].id.split("|")
          , i = this.remoteStreamMap.get(n);
        i || (i = new MediaStream,
        this.remoteStreamMap.set(n, i)),
        t.streams[0].getTracks().forEach(s => {
            i?.addTrack(s),
            s.kind === "audio" && (s.enabled = this.options.isSpeakerOn ?? !1),
            console.debug(`[${n}] get ${s.kind} tracks => label: ${s.label}, id: ${s.id}`)
        }
        ),
        this.onStream?.(i),
        this.onSfuStream?.(n, i)
    }
    ;
    createReceivers(t) {
        this.channelReceivers[t] = {
            snapshotReceiver: new Dt({
                onProgress: (n, i) => this.onProgress?.(n, i, 2),
                onComplete: n => this.onSnapshot?.("data:image/jpeg;base64," + ws(n))
            }),
            queryFileReceiver: new Dt({
                onProgress: (n, i) => this.onProgress?.(n, i, 3),
                onComplete: n => {
                    let i = Ln.decode(n);
                    this.onVideoListLoaded?.(i)
                }
            }),
            fileReceiver: new Dt({
                onProgress: (n, i) => this.onProgress?.(n, i, 4),
                onComplete: n => this.onVideoDownloaded?.(n)
            }),
            customReceiver: new Dt({
                onProgress: (n, i) => this.onProgress?.(n, i, 100),
                onComplete: n => this.onMessage?.(n)
            })
        }
    }
    onDataChannelMessage(t, n) {
        let i = new Uint8Array(n.data);
        this.dispatchPayload(t, i)
    }
    dispatchPayload(t, n) {
        let i = xe.decode(n)
          , s = this.channelReceivers[t];
        if (!s) {
            console.warn(`No receivers found for label: ${t}`);
            return
        }
        switch (i.type) {
        case 2:
            s.snapshotReceiver.receiveData(i);
            break;
        case 3:
            s.queryFileReceiver.receiveData(i);
            break;
        case 4:
            s.fileReceiver.receiveData(i);
            break;
        case 100:
            s.customReceiver.receiveData(i);
            break;
        case 5:
        case 6:
            i.recordingResponse && this.onRecording?.(i.recordingResponse);
            break
        }
    }
}
;
var Io = Object.defineProperty
  , Yc = Object.getOwnPropertyDescriptor
  , Qc = Object.getOwnPropertyNames
  , Xc = Object.prototype.hasOwnProperty
  , We = (e, t) => () => (e && (t = e(e = 0)),
t)
  , fe = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , Yt = (e, t) => {
    for (var n in t)
        Io(e, n, {
            get: t[n],
            enumerable: !0
        })
}
  , Zc = (e, t, n, i) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let s of Qc(t))
            !Xc.call(e, s) && s !== n && Io(e, s, {
                get: () => t[s],
                enumerable: !(i = Yc(t, s)) || i.enumerable
            });
    return e
}
  , Pe = e => Zc(Io({}, "__esModule", {
    value: !0
}), e)
  , ie = We( () => {}
)
  , ve = {};
Yt(ve, {
    _debugEnd: () => Bi,
    _debugProcess: () => Li,
    _events: () => Zi,
    _eventsCount: () => eo,
    _exiting: () => vi,
    _fatalExceptions: () => Mi,
    _getActiveHandles: () => ga,
    _getActiveRequests: () => ma,
    _kill: () => Ii,
    _linkedBinding: () => fa,
    _maxListeners: () => Xi,
    _preload_modules: () => Yi,
    _rawDebug: () => Ti,
    _startProfilerIdleNotifier: () => Fi,
    _stopProfilerIdleNotifier: () => qi,
    _tickCallback: () => Di,
    abort: () => Gi,
    addListener: () => to,
    allowedNodeEnvironmentFlags: () => Ci,
    arch: () => ai,
    argv: () => ui,
    argv0: () => Ji,
    assert: () => ya,
    binding: () => mi,
    chdir: () => _i,
    config: () => Ei,
    cpuUsage: () => bn,
    cwd: () => yi,
    debugPort: () => zi,
    default: () => Ao,
    dlopen: () => pa,
    domain: () => wi,
    emit: () => so,
    emitWarning: () => pi,
    env: () => ci,
    execArgv: () => hi,
    execPath: () => Ki,
    exit: () => Pi,
    features: () => Ui,
    hasUncaughtExceptionCaptureCallback: () => _a,
    hrtime: () => $n,
    kill: () => Oi,
    listeners: () => Ta,
    memoryUsage: () => Ai,
    moduleLoadList: () => ki,
    nextTick: () => ha,
    off: () => ro,
    on: () => pt,
    once: () => no,
    openStdin: () => Ni,
    pid: () => Hi,
    platform: () => li,
    ppid: () => $i,
    prependListener: () => ao,
    prependOnceListener: () => lo,
    reallyExit: () => Si,
    release: () => bi,
    removeAllListeners: () => oo,
    removeListener: () => io,
    resourceUsage: () => Ri,
    setSourceMapsEnabled: () => Qi,
    setUncaughtExceptionCaptureCallback: () => xi,
    stderr: () => Wi,
    stdin: () => Vi,
    stdout: () => ji,
    title: () => si,
    umask: () => gi,
    uptime: () => ba,
    version: () => di,
    versions: () => fi
});
function Ro(e) {
    throw new Error("Node.js process " + e + " is not supported by JSPM core outside of Node.js")
}
function eu() {
    !Kt || !Ht || (Kt = !1,
    Ht.length ? lt = Ht.concat(lt) : wn = -1,
    lt.length && ua())
}
function ua() {
    if (!Kt) {
        var e = setTimeout(eu, 0);
        Kt = !0;
        for (var t = lt.length; t; ) {
            for (Ht = lt,
            lt = []; ++wn < t; )
                Ht && Ht[wn].run();
            wn = -1,
            t = lt.length
        }
        Ht = null,
        Kt = !1,
        clearTimeout(e)
    }
}
function ha(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
    lt.push(new da(e,t)),
    lt.length === 1 && !Kt && setTimeout(ua, 0)
}
function da(e, t) {
    this.fun = e,
    this.array = t
}
function He() {}
function fa(e) {
    Ro("_linkedBinding")
}
function pa(e) {
    Ro("dlopen")
}
function ma() {
    return []
}
function ga() {
    return []
}
function ya(e, t) {
    if (!e)
        throw new Error(t || "assertion error")
}
function _a() {
    return !1
}
function ba() {
    return _t.now() / 1e3
}
function $n(e) {
    var t = Math.floor((Date.now() - _t.now()) * .001)
      , n = _t.now() * .001
      , i = Math.floor(n) + t
      , s = Math.floor(n % 1 * 1e9);
    return e && (i = i - e[0],
    s = s - e[1],
    s < 0 && (i--,
    s += Kn)),
    [i, s]
}
function pt() {
    return Ao
}
function Ta(e) {
    return []
}
var lt, Kt, Ht, wn, si, ai, li, ci, ui, hi, di, fi, pi, mi, gi, yi, _i, bi, Ti, ki, wi, vi, Ei, Si, Ii, bn, Ri, Ai, Oi, Pi, Ni, Ci, Ui, Mi, xi, Di, Li, Bi, Fi, qi, ji, Wi, Vi, Gi, Hi, $i, Ki, zi, Ji, Yi, Qi, _t, $r, Kn, Xi, Zi, eo, to, no, ro, io, oo, so, ao, lo, Ao, tu = We( () => {
    ie(),
    se(),
    oe(),
    lt = [],
    Kt = !1,
    wn = -1,
    da.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    si = "browser",
    ai = "x64",
    li = "browser",
    ci = {
        PATH: "/usr/bin",
        LANG: navigator.language + ".UTF-8",
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
    },
    ui = ["/usr/bin/node"],
    hi = [],
    di = "v16.8.0",
    fi = {},
    pi = function(e, t) {
        console.warn((t ? t + ": " : "") + e)
    }
    ,
    mi = function(e) {
        Ro("binding")
    }
    ,
    gi = function(e) {
        return 0
    }
    ,
    yi = function() {
        return "/"
    }
    ,
    _i = function(e) {}
    ,
    bi = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
    },
    Ti = He,
    ki = [],
    wi = {},
    vi = !1,
    Ei = {},
    Si = He,
    Ii = He,
    bn = function() {
        return {}
    }
    ,
    Ri = bn,
    Ai = bn,
    Oi = He,
    Pi = He,
    Ni = He,
    Ci = {},
    Ui = {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
        cached_builtins: !0
    },
    Mi = He,
    xi = He,
    Di = He,
    Li = He,
    Bi = He,
    Fi = He,
    qi = He,
    ji = void 0,
    Wi = void 0,
    Vi = void 0,
    Gi = He,
    Hi = 2,
    $i = 1,
    Ki = "/bin/usr/node",
    zi = 9229,
    Ji = "node",
    Yi = [],
    Qi = He,
    _t = {
        now: typeof performance < "u" ? performance.now.bind(performance) : void 0,
        timing: typeof performance < "u" ? performance.timing : void 0
    },
    _t.now === void 0 && ($r = Date.now(),
    _t.timing && _t.timing.navigationStart && ($r = _t.timing.navigationStart),
    _t.now = () => Date.now() - $r),
    Kn = 1e9,
    $n.bigint = function(e) {
        var t = $n(e);
        return typeof BigInt > "u" ? t[0] * Kn + t[1] : BigInt(t[0] * Kn) + BigInt(t[1])
    }
    ,
    Xi = 10,
    Zi = {},
    eo = 0,
    to = pt,
    no = pt,
    ro = pt,
    io = pt,
    oo = pt,
    so = He,
    ao = pt,
    lo = pt,
    Ao = {
        version: di,
        versions: fi,
        arch: ai,
        platform: li,
        release: bi,
        _rawDebug: Ti,
        moduleLoadList: ki,
        binding: mi,
        _linkedBinding: fa,
        _events: Zi,
        _eventsCount: eo,
        _maxListeners: Xi,
        on: pt,
        addListener: to,
        once: no,
        off: ro,
        removeListener: io,
        removeAllListeners: oo,
        emit: so,
        prependListener: ao,
        prependOnceListener: lo,
        listeners: Ta,
        domain: wi,
        _exiting: vi,
        config: Ei,
        dlopen: pa,
        uptime: ba,
        _getActiveRequests: ma,
        _getActiveHandles: ga,
        reallyExit: Si,
        _kill: Ii,
        cpuUsage: bn,
        resourceUsage: Ri,
        memoryUsage: Ai,
        kill: Oi,
        exit: Pi,
        openStdin: Ni,
        allowedNodeEnvironmentFlags: Ci,
        assert: ya,
        features: Ui,
        _fatalExceptions: Mi,
        setUncaughtExceptionCaptureCallback: xi,
        hasUncaughtExceptionCaptureCallback: _a,
        emitWarning: pi,
        nextTick: ha,
        _tickCallback: Di,
        _debugProcess: Li,
        _debugEnd: Bi,
        _startProfilerIdleNotifier: Fi,
        _stopProfilerIdleNotifier: qi,
        stdout: ji,
        stdin: Vi,
        stderr: Wi,
        abort: Gi,
        umask: gi,
        chdir: _i,
        cwd: yi,
        env: ci,
        title: si,
        argv: ui,
        execArgv: hi,
        pid: Hi,
        ppid: $i,
        execPath: Ki,
        debugPort: zi,
        hrtime: $n,
        argv0: Ji,
        _preload_modules: Yi,
        setSourceMapsEnabled: Qi
    }
}
), oe = We( () => {
    tu()
}
), Ve = {};
Yt(Ve, {
    Buffer: () => Xn,
    INSPECT_MAX_BYTES: () => ka,
    default: () => mt,
    kMaxLength: () => wa
});
function nu() {
    if (co)
        return on;
    co = !0,
    on.byteLength = a,
    on.toByteArray = c,
    on.fromByteArray = m;
    for (var e = [], t = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, r = i.length; s < r; ++s)
        e[s] = i[s],
        t[i.charCodeAt(s)] = s;
    t[45] = 62,
    t[95] = 63;
    function o(y) {
        var _ = y.length;
        if (_ % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var g = y.indexOf("=");
        g === -1 && (g = _);
        var b = g === _ ? 0 : 4 - g % 4;
        return [g, b]
    }
    function a(y) {
        var _ = o(y)
          , g = _[0]
          , b = _[1];
        return (g + b) * 3 / 4 - b
    }
    function l(y, _, g) {
        return (_ + g) * 3 / 4 - g
    }
    function c(y) {
        var _, g = o(y), b = g[0], k = g[1], w = new n(l(y, b, k)), T = 0, R = k > 0 ? b - 4 : b, M;
        for (M = 0; M < R; M += 4)
            _ = t[y.charCodeAt(M)] << 18 | t[y.charCodeAt(M + 1)] << 12 | t[y.charCodeAt(M + 2)] << 6 | t[y.charCodeAt(M + 3)],
            w[T++] = _ >> 16 & 255,
            w[T++] = _ >> 8 & 255,
            w[T++] = _ & 255;
        return k === 2 && (_ = t[y.charCodeAt(M)] << 2 | t[y.charCodeAt(M + 1)] >> 4,
        w[T++] = _ & 255),
        k === 1 && (_ = t[y.charCodeAt(M)] << 10 | t[y.charCodeAt(M + 1)] << 4 | t[y.charCodeAt(M + 2)] >> 2,
        w[T++] = _ >> 8 & 255,
        w[T++] = _ & 255),
        w
    }
    function u(y) {
        return e[y >> 18 & 63] + e[y >> 12 & 63] + e[y >> 6 & 63] + e[y & 63]
    }
    function d(y, _, g) {
        for (var b, k = [], w = _; w < g; w += 3)
            b = (y[w] << 16 & 16711680) + (y[w + 1] << 8 & 65280) + (y[w + 2] & 255),
            k.push(u(b));
        return k.join("")
    }
    function m(y) {
        for (var _, g = y.length, b = g % 3, k = [], w = 16383, T = 0, R = g - b; T < R; T += w)
            k.push(d(y, T, T + w > R ? R : T + w));
        return b === 1 ? (_ = y[g - 1],
        k.push(e[_ >> 2] + e[_ << 4 & 63] + "==")) : b === 2 && (_ = (y[g - 2] << 8) + y[g - 1],
        k.push(e[_ >> 10] + e[_ >> 4 & 63] + e[_ << 2 & 63] + "=")),
        k.join("")
    }
    return on
}
function ru() {
    return uo ? Tn : (uo = !0,
    Tn.read = function(e, t, n, i, s) {
        var r, o, a = s * 8 - i - 1, l = (1 << a) - 1, c = l >> 1, u = -7, d = n ? s - 1 : 0, m = n ? -1 : 1, y = e[t + d];
        for (d += m,
        r = y & (1 << -u) - 1,
        y >>= -u,
        u += a; u > 0; r = r * 256 + e[t + d],
        d += m,
        u -= 8)
            ;
        for (o = r & (1 << -u) - 1,
        r >>= -u,
        u += i; u > 0; o = o * 256 + e[t + d],
        d += m,
        u -= 8)
            ;
        if (r === 0)
            r = 1 - c;
        else {
            if (r === l)
                return o ? NaN : (y ? -1 : 1) * (1 / 0);
            o = o + Math.pow(2, i),
            r = r - c
        }
        return (y ? -1 : 1) * o * Math.pow(2, r - i)
    }
    ,
    Tn.write = function(e, t, n, i, s, r) {
        var o, a, l, c = r * 8 - s - 1, u = (1 << c) - 1, d = u >> 1, m = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : r - 1, _ = i ? 1 : -1, g = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
        o = u) : (o = Math.floor(Math.log(t) / Math.LN2),
        t * (l = Math.pow(2, -o)) < 1 && (o--,
        l *= 2),
        o + d >= 1 ? t += m / l : t += m * Math.pow(2, 1 - d),
        t * l >= 2 && (o++,
        l /= 2),
        o + d >= u ? (a = 0,
        o = u) : o + d >= 1 ? (a = (t * l - 1) * Math.pow(2, s),
        o = o + d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, s),
        o = 0)); s >= 8; e[n + y] = a & 255,
        y += _,
        a /= 256,
        s -= 8)
            ;
        for (o = o << s | a,
        c += s; c > 0; e[n + y] = o & 255,
        y += _,
        o /= 256,
        c -= 8)
            ;
        e[n + y - _] |= g * 128
    }
    ,
    Tn)
}
function iu() {
    if (ho)
        return Nt;
    ho = !0;
    let e = nu()
      , t = ru()
      , n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Nt.Buffer = o,
    Nt.SlowBuffer = k,
    Nt.INSPECT_MAX_BYTES = 50;
    let i = 2147483647;
    Nt.kMaxLength = i,
    o.TYPED_ARRAY_SUPPORT = s(),
    !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function s() {
        try {
            let f = new Uint8Array(1)
              , h = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(h, Uint8Array.prototype),
            Object.setPrototypeOf(f, h),
            f.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(o.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (o.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(o.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (o.isBuffer(this))
                return this.byteOffset
        }
    });
    function r(f) {
        if (f > i)
            throw new RangeError('The value "' + f + '" is invalid for option "size"');
        let h = new Uint8Array(f);
        return Object.setPrototypeOf(h, o.prototype),
        h
    }
    function o(f, h, p) {
        if (typeof f == "number") {
            if (typeof h == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return u(f)
        }
        return a(f, h, p)
    }
    o.poolSize = 8192;
    function a(f, h, p) {
        if (typeof f == "string")
            return d(f, h);
        if (ArrayBuffer.isView(f))
            return y(f);
        if (f == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
        if (K(f, ArrayBuffer) || f && K(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(f, SharedArrayBuffer) || f && K(f.buffer, SharedArrayBuffer)))
            return _(f, h, p);
        if (typeof f == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        let v = f.valueOf && f.valueOf();
        if (v != null && v !== f)
            return o.from(v, h, p);
        let N = g(f);
        if (N)
            return N;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
            return o.from(f[Symbol.toPrimitive]("string"), h, p);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f)
    }
    o.from = function(f, h, p) {
        return a(f, h, p)
    }
    ,
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array);
    function l(f) {
        if (typeof f != "number")
            throw new TypeError('"size" argument must be of type number');
        if (f < 0)
            throw new RangeError('The value "' + f + '" is invalid for option "size"')
    }
    function c(f, h, p) {
        return l(f),
        f <= 0 ? r(f) : h !== void 0 ? typeof p == "string" ? r(f).fill(h, p) : r(f).fill(h) : r(f)
    }
    o.alloc = function(f, h, p) {
        return c(f, h, p)
    }
    ;
    function u(f) {
        return l(f),
        r(f < 0 ? 0 : b(f) | 0)
    }
    o.allocUnsafe = function(f) {
        return u(f)
    }
    ,
    o.allocUnsafeSlow = function(f) {
        return u(f)
    }
    ;
    function d(f, h) {
        if ((typeof h != "string" || h === "") && (h = "utf8"),
        !o.isEncoding(h))
            throw new TypeError("Unknown encoding: " + h);
        let p = w(f, h) | 0
          , v = r(p)
          , N = v.write(f, h);
        return N !== p && (v = v.slice(0, N)),
        v
    }
    function m(f) {
        let h = f.length < 0 ? 0 : b(f.length) | 0
          , p = r(h);
        for (let v = 0; v < h; v += 1)
            p[v] = f[v] & 255;
        return p
    }
    function y(f) {
        if (K(f, Uint8Array)) {
            let h = new Uint8Array(f);
            return _(h.buffer, h.byteOffset, h.byteLength)
        }
        return m(f)
    }
    function _(f, h, p) {
        if (h < 0 || f.byteLength < h)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (f.byteLength < h + (p || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let v;
        return h === void 0 && p === void 0 ? v = new Uint8Array(f) : p === void 0 ? v = new Uint8Array(f,h) : v = new Uint8Array(f,h,p),
        Object.setPrototypeOf(v, o.prototype),
        v
    }
    function g(f) {
        if (o.isBuffer(f)) {
            let h = b(f.length) | 0
              , p = r(h);
            return p.length === 0 || f.copy(p, 0, 0, h),
            p
        }
        if (f.length !== void 0)
            return typeof f.length != "number" || X(f.length) ? r(0) : m(f);
        if (f.type === "Buffer" && Array.isArray(f.data))
            return m(f.data)
    }
    function b(f) {
        if (f >= i)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return f | 0
    }
    function k(f) {
        return +f != f && (f = 0),
        o.alloc(+f)
    }
    o.isBuffer = function(f) {
        return f != null && f._isBuffer === !0 && f !== o.prototype
    }
    ,
    o.compare = function(f, h) {
        if (K(f, Uint8Array) && (f = o.from(f, f.offset, f.byteLength)),
        K(h, Uint8Array) && (h = o.from(h, h.offset, h.byteLength)),
        !o.isBuffer(f) || !o.isBuffer(h))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (f === h)
            return 0;
        let p = f.length
          , v = h.length;
        for (let N = 0, F = Math.min(p, v); N < F; ++N)
            if (f[N] !== h[N]) {
                p = f[N],
                v = h[N];
                break
            }
        return p < v ? -1 : v < p ? 1 : 0
    }
    ,
    o.isEncoding = function(f) {
        switch (String(f).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    o.concat = function(f, h) {
        if (!Array.isArray(f))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (f.length === 0)
            return o.alloc(0);
        let p;
        if (h === void 0)
            for (h = 0,
            p = 0; p < f.length; ++p)
                h += f[p].length;
        let v = o.allocUnsafe(h)
          , N = 0;
        for (p = 0; p < f.length; ++p) {
            let F = f[p];
            if (K(F, Uint8Array))
                N + F.length > v.length ? (o.isBuffer(F) || (F = o.from(F)),
                F.copy(v, N)) : Uint8Array.prototype.set.call(v, F, N);
            else if (o.isBuffer(F))
                F.copy(v, N);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            N += F.length
        }
        return v
    }
    ;
    function w(f, h) {
        if (o.isBuffer(f))
            return f.length;
        if (ArrayBuffer.isView(f) || K(f, ArrayBuffer))
            return f.byteLength;
        if (typeof f != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f);
        let p = f.length
          , v = arguments.length > 2 && arguments[2] === !0;
        if (!v && p === 0)
            return 0;
        let N = !1;
        for (; ; )
            switch (h) {
            case "ascii":
            case "latin1":
            case "binary":
                return p;
            case "utf8":
            case "utf-8":
                return D(f).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return p * 2;
            case "hex":
                return p >>> 1;
            case "base64":
                return J(f).length;
            default:
                if (N)
                    return v ? -1 : D(f).length;
                h = ("" + h).toLowerCase(),
                N = !0
            }
    }
    o.byteLength = w;
    function T(f, h, p) {
        let v = !1;
        if ((h === void 0 || h < 0) && (h = 0),
        h > this.length || ((p === void 0 || p > this.length) && (p = this.length),
        p <= 0) || (p >>>= 0,
        h >>>= 0,
        p <= h))
            return "";
        for (f || (f = "utf8"); ; )
            switch (f) {
            case "hex":
                return q(this, h, p);
            case "utf8":
            case "utf-8":
                return j(this, h, p);
            case "ascii":
                return le(this, h, p);
            case "latin1":
            case "binary":
                return re(this, h, p);
            case "base64":
                return O(this, h, p);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return pe(this, h, p);
            default:
                if (v)
                    throw new TypeError("Unknown encoding: " + f);
                f = (f + "").toLowerCase(),
                v = !0
            }
    }
    o.prototype._isBuffer = !0;
    function R(f, h, p) {
        let v = f[h];
        f[h] = f[p],
        f[p] = v
    }
    o.prototype.swap16 = function() {
        let f = this.length;
        if (f % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let h = 0; h < f; h += 2)
            R(this, h, h + 1);
        return this
    }
    ,
    o.prototype.swap32 = function() {
        let f = this.length;
        if (f % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let h = 0; h < f; h += 4)
            R(this, h, h + 3),
            R(this, h + 1, h + 2);
        return this
    }
    ,
    o.prototype.swap64 = function() {
        let f = this.length;
        if (f % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let h = 0; h < f; h += 8)
            R(this, h, h + 7),
            R(this, h + 1, h + 6),
            R(this, h + 2, h + 5),
            R(this, h + 3, h + 4);
        return this
    }
    ,
    o.prototype.toString = function() {
        let f = this.length;
        return f === 0 ? "" : arguments.length === 0 ? j(this, 0, f) : T.apply(this, arguments)
    }
    ,
    o.prototype.toLocaleString = o.prototype.toString,
    o.prototype.equals = function(f) {
        if (!o.isBuffer(f))
            throw new TypeError("Argument must be a Buffer");
        return this === f ? !0 : o.compare(this, f) === 0
    }
    ,
    o.prototype.inspect = function() {
        let f = ""
          , h = Nt.INSPECT_MAX_BYTES;
        return f = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(),
        this.length > h && (f += " ... "),
        "<Buffer " + f + ">"
    }
    ,
    n && (o.prototype[n] = o.prototype.inspect),
    o.prototype.compare = function(f, h, p, v, N) {
        if (K(f, Uint8Array) && (f = o.from(f, f.offset, f.byteLength)),
        !o.isBuffer(f))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
        if (h === void 0 && (h = 0),
        p === void 0 && (p = f ? f.length : 0),
        v === void 0 && (v = 0),
        N === void 0 && (N = this.length),
        h < 0 || p > f.length || v < 0 || N > this.length)
            throw new RangeError("out of range index");
        if (v >= N && h >= p)
            return 0;
        if (v >= N)
            return -1;
        if (h >= p)
            return 1;
        if (h >>>= 0,
        p >>>= 0,
        v >>>= 0,
        N >>>= 0,
        this === f)
            return 0;
        let F = N - v
          , he = p - h
          , Te = Math.min(F, he)
          , Ne = this.slice(v, N)
          , Ae = f.slice(h, p);
        for (let Ee = 0; Ee < Te; ++Ee)
            if (Ne[Ee] !== Ae[Ee]) {
                F = Ne[Ee],
                he = Ae[Ee];
                break
            }
        return F < he ? -1 : he < F ? 1 : 0
    }
    ;
    function M(f, h, p, v, N) {
        if (f.length === 0)
            return -1;
        if (typeof p == "string" ? (v = p,
        p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648),
        p = +p,
        X(p) && (p = N ? 0 : f.length - 1),
        p < 0 && (p = f.length + p),
        p >= f.length) {
            if (N)
                return -1;
            p = f.length - 1
        } else if (p < 0)
            if (N)
                p = 0;
            else
                return -1;
        if (typeof h == "string" && (h = o.from(h, v)),
        o.isBuffer(h))
            return h.length === 0 ? -1 : E(f, h, p, v, N);
        if (typeof h == "number")
            return h = h & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? N ? Uint8Array.prototype.indexOf.call(f, h, p) : Uint8Array.prototype.lastIndexOf.call(f, h, p) : E(f, [h], p, v, N);
        throw new TypeError("val must be string, number or Buffer")
    }
    function E(f, h, p, v, N) {
        let F = 1
          , he = f.length
          , Te = h.length;
        if (v !== void 0 && (v = String(v).toLowerCase(),
        v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
            if (f.length < 2 || h.length < 2)
                return -1;
            F = 2,
            he /= 2,
            Te /= 2,
            p /= 2
        }
        function Ne(Ee, Me) {
            return F === 1 ? Ee[Me] : Ee.readUInt16BE(Me * F)
        }
        let Ae;
        if (N) {
            let Ee = -1;
            for (Ae = p; Ae < he; Ae++)
                if (Ne(f, Ae) === Ne(h, Ee === -1 ? 0 : Ae - Ee)) {
                    if (Ee === -1 && (Ee = Ae),
                    Ae - Ee + 1 === Te)
                        return Ee * F
                } else
                    Ee !== -1 && (Ae -= Ae - Ee),
                    Ee = -1
        } else
            for (p + Te > he && (p = he - Te),
            Ae = p; Ae >= 0; Ae--) {
                let Ee = !0;
                for (let Me = 0; Me < Te; Me++)
                    if (Ne(f, Ae + Me) !== Ne(h, Me)) {
                        Ee = !1;
                        break
                    }
                if (Ee)
                    return Ae
            }
        return -1
    }
    o.prototype.includes = function(f, h, p) {
        return this.indexOf(f, h, p) !== -1
    }
    ,
    o.prototype.indexOf = function(f, h, p) {
        return M(this, f, h, p, !0)
    }
    ,
    o.prototype.lastIndexOf = function(f, h, p) {
        return M(this, f, h, p, !1)
    }
    ;
    function A(f, h, p, v) {
        p = Number(p) || 0;
        let N = f.length - p;
        v ? (v = Number(v),
        v > N && (v = N)) : v = N;
        let F = h.length;
        v > F / 2 && (v = F / 2);
        let he;
        for (he = 0; he < v; ++he) {
            let Te = parseInt(h.substr(he * 2, 2), 16);
            if (X(Te))
                return he;
            f[p + he] = Te
        }
        return he
    }
    function U(f, h, p, v) {
        return x(D(h, f.length - p), f, p, v)
    }
    function W(f, h, p, v) {
        return x(B(h), f, p, v)
    }
    function $(f, h, p, v) {
        return x(J(h), f, p, v)
    }
    function Q(f, h, p, v) {
        return x(ne(h, f.length - p), f, p, v)
    }
    o.prototype.write = function(f, h, p, v) {
        if (h === void 0)
            v = "utf8",
            p = this.length,
            h = 0;
        else if (p === void 0 && typeof h == "string")
            v = h,
            p = this.length,
            h = 0;
        else if (isFinite(h))
            h = h >>> 0,
            isFinite(p) ? (p = p >>> 0,
            v === void 0 && (v = "utf8")) : (v = p,
            p = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let N = this.length - h;
        if ((p === void 0 || p > N) && (p = N),
        f.length > 0 && (p < 0 || h < 0) || h > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        v || (v = "utf8");
        let F = !1;
        for (; ; )
            switch (v) {
            case "hex":
                return A(this, f, h, p);
            case "utf8":
            case "utf-8":
                return U(this, f, h, p);
            case "ascii":
            case "latin1":
            case "binary":
                return W(this, f, h, p);
            case "base64":
                return $(this, f, h, p);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Q(this, f, h, p);
            default:
                if (F)
                    throw new TypeError("Unknown encoding: " + v);
                v = ("" + v).toLowerCase(),
                F = !0
            }
    }
    ,
    o.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function O(f, h, p) {
        return h === 0 && p === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(h, p))
    }
    function j(f, h, p) {
        p = Math.min(f.length, p);
        let v = []
          , N = h;
        for (; N < p; ) {
            let F = f[N]
              , he = null
              , Te = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
            if (N + Te <= p) {
                let Ne, Ae, Ee, Me;
                switch (Te) {
                case 1:
                    F < 128 && (he = F);
                    break;
                case 2:
                    Ne = f[N + 1],
                    (Ne & 192) === 128 && (Me = (F & 31) << 6 | Ne & 63,
                    Me > 127 && (he = Me));
                    break;
                case 3:
                    Ne = f[N + 1],
                    Ae = f[N + 2],
                    (Ne & 192) === 128 && (Ae & 192) === 128 && (Me = (F & 15) << 12 | (Ne & 63) << 6 | Ae & 63,
                    Me > 2047 && (Me < 55296 || Me > 57343) && (he = Me));
                    break;
                case 4:
                    Ne = f[N + 1],
                    Ae = f[N + 2],
                    Ee = f[N + 3],
                    (Ne & 192) === 128 && (Ae & 192) === 128 && (Ee & 192) === 128 && (Me = (F & 15) << 18 | (Ne & 63) << 12 | (Ae & 63) << 6 | Ee & 63,
                    Me > 65535 && Me < 1114112 && (he = Me))
                }
            }
            he === null ? (he = 65533,
            Te = 1) : he > 65535 && (he -= 65536,
            v.push(he >>> 10 & 1023 | 55296),
            he = 56320 | he & 1023),
            v.push(he),
            N += Te
        }
        return V(v)
    }
    let Y = 4096;
    function V(f) {
        let h = f.length;
        if (h <= Y)
            return String.fromCharCode.apply(String, f);
        let p = ""
          , v = 0;
        for (; v < h; )
            p += String.fromCharCode.apply(String, f.slice(v, v += Y));
        return p
    }
    function le(f, h, p) {
        let v = "";
        p = Math.min(f.length, p);
        for (let N = h; N < p; ++N)
            v += String.fromCharCode(f[N] & 127);
        return v
    }
    function re(f, h, p) {
        let v = "";
        p = Math.min(f.length, p);
        for (let N = h; N < p; ++N)
            v += String.fromCharCode(f[N]);
        return v
    }
    function q(f, h, p) {
        let v = f.length;
        (!h || h < 0) && (h = 0),
        (!p || p < 0 || p > v) && (p = v);
        let N = "";
        for (let F = h; F < p; ++F)
            N += _e[f[F]];
        return N
    }
    function pe(f, h, p) {
        let v = f.slice(h, p)
          , N = "";
        for (let F = 0; F < v.length - 1; F += 2)
            N += String.fromCharCode(v[F] + v[F + 1] * 256);
        return N
    }
    o.prototype.slice = function(f, h) {
        let p = this.length;
        f = ~~f,
        h = h === void 0 ? p : ~~h,
        f < 0 ? (f += p,
        f < 0 && (f = 0)) : f > p && (f = p),
        h < 0 ? (h += p,
        h < 0 && (h = 0)) : h > p && (h = p),
        h < f && (h = f);
        let v = this.subarray(f, h);
        return Object.setPrototypeOf(v, o.prototype),
        v
    }
    ;
    function te(f, h, p) {
        if (f % 1 !== 0 || f < 0)
            throw new RangeError("offset is not uint");
        if (f + h > p)
            throw new RangeError("Trying to access beyond buffer length")
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(f, h, p) {
        f = f >>> 0,
        h = h >>> 0,
        p || te(f, h, this.length);
        let v = this[f]
          , N = 1
          , F = 0;
        for (; ++F < h && (N *= 256); )
            v += this[f + F] * N;
        return v
    }
    ,
    o.prototype.readUintBE = o.prototype.readUIntBE = function(f, h, p) {
        f = f >>> 0,
        h = h >>> 0,
        p || te(f, h, this.length);
        let v = this[f + --h]
          , N = 1;
        for (; h > 0 && (N *= 256); )
            v += this[f + --h] * N;
        return v
    }
    ,
    o.prototype.readUint8 = o.prototype.readUInt8 = function(f, h) {
        return f = f >>> 0,
        h || te(f, 1, this.length),
        this[f]
    }
    ,
    o.prototype.readUint16LE = o.prototype.readUInt16LE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 2, this.length),
        this[f] | this[f + 1] << 8
    }
    ,
    o.prototype.readUint16BE = o.prototype.readUInt16BE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 2, this.length),
        this[f] << 8 | this[f + 1]
    }
    ,
    o.prototype.readUint32LE = o.prototype.readUInt32LE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216
    }
    ,
    o.prototype.readUint32BE = o.prototype.readUInt32BE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3])
    }
    ,
    o.prototype.readBigUInt64LE = be(function(f) {
        f = f >>> 0,
        z(f, "offset");
        let h = this[f]
          , p = this[f + 7];
        (h === void 0 || p === void 0) && L(f, this.length - 8);
        let v = h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24
          , N = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + p * 2 ** 24;
        return BigInt(v) + (BigInt(N) << BigInt(32))
    }),
    o.prototype.readBigUInt64BE = be(function(f) {
        f = f >>> 0,
        z(f, "offset");
        let h = this[f]
          , p = this[f + 7];
        (h === void 0 || p === void 0) && L(f, this.length - 8);
        let v = h * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f]
          , N = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p;
        return (BigInt(v) << BigInt(32)) + BigInt(N)
    }),
    o.prototype.readIntLE = function(f, h, p) {
        f = f >>> 0,
        h = h >>> 0,
        p || te(f, h, this.length);
        let v = this[f]
          , N = 1
          , F = 0;
        for (; ++F < h && (N *= 256); )
            v += this[f + F] * N;
        return N *= 128,
        v >= N && (v -= Math.pow(2, 8 * h)),
        v
    }
    ,
    o.prototype.readIntBE = function(f, h, p) {
        f = f >>> 0,
        h = h >>> 0,
        p || te(f, h, this.length);
        let v = h
          , N = 1
          , F = this[f + --v];
        for (; v > 0 && (N *= 256); )
            F += this[f + --v] * N;
        return N *= 128,
        F >= N && (F -= Math.pow(2, 8 * h)),
        F
    }
    ,
    o.prototype.readInt8 = function(f, h) {
        return f = f >>> 0,
        h || te(f, 1, this.length),
        this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f]
    }
    ,
    o.prototype.readInt16LE = function(f, h) {
        f = f >>> 0,
        h || te(f, 2, this.length);
        let p = this[f] | this[f + 1] << 8;
        return p & 32768 ? p | 4294901760 : p
    }
    ,
    o.prototype.readInt16BE = function(f, h) {
        f = f >>> 0,
        h || te(f, 2, this.length);
        let p = this[f + 1] | this[f] << 8;
        return p & 32768 ? p | 4294901760 : p
    }
    ,
    o.prototype.readInt32LE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24
    }
    ,
    o.prototype.readInt32BE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]
    }
    ,
    o.prototype.readBigInt64LE = be(function(f) {
        f = f >>> 0,
        z(f, "offset");
        let h = this[f]
          , p = this[f + 7];
        (h === void 0 || p === void 0) && L(f, this.length - 8);
        let v = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (p << 24);
        return (BigInt(v) << BigInt(32)) + BigInt(h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24)
    }),
    o.prototype.readBigInt64BE = be(function(f) {
        f = f >>> 0,
        z(f, "offset");
        let h = this[f]
          , p = this[f + 7];
        (h === void 0 || p === void 0) && L(f, this.length - 8);
        let v = (h << 24) + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
        return (BigInt(v) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p)
    }),
    o.prototype.readFloatLE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        t.read(this, f, !0, 23, 4)
    }
    ,
    o.prototype.readFloatBE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 4, this.length),
        t.read(this, f, !1, 23, 4)
    }
    ,
    o.prototype.readDoubleLE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 8, this.length),
        t.read(this, f, !0, 52, 8)
    }
    ,
    o.prototype.readDoubleBE = function(f, h) {
        return f = f >>> 0,
        h || te(f, 8, this.length),
        t.read(this, f, !1, 52, 8)
    }
    ;
    function ge(f, h, p, v, N, F) {
        if (!o.isBuffer(f))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (h > N || h < F)
            throw new RangeError('"value" argument is out of bounds');
        if (p + v > f.length)
            throw new RangeError("Index out of range")
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(f, h, p, v) {
        if (f = +f,
        h = h >>> 0,
        p = p >>> 0,
        !v) {
            let he = Math.pow(2, 8 * p) - 1;
            ge(this, f, h, p, he, 0)
        }
        let N = 1
          , F = 0;
        for (this[h] = f & 255; ++F < p && (N *= 256); )
            this[h + F] = f / N & 255;
        return h + p
    }
    ,
    o.prototype.writeUintBE = o.prototype.writeUIntBE = function(f, h, p, v) {
        if (f = +f,
        h = h >>> 0,
        p = p >>> 0,
        !v) {
            let he = Math.pow(2, 8 * p) - 1;
            ge(this, f, h, p, he, 0)
        }
        let N = p - 1
          , F = 1;
        for (this[h + N] = f & 255; --N >= 0 && (F *= 256); )
            this[h + N] = f / F & 255;
        return h + p
    }
    ,
    o.prototype.writeUint8 = o.prototype.writeUInt8 = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 1, 255, 0),
        this[h] = f & 255,
        h + 1
    }
    ,
    o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 2, 65535, 0),
        this[h] = f & 255,
        this[h + 1] = f >>> 8,
        h + 2
    }
    ,
    o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 2, 65535, 0),
        this[h] = f >>> 8,
        this[h + 1] = f & 255,
        h + 2
    }
    ,
    o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 4, 4294967295, 0),
        this[h + 3] = f >>> 24,
        this[h + 2] = f >>> 16,
        this[h + 1] = f >>> 8,
        this[h] = f & 255,
        h + 4
    }
    ,
    o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 4, 4294967295, 0),
        this[h] = f >>> 24,
        this[h + 1] = f >>> 16,
        this[h + 2] = f >>> 8,
        this[h + 3] = f & 255,
        h + 4
    }
    ;
    function S(f, h, p, v, N) {
        Z(h, v, N, f, p, 7);
        let F = Number(h & BigInt(4294967295));
        f[p++] = F,
        F = F >> 8,
        f[p++] = F,
        F = F >> 8,
        f[p++] = F,
        F = F >> 8,
        f[p++] = F;
        let he = Number(h >> BigInt(32) & BigInt(4294967295));
        return f[p++] = he,
        he = he >> 8,
        f[p++] = he,
        he = he >> 8,
        f[p++] = he,
        he = he >> 8,
        f[p++] = he,
        p
    }
    function H(f, h, p, v, N) {
        Z(h, v, N, f, p, 7);
        let F = Number(h & BigInt(4294967295));
        f[p + 7] = F,
        F = F >> 8,
        f[p + 6] = F,
        F = F >> 8,
        f[p + 5] = F,
        F = F >> 8,
        f[p + 4] = F;
        let he = Number(h >> BigInt(32) & BigInt(4294967295));
        return f[p + 3] = he,
        he = he >> 8,
        f[p + 2] = he,
        he = he >> 8,
        f[p + 1] = he,
        he = he >> 8,
        f[p] = he,
        p + 8
    }
    o.prototype.writeBigUInt64LE = be(function(f, h=0) {
        return S(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    o.prototype.writeBigUInt64BE = be(function(f, h=0) {
        return H(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    o.prototype.writeIntLE = function(f, h, p, v) {
        if (f = +f,
        h = h >>> 0,
        !v) {
            let Te = Math.pow(2, 8 * p - 1);
            ge(this, f, h, p, Te - 1, -Te)
        }
        let N = 0
          , F = 1
          , he = 0;
        for (this[h] = f & 255; ++N < p && (F *= 256); )
            f < 0 && he === 0 && this[h + N - 1] !== 0 && (he = 1),
            this[h + N] = (f / F >> 0) - he & 255;
        return h + p
    }
    ,
    o.prototype.writeIntBE = function(f, h, p, v) {
        if (f = +f,
        h = h >>> 0,
        !v) {
            let Te = Math.pow(2, 8 * p - 1);
            ge(this, f, h, p, Te - 1, -Te)
        }
        let N = p - 1
          , F = 1
          , he = 0;
        for (this[h + N] = f & 255; --N >= 0 && (F *= 256); )
            f < 0 && he === 0 && this[h + N + 1] !== 0 && (he = 1),
            this[h + N] = (f / F >> 0) - he & 255;
        return h + p
    }
    ,
    o.prototype.writeInt8 = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 1, 127, -128),
        f < 0 && (f = 255 + f + 1),
        this[h] = f & 255,
        h + 1
    }
    ,
    o.prototype.writeInt16LE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 2, 32767, -32768),
        this[h] = f & 255,
        this[h + 1] = f >>> 8,
        h + 2
    }
    ,
    o.prototype.writeInt16BE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 2, 32767, -32768),
        this[h] = f >>> 8,
        this[h + 1] = f & 255,
        h + 2
    }
    ,
    o.prototype.writeInt32LE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 4, 2147483647, -2147483648),
        this[h] = f & 255,
        this[h + 1] = f >>> 8,
        this[h + 2] = f >>> 16,
        this[h + 3] = f >>> 24,
        h + 4
    }
    ,
    o.prototype.writeInt32BE = function(f, h, p) {
        return f = +f,
        h = h >>> 0,
        p || ge(this, f, h, 4, 2147483647, -2147483648),
        f < 0 && (f = 4294967295 + f + 1),
        this[h] = f >>> 24,
        this[h + 1] = f >>> 16,
        this[h + 2] = f >>> 8,
        this[h + 3] = f & 255,
        h + 4
    }
    ,
    o.prototype.writeBigInt64LE = be(function(f, h=0) {
        return S(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    o.prototype.writeBigInt64BE = be(function(f, h=0) {
        return H(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function me(f, h, p, v, N, F) {
        if (p + v > f.length)
            throw new RangeError("Index out of range");
        if (p < 0)
            throw new RangeError("Index out of range")
    }
    function ye(f, h, p, v, N) {
        return h = +h,
        p = p >>> 0,
        N || me(f, h, p, 4),
        t.write(f, h, p, v, 23, 4),
        p + 4
    }
    o.prototype.writeFloatLE = function(f, h, p) {
        return ye(this, f, h, !0, p)
    }
    ,
    o.prototype.writeFloatBE = function(f, h, p) {
        return ye(this, f, h, !1, p)
    }
    ;
    function de(f, h, p, v, N) {
        return h = +h,
        p = p >>> 0,
        N || me(f, h, p, 8),
        t.write(f, h, p, v, 52, 8),
        p + 8
    }
    o.prototype.writeDoubleLE = function(f, h, p) {
        return de(this, f, h, !0, p)
    }
    ,
    o.prototype.writeDoubleBE = function(f, h, p) {
        return de(this, f, h, !1, p)
    }
    ,
    o.prototype.copy = function(f, h, p, v) {
        if (!o.isBuffer(f))
            throw new TypeError("argument should be a Buffer");
        if (p || (p = 0),
        !v && v !== 0 && (v = this.length),
        h >= f.length && (h = f.length),
        h || (h = 0),
        v > 0 && v < p && (v = p),
        v === p || f.length === 0 || this.length === 0)
            return 0;
        if (h < 0)
            throw new RangeError("targetStart out of bounds");
        if (p < 0 || p >= this.length)
            throw new RangeError("Index out of range");
        if (v < 0)
            throw new RangeError("sourceEnd out of bounds");
        v > this.length && (v = this.length),
        f.length - h < v - p && (v = f.length - h + p);
        let N = v - p;
        return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, p, v) : Uint8Array.prototype.set.call(f, this.subarray(p, v), h),
        N
    }
    ,
    o.prototype.fill = function(f, h, p, v) {
        if (typeof f == "string") {
            if (typeof h == "string" ? (v = h,
            h = 0,
            p = this.length) : typeof p == "string" && (v = p,
            p = this.length),
            v !== void 0 && typeof v != "string")
                throw new TypeError("encoding must be a string");
            if (typeof v == "string" && !o.isEncoding(v))
                throw new TypeError("Unknown encoding: " + v);
            if (f.length === 1) {
                let F = f.charCodeAt(0);
                (v === "utf8" && F < 128 || v === "latin1") && (f = F)
            }
        } else
            typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
        if (h < 0 || this.length < h || this.length < p)
            throw new RangeError("Out of range index");
        if (p <= h)
            return this;
        h = h >>> 0,
        p = p === void 0 ? this.length : p >>> 0,
        f || (f = 0);
        let N;
        if (typeof f == "number")
            for (N = h; N < p; ++N)
                this[N] = f;
        else {
            let F = o.isBuffer(f) ? f : o.from(f, v)
              , he = F.length;
            if (he === 0)
                throw new TypeError('The value "' + f + '" is invalid for argument "value"');
            for (N = 0; N < p - h; ++N)
                this[N + h] = F[N % he]
        }
        return this
    }
    ;
    let C = {};
    function I(f, h, p) {
        C[f] = class extends p {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: h.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${f}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return f
            }
            set code(v) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: v,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${f}]: ${this.message}`
            }
        }
    }
    I("ERR_BUFFER_OUT_OF_BOUNDS", function(f) {
        return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
    I("ERR_INVALID_ARG_TYPE", function(f, h) {
        return `The "${f}" argument must be of type number. Received type ${typeof h}`
    }, TypeError),
    I("ERR_OUT_OF_RANGE", function(f, h, p) {
        let v = `The value of "${f}" is out of range.`
          , N = p;
        return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? N = G(String(p)) : typeof p == "bigint" && (N = String(p),
        (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (N = G(N)),
        N += "n"),
        v += ` It must be ${h}. Received ${N}`,
        v
    }, RangeError);
    function G(f) {
        let h = ""
          , p = f.length
          , v = f[0] === "-" ? 1 : 0;
        for (; p >= v + 4; p -= 3)
            h = `_${f.slice(p - 3, p)}${h}`;
        return `${f.slice(0, p)}${h}`
    }
    function ae(f, h, p) {
        z(h, "offset"),
        (f[h] === void 0 || f[h + p] === void 0) && L(h, f.length - (p + 1))
    }
    function Z(f, h, p, v, N, F) {
        if (f > p || f < h) {
            let he = typeof h == "bigint" ? "n" : "", Te;
            throw F > 3 ? h === 0 || h === BigInt(0) ? Te = `>= 0${he} and < 2${he} ** ${(F + 1) * 8}${he}` : Te = `>= -(2${he} ** ${(F + 1) * 8 - 1}${he}) and < 2 ** ${(F + 1) * 8 - 1}${he}` : Te = `>= ${h}${he} and <= ${p}${he}`,
            new C.ERR_OUT_OF_RANGE("value",Te,f)
        }
        ae(v, N, F)
    }
    function z(f, h) {
        if (typeof f != "number")
            throw new C.ERR_INVALID_ARG_TYPE(h,"number",f)
    }
    function L(f, h, p) {
        throw Math.floor(f) !== f ? (z(f, p),
        new C.ERR_OUT_OF_RANGE(p || "offset","an integer",f)) : h < 0 ? new C.ERR_BUFFER_OUT_OF_BOUNDS : new C.ERR_OUT_OF_RANGE(p || "offset",`>= ${p ? 1 : 0} and <= ${h}`,f)
    }
    let ce = /[^+/0-9A-Za-z-_]/g;
    function P(f) {
        if (f = f.split("=")[0],
        f = f.trim().replace(ce, ""),
        f.length < 2)
            return "";
        for (; f.length % 4 !== 0; )
            f = f + "=";
        return f
    }
    function D(f, h) {
        h = h || 1 / 0;
        let p, v = f.length, N = null, F = [];
        for (let he = 0; he < v; ++he) {
            if (p = f.charCodeAt(he),
            p > 55295 && p < 57344) {
                if (!N) {
                    if (p > 56319) {
                        (h -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    } else if (he + 1 === v) {
                        (h -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    }
                    N = p;
                    continue
                }
                if (p < 56320) {
                    (h -= 3) > -1 && F.push(239, 191, 189),
                    N = p;
                    continue
                }
                p = (N - 55296 << 10 | p - 56320) + 65536
            } else
                N && (h -= 3) > -1 && F.push(239, 191, 189);
            if (N = null,
            p < 128) {
                if ((h -= 1) < 0)
                    break;
                F.push(p)
            } else if (p < 2048) {
                if ((h -= 2) < 0)
                    break;
                F.push(p >> 6 | 192, p & 63 | 128)
            } else if (p < 65536) {
                if ((h -= 3) < 0)
                    break;
                F.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128)
            } else if (p < 1114112) {
                if ((h -= 4) < 0)
                    break;
                F.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return F
    }
    function B(f) {
        let h = [];
        for (let p = 0; p < f.length; ++p)
            h.push(f.charCodeAt(p) & 255);
        return h
    }
    function ne(f, h) {
        let p, v, N, F = [];
        for (let he = 0; he < f.length && !((h -= 2) < 0); ++he)
            p = f.charCodeAt(he),
            v = p >> 8,
            N = p % 256,
            F.push(N),
            F.push(v);
        return F
    }
    function J(f) {
        return e.toByteArray(P(f))
    }
    function x(f, h, p, v) {
        let N;
        for (N = 0; N < v && !(N + p >= h.length || N >= f.length); ++N)
            h[N + p] = f[N];
        return N
    }
    function K(f, h) {
        return f instanceof h || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === h.name
    }
    function X(f) {
        return f !== f
    }
    let _e = function() {
        let f = "0123456789abcdef"
          , h = new Array(256);
        for (let p = 0; p < 16; ++p) {
            let v = p * 16;
            for (let N = 0; N < 16; ++N)
                h[v + N] = f[p] + f[N]
        }
        return h
    }();
    function be(f) {
        return typeof BigInt > "u" ? ke : f
    }
    function ke() {
        throw new Error("BigInt not supported")
    }
    return Nt
}
var on, co, Tn, uo, Nt, ho, mt, Xn, ka, wa, Ge = We( () => {
    ie(),
    se(),
    oe(),
    on = {},
    co = !1,
    Tn = {},
    uo = !1,
    Nt = {},
    ho = !1,
    mt = iu(),
    mt.Buffer,
    mt.SlowBuffer,
    mt.INSPECT_MAX_BYTES,
    mt.kMaxLength,
    Xn = mt.Buffer,
    ka = mt.INSPECT_MAX_BYTES,
    wa = mt.kMaxLength
}
), se = We( () => {
    Ge()
}
), ou = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = class {
        constructor(n) {
            this.aliasToTopic = {},
            this.max = n
        }
        put(n, i) {
            return i === 0 || i > this.max ? !1 : (this.aliasToTopic[i] = n,
            this.length = Object.keys(this.aliasToTopic).length,
            !0)
        }
        getTopicByAlias(n) {
            return this.aliasToTopic[n]
        }
        clear() {
            this.aliasToTopic = {}
        }
    }
    ;
    e.default = t
}
), qe = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe(),
    t.exports = {
        ArrayIsArray(n) {
            return Array.isArray(n)
        },
        ArrayPrototypeIncludes(n, i) {
            return n.includes(i)
        },
        ArrayPrototypeIndexOf(n, i) {
            return n.indexOf(i)
        },
        ArrayPrototypeJoin(n, i) {
            return n.join(i)
        },
        ArrayPrototypeMap(n, i) {
            return n.map(i)
        },
        ArrayPrototypePop(n, i) {
            return n.pop(i)
        },
        ArrayPrototypePush(n, i) {
            return n.push(i)
        },
        ArrayPrototypeSlice(n, i, s) {
            return n.slice(i, s)
        },
        Error,
        FunctionPrototypeCall(n, i, ...s) {
            return n.call(i, ...s)
        },
        FunctionPrototypeSymbolHasInstance(n, i) {
            return Function.prototype[Symbol.hasInstance].call(n, i)
        },
        MathFloor: Math.floor,
        Number,
        NumberIsInteger: Number.isInteger,
        NumberIsNaN: Number.isNaN,
        NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
        NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
        NumberParseInt: Number.parseInt,
        ObjectDefineProperties(n, i) {
            return Object.defineProperties(n, i)
        },
        ObjectDefineProperty(n, i, s) {
            return Object.defineProperty(n, i, s)
        },
        ObjectGetOwnPropertyDescriptor(n, i) {
            return Object.getOwnPropertyDescriptor(n, i)
        },
        ObjectKeys(n) {
            return Object.keys(n)
        },
        ObjectSetPrototypeOf(n, i) {
            return Object.setPrototypeOf(n, i)
        },
        Promise,
        PromisePrototypeCatch(n, i) {
            return n.catch(i)
        },
        PromisePrototypeThen(n, i, s) {
            return n.then(i, s)
        },
        PromiseReject(n) {
            return Promise.reject(n)
        },
        ReflectApply: Reflect.apply,
        RegExpPrototypeTest(n, i) {
            return n.test(i)
        },
        SafeSet: Set,
        String,
        StringPrototypeSlice(n, i, s) {
            return n.slice(i, s)
        },
        StringPrototypeToLowerCase(n) {
            return n.toLowerCase()
        },
        StringPrototypeToUpperCase(n) {
            return n.toUpperCase()
        },
        StringPrototypeTrim(n) {
            return n.trim()
        },
        Symbol,
        SymbolFor: Symbol.for,
        SymbolAsyncIterator: Symbol.asyncIterator,
        SymbolHasInstance: Symbol.hasInstance,
        SymbolIterator: Symbol.iterator,
        TypedArrayPrototypeSet(n, i, s) {
            return n.set(i, s)
        },
        Uint8Array
    }
}
), kt = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = (Ge(),
    Pe(Ve))
      , i = Object.getPrototypeOf(async function() {}).constructor
      , s = globalThis.Blob || n.Blob
      , r = typeof s < "u" ? function(a) {
        return a instanceof s
    }
    : function(a) {
        return !1
    }
      , o = class extends Error {
        constructor(a) {
            if (!Array.isArray(a))
                throw new TypeError(`Expected input to be an Array, got ${typeof a}`);
            let l = "";
            for (let c = 0; c < a.length; c++)
                l += `    ${a[c].stack}
`;
            super(l),
            this.name = "AggregateError",
            this.errors = a
        }
    }
    ;
    t.exports = {
        AggregateError: o,
        kEmptyObject: Object.freeze({}),
        once(a) {
            let l = !1;
            return function(...c) {
                l || (l = !0,
                a.apply(this, c))
            }
        },
        createDeferredPromise: function() {
            let a, l;
            return {
                promise: new Promise( (c, u) => {
                    a = c,
                    l = u
                }
                ),
                resolve: a,
                reject: l
            }
        },
        promisify(a) {
            return new Promise( (l, c) => {
                a( (u, ...d) => u ? c(u) : l(...d))
            }
            )
        },
        debuglog() {
            return function() {}
        },
        format(a, ...l) {
            return a.replace(/%([sdifj])/g, function(...[c,u]) {
                let d = l.shift();
                return u === "f" ? d.toFixed(6) : u === "j" ? JSON.stringify(d) : u === "s" && typeof d == "object" ? `${d.constructor !== Object ? d.constructor.name : ""} {}`.trim() : d.toString()
            })
        },
        inspect(a) {
            switch (typeof a) {
            case "string":
                if (a.includes("'"))
                    if (a.includes('"')) {
                        if (!a.includes("`") && !a.includes("${"))
                            return `\`${a}\``
                    } else
                        return `"${a}"`;
                return `'${a}'`;
            case "number":
                return isNaN(a) ? "NaN" : Object.is(a, -0) ? String(a) : a;
            case "bigint":
                return `${String(a)}n`;
            case "boolean":
            case "undefined":
                return String(a);
            case "object":
                return "{}"
            }
        },
        types: {
            isAsyncFunction(a) {
                return a instanceof i
            },
            isArrayBufferView(a) {
                return ArrayBuffer.isView(a)
            }
        },
        isBlob: r
    },
    t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom")
}
), Oo = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {AbortController: n, AbortSignal: i} = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
    t.exports = n,
    t.exports.AbortSignal = i,
    t.exports.default = n
}
), ze = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {format: n, inspect: i, AggregateError: s} = kt()
      , r = globalThis.AggregateError || s
      , o = Symbol("kIsNodeError")
      , a = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"]
      , l = /^([A-Z][a-z0-9]*)+$/
      , c = "__node_internal_"
      , u = {};
    function d(w, T) {
        if (!w)
            throw new u.ERR_INTERNAL_ASSERTION(T)
    }
    function m(w) {
        let T = ""
          , R = w.length
          , M = w[0] === "-" ? 1 : 0;
        for (; R >= M + 4; R -= 3)
            T = `_${w.slice(R - 3, R)}${T}`;
        return `${w.slice(0, R)}${T}`
    }
    function y(w, T, R) {
        if (typeof T == "function")
            return d(T.length <= R.length, `Code: ${w}; The provided arguments length (${R.length}) does not match the required ones (${T.length}).`),
            T(...R);
        let M = (T.match(/%[dfijoOs]/g) || []).length;
        return d(M === R.length, `Code: ${w}; The provided arguments length (${R.length}) does not match the required ones (${M}).`),
        R.length === 0 ? T : n(T, ...R)
    }
    function _(w, T, R) {
        R || (R = Error);
        class M extends R {
            constructor(...A) {
                super(y(w, T, A))
            }
            toString() {
                return `${this.name} [${w}]: ${this.message}`
            }
        }
        Object.defineProperties(M.prototype, {
            name: {
                value: R.name,
                writable: !0,
                enumerable: !1,
                configurable: !0
            },
            toString: {
                value() {
                    return `${this.name} [${w}]: ${this.message}`
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
            }
        }),
        M.prototype.code = w,
        M.prototype[o] = !0,
        u[w] = M
    }
    function g(w) {
        let T = c + w.name;
        return Object.defineProperty(w, "name", {
            value: T
        }),
        w
    }
    function b(w, T) {
        if (w && T && w !== T) {
            if (Array.isArray(T.errors))
                return T.errors.push(w),
                T;
            let R = new r([T, w],T.message);
            return R.code = T.code,
            R
        }
        return w || T
    }
    var k = class extends Error {
        constructor(w="The operation was aborted", T=void 0) {
            if (T !== void 0 && typeof T != "object")
                throw new u.ERR_INVALID_ARG_TYPE("options","Object",T);
            super(w, T),
            this.code = "ABORT_ERR",
            this.name = "AbortError"
        }
    }
    ;
    _("ERR_ASSERTION", "%s", Error),
    _("ERR_INVALID_ARG_TYPE", (w, T, R) => {
        d(typeof w == "string", "'name' must be a string"),
        Array.isArray(T) || (T = [T]);
        let M = "The ";
        w.endsWith(" argument") ? M += `${w} ` : M += `"${w}" ${w.includes(".") ? "property" : "argument"} `,
        M += "must be ";
        let E = []
          , A = []
          , U = [];
        for (let $ of T)
            d(typeof $ == "string", "All expected entries have to be of type string"),
            a.includes($) ? E.push($.toLowerCase()) : l.test($) ? A.push($) : (d($ !== "object", 'The value "object" should be written as "Object"'),
            U.push($));
        if (A.length > 0) {
            let $ = E.indexOf("object");
            $ !== -1 && (E.splice(E, $, 1),
            A.push("Object"))
        }
        if (E.length > 0) {
            switch (E.length) {
            case 1:
                M += `of type ${E[0]}`;
                break;
            case 2:
                M += `one of type ${E[0]} or ${E[1]}`;
                break;
            default:
                {
                    let $ = E.pop();
                    M += `one of type ${E.join(", ")}, or ${$}`
                }
            }
            (A.length > 0 || U.length > 0) && (M += " or ")
        }
        if (A.length > 0) {
            switch (A.length) {
            case 1:
                M += `an instance of ${A[0]}`;
                break;
            case 2:
                M += `an instance of ${A[0]} or ${A[1]}`;
                break;
            default:
                {
                    let $ = A.pop();
                    M += `an instance of ${A.join(", ")}, or ${$}`
                }
            }
            U.length > 0 && (M += " or ")
        }
        switch (U.length) {
        case 0:
            break;
        case 1:
            U[0].toLowerCase() !== U[0] && (M += "an "),
            M += `${U[0]}`;
            break;
        case 2:
            M += `one of ${U[0]} or ${U[1]}`;
            break;
        default:
            {
                let $ = U.pop();
                M += `one of ${U.join(", ")}, or ${$}`
            }
        }
        if (R == null)
            M += `. Received ${R}`;
        else if (typeof R == "function" && R.name)
            M += `. Received function ${R.name}`;
        else if (typeof R == "object") {
            var W;
            if ((W = R.constructor) !== null && W !== void 0 && W.name)
                M += `. Received an instance of ${R.constructor.name}`;
            else {
                let $ = i(R, {
                    depth: -1
                });
                M += `. Received ${$}`
            }
        } else {
            let $ = i(R, {
                colors: !1
            });
            $.length > 25 && ($ = `${$.slice(0, 25)}...`),
            M += `. Received type ${typeof R} (${$})`
        }
        return M
    }
    , TypeError),
    _("ERR_INVALID_ARG_VALUE", (w, T, R="is invalid") => {
        let M = i(T);
        return M.length > 128 && (M = M.slice(0, 128) + "..."),
        `The ${w.includes(".") ? "property" : "argument"} '${w}' ${R}. Received ${M}`
    }
    , TypeError),
    _("ERR_INVALID_RETURN_VALUE", (w, T, R) => {
        var M;
        let E = R != null && (M = R.constructor) !== null && M !== void 0 && M.name ? `instance of ${R.constructor.name}` : `type ${typeof R}`;
        return `Expected ${w} to be returned from the "${T}" function but got ${E}.`
    }
    , TypeError),
    _("ERR_MISSING_ARGS", (...w) => {
        d(w.length > 0, "At least one arg needs to be specified");
        let T, R = w.length;
        switch (w = (Array.isArray(w) ? w : [w]).map(M => `"${M}"`).join(" or "),
        R) {
        case 1:
            T += `The ${w[0]} argument`;
            break;
        case 2:
            T += `The ${w[0]} and ${w[1]} arguments`;
            break;
        default:
            {
                let M = w.pop();
                T += `The ${w.join(", ")}, and ${M} arguments`
            }
            break
        }
        return `${T} must be specified`
    }
    , TypeError),
    _("ERR_OUT_OF_RANGE", (w, T, R) => {
        d(T, 'Missing "range" argument');
        let M;
        return Number.isInteger(R) && Math.abs(R) > 2 ** 32 ? M = m(String(R)) : typeof R == "bigint" ? (M = String(R),
        (R > 2n ** 32n || R < -(2n ** 32n)) && (M = m(M)),
        M += "n") : M = i(R),
        `The value of "${w}" is out of range. It must be ${T}. Received ${M}`
    }
    , RangeError),
    _("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error),
    _("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error),
    _("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error),
    _("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error),
    _("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error),
    _("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
    _("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error),
    _("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error),
    _("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error),
    _("ERR_STREAM_WRITE_AFTER_END", "write after end", Error),
    _("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError),
    t.exports = {
        AbortError: k,
        aggregateTwoErrors: g(b),
        hideStackFrames: g,
        codes: u
    }
}
), rr = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ArrayIsArray: n, ArrayPrototypeIncludes: i, ArrayPrototypeJoin: s, ArrayPrototypeMap: r, NumberIsInteger: o, NumberIsNaN: a, NumberMAX_SAFE_INTEGER: l, NumberMIN_SAFE_INTEGER: c, NumberParseInt: u, ObjectPrototypeHasOwnProperty: d, RegExpPrototypeExec: m, String: y, StringPrototypeToUpperCase: _, StringPrototypeTrim: g} = qe()
      , {hideStackFrames: b, codes: {ERR_SOCKET_BAD_PORT: k, ERR_INVALID_ARG_TYPE: w, ERR_INVALID_ARG_VALUE: T, ERR_OUT_OF_RANGE: R, ERR_UNKNOWN_SIGNAL: M}} = ze()
      , {normalizeEncoding: E} = kt()
      , {isAsyncFunction: A, isArrayBufferView: U} = kt().types
      , W = {};
    function $(x) {
        return x === (x | 0)
    }
    function Q(x) {
        return x === x >>> 0
    }
    var O = /^[0-7]+$/
      , j = "must be a 32-bit unsigned integer or an octal string";
    function Y(x, K, X) {
        if (typeof x > "u" && (x = X),
        typeof x == "string") {
            if (m(O, x) === null)
                throw new T(K,x,j);
            x = u(x, 8)
        }
        return re(x, K),
        x
    }
    var V = b( (x, K, X=c, _e=l) => {
        if (typeof x != "number")
            throw new w(K,"number",x);
        if (!o(x))
            throw new R(K,"an integer",x);
        if (x < X || x > _e)
            throw new R(K,`>= ${X} && <= ${_e}`,x)
    }
    )
      , le = b( (x, K, X=-2147483648, _e=2147483647) => {
        if (typeof x != "number")
            throw new w(K,"number",x);
        if (!o(x))
            throw new R(K,"an integer",x);
        if (x < X || x > _e)
            throw new R(K,`>= ${X} && <= ${_e}`,x)
    }
    )
      , re = b( (x, K, X=!1) => {
        if (typeof x != "number")
            throw new w(K,"number",x);
        if (!o(x))
            throw new R(K,"an integer",x);
        let _e = X ? 1 : 0
          , be = 4294967295;
        if (x < _e || x > be)
            throw new R(K,`>= ${_e} && <= ${be}`,x)
    }
    );
    function q(x, K) {
        if (typeof x != "string")
            throw new w(K,"string",x)
    }
    function pe(x, K, X=void 0, _e) {
        if (typeof x != "number")
            throw new w(K,"number",x);
        if (X != null && x < X || _e != null && x > _e || (X != null || _e != null) && a(x))
            throw new R(K,`${X != null ? `>= ${X}` : ""}${X != null && _e != null ? " && " : ""}${_e != null ? `<= ${_e}` : ""}`,x)
    }
    var te = b( (x, K, X) => {
        if (!i(X, x)) {
            let _e = "must be one of: " + s(r(X, be => typeof be == "string" ? `'${be}'` : y(be)), ", ");
            throw new T(K,x,_e)
        }
    }
    );
    function ge(x, K) {
        if (typeof x != "boolean")
            throw new w(K,"boolean",x)
    }
    function S(x, K, X) {
        return x == null || !d(x, K) ? X : x[K]
    }
    var H = b( (x, K, X=null) => {
        let _e = S(X, "allowArray", !1)
          , be = S(X, "allowFunction", !1);
        if (!S(X, "nullable", !1) && x === null || !_e && n(x) || typeof x != "object" && (!be || typeof x != "function"))
            throw new w(K,"Object",x)
    }
    )
      , me = b( (x, K) => {
        if (x != null && typeof x != "object" && typeof x != "function")
            throw new w(K,"a dictionary",x)
    }
    )
      , ye = b( (x, K, X=0) => {
        if (!n(x))
            throw new w(K,"Array",x);
        if (x.length < X) {
            let _e = `must be longer than ${X}`;
            throw new T(K,x,_e)
        }
    }
    );
    function de(x, K) {
        ye(x, K);
        for (let X = 0; X < x.length; X++)
            q(x[X], `${K}[${X}]`)
    }
    function C(x, K) {
        ye(x, K);
        for (let X = 0; X < x.length; X++)
            ge(x[X], `${K}[${X}]`)
    }
    function I(x, K="signal") {
        if (q(x, K),
        W[x] === void 0)
            throw W[_(x)] !== void 0 ? new M(x + " (signals must use all capital letters)") : new M(x)
    }
    var G = b( (x, K="buffer") => {
        if (!U(x))
            throw new w(K,["Buffer", "TypedArray", "DataView"],x)
    }
    );
    function ae(x, K) {
        let X = E(K)
          , _e = x.length;
        if (X === "hex" && _e % 2 !== 0)
            throw new T("encoding",K,`is invalid for data of length ${_e}`)
    }
    function Z(x, K="Port", X=!0) {
        if (typeof x != "number" && typeof x != "string" || typeof x == "string" && g(x).length === 0 || +x !== +x >>> 0 || x > 65535 || x === 0 && !X)
            throw new k(K,x,X);
        return x | 0
    }
    var z = b( (x, K) => {
        if (x !== void 0 && (x === null || typeof x != "object" || !("aborted"in x)))
            throw new w(K,"AbortSignal",x)
    }
    )
      , L = b( (x, K) => {
        if (typeof x != "function")
            throw new w(K,"Function",x)
    }
    )
      , ce = b( (x, K) => {
        if (typeof x != "function" || A(x))
            throw new w(K,"Function",x)
    }
    )
      , P = b( (x, K) => {
        if (x !== void 0)
            throw new w(K,"undefined",x)
    }
    );
    function D(x, K, X) {
        if (!i(X, x))
            throw new w(K,`('${s(X, "|")}')`,x)
    }
    var B = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
    function ne(x, K) {
        if (typeof x > "u" || !m(B, x))
            throw new T(K,x,'must be an array or string of format "</styles.css>; rel=preload; as=style"')
    }
    function J(x) {
        if (typeof x == "string")
            return ne(x, "hints"),
            x;
        if (n(x)) {
            let K = x.length
              , X = "";
            if (K === 0)
                return X;
            for (let _e = 0; _e < K; _e++) {
                let be = x[_e];
                ne(be, "hints"),
                X += be,
                _e !== K - 1 && (X += ", ")
            }
            return X
        }
        throw new T("hints",x,'must be an array or string of format "</styles.css>; rel=preload; as=style"')
    }
    t.exports = {
        isInt32: $,
        isUint32: Q,
        parseFileMode: Y,
        validateArray: ye,
        validateStringArray: de,
        validateBooleanArray: C,
        validateBoolean: ge,
        validateBuffer: G,
        validateDictionary: me,
        validateEncoding: ae,
        validateFunction: L,
        validateInt32: le,
        validateInteger: V,
        validateNumber: pe,
        validateObject: H,
        validateOneOf: te,
        validatePlainFunction: ce,
        validatePort: Z,
        validateSignalName: I,
        validateString: q,
        validateUint32: re,
        validateUndefined: P,
        validateUnion: D,
        validateAbortSignal: z,
        validateLinkHeaderValue: J
    }
}
), Qt = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = t.exports = {}, i, s;
    function r() {
        throw new Error("setTimeout has not been defined")
    }
    function o() {
        throw new Error("clearTimeout has not been defined")
    }
    (function() {
        try {
            typeof setTimeout == "function" ? i = setTimeout : i = r
        } catch {
            i = r
        }
        try {
            typeof clearTimeout == "function" ? s = clearTimeout : s = o
        } catch {
            s = o
        }
    }
    )();
    function a(k) {
        if (i === setTimeout)
            return setTimeout(k, 0);
        if ((i === r || !i) && setTimeout)
            return i = setTimeout,
            setTimeout(k, 0);
        try {
            return i(k, 0)
        } catch {
            try {
                return i.call(null, k, 0)
            } catch {
                return i.call(this, k, 0)
            }
        }
    }
    function l(k) {
        if (s === clearTimeout)
            return clearTimeout(k);
        if ((s === o || !s) && clearTimeout)
            return s = clearTimeout,
            clearTimeout(k);
        try {
            return s(k)
        } catch {
            try {
                return s.call(null, k)
            } catch {
                return s.call(this, k)
            }
        }
    }
    var c = [], u = !1, d, m = -1;
    function y() {
        !u || !d || (u = !1,
        d.length ? c = d.concat(c) : m = -1,
        c.length && _())
    }
    function _() {
        if (!u) {
            var k = a(y);
            u = !0;
            for (var w = c.length; w; ) {
                for (d = c,
                c = []; ++m < w; )
                    d && d[m].run();
                m = -1,
                w = c.length
            }
            d = null,
            u = !1,
            l(k)
        }
    }
    n.nextTick = function(k) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var T = 1; T < arguments.length; T++)
                w[T - 1] = arguments[T];
        c.push(new g(k,w)),
        c.length === 1 && !u && a(_)
    }
    ;
    function g(k, w) {
        this.fun = k,
        this.array = w
    }
    g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    n.title = "browser",
    n.browser = !0,
    n.env = {},
    n.argv = [],
    n.version = "",
    n.versions = {};
    function b() {}
    n.on = b,
    n.addListener = b,
    n.once = b,
    n.off = b,
    n.removeListener = b,
    n.removeAllListeners = b,
    n.emit = b,
    n.prependListener = b,
    n.prependOnceListener = b,
    n.listeners = function(k) {
        return []
    }
    ,
    n.binding = function(k) {
        throw new Error("process.binding is not supported")
    }
    ,
    n.cwd = function() {
        return "/"
    }
    ,
    n.chdir = function(k) {
        throw new Error("process.chdir is not supported")
    }
    ,
    n.umask = function() {
        return 0
    }
}
), Et = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {Symbol: n, SymbolAsyncIterator: i, SymbolIterator: s, SymbolFor: r} = qe()
      , o = n("kDestroyed")
      , a = n("kIsErrored")
      , l = n("kIsReadable")
      , c = n("kIsDisturbed")
      , u = r("nodejs.webstream.isClosedPromise")
      , d = r("nodejs.webstream.controllerErrorFunction");
    function m(S, H=!1) {
        var me;
        return !!(S && typeof S.pipe == "function" && typeof S.on == "function" && (!H || typeof S.pause == "function" && typeof S.resume == "function") && (!S._writableState || ((me = S._readableState) === null || me === void 0 ? void 0 : me.readable) !== !1) && (!S._writableState || S._readableState))
    }
    function y(S) {
        var H;
        return !!(S && typeof S.write == "function" && typeof S.on == "function" && (!S._readableState || ((H = S._writableState) === null || H === void 0 ? void 0 : H.writable) !== !1))
    }
    function _(S) {
        return !!(S && typeof S.pipe == "function" && S._readableState && typeof S.on == "function" && typeof S.write == "function")
    }
    function g(S) {
        return S && (S._readableState || S._writableState || typeof S.write == "function" && typeof S.on == "function" || typeof S.pipe == "function" && typeof S.on == "function")
    }
    function b(S) {
        return !!(S && !g(S) && typeof S.pipeThrough == "function" && typeof S.getReader == "function" && typeof S.cancel == "function")
    }
    function k(S) {
        return !!(S && !g(S) && typeof S.getWriter == "function" && typeof S.abort == "function")
    }
    function w(S) {
        return !!(S && !g(S) && typeof S.readable == "object" && typeof S.writable == "object")
    }
    function T(S) {
        return b(S) || k(S) || w(S)
    }
    function R(S, H) {
        return S == null ? !1 : H === !0 ? typeof S[i] == "function" : H === !1 ? typeof S[s] == "function" : typeof S[i] == "function" || typeof S[s] == "function"
    }
    function M(S) {
        if (!g(S))
            return null;
        let H = S._writableState
          , me = S._readableState
          , ye = H || me;
        return !!(S.destroyed || S[o] || ye != null && ye.destroyed)
    }
    function E(S) {
        if (!y(S))
            return null;
        if (S.writableEnded === !0)
            return !0;
        let H = S._writableState;
        return H != null && H.errored ? !1 : typeof H?.ended != "boolean" ? null : H.ended
    }
    function A(S, H) {
        if (!y(S))
            return null;
        if (S.writableFinished === !0)
            return !0;
        let me = S._writableState;
        return me != null && me.errored ? !1 : typeof me?.finished != "boolean" ? null : !!(me.finished || H === !1 && me.ended === !0 && me.length === 0)
    }
    function U(S) {
        if (!m(S))
            return null;
        if (S.readableEnded === !0)
            return !0;
        let H = S._readableState;
        return !H || H.errored ? !1 : typeof H?.ended != "boolean" ? null : H.ended
    }
    function W(S, H) {
        if (!m(S))
            return null;
        let me = S._readableState;
        return me != null && me.errored ? !1 : typeof me?.endEmitted != "boolean" ? null : !!(me.endEmitted || H === !1 && me.ended === !0 && me.length === 0)
    }
    function $(S) {
        return S && S[l] != null ? S[l] : typeof S?.readable != "boolean" ? null : M(S) ? !1 : m(S) && S.readable && !W(S)
    }
    function Q(S) {
        return typeof S?.writable != "boolean" ? null : M(S) ? !1 : y(S) && S.writable && !E(S)
    }
    function O(S, H) {
        return g(S) ? M(S) ? !0 : !(H?.readable !== !1 && $(S) || H?.writable !== !1 && Q(S)) : null
    }
    function j(S) {
        var H, me;
        return g(S) ? S.writableErrored ? S.writableErrored : (H = (me = S._writableState) === null || me === void 0 ? void 0 : me.errored) !== null && H !== void 0 ? H : null : null
    }
    function Y(S) {
        var H, me;
        return g(S) ? S.readableErrored ? S.readableErrored : (H = (me = S._readableState) === null || me === void 0 ? void 0 : me.errored) !== null && H !== void 0 ? H : null : null
    }
    function V(S) {
        if (!g(S))
            return null;
        if (typeof S.closed == "boolean")
            return S.closed;
        let H = S._writableState
          , me = S._readableState;
        return typeof H?.closed == "boolean" || typeof me?.closed == "boolean" ? H?.closed || me?.closed : typeof S._closed == "boolean" && le(S) ? S._closed : null
    }
    function le(S) {
        return typeof S._closed == "boolean" && typeof S._defaultKeepAlive == "boolean" && typeof S._removedConnection == "boolean" && typeof S._removedContLen == "boolean"
    }
    function re(S) {
        return typeof S._sent100 == "boolean" && le(S)
    }
    function q(S) {
        var H;
        return typeof S._consuming == "boolean" && typeof S._dumped == "boolean" && ((H = S.req) === null || H === void 0 ? void 0 : H.upgradeOrConnect) === void 0
    }
    function pe(S) {
        if (!g(S))
            return null;
        let H = S._writableState
          , me = S._readableState
          , ye = H || me;
        return !ye && re(S) || !!(ye && ye.autoDestroy && ye.emitClose && ye.closed === !1)
    }
    function te(S) {
        var H;
        return !!(S && ((H = S[c]) !== null && H !== void 0 ? H : S.readableDidRead || S.readableAborted))
    }
    function ge(S) {
        var H, me, ye, de, C, I, G, ae, Z, z;
        return !!(S && ((H = (me = (ye = (de = (C = (I = S[a]) !== null && I !== void 0 ? I : S.readableErrored) !== null && C !== void 0 ? C : S.writableErrored) !== null && de !== void 0 ? de : (G = S._readableState) === null || G === void 0 ? void 0 : G.errorEmitted) !== null && ye !== void 0 ? ye : (ae = S._writableState) === null || ae === void 0 ? void 0 : ae.errorEmitted) !== null && me !== void 0 ? me : (Z = S._readableState) === null || Z === void 0 ? void 0 : Z.errored) !== null && H !== void 0 ? H : !((z = S._writableState) === null || z === void 0) && z.errored))
    }
    t.exports = {
        kDestroyed: o,
        isDisturbed: te,
        kIsDisturbed: c,
        isErrored: ge,
        kIsErrored: a,
        isReadable: $,
        kIsReadable: l,
        kIsClosedPromise: u,
        kControllerErrorFunction: d,
        isClosed: V,
        isDestroyed: M,
        isDuplexNodeStream: _,
        isFinished: O,
        isIterable: R,
        isReadableNodeStream: m,
        isReadableStream: b,
        isReadableEnded: U,
        isReadableFinished: W,
        isReadableErrored: Y,
        isNodeStream: g,
        isWebStream: T,
        isWritable: Q,
        isWritableNodeStream: y,
        isWritableStream: k,
        isWritableEnded: E,
        isWritableFinished: A,
        isWritableErrored: j,
        isServerRequest: q,
        isServerResponse: re,
        willEmitClose: pe,
        isTransformStream: w
    }
}
), Ut = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Qt()
      , {AbortError: i, codes: s} = ze()
      , {ERR_INVALID_ARG_TYPE: r, ERR_STREAM_PREMATURE_CLOSE: o} = s
      , {kEmptyObject: a, once: l} = kt()
      , {validateAbortSignal: c, validateFunction: u, validateObject: d, validateBoolean: m} = rr()
      , {Promise: y, PromisePrototypeThen: _} = qe()
      , {isClosed: g, isReadable: b, isReadableNodeStream: k, isReadableStream: w, isReadableFinished: T, isReadableErrored: R, isWritable: M, isWritableNodeStream: E, isWritableStream: A, isWritableFinished: U, isWritableErrored: W, isNodeStream: $, willEmitClose: Q, kIsClosedPromise: O} = Et();
    function j(q) {
        return q.setHeader && typeof q.abort == "function"
    }
    var Y = () => {}
    ;
    function V(q, pe, te) {
        var ge, S;
        if (arguments.length === 2 ? (te = pe,
        pe = a) : pe == null ? pe = a : d(pe, "options"),
        u(te, "callback"),
        c(pe.signal, "options.signal"),
        te = l(te),
        w(q) || A(q))
            return le(q, pe, te);
        if (!$(q))
            throw new r("stream",["ReadableStream", "WritableStream", "Stream"],q);
        let H = (ge = pe.readable) !== null && ge !== void 0 ? ge : k(q)
          , me = (S = pe.writable) !== null && S !== void 0 ? S : E(q)
          , ye = q._writableState
          , de = q._readableState
          , C = () => {
            q.writable || ae()
        }
          , I = Q(q) && k(q) === H && E(q) === me
          , G = U(q, !1)
          , ae = () => {
            G = !0,
            q.destroyed && (I = !1),
            !(I && (!q.readable || H)) && (!H || Z) && te.call(q)
        }
          , Z = T(q, !1)
          , z = () => {
            Z = !0,
            q.destroyed && (I = !1),
            !(I && (!q.writable || me)) && (!me || G) && te.call(q)
        }
          , L = J => {
            te.call(q, J)
        }
          , ce = g(q)
          , P = () => {
            ce = !0;
            let J = W(q) || R(q);
            if (J && typeof J != "boolean")
                return te.call(q, J);
            if (H && !Z && k(q, !0) && !T(q, !1))
                return te.call(q, new o);
            if (me && !G && !U(q, !1))
                return te.call(q, new o);
            te.call(q)
        }
          , D = () => {
            ce = !0;
            let J = W(q) || R(q);
            if (J && typeof J != "boolean")
                return te.call(q, J);
            te.call(q)
        }
          , B = () => {
            q.req.on("finish", ae)
        }
        ;
        j(q) ? (q.on("complete", ae),
        I || q.on("abort", P),
        q.req ? B() : q.on("request", B)) : me && !ye && (q.on("end", C),
        q.on("close", C)),
        !I && typeof q.aborted == "boolean" && q.on("aborted", P),
        q.on("end", z),
        q.on("finish", ae),
        pe.error !== !1 && q.on("error", L),
        q.on("close", P),
        ce ? n.nextTick(P) : ye != null && ye.errorEmitted || de != null && de.errorEmitted ? I || n.nextTick(D) : (!H && (!I || b(q)) && (G || M(q) === !1) || !me && (!I || M(q)) && (Z || b(q) === !1) || de && q.req && q.aborted) && n.nextTick(D);
        let ne = () => {
            te = Y,
            q.removeListener("aborted", P),
            q.removeListener("complete", ae),
            q.removeListener("abort", P),
            q.removeListener("request", B),
            q.req && q.req.removeListener("finish", ae),
            q.removeListener("end", C),
            q.removeListener("close", C),
            q.removeListener("finish", ae),
            q.removeListener("end", z),
            q.removeListener("error", L),
            q.removeListener("close", P)
        }
        ;
        if (pe.signal && !ce) {
            let J = () => {
                let x = te;
                ne(),
                x.call(q, new i(void 0,{
                    cause: pe.signal.reason
                }))
            }
            ;
            if (pe.signal.aborted)
                n.nextTick(J);
            else {
                let x = te;
                te = l( (...K) => {
                    pe.signal.removeEventListener("abort", J),
                    x.apply(q, K)
                }
                ),
                pe.signal.addEventListener("abort", J)
            }
        }
        return ne
    }
    function le(q, pe, te) {
        let ge = !1
          , S = Y;
        if (pe.signal)
            if (S = () => {
                ge = !0,
                te.call(q, new i(void 0,{
                    cause: pe.signal.reason
                }))
            }
            ,
            pe.signal.aborted)
                n.nextTick(S);
            else {
                let me = te;
                te = l( (...ye) => {
                    pe.signal.removeEventListener("abort", S),
                    me.apply(q, ye)
                }
                ),
                pe.signal.addEventListener("abort", S)
            }
        let H = (...me) => {
            ge || n.nextTick( () => te.apply(q, me))
        }
        ;
        return _(q[O].promise, H, H),
        Y
    }
    function re(q, pe) {
        var te;
        let ge = !1;
        return pe === null && (pe = a),
        (te = pe) !== null && te !== void 0 && te.cleanup && (m(pe.cleanup, "cleanup"),
        ge = pe.cleanup),
        new y( (S, H) => {
            let me = V(q, pe, ye => {
                ge && me(),
                ye ? H(ye) : S()
            }
            )
        }
        )
    }
    t.exports = V,
    t.exports.finished = re
}
), an = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = Qt()
      , {aggregateTwoErrors: i, codes: {ERR_MULTIPLE_CALLBACK: s}, AbortError: r} = ze()
      , {Symbol: o} = qe()
      , {kDestroyed: a, isDestroyed: l, isFinished: c, isServerRequest: u} = Et()
      , d = o("kDestroy")
      , m = o("kConstruct");
    function y(O, j, Y) {
        O && (O.stack,
        j && !j.errored && (j.errored = O),
        Y && !Y.errored && (Y.errored = O))
    }
    function _(O, j) {
        let Y = this._readableState
          , V = this._writableState
          , le = V || Y;
        return V != null && V.destroyed || Y != null && Y.destroyed ? (typeof j == "function" && j(),
        this) : (y(O, V, Y),
        V && (V.destroyed = !0),
        Y && (Y.destroyed = !0),
        le.constructed ? g(this, O, j) : this.once(d, function(re) {
            g(this, i(re, O), j)
        }),
        this)
    }
    function g(O, j, Y) {
        let V = !1;
        function le(re) {
            if (V)
                return;
            V = !0;
            let q = O._readableState
              , pe = O._writableState;
            y(re, pe, q),
            pe && (pe.closed = !0),
            q && (q.closed = !0),
            typeof Y == "function" && Y(re),
            re ? n.nextTick(b, O, re) : n.nextTick(k, O)
        }
        try {
            O._destroy(j || null, le)
        } catch (re) {
            le(re)
        }
    }
    function b(O, j) {
        w(O, j),
        k(O)
    }
    function k(O) {
        let j = O._readableState
          , Y = O._writableState;
        Y && (Y.closeEmitted = !0),
        j && (j.closeEmitted = !0),
        (Y != null && Y.emitClose || j != null && j.emitClose) && O.emit("close")
    }
    function w(O, j) {
        let Y = O._readableState
          , V = O._writableState;
        V != null && V.errorEmitted || Y != null && Y.errorEmitted || (V && (V.errorEmitted = !0),
        Y && (Y.errorEmitted = !0),
        O.emit("error", j))
    }
    function T() {
        let O = this._readableState
          , j = this._writableState;
        O && (O.constructed = !0,
        O.closed = !1,
        O.closeEmitted = !1,
        O.destroyed = !1,
        O.errored = null,
        O.errorEmitted = !1,
        O.reading = !1,
        O.ended = O.readable === !1,
        O.endEmitted = O.readable === !1),
        j && (j.constructed = !0,
        j.destroyed = !1,
        j.closed = !1,
        j.closeEmitted = !1,
        j.errored = null,
        j.errorEmitted = !1,
        j.finalCalled = !1,
        j.prefinished = !1,
        j.ended = j.writable === !1,
        j.ending = j.writable === !1,
        j.finished = j.writable === !1)
    }
    function R(O, j, Y) {
        let V = O._readableState
          , le = O._writableState;
        if (le != null && le.destroyed || V != null && V.destroyed)
            return this;
        V != null && V.autoDestroy || le != null && le.autoDestroy ? O.destroy(j) : j && (j.stack,
        le && !le.errored && (le.errored = j),
        V && !V.errored && (V.errored = j),
        Y ? n.nextTick(w, O, j) : w(O, j))
    }
    function M(O, j) {
        if (typeof O._construct != "function")
            return;
        let Y = O._readableState
          , V = O._writableState;
        Y && (Y.constructed = !1),
        V && (V.constructed = !1),
        O.once(m, j),
        !(O.listenerCount(m) > 1) && n.nextTick(E, O)
    }
    function E(O) {
        let j = !1;
        function Y(V) {
            if (j) {
                R(O, V ?? new s);
                return
            }
            j = !0;
            let le = O._readableState
              , re = O._writableState
              , q = re || le;
            le && (le.constructed = !0),
            re && (re.constructed = !0),
            q.destroyed ? O.emit(d, V) : V ? R(O, V, !0) : n.nextTick(A, O)
        }
        try {
            O._construct(V => {
                n.nextTick(Y, V)
            }
            )
        } catch (V) {
            n.nextTick(Y, V)
        }
    }
    function A(O) {
        O.emit(m)
    }
    function U(O) {
        return O?.setHeader && typeof O.abort == "function"
    }
    function W(O) {
        O.emit("close")
    }
    function $(O, j) {
        O.emit("error", j),
        n.nextTick(W, O)
    }
    function Q(O, j) {
        !O || l(O) || (!j && !c(O) && (j = new r),
        u(O) ? (O.socket = null,
        O.destroy(j)) : U(O) ? O.abort() : U(O.req) ? O.req.abort() : typeof O.destroy == "function" ? O.destroy(j) : typeof O.close == "function" ? O.close() : j ? n.nextTick($, O, j) : n.nextTick(W, O),
        O.destroyed || (O[a] = !0))
    }
    t.exports = {
        construct: M,
        destroyer: Q,
        destroy: _,
        undestroy: T,
        errorOrDestroy: R
    }
}
);
function Ie() {
    Ie.init.call(this)
}
function zn(e) {
    if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
function va(e) {
    return e._maxListeners === void 0 ? Ie.defaultMaxListeners : e._maxListeners
}
function vs(e, t, n, i) {
    var s, r, o, a;
    if (zn(n),
    (r = e._events) === void 0 ? (r = e._events = Object.create(null),
    e._eventsCount = 0) : (r.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n),
    r = e._events),
    o = r[t]),
    o === void 0)
        o = r[t] = n,
        ++e._eventsCount;
    else if (typeof o == "function" ? o = r[t] = i ? [n, o] : [o, n] : i ? o.unshift(n) : o.push(n),
    (s = va(e)) > 0 && o.length > s && !o.warned) {
        o.warned = !0;
        var l = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l.name = "MaxListenersExceededWarning",
        l.emitter = e,
        l.type = t,
        l.count = o.length,
        a = l,
        console && console.warn && console.warn(a)
    }
    return e
}
function su() {
    if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}
function Es(e, t, n) {
    var i = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
    }
      , s = su.bind(i);
    return s.listener = n,
    i.wrapFn = s,
    s
}
function Ss(e, t, n) {
    var i = e._events;
    if (i === void 0)
        return [];
    var s = i[t];
    return s === void 0 ? [] : typeof s == "function" ? n ? [s.listener || s] : [s] : n ? function(r) {
        for (var o = new Array(r.length), a = 0; a < o.length; ++a)
            o[a] = r[a].listener || r[a];
        return o
    }(s) : Ea(s, s.length)
}
function Is(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function")
            return 1;
        if (n !== void 0)
            return n.length
    }
    return 0
}
function Ea(e, t) {
    for (var n = new Array(t), i = 0; i < t; ++i)
        n[i] = e[i];
    return n
}
var Rs, As, Lt, Kr, zr, Jr, Ye, Os = We( () => {
    ie(),
    se(),
    oe(),
    Lt = typeof Reflect == "object" ? Reflect : null,
    Kr = Lt && typeof Lt.apply == "function" ? Lt.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    }
    ,
    As = Lt && typeof Lt.ownKeys == "function" ? Lt.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ,
    zr = Number.isNaN || function(e) {
        return e != e
    }
    ,
    Rs = Ie,
    Ie.EventEmitter = Ie,
    Ie.prototype._events = void 0,
    Ie.prototype._eventsCount = 0,
    Ie.prototype._maxListeners = void 0,
    Jr = 10,
    Object.defineProperty(Ie, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Jr
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || zr(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Jr = e
        }
    }),
    Ie.init = function() {
        this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    Ie.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || zr(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    Ie.prototype.getMaxListeners = function() {
        return va(this)
    }
    ,
    Ie.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
        var i = e === "error"
          , s = this._events;
        if (s !== void 0)
            i = i && s.error === void 0;
        else if (!i)
            return !1;
        if (i) {
            var r;
            if (t.length > 0 && (r = t[0]),
            r instanceof Error)
                throw r;
            var o = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
            throw o.context = r,
            o
        }
        var a = s[e];
        if (a === void 0)
            return !1;
        if (typeof a == "function")
            Kr(a, this, t);
        else {
            var l = a.length
              , c = Ea(a, l);
            for (n = 0; n < l; ++n)
                Kr(c[n], this, t)
        }
        return !0
    }
    ,
    Ie.prototype.addListener = function(e, t) {
        return vs(this, e, t, !1)
    }
    ,
    Ie.prototype.on = Ie.prototype.addListener,
    Ie.prototype.prependListener = function(e, t) {
        return vs(this, e, t, !0)
    }
    ,
    Ie.prototype.once = function(e, t) {
        return zn(t),
        this.on(e, Es(this, e, t)),
        this
    }
    ,
    Ie.prototype.prependOnceListener = function(e, t) {
        return zn(t),
        this.prependListener(e, Es(this, e, t)),
        this
    }
    ,
    Ie.prototype.removeListener = function(e, t) {
        var n, i, s, r, o;
        if (zn(t),
        (i = this._events) === void 0)
            return this;
        if ((n = i[e]) === void 0)
            return this;
        if (n === t || n.listener === t)
            --this._eventsCount == 0 ? this._events = Object.create(null) : (delete i[e],
            i.removeListener && this.emit("removeListener", e, n.listener || t));
        else if (typeof n != "function") {
            for (s = -1,
            r = n.length - 1; r >= 0; r--)
                if (n[r] === t || n[r].listener === t) {
                    o = n[r].listener,
                    s = r;
                    break
                }
            if (s < 0)
                return this;
            s === 0 ? n.shift() : function(a, l) {
                for (; l + 1 < a.length; l++)
                    a[l] = a[l + 1];
                a.pop()
            }(n, s),
            n.length === 1 && (i[e] = n[0]),
            i.removeListener !== void 0 && this.emit("removeListener", e, o || t)
        }
        return this
    }
    ,
    Ie.prototype.off = Ie.prototype.removeListener,
    Ie.prototype.removeAllListeners = function(e) {
        var t, n, i;
        if ((n = this._events) === void 0)
            return this;
        if (n.removeListener === void 0)
            return arguments.length === 0 ? (this._events = Object.create(null),
            this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete n[e]),
            this;
        if (arguments.length === 0) {
            var s, r = Object.keys(n);
            for (i = 0; i < r.length; ++i)
                (s = r[i]) !== "removeListener" && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if (typeof (t = n[e]) == "function")
            this.removeListener(e, t);
        else if (t !== void 0)
            for (i = t.length - 1; i >= 0; i--)
                this.removeListener(e, t[i]);
        return this
    }
    ,
    Ie.prototype.listeners = function(e) {
        return Ss(this, e, !0)
    }
    ,
    Ie.prototype.rawListeners = function(e) {
        return Ss(this, e, !1)
    }
    ,
    Ie.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : Is.call(e, t)
    }
    ,
    Ie.prototype.listenerCount = Is,
    Ie.prototype.eventNames = function() {
        return this._eventsCount > 0 ? As(this._events) : []
    }
    ,
    Ye = Rs,
    Ye.EventEmitter,
    Ye.defaultMaxListeners,
    Ye.init,
    Ye.listenerCount,
    Ye.EventEmitter,
    Ye.defaultMaxListeners,
    Ye.init,
    Ye.listenerCount
}
), Xt = {};
Yt(Xt, {
    EventEmitter: () => Sa,
    default: () => Ye,
    defaultMaxListeners: () => Ia,
    init: () => Ra,
    listenerCount: () => Aa,
    on: () => Oa,
    once: () => Pa
});
var Sa, Ia, Ra, Aa, Oa, Pa, ln = We( () => {
    ie(),
    se(),
    oe(),
    Os(),
    Os(),
    Ye.once = function(e, t) {
        return new Promise( (n, i) => {
            function s(...o) {
                r !== void 0 && e.removeListener("error", r),
                n(o)
            }
            let r;
            t !== "error" && (r = o => {
                e.removeListener(name, s),
                i(o)
            }
            ,
            e.once("error", r)),
            e.once(t, s)
        }
        )
    }
    ,
    Ye.on = function(e, t) {
        let n = []
          , i = []
          , s = null
          , r = !1
          , o = {
            async next() {
                let c = n.shift();
                if (c)
                    return createIterResult(c, !1);
                if (s) {
                    let u = Promise.reject(s);
                    return s = null,
                    u
                }
                return r ? createIterResult(void 0, !0) : new Promise( (u, d) => i.push({
                    resolve: u,
                    reject: d
                }))
            },
            async return() {
                e.removeListener(t, a),
                e.removeListener("error", l),
                r = !0;
                for (let c of i)
                    c.resolve(createIterResult(void 0, !0));
                return createIterResult(void 0, !0)
            },
            throw(c) {
                s = c,
                e.removeListener(t, a),
                e.removeListener("error", l)
            },
            [Symbol.asyncIterator]() {
                return this
            }
        };
        return e.on(t, a),
        e.on("error", l),
        o;
        function a(...c) {
            let u = i.shift();
            u ? u.resolve(createIterResult(c, !1)) : n.push(c)
        }
        function l(c) {
            r = !0;
            let u = i.shift();
            u ? u.reject(c) : s = c,
            o.return()
        }
    }
    ,
    {EventEmitter: Sa, defaultMaxListeners: Ia, init: Ra, listenerCount: Aa, on: Oa, once: Pa} = Ye
}
), Po = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ArrayIsArray: n, ObjectSetPrototypeOf: i} = qe()
      , {EventEmitter: s} = (ln(),
    Pe(Xt));
    function r(a) {
        s.call(this, a)
    }
    i(r.prototype, s.prototype),
    i(r, s),
    r.prototype.pipe = function(a, l) {
        let c = this;
        function u(k) {
            a.writable && a.write(k) === !1 && c.pause && c.pause()
        }
        c.on("data", u);
        function d() {
            c.readable && c.resume && c.resume()
        }
        a.on("drain", d),
        !a._isStdio && (!l || l.end !== !1) && (c.on("end", y),
        c.on("close", _));
        let m = !1;
        function y() {
            m || (m = !0,
            a.end())
        }
        function _() {
            m || (m = !0,
            typeof a.destroy == "function" && a.destroy())
        }
        function g(k) {
            b(),
            s.listenerCount(this, "error") === 0 && this.emit("error", k)
        }
        o(c, "error", g),
        o(a, "error", g);
        function b() {
            c.removeListener("data", u),
            a.removeListener("drain", d),
            c.removeListener("end", y),
            c.removeListener("close", _),
            c.removeListener("error", g),
            a.removeListener("error", g),
            c.removeListener("end", b),
            c.removeListener("close", b),
            a.removeListener("close", b)
        }
        return c.on("end", b),
        c.on("close", b),
        a.on("close", b),
        a.emit("pipe", c),
        a
    }
    ;
    function o(a, l, c) {
        if (typeof a.prependListener == "function")
            return a.prependListener(l, c);
        !a._events || !a._events[l] ? a.on(l, c) : n(a._events[l]) ? a._events[l].unshift(c) : a._events[l] = [c, a._events[l]]
    }
    t.exports = {
        Stream: r,
        prependListener: o
    }
}
), ir = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {AbortError: n, codes: i} = ze()
      , {isNodeStream: s, isWebStream: r, kControllerErrorFunction: o} = Et()
      , a = Ut()
      , {ERR_INVALID_ARG_TYPE: l} = i
      , c = (u, d) => {
        if (typeof u != "object" || !("aborted"in u))
            throw new l(d,"AbortSignal",u)
    }
    ;
    t.exports.addAbortSignal = function(u, d) {
        if (c(u, "signal"),
        !s(d) && !r(d))
            throw new l("stream",["ReadableStream", "WritableStream", "Stream"],d);
        return t.exports.addAbortSignalNoValidate(u, d)
    }
    ,
    t.exports.addAbortSignalNoValidate = function(u, d) {
        if (typeof u != "object" || !("aborted"in u))
            return d;
        let m = s(d) ? () => {
            d.destroy(new n(void 0,{
                cause: u.reason
            }))
        }
        : () => {
            d[o](new n(void 0,{
                cause: u.reason
            }))
        }
        ;
        return u.aborted ? m() : (u.addEventListener("abort", m),
        a(d, () => u.removeEventListener("abort", m))),
        d
    }
}
), au = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {StringPrototypeSlice: n, SymbolIterator: i, TypedArrayPrototypeSet: s, Uint8Array: r} = qe()
      , {Buffer: o} = (Ge(),
    Pe(Ve))
      , {inspect: a} = kt();
    t.exports = class {
        constructor() {
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        push(l) {
            let c = {
                data: l,
                next: null
            };
            this.length > 0 ? this.tail.next = c : this.head = c,
            this.tail = c,
            ++this.length
        }
        unshift(l) {
            let c = {
                data: l,
                next: this.head
            };
            this.length === 0 && (this.tail = c),
            this.head = c,
            ++this.length
        }
        shift() {
            if (this.length === 0)
                return;
            let l = this.head.data;
            return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
            --this.length,
            l
        }
        clear() {
            this.head = this.tail = null,
            this.length = 0
        }
        join(l) {
            if (this.length === 0)
                return "";
            let c = this.head
              , u = "" + c.data;
            for (; (c = c.next) !== null; )
                u += l + c.data;
            return u
        }
        concat(l) {
            if (this.length === 0)
                return o.alloc(0);
            let c = o.allocUnsafe(l >>> 0)
              , u = this.head
              , d = 0;
            for (; u; )
                s(c, u.data, d),
                d += u.data.length,
                u = u.next;
            return c
        }
        consume(l, c) {
            let u = this.head.data;
            if (l < u.length) {
                let d = u.slice(0, l);
                return this.head.data = u.slice(l),
                d
            }
            return l === u.length ? this.shift() : c ? this._getString(l) : this._getBuffer(l)
        }
        first() {
            return this.head.data
        }
        *[i]() {
            for (let l = this.head; l; l = l.next)
                yield l.data
        }
        _getString(l) {
            let c = ""
              , u = this.head
              , d = 0;
            do {
                let m = u.data;
                if (l > m.length)
                    c += m,
                    l -= m.length;
                else {
                    l === m.length ? (c += m,
                    ++d,
                    u.next ? this.head = u.next : this.head = this.tail = null) : (c += n(m, 0, l),
                    this.head = u,
                    u.data = n(m, l));
                    break
                }
                ++d
            } while ((u = u.next) !== null);
            return this.length -= d,
            c
        }
        _getBuffer(l) {
            let c = o.allocUnsafe(l)
              , u = l
              , d = this.head
              , m = 0;
            do {
                let y = d.data;
                if (l > y.length)
                    s(c, y, u - l),
                    l -= y.length;
                else {
                    l === y.length ? (s(c, y, u - l),
                    ++m,
                    d.next ? this.head = d.next : this.head = this.tail = null) : (s(c, new r(y.buffer,y.byteOffset,l), u - l),
                    this.head = d,
                    d.data = y.slice(l));
                    break
                }
                ++m
            } while ((d = d.next) !== null);
            return this.length -= m,
            c
        }
        [Symbol.for("nodejs.util.inspect.custom")](l, c) {
            return a(this, {
                ...c,
                depth: 0,
                customInspect: !1
            })
        }
    }
}
), No = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {MathFloor: n, NumberIsInteger: i} = qe()
      , {ERR_INVALID_ARG_VALUE: s} = ze().codes;
    function r(l, c, u) {
        return l.highWaterMark != null ? l.highWaterMark : c ? l[u] : null
    }
    function o(l) {
        return l ? 16 : 16 * 1024
    }
    function a(l, c, u, d) {
        let m = r(c, d, u);
        if (m != null) {
            if (!i(m) || m < 0) {
                let y = d ? `options.${u}` : "options.highWaterMark";
                throw new s(y,m)
            }
            return n(m)
        }
        return o(l.objectMode)
    }
    t.exports = {
        getHighWaterMark: a,
        getDefaultHighWaterMark: o
    }
}
);
function Ps(e) {
    var t = e.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return n === -1 && (n = t),
    [n, n === t ? 0 : 4 - n % 4]
}
function lu(e, t, n) {
    for (var i, s, r = [], o = t; o < n; o += 3)
        i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
        r.push(rt[(s = i) >> 18 & 63] + rt[s >> 12 & 63] + rt[s >> 6 & 63] + rt[63 & s]);
    return r.join("")
}
function bt(e) {
    if (e > 2147483647)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, ue.prototype),
    t
}
function ue(e, t, n) {
    if (typeof e == "number") {
        if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
        return fo(e)
    }
    return Na(e, t, n)
}
function Na(e, t, n) {
    if (typeof e == "string")
        return function(r, o) {
            if (typeof o == "string" && o !== "" || (o = "utf8"),
            !ue.isEncoding(o))
                throw new TypeError("Unknown encoding: " + o);
            var a = 0 | Ua(r, o)
              , l = bt(a)
              , c = l.write(r, o);
            return c !== a && (l = l.slice(0, c)),
            l
        }(e, t);
    if (ArrayBuffer.isView(e))
        return Yr(e);
    if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    if (Tt(e, ArrayBuffer) || e && Tt(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Tt(e, SharedArrayBuffer) || e && Tt(e.buffer, SharedArrayBuffer)))
        return cu(e, t, n);
    if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (i != null && i !== e)
        return ue.from(i, t, n);
    var s = function(r) {
        if (ue.isBuffer(r)) {
            var o = 0 | Co(r.length)
              , a = bt(o);
            return a.length === 0 || r.copy(a, 0, 0, o),
            a
        }
        if (r.length !== void 0)
            return typeof r.length != "number" || Uo(r.length) ? bt(0) : Yr(r);
        if (r.type === "Buffer" && Array.isArray(r.data))
            return Yr(r.data)
    }(e);
    if (s)
        return s;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return ue.from(e[Symbol.toPrimitive]("string"), t, n);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
}
function Ca(e) {
    if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
    if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"')
}
function fo(e) {
    return Ca(e),
    bt(e < 0 ? 0 : 0 | Co(e))
}
function Yr(e) {
    for (var t = e.length < 0 ? 0 : 0 | Co(e.length), n = bt(t), i = 0; i < t; i += 1)
        n[i] = 255 & e[i];
    return n
}
function cu(e, t, n) {
    if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (n || 0))
        throw new RangeError('"length" is outside of buffer bounds');
    var i;
    return i = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e,t) : new Uint8Array(e,t,n),
    Object.setPrototypeOf(i, ue.prototype),
    i
}
function Co(e) {
    if (e >= 2147483647)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    return 0 | e
}
function Ua(e, t) {
    if (ue.isBuffer(e))
        return e.length;
    if (ArrayBuffer.isView(e) || Tt(e, ArrayBuffer))
        return e.byteLength;
    if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var n = e.length
      , i = arguments.length > 2 && arguments[2] === !0;
    if (!i && n === 0)
        return 0;
    for (var s = !1; ; )
        switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
            return n;
        case "utf8":
        case "utf-8":
            return po(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * n;
        case "hex":
            return n >>> 1;
        case "base64":
            return La(e).length;
        default:
            if (s)
                return i ? -1 : po(e).length;
            t = ("" + t).toLowerCase(),
            s = !0
        }
}
function uu(e, t, n) {
    var i = !1;
    if ((t === void 0 || t < 0) && (t = 0),
    t > this.length || ((n === void 0 || n > this.length) && (n = this.length),
    n <= 0) || (n >>>= 0) <= (t >>>= 0))
        return "";
    for (e || (e = "utf8"); ; )
        switch (e) {
        case "hex":
            return bu(this, t, n);
        case "utf8":
        case "utf-8":
            return xa(this, t, n);
        case "ascii":
            return yu(this, t, n);
        case "latin1":
        case "binary":
            return _u(this, t, n);
        case "base64":
            return gu(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return Tu(this, t, n);
        default:
            if (i)
                throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(),
            i = !0
        }
}
function Bt(e, t, n) {
    var i = e[t];
    e[t] = e[n],
    e[n] = i
}
function Ns(e, t, n, i, s) {
    if (e.length === 0)
        return -1;
    if (typeof n == "string" ? (i = n,
    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
    Uo(n = +n) && (n = s ? 0 : e.length - 1),
    n < 0 && (n = e.length + n),
    n >= e.length) {
        if (s)
            return -1;
        n = e.length - 1
    } else if (n < 0) {
        if (!s)
            return -1;
        n = 0
    }
    if (typeof t == "string" && (t = ue.from(t, i)),
    ue.isBuffer(t))
        return t.length === 0 ? -1 : Cs(e, t, n, i, s);
    if (typeof t == "number")
        return t &= 255,
        typeof Uint8Array.prototype.indexOf == "function" ? s ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Cs(e, [t], n, i, s);
    throw new TypeError("val must be string, number or Buffer")
}
function Cs(e, t, n, i, s) {
    var r, o = 1, a = e.length, l = t.length;
    if (i !== void 0 && ((i = String(i).toLowerCase()) === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
            return -1;
        o = 2,
        a /= 2,
        l /= 2,
        n /= 2
    }
    function c(y, _) {
        return o === 1 ? y[_] : y.readUInt16BE(_ * o)
    }
    if (s) {
        var u = -1;
        for (r = n; r < a; r++)
            if (c(e, r) === c(t, u === -1 ? 0 : r - u)) {
                if (u === -1 && (u = r),
                r - u + 1 === l)
                    return u * o
            } else
                u !== -1 && (r -= r - u),
                u = -1
    } else
        for (n + l > a && (n = a - l),
        r = n; r >= 0; r--) {
            for (var d = !0, m = 0; m < l; m++)
                if (c(e, r + m) !== c(t, m)) {
                    d = !1;
                    break
                }
            if (d)
                return r
        }
    return -1
}
function hu(e, t, n, i) {
    n = Number(n) || 0;
    var s = e.length - n;
    i ? (i = Number(i)) > s && (i = s) : i = s;
    var r = t.length;
    i > r / 2 && (i = r / 2);
    for (var o = 0; o < i; ++o) {
        var a = parseInt(t.substr(2 * o, 2), 16);
        if (Uo(a))
            return o;
        e[n + o] = a
    }
    return o
}
function du(e, t, n, i) {
    return or(po(t, e.length - n), e, n, i)
}
function Ma(e, t, n, i) {
    return or(function(s) {
        for (var r = [], o = 0; o < s.length; ++o)
            r.push(255 & s.charCodeAt(o));
        return r
    }(t), e, n, i)
}
function fu(e, t, n, i) {
    return Ma(e, t, n, i)
}
function pu(e, t, n, i) {
    return or(La(t), e, n, i)
}
function mu(e, t, n, i) {
    return or(function(s, r) {
        for (var o, a, l, c = [], u = 0; u < s.length && !((r -= 2) < 0); ++u)
            o = s.charCodeAt(u),
            a = o >> 8,
            l = o % 256,
            c.push(l),
            c.push(a);
        return c
    }(t, e.length - n), e, n, i)
}
function gu(e, t, n) {
    return t === 0 && n === e.length ? Zn.fromByteArray(e) : Zn.fromByteArray(e.slice(t, n))
}
function xa(e, t, n) {
    n = Math.min(e.length, n);
    for (var i = [], s = t; s < n; ) {
        var r, o, a, l, c = e[s], u = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (s + d <= n)
            switch (d) {
            case 1:
                c < 128 && (u = c);
                break;
            case 2:
                (192 & (r = e[s + 1])) == 128 && (l = (31 & c) << 6 | 63 & r) > 127 && (u = l);
                break;
            case 3:
                r = e[s + 1],
                o = e[s + 2],
                (192 & r) == 128 && (192 & o) == 128 && (l = (15 & c) << 12 | (63 & r) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (u = l);
                break;
            case 4:
                r = e[s + 1],
                o = e[s + 2],
                a = e[s + 3],
                (192 & r) == 128 && (192 & o) == 128 && (192 & a) == 128 && (l = (15 & c) << 18 | (63 & r) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
            }
        u === null ? (u = 65533,
        d = 1) : u > 65535 && (u -= 65536,
        i.push(u >>> 10 & 1023 | 55296),
        u = 56320 | 1023 & u),
        i.push(u),
        s += d
    }
    return function(m) {
        var y = m.length;
        if (y <= 4096)
            return String.fromCharCode.apply(String, m);
        for (var _ = "", g = 0; g < y; )
            _ += String.fromCharCode.apply(String, m.slice(g, g += 4096));
        return _
    }(i)
}
function yu(e, t, n) {
    var i = "";
    n = Math.min(e.length, n);
    for (var s = t; s < n; ++s)
        i += String.fromCharCode(127 & e[s]);
    return i
}
function _u(e, t, n) {
    var i = "";
    n = Math.min(e.length, n);
    for (var s = t; s < n; ++s)
        i += String.fromCharCode(e[s]);
    return i
}
function bu(e, t, n) {
    var i = e.length;
    (!t || t < 0) && (t = 0),
    (!n || n < 0 || n > i) && (n = i);
    for (var s = "", r = t; r < n; ++r)
        s += Fa[e[r]];
    return s
}
function Tu(e, t, n) {
    for (var i = e.slice(t, n), s = "", r = 0; r < i.length; r += 2)
        s += String.fromCharCode(i[r] + 256 * i[r + 1]);
    return s
}
function je(e, t, n) {
    if (e % 1 != 0 || e < 0)
        throw new RangeError("offset is not uint");
    if (e + t > n)
        throw new RangeError("Trying to access beyond buffer length")
}
function Ke(e, t, n, i, s, r) {
    if (!ue.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > s || t < r)
        throw new RangeError('"value" argument is out of bounds');
    if (n + i > e.length)
        throw new RangeError("Index out of range")
}
function Da(e, t, n, i, s, r) {
    if (n + i > e.length)
        throw new RangeError("Index out of range");
    if (n < 0)
        throw new RangeError("Index out of range")
}
function Us(e, t, n, i, s) {
    return t = +t,
    n >>>= 0,
    s || Da(e, 0, n, 4),
    Gt.write(e, t, n, i, 23, 4),
    n + 4
}
function Ms(e, t, n, i, s) {
    return t = +t,
    n >>>= 0,
    s || Da(e, 0, n, 8),
    Gt.write(e, t, n, i, 52, 8),
    n + 8
}
function po(e, t) {
    var n;
    t = t || 1 / 0;
    for (var i = e.length, s = null, r = [], o = 0; o < i; ++o) {
        if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
            if (!s) {
                if (n > 56319) {
                    (t -= 3) > -1 && r.push(239, 191, 189);
                    continue
                }
                if (o + 1 === i) {
                    (t -= 3) > -1 && r.push(239, 191, 189);
                    continue
                }
                s = n;
                continue
            }
            if (n < 56320) {
                (t -= 3) > -1 && r.push(239, 191, 189),
                s = n;
                continue
            }
            n = 65536 + (s - 55296 << 10 | n - 56320)
        } else
            s && (t -= 3) > -1 && r.push(239, 191, 189);
        if (s = null,
        n < 128) {
            if ((t -= 1) < 0)
                break;
            r.push(n)
        } else if (n < 2048) {
            if ((t -= 2) < 0)
                break;
            r.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
            if ((t -= 3) < 0)
                break;
            r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
            if (!(n < 1114112))
                throw new Error("Invalid code point");
            if ((t -= 4) < 0)
                break;
            r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
    }
    return r
}
function La(e) {
    return Zn.toByteArray(function(t) {
        if ((t = (t = t.split("=")[0]).trim().replace(Ba, "")).length < 2)
            return "";
        for (; t.length % 4 != 0; )
            t += "=";
        return t
    }(e))
}
function or(e, t, n, i) {
    for (var s = 0; s < i && !(s + n >= t.length || s >= e.length); ++s)
        t[s + n] = e[s];
    return s
}
function Tt(e, t) {
    return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name
}
function Uo(e) {
    return e != e
}
function xs(e, t) {
    for (var n in e)
        t[n] = e[n]
}
function Ft(e, t, n) {
    return tt(e, t, n)
}
function mn(e) {
    var t;
    switch (this.encoding = function(n) {
        var i = function(s) {
            if (!s)
                return "utf8";
            for (var r; ; )
                switch (s) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return s;
                default:
                    if (r)
                        return;
                    s = ("" + s).toLowerCase(),
                    r = !0
                }
        }(n);
        if (typeof i != "string" && (er.isEncoding === mo || !mo(n)))
            throw new Error("Unknown encoding: " + n);
        return i || n
    }(e),
    this.encoding) {
    case "utf16le":
        this.text = wu,
        this.end = vu,
        t = 4;
        break;
    case "utf8":
        this.fillLast = ku,
        t = 4;
        break;
    case "base64":
        this.text = Eu,
        this.end = Su,
        t = 3;
        break;
    default:
        return this.write = Iu,
        this.end = Ru,
        void 0
    }
    this.lastNeed = 0,
    this.lastTotal = 0,
    this.lastChar = er.allocUnsafe(t)
}
function Qr(e) {
    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
}
function ku(e) {
    var t = this.lastTotal - this.lastNeed
      , n = function(i, s, r) {
        if ((192 & s[0]) != 128)
            return i.lastNeed = 0,
            "\uFFFD";
        if (i.lastNeed > 1 && s.length > 1) {
            if ((192 & s[1]) != 128)
                return i.lastNeed = 1,
                "\uFFFD";
            if (i.lastNeed > 2 && s.length > 2 && (192 & s[2]) != 128)
                return i.lastNeed = 2,
                "\uFFFD"
        }
    }(this, e);
    return n !== void 0 ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
    this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
    this.lastNeed -= e.length,
    void 0)
}
function wu(e, t) {
    if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);
        if (n) {
            var i = n.charCodeAt(n.length - 1);
            if (i >= 55296 && i <= 56319)
                return this.lastNeed = 2,
                this.lastTotal = 4,
                this.lastChar[0] = e[e.length - 2],
                this.lastChar[1] = e[e.length - 1],
                n.slice(0, -1)
        }
        return n
    }
    return this.lastNeed = 1,
    this.lastTotal = 2,
    this.lastChar[0] = e[e.length - 1],
    e.toString("utf16le", t, e.length - 1)
}
function vu(e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n)
    }
    return t
}
function Eu(e, t) {
    var n = (e.length - t) % 3;
    return n === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - n,
    this.lastTotal = 3,
    n === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
    this.lastChar[1] = e[e.length - 1]),
    e.toString("base64", t, e.length - n))
}
function Su(e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
}
function Iu(e) {
    return e.toString(this.encoding)
}
function Ru(e) {
    return e && e.length ? this.write(e) : ""
}
var Ds, rt, Je, Ls, qn, qt, Bs, Fs, st, Zn, Gt, Xr, Ba, Fa, gn, yn, tt, qs, sn, er, mo, js = We( () => {
    for (ie(),
    se(),
    oe(),
    Ds = {
        byteLength: function(e) {
            var t = Ps(e)
              , n = t[0]
              , i = t[1];
            return 3 * (n + i) / 4 - i
        },
        toByteArray: function(e) {
            var t, n, i = Ps(e), s = i[0], r = i[1], o = new Ls(function(c, u, d) {
                return 3 * (u + d) / 4 - d
            }(0, s, r)), a = 0, l = r > 0 ? s - 4 : s;
            for (n = 0; n < l; n += 4)
                t = Je[e.charCodeAt(n)] << 18 | Je[e.charCodeAt(n + 1)] << 12 | Je[e.charCodeAt(n + 2)] << 6 | Je[e.charCodeAt(n + 3)],
                o[a++] = t >> 16 & 255,
                o[a++] = t >> 8 & 255,
                o[a++] = 255 & t;
            return r === 2 && (t = Je[e.charCodeAt(n)] << 2 | Je[e.charCodeAt(n + 1)] >> 4,
            o[a++] = 255 & t),
            r === 1 && (t = Je[e.charCodeAt(n)] << 10 | Je[e.charCodeAt(n + 1)] << 4 | Je[e.charCodeAt(n + 2)] >> 2,
            o[a++] = t >> 8 & 255,
            o[a++] = 255 & t),
            o
        },
        fromByteArray: function(e) {
            for (var t, n = e.length, i = n % 3, s = [], r = 0, o = n - i; r < o; r += 16383)
                s.push(lu(e, r, r + 16383 > o ? o : r + 16383));
            return i === 1 ? (t = e[n - 1],
            s.push(rt[t >> 2] + rt[t << 4 & 63] + "==")) : i === 2 && (t = (e[n - 2] << 8) + e[n - 1],
            s.push(rt[t >> 10] + rt[t >> 4 & 63] + rt[t << 2 & 63] + "=")),
            s.join("")
        }
    },
    rt = [],
    Je = [],
    Ls = typeof Uint8Array < "u" ? Uint8Array : Array,
    qn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    qt = 0,
    Bs = qn.length; qt < Bs; ++qt)
        rt[qt] = qn[qt],
        Je[qn.charCodeAt(qt)] = qt;
    Je[45] = 62,
    Je[95] = 63,
    Fs = {
        read: function(e, t, n, i, s) {
            var r, o, a = 8 * s - i - 1, l = (1 << a) - 1, c = l >> 1, u = -7, d = n ? s - 1 : 0, m = n ? -1 : 1, y = e[t + d];
            for (d += m,
            r = y & (1 << -u) - 1,
            y >>= -u,
            u += a; u > 0; r = 256 * r + e[t + d],
            d += m,
            u -= 8)
                ;
            for (o = r & (1 << -u) - 1,
            r >>= -u,
            u += i; u > 0; o = 256 * o + e[t + d],
            d += m,
            u -= 8)
                ;
            if (r === 0)
                r = 1 - c;
            else {
                if (r === l)
                    return o ? NaN : 1 / 0 * (y ? -1 : 1);
                o += Math.pow(2, i),
                r -= c
            }
            return (y ? -1 : 1) * o * Math.pow(2, r - i)
        },
        write: function(e, t, n, i, s, r) {
            var o, a, l, c = 8 * r - s - 1, u = (1 << c) - 1, d = u >> 1, m = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : r - 1, _ = i ? 1 : -1, g = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            o = u) : (o = Math.floor(Math.log(t) / Math.LN2),
            t * (l = Math.pow(2, -o)) < 1 && (o--,
            l *= 2),
            (t += o + d >= 1 ? m / l : m * Math.pow(2, 1 - d)) * l >= 2 && (o++,
            l /= 2),
            o + d >= u ? (a = 0,
            o = u) : o + d >= 1 ? (a = (t * l - 1) * Math.pow(2, s),
            o += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, s),
            o = 0)); s >= 8; e[n + y] = 255 & a,
            y += _,
            a /= 256,
            s -= 8)
                ;
            for (o = o << s | a,
            c += s; c > 0; e[n + y] = 255 & o,
            y += _,
            o /= 256,
            c -= 8)
                ;
            e[n + y - _] |= 128 * g
        }
    },
    st = {},
    Zn = Ds,
    Gt = Fs,
    Xr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null,
    st.Buffer = ue,
    st.SlowBuffer = function(e) {
        return +e != e && (e = 0),
        ue.alloc(+e)
    }
    ,
    st.INSPECT_MAX_BYTES = 50,
    st.kMaxLength = 2147483647,
    ue.TYPED_ARRAY_SUPPORT = function() {
        try {
            var e = new Uint8Array(1)
              , t = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            e.foo() === 42
        } catch {
            return !1
        }
    }(),
    ue.TYPED_ARRAY_SUPPORT || typeof console > "u" || typeof console.error != "function" || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
    Object.defineProperty(ue.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (ue.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(ue.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (ue.isBuffer(this))
                return this.byteOffset
        }
    }),
    ue.poolSize = 8192,
    ue.from = function(e, t, n) {
        return Na(e, t, n)
    }
    ,
    Object.setPrototypeOf(ue.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(ue, Uint8Array),
    ue.alloc = function(e, t, n) {
        return function(i, s, r) {
            return Ca(i),
            i <= 0 ? bt(i) : s !== void 0 ? typeof r == "string" ? bt(i).fill(s, r) : bt(i).fill(s) : bt(i)
        }(e, t, n)
    }
    ,
    ue.allocUnsafe = function(e) {
        return fo(e)
    }
    ,
    ue.allocUnsafeSlow = function(e) {
        return fo(e)
    }
    ,
    ue.isBuffer = function(e) {
        return e != null && e._isBuffer === !0 && e !== ue.prototype
    }
    ,
    ue.compare = function(e, t) {
        if (Tt(e, Uint8Array) && (e = ue.from(e, e.offset, e.byteLength)),
        Tt(t, Uint8Array) && (t = ue.from(t, t.offset, t.byteLength)),
        !ue.isBuffer(e) || !ue.isBuffer(t))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
            return 0;
        for (var n = e.length, i = t.length, s = 0, r = Math.min(n, i); s < r; ++s)
            if (e[s] !== t[s]) {
                n = e[s],
                i = t[s];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    }
    ,
    ue.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    ue.concat = function(e, t) {
        if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
            return ue.alloc(0);
        var n;
        if (t === void 0)
            for (t = 0,
            n = 0; n < e.length; ++n)
                t += e[n].length;
        var i = ue.allocUnsafe(t)
          , s = 0;
        for (n = 0; n < e.length; ++n) {
            var r = e[n];
            if (Tt(r, Uint8Array) && (r = ue.from(r)),
            !ue.isBuffer(r))
                throw new TypeError('"list" argument must be an Array of Buffers');
            r.copy(i, s),
            s += r.length
        }
        return i
    }
    ,
    ue.byteLength = Ua,
    ue.prototype._isBuffer = !0,
    ue.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2)
            Bt(this, t, t + 1);
        return this
    }
    ,
    ue.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4)
            Bt(this, t, t + 3),
            Bt(this, t + 1, t + 2);
        return this
    }
    ,
    ue.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8)
            Bt(this, t, t + 7),
            Bt(this, t + 1, t + 6),
            Bt(this, t + 2, t + 5),
            Bt(this, t + 3, t + 4);
        return this
    }
    ,
    ue.prototype.toString = function() {
        var e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? xa(this, 0, e) : uu.apply(this, arguments)
    }
    ,
    ue.prototype.toLocaleString = ue.prototype.toString,
    ue.prototype.equals = function(e) {
        if (!ue.isBuffer(e))
            throw new TypeError("Argument must be a Buffer");
        return this === e || ue.compare(this, e) === 0
    }
    ,
    ue.prototype.inspect = function() {
        var e = ""
          , t = st.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
        this.length > t && (e += " ... "),
        "<Buffer " + e + ">"
    }
    ,
    Xr && (ue.prototype[Xr] = ue.prototype.inspect),
    ue.prototype.compare = function(e, t, n, i, s) {
        if (Tt(e, Uint8Array) && (e = ue.from(e, e.offset, e.byteLength)),
        !ue.isBuffer(e))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0),
        n === void 0 && (n = e ? e.length : 0),
        i === void 0 && (i = 0),
        s === void 0 && (s = this.length),
        t < 0 || n > e.length || i < 0 || s > this.length)
            throw new RangeError("out of range index");
        if (i >= s && t >= n)
            return 0;
        if (i >= s)
            return -1;
        if (t >= n)
            return 1;
        if (this === e)
            return 0;
        for (var r = (s >>>= 0) - (i >>>= 0), o = (n >>>= 0) - (t >>>= 0), a = Math.min(r, o), l = this.slice(i, s), c = e.slice(t, n), u = 0; u < a; ++u)
            if (l[u] !== c[u]) {
                r = l[u],
                o = c[u];
                break
            }
        return r < o ? -1 : o < r ? 1 : 0
    }
    ,
    ue.prototype.includes = function(e, t, n) {
        return this.indexOf(e, t, n) !== -1
    }
    ,
    ue.prototype.indexOf = function(e, t, n) {
        return Ns(this, e, t, n, !0)
    }
    ,
    ue.prototype.lastIndexOf = function(e, t, n) {
        return Ns(this, e, t, n, !1)
    }
    ,
    ue.prototype.write = function(e, t, n, i) {
        if (t === void 0)
            i = "utf8",
            n = this.length,
            t = 0;
        else if (n === void 0 && typeof t == "string")
            i = t,
            n = this.length,
            t = 0;
        else {
            if (!isFinite(t))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0,
            isFinite(n) ? (n >>>= 0,
            i === void 0 && (i = "utf8")) : (i = n,
            n = void 0)
        }
        var s = this.length - t;
        if ((n === void 0 || n > s) && (n = s),
        e.length > 0 && (n < 0 || t < 0) || t > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var r = !1; ; )
            switch (i) {
            case "hex":
                return hu(this, e, t, n);
            case "utf8":
            case "utf-8":
                return du(this, e, t, n);
            case "ascii":
                return Ma(this, e, t, n);
            case "latin1":
            case "binary":
                return fu(this, e, t, n);
            case "base64":
                return pu(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return mu(this, e, t, n);
            default:
                if (r)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(),
                r = !0
            }
    }
    ,
    ue.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ,
    ue.prototype.slice = function(e, t) {
        var n = this.length;
        (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
        (t = t === void 0 ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
        t < e && (t = e);
        var i = this.subarray(e, t);
        return Object.setPrototypeOf(i, ue.prototype),
        i
    }
    ,
    ue.prototype.readUIntLE = function(e, t, n) {
        e >>>= 0,
        t >>>= 0,
        n || je(e, t, this.length);
        for (var i = this[e], s = 1, r = 0; ++r < t && (s *= 256); )
            i += this[e + r] * s;
        return i
    }
    ,
    ue.prototype.readUIntBE = function(e, t, n) {
        e >>>= 0,
        t >>>= 0,
        n || je(e, t, this.length);
        for (var i = this[e + --t], s = 1; t > 0 && (s *= 256); )
            i += this[e + --t] * s;
        return i
    }
    ,
    ue.prototype.readUInt8 = function(e, t) {
        return e >>>= 0,
        t || je(e, 1, this.length),
        this[e]
    }
    ,
    ue.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0,
        t || je(e, 2, this.length),
        this[e] | this[e + 1] << 8
    }
    ,
    ue.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0,
        t || je(e, 2, this.length),
        this[e] << 8 | this[e + 1]
    }
    ,
    ue.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }
    ,
    ue.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }
    ,
    ue.prototype.readIntLE = function(e, t, n) {
        e >>>= 0,
        t >>>= 0,
        n || je(e, t, this.length);
        for (var i = this[e], s = 1, r = 0; ++r < t && (s *= 256); )
            i += this[e + r] * s;
        return i >= (s *= 128) && (i -= Math.pow(2, 8 * t)),
        i
    }
    ,
    ue.prototype.readIntBE = function(e, t, n) {
        e >>>= 0,
        t >>>= 0,
        n || je(e, t, this.length);
        for (var i = t, s = 1, r = this[e + --i]; i > 0 && (s *= 256); )
            r += this[e + --i] * s;
        return r >= (s *= 128) && (r -= Math.pow(2, 8 * t)),
        r
    }
    ,
    ue.prototype.readInt8 = function(e, t) {
        return e >>>= 0,
        t || je(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }
    ,
    ue.prototype.readInt16LE = function(e, t) {
        e >>>= 0,
        t || je(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
    }
    ,
    ue.prototype.readInt16BE = function(e, t) {
        e >>>= 0,
        t || je(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n
    }
    ,
    ue.prototype.readInt32LE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }
    ,
    ue.prototype.readInt32BE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }
    ,
    ue.prototype.readFloatLE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        Gt.read(this, e, !0, 23, 4)
    }
    ,
    ue.prototype.readFloatBE = function(e, t) {
        return e >>>= 0,
        t || je(e, 4, this.length),
        Gt.read(this, e, !1, 23, 4)
    }
    ,
    ue.prototype.readDoubleLE = function(e, t) {
        return e >>>= 0,
        t || je(e, 8, this.length),
        Gt.read(this, e, !0, 52, 8)
    }
    ,
    ue.prototype.readDoubleBE = function(e, t) {
        return e >>>= 0,
        t || je(e, 8, this.length),
        Gt.read(this, e, !1, 52, 8)
    }
    ,
    ue.prototype.writeUIntLE = function(e, t, n, i) {
        e = +e,
        t >>>= 0,
        n >>>= 0,
        i || Ke(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var s = 1
          , r = 0;
        for (this[t] = 255 & e; ++r < n && (s *= 256); )
            this[t + r] = e / s & 255;
        return t + n
    }
    ,
    ue.prototype.writeUIntBE = function(e, t, n, i) {
        e = +e,
        t >>>= 0,
        n >>>= 0,
        i || Ke(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var s = n - 1
          , r = 1;
        for (this[t + s] = 255 & e; --s >= 0 && (r *= 256); )
            this[t + s] = e / r & 255;
        return t + n
    }
    ,
    ue.prototype.writeUInt8 = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 1, 255, 0),
        this[t] = 255 & e,
        t + 1
    }
    ,
    ue.prototype.writeUInt16LE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 2, 65535, 0),
        this[t] = 255 & e,
        this[t + 1] = e >>> 8,
        t + 2
    }
    ,
    ue.prototype.writeUInt16BE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 2, 65535, 0),
        this[t] = e >>> 8,
        this[t + 1] = 255 & e,
        t + 2
    }
    ,
    ue.prototype.writeUInt32LE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 4, 4294967295, 0),
        this[t + 3] = e >>> 24,
        this[t + 2] = e >>> 16,
        this[t + 1] = e >>> 8,
        this[t] = 255 & e,
        t + 4
    }
    ,
    ue.prototype.writeUInt32BE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 4, 4294967295, 0),
        this[t] = e >>> 24,
        this[t + 1] = e >>> 16,
        this[t + 2] = e >>> 8,
        this[t + 3] = 255 & e,
        t + 4
    }
    ,
    ue.prototype.writeIntLE = function(e, t, n, i) {
        if (e = +e,
        t >>>= 0,
        !i) {
            var s = Math.pow(2, 8 * n - 1);
            Ke(this, e, t, n, s - 1, -s)
        }
        var r = 0
          , o = 1
          , a = 0;
        for (this[t] = 255 & e; ++r < n && (o *= 256); )
            e < 0 && a === 0 && this[t + r - 1] !== 0 && (a = 1),
            this[t + r] = (e / o >> 0) - a & 255;
        return t + n
    }
    ,
    ue.prototype.writeIntBE = function(e, t, n, i) {
        if (e = +e,
        t >>>= 0,
        !i) {
            var s = Math.pow(2, 8 * n - 1);
            Ke(this, e, t, n, s - 1, -s)
        }
        var r = n - 1
          , o = 1
          , a = 0;
        for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); )
            e < 0 && a === 0 && this[t + r + 1] !== 0 && (a = 1),
            this[t + r] = (e / o >> 0) - a & 255;
        return t + n
    }
    ,
    ue.prototype.writeInt8 = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 1, 127, -128),
        e < 0 && (e = 255 + e + 1),
        this[t] = 255 & e,
        t + 1
    }
    ,
    ue.prototype.writeInt16LE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 2, 32767, -32768),
        this[t] = 255 & e,
        this[t + 1] = e >>> 8,
        t + 2
    }
    ,
    ue.prototype.writeInt16BE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 2, 32767, -32768),
        this[t] = e >>> 8,
        this[t + 1] = 255 & e,
        t + 2
    }
    ,
    ue.prototype.writeInt32LE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 4, 2147483647, -2147483648),
        this[t] = 255 & e,
        this[t + 1] = e >>> 8,
        this[t + 2] = e >>> 16,
        this[t + 3] = e >>> 24,
        t + 4
    }
    ,
    ue.prototype.writeInt32BE = function(e, t, n) {
        return e = +e,
        t >>>= 0,
        n || Ke(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        this[t] = e >>> 24,
        this[t + 1] = e >>> 16,
        this[t + 2] = e >>> 8,
        this[t + 3] = 255 & e,
        t + 4
    }
    ,
    ue.prototype.writeFloatLE = function(e, t, n) {
        return Us(this, e, t, !0, n)
    }
    ,
    ue.prototype.writeFloatBE = function(e, t, n) {
        return Us(this, e, t, !1, n)
    }
    ,
    ue.prototype.writeDoubleLE = function(e, t, n) {
        return Ms(this, e, t, !0, n)
    }
    ,
    ue.prototype.writeDoubleBE = function(e, t, n) {
        return Ms(this, e, t, !1, n)
    }
    ,
    ue.prototype.copy = function(e, t, n, i) {
        if (!ue.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
        if (n || (n = 0),
        i || i === 0 || (i = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        i > 0 && i < n && (i = n),
        i === n || e.length === 0 || this.length === 0)
            return 0;
        if (t < 0)
            throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
        if (i < 0)
            throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length),
        e.length - t < i - n && (i = e.length - t + n);
        var s = i - n;
        if (this === e && typeof Uint8Array.prototype.copyWithin == "function")
            this.copyWithin(t, n, i);
        else if (this === e && n < t && t < i)
            for (var r = s - 1; r >= 0; --r)
                e[r + t] = this[r + n];
        else
            Uint8Array.prototype.set.call(e, this.subarray(n, i), t);
        return s
    }
    ,
    ue.prototype.fill = function(e, t, n, i) {
        if (typeof e == "string") {
            if (typeof t == "string" ? (i = t,
            t = 0,
            n = this.length) : typeof n == "string" && (i = n,
            n = this.length),
            i !== void 0 && typeof i != "string")
                throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !ue.isEncoding(i))
                throw new TypeError("Unknown encoding: " + i);
            if (e.length === 1) {
                var s = e.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (e = s)
            }
        } else
            typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
        if (n <= t)
            return this;
        var r;
        if (t >>>= 0,
        n = n === void 0 ? this.length : n >>> 0,
        e || (e = 0),
        typeof e == "number")
            for (r = t; r < n; ++r)
                this[r] = e;
        else {
            var o = ue.isBuffer(e) ? e : ue.from(e, i)
              , a = o.length;
            if (a === 0)
                throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for (r = 0; r < n - t; ++r)
                this[r + t] = o[r % a]
        }
        return this
    }
    ,
    Ba = /[^+/0-9A-Za-z-_]/g,
    Fa = function() {
        for (var e = new Array(256), t = 0; t < 16; ++t)
            for (var n = 16 * t, i = 0; i < 16; ++i)
                e[n + i] = "0123456789abcdef"[t] + "0123456789abcdef"[i];
        return e
    }(),
    st.Buffer,
    st.INSPECT_MAX_BYTES,
    st.kMaxLength,
    gn = {},
    yn = st,
    tt = yn.Buffer,
    tt.from && tt.alloc && tt.allocUnsafe && tt.allocUnsafeSlow ? gn = yn : (xs(yn, gn),
    gn.Buffer = Ft),
    Ft.prototype = Object.create(tt.prototype),
    xs(tt, Ft),
    Ft.from = function(e, t, n) {
        if (typeof e == "number")
            throw new TypeError("Argument must not be a number");
        return tt(e, t, n)
    }
    ,
    Ft.alloc = function(e, t, n) {
        if (typeof e != "number")
            throw new TypeError("Argument must be a number");
        var i = tt(e);
        return t !== void 0 ? typeof n == "string" ? i.fill(t, n) : i.fill(t) : i.fill(0),
        i
    }
    ,
    Ft.allocUnsafe = function(e) {
        if (typeof e != "number")
            throw new TypeError("Argument must be a number");
        return tt(e)
    }
    ,
    Ft.allocUnsafeSlow = function(e) {
        if (typeof e != "number")
            throw new TypeError("Argument must be a number");
        return yn.SlowBuffer(e)
    }
    ,
    qs = gn,
    sn = {},
    er = qs.Buffer,
    mo = er.isEncoding || function(e) {
        switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ,
    sn.StringDecoder = mn,
    mn.prototype.write = function(e) {
        if (e.length === 0)
            return "";
        var t, n;
        if (this.lastNeed) {
            if ((t = this.fillLast(e)) === void 0)
                return "";
            n = this.lastNeed,
            this.lastNeed = 0
        } else
            n = 0;
        return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
    }
    ,
    mn.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "\uFFFD" : t
    }
    ,
    mn.prototype.text = function(e, t) {
        var n = function(s, r, o) {
            var a = r.length - 1;
            if (a < o)
                return 0;
            var l = Qr(r[a]);
            return l >= 0 ? (l > 0 && (s.lastNeed = l - 1),
            l) : --a < o || l === -2 ? 0 : (l = Qr(r[a])) >= 0 ? (l > 0 && (s.lastNeed = l - 2),
            l) : --a < o || l === -2 ? 0 : (l = Qr(r[a])) >= 0 ? (l > 0 && (l === 2 ? l = 0 : s.lastNeed = l - 3),
            l) : 0
        }(this, e, t);
        if (!this.lastNeed)
            return e.toString("utf8", t);
        this.lastTotal = n;
        var i = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, i),
        e.toString("utf8", t, i)
    }
    ,
    mn.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
        this.lastNeed -= e.length
    }
    ,
    sn.StringDecoder,
    sn.StringDecoder
}
), qa = {};
Yt(qa, {
    StringDecoder: () => ja,
    default: () => sn
});
var ja, Au = We( () => {
    ie(),
    se(),
    oe(),
    js(),
    js(),
    ja = sn.StringDecoder
}
), Wa = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = Qt()
      , {PromisePrototypeThen: i, SymbolAsyncIterator: s, SymbolIterator: r} = qe()
      , {Buffer: o} = (Ge(),
    Pe(Ve))
      , {ERR_INVALID_ARG_TYPE: a, ERR_STREAM_NULL_VALUES: l} = ze().codes;
    function c(u, d, m) {
        let y;
        if (typeof d == "string" || d instanceof o)
            return new u({
                objectMode: !0,
                ...m,
                read() {
                    this.push(d),
                    this.push(null)
                }
            });
        let _;
        if (d && d[s])
            _ = !0,
            y = d[s]();
        else if (d && d[r])
            _ = !1,
            y = d[r]();
        else
            throw new a("iterable",["Iterable"],d);
        let g = new u({
            objectMode: !0,
            highWaterMark: 1,
            ...m
        })
          , b = !1;
        g._read = function() {
            b || (b = !0,
            w())
        }
        ,
        g._destroy = function(T, R) {
            i(k(T), () => n.nextTick(R, T), M => n.nextTick(R, M || T))
        }
        ;
        async function k(T) {
            let R = T != null
              , M = typeof y.throw == "function";
            if (R && M) {
                let {value: E, done: A} = await y.throw(T);
                if (await E,
                A)
                    return
            }
            if (typeof y.return == "function") {
                let {value: E} = await y.return();
                await E
            }
        }
        async function w() {
            for (; ; ) {
                try {
                    let {value: T, done: R} = _ ? await y.next() : y.next();
                    if (R)
                        g.push(null);
                    else {
                        let M = T && typeof T.then == "function" ? await T : T;
                        if (M === null)
                            throw b = !1,
                            new l;
                        if (g.push(M))
                            continue;
                        b = !1
                    }
                } catch (T) {
                    g.destroy(T)
                }
                break
            }
        }
        return g
    }
    t.exports = c
}
), sr = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Qt()
      , {ArrayPrototypeIndexOf: i, NumberIsInteger: s, NumberIsNaN: r, NumberParseInt: o, ObjectDefineProperties: a, ObjectKeys: l, ObjectSetPrototypeOf: c, Promise: u, SafeSet: d, SymbolAsyncIterator: m, Symbol: y} = qe();
    t.exports = S,
    S.ReadableState = ge;
    var {EventEmitter: _} = (ln(),
    Pe(Xt))
      , {Stream: g, prependListener: b} = Po()
      , {Buffer: k} = (Ge(),
    Pe(Ve))
      , {addAbortSignal: w} = ir()
      , T = Ut()
      , R = kt().debuglog("stream", h => {
        R = h
    }
    )
      , M = au()
      , E = an()
      , {getHighWaterMark: A, getDefaultHighWaterMark: U} = No()
      , {aggregateTwoErrors: W, codes: {ERR_INVALID_ARG_TYPE: $, ERR_METHOD_NOT_IMPLEMENTED: Q, ERR_OUT_OF_RANGE: O, ERR_STREAM_PUSH_AFTER_EOF: j, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: Y}} = ze()
      , {validateObject: V} = rr()
      , le = y("kPaused")
      , {StringDecoder: re} = (Au(),
    Pe(qa))
      , q = Wa();
    c(S.prototype, g.prototype),
    c(S, g);
    var pe = () => {}
      , {errorOrDestroy: te} = E;
    function ge(h, p, v) {
        typeof v != "boolean" && (v = p instanceof wt()),
        this.objectMode = !!(h && h.objectMode),
        v && (this.objectMode = this.objectMode || !!(h && h.readableObjectMode)),
        this.highWaterMark = h ? A(this, h, "readableHighWaterMark", v) : U(!1),
        this.buffer = new M,
        this.length = 0,
        this.pipes = [],
        this.flowing = null,
        this.ended = !1,
        this.endEmitted = !1,
        this.reading = !1,
        this.constructed = !0,
        this.sync = !0,
        this.needReadable = !1,
        this.emittedReadable = !1,
        this.readableListening = !1,
        this.resumeScheduled = !1,
        this[le] = null,
        this.errorEmitted = !1,
        this.emitClose = !h || h.emitClose !== !1,
        this.autoDestroy = !h || h.autoDestroy !== !1,
        this.destroyed = !1,
        this.errored = null,
        this.closed = !1,
        this.closeEmitted = !1,
        this.defaultEncoding = h && h.defaultEncoding || "utf8",
        this.awaitDrainWriters = null,
        this.multiAwaitDrain = !1,
        this.readingMore = !1,
        this.dataEmitted = !1,
        this.decoder = null,
        this.encoding = null,
        h && h.encoding && (this.decoder = new re(h.encoding),
        this.encoding = h.encoding)
    }
    function S(h) {
        if (!(this instanceof S))
            return new S(h);
        let p = this instanceof wt();
        this._readableState = new ge(h,this,p),
        h && (typeof h.read == "function" && (this._read = h.read),
        typeof h.destroy == "function" && (this._destroy = h.destroy),
        typeof h.construct == "function" && (this._construct = h.construct),
        h.signal && !p && w(h.signal, this)),
        g.call(this, h),
        E.construct(this, () => {
            this._readableState.needReadable && Z(this, this._readableState)
        }
        )
    }
    S.prototype.destroy = E.destroy,
    S.prototype._undestroy = E.undestroy,
    S.prototype._destroy = function(h, p) {
        p(h)
    }
    ,
    S.prototype[_.captureRejectionSymbol] = function(h) {
        this.destroy(h)
    }
    ,
    S.prototype.push = function(h, p) {
        return H(this, h, p, !1)
    }
    ,
    S.prototype.unshift = function(h, p) {
        return H(this, h, p, !0)
    }
    ;
    function H(h, p, v, N) {
        R("readableAddChunk", p);
        let F = h._readableState, he;
        if (F.objectMode || (typeof p == "string" ? (v = v || F.defaultEncoding,
        F.encoding !== v && (N && F.encoding ? p = k.from(p, v).toString(F.encoding) : (p = k.from(p, v),
        v = ""))) : p instanceof k ? v = "" : g._isUint8Array(p) ? (p = g._uint8ArrayToBuffer(p),
        v = "") : p != null && (he = new $("chunk",["string", "Buffer", "Uint8Array"],p))),
        he)
            te(h, he);
        else if (p === null)
            F.reading = !1,
            I(h, F);
        else if (F.objectMode || p && p.length > 0)
            if (N)
                if (F.endEmitted)
                    te(h, new Y);
                else {
                    if (F.destroyed || F.errored)
                        return !1;
                    me(h, F, p, !0)
                }
            else if (F.ended)
                te(h, new j);
            else {
                if (F.destroyed || F.errored)
                    return !1;
                F.reading = !1,
                F.decoder && !v ? (p = F.decoder.write(p),
                F.objectMode || p.length !== 0 ? me(h, F, p, !1) : Z(h, F)) : me(h, F, p, !1)
            }
        else
            N || (F.reading = !1,
            Z(h, F));
        return !F.ended && (F.length < F.highWaterMark || F.length === 0)
    }
    function me(h, p, v, N) {
        p.flowing && p.length === 0 && !p.sync && h.listenerCount("data") > 0 ? (p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null,
        p.dataEmitted = !0,
        h.emit("data", v)) : (p.length += p.objectMode ? 1 : v.length,
        N ? p.buffer.unshift(v) : p.buffer.push(v),
        p.needReadable && G(h)),
        Z(h, p)
    }
    S.prototype.isPaused = function() {
        let h = this._readableState;
        return h[le] === !0 || h.flowing === !1
    }
    ,
    S.prototype.setEncoding = function(h) {
        let p = new re(h);
        this._readableState.decoder = p,
        this._readableState.encoding = this._readableState.decoder.encoding;
        let v = this._readableState.buffer
          , N = "";
        for (let F of v)
            N += p.write(F);
        return v.clear(),
        N !== "" && v.push(N),
        this._readableState.length = N.length,
        this
    }
    ;
    var ye = 1073741824;
    function de(h) {
        if (h > ye)
            throw new O("size","<= 1GiB",h);
        return h--,
        h |= h >>> 1,
        h |= h >>> 2,
        h |= h >>> 4,
        h |= h >>> 8,
        h |= h >>> 16,
        h++,
        h
    }
    function C(h, p) {
        return h <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : r(h) ? p.flowing && p.length ? p.buffer.first().length : p.length : h <= p.length ? h : p.ended ? p.length : 0
    }
    S.prototype.read = function(h) {
        R("read", h),
        h === void 0 ? h = NaN : s(h) || (h = o(h, 10));
        let p = this._readableState
          , v = h;
        if (h > p.highWaterMark && (p.highWaterMark = de(h)),
        h !== 0 && (p.emittedReadable = !1),
        h === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
            return R("read: emitReadable", p.length, p.ended),
            p.length === 0 && p.ended ? X(this) : G(this),
            null;
        if (h = C(h, p),
        h === 0 && p.ended)
            return p.length === 0 && X(this),
            null;
        let N = p.needReadable;
        if (R("need readable", N),
        (p.length === 0 || p.length - h < p.highWaterMark) && (N = !0,
        R("length less than watermark", N)),
        p.ended || p.reading || p.destroyed || p.errored || !p.constructed)
            N = !1,
            R("reading, ended or constructing", N);
        else if (N) {
            R("do read"),
            p.reading = !0,
            p.sync = !0,
            p.length === 0 && (p.needReadable = !0);
            try {
                this._read(p.highWaterMark)
            } catch (he) {
                te(this, he)
            }
            p.sync = !1,
            p.reading || (h = C(v, p))
        }
        let F;
        return h > 0 ? F = K(h, p) : F = null,
        F === null ? (p.needReadable = p.length <= p.highWaterMark,
        h = 0) : (p.length -= h,
        p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null),
        p.length === 0 && (p.ended || (p.needReadable = !0),
        v !== h && p.ended && X(this)),
        F !== null && !p.errorEmitted && !p.closeEmitted && (p.dataEmitted = !0,
        this.emit("data", F)),
        F
    }
    ;
    function I(h, p) {
        if (R("onEofChunk"),
        !p.ended) {
            if (p.decoder) {
                let v = p.decoder.end();
                v && v.length && (p.buffer.push(v),
                p.length += p.objectMode ? 1 : v.length)
            }
            p.ended = !0,
            p.sync ? G(h) : (p.needReadable = !1,
            p.emittedReadable = !0,
            ae(h))
        }
    }
    function G(h) {
        let p = h._readableState;
        R("emitReadable", p.needReadable, p.emittedReadable),
        p.needReadable = !1,
        p.emittedReadable || (R("emitReadable", p.flowing),
        p.emittedReadable = !0,
        n.nextTick(ae, h))
    }
    function ae(h) {
        let p = h._readableState;
        R("emitReadable_", p.destroyed, p.length, p.ended),
        !p.destroyed && !p.errored && (p.length || p.ended) && (h.emit("readable"),
        p.emittedReadable = !1),
        p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark,
        ne(h)
    }
    function Z(h, p) {
        !p.readingMore && p.constructed && (p.readingMore = !0,
        n.nextTick(z, h, p))
    }
    function z(h, p) {
        for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
            let v = p.length;
            if (R("maybeReadMore read 0"),
            h.read(0),
            v === p.length)
                break
        }
        p.readingMore = !1
    }
    S.prototype._read = function(h) {
        throw new Q("_read()")
    }
    ,
    S.prototype.pipe = function(h, p) {
        let v = this
          , N = this._readableState;
        N.pipes.length === 1 && (N.multiAwaitDrain || (N.multiAwaitDrain = !0,
        N.awaitDrainWriters = new d(N.awaitDrainWriters ? [N.awaitDrainWriters] : []))),
        N.pipes.push(h),
        R("pipe count=%d opts=%j", N.pipes.length, p);
        let F = (!p || p.end !== !1) && h !== n.stdout && h !== n.stderr ? Te : dn;
        N.endEmitted ? n.nextTick(F) : v.once("end", F),
        h.on("unpipe", he);
        function he(xt, dt) {
            R("onunpipe"),
            xt === v && dt && dt.hasUnpiped === !1 && (dt.hasUnpiped = !0,
            Ee())
        }
        function Te() {
            R("onend"),
            h.end()
        }
        let Ne, Ae = !1;
        function Ee() {
            R("cleanup"),
            h.removeListener("close", Dr),
            h.removeListener("finish", Lr),
            Ne && h.removeListener("drain", Ne),
            h.removeListener("error", xr),
            h.removeListener("unpipe", he),
            v.removeListener("end", Te),
            v.removeListener("end", dn),
            v.removeListener("data", Zo),
            Ae = !0,
            Ne && N.awaitDrainWriters && (!h._writableState || h._writableState.needDrain) && Ne()
        }
        function Me() {
            Ae || (N.pipes.length === 1 && N.pipes[0] === h ? (R("false write response, pause", 0),
            N.awaitDrainWriters = h,
            N.multiAwaitDrain = !1) : N.pipes.length > 1 && N.pipes.includes(h) && (R("false write response, pause", N.awaitDrainWriters.size),
            N.awaitDrainWriters.add(h)),
            v.pause()),
            Ne || (Ne = L(v, h),
            h.on("drain", Ne))
        }
        v.on("data", Zo);
        function Zo(xt) {
            R("ondata");
            let dt = h.write(xt);
            R("dest.write", dt),
            dt === !1 && Me()
        }
        function xr(xt) {
            if (R("onerror", xt),
            dn(),
            h.removeListener("error", xr),
            h.listenerCount("error") === 0) {
                let dt = h._writableState || h._readableState;
                dt && !dt.errorEmitted ? te(h, xt) : h.emit("error", xt)
            }
        }
        b(h, "error", xr);
        function Dr() {
            h.removeListener("finish", Lr),
            dn()
        }
        h.once("close", Dr);
        function Lr() {
            R("onfinish"),
            h.removeListener("close", Dr),
            dn()
        }
        h.once("finish", Lr);
        function dn() {
            R("unpipe"),
            v.unpipe(h)
        }
        return h.emit("pipe", v),
        h.writableNeedDrain === !0 ? N.flowing && Me() : N.flowing || (R("pipe resume"),
        v.resume()),
        h
    }
    ;
    function L(h, p) {
        return function() {
            let v = h._readableState;
            v.awaitDrainWriters === p ? (R("pipeOnDrain", 1),
            v.awaitDrainWriters = null) : v.multiAwaitDrain && (R("pipeOnDrain", v.awaitDrainWriters.size),
            v.awaitDrainWriters.delete(p)),
            (!v.awaitDrainWriters || v.awaitDrainWriters.size === 0) && h.listenerCount("data") && h.resume()
        }
    }
    S.prototype.unpipe = function(h) {
        let p = this._readableState
          , v = {
            hasUnpiped: !1
        };
        if (p.pipes.length === 0)
            return this;
        if (!h) {
            let F = p.pipes;
            p.pipes = [],
            this.pause();
            for (let he = 0; he < F.length; he++)
                F[he].emit("unpipe", this, {
                    hasUnpiped: !1
                });
            return this
        }
        let N = i(p.pipes, h);
        return N === -1 ? this : (p.pipes.splice(N, 1),
        p.pipes.length === 0 && this.pause(),
        h.emit("unpipe", this, v),
        this)
    }
    ,
    S.prototype.on = function(h, p) {
        let v = g.prototype.on.call(this, h, p)
          , N = this._readableState;
        return h === "data" ? (N.readableListening = this.listenerCount("readable") > 0,
        N.flowing !== !1 && this.resume()) : h === "readable" && !N.endEmitted && !N.readableListening && (N.readableListening = N.needReadable = !0,
        N.flowing = !1,
        N.emittedReadable = !1,
        R("on readable", N.length, N.reading),
        N.length ? G(this) : N.reading || n.nextTick(P, this)),
        v
    }
    ,
    S.prototype.addListener = S.prototype.on,
    S.prototype.removeListener = function(h, p) {
        let v = g.prototype.removeListener.call(this, h, p);
        return h === "readable" && n.nextTick(ce, this),
        v
    }
    ,
    S.prototype.off = S.prototype.removeListener,
    S.prototype.removeAllListeners = function(h) {
        let p = g.prototype.removeAllListeners.apply(this, arguments);
        return (h === "readable" || h === void 0) && n.nextTick(ce, this),
        p
    }
    ;
    function ce(h) {
        let p = h._readableState;
        p.readableListening = h.listenerCount("readable") > 0,
        p.resumeScheduled && p[le] === !1 ? p.flowing = !0 : h.listenerCount("data") > 0 ? h.resume() : p.readableListening || (p.flowing = null)
    }
    function P(h) {
        R("readable nexttick read 0"),
        h.read(0)
    }
    S.prototype.resume = function() {
        let h = this._readableState;
        return h.flowing || (R("resume"),
        h.flowing = !h.readableListening,
        D(this, h)),
        h[le] = !1,
        this
    }
    ;
    function D(h, p) {
        p.resumeScheduled || (p.resumeScheduled = !0,
        n.nextTick(B, h, p))
    }
    function B(h, p) {
        R("resume", p.reading),
        p.reading || h.read(0),
        p.resumeScheduled = !1,
        h.emit("resume"),
        ne(h),
        p.flowing && !p.reading && h.read(0)
    }
    S.prototype.pause = function() {
        return R("call pause flowing=%j", this._readableState.flowing),
        this._readableState.flowing !== !1 && (R("pause"),
        this._readableState.flowing = !1,
        this.emit("pause")),
        this._readableState[le] = !0,
        this
    }
    ;
    function ne(h) {
        let p = h._readableState;
        for (R("flow", p.flowing); p.flowing && h.read() !== null; )
            ;
    }
    S.prototype.wrap = function(h) {
        let p = !1;
        h.on("data", N => {
            !this.push(N) && h.pause && (p = !0,
            h.pause())
        }
        ),
        h.on("end", () => {
            this.push(null)
        }
        ),
        h.on("error", N => {
            te(this, N)
        }
        ),
        h.on("close", () => {
            this.destroy()
        }
        ),
        h.on("destroy", () => {
            this.destroy()
        }
        ),
        this._read = () => {
            p && h.resume && (p = !1,
            h.resume())
        }
        ;
        let v = l(h);
        for (let N = 1; N < v.length; N++) {
            let F = v[N];
            this[F] === void 0 && typeof h[F] == "function" && (this[F] = h[F].bind(h))
        }
        return this
    }
    ,
    S.prototype[m] = function() {
        return J(this)
    }
    ,
    S.prototype.iterator = function(h) {
        return h !== void 0 && V(h, "options"),
        J(this, h)
    }
    ;
    function J(h, p) {
        typeof h.read != "function" && (h = S.wrap(h, {
            objectMode: !0
        }));
        let v = x(h, p);
        return v.stream = h,
        v
    }
    async function *x(h, p) {
        let v = pe;
        function N(Te) {
            this === h ? (v(),
            v = pe) : v = Te
        }
        h.on("readable", N);
        let F, he = T(h, {
            writable: !1
        }, Te => {
            F = Te ? W(F, Te) : null,
            v(),
            v = pe
        }
        );
        try {
            for (; ; ) {
                let Te = h.destroyed ? null : h.read();
                if (Te !== null)
                    yield Te;
                else {
                    if (F)
                        throw F;
                    if (F === null)
                        return;
                    await new u(N)
                }
            }
        } catch (Te) {
            throw F = W(F, Te),
            F
        } finally {
            (F || p?.destroyOnReturn !== !1) && (F === void 0 || h._readableState.autoDestroy) ? E.destroyer(h, null) : (h.off("readable", N),
            he())
        }
    }
    a(S.prototype, {
        readable: {
            __proto__: null,
            get() {
                let h = this._readableState;
                return !!h && h.readable !== !1 && !h.destroyed && !h.errorEmitted && !h.endEmitted
            },
            set(h) {
                this._readableState && (this._readableState.readable = !!h)
            }
        },
        readableDidRead: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.dataEmitted
            }
        },
        readableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted)
            }
        },
        readableHighWaterMark: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        },
        readableBuffer: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        },
        readableFlowing: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(h) {
                this._readableState && (this._readableState.flowing = h)
            }
        },
        readableLength: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState.length
            }
        },
        readableObjectMode: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.objectMode : !1
            }
        },
        readableEncoding: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.encoding : null
            }
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.errored : null
            }
        },
        closed: {
            __proto__: null,
            get() {
                return this._readableState ? this._readableState.closed : !1
            }
        },
        destroyed: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.destroyed : !1
            },
            set(h) {
                this._readableState && (this._readableState.destroyed = h)
            }
        },
        readableEnded: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.endEmitted : !1
            }
        }
    }),
    a(ge.prototype, {
        pipesCount: {
            __proto__: null,
            get() {
                return this.pipes.length
            }
        },
        paused: {
            __proto__: null,
            get() {
                return this[le] !== !1
            },
            set(h) {
                this[le] = !!h
            }
        }
    }),
    S._fromList = K;
    function K(h, p) {
        if (p.length === 0)
            return null;
        let v;
        return p.objectMode ? v = p.buffer.shift() : !h || h >= p.length ? (p.decoder ? v = p.buffer.join("") : p.buffer.length === 1 ? v = p.buffer.first() : v = p.buffer.concat(p.length),
        p.buffer.clear()) : v = p.buffer.consume(h, p.decoder),
        v
    }
    function X(h) {
        let p = h._readableState;
        R("endReadable", p.endEmitted),
        p.endEmitted || (p.ended = !0,
        n.nextTick(_e, p, h))
    }
    function _e(h, p) {
        if (R("endReadableNT", h.endEmitted, h.length),
        !h.errored && !h.closeEmitted && !h.endEmitted && h.length === 0) {
            if (h.endEmitted = !0,
            p.emit("end"),
            p.writable && p.allowHalfOpen === !1)
                n.nextTick(be, p);
            else if (h.autoDestroy) {
                let v = p._writableState;
                (!v || v.autoDestroy && (v.finished || v.writable === !1)) && p.destroy()
            }
        }
    }
    function be(h) {
        h.writable && !h.writableEnded && !h.destroyed && h.end()
    }
    S.from = function(h, p) {
        return q(S, h, p)
    }
    ;
    var ke;
    function f() {
        return ke === void 0 && (ke = {}),
        ke
    }
    S.fromWeb = function(h, p) {
        return f().newStreamReadableFromReadableStream(h, p)
    }
    ,
    S.toWeb = function(h, p) {
        return f().newReadableStreamFromStreamReadable(h, p)
    }
    ,
    S.wrap = function(h, p) {
        var v, N;
        return new S({
            objectMode: (v = (N = h.readableObjectMode) !== null && N !== void 0 ? N : h.objectMode) !== null && v !== void 0 ? v : !0,
            ...p,
            destroy(F, he) {
                E.destroyer(h, F),
                he(F)
            }
        }).wrap(h)
    }
}
), Va = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Qt()
      , {ArrayPrototypeSlice: i, Error: s, FunctionPrototypeSymbolHasInstance: r, ObjectDefineProperty: o, ObjectDefineProperties: a, ObjectSetPrototypeOf: l, StringPrototypeToLowerCase: c, Symbol: u, SymbolHasInstance: d} = qe();
    t.exports = re,
    re.WritableState = V;
    var {EventEmitter: m} = (ln(),
    Pe(Xt))
      , y = Po().Stream
      , {Buffer: _} = (Ge(),
    Pe(Ve))
      , g = an()
      , {addAbortSignal: b} = ir()
      , {getHighWaterMark: k, getDefaultHighWaterMark: w} = No()
      , {ERR_INVALID_ARG_TYPE: T, ERR_METHOD_NOT_IMPLEMENTED: R, ERR_MULTIPLE_CALLBACK: M, ERR_STREAM_CANNOT_PIPE: E, ERR_STREAM_DESTROYED: A, ERR_STREAM_ALREADY_FINISHED: U, ERR_STREAM_NULL_VALUES: W, ERR_STREAM_WRITE_AFTER_END: $, ERR_UNKNOWN_ENCODING: Q} = ze().codes
      , {errorOrDestroy: O} = g;
    l(re.prototype, y.prototype),
    l(re, y);
    function j() {}
    var Y = u("kOnFinished");
    function V(P, D, B) {
        typeof B != "boolean" && (B = D instanceof wt()),
        this.objectMode = !!(P && P.objectMode),
        B && (this.objectMode = this.objectMode || !!(P && P.writableObjectMode)),
        this.highWaterMark = P ? k(this, P, "writableHighWaterMark", B) : w(!1),
        this.finalCalled = !1,
        this.needDrain = !1,
        this.ending = !1,
        this.ended = !1,
        this.finished = !1,
        this.destroyed = !1;
        let ne = !!(P && P.decodeStrings === !1);
        this.decodeStrings = !ne,
        this.defaultEncoding = P && P.defaultEncoding || "utf8",
        this.length = 0,
        this.writing = !1,
        this.corked = 0,
        this.sync = !0,
        this.bufferProcessing = !1,
        this.onwrite = S.bind(void 0, D),
        this.writecb = null,
        this.writelen = 0,
        this.afterWriteTickInfo = null,
        le(this),
        this.pendingcb = 0,
        this.constructed = !0,
        this.prefinished = !1,
        this.errorEmitted = !1,
        this.emitClose = !P || P.emitClose !== !1,
        this.autoDestroy = !P || P.autoDestroy !== !1,
        this.errored = null,
        this.closed = !1,
        this.closeEmitted = !1,
        this[Y] = []
    }
    function le(P) {
        P.buffered = [],
        P.bufferedIndex = 0,
        P.allBuffers = !0,
        P.allNoop = !0
    }
    V.prototype.getBuffer = function() {
        return i(this.buffered, this.bufferedIndex)
    }
    ,
    o(V.prototype, "bufferedRequestCount", {
        __proto__: null,
        get() {
            return this.buffered.length - this.bufferedIndex
        }
    });
    function re(P) {
        let D = this instanceof wt();
        if (!D && !r(re, this))
            return new re(P);
        this._writableState = new V(P,this,D),
        P && (typeof P.write == "function" && (this._write = P.write),
        typeof P.writev == "function" && (this._writev = P.writev),
        typeof P.destroy == "function" && (this._destroy = P.destroy),
        typeof P.final == "function" && (this._final = P.final),
        typeof P.construct == "function" && (this._construct = P.construct),
        P.signal && b(P.signal, this)),
        y.call(this, P),
        g.construct(this, () => {
            let B = this._writableState;
            B.writing || de(this, B),
            ae(this, B)
        }
        )
    }
    o(re, d, {
        __proto__: null,
        value: function(P) {
            return r(this, P) ? !0 : this !== re ? !1 : P && P._writableState instanceof V
        }
    }),
    re.prototype.pipe = function() {
        O(this, new E)
    }
    ;
    function q(P, D, B, ne) {
        let J = P._writableState;
        if (typeof B == "function")
            ne = B,
            B = J.defaultEncoding;
        else {
            if (!B)
                B = J.defaultEncoding;
            else if (B !== "buffer" && !_.isEncoding(B))
                throw new Q(B);
            typeof ne != "function" && (ne = j)
        }
        if (D === null)
            throw new W;
        if (!J.objectMode)
            if (typeof D == "string")
                J.decodeStrings !== !1 && (D = _.from(D, B),
                B = "buffer");
            else if (D instanceof _)
                B = "buffer";
            else if (y._isUint8Array(D))
                D = y._uint8ArrayToBuffer(D),
                B = "buffer";
            else
                throw new T("chunk",["string", "Buffer", "Uint8Array"],D);
        let x;
        return J.ending ? x = new $ : J.destroyed && (x = new A("write")),
        x ? (n.nextTick(ne, x),
        O(P, x, !0),
        x) : (J.pendingcb++,
        pe(P, J, D, B, ne))
    }
    re.prototype.write = function(P, D, B) {
        return q(this, P, D, B) === !0
    }
    ,
    re.prototype.cork = function() {
        this._writableState.corked++
    }
    ,
    re.prototype.uncork = function() {
        let P = this._writableState;
        P.corked && (P.corked--,
        P.writing || de(this, P))
    }
    ,
    re.prototype.setDefaultEncoding = function(P) {
        if (typeof P == "string" && (P = c(P)),
        !_.isEncoding(P))
            throw new Q(P);
        return this._writableState.defaultEncoding = P,
        this
    }
    ;
    function pe(P, D, B, ne, J) {
        let x = D.objectMode ? 1 : B.length;
        D.length += x;
        let K = D.length < D.highWaterMark;
        return K || (D.needDrain = !0),
        D.writing || D.corked || D.errored || !D.constructed ? (D.buffered.push({
            chunk: B,
            encoding: ne,
            callback: J
        }),
        D.allBuffers && ne !== "buffer" && (D.allBuffers = !1),
        D.allNoop && J !== j && (D.allNoop = !1)) : (D.writelen = x,
        D.writecb = J,
        D.writing = !0,
        D.sync = !0,
        P._write(B, ne, D.onwrite),
        D.sync = !1),
        K && !D.errored && !D.destroyed
    }
    function te(P, D, B, ne, J, x, K) {
        D.writelen = ne,
        D.writecb = K,
        D.writing = !0,
        D.sync = !0,
        D.destroyed ? D.onwrite(new A("write")) : B ? P._writev(J, D.onwrite) : P._write(J, x, D.onwrite),
        D.sync = !1
    }
    function ge(P, D, B, ne) {
        --D.pendingcb,
        ne(B),
        ye(D),
        O(P, B)
    }
    function S(P, D) {
        let B = P._writableState
          , ne = B.sync
          , J = B.writecb;
        if (typeof J != "function") {
            O(P, new M);
            return
        }
        B.writing = !1,
        B.writecb = null,
        B.length -= B.writelen,
        B.writelen = 0,
        D ? (D.stack,
        B.errored || (B.errored = D),
        P._readableState && !P._readableState.errored && (P._readableState.errored = D),
        ne ? n.nextTick(ge, P, B, D, J) : ge(P, B, D, J)) : (B.buffered.length > B.bufferedIndex && de(P, B),
        ne ? B.afterWriteTickInfo !== null && B.afterWriteTickInfo.cb === J ? B.afterWriteTickInfo.count++ : (B.afterWriteTickInfo = {
            count: 1,
            cb: J,
            stream: P,
            state: B
        },
        n.nextTick(H, B.afterWriteTickInfo)) : me(P, B, 1, J))
    }
    function H({stream: P, state: D, count: B, cb: ne}) {
        return D.afterWriteTickInfo = null,
        me(P, D, B, ne)
    }
    function me(P, D, B, ne) {
        for (!D.ending && !P.destroyed && D.length === 0 && D.needDrain && (D.needDrain = !1,
        P.emit("drain")); B-- > 0; )
            D.pendingcb--,
            ne();
        D.destroyed && ye(D),
        ae(P, D)
    }
    function ye(P) {
        if (P.writing)
            return;
        for (let J = P.bufferedIndex; J < P.buffered.length; ++J) {
            var D;
            let {chunk: x, callback: K} = P.buffered[J]
              , X = P.objectMode ? 1 : x.length;
            P.length -= X,
            K((D = P.errored) !== null && D !== void 0 ? D : new A("write"))
        }
        let B = P[Y].splice(0);
        for (let J = 0; J < B.length; J++) {
            var ne;
            B[J]((ne = P.errored) !== null && ne !== void 0 ? ne : new A("end"))
        }
        le(P)
    }
    function de(P, D) {
        if (D.corked || D.bufferProcessing || D.destroyed || !D.constructed)
            return;
        let {buffered: B, bufferedIndex: ne, objectMode: J} = D
          , x = B.length - ne;
        if (!x)
            return;
        let K = ne;
        if (D.bufferProcessing = !0,
        x > 1 && P._writev) {
            D.pendingcb -= x - 1;
            let X = D.allNoop ? j : be => {
                for (let ke = K; ke < B.length; ++ke)
                    B[ke].callback(be)
            }
              , _e = D.allNoop && K === 0 ? B : i(B, K);
            _e.allBuffers = D.allBuffers,
            te(P, D, !0, D.length, _e, "", X),
            le(D)
        } else {
            do {
                let {chunk: X, encoding: _e, callback: be} = B[K];
                B[K++] = null;
                let ke = J ? 1 : X.length;
                te(P, D, !1, ke, X, _e, be)
            } while (K < B.length && !D.writing);
            K === B.length ? le(D) : K > 256 ? (B.splice(0, K),
            D.bufferedIndex = 0) : D.bufferedIndex = K
        }
        D.bufferProcessing = !1
    }
    re.prototype._write = function(P, D, B) {
        if (this._writev)
            this._writev([{
                chunk: P,
                encoding: D
            }], B);
        else
            throw new R("_write()")
    }
    ,
    re.prototype._writev = null,
    re.prototype.end = function(P, D, B) {
        let ne = this._writableState;
        typeof P == "function" ? (B = P,
        P = null,
        D = null) : typeof D == "function" && (B = D,
        D = null);
        let J;
        if (P != null) {
            let x = q(this, P, D);
            x instanceof s && (J = x)
        }
        return ne.corked && (ne.corked = 1,
        this.uncork()),
        J || (!ne.errored && !ne.ending ? (ne.ending = !0,
        ae(this, ne, !0),
        ne.ended = !0) : ne.finished ? J = new U("end") : ne.destroyed && (J = new A("end"))),
        typeof B == "function" && (J || ne.finished ? n.nextTick(B, J) : ne[Y].push(B)),
        this
    }
    ;
    function C(P) {
        return P.ending && !P.destroyed && P.constructed && P.length === 0 && !P.errored && P.buffered.length === 0 && !P.finished && !P.writing && !P.errorEmitted && !P.closeEmitted
    }
    function I(P, D) {
        let B = !1;
        function ne(J) {
            if (B) {
                O(P, J ?? M());
                return
            }
            if (B = !0,
            D.pendingcb--,
            J) {
                let x = D[Y].splice(0);
                for (let K = 0; K < x.length; K++)
                    x[K](J);
                O(P, J, D.sync)
            } else
                C(D) && (D.prefinished = !0,
                P.emit("prefinish"),
                D.pendingcb++,
                n.nextTick(Z, P, D))
        }
        D.sync = !0,
        D.pendingcb++;
        try {
            P._final(ne)
        } catch (J) {
            ne(J)
        }
        D.sync = !1
    }
    function G(P, D) {
        !D.prefinished && !D.finalCalled && (typeof P._final == "function" && !D.destroyed ? (D.finalCalled = !0,
        I(P, D)) : (D.prefinished = !0,
        P.emit("prefinish")))
    }
    function ae(P, D, B) {
        C(D) && (G(P, D),
        D.pendingcb === 0 && (B ? (D.pendingcb++,
        n.nextTick( (ne, J) => {
            C(J) ? Z(ne, J) : J.pendingcb--
        }
        , P, D)) : C(D) && (D.pendingcb++,
        Z(P, D))))
    }
    function Z(P, D) {
        D.pendingcb--,
        D.finished = !0;
        let B = D[Y].splice(0);
        for (let ne = 0; ne < B.length; ne++)
            B[ne]();
        if (P.emit("finish"),
        D.autoDestroy) {
            let ne = P._readableState;
            (!ne || ne.autoDestroy && (ne.endEmitted || ne.readable === !1)) && P.destroy()
        }
    }
    a(re.prototype, {
        closed: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.closed : !1
            }
        },
        destroyed: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.destroyed : !1
            },
            set(P) {
                this._writableState && (this._writableState.destroyed = P)
            }
        },
        writable: {
            __proto__: null,
            get() {
                let P = this._writableState;
                return !!P && P.writable !== !1 && !P.destroyed && !P.errored && !P.ending && !P.ended
            },
            set(P) {
                this._writableState && (this._writableState.writable = !!P)
            }
        },
        writableFinished: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.finished : !1
            }
        },
        writableObjectMode: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.objectMode : !1
            }
        },
        writableBuffer: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.getBuffer()
            }
        },
        writableEnded: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.ending : !1
            }
        },
        writableNeedDrain: {
            __proto__: null,
            get() {
                let P = this._writableState;
                return P ? !P.destroyed && !P.ending && P.needDrain : !1
            }
        },
        writableHighWaterMark: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.highWaterMark
            }
        },
        writableCorked: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.corked : 0
            }
        },
        writableLength: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.length
            }
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._writableState ? this._writableState.errored : null
            }
        },
        writableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished)
            }
        }
    });
    var z = g.destroy;
    re.prototype.destroy = function(P, D) {
        let B = this._writableState;
        return !B.destroyed && (B.bufferedIndex < B.buffered.length || B[Y].length) && n.nextTick(ye, B),
        z.call(this, P, D),
        this
    }
    ,
    re.prototype._undestroy = g.undestroy,
    re.prototype._destroy = function(P, D) {
        D(P)
    }
    ,
    re.prototype[m.captureRejectionSymbol] = function(P) {
        this.destroy(P)
    }
    ;
    var L;
    function ce() {
        return L === void 0 && (L = {}),
        L
    }
    re.fromWeb = function(P, D) {
        return ce().newStreamWritableFromWritableStream(P, D)
    }
    ,
    re.toWeb = function(P) {
        return ce().newWritableStreamFromStreamWritable(P)
    }
}
), Ou = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Qt()
      , i = (Ge(),
    Pe(Ve))
      , {isReadable: s, isWritable: r, isIterable: o, isNodeStream: a, isReadableNodeStream: l, isWritableNodeStream: c, isDuplexNodeStream: u} = Et()
      , d = Ut()
      , {AbortError: m, codes: {ERR_INVALID_ARG_TYPE: y, ERR_INVALID_RETURN_VALUE: _}} = ze()
      , {destroyer: g} = an()
      , b = wt()
      , k = sr()
      , {createDeferredPromise: w} = kt()
      , T = Wa()
      , R = globalThis.Blob || i.Blob
      , M = typeof R < "u" ? function(Q) {
        return Q instanceof R
    }
    : function(Q) {
        return !1
    }
      , E = globalThis.AbortController || Oo().AbortController
      , {FunctionPrototypeCall: A} = qe()
      , U = class extends b {
        constructor(Q) {
            super(Q),
            Q?.readable === !1 && (this._readableState.readable = !1,
            this._readableState.ended = !0,
            this._readableState.endEmitted = !0),
            Q?.writable === !1 && (this._writableState.writable = !1,
            this._writableState.ending = !0,
            this._writableState.ended = !0,
            this._writableState.finished = !0)
        }
    }
    ;
    t.exports = function Q(O, j) {
        if (u(O))
            return O;
        if (l(O))
            return $({
                readable: O
            });
        if (c(O))
            return $({
                writable: O
            });
        if (a(O))
            return $({
                writable: !1,
                readable: !1
            });
        if (typeof O == "function") {
            let {value: V, write: le, final: re, destroy: q} = W(O);
            if (o(V))
                return T(U, V, {
                    objectMode: !0,
                    write: le,
                    final: re,
                    destroy: q
                });
            let pe = V?.then;
            if (typeof pe == "function") {
                let te, ge = A(pe, V, S => {
                    if (S != null)
                        throw new _("nully","body",S)
                }
                , S => {
                    g(te, S)
                }
                );
                return te = new U({
                    objectMode: !0,
                    readable: !1,
                    write: le,
                    final(S) {
                        re(async () => {
                            try {
                                await ge,
                                n.nextTick(S, null)
                            } catch (H) {
                                n.nextTick(S, H)
                            }
                        }
                        )
                    },
                    destroy: q
                })
            }
            throw new _("Iterable, AsyncIterable or AsyncFunction",j,V)
        }
        if (M(O))
            return Q(O.arrayBuffer());
        if (o(O))
            return T(U, O, {
                objectMode: !0,
                writable: !1
            });
        if (typeof O?.writable == "object" || typeof O?.readable == "object") {
            let V = O != null && O.readable ? l(O?.readable) ? O?.readable : Q(O.readable) : void 0
              , le = O != null && O.writable ? c(O?.writable) ? O?.writable : Q(O.writable) : void 0;
            return $({
                readable: V,
                writable: le
            })
        }
        let Y = O?.then;
        if (typeof Y == "function") {
            let V;
            return A(Y, O, le => {
                le != null && V.push(le),
                V.push(null)
            }
            , le => {
                g(V, le)
            }
            ),
            V = new U({
                objectMode: !0,
                writable: !1,
                read() {}
            })
        }
        throw new y(j,["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"],O)
    }
    ;
    function W(Q) {
        let {promise: O, resolve: j} = w()
          , Y = new E
          , V = Y.signal;
        return {
            value: Q(async function*() {
                for (; ; ) {
                    let le = O;
                    O = null;
                    let {chunk: re, done: q, cb: pe} = await le;
                    if (n.nextTick(pe),
                    q)
                        return;
                    if (V.aborted)
                        throw new m(void 0,{
                            cause: V.reason
                        });
                    ({promise: O, resolve: j} = w()),
                    yield re
                }
            }(), {
                signal: V
            }),
            write(le, re, q) {
                let pe = j;
                j = null,
                pe({
                    chunk: le,
                    done: !1,
                    cb: q
                })
            },
            final(le) {
                let re = j;
                j = null,
                re({
                    done: !0,
                    cb: le
                })
            },
            destroy(le, re) {
                Y.abort(),
                re(le)
            }
        }
    }
    function $(Q) {
        let O = Q.readable && typeof Q.readable.read != "function" ? k.wrap(Q.readable) : Q.readable, j = Q.writable, Y = !!s(O), V = !!r(j), le, re, q, pe, te;
        function ge(S) {
            let H = pe;
            pe = null,
            H ? H(S) : S && te.destroy(S)
        }
        return te = new U({
            readableObjectMode: !!(O != null && O.readableObjectMode),
            writableObjectMode: !!(j != null && j.writableObjectMode),
            readable: Y,
            writable: V
        }),
        V && (d(j, S => {
            V = !1,
            S && g(O, S),
            ge(S)
        }
        ),
        te._write = function(S, H, me) {
            j.write(S, H) ? me() : le = me
        }
        ,
        te._final = function(S) {
            j.end(),
            re = S
        }
        ,
        j.on("drain", function() {
            if (le) {
                let S = le;
                le = null,
                S()
            }
        }),
        j.on("finish", function() {
            if (re) {
                let S = re;
                re = null,
                S()
            }
        })),
        Y && (d(O, S => {
            Y = !1,
            S && g(O, S),
            ge(S)
        }
        ),
        O.on("readable", function() {
            if (q) {
                let S = q;
                q = null,
                S()
            }
        }),
        O.on("end", function() {
            te.push(null)
        }),
        te._read = function() {
            for (; ; ) {
                let S = O.read();
                if (S === null) {
                    q = te._read;
                    return
                }
                if (!te.push(S))
                    return
            }
        }
        ),
        te._destroy = function(S, H) {
            !S && pe !== null && (S = new m),
            q = null,
            le = null,
            re = null,
            pe === null ? H(S) : (pe = H,
            g(j, S),
            g(O, S))
        }
        ,
        te
    }
}
), wt = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ObjectDefineProperties: n, ObjectGetOwnPropertyDescriptor: i, ObjectKeys: s, ObjectSetPrototypeOf: r} = qe();
    t.exports = l;
    var o = sr()
      , a = Va();
    r(l.prototype, o.prototype),
    r(l, o);
    {
        let m = s(a.prototype);
        for (let y = 0; y < m.length; y++) {
            let _ = m[y];
            l.prototype[_] || (l.prototype[_] = a.prototype[_])
        }
    }
    function l(m) {
        if (!(this instanceof l))
            return new l(m);
        o.call(this, m),
        a.call(this, m),
        m ? (this.allowHalfOpen = m.allowHalfOpen !== !1,
        m.readable === !1 && (this._readableState.readable = !1,
        this._readableState.ended = !0,
        this._readableState.endEmitted = !0),
        m.writable === !1 && (this._writableState.writable = !1,
        this._writableState.ending = !0,
        this._writableState.ended = !0,
        this._writableState.finished = !0)) : this.allowHalfOpen = !0
    }
    n(l.prototype, {
        writable: {
            __proto__: null,
            ...i(a.prototype, "writable")
        },
        writableHighWaterMark: {
            __proto__: null,
            ...i(a.prototype, "writableHighWaterMark")
        },
        writableObjectMode: {
            __proto__: null,
            ...i(a.prototype, "writableObjectMode")
        },
        writableBuffer: {
            __proto__: null,
            ...i(a.prototype, "writableBuffer")
        },
        writableLength: {
            __proto__: null,
            ...i(a.prototype, "writableLength")
        },
        writableFinished: {
            __proto__: null,
            ...i(a.prototype, "writableFinished")
        },
        writableCorked: {
            __proto__: null,
            ...i(a.prototype, "writableCorked")
        },
        writableEnded: {
            __proto__: null,
            ...i(a.prototype, "writableEnded")
        },
        writableNeedDrain: {
            __proto__: null,
            ...i(a.prototype, "writableNeedDrain")
        },
        destroyed: {
            __proto__: null,
            get() {
                return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
            },
            set(m) {
                this._readableState && this._writableState && (this._readableState.destroyed = m,
                this._writableState.destroyed = m)
            }
        }
    });
    var c;
    function u() {
        return c === void 0 && (c = {}),
        c
    }
    l.fromWeb = function(m, y) {
        return u().newStreamDuplexFromReadableWritablePair(m, y)
    }
    ,
    l.toWeb = function(m) {
        return u().newReadableWritablePairFromDuplex(m)
    }
    ;
    var d;
    l.from = function(m) {
        return d || (d = Ou()),
        d(m, "body")
    }
}
), Ga = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ObjectSetPrototypeOf: n, Symbol: i} = qe();
    t.exports = l;
    var {ERR_METHOD_NOT_IMPLEMENTED: s} = ze().codes
      , r = wt()
      , {getHighWaterMark: o} = No();
    n(l.prototype, r.prototype),
    n(l, r);
    var a = i("kCallback");
    function l(d) {
        if (!(this instanceof l))
            return new l(d);
        let m = d ? o(this, d, "readableHighWaterMark", !0) : null;
        m === 0 && (d = {
            ...d,
            highWaterMark: null,
            readableHighWaterMark: m,
            writableHighWaterMark: d.writableHighWaterMark || 0
        }),
        r.call(this, d),
        this._readableState.sync = !1,
        this[a] = null,
        d && (typeof d.transform == "function" && (this._transform = d.transform),
        typeof d.flush == "function" && (this._flush = d.flush)),
        this.on("prefinish", u)
    }
    function c(d) {
        typeof this._flush == "function" && !this.destroyed ? this._flush( (m, y) => {
            if (m) {
                d ? d(m) : this.destroy(m);
                return
            }
            y != null && this.push(y),
            this.push(null),
            d && d()
        }
        ) : (this.push(null),
        d && d())
    }
    function u() {
        this._final !== c && c.call(this)
    }
    l.prototype._final = c,
    l.prototype._transform = function(d, m, y) {
        throw new s("_transform()")
    }
    ,
    l.prototype._write = function(d, m, y) {
        let _ = this._readableState
          , g = this._writableState
          , b = _.length;
        this._transform(d, m, (k, w) => {
            if (k) {
                y(k);
                return
            }
            w != null && this.push(w),
            g.ended || b === _.length || _.length < _.highWaterMark ? y() : this[a] = y
        }
        )
    }
    ,
    l.prototype._read = function() {
        if (this[a]) {
            let d = this[a];
            this[a] = null,
            d()
        }
    }
}
), Ha = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ObjectSetPrototypeOf: n} = qe();
    t.exports = s;
    var i = Ga();
    n(s.prototype, i.prototype),
    n(s, i);
    function s(r) {
        if (!(this instanceof s))
            return new s(r);
        i.call(this, r)
    }
    s.prototype._transform = function(r, o, a) {
        a(null, r)
    }
}
), Mo = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Qt(), {ArrayIsArray: i, Promise: s, SymbolAsyncIterator: r} = qe(), o = Ut(), {once: a} = kt(), l = an(), c = wt(), {aggregateTwoErrors: u, codes: {ERR_INVALID_ARG_TYPE: d, ERR_INVALID_RETURN_VALUE: m, ERR_MISSING_ARGS: y, ERR_STREAM_DESTROYED: _, ERR_STREAM_PREMATURE_CLOSE: g}, AbortError: b} = ze(), {validateFunction: k, validateAbortSignal: w} = rr(), {isIterable: T, isReadable: R, isReadableNodeStream: M, isNodeStream: E, isTransformStream: A, isWebStream: U, isReadableStream: W, isReadableEnded: $} = Et(), Q = globalThis.AbortController || Oo().AbortController, O, j;
    function Y(H, me, ye) {
        let de = !1;
        H.on("close", () => {
            de = !0
        }
        );
        let C = o(H, {
            readable: me,
            writable: ye
        }, I => {
            de = !I
        }
        );
        return {
            destroy: I => {
                de || (de = !0,
                l.destroyer(H, I || new _("pipe")))
            }
            ,
            cleanup: C
        }
    }
    function V(H) {
        return k(H[H.length - 1], "streams[stream.length - 1]"),
        H.pop()
    }
    function le(H) {
        if (T(H))
            return H;
        if (M(H))
            return re(H);
        throw new d("val",["Readable", "Iterable", "AsyncIterable"],H)
    }
    async function *re(H) {
        j || (j = sr()),
        yield*j.prototype[r].call(H)
    }
    async function q(H, me, ye, {end: de}) {
        let C, I = null, G = z => {
            if (z && (C = z),
            I) {
                let L = I;
                I = null,
                L()
            }
        }
        , ae = () => new s( (z, L) => {
            C ? L(C) : I = () => {
                C ? L(C) : z()
            }
        }
        );
        me.on("drain", G);
        let Z = o(me, {
            readable: !1
        }, G);
        try {
            me.writableNeedDrain && await ae();
            for await(let z of H)
                me.write(z) || await ae();
            de && me.end(),
            await ae(),
            ye()
        } catch (z) {
            ye(C !== z ? u(C, z) : z)
        } finally {
            Z(),
            me.off("drain", G)
        }
    }
    async function pe(H, me, ye, {end: de}) {
        A(me) && (me = me.writable);
        let C = me.getWriter();
        try {
            for await(let I of H)
                await C.ready,
                C.write(I).catch( () => {}
                );
            await C.ready,
            de && await C.close(),
            ye()
        } catch (I) {
            try {
                await C.abort(I),
                ye(I)
            } catch (G) {
                ye(G)
            }
        }
    }
    function te(...H) {
        return ge(H, a(V(H)))
    }
    function ge(H, me, ye) {
        if (H.length === 1 && i(H[0]) && (H = H[0]),
        H.length < 2)
            throw new y("streams");
        let de = new Q
          , C = de.signal
          , I = ye?.signal
          , G = [];
        w(I, "options.signal");
        function ae() {
            D(new b)
        }
        I?.addEventListener("abort", ae);
        let Z, z, L = [], ce = 0;
        function P(K) {
            D(K, --ce === 0)
        }
        function D(K, X) {
            if (K && (!Z || Z.code === "ERR_STREAM_PREMATURE_CLOSE") && (Z = K),
            !(!Z && !X)) {
                for (; L.length; )
                    L.shift()(Z);
                I?.removeEventListener("abort", ae),
                de.abort(),
                X && (Z || G.forEach(_e => _e()),
                n.nextTick(me, Z, z))
            }
        }
        let B;
        for (let K = 0; K < H.length; K++) {
            let X = H[K]
              , _e = K < H.length - 1
              , be = K > 0
              , ke = _e || ye?.end !== !1
              , f = K === H.length - 1;
            if (E(X)) {
                let h = function(p) {
                    p && p.name !== "AbortError" && p.code !== "ERR_STREAM_PREMATURE_CLOSE" && P(p)
                };
                var ne = h;
                if (ke) {
                    let {destroy: p, cleanup: v} = Y(X, _e, be);
                    L.push(p),
                    R(X) && f && G.push(v)
                }
                X.on("error", h),
                R(X) && f && G.push( () => {
                    X.removeListener("error", h)
                }
                )
            }
            if (K === 0)
                if (typeof X == "function") {
                    if (B = X({
                        signal: C
                    }),
                    !T(B))
                        throw new m("Iterable, AsyncIterable or Stream","source",B)
                } else
                    T(X) || M(X) || A(X) ? B = X : B = c.from(X);
            else if (typeof X == "function") {
                if (A(B)) {
                    var J;
                    B = le((J = B) === null || J === void 0 ? void 0 : J.readable)
                } else
                    B = le(B);
                if (B = X(B, {
                    signal: C
                }),
                _e) {
                    if (!T(B, !0))
                        throw new m("AsyncIterable",`transform[${K - 1}]`,B)
                } else {
                    var x;
                    O || (O = Ha());
                    let h = new O({
                        objectMode: !0
                    })
                      , p = (x = B) === null || x === void 0 ? void 0 : x.then;
                    if (typeof p == "function")
                        ce++,
                        p.call(B, F => {
                            z = F,
                            F != null && h.write(F),
                            ke && h.end(),
                            n.nextTick(P)
                        }
                        , F => {
                            h.destroy(F),
                            n.nextTick(P, F)
                        }
                        );
                    else if (T(B, !0))
                        ce++,
                        q(B, h, P, {
                            end: ke
                        });
                    else if (W(B) || A(B)) {
                        let F = B.readable || B;
                        ce++,
                        q(F, h, P, {
                            end: ke
                        })
                    } else
                        throw new m("AsyncIterable or Promise","destination",B);
                    B = h;
                    let {destroy: v, cleanup: N} = Y(B, !1, !0);
                    L.push(v),
                    f && G.push(N)
                }
            } else if (E(X)) {
                if (M(B)) {
                    ce += 2;
                    let h = S(B, X, P, {
                        end: ke
                    });
                    R(X) && f && G.push(h)
                } else if (A(B) || W(B)) {
                    let h = B.readable || B;
                    ce++,
                    q(h, X, P, {
                        end: ke
                    })
                } else if (T(B))
                    ce++,
                    q(B, X, P, {
                        end: ke
                    });
                else
                    throw new d("val",["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],B);
                B = X
            } else if (U(X)) {
                if (M(B))
                    ce++,
                    pe(le(B), X, P, {
                        end: ke
                    });
                else if (W(B) || T(B))
                    ce++,
                    pe(B, X, P, {
                        end: ke
                    });
                else if (A(B))
                    ce++,
                    pe(B.readable, X, P, {
                        end: ke
                    });
                else
                    throw new d("val",["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],B);
                B = X
            } else
                B = c.from(X)
        }
        return (C != null && C.aborted || I != null && I.aborted) && n.nextTick(ae),
        B
    }
    function S(H, me, ye, {end: de}) {
        let C = !1;
        if (me.on("close", () => {
            C || ye(new g)
        }
        ),
        H.pipe(me, {
            end: !1
        }),
        de) {
            let G = function() {
                C = !0,
                me.end()
            };
            var I = G;
            $(H) ? n.nextTick(G) : H.once("end", G)
        } else
            ye();
        return o(H, {
            readable: !0,
            writable: !1
        }, G => {
            let ae = H._readableState;
            G && G.code === "ERR_STREAM_PREMATURE_CLOSE" && ae && ae.ended && !ae.errored && !ae.errorEmitted ? H.once("end", ye).once("error", ye) : ye(G)
        }
        ),
        o(me, {
            readable: !1,
            writable: !0
        }, ye)
    }
    t.exports = {
        pipelineImpl: ge,
        pipeline: te
    }
}
), $a = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {pipeline: n} = Mo()
      , i = wt()
      , {destroyer: s} = an()
      , {isNodeStream: r, isReadable: o, isWritable: a, isWebStream: l, isTransformStream: c, isWritableStream: u, isReadableStream: d} = Et()
      , {AbortError: m, codes: {ERR_INVALID_ARG_VALUE: y, ERR_MISSING_ARGS: _}} = ze()
      , g = Ut();
    t.exports = function(...b) {
        if (b.length === 0)
            throw new _("streams");
        if (b.length === 1)
            return i.from(b[0]);
        let k = [...b];
        if (typeof b[0] == "function" && (b[0] = i.from(b[0])),
        typeof b[b.length - 1] == "function") {
            let O = b.length - 1;
            b[O] = i.from(b[O])
        }
        for (let O = 0; O < b.length; ++O)
            if (!(!r(b[O]) && !l(b[O]))) {
                if (O < b.length - 1 && !(o(b[O]) || d(b[O]) || c(b[O])))
                    throw new y(`streams[${O}]`,k[O],"must be readable");
                if (O > 0 && !(a(b[O]) || u(b[O]) || c(b[O])))
                    throw new y(`streams[${O}]`,k[O],"must be writable")
            }
        let w, T, R, M, E;
        function A(O) {
            let j = M;
            M = null,
            j ? j(O) : O ? E.destroy(O) : !Q && !$ && E.destroy()
        }
        let U = b[0]
          , W = n(b, A)
          , $ = !!(a(U) || u(U) || c(U))
          , Q = !!(o(W) || d(W) || c(W));
        if (E = new i({
            writableObjectMode: !!(U != null && U.writableObjectMode),
            readableObjectMode: !!(W != null && W.writableObjectMode),
            writable: $,
            readable: Q
        }),
        $) {
            if (r(U))
                E._write = function(j, Y, V) {
                    U.write(j, Y) ? V() : w = V
                }
                ,
                E._final = function(j) {
                    U.end(),
                    T = j
                }
                ,
                U.on("drain", function() {
                    if (w) {
                        let j = w;
                        w = null,
                        j()
                    }
                });
            else if (l(U)) {
                let j = (c(U) ? U.writable : U).getWriter();
                E._write = async function(Y, V, le) {
                    try {
                        await j.ready,
                        j.write(Y).catch( () => {}
                        ),
                        le()
                    } catch (re) {
                        le(re)
                    }
                }
                ,
                E._final = async function(Y) {
                    try {
                        await j.ready,
                        j.close().catch( () => {}
                        ),
                        T = Y
                    } catch (V) {
                        Y(V)
                    }
                }
            }
            let O = c(W) ? W.readable : W;
            g(O, () => {
                if (T) {
                    let j = T;
                    T = null,
                    j()
                }
            }
            )
        }
        if (Q) {
            if (r(W))
                W.on("readable", function() {
                    if (R) {
                        let O = R;
                        R = null,
                        O()
                    }
                }),
                W.on("end", function() {
                    E.push(null)
                }),
                E._read = function() {
                    for (; ; ) {
                        let O = W.read();
                        if (O === null) {
                            R = E._read;
                            return
                        }
                        if (!E.push(O))
                            return
                    }
                }
                ;
            else if (l(W)) {
                let O = (c(W) ? W.readable : W).getReader();
                E._read = async function() {
                    for (; ; )
                        try {
                            let {value: j, done: Y} = await O.read();
                            if (!E.push(j))
                                return;
                            if (Y) {
                                E.push(null);
                                return
                            }
                        } catch {
                            return
                        }
                }
            }
        }
        return E._destroy = function(O, j) {
            !O && M !== null && (O = new m),
            R = null,
            w = null,
            T = null,
            M === null ? j(O) : (M = j,
            r(W) && s(W, O))
        }
        ,
        E
    }
}
), Pu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = globalThis.AbortController || Oo().AbortController
      , {codes: {ERR_INVALID_ARG_VALUE: i, ERR_INVALID_ARG_TYPE: s, ERR_MISSING_ARGS: r, ERR_OUT_OF_RANGE: o}, AbortError: a} = ze()
      , {validateAbortSignal: l, validateInteger: c, validateObject: u} = rr()
      , d = qe().Symbol("kWeak")
      , {finished: m} = Ut()
      , y = $a()
      , {addAbortSignalNoValidate: _} = ir()
      , {isWritable: g, isNodeStream: b} = Et()
      , {ArrayPrototypePush: k, MathFloor: w, Number: T, NumberIsNaN: R, Promise: M, PromiseReject: E, PromisePrototypeThen: A, Symbol: U} = qe()
      , W = U("kEmpty")
      , $ = U("kEof");
    function Q(de, C) {
        if (C != null && u(C, "options"),
        C?.signal != null && l(C.signal, "options.signal"),
        b(de) && !g(de))
            throw new i("stream",de,"must be writable");
        let I = y(this, de);
        return C != null && C.signal && _(C.signal, I),
        I
    }
    function O(de, C) {
        if (typeof de != "function")
            throw new s("fn",["Function", "AsyncFunction"],de);
        C != null && u(C, "options"),
        C?.signal != null && l(C.signal, "options.signal");
        let I = 1;
        return C?.concurrency != null && (I = w(C.concurrency)),
        c(I, "concurrency", 1),
        async function*() {
            var G, ae;
            let Z = new n
              , z = this
              , L = []
              , ce = Z.signal
              , P = {
                signal: ce
            }
              , D = () => Z.abort();
            C != null && (G = C.signal) !== null && G !== void 0 && G.aborted && D(),
            C == null || (ae = C.signal) === null || ae === void 0 || ae.addEventListener("abort", D);
            let B, ne, J = !1;
            function x() {
                J = !0
            }
            async function K() {
                try {
                    for await(let be of z) {
                        var X;
                        if (J)
                            return;
                        if (ce.aborted)
                            throw new a;
                        try {
                            be = de(be, P)
                        } catch (ke) {
                            be = E(ke)
                        }
                        be !== W && (typeof ((X = be) === null || X === void 0 ? void 0 : X.catch) == "function" && be.catch(x),
                        L.push(be),
                        B && (B(),
                        B = null),
                        !J && L.length && L.length >= I && await new M(ke => {
                            ne = ke
                        }
                        ))
                    }
                    L.push($)
                } catch (be) {
                    let ke = E(be);
                    A(ke, void 0, x),
                    L.push(ke)
                } finally {
                    var _e;
                    J = !0,
                    B && (B(),
                    B = null),
                    C == null || (_e = C.signal) === null || _e === void 0 || _e.removeEventListener("abort", D)
                }
            }
            K();
            try {
                for (; ; ) {
                    for (; L.length > 0; ) {
                        let X = await L[0];
                        if (X === $)
                            return;
                        if (ce.aborted)
                            throw new a;
                        X !== W && (yield X),
                        L.shift(),
                        ne && (ne(),
                        ne = null)
                    }
                    await new M(X => {
                        B = X
                    }
                    )
                }
            } finally {
                Z.abort(),
                J = !0,
                ne && (ne(),
                ne = null)
            }
        }
        .call(this)
    }
    function j(de=void 0) {
        return de != null && u(de, "options"),
        de?.signal != null && l(de.signal, "options.signal"),
        async function*() {
            let C = 0;
            for await(let G of this) {
                var I;
                if (de != null && (I = de.signal) !== null && I !== void 0 && I.aborted)
                    throw new a({
                        cause: de.signal.reason
                    });
                yield[C++, G]
            }
        }
        .call(this)
    }
    async function Y(de, C=void 0) {
        for await(let I of q.call(this, de, C))
            return !0;
        return !1
    }
    async function V(de, C=void 0) {
        if (typeof de != "function")
            throw new s("fn",["Function", "AsyncFunction"],de);
        return !await Y.call(this, async (...I) => !await de(...I), C)
    }
    async function le(de, C) {
        for await(let I of q.call(this, de, C))
            return I
    }
    async function re(de, C) {
        if (typeof de != "function")
            throw new s("fn",["Function", "AsyncFunction"],de);
        async function I(G, ae) {
            return await de(G, ae),
            W
        }
        for await(let G of O.call(this, I, C))
            ;
    }
    function q(de, C) {
        if (typeof de != "function")
            throw new s("fn",["Function", "AsyncFunction"],de);
        async function I(G, ae) {
            return await de(G, ae) ? G : W
        }
        return O.call(this, I, C)
    }
    var pe = class extends r {
        constructor() {
            super("reduce"),
            this.message = "Reduce of an empty stream requires an initial value"
        }
    }
    ;
    async function te(de, C, I) {
        var G;
        if (typeof de != "function")
            throw new s("reducer",["Function", "AsyncFunction"],de);
        I != null && u(I, "options"),
        I?.signal != null && l(I.signal, "options.signal");
        let ae = arguments.length > 1;
        if (I != null && (G = I.signal) !== null && G !== void 0 && G.aborted) {
            let P = new a(void 0,{
                cause: I.signal.reason
            });
            throw this.once("error", () => {}
            ),
            await m(this.destroy(P)),
            P
        }
        let Z = new n
          , z = Z.signal;
        if (I != null && I.signal) {
            let P = {
                once: !0,
                [d]: this
            };
            I.signal.addEventListener("abort", () => Z.abort(), P)
        }
        let L = !1;
        try {
            for await(let P of this) {
                var ce;
                if (L = !0,
                I != null && (ce = I.signal) !== null && ce !== void 0 && ce.aborted)
                    throw new a;
                ae ? C = await de(C, P, {
                    signal: z
                }) : (C = P,
                ae = !0)
            }
            if (!L && !ae)
                throw new pe
        } finally {
            Z.abort()
        }
        return C
    }
    async function ge(de) {
        de != null && u(de, "options"),
        de?.signal != null && l(de.signal, "options.signal");
        let C = [];
        for await(let G of this) {
            var I;
            if (de != null && (I = de.signal) !== null && I !== void 0 && I.aborted)
                throw new a(void 0,{
                    cause: de.signal.reason
                });
            k(C, G)
        }
        return C
    }
    function S(de, C) {
        let I = O.call(this, de, C);
        return async function*() {
            for await(let G of I)
                yield*G
        }
        .call(this)
    }
    function H(de) {
        if (de = T(de),
        R(de))
            return 0;
        if (de < 0)
            throw new o("number",">= 0",de);
        return de
    }
    function me(de, C=void 0) {
        return C != null && u(C, "options"),
        C?.signal != null && l(C.signal, "options.signal"),
        de = H(de),
        async function*() {
            var I;
            if (C != null && (I = C.signal) !== null && I !== void 0 && I.aborted)
                throw new a;
            for await(let ae of this) {
                var G;
                if (C != null && (G = C.signal) !== null && G !== void 0 && G.aborted)
                    throw new a;
                de-- <= 0 && (yield ae)
            }
        }
        .call(this)
    }
    function ye(de, C=void 0) {
        return C != null && u(C, "options"),
        C?.signal != null && l(C.signal, "options.signal"),
        de = H(de),
        async function*() {
            var I;
            if (C != null && (I = C.signal) !== null && I !== void 0 && I.aborted)
                throw new a;
            for await(let ae of this) {
                var G;
                if (C != null && (G = C.signal) !== null && G !== void 0 && G.aborted)
                    throw new a;
                if (de-- > 0)
                    yield ae;
                else
                    return
            }
        }
        .call(this)
    }
    t.exports.streamReturningOperators = {
        asIndexedPairs: j,
        drop: me,
        filter: q,
        flatMap: S,
        map: O,
        take: ye,
        compose: Q
    },
    t.exports.promiseReturningOperators = {
        every: V,
        forEach: re,
        reduce: te,
        toArray: ge,
        some: Y,
        find: le
    }
}
), Ka = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {ArrayPrototypePop: n, Promise: i} = qe()
      , {isIterable: s, isNodeStream: r, isWebStream: o} = Et()
      , {pipelineImpl: a} = Mo()
      , {finished: l} = Ut();
    za();
    function c(...u) {
        return new i( (d, m) => {
            let y, _, g = u[u.length - 1];
            if (g && typeof g == "object" && !r(g) && !s(g) && !o(g)) {
                let b = n(u);
                y = b.signal,
                _ = b.end
            }
            a(u, (b, k) => {
                b ? m(b) : d(k)
            }
            , {
                signal: y,
                end: _
            })
        }
        )
    }
    t.exports = {
        finished: l,
        pipeline: c
    }
}
), za = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var {Buffer: n} = (Ge(),
    Pe(Ve))
      , {ObjectDefineProperty: i, ObjectKeys: s, ReflectApply: r} = qe()
      , {promisify: {custom: o}} = kt()
      , {streamReturningOperators: a, promiseReturningOperators: l} = Pu()
      , {codes: {ERR_ILLEGAL_CONSTRUCTOR: c}} = ze()
      , u = $a()
      , {pipeline: d} = Mo()
      , {destroyer: m} = an()
      , y = Ut()
      , _ = Ka()
      , g = Et()
      , b = t.exports = Po().Stream;
    b.isDisturbed = g.isDisturbed,
    b.isErrored = g.isErrored,
    b.isReadable = g.isReadable,
    b.Readable = sr();
    for (let T of s(a)) {
        let R = function(...E) {
            if (new.target)
                throw c();
            return b.Readable.from(r(M, this, E))
        };
        k = R;
        let M = a[T];
        i(R, "name", {
            __proto__: null,
            value: M.name
        }),
        i(R, "length", {
            __proto__: null,
            value: M.length
        }),
        i(b.Readable.prototype, T, {
            __proto__: null,
            value: R,
            enumerable: !1,
            configurable: !0,
            writable: !0
        })
    }
    var k;
    for (let T of s(l)) {
        let R = function(...E) {
            if (new.target)
                throw c();
            return r(M, this, E)
        };
        k = R;
        let M = l[T];
        i(R, "name", {
            __proto__: null,
            value: M.name
        }),
        i(R, "length", {
            __proto__: null,
            value: M.length
        }),
        i(b.Readable.prototype, T, {
            __proto__: null,
            value: R,
            enumerable: !1,
            configurable: !0,
            writable: !0
        })
    }
    var k;
    b.Writable = Va(),
    b.Duplex = wt(),
    b.Transform = Ga(),
    b.PassThrough = Ha(),
    b.pipeline = d;
    var {addAbortSignal: w} = ir();
    b.addAbortSignal = w,
    b.finished = y,
    b.destroy = m,
    b.compose = u,
    i(b, "promises", {
        __proto__: null,
        configurable: !0,
        enumerable: !0,
        get() {
            return _
        }
    }),
    i(d, o, {
        __proto__: null,
        enumerable: !0,
        get() {
            return _.pipeline
        }
    }),
    i(y, o, {
        __proto__: null,
        enumerable: !0,
        get() {
            return _.finished
        }
    }),
    b.Stream = b,
    b._isUint8Array = function(T) {
        return T instanceof Uint8Array
    }
    ,
    b._uint8ArrayToBuffer = function(T) {
        return n.from(T.buffer, T.byteOffset, T.byteLength)
    }
}
), Zt = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = za()
      , i = Ka()
      , s = n.Readable.destroy;
    t.exports = n.Readable,
    t.exports._uint8ArrayToBuffer = n._uint8ArrayToBuffer,
    t.exports._isUint8Array = n._isUint8Array,
    t.exports.isDisturbed = n.isDisturbed,
    t.exports.isErrored = n.isErrored,
    t.exports.isReadable = n.isReadable,
    t.exports.Readable = n.Readable,
    t.exports.Writable = n.Writable,
    t.exports.Duplex = n.Duplex,
    t.exports.Transform = n.Transform,
    t.exports.PassThrough = n.PassThrough,
    t.exports.addAbortSignal = n.addAbortSignal,
    t.exports.finished = n.finished,
    t.exports.destroy = n.destroy,
    t.exports.destroy = s,
    t.exports.pipeline = n.pipeline,
    t.exports.compose = n.compose,
    Object.defineProperty(n, "promises", {
        configurable: !0,
        enumerable: !0,
        get() {
            return i
        }
    }),
    t.exports.Stream = n.Stream,
    t.exports.default = t.exports
}
), Nu = fe( (e, t) => {
    ie(),
    se(),
    oe(),
    typeof Object.create == "function" ? t.exports = function(n, i) {
        i && (n.super_ = i,
        n.prototype = Object.create(i.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
    : t.exports = function(n, i) {
        if (i) {
            n.super_ = i;
            var s = function() {};
            s.prototype = i.prototype,
            n.prototype = new s,
            n.prototype.constructor = n
        }
    }
}
), Cu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var {Buffer: n} = (Ge(),
    Pe(Ve))
      , i = Symbol.for("BufferList");
    function s(r) {
        if (!(this instanceof s))
            return new s(r);
        s._init.call(this, r)
    }
    s._init = function(r) {
        Object.defineProperty(this, i, {
            value: !0
        }),
        this._bufs = [],
        this.length = 0,
        r && this.append(r)
    }
    ,
    s.prototype._new = function(r) {
        return new s(r)
    }
    ,
    s.prototype._offset = function(r) {
        if (r === 0)
            return [0, 0];
        let o = 0;
        for (let a = 0; a < this._bufs.length; a++) {
            let l = o + this._bufs[a].length;
            if (r < l || a === this._bufs.length - 1)
                return [a, r - o];
            o = l
        }
    }
    ,
    s.prototype._reverseOffset = function(r) {
        let o = r[0]
          , a = r[1];
        for (let l = 0; l < o; l++)
            a += this._bufs[l].length;
        return a
    }
    ,
    s.prototype.get = function(r) {
        if (r > this.length || r < 0)
            return;
        let o = this._offset(r);
        return this._bufs[o[0]][o[1]]
    }
    ,
    s.prototype.slice = function(r, o) {
        return typeof r == "number" && r < 0 && (r += this.length),
        typeof o == "number" && o < 0 && (o += this.length),
        this.copy(null, 0, r, o)
    }
    ,
    s.prototype.copy = function(r, o, a, l) {
        if ((typeof a != "number" || a < 0) && (a = 0),
        (typeof l != "number" || l > this.length) && (l = this.length),
        a >= this.length || l <= 0)
            return r || n.alloc(0);
        let c = !!r
          , u = this._offset(a)
          , d = l - a
          , m = d
          , y = c && o || 0
          , _ = u[1];
        if (a === 0 && l === this.length) {
            if (!c)
                return this._bufs.length === 1 ? this._bufs[0] : n.concat(this._bufs, this.length);
            for (let g = 0; g < this._bufs.length; g++)
                this._bufs[g].copy(r, y),
                y += this._bufs[g].length;
            return r
        }
        if (m <= this._bufs[u[0]].length - _)
            return c ? this._bufs[u[0]].copy(r, o, _, _ + m) : this._bufs[u[0]].slice(_, _ + m);
        c || (r = n.allocUnsafe(d));
        for (let g = u[0]; g < this._bufs.length; g++) {
            let b = this._bufs[g].length - _;
            if (m > b)
                this._bufs[g].copy(r, y, _),
                y += b;
            else {
                this._bufs[g].copy(r, y, _, _ + m),
                y += b;
                break
            }
            m -= b,
            _ && (_ = 0)
        }
        return r.length > y ? r.slice(0, y) : r
    }
    ,
    s.prototype.shallowSlice = function(r, o) {
        if (r = r || 0,
        o = typeof o != "number" ? this.length : o,
        r < 0 && (r += this.length),
        o < 0 && (o += this.length),
        r === o)
            return this._new();
        let a = this._offset(r)
          , l = this._offset(o)
          , c = this._bufs.slice(a[0], l[0] + 1);
        return l[1] === 0 ? c.pop() : c[c.length - 1] = c[c.length - 1].slice(0, l[1]),
        a[1] !== 0 && (c[0] = c[0].slice(a[1])),
        this._new(c)
    }
    ,
    s.prototype.toString = function(r, o, a) {
        return this.slice(o, a).toString(r)
    }
    ,
    s.prototype.consume = function(r) {
        if (r = Math.trunc(r),
        Number.isNaN(r) || r <= 0)
            return this;
        for (; this._bufs.length; )
            if (r >= this._bufs[0].length)
                r -= this._bufs[0].length,
                this.length -= this._bufs[0].length,
                this._bufs.shift();
            else {
                this._bufs[0] = this._bufs[0].slice(r),
                this.length -= r;
                break
            }
        return this
    }
    ,
    s.prototype.duplicate = function() {
        let r = this._new();
        for (let o = 0; o < this._bufs.length; o++)
            r.append(this._bufs[o]);
        return r
    }
    ,
    s.prototype.append = function(r) {
        if (r == null)
            return this;
        if (r.buffer)
            this._appendBuffer(n.from(r.buffer, r.byteOffset, r.byteLength));
        else if (Array.isArray(r))
            for (let o = 0; o < r.length; o++)
                this.append(r[o]);
        else if (this._isBufferList(r))
            for (let o = 0; o < r._bufs.length; o++)
                this.append(r._bufs[o]);
        else
            typeof r == "number" && (r = r.toString()),
            this._appendBuffer(n.from(r));
        return this
    }
    ,
    s.prototype._appendBuffer = function(r) {
        this._bufs.push(r),
        this.length += r.length
    }
    ,
    s.prototype.indexOf = function(r, o, a) {
        if (a === void 0 && typeof o == "string" && (a = o,
        o = void 0),
        typeof r == "function" || Array.isArray(r))
            throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
        if (typeof r == "number" ? r = n.from([r]) : typeof r == "string" ? r = n.from(r, a) : this._isBufferList(r) ? r = r.slice() : Array.isArray(r.buffer) ? r = n.from(r.buffer, r.byteOffset, r.byteLength) : n.isBuffer(r) || (r = n.from(r)),
        o = Number(o || 0),
        isNaN(o) && (o = 0),
        o < 0 && (o = this.length + o),
        o < 0 && (o = 0),
        r.length === 0)
            return o > this.length ? this.length : o;
        let l = this._offset(o)
          , c = l[0]
          , u = l[1];
        for (; c < this._bufs.length; c++) {
            let d = this._bufs[c];
            for (; u < d.length; )
                if (d.length - u >= r.length) {
                    let m = d.indexOf(r, u);
                    if (m !== -1)
                        return this._reverseOffset([c, m]);
                    u = d.length - r.length + 1
                } else {
                    let m = this._reverseOffset([c, u]);
                    if (this._match(m, r))
                        return m;
                    u++
                }
            u = 0
        }
        return -1
    }
    ,
    s.prototype._match = function(r, o) {
        if (this.length - r < o.length)
            return !1;
        for (let a = 0; a < o.length; a++)
            if (this.get(r + a) !== o[a])
                return !1;
        return !0
    }
    ,
    function() {
        let r = {
            readDoubleBE: 8,
            readDoubleLE: 8,
            readFloatBE: 4,
            readFloatLE: 4,
            readBigInt64BE: 8,
            readBigInt64LE: 8,
            readBigUInt64BE: 8,
            readBigUInt64LE: 8,
            readInt32BE: 4,
            readInt32LE: 4,
            readUInt32BE: 4,
            readUInt32LE: 4,
            readInt16BE: 2,
            readInt16LE: 2,
            readUInt16BE: 2,
            readUInt16LE: 2,
            readInt8: 1,
            readUInt8: 1,
            readIntBE: null,
            readIntLE: null,
            readUIntBE: null,
            readUIntLE: null
        };
        for (let o in r)
            (function(a) {
                r[a] === null ? s.prototype[a] = function(l, c) {
                    return this.slice(l, l + c)[a](0, c)
                }
                : s.prototype[a] = function(l=0) {
                    return this.slice(l, l + r[a])[a](0)
                }
            }
            )(o)
    }(),
    s.prototype._isBufferList = function(r) {
        return r instanceof s || s.isBufferList(r)
    }
    ,
    s.isBufferList = function(r) {
        return r != null && r[i]
    }
    ,
    t.exports = s
}
), Uu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = Zt().Duplex
      , i = Nu()
      , s = Cu();
    function r(o) {
        if (!(this instanceof r))
            return new r(o);
        if (typeof o == "function") {
            this._callback = o;
            let a = function(l) {
                this._callback && (this._callback(l),
                this._callback = null)
            }
            .bind(this);
            this.on("pipe", function(l) {
                l.on("error", a)
            }),
            this.on("unpipe", function(l) {
                l.removeListener("error", a)
            }),
            o = null
        }
        s._init.call(this, o),
        n.call(this)
    }
    i(r, n),
    Object.assign(r.prototype, s.prototype),
    r.prototype._new = function(o) {
        return new r(o)
    }
    ,
    r.prototype._write = function(o, a, l) {
        this._appendBuffer(o),
        typeof l == "function" && l()
    }
    ,
    r.prototype._read = function(o) {
        if (!this.length)
            return this.push(null);
        o = Math.min(o, this.length),
        this.push(this.slice(0, o)),
        this.consume(o)
    }
    ,
    r.prototype.end = function(o) {
        n.prototype.end.call(this, o),
        this._callback && (this._callback(null, this.slice()),
        this._callback = null)
    }
    ,
    r.prototype._destroy = function(o, a) {
        this._bufs.length = 0,
        this.length = 0,
        a(o)
    }
    ,
    r.prototype._isBufferList = function(o) {
        return o instanceof r || o instanceof s || r.isBufferList(o)
    }
    ,
    r.isBufferList = s.isBufferList,
    t.exports = r,
    t.exports.BufferListStream = r,
    t.exports.BufferList = s
}
), Mu = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = class {
        constructor() {
            this.cmd = null,
            this.retain = !1,
            this.qos = 0,
            this.dup = !1,
            this.length = -1,
            this.topic = null,
            this.payload = null
        }
    }
    ;
    t.exports = n
}
), Ja = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = t.exports
      , {Buffer: i} = (Ge(),
    Pe(Ve));
    n.types = {
        0: "reserved",
        1: "connect",
        2: "connack",
        3: "publish",
        4: "puback",
        5: "pubrec",
        6: "pubrel",
        7: "pubcomp",
        8: "subscribe",
        9: "suback",
        10: "unsubscribe",
        11: "unsuback",
        12: "pingreq",
        13: "pingresp",
        14: "disconnect",
        15: "auth"
    },
    n.requiredHeaderFlags = {
        1: 0,
        2: 0,
        4: 0,
        5: 0,
        6: 2,
        7: 0,
        8: 2,
        9: 0,
        10: 2,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0
    },
    n.requiredHeaderFlagsErrors = {};
    for (let r in n.requiredHeaderFlags) {
        let o = n.requiredHeaderFlags[r];
        n.requiredHeaderFlagsErrors[r] = "Invalid header flag bits, must be 0x" + o.toString(16) + " for " + n.types[r] + " packet"
    }
    n.codes = {};
    for (let r in n.types) {
        let o = n.types[r];
        n.codes[o] = r
    }
    n.CMD_SHIFT = 4,
    n.CMD_MASK = 240,
    n.DUP_MASK = 8,
    n.QOS_MASK = 3,
    n.QOS_SHIFT = 1,
    n.RETAIN_MASK = 1,
    n.VARBYTEINT_MASK = 127,
    n.VARBYTEINT_FIN_MASK = 128,
    n.VARBYTEINT_MAX = 268435455,
    n.SESSIONPRESENT_MASK = 1,
    n.SESSIONPRESENT_HEADER = i.from([n.SESSIONPRESENT_MASK]),
    n.CONNACK_HEADER = i.from([n.codes.connack << n.CMD_SHIFT]),
    n.USERNAME_MASK = 128,
    n.PASSWORD_MASK = 64,
    n.WILL_RETAIN_MASK = 32,
    n.WILL_QOS_MASK = 24,
    n.WILL_QOS_SHIFT = 3,
    n.WILL_FLAG_MASK = 4,
    n.CLEAN_SESSION_MASK = 2,
    n.CONNECT_HEADER = i.from([n.codes.connect << n.CMD_SHIFT]),
    n.properties = {
        sessionExpiryInterval: 17,
        willDelayInterval: 24,
        receiveMaximum: 33,
        maximumPacketSize: 39,
        topicAliasMaximum: 34,
        requestResponseInformation: 25,
        requestProblemInformation: 23,
        userProperties: 38,
        authenticationMethod: 21,
        authenticationData: 22,
        payloadFormatIndicator: 1,
        messageExpiryInterval: 2,
        contentType: 3,
        responseTopic: 8,
        correlationData: 9,
        maximumQoS: 36,
        retainAvailable: 37,
        assignedClientIdentifier: 18,
        reasonString: 31,
        wildcardSubscriptionAvailable: 40,
        subscriptionIdentifiersAvailable: 41,
        sharedSubscriptionAvailable: 42,
        serverKeepAlive: 19,
        responseInformation: 26,
        serverReference: 28,
        topicAlias: 35,
        subscriptionIdentifier: 11
    },
    n.propertiesCodes = {};
    for (let r in n.properties) {
        let o = n.properties[r];
        n.propertiesCodes[o] = r
    }
    n.propertiesTypes = {
        sessionExpiryInterval: "int32",
        willDelayInterval: "int32",
        receiveMaximum: "int16",
        maximumPacketSize: "int32",
        topicAliasMaximum: "int16",
        requestResponseInformation: "byte",
        requestProblemInformation: "byte",
        userProperties: "pair",
        authenticationMethod: "string",
        authenticationData: "binary",
        payloadFormatIndicator: "byte",
        messageExpiryInterval: "int32",
        contentType: "string",
        responseTopic: "string",
        correlationData: "binary",
        maximumQoS: "int8",
        retainAvailable: "byte",
        assignedClientIdentifier: "string",
        reasonString: "string",
        wildcardSubscriptionAvailable: "byte",
        subscriptionIdentifiersAvailable: "byte",
        sharedSubscriptionAvailable: "byte",
        serverKeepAlive: "int16",
        responseInformation: "string",
        serverReference: "string",
        topicAlias: "int16",
        subscriptionIdentifier: "var"
    };
    function s(r) {
        return [0, 1, 2].map(o => [0, 1].map(a => [0, 1].map(l => {
            let c = i.alloc(1);
            return c.writeUInt8(n.codes[r] << n.CMD_SHIFT | (a ? n.DUP_MASK : 0) | o << n.QOS_SHIFT | l, 0, !0),
            c
        }
        )))
    }
    n.PUBLISH_HEADER = s("publish"),
    n.SUBSCRIBE_HEADER = s("subscribe"),
    n.SUBSCRIBE_OPTIONS_QOS_MASK = 3,
    n.SUBSCRIBE_OPTIONS_NL_MASK = 1,
    n.SUBSCRIBE_OPTIONS_NL_SHIFT = 2,
    n.SUBSCRIBE_OPTIONS_RAP_MASK = 1,
    n.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3,
    n.SUBSCRIBE_OPTIONS_RH_MASK = 3,
    n.SUBSCRIBE_OPTIONS_RH_SHIFT = 4,
    n.SUBSCRIBE_OPTIONS_RH = [0, 16, 32],
    n.SUBSCRIBE_OPTIONS_NL = 4,
    n.SUBSCRIBE_OPTIONS_RAP = 8,
    n.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2],
    n.UNSUBSCRIBE_HEADER = s("unsubscribe"),
    n.ACKS = {
        unsuback: s("unsuback"),
        puback: s("puback"),
        pubcomp: s("pubcomp"),
        pubrel: s("pubrel"),
        pubrec: s("pubrec")
    },
    n.SUBACK_HEADER = i.from([n.codes.suback << n.CMD_SHIFT]),
    n.VERSION3 = i.from([3]),
    n.VERSION4 = i.from([4]),
    n.VERSION5 = i.from([5]),
    n.VERSION131 = i.from([131]),
    n.VERSION132 = i.from([132]),
    n.QOS = [0, 1, 2].map(r => i.from([r])),
    n.EMPTY = {
        pingreq: i.from([n.codes.pingreq << 4, 0]),
        pingresp: i.from([n.codes.pingresp << 4, 0]),
        disconnect: i.from([n.codes.disconnect << 4, 0])
    },
    n.MQTT5_PUBACK_PUBREC_CODES = {
        0: "Success",
        16: "No matching subscribers",
        128: "Unspecified error",
        131: "Implementation specific error",
        135: "Not authorized",
        144: "Topic Name invalid",
        145: "Packet identifier in use",
        151: "Quota exceeded",
        153: "Payload format invalid"
    },
    n.MQTT5_PUBREL_PUBCOMP_CODES = {
        0: "Success",
        146: "Packet Identifier not found"
    },
    n.MQTT5_SUBACK_CODES = {
        0: "Granted QoS 0",
        1: "Granted QoS 1",
        2: "Granted QoS 2",
        128: "Unspecified error",
        131: "Implementation specific error",
        135: "Not authorized",
        143: "Topic Filter invalid",
        145: "Packet Identifier in use",
        151: "Quota exceeded",
        158: "Shared Subscriptions not supported",
        161: "Subscription Identifiers not supported",
        162: "Wildcard Subscriptions not supported"
    },
    n.MQTT5_UNSUBACK_CODES = {
        0: "Success",
        17: "No subscription existed",
        128: "Unspecified error",
        131: "Implementation specific error",
        135: "Not authorized",
        143: "Topic Filter invalid",
        145: "Packet Identifier in use"
    },
    n.MQTT5_DISCONNECT_CODES = {
        0: "Normal disconnection",
        4: "Disconnect with Will Message",
        128: "Unspecified error",
        129: "Malformed Packet",
        130: "Protocol Error",
        131: "Implementation specific error",
        135: "Not authorized",
        137: "Server busy",
        139: "Server shutting down",
        141: "Keep Alive timeout",
        142: "Session taken over",
        143: "Topic Filter invalid",
        144: "Topic Name invalid",
        147: "Receive Maximum exceeded",
        148: "Topic Alias invalid",
        149: "Packet too large",
        150: "Message rate too high",
        151: "Quota exceeded",
        152: "Administrative action",
        153: "Payload format invalid",
        154: "Retain not supported",
        155: "QoS not supported",
        156: "Use another server",
        157: "Server moved",
        158: "Shared Subscriptions not supported",
        159: "Connection rate exceeded",
        160: "Maximum connect time",
        161: "Subscription Identifiers not supported",
        162: "Wildcard Subscriptions not supported"
    },
    n.MQTT5_AUTH_CODES = {
        0: "Success",
        24: "Continue authentication",
        25: "Re-authenticate"
    }
}
), xu = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = 1e3
      , i = n * 60
      , s = i * 60
      , r = s * 24
      , o = r * 7
      , a = r * 365.25;
    t.exports = function(m, y) {
        y = y || {};
        var _ = typeof m;
        if (_ === "string" && m.length > 0)
            return l(m);
        if (_ === "number" && isFinite(m))
            return y.long ? u(m) : c(m);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(m))
    }
    ;
    function l(m) {
        if (m = String(m),
        !(m.length > 100)) {
            var y = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(m);
            if (y) {
                var _ = parseFloat(y[1])
                  , g = (y[2] || "ms").toLowerCase();
                switch (g) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return _ * a;
                case "weeks":
                case "week":
                case "w":
                    return _ * o;
                case "days":
                case "day":
                case "d":
                    return _ * r;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return _ * s;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return _ * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return _ * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return _;
                default:
                    return
                }
            }
        }
    }
    function c(m) {
        var y = Math.abs(m);
        return y >= r ? Math.round(m / r) + "d" : y >= s ? Math.round(m / s) + "h" : y >= i ? Math.round(m / i) + "m" : y >= n ? Math.round(m / n) + "s" : m + "ms"
    }
    function u(m) {
        var y = Math.abs(m);
        return y >= r ? d(m, y, r, "day") : y >= s ? d(m, y, s, "hour") : y >= i ? d(m, y, i, "minute") : y >= n ? d(m, y, n, "second") : m + " ms"
    }
    function d(m, y, _, g) {
        var b = y >= _ * 1.5;
        return Math.round(m / _) + " " + g + (b ? "s" : "")
    }
}
), Du = fe( (e, t) => {
    ie(),
    se(),
    oe();
    function n(i) {
        r.debug = r,
        r.default = r,
        r.coerce = d,
        r.disable = l,
        r.enable = a,
        r.enabled = c,
        r.humanize = xu(),
        r.destroy = m,
        Object.keys(i).forEach(y => {
            r[y] = i[y]
        }
        ),
        r.names = [],
        r.skips = [],
        r.formatters = {};
        function s(y) {
            let _ = 0;
            for (let g = 0; g < y.length; g++)
                _ = (_ << 5) - _ + y.charCodeAt(g),
                _ |= 0;
            return r.colors[Math.abs(_) % r.colors.length]
        }
        r.selectColor = s;
        function r(y) {
            let _, g = null, b, k;
            function w(...T) {
                if (!w.enabled)
                    return;
                let R = w
                  , M = Number(new Date)
                  , E = M - (_ || M);
                R.diff = E,
                R.prev = _,
                R.curr = M,
                _ = M,
                T[0] = r.coerce(T[0]),
                typeof T[0] != "string" && T.unshift("%O");
                let A = 0;
                T[0] = T[0].replace(/%([a-zA-Z%])/g, (U, W) => {
                    if (U === "%%")
                        return "%";
                    A++;
                    let $ = r.formatters[W];
                    if (typeof $ == "function") {
                        let Q = T[A];
                        U = $.call(R, Q),
                        T.splice(A, 1),
                        A--
                    }
                    return U
                }
                ),
                r.formatArgs.call(R, T),
                (R.log || r.log).apply(R, T)
            }
            return w.namespace = y,
            w.useColors = r.useColors(),
            w.color = r.selectColor(y),
            w.extend = o,
            w.destroy = r.destroy,
            Object.defineProperty(w, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => g !== null ? g : (b !== r.namespaces && (b = r.namespaces,
                k = r.enabled(y)),
                k),
                set: T => {
                    g = T
                }
            }),
            typeof r.init == "function" && r.init(w),
            w
        }
        function o(y, _) {
            let g = r(this.namespace + (typeof _ > "u" ? ":" : _) + y);
            return g.log = this.log,
            g
        }
        function a(y) {
            r.save(y),
            r.namespaces = y,
            r.names = [],
            r.skips = [];
            let _, g = (typeof y == "string" ? y : "").split(/[\s,]+/), b = g.length;
            for (_ = 0; _ < b; _++)
                g[_] && (y = g[_].replace(/\*/g, ".*?"),
                y[0] === "-" ? r.skips.push(new RegExp("^" + y.slice(1) + "$")) : r.names.push(new RegExp("^" + y + "$")))
        }
        function l() {
            let y = [...r.names.map(u), ...r.skips.map(u).map(_ => "-" + _)].join(",");
            return r.enable(""),
            y
        }
        function c(y) {
            if (y[y.length - 1] === "*")
                return !0;
            let _, g;
            for (_ = 0,
            g = r.skips.length; _ < g; _++)
                if (r.skips[_].test(y))
                    return !1;
            for (_ = 0,
            g = r.names.length; _ < g; _++)
                if (r.names[_].test(y))
                    return !0;
            return !1
        }
        function u(y) {
            return y.toString().substring(2, y.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        function d(y) {
            return y instanceof Error ? y.stack || y.message : y
        }
        function m() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return r.enable(r.load()),
        r
    }
    t.exports = n
}
), vt = fe( (e, t) => {
    ie(),
    se(),
    oe(),
    e.formatArgs = i,
    e.save = s,
    e.load = r,
    e.useColors = n,
    e.storage = o(),
    e.destroy = ( () => {
        let l = !1;
        return () => {
            l || (l = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )(),
    e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    function i(l) {
        if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff),
        !this.useColors)
            return;
        let c = "color: " + this.color;
        l.splice(1, 0, c, "color: inherit");
        let u = 0
          , d = 0;
        l[0].replace(/%[a-zA-Z%]/g, m => {
            m !== "%%" && (u++,
            m === "%c" && (d = u))
        }
        ),
        l.splice(d, 0, c)
    }
    e.log = console.debug || console.log || ( () => {}
    );
    function s(l) {
        try {
            l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug")
        } catch {}
    }
    function r() {
        let l;
        try {
            l = e.storage.getItem("debug")
        } catch {}
        return !l && typeof ve < "u" && "env"in ve && (l = ve.env.DEBUG),
        l
    }
    function o() {
        try {
            return localStorage
        } catch {}
    }
    t.exports = Du()(e);
    var {formatters: a} = t.exports;
    a.j = function(l) {
        try {
            return JSON.stringify(l)
        } catch (c) {
            return "[UnexpectedJSONParseError]: " + c.message
        }
    }
}
), Lu = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Uu()
      , {EventEmitter: i} = (ln(),
    Pe(Xt))
      , s = Mu()
      , r = Ja()
      , o = vt()("mqtt-packet:parser")
      , a = class go extends i {
        constructor() {
            super(),
            this.parser = this.constructor.parser
        }
        static parser(c) {
            return this instanceof go ? (this.settings = c || {},
            this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"],
            this._resetState(),
            this) : new go().parser(c)
        }
        _resetState() {
            o("_resetState: resetting packet, error, _list, and _stateCounter"),
            this.packet = new s,
            this.error = null,
            this._list = n(),
            this._stateCounter = 0
        }
        parse(c) {
            for (this.error && this._resetState(),
            this._list.append(c),
            o("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; )
                this._stateCounter++,
                o("parse: state complete. _stateCounter is now: %d", this._stateCounter),
                o("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length),
                this._stateCounter >= this._states.length && (this._stateCounter = 0);
            return o("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length),
            this._list.length
        }
        _parseHeader() {
            let c = this._list.readUInt8(0)
              , u = c >> r.CMD_SHIFT;
            this.packet.cmd = r.types[u];
            let d = c & 15
              , m = r.requiredHeaderFlags[u];
            return m != null && d !== m ? this._emitError(new Error(r.requiredHeaderFlagsErrors[u])) : (this.packet.retain = (c & r.RETAIN_MASK) !== 0,
            this.packet.qos = c >> r.QOS_SHIFT & r.QOS_MASK,
            this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (c & r.DUP_MASK) !== 0,
            o("_parseHeader: packet: %o", this.packet),
            this._list.consume(1),
            !0))
        }
        _parseLength() {
            let c = this._parseVarByteNum(!0);
            return c && (this.packet.length = c.value,
            this._list.consume(c.bytes)),
            o("_parseLength %d", c.value),
            !!c
        }
        _parsePayload() {
            o("_parsePayload: payload %O", this._list);
            let c = !1;
            if (this.packet.length === 0 || this._list.length >= this.packet.length) {
                switch (this._pos = 0,
                this.packet.cmd) {
                case "connect":
                    this._parseConnect();
                    break;
                case "connack":
                    this._parseConnack();
                    break;
                case "publish":
                    this._parsePublish();
                    break;
                case "puback":
                case "pubrec":
                case "pubrel":
                case "pubcomp":
                    this._parseConfirmation();
                    break;
                case "subscribe":
                    this._parseSubscribe();
                    break;
                case "suback":
                    this._parseSuback();
                    break;
                case "unsubscribe":
                    this._parseUnsubscribe();
                    break;
                case "unsuback":
                    this._parseUnsuback();
                    break;
                case "pingreq":
                case "pingresp":
                    break;
                case "disconnect":
                    this._parseDisconnect();
                    break;
                case "auth":
                    this._parseAuth();
                    break;
                default:
                    this._emitError(new Error("Not supported"))
                }
                c = !0
            }
            return o("_parsePayload complete result: %s", c),
            c
        }
        _parseConnect() {
            o("_parseConnect");
            let c, u, d, m, y = {}, _ = this.packet, g = this._parseString();
            if (g === null)
                return this._emitError(new Error("Cannot parse protocolId"));
            if (g !== "MQTT" && g !== "MQIsdp")
                return this._emitError(new Error("Invalid protocolId"));
            if (_.protocolId = g,
            this._pos >= this._list.length)
                return this._emitError(new Error("Packet too short"));
            if (_.protocolVersion = this._list.readUInt8(this._pos),
            _.protocolVersion >= 128 && (_.bridgeMode = !0,
            _.protocolVersion = _.protocolVersion - 128),
            _.protocolVersion !== 3 && _.protocolVersion !== 4 && _.protocolVersion !== 5)
                return this._emitError(new Error("Invalid protocol version"));
            if (this._pos++,
            this._pos >= this._list.length)
                return this._emitError(new Error("Packet too short"));
            if (this._list.readUInt8(this._pos) & 1)
                return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
            y.username = this._list.readUInt8(this._pos) & r.USERNAME_MASK,
            y.password = this._list.readUInt8(this._pos) & r.PASSWORD_MASK,
            y.will = this._list.readUInt8(this._pos) & r.WILL_FLAG_MASK;
            let b = !!(this._list.readUInt8(this._pos) & r.WILL_RETAIN_MASK)
              , k = (this._list.readUInt8(this._pos) & r.WILL_QOS_MASK) >> r.WILL_QOS_SHIFT;
            if (y.will)
                _.will = {},
                _.will.retain = b,
                _.will.qos = k;
            else {
                if (b)
                    return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
                if (k)
                    return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))
            }
            if (_.clean = (this._list.readUInt8(this._pos) & r.CLEAN_SESSION_MASK) !== 0,
            this._pos++,
            _.keepalive = this._parseNum(),
            _.keepalive === -1)
                return this._emitError(new Error("Packet too short"));
            if (_.protocolVersion === 5) {
                let T = this._parseProperties();
                Object.getOwnPropertyNames(T).length && (_.properties = T)
            }
            let w = this._parseString();
            if (w === null)
                return this._emitError(new Error("Packet too short"));
            if (_.clientId = w,
            o("_parseConnect: packet.clientId: %s", _.clientId),
            y.will) {
                if (_.protocolVersion === 5) {
                    let T = this._parseProperties();
                    Object.getOwnPropertyNames(T).length && (_.will.properties = T)
                }
                if (c = this._parseString(),
                c === null)
                    return this._emitError(new Error("Cannot parse will topic"));
                if (_.will.topic = c,
                o("_parseConnect: packet.will.topic: %s", _.will.topic),
                u = this._parseBuffer(),
                u === null)
                    return this._emitError(new Error("Cannot parse will payload"));
                _.will.payload = u,
                o("_parseConnect: packet.will.paylaod: %s", _.will.payload)
            }
            if (y.username) {
                if (m = this._parseString(),
                m === null)
                    return this._emitError(new Error("Cannot parse username"));
                _.username = m,
                o("_parseConnect: packet.username: %s", _.username)
            }
            if (y.password) {
                if (d = this._parseBuffer(),
                d === null)
                    return this._emitError(new Error("Cannot parse password"));
                _.password = d
            }
            return this.settings = _,
            o("_parseConnect: complete"),
            _
        }
        _parseConnack() {
            o("_parseConnack");
            let c = this.packet;
            if (this._list.length < 1)
                return null;
            let u = this._list.readUInt8(this._pos++);
            if (u > 1)
                return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
            if (c.sessionPresent = !!(u & r.SESSIONPRESENT_MASK),
            this.settings.protocolVersion === 5)
                this._list.length >= 2 ? c.reasonCode = this._list.readUInt8(this._pos++) : c.reasonCode = 0;
            else {
                if (this._list.length < 2)
                    return null;
                c.returnCode = this._list.readUInt8(this._pos++)
            }
            if (c.returnCode === -1 || c.reasonCode === -1)
                return this._emitError(new Error("Cannot parse return code"));
            if (this.settings.protocolVersion === 5) {
                let d = this._parseProperties();
                Object.getOwnPropertyNames(d).length && (c.properties = d)
            }
            o("_parseConnack: complete")
        }
        _parsePublish() {
            o("_parsePublish");
            let c = this.packet;
            if (c.topic = this._parseString(),
            c.topic === null)
                return this._emitError(new Error("Cannot parse topic"));
            if (!(c.qos > 0 && !this._parseMessageId())) {
                if (this.settings.protocolVersion === 5) {
                    let u = this._parseProperties();
                    Object.getOwnPropertyNames(u).length && (c.properties = u)
                }
                c.payload = this._list.slice(this._pos, c.length),
                o("_parsePublish: payload from buffer list: %o", c.payload)
            }
        }
        _parseSubscribe() {
            o("_parseSubscribe");
            let c = this.packet, u, d, m, y, _, g, b;
            if (c.subscriptions = [],
            !!this._parseMessageId()) {
                if (this.settings.protocolVersion === 5) {
                    let k = this._parseProperties();
                    Object.getOwnPropertyNames(k).length && (c.properties = k)
                }
                if (c.length <= 0)
                    return this._emitError(new Error("Malformed subscribe, no payload specified"));
                for (; this._pos < c.length; ) {
                    if (u = this._parseString(),
                    u === null)
                        return this._emitError(new Error("Cannot parse topic"));
                    if (this._pos >= c.length)
                        return this._emitError(new Error("Malformed Subscribe Payload"));
                    if (d = this._parseByte(),
                    this.settings.protocolVersion === 5) {
                        if (d & 192)
                            return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))
                    } else if (d & 252)
                        return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
                    if (m = d & r.SUBSCRIBE_OPTIONS_QOS_MASK,
                    m > 2)
                        return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
                    if (g = (d >> r.SUBSCRIBE_OPTIONS_NL_SHIFT & r.SUBSCRIBE_OPTIONS_NL_MASK) !== 0,
                    _ = (d >> r.SUBSCRIBE_OPTIONS_RAP_SHIFT & r.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0,
                    y = d >> r.SUBSCRIBE_OPTIONS_RH_SHIFT & r.SUBSCRIBE_OPTIONS_RH_MASK,
                    y > 2)
                        return this._emitError(new Error("Invalid retain handling, must be <= 2"));
                    b = {
                        topic: u,
                        qos: m
                    },
                    this.settings.protocolVersion === 5 ? (b.nl = g,
                    b.rap = _,
                    b.rh = y) : this.settings.bridgeMode && (b.rh = 0,
                    b.rap = !0,
                    b.nl = !0),
                    o("_parseSubscribe: push subscription `%s` to subscription", b),
                    c.subscriptions.push(b)
                }
            }
        }
        _parseSuback() {
            o("_parseSuback");
            let c = this.packet;
            if (this.packet.granted = [],
            !!this._parseMessageId()) {
                if (this.settings.protocolVersion === 5) {
                    let u = this._parseProperties();
                    Object.getOwnPropertyNames(u).length && (c.properties = u)
                }
                if (c.length <= 0)
                    return this._emitError(new Error("Malformed suback, no payload specified"));
                for (; this._pos < this.packet.length; ) {
                    let u = this._list.readUInt8(this._pos++);
                    if (this.settings.protocolVersion === 5) {
                        if (!r.MQTT5_SUBACK_CODES[u])
                            return this._emitError(new Error("Invalid suback code"))
                    } else if (u > 2 && u !== 128)
                        return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
                    this.packet.granted.push(u)
                }
            }
        }
        _parseUnsubscribe() {
            o("_parseUnsubscribe");
            let c = this.packet;
            if (c.unsubscriptions = [],
            !!this._parseMessageId()) {
                if (this.settings.protocolVersion === 5) {
                    let u = this._parseProperties();
                    Object.getOwnPropertyNames(u).length && (c.properties = u)
                }
                if (c.length <= 0)
                    return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
                for (; this._pos < c.length; ) {
                    let u = this._parseString();
                    if (u === null)
                        return this._emitError(new Error("Cannot parse topic"));
                    o("_parseUnsubscribe: push topic `%s` to unsubscriptions", u),
                    c.unsubscriptions.push(u)
                }
            }
        }
        _parseUnsuback() {
            o("_parseUnsuback");
            let c = this.packet;
            if (!this._parseMessageId())
                return this._emitError(new Error("Cannot parse messageId"));
            if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && c.length !== 2)
                return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
            if (c.length <= 0)
                return this._emitError(new Error("Malformed unsuback, no payload specified"));
            if (this.settings.protocolVersion === 5) {
                let u = this._parseProperties();
                for (Object.getOwnPropertyNames(u).length && (c.properties = u),
                c.granted = []; this._pos < this.packet.length; ) {
                    let d = this._list.readUInt8(this._pos++);
                    if (!r.MQTT5_UNSUBACK_CODES[d])
                        return this._emitError(new Error("Invalid unsuback code"));
                    this.packet.granted.push(d)
                }
            }
        }
        _parseConfirmation() {
            o("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
            let c = this.packet;
            if (this._parseMessageId(),
            this.settings.protocolVersion === 5) {
                if (c.length > 2) {
                    switch (c.reasonCode = this._parseByte(),
                    this.packet.cmd) {
                    case "puback":
                    case "pubrec":
                        if (!r.MQTT5_PUBACK_PUBREC_CODES[c.reasonCode])
                            return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                        break;
                    case "pubrel":
                    case "pubcomp":
                        if (!r.MQTT5_PUBREL_PUBCOMP_CODES[c.reasonCode])
                            return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                        break
                    }
                    o("_parseConfirmation: packet.reasonCode `%d`", c.reasonCode)
                } else
                    c.reasonCode = 0;
                if (c.length > 3) {
                    let u = this._parseProperties();
                    Object.getOwnPropertyNames(u).length && (c.properties = u)
                }
            }
            return !0
        }
        _parseDisconnect() {
            let c = this.packet;
            if (o("_parseDisconnect"),
            this.settings.protocolVersion === 5) {
                this._list.length > 0 ? (c.reasonCode = this._parseByte(),
                r.MQTT5_DISCONNECT_CODES[c.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : c.reasonCode = 0;
                let u = this._parseProperties();
                Object.getOwnPropertyNames(u).length && (c.properties = u)
            }
            return o("_parseDisconnect result: true"),
            !0
        }
        _parseAuth() {
            o("_parseAuth");
            let c = this.packet;
            if (this.settings.protocolVersion !== 5)
                return this._emitError(new Error("Not supported auth packet for this version MQTT"));
            if (c.reasonCode = this._parseByte(),
            !r.MQTT5_AUTH_CODES[c.reasonCode])
                return this._emitError(new Error("Invalid auth reason code"));
            let u = this._parseProperties();
            return Object.getOwnPropertyNames(u).length && (c.properties = u),
            o("_parseAuth: result: true"),
            !0
        }
        _parseMessageId() {
            let c = this.packet;
            return c.messageId = this._parseNum(),
            c.messageId === null ? (this._emitError(new Error("Cannot parse messageId")),
            !1) : (o("_parseMessageId: packet.messageId %d", c.messageId),
            !0)
        }
        _parseString(c) {
            let u = this._parseNum()
              , d = u + this._pos;
            if (u === -1 || d > this._list.length || d > this.packet.length)
                return null;
            let m = this._list.toString("utf8", this._pos, d);
            return this._pos += u,
            o("_parseString: result: %s", m),
            m
        }
        _parseStringPair() {
            return o("_parseStringPair"),
            {
                name: this._parseString(),
                value: this._parseString()
            }
        }
        _parseBuffer() {
            let c = this._parseNum()
              , u = c + this._pos;
            if (c === -1 || u > this._list.length || u > this.packet.length)
                return null;
            let d = this._list.slice(this._pos, u);
            return this._pos += c,
            o("_parseBuffer: result: %o", d),
            d
        }
        _parseNum() {
            if (this._list.length - this._pos < 2)
                return -1;
            let c = this._list.readUInt16BE(this._pos);
            return this._pos += 2,
            o("_parseNum: result: %s", c),
            c
        }
        _parse4ByteNum() {
            if (this._list.length - this._pos < 4)
                return -1;
            let c = this._list.readUInt32BE(this._pos);
            return this._pos += 4,
            o("_parse4ByteNum: result: %s", c),
            c
        }
        _parseVarByteNum(c) {
            o("_parseVarByteNum");
            let u = 4, d = 0, m = 1, y = 0, _ = !1, g, b = this._pos ? this._pos : 0;
            for (; d < u && b + d < this._list.length; ) {
                if (g = this._list.readUInt8(b + d++),
                y += m * (g & r.VARBYTEINT_MASK),
                m *= 128,
                !(g & r.VARBYTEINT_FIN_MASK)) {
                    _ = !0;
                    break
                }
                if (this._list.length <= d)
                    break
            }
            return !_ && d === u && this._list.length >= d && this._emitError(new Error("Invalid variable byte integer")),
            b && (this._pos += d),
            _ ? c ? _ = {
                bytes: d,
                value: y
            } : _ = y : _ = !1,
            o("_parseVarByteNum: result: %o", _),
            _
        }
        _parseByte() {
            let c;
            return this._pos < this._list.length && (c = this._list.readUInt8(this._pos),
            this._pos++),
            o("_parseByte: result: %o", c),
            c
        }
        _parseByType(c) {
            switch (o("_parseByType: type: %s", c),
            c) {
            case "byte":
                return this._parseByte() !== 0;
            case "int8":
                return this._parseByte();
            case "int16":
                return this._parseNum();
            case "int32":
                return this._parse4ByteNum();
            case "var":
                return this._parseVarByteNum();
            case "string":
                return this._parseString();
            case "pair":
                return this._parseStringPair();
            case "binary":
                return this._parseBuffer()
            }
        }
        _parseProperties() {
            o("_parseProperties");
            let c = this._parseVarByteNum()
              , u = this._pos + c
              , d = {};
            for (; this._pos < u; ) {
                let m = this._parseByte();
                if (!m)
                    return this._emitError(new Error("Cannot parse property code type")),
                    !1;
                let y = r.propertiesCodes[m];
                if (!y)
                    return this._emitError(new Error("Unknown property")),
                    !1;
                if (y === "userProperties") {
                    d[y] || (d[y] = Object.create(null));
                    let _ = this._parseByType(r.propertiesTypes[y]);
                    if (d[y][_.name])
                        if (Array.isArray(d[y][_.name]))
                            d[y][_.name].push(_.value);
                        else {
                            let g = d[y][_.name];
                            d[y][_.name] = [g],
                            d[y][_.name].push(_.value)
                        }
                    else
                        d[y][_.name] = _.value;
                    continue
                }
                d[y] ? Array.isArray(d[y]) ? d[y].push(this._parseByType(r.propertiesTypes[y])) : (d[y] = [d[y]],
                d[y].push(this._parseByType(r.propertiesTypes[y]))) : d[y] = this._parseByType(r.propertiesTypes[y])
            }
            return d
        }
        _newPacket() {
            return o("_newPacket"),
            this.packet && (this._list.consume(this.packet.length),
            o("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length),
            this.emit("packet", this.packet)),
            o("_newPacket: new packet"),
            this.packet = new s,
            this._pos = 0,
            !0
        }
        _emitError(c) {
            o("_emitError", c),
            this.error = c,
            this.emit("error", c)
        }
    }
    ;
    t.exports = a
}
), Bu = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var {Buffer: n} = (Ge(),
    Pe(Ve))
      , i = 65536
      , s = {}
      , r = n.isBuffer(n.from([1, 2]).subarray(0, 1));
    function o(u) {
        let d = n.allocUnsafe(2);
        return d.writeUInt8(u >> 8, 0),
        d.writeUInt8(u & 255, 1),
        d
    }
    function a() {
        for (let u = 0; u < i; u++)
            s[u] = o(u)
    }
    function l(u) {
        let d = 0
          , m = 0
          , y = n.allocUnsafe(4);
        do
            d = u % 128 | 0,
            u = u / 128 | 0,
            u > 0 && (d = d | 128),
            y.writeUInt8(d, m++);
        while (u > 0 && m < 4);
        return u > 0 && (m = 0),
        r ? y.subarray(0, m) : y.slice(0, m)
    }
    function c(u) {
        let d = n.allocUnsafe(4);
        return d.writeUInt32BE(u, 0),
        d
    }
    t.exports = {
        cache: s,
        generateCache: a,
        generateNumber: o,
        genBufVariableByteInt: l,
        generate4ByteBuffer: c
    }
}
), Fu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe(),
    typeof ve > "u" || !ve.version || ve.version.indexOf("v0.") === 0 || ve.version.indexOf("v1.") === 0 && ve.version.indexOf("v1.8.") !== 0 ? t.exports = {
        nextTick: n
    } : t.exports = ve;
    function n(i, s, r, o) {
        if (typeof i != "function")
            throw new TypeError('"callback" argument must be a function');
        var a = arguments.length, l, c;
        switch (a) {
        case 0:
        case 1:
            return ve.nextTick(i);
        case 2:
            return ve.nextTick(function() {
                i.call(null, s)
            });
        case 3:
            return ve.nextTick(function() {
                i.call(null, s, r)
            });
        case 4:
            return ve.nextTick(function() {
                i.call(null, s, r, o)
            });
        default:
            for (l = new Array(a - 1),
            c = 0; c < l.length; )
                l[c++] = arguments[c];
            return ve.nextTick(function() {
                i.apply(null, l)
            })
        }
    }
}
), Ya = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Ja()
      , {Buffer: i} = (Ge(),
    Pe(Ve))
      , s = i.allocUnsafe(0)
      , r = i.from([0])
      , o = Bu()
      , a = Fu().nextTick
      , l = vt()("mqtt-packet:writeToStream")
      , c = o.cache
      , u = o.generateNumber
      , d = o.generateCache
      , m = o.genBufVariableByteInt
      , y = o.generate4ByteBuffer
      , _ = re
      , g = !0;
    function b(C, I, G) {
        switch (l("generate called"),
        I.cork && (I.cork(),
        a(k, I)),
        g && (g = !1,
        d()),
        l("generate: packet.cmd: %s", C.cmd),
        C.cmd) {
        case "connect":
            return w(C, I, G);
        case "connack":
            return T(C, I, G);
        case "publish":
            return R(C, I, G);
        case "puback":
        case "pubrec":
        case "pubrel":
        case "pubcomp":
            return M(C, I, G);
        case "subscribe":
            return E(C, I, G);
        case "suback":
            return A(C, I, G);
        case "unsubscribe":
            return U(C, I, G);
        case "unsuback":
            return W(C, I, G);
        case "pingreq":
        case "pingresp":
            return $(C, I, G);
        case "disconnect":
            return Q(C, I, G);
        case "auth":
            return O(C, I, G);
        default:
            return I.destroy(new Error("Unknown command")),
            !1
        }
    }
    Object.defineProperty(b, "cacheNumbers", {
        get() {
            return _ === re
        },
        set(C) {
            C ? ((!c || Object.keys(c).length === 0) && (g = !0),
            _ = re) : (g = !1,
            _ = q)
        }
    });
    function k(C) {
        C.uncork()
    }
    function w(C, I, G) {
        let ae = C || {}
          , Z = ae.protocolId || "MQTT"
          , z = ae.protocolVersion || 4
          , L = ae.will
          , ce = ae.clean
          , P = ae.keepalive || 0
          , D = ae.clientId || ""
          , B = ae.username
          , ne = ae.password
          , J = ae.properties;
        ce === void 0 && (ce = !0);
        let x = 0;
        if (!Z || typeof Z != "string" && !i.isBuffer(Z))
            return I.destroy(new Error("Invalid protocolId")),
            !1;
        if (x += Z.length + 2,
        z !== 3 && z !== 4 && z !== 5)
            return I.destroy(new Error("Invalid protocol version")),
            !1;
        if (x += 1,
        (typeof D == "string" || i.isBuffer(D)) && (D || z >= 4) && (D || ce))
            x += i.byteLength(D) + 2;
        else {
            if (z < 4)
                return I.destroy(new Error("clientId must be supplied before 3.1.1")),
                !1;
            if (ce * 1 === 0)
                return I.destroy(new Error("clientId must be given if cleanSession set to 0")),
                !1
        }
        if (typeof P != "number" || P < 0 || P > 65535 || P % 1 !== 0)
            return I.destroy(new Error("Invalid keepalive")),
            !1;
        x += 2,
        x += 1;
        let K, X;
        if (z === 5) {
            if (K = ge(I, J),
            !K)
                return !1;
            x += K.length
        }
        if (L) {
            if (typeof L != "object")
                return I.destroy(new Error("Invalid will")),
                !1;
            if (!L.topic || typeof L.topic != "string")
                return I.destroy(new Error("Invalid will topic")),
                !1;
            if (x += i.byteLength(L.topic) + 2,
            x += 2,
            L.payload)
                if (L.payload.length >= 0)
                    typeof L.payload == "string" ? x += i.byteLength(L.payload) : x += L.payload.length;
                else
                    return I.destroy(new Error("Invalid will payload")),
                    !1;
            if (X = {},
            z === 5) {
                if (X = ge(I, L.properties),
                !X)
                    return !1;
                x += X.length
            }
        }
        let _e = !1;
        if (B != null)
            if (de(B))
                _e = !0,
                x += i.byteLength(B) + 2;
            else
                return I.destroy(new Error("Invalid username")),
                !1;
        if (ne != null) {
            if (!_e)
                return I.destroy(new Error("Username is required to use password")),
                !1;
            if (de(ne))
                x += ye(ne) + 2;
            else
                return I.destroy(new Error("Invalid password")),
                !1
        }
        I.write(n.CONNECT_HEADER),
        Y(I, x),
        te(I, Z),
        ae.bridgeMode && (z += 128),
        I.write(z === 131 ? n.VERSION131 : z === 132 ? n.VERSION132 : z === 4 ? n.VERSION4 : z === 5 ? n.VERSION5 : n.VERSION3);
        let be = 0;
        return be |= B != null ? n.USERNAME_MASK : 0,
        be |= ne != null ? n.PASSWORD_MASK : 0,
        be |= L && L.retain ? n.WILL_RETAIN_MASK : 0,
        be |= L && L.qos ? L.qos << n.WILL_QOS_SHIFT : 0,
        be |= L ? n.WILL_FLAG_MASK : 0,
        be |= ce ? n.CLEAN_SESSION_MASK : 0,
        I.write(i.from([be])),
        _(I, P),
        z === 5 && K.write(),
        te(I, D),
        L && (z === 5 && X.write(),
        V(I, L.topic),
        te(I, L.payload)),
        B != null && te(I, B),
        ne != null && te(I, ne),
        !0
    }
    function T(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = ae === 5 ? Z.reasonCode : Z.returnCode
          , L = Z.properties
          , ce = 2;
        if (typeof z != "number")
            return I.destroy(new Error("Invalid return code")),
            !1;
        let P = null;
        if (ae === 5) {
            if (P = ge(I, L),
            !P)
                return !1;
            ce += P.length
        }
        return I.write(n.CONNACK_HEADER),
        Y(I, ce),
        I.write(Z.sessionPresent ? n.SESSIONPRESENT_HEADER : r),
        I.write(i.from([z])),
        P?.write(),
        !0
    }
    function R(C, I, G) {
        l("publish: packet: %o", C);
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.qos || 0
          , L = Z.retain ? n.RETAIN_MASK : 0
          , ce = Z.topic
          , P = Z.payload || s
          , D = Z.messageId
          , B = Z.properties
          , ne = 0;
        if (typeof ce == "string")
            ne += i.byteLength(ce) + 2;
        else if (i.isBuffer(ce))
            ne += ce.length + 2;
        else
            return I.destroy(new Error("Invalid topic")),
            !1;
        if (i.isBuffer(P) ? ne += P.length : ne += i.byteLength(P),
        z && typeof D != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        z && (ne += 2);
        let J = null;
        if (ae === 5) {
            if (J = ge(I, B),
            !J)
                return !1;
            ne += J.length
        }
        return I.write(n.PUBLISH_HEADER[z][Z.dup ? 1 : 0][L ? 1 : 0]),
        Y(I, ne),
        _(I, ye(ce)),
        I.write(ce),
        z > 0 && _(I, D),
        J?.write(),
        l("publish: payload: %o", P),
        I.write(P)
    }
    function M(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.cmd || "puback"
          , L = Z.messageId
          , ce = Z.dup && z === "pubrel" ? n.DUP_MASK : 0
          , P = 0
          , D = Z.reasonCode
          , B = Z.properties
          , ne = ae === 5 ? 3 : 2;
        if (z === "pubrel" && (P = 1),
        typeof L != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        let J = null;
        if (ae === 5 && typeof B == "object") {
            if (J = S(I, B, G, ne),
            !J)
                return !1;
            ne += J.length
        }
        return I.write(n.ACKS[z][P][ce][0]),
        ne === 3 && (ne += D !== 0 ? 1 : -1),
        Y(I, ne),
        _(I, L),
        ae === 5 && ne !== 2 && I.write(i.from([D])),
        J !== null ? J.write() : ne === 4 && I.write(i.from([0])),
        !0
    }
    function E(C, I, G) {
        l("subscribe: packet: ");
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.dup ? n.DUP_MASK : 0
          , L = Z.messageId
          , ce = Z.subscriptions
          , P = Z.properties
          , D = 0;
        if (typeof L != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        D += 2;
        let B = null;
        if (ae === 5) {
            if (B = ge(I, P),
            !B)
                return !1;
            D += B.length
        }
        if (typeof ce == "object" && ce.length)
            for (let J = 0; J < ce.length; J += 1) {
                let x = ce[J].topic
                  , K = ce[J].qos;
                if (typeof x != "string")
                    return I.destroy(new Error("Invalid subscriptions - invalid topic")),
                    !1;
                if (typeof K != "number")
                    return I.destroy(new Error("Invalid subscriptions - invalid qos")),
                    !1;
                if (ae === 5) {
                    if (typeof (ce[J].nl || !1) != "boolean")
                        return I.destroy(new Error("Invalid subscriptions - invalid No Local")),
                        !1;
                    if (typeof (ce[J].rap || !1) != "boolean")
                        return I.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),
                        !1;
                    let X = ce[J].rh || 0;
                    if (typeof X != "number" || X > 2)
                        return I.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),
                        !1
                }
                D += i.byteLength(x) + 2 + 1
            }
        else
            return I.destroy(new Error("Invalid subscriptions")),
            !1;
        l("subscribe: writing to stream: %o", n.SUBSCRIBE_HEADER),
        I.write(n.SUBSCRIBE_HEADER[1][z ? 1 : 0][0]),
        Y(I, D),
        _(I, L),
        B !== null && B.write();
        let ne = !0;
        for (let J of ce) {
            let x = J.topic, K = J.qos, X = +J.nl, _e = +J.rap, be = J.rh, ke;
            V(I, x),
            ke = n.SUBSCRIBE_OPTIONS_QOS[K],
            ae === 5 && (ke |= X ? n.SUBSCRIBE_OPTIONS_NL : 0,
            ke |= _e ? n.SUBSCRIBE_OPTIONS_RAP : 0,
            ke |= be ? n.SUBSCRIBE_OPTIONS_RH[be] : 0),
            ne = I.write(i.from([ke]))
        }
        return ne
    }
    function A(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.messageId
          , L = Z.granted
          , ce = Z.properties
          , P = 0;
        if (typeof z != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        if (P += 2,
        typeof L == "object" && L.length)
            for (let B = 0; B < L.length; B += 1) {
                if (typeof L[B] != "number")
                    return I.destroy(new Error("Invalid qos vector")),
                    !1;
                P += 1
            }
        else
            return I.destroy(new Error("Invalid qos vector")),
            !1;
        let D = null;
        if (ae === 5) {
            if (D = S(I, ce, G, P),
            !D)
                return !1;
            P += D.length
        }
        return I.write(n.SUBACK_HEADER),
        Y(I, P),
        _(I, z),
        D !== null && D.write(),
        I.write(i.from(L))
    }
    function U(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.messageId
          , L = Z.dup ? n.DUP_MASK : 0
          , ce = Z.unsubscriptions
          , P = Z.properties
          , D = 0;
        if (typeof z != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        if (D += 2,
        typeof ce == "object" && ce.length)
            for (let J = 0; J < ce.length; J += 1) {
                if (typeof ce[J] != "string")
                    return I.destroy(new Error("Invalid unsubscriptions")),
                    !1;
                D += i.byteLength(ce[J]) + 2
            }
        else
            return I.destroy(new Error("Invalid unsubscriptions")),
            !1;
        let B = null;
        if (ae === 5) {
            if (B = ge(I, P),
            !B)
                return !1;
            D += B.length
        }
        I.write(n.UNSUBSCRIBE_HEADER[1][L ? 1 : 0][0]),
        Y(I, D),
        _(I, z),
        B !== null && B.write();
        let ne = !0;
        for (let J = 0; J < ce.length; J++)
            ne = V(I, ce[J]);
        return ne
    }
    function W(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.messageId
          , L = Z.dup ? n.DUP_MASK : 0
          , ce = Z.granted
          , P = Z.properties
          , D = Z.cmd
          , B = 0
          , ne = 2;
        if (typeof z != "number")
            return I.destroy(new Error("Invalid messageId")),
            !1;
        if (ae === 5)
            if (typeof ce == "object" && ce.length)
                for (let x = 0; x < ce.length; x += 1) {
                    if (typeof ce[x] != "number")
                        return I.destroy(new Error("Invalid qos vector")),
                        !1;
                    ne += 1
                }
            else
                return I.destroy(new Error("Invalid qos vector")),
                !1;
        let J = null;
        if (ae === 5) {
            if (J = S(I, P, G, ne),
            !J)
                return !1;
            ne += J.length
        }
        return I.write(n.ACKS[D][B][L][0]),
        Y(I, ne),
        _(I, z),
        J !== null && J.write(),
        ae === 5 && I.write(i.from(ce)),
        !0
    }
    function $(C, I, G) {
        return I.write(n.EMPTY[C.cmd])
    }
    function Q(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.reasonCode
          , L = Z.properties
          , ce = ae === 5 ? 1 : 0
          , P = null;
        if (ae === 5) {
            if (P = S(I, L, G, ce),
            !P)
                return !1;
            ce += P.length
        }
        return I.write(i.from([n.codes.disconnect << 4])),
        Y(I, ce),
        ae === 5 && I.write(i.from([z])),
        P !== null && P.write(),
        !0
    }
    function O(C, I, G) {
        let ae = G ? G.protocolVersion : 4
          , Z = C || {}
          , z = Z.reasonCode
          , L = Z.properties
          , ce = ae === 5 ? 1 : 0;
        ae !== 5 && I.destroy(new Error("Invalid mqtt version for auth packet"));
        let P = S(I, L, G, ce);
        return P ? (ce += P.length,
        I.write(i.from([n.codes.auth << 4])),
        Y(I, ce),
        I.write(i.from([z])),
        P !== null && P.write(),
        !0) : !1
    }
    var j = {};
    function Y(C, I) {
        if (I > n.VARBYTEINT_MAX)
            return C.destroy(new Error(`Invalid variable byte integer: ${I}`)),
            !1;
        let G = j[I];
        return G || (G = m(I),
        I < 16384 && (j[I] = G)),
        l("writeVarByteInt: writing to stream: %o", G),
        C.write(G)
    }
    function V(C, I) {
        let G = i.byteLength(I);
        return _(C, G),
        l("writeString: %s", I),
        C.write(I, "utf8")
    }
    function le(C, I, G) {
        V(C, I),
        V(C, G)
    }
    function re(C, I) {
        return l("writeNumberCached: number: %d", I),
        l("writeNumberCached: %o", c[I]),
        C.write(c[I])
    }
    function q(C, I) {
        let G = u(I);
        return l("writeNumberGenerated: %o", G),
        C.write(G)
    }
    function pe(C, I) {
        let G = y(I);
        return l("write4ByteNumber: %o", G),
        C.write(G)
    }
    function te(C, I) {
        typeof I == "string" ? V(C, I) : I ? (_(C, I.length),
        C.write(I)) : _(C, 0)
    }
    function ge(C, I) {
        if (typeof I != "object" || I.length != null)
            return {
                length: 1,
                write() {
                    me(C, {}, 0)
                }
            };
        let G = 0;
        function ae(Z, z) {
            let L = n.propertiesTypes[Z]
              , ce = 0;
            switch (L) {
            case "byte":
                {
                    if (typeof z != "boolean")
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 2;
                    break
                }
            case "int8":
                {
                    if (typeof z != "number" || z < 0 || z > 255)
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 2;
                    break
                }
            case "binary":
                {
                    if (z && z === null)
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 1 + i.byteLength(z) + 2;
                    break
                }
            case "int16":
                {
                    if (typeof z != "number" || z < 0 || z > 65535)
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 3;
                    break
                }
            case "int32":
                {
                    if (typeof z != "number" || z < 0 || z > 4294967295)
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 5;
                    break
                }
            case "var":
                {
                    if (typeof z != "number" || z < 0 || z > 268435455)
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 1 + i.byteLength(m(z));
                    break
                }
            case "string":
                {
                    if (typeof z != "string")
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += 3 + i.byteLength(z.toString());
                    break
                }
            case "pair":
                {
                    if (typeof z != "object")
                        return C.destroy(new Error(`Invalid ${Z}: ${z}`)),
                        !1;
                    ce += Object.getOwnPropertyNames(z).reduce( (P, D) => {
                        let B = z[D];
                        return Array.isArray(B) ? P += B.reduce( (ne, J) => (ne += 3 + i.byteLength(D.toString()) + 2 + i.byteLength(J.toString()),
                        ne), 0) : P += 3 + i.byteLength(D.toString()) + 2 + i.byteLength(z[D].toString()),
                        P
                    }
                    , 0);
                    break
                }
            default:
                return C.destroy(new Error(`Invalid property ${Z}: ${z}`)),
                !1
            }
            return ce
        }
        if (I)
            for (let Z in I) {
                let z = 0
                  , L = 0
                  , ce = I[Z];
                if (Array.isArray(ce))
                    for (let P = 0; P < ce.length; P++) {
                        if (L = ae(Z, ce[P]),
                        !L)
                            return !1;
                        z += L
                    }
                else {
                    if (L = ae(Z, ce),
                    !L)
                        return !1;
                    z = L
                }
                if (!z)
                    return !1;
                G += z
            }
        return {
            length: i.byteLength(m(G)) + G,
            write() {
                me(C, I, G)
            }
        }
    }
    function S(C, I, G, ae) {
        let Z = ["reasonString", "userProperties"]
          , z = G && G.properties && G.properties.maximumPacketSize ? G.properties.maximumPacketSize : 0
          , L = ge(C, I);
        if (z)
            for (; ae + L.length > z; ) {
                let ce = Z.shift();
                if (ce && I[ce])
                    delete I[ce],
                    L = ge(C, I);
                else
                    return !1
            }
        return L
    }
    function H(C, I, G) {
        switch (n.propertiesTypes[I]) {
        case "byte":
            {
                C.write(i.from([n.properties[I]])),
                C.write(i.from([+G]));
                break
            }
        case "int8":
            {
                C.write(i.from([n.properties[I]])),
                C.write(i.from([G]));
                break
            }
        case "binary":
            {
                C.write(i.from([n.properties[I]])),
                te(C, G);
                break
            }
        case "int16":
            {
                C.write(i.from([n.properties[I]])),
                _(C, G);
                break
            }
        case "int32":
            {
                C.write(i.from([n.properties[I]])),
                pe(C, G);
                break
            }
        case "var":
            {
                C.write(i.from([n.properties[I]])),
                Y(C, G);
                break
            }
        case "string":
            {
                C.write(i.from([n.properties[I]])),
                V(C, G);
                break
            }
        case "pair":
            {
                Object.getOwnPropertyNames(G).forEach(ae => {
                    let Z = G[ae];
                    Array.isArray(Z) ? Z.forEach(z => {
                        C.write(i.from([n.properties[I]])),
                        le(C, ae.toString(), z.toString())
                    }
                    ) : (C.write(i.from([n.properties[I]])),
                    le(C, ae.toString(), Z.toString()))
                }
                );
                break
            }
        default:
            return C.destroy(new Error(`Invalid property ${I} value: ${G}`)),
            !1
        }
    }
    function me(C, I, G) {
        Y(C, G);
        for (let ae in I)
            if (Object.prototype.hasOwnProperty.call(I, ae) && I[ae] !== null) {
                let Z = I[ae];
                if (Array.isArray(Z))
                    for (let z = 0; z < Z.length; z++)
                        H(C, ae, Z[z]);
                else
                    H(C, ae, Z)
            }
    }
    function ye(C) {
        return C ? C instanceof i ? C.length : i.byteLength(C) : 0
    }
    function de(C) {
        return typeof C == "string" || C instanceof i
    }
    t.exports = b
}
), qu = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = Ya()
      , {EventEmitter: i} = (ln(),
    Pe(Xt))
      , {Buffer: s} = (Ge(),
    Pe(Ve));
    function r(a, l) {
        let c = new o;
        return n(a, c, l),
        c.concat()
    }
    var o = class extends i {
        constructor() {
            super(),
            this._array = new Array(20),
            this._i = 0
        }
        write(a) {
            return this._array[this._i++] = a,
            !0
        }
        concat() {
            let a = 0, l = new Array(this._array.length), c = this._array, u = 0, d;
            for (d = 0; d < c.length && c[d] !== void 0; d++)
                typeof c[d] != "string" ? l[d] = c[d].length : l[d] = s.byteLength(c[d]),
                a += l[d];
            let m = s.allocUnsafe(a);
            for (d = 0; d < c.length && c[d] !== void 0; d++)
                typeof c[d] != "string" ? (c[d].copy(m, u),
                u += l[d]) : (m.write(c[d], u),
                u += l[d]);
            return m
        }
        destroy(a) {
            a && this.emit("error", a)
        }
    }
    ;
    t.exports = r
}
), ju = fe(e => {
    ie(),
    se(),
    oe(),
    e.parser = Lu().parser,
    e.generate = qu(),
    e.writeToStream = Ya()
}
), Qa = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = class {
        constructor() {
            this.nextId = Math.max(1, Math.floor(Math.random() * 65535))
        }
        allocate() {
            let n = this.nextId++;
            return this.nextId === 65536 && (this.nextId = 1),
            n
        }
        getLastAllocated() {
            return this.nextId === 1 ? 65535 : this.nextId - 1
        }
        register(n) {
            return !0
        }
        deallocate(n) {}
        clear() {}
    }
    ;
    e.default = t
}
), Wu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe(),
    t.exports = i;
    function n(r) {
        return r instanceof Xn ? Xn.from(r) : new r.constructor(r.buffer.slice(),r.byteOffset,r.length)
    }
    function i(r) {
        if (r = r || {},
        r.circles)
            return s(r);
        return r.proto ? l : a;
        function o(c, u) {
            for (var d = Object.keys(c), m = new Array(d.length), y = 0; y < d.length; y++) {
                var _ = d[y]
                  , g = c[_];
                typeof g != "object" || g === null ? m[_] = g : g instanceof Date ? m[_] = new Date(g) : ArrayBuffer.isView(g) ? m[_] = n(g) : m[_] = u(g)
            }
            return m
        }
        function a(c) {
            if (typeof c != "object" || c === null)
                return c;
            if (c instanceof Date)
                return new Date(c);
            if (Array.isArray(c))
                return o(c, a);
            if (c instanceof Map)
                return new Map(o(Array.from(c), a));
            if (c instanceof Set)
                return new Set(o(Array.from(c), a));
            var u = {};
            for (var d in c)
                if (Object.hasOwnProperty.call(c, d) !== !1) {
                    var m = c[d];
                    typeof m != "object" || m === null ? u[d] = m : m instanceof Date ? u[d] = new Date(m) : m instanceof Map ? u[d] = new Map(o(Array.from(m), a)) : m instanceof Set ? u[d] = new Set(o(Array.from(m), a)) : ArrayBuffer.isView(m) ? u[d] = n(m) : u[d] = a(m)
                }
            return u
        }
        function l(c) {
            if (typeof c != "object" || c === null)
                return c;
            if (c instanceof Date)
                return new Date(c);
            if (Array.isArray(c))
                return o(c, l);
            if (c instanceof Map)
                return new Map(o(Array.from(c), l));
            if (c instanceof Set)
                return new Set(o(Array.from(c), l));
            var u = {};
            for (var d in c) {
                var m = c[d];
                typeof m != "object" || m === null ? u[d] = m : m instanceof Date ? u[d] = new Date(m) : m instanceof Map ? u[d] = new Map(o(Array.from(m), l)) : m instanceof Set ? u[d] = new Set(o(Array.from(m), l)) : ArrayBuffer.isView(m) ? u[d] = n(m) : u[d] = l(m)
            }
            return u
        }
    }
    function s(r) {
        var o = []
          , a = [];
        return r.proto ? u : c;
        function l(d, m) {
            for (var y = Object.keys(d), _ = new Array(y.length), g = 0; g < y.length; g++) {
                var b = y[g]
                  , k = d[b];
                if (typeof k != "object" || k === null)
                    _[b] = k;
                else if (k instanceof Date)
                    _[b] = new Date(k);
                else if (ArrayBuffer.isView(k))
                    _[b] = n(k);
                else {
                    var w = o.indexOf(k);
                    w !== -1 ? _[b] = a[w] : _[b] = m(k)
                }
            }
            return _
        }
        function c(d) {
            if (typeof d != "object" || d === null)
                return d;
            if (d instanceof Date)
                return new Date(d);
            if (Array.isArray(d))
                return l(d, c);
            if (d instanceof Map)
                return new Map(l(Array.from(d), c));
            if (d instanceof Set)
                return new Set(l(Array.from(d), c));
            var m = {};
            o.push(d),
            a.push(m);
            for (var y in d)
                if (Object.hasOwnProperty.call(d, y) !== !1) {
                    var _ = d[y];
                    if (typeof _ != "object" || _ === null)
                        m[y] = _;
                    else if (_ instanceof Date)
                        m[y] = new Date(_);
                    else if (_ instanceof Map)
                        m[y] = new Map(l(Array.from(_), c));
                    else if (_ instanceof Set)
                        m[y] = new Set(l(Array.from(_), c));
                    else if (ArrayBuffer.isView(_))
                        m[y] = n(_);
                    else {
                        var g = o.indexOf(_);
                        g !== -1 ? m[y] = a[g] : m[y] = c(_)
                    }
                }
            return o.pop(),
            a.pop(),
            m
        }
        function u(d) {
            if (typeof d != "object" || d === null)
                return d;
            if (d instanceof Date)
                return new Date(d);
            if (Array.isArray(d))
                return l(d, u);
            if (d instanceof Map)
                return new Map(l(Array.from(d), u));
            if (d instanceof Set)
                return new Set(l(Array.from(d), u));
            var m = {};
            o.push(d),
            a.push(m);
            for (var y in d) {
                var _ = d[y];
                if (typeof _ != "object" || _ === null)
                    m[y] = _;
                else if (_ instanceof Date)
                    m[y] = new Date(_);
                else if (_ instanceof Map)
                    m[y] = new Map(l(Array.from(_), u));
                else if (_ instanceof Set)
                    m[y] = new Set(l(Array.from(_), u));
                else if (ArrayBuffer.isView(_))
                    m[y] = n(_);
                else {
                    var g = o.indexOf(_);
                    g !== -1 ? m[y] = a[g] : m[y] = u(_)
                }
            }
            return o.pop(),
            a.pop(),
            m
        }
    }
}
), Vu = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe(),
    t.exports = Wu()()
}
), Gu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.validateTopics = e.validateTopic = void 0;
    function t(i) {
        let s = i.split("/");
        for (let r = 0; r < s.length; r++)
            if (s[r] !== "+") {
                if (s[r] === "#")
                    return r === s.length - 1;
                if (s[r].indexOf("+") !== -1 || s[r].indexOf("#") !== -1)
                    return !1
            }
        return !0
    }
    e.validateTopic = t;
    function n(i) {
        if (i.length === 0)
            return "empty_topic_list";
        for (let s = 0; s < i.length; s++)
            if (!t(i[s]))
                return i[s];
        return null
    }
    e.validateTopics = n
}
), Xa = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = Zt()
      , n = {
        objectMode: !0
    }
      , i = {
        clean: !0
    }
      , s = class {
        constructor(r) {
            this.options = r || {},
            this.options = Object.assign(Object.assign({}, i), r),
            this._inflights = new Map
        }
        put(r, o) {
            return this._inflights.set(r.messageId, r),
            o && o(),
            this
        }
        createStream() {
            let r = new t.Readable(n)
              , o = []
              , a = !1
              , l = 0;
            return this._inflights.forEach( (c, u) => {
                o.push(c)
            }
            ),
            r._read = () => {
                !a && l < o.length ? r.push(o[l++]) : r.push(null)
            }
            ,
            r.destroy = c => {
                if (!a)
                    return a = !0,
                    setTimeout( () => {
                        r.emit("close")
                    }
                    , 0),
                    r
            }
            ,
            r
        }
        del(r, o) {
            let a = this._inflights.get(r.messageId);
            return a ? (this._inflights.delete(r.messageId),
            o(null, a)) : o && o(new Error("missing packet")),
            this
        }
        get(r, o) {
            let a = this._inflights.get(r.messageId);
            return a ? o(null, a) : o && o(new Error("missing packet")),
            this
        }
        close(r) {
            this.options.clean && (this._inflights = null),
            r && r()
        }
    }
    ;
    e.default = s
}
), Hu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = [0, 16, 128, 131, 135, 144, 145, 151, 153]
      , n = (i, s, r) => {
        i.log("handlePublish: packet %o", s),
        r = typeof r < "u" ? r : i.noop;
        let o = s.topic.toString()
          , a = s.payload
          , {qos: l} = s
          , {messageId: c} = s
          , {options: u} = i;
        if (i.options.protocolVersion === 5) {
            let d;
            if (s.properties && (d = s.properties.topicAlias),
            typeof d < "u")
                if (o.length === 0)
                    if (d > 0 && d <= 65535) {
                        let m = i.topicAliasRecv.getTopicByAlias(d);
                        if (m)
                            o = m,
                            i.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", o, d);
                        else {
                            i.log("handlePublish :: unregistered topic alias. alias: %d", d),
                            i.emit("error", new Error("Received unregistered Topic Alias"));
                            return
                        }
                    } else {
                        i.log("handlePublish :: topic alias out of range. alias: %d", d),
                        i.emit("error", new Error("Received Topic Alias is out of range"));
                        return
                    }
                else if (i.topicAliasRecv.put(o, d))
                    i.log("handlePublish :: registered topic: %s - alias: %d", o, d);
                else {
                    i.log("handlePublish :: topic alias out of range. alias: %d", d),
                    i.emit("error", new Error("Received Topic Alias is out of range"));
                    return
                }
        }
        switch (i.log("handlePublish: qos %d", l),
        l) {
        case 2:
            {
                u.customHandleAcks(o, a, s, (d, m) => {
                    if (typeof d == "number" && (m = d,
                    d = null),
                    d)
                        return i.emit("error", d);
                    if (t.indexOf(m) === -1)
                        return i.emit("error", new Error("Wrong reason code for pubrec"));
                    m ? i._sendPacket({
                        cmd: "pubrec",
                        messageId: c,
                        reasonCode: m
                    }, r) : i.incomingStore.put(s, () => {
                        i._sendPacket({
                            cmd: "pubrec",
                            messageId: c
                        }, r)
                    }
                    )
                }
                );
                break
            }
        case 1:
            {
                u.customHandleAcks(o, a, s, (d, m) => {
                    if (typeof d == "number" && (m = d,
                    d = null),
                    d)
                        return i.emit("error", d);
                    if (t.indexOf(m) === -1)
                        return i.emit("error", new Error("Wrong reason code for puback"));
                    m || i.emit("message", o, a, s),
                    i.handleMessage(s, y => {
                        if (y)
                            return r && r(y);
                        i._sendPacket({
                            cmd: "puback",
                            messageId: c,
                            reasonCode: m
                        }, r)
                    }
                    )
                }
                );
                break
            }
        case 0:
            i.emit("message", o, a, s),
            i.handleMessage(s, r);
            break;
        default:
            i.log("handlePublish: unknown QoS. Doing nothing.");
            break
        }
    }
    ;
    e.default = n
}
), $u = fe( (e, t) => {
    t.exports = {
        version: "5.10.1"
    }
}
), cn = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.MQTTJS_VERSION = e.nextTick = e.applyMixin = e.ErrorWithReasonCode = void 0;
    var t = class Za extends Error {
        constructor(s, r) {
            super(s),
            this.code = r,
            Object.setPrototypeOf(this, Za.prototype),
            Object.getPrototypeOf(this).name = "ErrorWithReasonCode"
        }
    }
    ;
    e.ErrorWithReasonCode = t;
    function n(i, s, r=!1) {
        var o;
        let a = [s];
        for (; ; ) {
            let l = a[0]
              , c = Object.getPrototypeOf(l);
            if (c?.prototype)
                a.unshift(c);
            else
                break
        }
        for (let l of a)
            for (let c of Object.getOwnPropertyNames(l.prototype))
                (r || c !== "constructor") && Object.defineProperty(i.prototype, c, (o = Object.getOwnPropertyDescriptor(l.prototype, c)) !== null && o !== void 0 ? o : Object.create(null))
    }
    e.applyMixin = n,
    e.nextTick = typeof ve?.nextTick == "function" ? ve.nextTick : i => {
        setTimeout(i, 0)
    }
    ,
    e.MQTTJS_VERSION = $u().version
}
), ar = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ReasonCodes = void 0;
    var t = cn();
    e.ReasonCodes = {
        0: "",
        1: "Unacceptable protocol version",
        2: "Identifier rejected",
        3: "Server unavailable",
        4: "Bad username or password",
        5: "Not authorized",
        16: "No matching subscribers",
        17: "No subscription existed",
        128: "Unspecified error",
        129: "Malformed Packet",
        130: "Protocol Error",
        131: "Implementation specific error",
        132: "Unsupported Protocol Version",
        133: "Client Identifier not valid",
        134: "Bad User Name or Password",
        135: "Not authorized",
        136: "Server unavailable",
        137: "Server busy",
        138: "Banned",
        139: "Server shutting down",
        140: "Bad authentication method",
        141: "Keep Alive timeout",
        142: "Session taken over",
        143: "Topic Filter invalid",
        144: "Topic Name invalid",
        145: "Packet identifier in use",
        146: "Packet Identifier not found",
        147: "Receive Maximum exceeded",
        148: "Topic Alias invalid",
        149: "Packet too large",
        150: "Message rate too high",
        151: "Quota exceeded",
        152: "Administrative action",
        153: "Payload format invalid",
        154: "Retain not supported",
        155: "QoS not supported",
        156: "Use another server",
        157: "Server moved",
        158: "Shared Subscriptions not supported",
        159: "Connection rate exceeded",
        160: "Maximum connect time",
        161: "Subscription Identifiers not supported",
        162: "Wildcard Subscriptions not supported"
    };
    var n = (i, s) => {
        let {messageId: r} = s
          , o = s.cmd
          , a = null
          , l = i.outgoing[r] ? i.outgoing[r].cb : null
          , c = null;
        if (!l) {
            i.log("_handleAck :: Server sent an ack in error. Ignoring.");
            return
        }
        switch (i.log("_handleAck :: packet type", o),
        o) {
        case "pubcomp":
        case "puback":
            {
                let u = s.reasonCode;
                u && u > 0 && u !== 16 ? (c = new t.ErrorWithReasonCode(`Publish error: ${e.ReasonCodes[u]}`,u),
                i._removeOutgoingAndStoreMessage(r, () => {
                    l(c, s)
                }
                )) : i._removeOutgoingAndStoreMessage(r, l);
                break
            }
        case "pubrec":
            {
                a = {
                    cmd: "pubrel",
                    qos: 2,
                    messageId: r
                };
                let u = s.reasonCode;
                u && u > 0 && u !== 16 ? (c = new t.ErrorWithReasonCode(`Publish error: ${e.ReasonCodes[u]}`,u),
                i._removeOutgoingAndStoreMessage(r, () => {
                    l(c, s)
                }
                )) : i._sendPacket(a);
                break
            }
        case "suback":
            {
                delete i.outgoing[r],
                i.messageIdProvider.deallocate(r);
                let u = s.granted;
                for (let d = 0; d < u.length; d++) {
                    let m = u[d];
                    if (m & 128) {
                        c = new Error(`Subscribe error: ${e.ReasonCodes[m]}`),
                        c.code = m;
                        let y = i.messageIdToTopic[r];
                        y && y.forEach(_ => {
                            delete i._resubscribeTopics[_]
                        }
                        )
                    }
                }
                delete i.messageIdToTopic[r],
                i._invokeStoreProcessingQueue(),
                l(c, s);
                break
            }
        case "unsuback":
            {
                delete i.outgoing[r],
                i.messageIdProvider.deallocate(r),
                i._invokeStoreProcessingQueue(),
                l(null, s);
                break
            }
        default:
            i.emit("error", new Error("unrecognized packet type"))
        }
        i.disconnecting && Object.keys(i.outgoing).length === 0 && i.emit("outgoingEmpty")
    }
    ;
    e.default = n
}
), Ku = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = cn()
      , n = ar()
      , i = (s, r) => {
        let {options: o} = s
          , a = o.protocolVersion
          , l = a === 5 ? r.reasonCode : r.returnCode;
        if (a !== 5) {
            let c = new t.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${a}`,l);
            s.emit("error", c);
            return
        }
        s.handleAuth(r, (c, u) => {
            if (c) {
                s.emit("error", c);
                return
            }
            if (l === 24)
                s.reconnecting = !1,
                s._sendPacket(u);
            else {
                let d = new t.ErrorWithReasonCode(`Connection refused: ${n.ReasonCodes[l]}`,l);
                s.emit("error", d)
            }
        }
        )
    }
    ;
    e.default = i
}
), zu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.LRUCache = void 0;
    var t = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date
      , n = new Set
      , i = typeof ve == "object" && ve ? ve : {}
      , s = (_, g, b, k) => {
        typeof i.emitWarning == "function" ? i.emitWarning(_, g, b, k) : console.error(`[${b}] ${g}: ${_}`)
    }
      , r = globalThis.AbortController
      , o = globalThis.AbortSignal;
    if (typeof r > "u") {
        o = class {
            onabort;
            _onabort = [];
            reason;
            aborted = !1;
            addEventListener(b, k) {
                this._onabort.push(k)
            }
        }
        ,
        r = class {
            constructor() {
                g()
            }
            signal = new o;
            abort(b) {
                if (!this.signal.aborted) {
                    this.signal.reason = b,
                    this.signal.aborted = !0;
                    for (let k of this.signal._onabort)
                        k(b);
                    this.signal.onabort?.(b)
                }
            }
        }
        ;
        let _ = i.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1"
          , g = () => {
            _ && (_ = !1,
            s("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", g))
        }
    }
    var a = _ => !n.has(_)
      , l = Symbol("type")
      , c = _ => _ && _ === Math.floor(_) && _ > 0 && isFinite(_)
      , u = _ => c(_) ? _ <= Math.pow(2, 8) ? Uint8Array : _ <= Math.pow(2, 16) ? Uint16Array : _ <= Math.pow(2, 32) ? Uint32Array : _ <= Number.MAX_SAFE_INTEGER ? d : null : null
      , d = class extends Array {
        constructor(_) {
            super(_),
            this.fill(0)
        }
    }
      , m = class kn {
        heap;
        length;
        static #l = !1;
        static create(g) {
            let b = u(g);
            if (!b)
                return [];
            kn.#l = !0;
            let k = new kn(g,b);
            return kn.#l = !1,
            k
        }
        constructor(g, b) {
            if (!kn.#l)
                throw new TypeError("instantiate Stack using Stack.create(n)");
            this.heap = new b(g),
            this.length = 0
        }
        push(g) {
            this.heap[this.length++] = g
        }
        pop() {
            return this.heap[--this.length]
        }
    }
      , y = class el {
        #l;
        #h;
        #p;
        #m;
        #O;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #r;
        #g;
        #i;
        #n;
        #e;
        #c;
        #d;
        #a;
        #o;
        #y;
        #s;
        #w;
        #v;
        #_;
        #b;
        #S;
        #u;
        static unsafeExposeInternals(g) {
            return {
                starts: g.#v,
                ttls: g.#_,
                sizes: g.#w,
                keyMap: g.#i,
                keyList: g.#n,
                valList: g.#e,
                next: g.#c,
                prev: g.#d,
                get head() {
                    return g.#a
                },
                get tail() {
                    return g.#o
                },
                free: g.#y,
                isBackgroundFetch: b => g.#t(b),
                backgroundFetch: (b, k, w, T) => g.#C(b, k, w, T),
                moveToTail: b => g.#A(b),
                indexes: b => g.#T(b),
                rindexes: b => g.#k(b),
                isStale: b => g.#f(b)
            }
        }
        get max() {
            return this.#l
        }
        get maxSize() {
            return this.#h
        }
        get calculatedSize() {
            return this.#g
        }
        get size() {
            return this.#r
        }
        get fetchMethod() {
            return this.#O
        }
        get dispose() {
            return this.#p
        }
        get disposeAfter() {
            return this.#m
        }
        constructor(g) {
            let {max: b=0, ttl: k, ttlResolution: w=1, ttlAutopurge: T, updateAgeOnGet: R, updateAgeOnHas: M, allowStale: E, dispose: A, disposeAfter: U, noDisposeOnSet: W, noUpdateTTL: $, maxSize: Q=0, maxEntrySize: O=0, sizeCalculation: j, fetchMethod: Y, noDeleteOnFetchRejection: V, noDeleteOnStaleGet: le, allowStaleOnFetchRejection: re, allowStaleOnFetchAbort: q, ignoreFetchAbort: pe} = g;
            if (b !== 0 && !c(b))
                throw new TypeError("max option must be a nonnegative integer");
            let te = b ? u(b) : Array;
            if (!te)
                throw new Error("invalid max value: " + b);
            if (this.#l = b,
            this.#h = Q,
            this.maxEntrySize = O || this.#h,
            this.sizeCalculation = j,
            this.sizeCalculation) {
                if (!this.#h && !this.maxEntrySize)
                    throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                if (typeof this.sizeCalculation != "function")
                    throw new TypeError("sizeCalculation set to non-function")
            }
            if (Y !== void 0 && typeof Y != "function")
                throw new TypeError("fetchMethod must be a function if specified");
            if (this.#O = Y,
            this.#S = !!Y,
            this.#i = new Map,
            this.#n = new Array(b).fill(void 0),
            this.#e = new Array(b).fill(void 0),
            this.#c = new te(b),
            this.#d = new te(b),
            this.#a = 0,
            this.#o = 0,
            this.#y = m.create(b),
            this.#r = 0,
            this.#g = 0,
            typeof A == "function" && (this.#p = A),
            typeof U == "function" ? (this.#m = U,
            this.#s = []) : (this.#m = void 0,
            this.#s = void 0),
            this.#b = !!this.#p,
            this.#u = !!this.#m,
            this.noDisposeOnSet = !!W,
            this.noUpdateTTL = !!$,
            this.noDeleteOnFetchRejection = !!V,
            this.allowStaleOnFetchRejection = !!re,
            this.allowStaleOnFetchAbort = !!q,
            this.ignoreFetchAbort = !!pe,
            this.maxEntrySize !== 0) {
                if (this.#h !== 0 && !c(this.#h))
                    throw new TypeError("maxSize must be a positive integer if specified");
                if (!c(this.maxEntrySize))
                    throw new TypeError("maxEntrySize must be a positive integer if specified");
                this.#B()
            }
            if (this.allowStale = !!E,
            this.noDeleteOnStaleGet = !!le,
            this.updateAgeOnGet = !!R,
            this.updateAgeOnHas = !!M,
            this.ttlResolution = c(w) || w === 0 ? w : 1,
            this.ttlAutopurge = !!T,
            this.ttl = k || 0,
            this.ttl) {
                if (!c(this.ttl))
                    throw new TypeError("ttl must be a positive integer if specified");
                this.#U()
            }
            if (this.#l === 0 && this.ttl === 0 && this.#h === 0)
                throw new TypeError("At least one of max, maxSize, or ttl is required");
            if (!this.ttlAutopurge && !this.#l && !this.#h) {
                let ge = "LRU_CACHE_UNBOUNDED";
                a(ge) && (n.add(ge),
                s("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", ge, el))
            }
        }
        getRemainingTTL(g) {
            return this.#i.has(g) ? 1 / 0 : 0
        }
        #U() {
            let g = new d(this.#l)
              , b = new d(this.#l);
            this.#_ = g,
            this.#v = b,
            this.#M = (T, R, M=t.now()) => {
                if (b[T] = R !== 0 ? M : 0,
                g[T] = R,
                R !== 0 && this.ttlAutopurge) {
                    let E = setTimeout( () => {
                        this.#f(T) && this.delete(this.#n[T])
                    }
                    , R + 1);
                    E.unref && E.unref()
                }
            }
            ,
            this.#I = T => {
                b[T] = g[T] !== 0 ? t.now() : 0
            }
            ,
            this.#E = (T, R) => {
                if (g[R]) {
                    let M = g[R]
                      , E = b[R];
                    T.ttl = M,
                    T.start = E,
                    T.now = k || w();
                    let A = T.now - E;
                    T.remainingTTL = M - A
                }
            }
            ;
            let k = 0
              , w = () => {
                let T = t.now();
                if (this.ttlResolution > 0) {
                    k = T;
                    let R = setTimeout( () => k = 0, this.ttlResolution);
                    R.unref && R.unref()
                }
                return T
            }
            ;
            this.getRemainingTTL = T => {
                let R = this.#i.get(T);
                if (R === void 0)
                    return 0;
                let M = g[R]
                  , E = b[R];
                if (M === 0 || E === 0)
                    return 1 / 0;
                let A = (k || w()) - E;
                return M - A
            }
            ,
            this.#f = T => g[T] !== 0 && b[T] !== 0 && (k || w()) - b[T] > g[T]
        }
        #I = () => {}
        ;
        #E = () => {}
        ;
        #M = () => {}
        ;
        #f = () => !1;
        #B() {
            let g = new d(this.#l);
            this.#g = 0,
            this.#w = g,
            this.#R = b => {
                this.#g -= g[b],
                g[b] = 0
            }
            ,
            this.#x = (b, k, w, T) => {
                if (this.#t(k))
                    return 0;
                if (!c(w))
                    if (T) {
                        if (typeof T != "function")
                            throw new TypeError("sizeCalculation must be a function");
                        if (w = T(k, b),
                        !c(w))
                            throw new TypeError("sizeCalculation return invalid (expect positive integer)")
                    } else
                        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                return w
            }
            ,
            this.#P = (b, k, w) => {
                if (g[b] = k,
                this.#h) {
                    let T = this.#h - g[b];
                    for (; this.#g > T; )
                        this.#N(!0)
                }
                this.#g += g[b],
                w && (w.entrySize = k,
                w.totalCalculatedSize = this.#g)
            }
        }
        #R = g => {}
        ;
        #P = (g, b, k) => {}
        ;
        #x = (g, b, k, w) => {
            if (k || w)
                throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0
        }
        ;
        *#T({allowStale: g=this.allowStale}={}) {
            if (this.#r)
                for (let b = this.#o; !(!this.#D(b) || ((g || !this.#f(b)) && (yield b),
                b === this.#a)); )
                    b = this.#d[b]
        }
        *#k({allowStale: g=this.allowStale}={}) {
            if (this.#r)
                for (let b = this.#a; !(!this.#D(b) || ((g || !this.#f(b)) && (yield b),
                b === this.#o)); )
                    b = this.#c[b]
        }
        #D(g) {
            return g !== void 0 && this.#i.get(this.#n[g]) === g
        }
        *entries() {
            for (let g of this.#T())
                this.#e[g] !== void 0 && this.#n[g] !== void 0 && !this.#t(this.#e[g]) && (yield[this.#n[g], this.#e[g]])
        }
        *rentries() {
            for (let g of this.#k())
                this.#e[g] !== void 0 && this.#n[g] !== void 0 && !this.#t(this.#e[g]) && (yield[this.#n[g], this.#e[g]])
        }
        *keys() {
            for (let g of this.#T()) {
                let b = this.#n[g];
                b !== void 0 && !this.#t(this.#e[g]) && (yield b)
            }
        }
        *rkeys() {
            for (let g of this.#k()) {
                let b = this.#n[g];
                b !== void 0 && !this.#t(this.#e[g]) && (yield b)
            }
        }
        *values() {
            for (let g of this.#T())
                this.#e[g] !== void 0 && !this.#t(this.#e[g]) && (yield this.#e[g])
        }
        *rvalues() {
            for (let g of this.#k())
                this.#e[g] !== void 0 && !this.#t(this.#e[g]) && (yield this.#e[g])
        }
        [Symbol.iterator]() {
            return this.entries()
        }
        find(g, b={}) {
            for (let k of this.#T()) {
                let w = this.#e[k]
                  , T = this.#t(w) ? w.__staleWhileFetching : w;
                if (T !== void 0 && g(T, this.#n[k], this))
                    return this.get(this.#n[k], b)
            }
        }
        forEach(g, b=this) {
            for (let k of this.#T()) {
                let w = this.#e[k]
                  , T = this.#t(w) ? w.__staleWhileFetching : w;
                T !== void 0 && g.call(b, T, this.#n[k], this)
            }
        }
        rforEach(g, b=this) {
            for (let k of this.#k()) {
                let w = this.#e[k]
                  , T = this.#t(w) ? w.__staleWhileFetching : w;
                T !== void 0 && g.call(b, T, this.#n[k], this)
            }
        }
        purgeStale() {
            let g = !1;
            for (let b of this.#k({
                allowStale: !0
            }))
                this.#f(b) && (this.delete(this.#n[b]),
                g = !0);
            return g
        }
        dump() {
            let g = [];
            for (let b of this.#T({
                allowStale: !0
            })) {
                let k = this.#n[b]
                  , w = this.#e[b]
                  , T = this.#t(w) ? w.__staleWhileFetching : w;
                if (T === void 0 || k === void 0)
                    continue;
                let R = {
                    value: T
                };
                if (this.#_ && this.#v) {
                    R.ttl = this.#_[b];
                    let M = t.now() - this.#v[b];
                    R.start = Math.floor(Date.now() - M)
                }
                this.#w && (R.size = this.#w[b]),
                g.unshift([k, R])
            }
            return g
        }
        load(g) {
            this.clear();
            for (let[b,k] of g) {
                if (k.start) {
                    let w = Date.now() - k.start;
                    k.start = t.now() - w
                }
                this.set(b, k.value, k)
            }
        }
        set(g, b, k={}) {
            if (b === void 0)
                return this.delete(g),
                this;
            let {ttl: w=this.ttl, start: T, noDisposeOnSet: R=this.noDisposeOnSet, sizeCalculation: M=this.sizeCalculation, status: E} = k
              , {noUpdateTTL: A=this.noUpdateTTL} = k
              , U = this.#x(g, b, k.size || 0, M);
            if (this.maxEntrySize && U > this.maxEntrySize)
                return E && (E.set = "miss",
                E.maxEntrySizeExceeded = !0),
                this.delete(g),
                this;
            let W = this.#r === 0 ? void 0 : this.#i.get(g);
            if (W === void 0)
                W = this.#r === 0 ? this.#o : this.#y.length !== 0 ? this.#y.pop() : this.#r === this.#l ? this.#N(!1) : this.#r,
                this.#n[W] = g,
                this.#e[W] = b,
                this.#i.set(g, W),
                this.#c[this.#o] = W,
                this.#d[W] = this.#o,
                this.#o = W,
                this.#r++,
                this.#P(W, U, E),
                E && (E.set = "add"),
                A = !1;
            else {
                this.#A(W);
                let $ = this.#e[W];
                if (b !== $) {
                    if (this.#S && this.#t($)) {
                        $.__abortController.abort(new Error("replaced"));
                        let {__staleWhileFetching: Q} = $;
                        Q !== void 0 && !R && (this.#b && this.#p?.(Q, g, "set"),
                        this.#u && this.#s?.push([Q, g, "set"]))
                    } else
                        R || (this.#b && this.#p?.($, g, "set"),
                        this.#u && this.#s?.push([$, g, "set"]));
                    if (this.#R(W),
                    this.#P(W, U, E),
                    this.#e[W] = b,
                    E) {
                        E.set = "replace";
                        let Q = $ && this.#t($) ? $.__staleWhileFetching : $;
                        Q !== void 0 && (E.oldValue = Q)
                    }
                } else
                    E && (E.set = "update")
            }
            if (w !== 0 && !this.#_ && this.#U(),
            this.#_ && (A || this.#M(W, w, T),
            E && this.#E(E, W)),
            !R && this.#u && this.#s) {
                let $ = this.#s, Q;
                for (; Q = $?.shift(); )
                    this.#m?.(...Q)
            }
            return this
        }
        pop() {
            try {
                for (; this.#r; ) {
                    let g = this.#e[this.#a];
                    if (this.#N(!0),
                    this.#t(g)) {
                        if (g.__staleWhileFetching)
                            return g.__staleWhileFetching
                    } else if (g !== void 0)
                        return g
                }
            } finally {
                if (this.#u && this.#s) {
                    let g = this.#s, b;
                    for (; b = g?.shift(); )
                        this.#m?.(...b)
                }
            }
        }
        #N(g) {
            let b = this.#a
              , k = this.#n[b]
              , w = this.#e[b];
            return this.#S && this.#t(w) ? w.__abortController.abort(new Error("evicted")) : (this.#b || this.#u) && (this.#b && this.#p?.(w, k, "evict"),
            this.#u && this.#s?.push([w, k, "evict"])),
            this.#R(b),
            g && (this.#n[b] = void 0,
            this.#e[b] = void 0,
            this.#y.push(b)),
            this.#r === 1 ? (this.#a = this.#o = 0,
            this.#y.length = 0) : this.#a = this.#c[b],
            this.#i.delete(k),
            this.#r--,
            b
        }
        has(g, b={}) {
            let {updateAgeOnHas: k=this.updateAgeOnHas, status: w} = b
              , T = this.#i.get(g);
            if (T !== void 0) {
                let R = this.#e[T];
                if (this.#t(R) && R.__staleWhileFetching === void 0)
                    return !1;
                if (this.#f(T))
                    w && (w.has = "stale",
                    this.#E(w, T));
                else
                    return k && this.#I(T),
                    w && (w.has = "hit",
                    this.#E(w, T)),
                    !0
            } else
                w && (w.has = "miss");
            return !1
        }
        peek(g, b={}) {
            let {allowStale: k=this.allowStale} = b
              , w = this.#i.get(g);
            if (w !== void 0 && (k || !this.#f(w))) {
                let T = this.#e[w];
                return this.#t(T) ? T.__staleWhileFetching : T
            }
        }
        #C(g, b, k, w) {
            let T = b === void 0 ? void 0 : this.#e[b];
            if (this.#t(T))
                return T;
            let R = new r
              , {signal: M} = k;
            M?.addEventListener("abort", () => R.abort(M.reason), {
                signal: R.signal
            });
            let E = {
                signal: R.signal,
                options: k,
                context: w
            }
              , A = (j, Y=!1) => {
                let {aborted: V} = R.signal
                  , le = k.ignoreFetchAbort && j !== void 0;
                if (k.status && (V && !Y ? (k.status.fetchAborted = !0,
                k.status.fetchError = R.signal.reason,
                le && (k.status.fetchAbortIgnored = !0)) : k.status.fetchResolved = !0),
                V && !le && !Y)
                    return W(R.signal.reason);
                let re = Q;
                return this.#e[b] === Q && (j === void 0 ? re.__staleWhileFetching ? this.#e[b] = re.__staleWhileFetching : this.delete(g) : (k.status && (k.status.fetchUpdated = !0),
                this.set(g, j, E.options))),
                j
            }
              , U = j => (k.status && (k.status.fetchRejected = !0,
            k.status.fetchError = j),
            W(j))
              , W = j => {
                let {aborted: Y} = R.signal
                  , V = Y && k.allowStaleOnFetchAbort
                  , le = V || k.allowStaleOnFetchRejection
                  , re = le || k.noDeleteOnFetchRejection
                  , q = Q;
                if (this.#e[b] === Q && (!re || q.__staleWhileFetching === void 0 ? this.delete(g) : V || (this.#e[b] = q.__staleWhileFetching)),
                le)
                    return k.status && q.__staleWhileFetching !== void 0 && (k.status.returnedStale = !0),
                    q.__staleWhileFetching;
                if (q.__returned === q)
                    throw j
            }
              , $ = (j, Y) => {
                let V = this.#O?.(g, T, E);
                V && V instanceof Promise && V.then(le => j(le === void 0 ? void 0 : le), Y),
                R.signal.addEventListener("abort", () => {
                    (!k.ignoreFetchAbort || k.allowStaleOnFetchAbort) && (j(void 0),
                    k.allowStaleOnFetchAbort && (j = le => A(le, !0)))
                }
                )
            }
            ;
            k.status && (k.status.fetchDispatched = !0);
            let Q = new Promise($).then(A, U)
              , O = Object.assign(Q, {
                __abortController: R,
                __staleWhileFetching: T,
                __returned: void 0
            });
            return b === void 0 ? (this.set(g, O, {
                ...E.options,
                status: void 0
            }),
            b = this.#i.get(g)) : this.#e[b] = O,
            O
        }
        #t(g) {
            if (!this.#S)
                return !1;
            let b = g;
            return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof r
        }
        async fetch(g, b={}) {
            let {allowStale: k=this.allowStale, updateAgeOnGet: w=this.updateAgeOnGet, noDeleteOnStaleGet: T=this.noDeleteOnStaleGet, ttl: R=this.ttl, noDisposeOnSet: M=this.noDisposeOnSet, size: E=0, sizeCalculation: A=this.sizeCalculation, noUpdateTTL: U=this.noUpdateTTL, noDeleteOnFetchRejection: W=this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: $=this.allowStaleOnFetchRejection, ignoreFetchAbort: Q=this.ignoreFetchAbort, allowStaleOnFetchAbort: O=this.allowStaleOnFetchAbort, context: j, forceRefresh: Y=!1, status: V, signal: le} = b;
            if (!this.#S)
                return V && (V.fetch = "get"),
                this.get(g, {
                    allowStale: k,
                    updateAgeOnGet: w,
                    noDeleteOnStaleGet: T,
                    status: V
                });
            let re = {
                allowStale: k,
                updateAgeOnGet: w,
                noDeleteOnStaleGet: T,
                ttl: R,
                noDisposeOnSet: M,
                size: E,
                sizeCalculation: A,
                noUpdateTTL: U,
                noDeleteOnFetchRejection: W,
                allowStaleOnFetchRejection: $,
                allowStaleOnFetchAbort: O,
                ignoreFetchAbort: Q,
                status: V,
                signal: le
            }
              , q = this.#i.get(g);
            if (q === void 0) {
                V && (V.fetch = "miss");
                let pe = this.#C(g, q, re, j);
                return pe.__returned = pe
            } else {
                let pe = this.#e[q];
                if (this.#t(pe)) {
                    let H = k && pe.__staleWhileFetching !== void 0;
                    return V && (V.fetch = "inflight",
                    H && (V.returnedStale = !0)),
                    H ? pe.__staleWhileFetching : pe.__returned = pe
                }
                let te = this.#f(q);
                if (!Y && !te)
                    return V && (V.fetch = "hit"),
                    this.#A(q),
                    w && this.#I(q),
                    V && this.#E(V, q),
                    pe;
                let ge = this.#C(g, q, re, j)
                  , S = ge.__staleWhileFetching !== void 0 && k;
                return V && (V.fetch = te ? "stale" : "refresh",
                S && te && (V.returnedStale = !0)),
                S ? ge.__staleWhileFetching : ge.__returned = ge
            }
        }
        get(g, b={}) {
            let {allowStale: k=this.allowStale, updateAgeOnGet: w=this.updateAgeOnGet, noDeleteOnStaleGet: T=this.noDeleteOnStaleGet, status: R} = b
              , M = this.#i.get(g);
            if (M !== void 0) {
                let E = this.#e[M]
                  , A = this.#t(E);
                return R && this.#E(R, M),
                this.#f(M) ? (R && (R.get = "stale"),
                A ? (R && k && E.__staleWhileFetching !== void 0 && (R.returnedStale = !0),
                k ? E.__staleWhileFetching : void 0) : (T || this.delete(g),
                R && k && (R.returnedStale = !0),
                k ? E : void 0)) : (R && (R.get = "hit"),
                A ? E.__staleWhileFetching : (this.#A(M),
                w && this.#I(M),
                E))
            } else
                R && (R.get = "miss")
        }
        #L(g, b) {
            this.#d[b] = g,
            this.#c[g] = b
        }
        #A(g) {
            g !== this.#o && (g === this.#a ? this.#a = this.#c[g] : this.#L(this.#d[g], this.#c[g]),
            this.#L(this.#o, g),
            this.#o = g)
        }
        delete(g) {
            let b = !1;
            if (this.#r !== 0) {
                let k = this.#i.get(g);
                if (k !== void 0)
                    if (b = !0,
                    this.#r === 1)
                        this.clear();
                    else {
                        this.#R(k);
                        let w = this.#e[k];
                        this.#t(w) ? w.__abortController.abort(new Error("deleted")) : (this.#b || this.#u) && (this.#b && this.#p?.(w, g, "delete"),
                        this.#u && this.#s?.push([w, g, "delete"])),
                        this.#i.delete(g),
                        this.#n[k] = void 0,
                        this.#e[k] = void 0,
                        k === this.#o ? this.#o = this.#d[k] : k === this.#a ? this.#a = this.#c[k] : (this.#c[this.#d[k]] = this.#c[k],
                        this.#d[this.#c[k]] = this.#d[k]),
                        this.#r--,
                        this.#y.push(k)
                    }
            }
            if (this.#u && this.#s?.length) {
                let k = this.#s, w;
                for (; w = k?.shift(); )
                    this.#m?.(...w)
            }
            return b
        }
        clear() {
            for (let g of this.#k({
                allowStale: !0
            })) {
                let b = this.#e[g];
                if (this.#t(b))
                    b.__abortController.abort(new Error("deleted"));
                else {
                    let k = this.#n[g];
                    this.#b && this.#p?.(b, k, "delete"),
                    this.#u && this.#s?.push([b, k, "delete"])
                }
            }
            if (this.#i.clear(),
            this.#e.fill(void 0),
            this.#n.fill(void 0),
            this.#_ && this.#v && (this.#_.fill(0),
            this.#v.fill(0)),
            this.#w && this.#w.fill(0),
            this.#a = 0,
            this.#o = 0,
            this.#y.length = 0,
            this.#g = 0,
            this.#r = 0,
            this.#u && this.#s) {
                let g = this.#s, b;
                for (; b = g?.shift(); )
                    this.#m?.(...b)
            }
        }
    }
    ;
    e.LRUCache = y
}
), St = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.ContainerIterator = e.Container = e.Base = void 0;
    var t = class {
        constructor(s=0) {
            this.iteratorType = s
        }
        equals(s) {
            return this.o === s.o
        }
    }
    ;
    e.ContainerIterator = t;
    var n = class {
        constructor() {
            this.i = 0
        }
        get length() {
            return this.i
        }
        size() {
            return this.i
        }
        empty() {
            return this.i === 0
        }
    }
    ;
    e.Base = n;
    var i = class extends n {
    }
    ;
    e.Container = i
}
), Ju = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = St()
      , n = class extends t.Base {
        constructor(s=[]) {
            super(),
            this.S = [];
            let r = this;
            s.forEach(function(o) {
                r.push(o)
            })
        }
        clear() {
            this.i = 0,
            this.S = []
        }
        push(s) {
            return this.S.push(s),
            this.i += 1,
            this.i
        }
        pop() {
            if (this.i !== 0)
                return this.i -= 1,
                this.S.pop()
        }
        top() {
            return this.S[this.i - 1]
        }
    }
      , i = n;
    e.default = i
}
), Yu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = St()
      , n = class extends t.Base {
        constructor(s=[]) {
            super(),
            this.j = 0,
            this.q = [];
            let r = this;
            s.forEach(function(o) {
                r.push(o)
            })
        }
        clear() {
            this.q = [],
            this.i = this.j = 0
        }
        push(s) {
            let r = this.q.length;
            if (this.j / r > .5 && this.j + this.i >= r && r > 4096) {
                let o = this.i;
                for (let a = 0; a < o; ++a)
                    this.q[a] = this.q[this.j + a];
                this.j = 0,
                this.q[this.i] = s
            } else
                this.q[this.j + this.i] = s;
            return ++this.i
        }
        pop() {
            if (this.i === 0)
                return;
            let s = this.q[this.j++];
            return this.i -= 1,
            s
        }
        front() {
            if (this.i !== 0)
                return this.q[this.j]
        }
    }
      , i = n;
    e.default = i
}
), Qu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = St()
      , n = class extends t.Base {
        constructor(s=[], r=function(a, l) {
            return a > l ? -1 : a < l ? 1 : 0
        }
        , o=!0) {
            if (super(),
            this.v = r,
            Array.isArray(s))
                this.C = o ? [...s] : s;
            else {
                this.C = [];
                let l = this;
                s.forEach(function(c) {
                    l.C.push(c)
                })
            }
            this.i = this.C.length;
            let a = this.i >> 1;
            for (let l = this.i - 1 >> 1; l >= 0; --l)
                this.k(l, a)
        }
        m(s) {
            let r = this.C[s];
            for (; s > 0; ) {
                let o = s - 1 >> 1
                  , a = this.C[o];
                if (this.v(a, r) <= 0)
                    break;
                this.C[s] = a,
                s = o
            }
            this.C[s] = r
        }
        k(s, r) {
            let o = this.C[s];
            for (; s < r; ) {
                let a = s << 1 | 1
                  , l = a + 1
                  , c = this.C[a];
                if (l < this.i && this.v(c, this.C[l]) > 0 && (a = l,
                c = this.C[l]),
                this.v(c, o) >= 0)
                    break;
                this.C[s] = c,
                s = a
            }
            this.C[s] = o
        }
        clear() {
            this.i = 0,
            this.C.length = 0
        }
        push(s) {
            this.C.push(s),
            this.m(this.i),
            this.i += 1
        }
        pop() {
            if (this.i === 0)
                return;
            let s = this.C[0]
              , r = this.C.pop();
            return this.i -= 1,
            this.i && (this.C[0] = r,
            this.k(0, this.i >> 1)),
            s
        }
        top() {
            return this.C[0]
        }
        find(s) {
            return this.C.indexOf(s) >= 0
        }
        remove(s) {
            let r = this.C.indexOf(s);
            return r < 0 ? !1 : (r === 0 ? this.pop() : r === this.i - 1 ? (this.C.pop(),
            this.i -= 1) : (this.C.splice(r, 1, this.C.pop()),
            this.i -= 1,
            this.m(r),
            this.k(r, this.i >> 1)),
            !0)
        }
        updateItem(s) {
            let r = this.C.indexOf(s);
            return r < 0 ? !1 : (this.m(r),
            this.k(r, this.i >> 1),
            !0)
        }
        toArray() {
            return [...this.C]
        }
    }
      , i = n;
    e.default = i
}
), xo = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = St()
      , n = class extends t.Container {
    }
      , i = n;
    e.default = i
}
), It = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.throwIteratorAccessError = t;
    function t() {
        throw new RangeError("Iterator access denied!")
    }
}
), tl = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.RandomIterator = void 0;
    var t = St()
      , n = It()
      , i = class extends t.ContainerIterator {
        constructor(s, r) {
            super(r),
            this.o = s,
            this.iteratorType === 0 ? (this.pre = function() {
                return this.o === 0 && (0,
                n.throwIteratorAccessError)(),
                this.o -= 1,
                this
            }
            ,
            this.next = function() {
                return this.o === this.container.size() && (0,
                n.throwIteratorAccessError)(),
                this.o += 1,
                this
            }
            ) : (this.pre = function() {
                return this.o === this.container.size() - 1 && (0,
                n.throwIteratorAccessError)(),
                this.o += 1,
                this
            }
            ,
            this.next = function() {
                return this.o === -1 && (0,
                n.throwIteratorAccessError)(),
                this.o -= 1,
                this
            }
            )
        }
        get pointer() {
            return this.container.getElementByPos(this.o)
        }
        set pointer(s) {
            this.container.setElementByPos(this.o, s)
        }
    }
    ;
    e.RandomIterator = i
}
), Xu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = i(xo())
      , n = tl();
    function i(a) {
        return a && a.t ? a : {
            default: a
        }
    }
    var s = class nl extends n.RandomIterator {
        constructor(l, c, u) {
            super(l, u),
            this.container = c
        }
        copy() {
            return new nl(this.o,this.container,this.iteratorType)
        }
    }
      , r = class extends t.default {
        constructor(a=[], l=!0) {
            if (super(),
            Array.isArray(a))
                this.J = l ? [...a] : a,
                this.i = a.length;
            else {
                this.J = [];
                let c = this;
                a.forEach(function(u) {
                    c.pushBack(u)
                })
            }
        }
        clear() {
            this.i = 0,
            this.J.length = 0
        }
        begin() {
            return new s(0,this)
        }
        end() {
            return new s(this.i,this)
        }
        rBegin() {
            return new s(this.i - 1,this,1)
        }
        rEnd() {
            return new s(-1,this,1)
        }
        front() {
            return this.J[0]
        }
        back() {
            return this.J[this.i - 1]
        }
        getElementByPos(a) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            return this.J[a]
        }
        eraseElementByPos(a) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            return this.J.splice(a, 1),
            this.i -= 1,
            this.i
        }
        eraseElementByValue(a) {
            let l = 0;
            for (let c = 0; c < this.i; ++c)
                this.J[c] !== a && (this.J[l++] = this.J[c]);
            return this.i = this.J.length = l,
            this.i
        }
        eraseElementByIterator(a) {
            let l = a.o;
            return a = a.next(),
            this.eraseElementByPos(l),
            a
        }
        pushBack(a) {
            return this.J.push(a),
            this.i += 1,
            this.i
        }
        popBack() {
            if (this.i !== 0)
                return this.i -= 1,
                this.J.pop()
        }
        setElementByPos(a, l) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            this.J[a] = l
        }
        insert(a, l, c=1) {
            if (a < 0 || a > this.i)
                throw new RangeError;
            return this.J.splice(a, 0, ...new Array(c).fill(l)),
            this.i += c,
            this.i
        }
        find(a) {
            for (let l = 0; l < this.i; ++l)
                if (this.J[l] === a)
                    return new s(l,this);
            return this.end()
        }
        reverse() {
            this.J.reverse()
        }
        unique() {
            let a = 1;
            for (let l = 1; l < this.i; ++l)
                this.J[l] !== this.J[l - 1] && (this.J[a++] = this.J[l]);
            return this.i = this.J.length = a,
            this.i
        }
        sort(a) {
            this.J.sort(a)
        }
        forEach(a) {
            for (let l = 0; l < this.i; ++l)
                a(this.J[l], l, this)
        }
        [Symbol.iterator]() {
            return function*() {
                yield*this.J
            }
            .bind(this)()
        }
    }
      , o = r;
    e.default = o
}
), Zu = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = s(xo())
      , n = St()
      , i = It();
    function s(l) {
        return l && l.t ? l : {
            default: l
        }
    }
    var r = class rl extends n.ContainerIterator {
        constructor(c, u, d, m) {
            super(m),
            this.o = c,
            this.h = u,
            this.container = d,
            this.iteratorType === 0 ? (this.pre = function() {
                return this.o.L === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.L,
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.B,
                this
            }
            ) : (this.pre = function() {
                return this.o.B === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.B,
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.L,
                this
            }
            )
        }
        get pointer() {
            return this.o === this.h && (0,
            i.throwIteratorAccessError)(),
            this.o.l
        }
        set pointer(c) {
            this.o === this.h && (0,
            i.throwIteratorAccessError)(),
            this.o.l = c
        }
        copy() {
            return new rl(this.o,this.h,this.container,this.iteratorType)
        }
    }
      , o = class extends t.default {
        constructor(l=[]) {
            super(),
            this.h = {},
            this.p = this._ = this.h.L = this.h.B = this.h;
            let c = this;
            l.forEach(function(u) {
                c.pushBack(u)
            })
        }
        V(l) {
            let {L: c, B: u} = l;
            c.B = u,
            u.L = c,
            l === this.p && (this.p = u),
            l === this._ && (this._ = c),
            this.i -= 1
        }
        G(l, c) {
            let u = c.B
              , d = {
                l,
                L: c,
                B: u
            };
            c.B = d,
            u.L = d,
            c === this.h && (this.p = d),
            u === this.h && (this._ = d),
            this.i += 1
        }
        clear() {
            this.i = 0,
            this.p = this._ = this.h.L = this.h.B = this.h
        }
        begin() {
            return new r(this.p,this.h,this)
        }
        end() {
            return new r(this.h,this.h,this)
        }
        rBegin() {
            return new r(this._,this.h,this,1)
        }
        rEnd() {
            return new r(this.h,this.h,this,1)
        }
        front() {
            return this.p.l
        }
        back() {
            return this._.l
        }
        getElementByPos(l) {
            if (l < 0 || l > this.i - 1)
                throw new RangeError;
            let c = this.p;
            for (; l--; )
                c = c.B;
            return c.l
        }
        eraseElementByPos(l) {
            if (l < 0 || l > this.i - 1)
                throw new RangeError;
            let c = this.p;
            for (; l--; )
                c = c.B;
            return this.V(c),
            this.i
        }
        eraseElementByValue(l) {
            let c = this.p;
            for (; c !== this.h; )
                c.l === l && this.V(c),
                c = c.B;
            return this.i
        }
        eraseElementByIterator(l) {
            let c = l.o;
            return c === this.h && (0,
            i.throwIteratorAccessError)(),
            l = l.next(),
            this.V(c),
            l
        }
        pushBack(l) {
            return this.G(l, this._),
            this.i
        }
        popBack() {
            if (this.i === 0)
                return;
            let l = this._.l;
            return this.V(this._),
            l
        }
        pushFront(l) {
            return this.G(l, this.h),
            this.i
        }
        popFront() {
            if (this.i === 0)
                return;
            let l = this.p.l;
            return this.V(this.p),
            l
        }
        setElementByPos(l, c) {
            if (l < 0 || l > this.i - 1)
                throw new RangeError;
            let u = this.p;
            for (; l--; )
                u = u.B;
            u.l = c
        }
        insert(l, c, u=1) {
            if (l < 0 || l > this.i)
                throw new RangeError;
            if (u <= 0)
                return this.i;
            if (l === 0)
                for (; u--; )
                    this.pushFront(c);
            else if (l === this.i)
                for (; u--; )
                    this.pushBack(c);
            else {
                let d = this.p;
                for (let y = 1; y < l; ++y)
                    d = d.B;
                let m = d.B;
                for (this.i += u; u--; )
                    d.B = {
                        l: c,
                        L: d
                    },
                    d.B.L = d,
                    d = d.B;
                d.B = m,
                m.L = d
            }
            return this.i
        }
        find(l) {
            let c = this.p;
            for (; c !== this.h; ) {
                if (c.l === l)
                    return new r(c,this.h,this);
                c = c.B
            }
            return this.end()
        }
        reverse() {
            if (this.i <= 1)
                return;
            let l = this.p
              , c = this._
              , u = 0;
            for (; u << 1 < this.i; ) {
                let d = l.l;
                l.l = c.l,
                c.l = d,
                l = l.B,
                c = c.L,
                u += 1
            }
        }
        unique() {
            if (this.i <= 1)
                return this.i;
            let l = this.p;
            for (; l !== this.h; ) {
                let c = l;
                for (; c.B !== this.h && c.l === c.B.l; )
                    c = c.B,
                    this.i -= 1;
                l.B = c.B,
                l.B.L = l,
                l = l.B
            }
            return this.i
        }
        sort(l) {
            if (this.i <= 1)
                return;
            let c = [];
            this.forEach(function(d) {
                c.push(d)
            }),
            c.sort(l);
            let u = this.p;
            c.forEach(function(d) {
                u.l = d,
                u = u.B
            })
        }
        merge(l) {
            let c = this;
            if (this.i === 0)
                l.forEach(function(u) {
                    c.pushBack(u)
                });
            else {
                let u = this.p;
                l.forEach(function(d) {
                    for (; u !== c.h && u.l <= d; )
                        u = u.B;
                    c.G(d, u.L)
                })
            }
            return this.i
        }
        forEach(l) {
            let c = this.p
              , u = 0;
            for (; c !== this.h; )
                l(c.l, u++, this),
                c = c.B
        }
        [Symbol.iterator]() {
            return function*() {
                if (this.i === 0)
                    return;
                let l = this.p;
                for (; l !== this.h; )
                    yield l.l,
                    l = l.B
            }
            .bind(this)()
        }
    }
      , a = o;
    e.default = a
}
), eh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = i(xo())
      , n = tl();
    function i(a) {
        return a && a.t ? a : {
            default: a
        }
    }
    var s = class il extends n.RandomIterator {
        constructor(l, c, u) {
            super(l, u),
            this.container = c
        }
        copy() {
            return new il(this.o,this.container,this.iteratorType)
        }
    }
      , r = class extends t.default {
        constructor(a=[], l=4096) {
            super(),
            this.j = 0,
            this.D = 0,
            this.R = 0,
            this.N = 0,
            this.P = 0,
            this.A = [];
            let c = ( () => {
                if (typeof a.length == "number")
                    return a.length;
                if (typeof a.size == "number")
                    return a.size;
                if (typeof a.size == "function")
                    return a.size();
                throw new TypeError("Cannot get the length or size of the container")
            }
            )();
            this.F = l,
            this.P = Math.max(Math.ceil(c / this.F), 1);
            for (let m = 0; m < this.P; ++m)
                this.A.push(new Array(this.F));
            let u = Math.ceil(c / this.F);
            this.j = this.R = (this.P >> 1) - (u >> 1),
            this.D = this.N = this.F - c % this.F >> 1;
            let d = this;
            a.forEach(function(m) {
                d.pushBack(m)
            })
        }
        T() {
            let a = []
              , l = Math.max(this.P >> 1, 1);
            for (let c = 0; c < l; ++c)
                a[c] = new Array(this.F);
            for (let c = this.j; c < this.P; ++c)
                a[a.length] = this.A[c];
            for (let c = 0; c < this.R; ++c)
                a[a.length] = this.A[c];
            a[a.length] = [...this.A[this.R]],
            this.j = l,
            this.R = a.length - 1;
            for (let c = 0; c < l; ++c)
                a[a.length] = new Array(this.F);
            this.A = a,
            this.P = a.length
        }
        O(a) {
            let l = this.D + a + 1
              , c = l % this.F
              , u = c - 1
              , d = this.j + (l - c) / this.F;
            return c === 0 && (d -= 1),
            d %= this.P,
            u < 0 && (u += this.F),
            {
                curNodeBucketIndex: d,
                curNodePointerIndex: u
            }
        }
        clear() {
            this.A = [new Array(this.F)],
            this.P = 1,
            this.j = this.R = this.i = 0,
            this.D = this.N = this.F >> 1
        }
        begin() {
            return new s(0,this)
        }
        end() {
            return new s(this.i,this)
        }
        rBegin() {
            return new s(this.i - 1,this,1)
        }
        rEnd() {
            return new s(-1,this,1)
        }
        front() {
            if (this.i !== 0)
                return this.A[this.j][this.D]
        }
        back() {
            if (this.i !== 0)
                return this.A[this.R][this.N]
        }
        pushBack(a) {
            return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1,
            this.N = 0) : (this.R = 0,
            this.N = 0),
            this.R === this.j && this.N === this.D && this.T()),
            this.i += 1,
            this.A[this.R][this.N] = a,
            this.i
        }
        popBack() {
            if (this.i === 0)
                return;
            let a = this.A[this.R][this.N];
            return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1,
            this.N = this.F - 1) : (this.R = this.P - 1,
            this.N = this.F - 1)),
            this.i -= 1,
            a
        }
        pushFront(a) {
            return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1,
            this.D = this.F - 1) : (this.j = this.P - 1,
            this.D = this.F - 1),
            this.j === this.R && this.D === this.N && this.T()),
            this.i += 1,
            this.A[this.j][this.D] = a,
            this.i
        }
        popFront() {
            if (this.i === 0)
                return;
            let a = this.A[this.j][this.D];
            return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1,
            this.D = 0) : (this.j = 0,
            this.D = 0)),
            this.i -= 1,
            a
        }
        getElementByPos(a) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            let {curNodeBucketIndex: l, curNodePointerIndex: c} = this.O(a);
            return this.A[l][c]
        }
        setElementByPos(a, l) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            let {curNodeBucketIndex: c, curNodePointerIndex: u} = this.O(a);
            this.A[c][u] = l
        }
        insert(a, l, c=1) {
            if (a < 0 || a > this.i)
                throw new RangeError;
            if (a === 0)
                for (; c--; )
                    this.pushFront(l);
            else if (a === this.i)
                for (; c--; )
                    this.pushBack(l);
            else {
                let u = [];
                for (let d = a; d < this.i; ++d)
                    u.push(this.getElementByPos(d));
                this.cut(a - 1);
                for (let d = 0; d < c; ++d)
                    this.pushBack(l);
                for (let d = 0; d < u.length; ++d)
                    this.pushBack(u[d])
            }
            return this.i
        }
        cut(a) {
            if (a < 0)
                return this.clear(),
                0;
            let {curNodeBucketIndex: l, curNodePointerIndex: c} = this.O(a);
            return this.R = l,
            this.N = c,
            this.i = a + 1,
            this.i
        }
        eraseElementByPos(a) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            if (a === 0)
                this.popFront();
            else if (a === this.i - 1)
                this.popBack();
            else {
                let l = [];
                for (let u = a + 1; u < this.i; ++u)
                    l.push(this.getElementByPos(u));
                this.cut(a),
                this.popBack();
                let c = this;
                l.forEach(function(u) {
                    c.pushBack(u)
                })
            }
            return this.i
        }
        eraseElementByValue(a) {
            if (this.i === 0)
                return 0;
            let l = [];
            for (let u = 0; u < this.i; ++u) {
                let d = this.getElementByPos(u);
                d !== a && l.push(d)
            }
            let c = l.length;
            for (let u = 0; u < c; ++u)
                this.setElementByPos(u, l[u]);
            return this.cut(c - 1)
        }
        eraseElementByIterator(a) {
            let l = a.o;
            return this.eraseElementByPos(l),
            a = a.next(),
            a
        }
        find(a) {
            for (let l = 0; l < this.i; ++l)
                if (this.getElementByPos(l) === a)
                    return new s(l,this);
            return this.end()
        }
        reverse() {
            let a = 0
              , l = this.i - 1;
            for (; a < l; ) {
                let c = this.getElementByPos(a);
                this.setElementByPos(a, this.getElementByPos(l)),
                this.setElementByPos(l, c),
                a += 1,
                l -= 1
            }
        }
        unique() {
            if (this.i <= 1)
                return this.i;
            let a = 1
              , l = this.getElementByPos(0);
            for (let c = 1; c < this.i; ++c) {
                let u = this.getElementByPos(c);
                u !== l && (l = u,
                this.setElementByPos(a++, u))
            }
            for (; this.i > a; )
                this.popBack();
            return this.i
        }
        sort(a) {
            let l = [];
            for (let c = 0; c < this.i; ++c)
                l.push(this.getElementByPos(c));
            l.sort(a);
            for (let c = 0; c < this.i; ++c)
                this.setElementByPos(c, l[c])
        }
        shrinkToFit() {
            if (this.i === 0)
                return;
            let a = [];
            this.forEach(function(l) {
                a.push(l)
            }),
            this.P = Math.max(Math.ceil(this.i / this.F), 1),
            this.i = this.j = this.R = this.D = this.N = 0,
            this.A = [];
            for (let l = 0; l < this.P; ++l)
                this.A.push(new Array(this.F));
            for (let l = 0; l < a.length; ++l)
                this.pushBack(a[l])
        }
        forEach(a) {
            for (let l = 0; l < this.i; ++l)
                a(this.getElementByPos(l), l, this)
        }
        [Symbol.iterator]() {
            return function*() {
                for (let a = 0; a < this.i; ++a)
                    yield this.getElementByPos(a)
            }
            .bind(this)()
        }
    }
      , o = r;
    e.default = o
}
), th = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.TreeNodeEnableIndex = e.TreeNode = void 0;
    var t = class {
        constructor(i, s) {
            this.ee = 1,
            this.u = void 0,
            this.l = void 0,
            this.U = void 0,
            this.W = void 0,
            this.tt = void 0,
            this.u = i,
            this.l = s
        }
        L() {
            let i = this;
            if (i.ee === 1 && i.tt.tt === i)
                i = i.W;
            else if (i.U)
                for (i = i.U; i.W; )
                    i = i.W;
            else {
                let s = i.tt;
                for (; s.U === i; )
                    i = s,
                    s = i.tt;
                i = s
            }
            return i
        }
        B() {
            let i = this;
            if (i.W) {
                for (i = i.W; i.U; )
                    i = i.U;
                return i
            } else {
                let s = i.tt;
                for (; s.W === i; )
                    i = s,
                    s = i.tt;
                return i.W !== s ? s : i
            }
        }
        te() {
            let i = this.tt
              , s = this.W
              , r = s.U;
            return i.tt === this ? i.tt = s : i.U === this ? i.U = s : i.W = s,
            s.tt = i,
            s.U = this,
            this.tt = s,
            this.W = r,
            r && (r.tt = this),
            s
        }
        se() {
            let i = this.tt
              , s = this.U
              , r = s.W;
            return i.tt === this ? i.tt = s : i.U === this ? i.U = s : i.W = s,
            s.tt = i,
            s.W = this,
            this.tt = s,
            this.U = r,
            r && (r.tt = this),
            s
        }
    }
    ;
    e.TreeNode = t;
    var n = class extends t {
        constructor() {
            super(...arguments),
            this.rt = 1
        }
        te() {
            let i = super.te();
            return this.ie(),
            i.ie(),
            i
        }
        se() {
            let i = super.se();
            return this.ie(),
            i.ie(),
            i
        }
        ie() {
            this.rt = 1,
            this.U && (this.rt += this.U.rt),
            this.W && (this.rt += this.W.rt)
        }
    }
    ;
    e.TreeNodeEnableIndex = n
}
), ol = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = th()
      , n = St()
      , i = It()
      , s = class extends n.Container {
        constructor(o=function(l, c) {
            return l < c ? -1 : l > c ? 1 : 0
        }
        , a=!1) {
            super(),
            this.Y = void 0,
            this.v = o,
            a ? (this.re = t.TreeNodeEnableIndex,
            this.M = function(l, c, u) {
                let d = this.ne(l, c, u);
                if (d) {
                    let m = d.tt;
                    for (; m !== this.h; )
                        m.rt += 1,
                        m = m.tt;
                    let y = this.he(d);
                    if (y) {
                        let {parentNode: _, grandParent: g, curNode: b} = y;
                        _.ie(),
                        g.ie(),
                        b.ie()
                    }
                }
                return this.i
            }
            ,
            this.V = function(l) {
                let c = this.fe(l);
                for (; c !== this.h; )
                    c.rt -= 1,
                    c = c.tt
            }
            ) : (this.re = t.TreeNode,
            this.M = function(l, c, u) {
                let d = this.ne(l, c, u);
                return d && this.he(d),
                this.i
            }
            ,
            this.V = this.fe),
            this.h = new this.re
        }
        X(o, a) {
            let l = this.h;
            for (; o; ) {
                let c = this.v(o.u, a);
                if (c < 0)
                    o = o.W;
                else if (c > 0)
                    l = o,
                    o = o.U;
                else
                    return o
            }
            return l
        }
        Z(o, a) {
            let l = this.h;
            for (; o; )
                this.v(o.u, a) <= 0 ? o = o.W : (l = o,
                o = o.U);
            return l
        }
        $(o, a) {
            let l = this.h;
            for (; o; ) {
                let c = this.v(o.u, a);
                if (c < 0)
                    l = o,
                    o = o.W;
                else if (c > 0)
                    o = o.U;
                else
                    return o
            }
            return l
        }
        rr(o, a) {
            let l = this.h;
            for (; o; )
                this.v(o.u, a) < 0 ? (l = o,
                o = o.W) : o = o.U;
            return l
        }
        ue(o) {
            for (; ; ) {
                let a = o.tt;
                if (a === this.h)
                    return;
                if (o.ee === 1) {
                    o.ee = 0;
                    return
                }
                if (o === a.U) {
                    let l = a.W;
                    if (l.ee === 1)
                        l.ee = 0,
                        a.ee = 1,
                        a === this.Y ? this.Y = a.te() : a.te();
                    else if (l.W && l.W.ee === 1) {
                        l.ee = a.ee,
                        a.ee = 0,
                        l.W.ee = 0,
                        a === this.Y ? this.Y = a.te() : a.te();
                        return
                    } else
                        l.U && l.U.ee === 1 ? (l.ee = 1,
                        l.U.ee = 0,
                        l.se()) : (l.ee = 1,
                        o = a)
                } else {
                    let l = a.U;
                    if (l.ee === 1)
                        l.ee = 0,
                        a.ee = 1,
                        a === this.Y ? this.Y = a.se() : a.se();
                    else if (l.U && l.U.ee === 1) {
                        l.ee = a.ee,
                        a.ee = 0,
                        l.U.ee = 0,
                        a === this.Y ? this.Y = a.se() : a.se();
                        return
                    } else
                        l.W && l.W.ee === 1 ? (l.ee = 1,
                        l.W.ee = 0,
                        l.te()) : (l.ee = 1,
                        o = a)
                }
            }
        }
        fe(o) {
            if (this.i === 1)
                return this.clear(),
                this.h;
            let a = o;
            for (; a.U || a.W; ) {
                if (a.W)
                    for (a = a.W; a.U; )
                        a = a.U;
                else
                    a = a.U;
                [o.u,a.u] = [a.u, o.u],
                [o.l,a.l] = [a.l, o.l],
                o = a
            }
            this.h.U === a ? this.h.U = a.tt : this.h.W === a && (this.h.W = a.tt),
            this.ue(a);
            let l = a.tt;
            return a === l.U ? l.U = void 0 : l.W = void 0,
            this.i -= 1,
            this.Y.ee = 0,
            l
        }
        oe(o, a) {
            return o === void 0 ? !1 : this.oe(o.U, a) || a(o) ? !0 : this.oe(o.W, a)
        }
        he(o) {
            for (; ; ) {
                let a = o.tt;
                if (a.ee === 0)
                    return;
                let l = a.tt;
                if (a === l.U) {
                    let c = l.W;
                    if (c && c.ee === 1) {
                        if (c.ee = a.ee = 0,
                        l === this.Y)
                            return;
                        l.ee = 1,
                        o = l;
                        continue
                    } else if (o === a.W) {
                        if (o.ee = 0,
                        o.U && (o.U.tt = a),
                        o.W && (o.W.tt = l),
                        a.W = o.U,
                        l.U = o.W,
                        o.U = a,
                        o.W = l,
                        l === this.Y)
                            this.Y = o,
                            this.h.tt = o;
                        else {
                            let u = l.tt;
                            u.U === l ? u.U = o : u.W = o
                        }
                        return o.tt = l.tt,
                        a.tt = o,
                        l.tt = o,
                        l.ee = 1,
                        {
                            parentNode: a,
                            grandParent: l,
                            curNode: o
                        }
                    } else
                        a.ee = 0,
                        l === this.Y ? this.Y = l.se() : l.se(),
                        l.ee = 1
                } else {
                    let c = l.U;
                    if (c && c.ee === 1) {
                        if (c.ee = a.ee = 0,
                        l === this.Y)
                            return;
                        l.ee = 1,
                        o = l;
                        continue
                    } else if (o === a.U) {
                        if (o.ee = 0,
                        o.U && (o.U.tt = l),
                        o.W && (o.W.tt = a),
                        l.W = o.U,
                        a.U = o.W,
                        o.U = l,
                        o.W = a,
                        l === this.Y)
                            this.Y = o,
                            this.h.tt = o;
                        else {
                            let u = l.tt;
                            u.U === l ? u.U = o : u.W = o
                        }
                        return o.tt = l.tt,
                        a.tt = o,
                        l.tt = o,
                        l.ee = 1,
                        {
                            parentNode: a,
                            grandParent: l,
                            curNode: o
                        }
                    } else
                        a.ee = 0,
                        l === this.Y ? this.Y = l.te() : l.te(),
                        l.ee = 1
                }
                return
            }
        }
        ne(o, a, l) {
            if (this.Y === void 0) {
                this.i += 1,
                this.Y = new this.re(o,a),
                this.Y.ee = 0,
                this.Y.tt = this.h,
                this.h.tt = this.Y,
                this.h.U = this.Y,
                this.h.W = this.Y;
                return
            }
            let c, u = this.h.U, d = this.v(u.u, o);
            if (d === 0) {
                u.l = a;
                return
            } else if (d > 0)
                u.U = new this.re(o,a),
                u.U.tt = u,
                c = u.U,
                this.h.U = c;
            else {
                let m = this.h.W
                  , y = this.v(m.u, o);
                if (y === 0) {
                    m.l = a;
                    return
                } else if (y < 0)
                    m.W = new this.re(o,a),
                    m.W.tt = m,
                    c = m.W,
                    this.h.W = c;
                else {
                    if (l !== void 0) {
                        let _ = l.o;
                        if (_ !== this.h) {
                            let g = this.v(_.u, o);
                            if (g === 0) {
                                _.l = a;
                                return
                            } else if (g > 0) {
                                let b = _.L()
                                  , k = this.v(b.u, o);
                                if (k === 0) {
                                    b.l = a;
                                    return
                                } else
                                    k < 0 && (c = new this.re(o,a),
                                    b.W === void 0 ? (b.W = c,
                                    c.tt = b) : (_.U = c,
                                    c.tt = _))
                            }
                        }
                    }
                    if (c === void 0)
                        for (c = this.Y; ; ) {
                            let _ = this.v(c.u, o);
                            if (_ > 0) {
                                if (c.U === void 0) {
                                    c.U = new this.re(o,a),
                                    c.U.tt = c,
                                    c = c.U;
                                    break
                                }
                                c = c.U
                            } else if (_ < 0) {
                                if (c.W === void 0) {
                                    c.W = new this.re(o,a),
                                    c.W.tt = c,
                                    c = c.W;
                                    break
                                }
                                c = c.W
                            } else {
                                c.l = a;
                                return
                            }
                        }
                }
            }
            return this.i += 1,
            c
        }
        I(o, a) {
            for (; o; ) {
                let l = this.v(o.u, a);
                if (l < 0)
                    o = o.W;
                else if (l > 0)
                    o = o.U;
                else
                    return o
            }
            return o || this.h
        }
        clear() {
            this.i = 0,
            this.Y = void 0,
            this.h.tt = void 0,
            this.h.U = this.h.W = void 0
        }
        updateKeyByIterator(o, a) {
            let l = o.o;
            if (l === this.h && (0,
            i.throwIteratorAccessError)(),
            this.i === 1)
                return l.u = a,
                !0;
            if (l === this.h.U)
                return this.v(l.B().u, a) > 0 ? (l.u = a,
                !0) : !1;
            if (l === this.h.W)
                return this.v(l.L().u, a) < 0 ? (l.u = a,
                !0) : !1;
            let c = l.L().u;
            if (this.v(c, a) >= 0)
                return !1;
            let u = l.B().u;
            return this.v(u, a) <= 0 ? !1 : (l.u = a,
            !0)
        }
        eraseElementByPos(o) {
            if (o < 0 || o > this.i - 1)
                throw new RangeError;
            let a = 0
              , l = this;
            return this.oe(this.Y, function(c) {
                return o === a ? (l.V(c),
                !0) : (a += 1,
                !1)
            }),
            this.i
        }
        eraseElementByKey(o) {
            if (this.i === 0)
                return !1;
            let a = this.I(this.Y, o);
            return a === this.h ? !1 : (this.V(a),
            !0)
        }
        eraseElementByIterator(o) {
            let a = o.o;
            a === this.h && (0,
            i.throwIteratorAccessError)();
            let l = a.W === void 0;
            return o.iteratorType === 0 ? l && o.next() : (!l || a.U === void 0) && o.next(),
            this.V(a),
            o
        }
        forEach(o) {
            let a = 0;
            for (let l of this)
                o(l, a++, this)
        }
        getElementByPos(o) {
            if (o < 0 || o > this.i - 1)
                throw new RangeError;
            let a, l = 0;
            for (let c of this) {
                if (l === o) {
                    a = c;
                    break
                }
                l += 1
            }
            return a
        }
        getHeight() {
            if (this.i === 0)
                return 0;
            let o = function(a) {
                return a ? Math.max(o(a.U), o(a.W)) + 1 : 0
            };
            return o(this.Y)
        }
    }
      , r = s;
    e.default = r
}
), sl = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = St()
      , n = It()
      , i = class extends t.ContainerIterator {
        constructor(r, o, a) {
            super(a),
            this.o = r,
            this.h = o,
            this.iteratorType === 0 ? (this.pre = function() {
                return this.o === this.h.U && (0,
                n.throwIteratorAccessError)(),
                this.o = this.o.L(),
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                n.throwIteratorAccessError)(),
                this.o = this.o.B(),
                this
            }
            ) : (this.pre = function() {
                return this.o === this.h.W && (0,
                n.throwIteratorAccessError)(),
                this.o = this.o.B(),
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                n.throwIteratorAccessError)(),
                this.o = this.o.L(),
                this
            }
            )
        }
        get index() {
            let r = this.o
              , o = this.h.tt;
            if (r === this.h)
                return o ? o.rt - 1 : 0;
            let a = 0;
            for (r.U && (a += r.U.rt); r !== o; ) {
                let l = r.tt;
                r === l.W && (a += 1,
                l.U && (a += l.U.rt)),
                r = l
            }
            return a
        }
    }
      , s = i;
    e.default = s
}
), nh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = s(ol())
      , n = s(sl())
      , i = It();
    function s(l) {
        return l && l.t ? l : {
            default: l
        }
    }
    var r = class al extends n.default {
        constructor(c, u, d, m) {
            super(c, u, m),
            this.container = d
        }
        get pointer() {
            return this.o === this.h && (0,
            i.throwIteratorAccessError)(),
            this.o.u
        }
        copy() {
            return new al(this.o,this.h,this.container,this.iteratorType)
        }
    }
      , o = class extends t.default {
        constructor(l=[], c, u) {
            super(c, u);
            let d = this;
            l.forEach(function(m) {
                d.insert(m)
            })
        }
        *K(l) {
            l !== void 0 && (yield*this.K(l.U),
            yield l.u,
            yield*this.K(l.W))
        }
        begin() {
            return new r(this.h.U || this.h,this.h,this)
        }
        end() {
            return new r(this.h,this.h,this)
        }
        rBegin() {
            return new r(this.h.W || this.h,this.h,this,1)
        }
        rEnd() {
            return new r(this.h,this.h,this,1)
        }
        front() {
            return this.h.U ? this.h.U.u : void 0
        }
        back() {
            return this.h.W ? this.h.W.u : void 0
        }
        insert(l, c) {
            return this.M(l, void 0, c)
        }
        find(l) {
            let c = this.I(this.Y, l);
            return new r(c,this.h,this)
        }
        lowerBound(l) {
            let c = this.X(this.Y, l);
            return new r(c,this.h,this)
        }
        upperBound(l) {
            let c = this.Z(this.Y, l);
            return new r(c,this.h,this)
        }
        reverseLowerBound(l) {
            let c = this.$(this.Y, l);
            return new r(c,this.h,this)
        }
        reverseUpperBound(l) {
            let c = this.rr(this.Y, l);
            return new r(c,this.h,this)
        }
        union(l) {
            let c = this;
            return l.forEach(function(u) {
                c.insert(u)
            }),
            this.i
        }
        [Symbol.iterator]() {
            return this.K(this.Y)
        }
    }
      , a = o;
    e.default = a
}
), rh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = s(ol())
      , n = s(sl())
      , i = It();
    function s(l) {
        return l && l.t ? l : {
            default: l
        }
    }
    var r = class ll extends n.default {
        constructor(c, u, d, m) {
            super(c, u, m),
            this.container = d
        }
        get pointer() {
            this.o === this.h && (0,
            i.throwIteratorAccessError)();
            let c = this;
            return new Proxy([],{
                get(u, d) {
                    if (d === "0")
                        return c.o.u;
                    if (d === "1")
                        return c.o.l
                },
                set(u, d, m) {
                    if (d !== "1")
                        throw new TypeError("props must be 1");
                    return c.o.l = m,
                    !0
                }
            })
        }
        copy() {
            return new ll(this.o,this.h,this.container,this.iteratorType)
        }
    }
      , o = class extends t.default {
        constructor(l=[], c, u) {
            super(c, u);
            let d = this;
            l.forEach(function(m) {
                d.setElement(m[0], m[1])
            })
        }
        *K(l) {
            l !== void 0 && (yield*this.K(l.U),
            yield[l.u, l.l],
            yield*this.K(l.W))
        }
        begin() {
            return new r(this.h.U || this.h,this.h,this)
        }
        end() {
            return new r(this.h,this.h,this)
        }
        rBegin() {
            return new r(this.h.W || this.h,this.h,this,1)
        }
        rEnd() {
            return new r(this.h,this.h,this,1)
        }
        front() {
            if (this.i === 0)
                return;
            let l = this.h.U;
            return [l.u, l.l]
        }
        back() {
            if (this.i === 0)
                return;
            let l = this.h.W;
            return [l.u, l.l]
        }
        lowerBound(l) {
            let c = this.X(this.Y, l);
            return new r(c,this.h,this)
        }
        upperBound(l) {
            let c = this.Z(this.Y, l);
            return new r(c,this.h,this)
        }
        reverseLowerBound(l) {
            let c = this.$(this.Y, l);
            return new r(c,this.h,this)
        }
        reverseUpperBound(l) {
            let c = this.rr(this.Y, l);
            return new r(c,this.h,this)
        }
        setElement(l, c, u) {
            return this.M(l, c, u)
        }
        find(l) {
            let c = this.I(this.Y, l);
            return new r(c,this.h,this)
        }
        getElementByKey(l) {
            return this.I(this.Y, l).l
        }
        union(l) {
            let c = this;
            return l.forEach(function(u) {
                c.setElement(u[0], u[1])
            }),
            this.i
        }
        [Symbol.iterator]() {
            return this.K(this.Y)
        }
    }
      , a = o;
    e.default = a
}
), cl = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = t;
    function t(n) {
        let i = typeof n;
        return i === "object" && n !== null || i === "function"
    }
}
), ul = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.HashContainerIterator = e.HashContainer = void 0;
    var t = St()
      , n = s(cl())
      , i = It();
    function s(a) {
        return a && a.t ? a : {
            default: a
        }
    }
    var r = class extends t.ContainerIterator {
        constructor(a, l, c) {
            super(c),
            this.o = a,
            this.h = l,
            this.iteratorType === 0 ? (this.pre = function() {
                return this.o.L === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.L,
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.B,
                this
            }
            ) : (this.pre = function() {
                return this.o.B === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.B,
                this
            }
            ,
            this.next = function() {
                return this.o === this.h && (0,
                i.throwIteratorAccessError)(),
                this.o = this.o.L,
                this
            }
            )
        }
    }
    ;
    e.HashContainerIterator = r;
    var o = class extends t.Container {
        constructor() {
            super(),
            this.H = [],
            this.g = {},
            this.HASH_TAG = Symbol("@@HASH_TAG"),
            Object.setPrototypeOf(this.g, null),
            this.h = {},
            this.h.L = this.h.B = this.p = this._ = this.h
        }
        V(a) {
            let {L: l, B: c} = a;
            l.B = c,
            c.L = l,
            a === this.p && (this.p = c),
            a === this._ && (this._ = l),
            this.i -= 1
        }
        M(a, l, c) {
            c === void 0 && (c = (0,
            n.default)(a));
            let u;
            if (c) {
                let d = a[this.HASH_TAG];
                if (d !== void 0)
                    return this.H[d].l = l,
                    this.i;
                Object.defineProperty(a, this.HASH_TAG, {
                    value: this.H.length,
                    configurable: !0
                }),
                u = {
                    u: a,
                    l,
                    L: this._,
                    B: this.h
                },
                this.H.push(u)
            } else {
                let d = this.g[a];
                if (d)
                    return d.l = l,
                    this.i;
                u = {
                    u: a,
                    l,
                    L: this._,
                    B: this.h
                },
                this.g[a] = u
            }
            return this.i === 0 ? (this.p = u,
            this.h.B = u) : this._.B = u,
            this._ = u,
            this.h.L = u,
            ++this.i
        }
        I(a, l) {
            if (l === void 0 && (l = (0,
            n.default)(a)),
            l) {
                let c = a[this.HASH_TAG];
                return c === void 0 ? this.h : this.H[c]
            } else
                return this.g[a] || this.h
        }
        clear() {
            let a = this.HASH_TAG;
            this.H.forEach(function(l) {
                delete l.u[a]
            }),
            this.H = [],
            this.g = {},
            Object.setPrototypeOf(this.g, null),
            this.i = 0,
            this.p = this._ = this.h.L = this.h.B = this.h
        }
        eraseElementByKey(a, l) {
            let c;
            if (l === void 0 && (l = (0,
            n.default)(a)),
            l) {
                let u = a[this.HASH_TAG];
                if (u === void 0)
                    return !1;
                delete a[this.HASH_TAG],
                c = this.H[u],
                delete this.H[u]
            } else {
                if (c = this.g[a],
                c === void 0)
                    return !1;
                delete this.g[a]
            }
            return this.V(c),
            !0
        }
        eraseElementByIterator(a) {
            let l = a.o;
            return l === this.h && (0,
            i.throwIteratorAccessError)(),
            this.V(l),
            a.next()
        }
        eraseElementByPos(a) {
            if (a < 0 || a > this.i - 1)
                throw new RangeError;
            let l = this.p;
            for (; a--; )
                l = l.B;
            return this.V(l),
            this.i
        }
    }
    ;
    e.HashContainer = o
}
), ih = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = ul()
      , n = It()
      , i = class hl extends t.HashContainerIterator {
        constructor(a, l, c, u) {
            super(a, l, u),
            this.container = c
        }
        get pointer() {
            return this.o === this.h && (0,
            n.throwIteratorAccessError)(),
            this.o.u
        }
        copy() {
            return new hl(this.o,this.h,this.container,this.iteratorType)
        }
    }
      , s = class extends t.HashContainer {
        constructor(o=[]) {
            super();
            let a = this;
            o.forEach(function(l) {
                a.insert(l)
            })
        }
        begin() {
            return new i(this.p,this.h,this)
        }
        end() {
            return new i(this.h,this.h,this)
        }
        rBegin() {
            return new i(this._,this.h,this,1)
        }
        rEnd() {
            return new i(this.h,this.h,this,1)
        }
        front() {
            return this.p.u
        }
        back() {
            return this._.u
        }
        insert(o, a) {
            return this.M(o, void 0, a)
        }
        getElementByPos(o) {
            if (o < 0 || o > this.i - 1)
                throw new RangeError;
            let a = this.p;
            for (; o--; )
                a = a.B;
            return a.u
        }
        find(o, a) {
            let l = this.I(o, a);
            return new i(l,this.h,this)
        }
        forEach(o) {
            let a = 0
              , l = this.p;
            for (; l !== this.h; )
                o(l.u, a++, this),
                l = l.B
        }
        [Symbol.iterator]() {
            return function*() {
                let o = this.p;
                for (; o !== this.h; )
                    yield o.u,
                    o = o.B
            }
            .bind(this)()
        }
    }
      , r = s;
    e.default = r
}
), oh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    e.default = void 0;
    var t = ul()
      , n = s(cl())
      , i = It();
    function s(l) {
        return l && l.t ? l : {
            default: l
        }
    }
    var r = class dl extends t.HashContainerIterator {
        constructor(c, u, d, m) {
            super(c, u, m),
            this.container = d
        }
        get pointer() {
            this.o === this.h && (0,
            i.throwIteratorAccessError)();
            let c = this;
            return new Proxy([],{
                get(u, d) {
                    if (d === "0")
                        return c.o.u;
                    if (d === "1")
                        return c.o.l
                },
                set(u, d, m) {
                    if (d !== "1")
                        throw new TypeError("props must be 1");
                    return c.o.l = m,
                    !0
                }
            })
        }
        copy() {
            return new dl(this.o,this.h,this.container,this.iteratorType)
        }
    }
      , o = class extends t.HashContainer {
        constructor(l=[]) {
            super();
            let c = this;
            l.forEach(function(u) {
                c.setElement(u[0], u[1])
            })
        }
        begin() {
            return new r(this.p,this.h,this)
        }
        end() {
            return new r(this.h,this.h,this)
        }
        rBegin() {
            return new r(this._,this.h,this,1)
        }
        rEnd() {
            return new r(this.h,this.h,this,1)
        }
        front() {
            if (this.i !== 0)
                return [this.p.u, this.p.l]
        }
        back() {
            if (this.i !== 0)
                return [this._.u, this._.l]
        }
        setElement(l, c, u) {
            return this.M(l, c, u)
        }
        getElementByKey(l, c) {
            if (c === void 0 && (c = (0,
            n.default)(l)),
            c) {
                let d = l[this.HASH_TAG];
                return d !== void 0 ? this.H[d].l : void 0
            }
            let u = this.g[l];
            return u ? u.l : void 0
        }
        getElementByPos(l) {
            if (l < 0 || l > this.i - 1)
                throw new RangeError;
            let c = this.p;
            for (; l--; )
                c = c.B;
            return [c.u, c.l]
        }
        find(l, c) {
            let u = this.I(l, c);
            return new r(u,this.h,this)
        }
        forEach(l) {
            let c = 0
              , u = this.p;
            for (; u !== this.h; )
                l([u.u, u.l], c++, this),
                u = u.B
        }
        [Symbol.iterator]() {
            return function*() {
                let l = this.p;
                for (; l !== this.h; )
                    yield[l.u, l.l],
                    l = l.B
            }
            .bind(this)()
        }
    }
      , a = o;
    e.default = a
}
), sh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "t", {
        value: !0
    }),
    Object.defineProperty(e, "Deque", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }),
    Object.defineProperty(e, "HashMap", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }),
    Object.defineProperty(e, "HashSet", {
        enumerable: !0,
        get: function() {
            return c.default
        }
    }),
    Object.defineProperty(e, "LinkList", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }),
    Object.defineProperty(e, "OrderedMap", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }),
    Object.defineProperty(e, "OrderedSet", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }),
    Object.defineProperty(e, "PriorityQueue", {
        enumerable: !0,
        get: function() {
            return i.default
        }
    }),
    Object.defineProperty(e, "Queue", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }),
    Object.defineProperty(e, "Stack", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }),
    Object.defineProperty(e, "Vector", {
        enumerable: !0,
        get: function() {
            return s.default
        }
    });
    var t = d(Ju())
      , n = d(Yu())
      , i = d(Qu())
      , s = d(Xu())
      , r = d(Zu())
      , o = d(eh())
      , a = d(nh())
      , l = d(rh())
      , c = d(ih())
      , u = d(oh());
    function d(m) {
        return m && m.t ? m : {
            default: m
        }
    }
}
), ah = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe();
    var n = sh().OrderedSet
      , i = vt()("number-allocator:trace")
      , s = vt()("number-allocator:error");
    function r(a, l) {
        this.low = a,
        this.high = l
    }
    r.prototype.equals = function(a) {
        return this.low === a.low && this.high === a.high
    }
    ,
    r.prototype.compare = function(a) {
        return this.low < a.low && this.high < a.low ? -1 : a.low < this.low && a.high < this.low ? 1 : 0
    }
    ;
    function o(a, l) {
        if (!(this instanceof o))
            return new o(a,l);
        this.min = a,
        this.max = l,
        this.ss = new n([], (c, u) => c.compare(u)),
        i("Create"),
        this.clear()
    }
    o.prototype.firstVacant = function() {
        return this.ss.size() === 0 ? null : this.ss.front().low
    }
    ,
    o.prototype.alloc = function() {
        if (this.ss.size() === 0)
            return i("alloc():empty"),
            null;
        let a = this.ss.begin()
          , l = a.pointer.low
          , c = a.pointer.high
          , u = l;
        return u + 1 <= c ? this.ss.updateKeyByIterator(a, new r(l + 1,c)) : this.ss.eraseElementByPos(0),
        i("alloc():" + u),
        u
    }
    ,
    o.prototype.use = function(a) {
        let l = new r(a,a)
          , c = this.ss.lowerBound(l);
        if (!c.equals(this.ss.end())) {
            let u = c.pointer.low
              , d = c.pointer.high;
            return c.pointer.equals(l) ? (this.ss.eraseElementByIterator(c),
            i("use():" + a),
            !0) : u > a ? !1 : u === a ? (this.ss.updateKeyByIterator(c, new r(u + 1,d)),
            i("use():" + a),
            !0) : d === a ? (this.ss.updateKeyByIterator(c, new r(u,d - 1)),
            i("use():" + a),
            !0) : (this.ss.updateKeyByIterator(c, new r(a + 1,d)),
            this.ss.insert(new r(u,a - 1)),
            i("use():" + a),
            !0)
        }
        return i("use():failed"),
        !1
    }
    ,
    o.prototype.free = function(a) {
        if (a < this.min || a > this.max) {
            s("free():" + a + " is out of range");
            return
        }
        let l = new r(a,a)
          , c = this.ss.upperBound(l);
        if (c.equals(this.ss.end())) {
            if (c.equals(this.ss.begin())) {
                this.ss.insert(l);
                return
            }
            c.pre();
            let u = c.pointer.high;
            c.pointer.high + 1 === a ? this.ss.updateKeyByIterator(c, new r(u,a)) : this.ss.insert(l)
        } else if (c.equals(this.ss.begin()))
            if (a + 1 === c.pointer.low) {
                let u = c.pointer.high;
                this.ss.updateKeyByIterator(c, new r(a,u))
            } else
                this.ss.insert(l);
        else {
            let u = c.pointer.low
              , d = c.pointer.high;
            c.pre();
            let m = c.pointer.low;
            c.pointer.high + 1 === a ? a + 1 === u ? (this.ss.eraseElementByIterator(c),
            this.ss.updateKeyByIterator(c, new r(m,d))) : this.ss.updateKeyByIterator(c, new r(m,a)) : a + 1 === u ? (this.ss.eraseElementByIterator(c.next()),
            this.ss.insert(new r(a,d))) : this.ss.insert(l)
        }
        i("free():" + a)
    }
    ,
    o.prototype.clear = function() {
        i("clear()"),
        this.ss.clear(),
        this.ss.insert(new r(this.min,this.max))
    }
    ,
    o.prototype.intervalCount = function() {
        return this.ss.size()
    }
    ,
    o.prototype.dump = function() {
        console.log("length:" + this.ss.size());
        for (let a of this.ss)
            console.log(a)
    }
    ,
    t.exports = o
}
), fl = fe( (e, t) => {
    ie(),
    se(),
    oe();
    var n = ah();
    t.exports.NumberAllocator = n
}
), lh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = zu()
      , n = fl()
      , i = class {
        constructor(s) {
            s > 0 && (this.aliasToTopic = new t.LRUCache({
                max: s
            }),
            this.topicToAlias = {},
            this.numberAllocator = new n.NumberAllocator(1,s),
            this.max = s,
            this.length = 0)
        }
        put(s, r) {
            if (r === 0 || r > this.max)
                return !1;
            let o = this.aliasToTopic.get(r);
            return o && delete this.topicToAlias[o],
            this.aliasToTopic.set(r, s),
            this.topicToAlias[s] = r,
            this.numberAllocator.use(r),
            this.length = this.aliasToTopic.size,
            !0
        }
        getTopicByAlias(s) {
            return this.aliasToTopic.get(s)
        }
        getAliasByTopic(s) {
            let r = this.topicToAlias[s];
            return typeof r < "u" && this.aliasToTopic.get(r),
            r
        }
        clear() {
            this.aliasToTopic.clear(),
            this.topicToAlias = {},
            this.numberAllocator.clear(),
            this.length = 0
        }
        getLruAlias() {
            return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1]
        }
    }
    ;
    e.default = i
}
), ch = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = ar()
      , i = t(lh())
      , s = cn()
      , r = (o, a) => {
        o.log("_handleConnack");
        let {options: l} = o
          , c = l.protocolVersion === 5 ? a.reasonCode : a.returnCode;
        if (clearTimeout(o.connackTimer),
        delete o.topicAliasSend,
        a.properties) {
            if (a.properties.topicAliasMaximum) {
                if (a.properties.topicAliasMaximum > 65535) {
                    o.emit("error", new Error("topicAliasMaximum from broker is out of range"));
                    return
                }
                a.properties.topicAliasMaximum > 0 && (o.topicAliasSend = new i.default(a.properties.topicAliasMaximum))
            }
            a.properties.serverKeepAlive && l.keepalive && (l.keepalive = a.properties.serverKeepAlive),
            a.properties.maximumPacketSize && (l.properties || (l.properties = {}),
            l.properties.maximumPacketSize = a.properties.maximumPacketSize)
        }
        if (c === 0)
            o.reconnecting = !1,
            o._onConnect(a);
        else if (c > 0) {
            let u = new s.ErrorWithReasonCode(`Connection refused: ${n.ReasonCodes[c]}`,c);
            o.emit("error", u)
        }
    }
    ;
    e.default = r
}
), uh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = (n, i, s) => {
        n.log("handling pubrel packet");
        let r = typeof s < "u" ? s : n.noop
          , {messageId: o} = i
          , a = {
            cmd: "pubcomp",
            messageId: o
        };
        n.incomingStore.get(i, (l, c) => {
            l ? n._sendPacket(a, r) : (n.emit("message", c.topic, c.payload, c),
            n.handleMessage(c, u => {
                if (u)
                    return r(u);
                n.incomingStore.del(c, n.noop),
                n._sendPacket(a, r)
            }
            ))
        }
        )
    }
    ;
    e.default = t
}
), hh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = t(Hu())
      , i = t(Ku())
      , s = t(ch())
      , r = t(ar())
      , o = t(uh())
      , a = (l, c, u) => {
        let {options: d} = l;
        if (d.protocolVersion === 5 && d.properties && d.properties.maximumPacketSize && d.properties.maximumPacketSize < c.length)
            return l.emit("error", new Error(`exceeding packets size ${c.cmd}`)),
            l.end({
                reasonCode: 149,
                properties: {
                    reasonString: "Maximum packet size was exceeded"
                }
            }),
            l;
        switch (l.log("_handlePacket :: emitting packetreceive"),
        l.emit("packetreceive", c),
        c.cmd) {
        case "publish":
            (0,
            n.default)(l, c, u);
            break;
        case "puback":
        case "pubrec":
        case "pubcomp":
        case "suback":
        case "unsuback":
            l.reschedulePing(),
            (0,
            r.default)(l, c),
            u();
            break;
        case "pubrel":
            l.reschedulePing(),
            (0,
            o.default)(l, c, u);
            break;
        case "connack":
            (0,
            s.default)(l, c),
            u();
            break;
        case "auth":
            l.reschedulePing(),
            (0,
            i.default)(l, c),
            u();
            break;
        case "pingresp":
            l.log("_handlePacket :: received pingresp"),
            l.reschedulePing(!0),
            u();
            break;
        case "disconnect":
            l.emit("disconnect", c),
            u();
            break;
        default:
            l.log("_handlePacket :: unknown command"),
            u();
            break
        }
    }
    ;
    e.default = a
}
), dh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.TypedEventEmitter = void 0;
    var n = t((ln(),
    Pe(Xt)))
      , i = cn()
      , s = class {
    }
    ;
    e.TypedEventEmitter = s,
    (0,
    i.applyMixin)(s, n.default)
}
), lr = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isReactNativeBrowser = e.isWebWorker = void 0;
    var t = () => {
        var r;
        return typeof window < "u" ? typeof navigator < "u" && ((r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase().indexOf(" electron/")) > -1 && ve != null && ve.versions ? !Object.prototype.hasOwnProperty.call(ve.versions, "electron") : typeof window.document < "u" : !1
    }
      , n = () => {
        var r, o;
        return !!(typeof self == "object" && !((o = (r = self?.constructor) === null || r === void 0 ? void 0 : r.name) === null || o === void 0) && o.includes("WorkerGlobalScope"))
    }
      , i = () => typeof navigator < "u" && navigator.product === "ReactNative"
      , s = t() || n() || i();
    e.isWebWorker = n(),
    e.isReactNativeBrowser = i(),
    e.default = s
}
), fh = fe( (e, t) => {
    ie(),
    se(),
    oe(),
    function(n, i) {
        typeof e == "object" && typeof t < "u" ? i(e) : typeof define == "function" && define.amd ? define(["exports"], i) : (n = typeof globalThis < "u" ? globalThis : n || self,
        i(n.fastUniqueNumbers = {}))
    }(e, function(n) {
        "use strict";
        var i = function(y) {
            return function(_) {
                var g = y(_);
                return _.add(g),
                g
            }
        }
          , s = function(y) {
            return function(_, g) {
                return y.set(_, g),
                g
            }
        }
          , r = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER
          , o = 536870912
          , a = o * 2
          , l = function(y, _) {
            return function(g) {
                var b = _.get(g)
                  , k = b === void 0 ? g.size : b < a ? b + 1 : 0;
                if (!g.has(k))
                    return y(g, k);
                if (g.size < o) {
                    for (; g.has(k); )
                        k = Math.floor(Math.random() * a);
                    return y(g, k)
                }
                if (g.size > r)
                    throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                for (; g.has(k); )
                    k = Math.floor(Math.random() * r);
                return y(g, k)
            }
        }
          , c = new WeakMap
          , u = s(c)
          , d = l(u, c)
          , m = i(d);
        n.addUniqueNumber = m,
        n.generateUniqueNumber = d
    })
}
), ph = fe( (e, t) => {
    ie(),
    se(),
    oe(),
    function(n, i) {
        typeof e == "object" && typeof t < "u" ? i(e, fh()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers"], i) : (n = typeof globalThis < "u" ? globalThis : n || self,
        i(n.workerTimersBroker = {}, n.fastUniqueNumbers))
    }(e, function(n, i) {
        "use strict";
        var s = function(a) {
            return a.method !== void 0 && a.method === "call"
        }
          , r = function(a) {
            return a.error === null && typeof a.id == "number"
        }
          , o = function(a) {
            var l = new Map([[0, function() {}
            ]])
              , c = new Map([[0, function() {}
            ]])
              , u = new Map
              , d = new Worker(a);
            d.addEventListener("message", function(b) {
                var k = b.data;
                if (s(k)) {
                    var w = k.params
                      , T = w.timerId
                      , R = w.timerType;
                    if (R === "interval") {
                        var M = l.get(T);
                        if (typeof M == "number") {
                            var E = u.get(M);
                            if (E === void 0 || E.timerId !== T || E.timerType !== R)
                                throw new Error("The timer is in an undefined state.")
                        } else if (typeof M < "u")
                            M();
                        else
                            throw new Error("The timer is in an undefined state.")
                    } else if (R === "timeout") {
                        var A = c.get(T);
                        if (typeof A == "number") {
                            var U = u.get(A);
                            if (U === void 0 || U.timerId !== T || U.timerType !== R)
                                throw new Error("The timer is in an undefined state.")
                        } else if (typeof A < "u")
                            A(),
                            c.delete(T);
                        else
                            throw new Error("The timer is in an undefined state.")
                    }
                } else if (r(k)) {
                    var W = k.id
                      , $ = u.get(W);
                    if ($ === void 0)
                        throw new Error("The timer is in an undefined state.");
                    var Q = $.timerId
                      , O = $.timerType;
                    u.delete(W),
                    O === "interval" ? l.delete(Q) : c.delete(Q)
                } else {
                    var j = k.error.message;
                    throw new Error(j)
                }
            });
            var m = function(b) {
                var k = i.generateUniqueNumber(u);
                u.set(k, {
                    timerId: b,
                    timerType: "interval"
                }),
                l.set(b, k),
                d.postMessage({
                    id: k,
                    method: "clear",
                    params: {
                        timerId: b,
                        timerType: "interval"
                    }
                })
            }
              , y = function(b) {
                var k = i.generateUniqueNumber(u);
                u.set(k, {
                    timerId: b,
                    timerType: "timeout"
                }),
                c.set(b, k),
                d.postMessage({
                    id: k,
                    method: "clear",
                    params: {
                        timerId: b,
                        timerType: "timeout"
                    }
                })
            }
              , _ = function(b) {
                var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
                  , w = i.generateUniqueNumber(l);
                return l.set(w, function() {
                    b(),
                    typeof l.get(w) == "function" && d.postMessage({
                        id: null,
                        method: "set",
                        params: {
                            delay: k,
                            now: performance.now(),
                            timerId: w,
                            timerType: "interval"
                        }
                    })
                }),
                d.postMessage({
                    id: null,
                    method: "set",
                    params: {
                        delay: k,
                        now: performance.now(),
                        timerId: w,
                        timerType: "interval"
                    }
                }),
                w
            }
              , g = function(b) {
                var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
                  , w = i.generateUniqueNumber(c);
                return c.set(w, b),
                d.postMessage({
                    id: null,
                    method: "set",
                    params: {
                        delay: k,
                        now: performance.now(),
                        timerId: w,
                        timerType: "timeout"
                    }
                }),
                w
            };
            return {
                clearInterval: m,
                clearTimeout: y,
                setInterval: _,
                setTimeout: g
            }
        };
        n.load = o
    })
}
), mh = fe( (e, t) => {
    ie(),
    se(),
    oe(),
    function(n, i) {
        typeof e == "object" && typeof t < "u" ? i(e, ph()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], i) : (n = typeof globalThis < "u" ? globalThis : n || self,
        i(n.workerTimers = {}, n.workerTimersBroker))
    }(e, function(n, i) {
        "use strict";
        var s = function(d, m) {
            var y = null;
            return function() {
                if (y !== null)
                    return y;
                var _ = new Blob([m],{
                    type: "application/javascript; charset=utf-8"
                })
                  , g = URL.createObjectURL(_);
                return y = d(g),
                setTimeout(function() {
                    return URL.revokeObjectURL(g)
                }),
                y
            }
        }
          , r = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`
          , o = s(i.load, r)
          , a = function(d) {
            return o().clearInterval(d)
        }
          , l = function(d) {
            return o().clearTimeout(d)
        }
          , c = function() {
            var d;
            return (d = o()).setInterval.apply(d, arguments)
        }
          , u = function() {
            var d;
            return (d = o()).setTimeout.apply(d, arguments)
        };
        n.clearInterval = a,
        n.clearTimeout = l,
        n.setInterval = c,
        n.setTimeout = u
    })
}
), gh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__createBinding || (Object.create ? function(c, u, d, m) {
        m === void 0 && (m = d);
        var y = Object.getOwnPropertyDescriptor(u, d);
        (!y || ("get"in y ? !u.__esModule : y.writable || y.configurable)) && (y = {
            enumerable: !0,
            get: function() {
                return u[d]
            }
        }),
        Object.defineProperty(c, m, y)
    }
    : function(c, u, d, m) {
        m === void 0 && (m = d),
        c[m] = u[d]
    }
    )
      , n = e && e.__setModuleDefault || (Object.create ? function(c, u) {
        Object.defineProperty(c, "default", {
            enumerable: !0,
            value: u
        })
    }
    : function(c, u) {
        c.default = u
    }
    )
      , i = e && e.__importStar || function(c) {
        if (c && c.__esModule)
            return c;
        var u = {};
        if (c != null)
            for (var d in c)
                d !== "default" && Object.prototype.hasOwnProperty.call(c, d) && t(u, c, d);
        return n(u, c),
        u
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(lr())
      , r = mh()
      , o = {
        set: r.setInterval,
        clear: r.clearInterval
    }
      , a = {
        set: (c, u) => setInterval(c, u),
        clear: c => clearInterval(c)
    }
      , l = c => {
        switch (c) {
        case "native":
            return a;
        case "worker":
            return o;
        case "auto":
        default:
            return s.default && !s.isWebWorker && !s.isReactNativeBrowser ? o : a
        }
    }
    ;
    e.default = l
}
), pl = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = t(gh())
      , i = class {
        get keepaliveTimeoutTimestamp() {
            return this._keepaliveTimeoutTimestamp
        }
        get intervalEvery() {
            return this._intervalEvery
        }
        get keepalive() {
            return this._keepalive
        }
        constructor(s, r) {
            this.destroyed = !1,
            this.client = s,
            this.timer = typeof r == "object" && "set"in r && "clear"in r ? r : (0,
            n.default)(r),
            this.setKeepalive(s.options.keepalive)
        }
        clear() {
            this.timerId && (this.timer.clear(this.timerId),
            this.timerId = null)
        }
        setKeepalive(s) {
            if (s *= 1e3,
            isNaN(s) || s <= 0 || s > 2147483647)
                throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${s}`);
            this._keepalive = s,
            this.reschedule(),
            this.client.log(`KeepaliveManager: set keepalive to ${s}ms`)
        }
        destroy() {
            this.clear(),
            this.destroyed = !0
        }
        reschedule() {
            if (this.destroyed)
                return;
            this.clear(),
            this.counter = 0;
            let s = Math.ceil(this._keepalive * 1.5);
            this._keepaliveTimeoutTimestamp = Date.now() + s,
            this._intervalEvery = Math.ceil(this._keepalive / 2),
            this.timerId = this.timer.set( () => {
                this.destroyed || (this.counter += 1,
                this.counter === 2 ? this.client.sendPing() : this.counter > 2 && this.client.onKeepaliveTimeout())
            }
            , this._intervalEvery)
        }
    }
    ;
    e.default = i
}
), yo = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__createBinding || (Object.create ? function(M, E, A, U) {
        U === void 0 && (U = A);
        var W = Object.getOwnPropertyDescriptor(E, A);
        (!W || ("get"in W ? !E.__esModule : W.writable || W.configurable)) && (W = {
            enumerable: !0,
            get: function() {
                return E[A]
            }
        }),
        Object.defineProperty(M, U, W)
    }
    : function(M, E, A, U) {
        U === void 0 && (U = A),
        M[U] = E[A]
    }
    )
      , n = e && e.__setModuleDefault || (Object.create ? function(M, E) {
        Object.defineProperty(M, "default", {
            enumerable: !0,
            value: E
        })
    }
    : function(M, E) {
        M.default = E
    }
    )
      , i = e && e.__importStar || function(M) {
        if (M && M.__esModule)
            return M;
        var E = {};
        if (M != null)
            for (var A in M)
                A !== "default" && Object.prototype.hasOwnProperty.call(M, A) && t(E, M, A);
        return n(E, M),
        E
    }
      , s = e && e.__importDefault || function(M) {
        return M && M.__esModule ? M : {
            default: M
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = s(ou())
      , o = s(ju())
      , a = s(Qa())
      , l = Zt()
      , c = s(Vu())
      , u = i(Gu())
      , d = s(vt())
      , m = s(Xa())
      , y = s(hh())
      , _ = cn()
      , g = dh()
      , b = s(pl())
      , k = i(lr())
      , w = globalThis.setImmediate || ( (...M) => {
        let E = M.shift();
        (0,
        _.nextTick)( () => {
            E(...M)
        }
        )
    }
    )
      , T = {
        keepalive: 60,
        reschedulePings: !0,
        protocolId: "MQTT",
        protocolVersion: 4,
        reconnectPeriod: 1e3,
        connectTimeout: 30 * 1e3,
        clean: !0,
        resubscribe: !0,
        writeCache: !0,
        timerVariant: "auto"
    }
      , R = class _o extends g.TypedEventEmitter {
        static defaultId() {
            return `mqttjs_${Math.random().toString(16).substr(2, 8)}`
        }
        constructor(E, A) {
            super(),
            this.options = A || {};
            for (let U in T)
                typeof this.options[U] > "u" ? this.options[U] = T[U] : this.options[U] = A[U];
            this.log = this.options.log || (0,
            d.default)("mqttjs:client"),
            this.noop = this._noop.bind(this),
            this.log("MqttClient :: version:", _o.VERSION),
            k.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", k.default ? "browser" : "node"),
            this.log("MqttClient :: options.protocol", A.protocol),
            this.log("MqttClient :: options.protocolVersion", A.protocolVersion),
            this.log("MqttClient :: options.username", A.username),
            this.log("MqttClient :: options.keepalive", A.keepalive),
            this.log("MqttClient :: options.reconnectPeriod", A.reconnectPeriod),
            this.log("MqttClient :: options.rejectUnauthorized", A.rejectUnauthorized),
            this.log("MqttClient :: options.properties.topicAliasMaximum", A.properties ? A.properties.topicAliasMaximum : void 0),
            this.options.clientId = typeof A.clientId == "string" ? A.clientId : _o.defaultId(),
            this.log("MqttClient :: clientId", this.options.clientId),
            this.options.customHandleAcks = A.protocolVersion === 5 && A.customHandleAcks ? A.customHandleAcks : (...U) => {
                U[3](null, 0)
            }
            ,
            this.options.writeCache || (o.default.writeToStream.cacheNumbers = !1),
            this.streamBuilder = E,
            this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new a.default : this.options.messageIdProvider,
            this.outgoingStore = A.outgoingStore || new m.default,
            this.incomingStore = A.incomingStore || new m.default,
            this.queueQoSZero = A.queueQoSZero === void 0 ? !0 : A.queueQoSZero,
            this._resubscribeTopics = {},
            this.messageIdToTopic = {},
            this.keepaliveManager = null,
            this.connected = !1,
            this.disconnecting = !1,
            this.reconnecting = !1,
            this.queue = [],
            this.connackTimer = null,
            this.reconnectTimer = null,
            this._storeProcessing = !1,
            this._packetIdsDuringStoreProcessing = {},
            this._storeProcessingQueue = [],
            this.outgoing = {},
            this._firstConnection = !0,
            A.properties && A.properties.topicAliasMaximum > 0 && (A.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new r.default(A.properties.topicAliasMaximum)),
            this.on("connect", () => {
                let {queue: U} = this
                  , W = () => {
                    let $ = U.shift();
                    this.log("deliver :: entry %o", $);
                    let Q = null;
                    if (!$) {
                        this._resubscribe();
                        return
                    }
                    Q = $.packet,
                    this.log("deliver :: call _sendPacket for %o", Q);
                    let O = !0;
                    Q.messageId && Q.messageId !== 0 && (this.messageIdProvider.register(Q.messageId) || (O = !1)),
                    O ? this._sendPacket(Q, j => {
                        $.cb && $.cb(j),
                        W()
                    }
                    ) : (this.log("messageId: %d has already used. The message is skipped and removed.", Q.messageId),
                    W())
                }
                ;
                this.log("connect :: sending queued packets"),
                W()
            }
            ),
            this.on("close", () => {
                this.log("close :: connected set to `false`"),
                this.connected = !1,
                this.log("close :: clearing connackTimer"),
                clearTimeout(this.connackTimer),
                this._destroyKeepaliveManager(),
                this.topicAliasRecv && this.topicAliasRecv.clear(),
                this.log("close :: calling _setupReconnect"),
                this._setupReconnect()
            }
            ),
            this.options.manualConnect || (this.log("MqttClient :: setting up stream"),
            this.connect())
        }
        handleAuth(E, A) {
            A()
        }
        handleMessage(E, A) {
            A()
        }
        _nextId() {
            return this.messageIdProvider.allocate()
        }
        getLastMessageId() {
            return this.messageIdProvider.getLastAllocated()
        }
        connect() {
            var E;
            let A = new l.Writable
              , U = o.default.parser(this.options)
              , W = null
              , $ = [];
            this.log("connect :: calling method to clear reconnect"),
            this._clearReconnect(),
            this.disconnected && !this.reconnecting && (this.incomingStore = this.options.incomingStore || new m.default,
            this.outgoingStore = this.options.outgoingStore || new m.default,
            this.disconnecting = !1,
            this.disconnected = !1),
            this.log("connect :: using streamBuilder provided to client to create stream"),
            this.stream = this.streamBuilder(this),
            U.on("packet", V => {
                this.log("parser :: on packet push to packets array."),
                $.push(V)
            }
            );
            let Q = () => {
                this.log("work :: getting next packet in queue");
                let V = $.shift();
                if (V)
                    this.log("work :: packet pulled from queue"),
                    (0,
                    y.default)(this, V, O);
                else {
                    this.log("work :: no packets in queue");
                    let le = W;
                    W = null,
                    this.log("work :: done flag is %s", !!le),
                    le && le()
                }
            }
              , O = () => {
                if ($.length)
                    (0,
                    _.nextTick)(Q);
                else {
                    let V = W;
                    W = null,
                    V()
                }
            }
            ;
            A._write = (V, le, re) => {
                W = re,
                this.log("writable stream :: parsing buffer"),
                U.parse(V),
                Q()
            }
            ;
            let j = V => {
                this.log("streamErrorHandler :: error", V.message),
                V.code ? (this.log("streamErrorHandler :: emitting error"),
                this.emit("error", V)) : this.noop(V)
            }
            ;
            this.log("connect :: pipe stream to writable stream"),
            this.stream.pipe(A),
            this.stream.on("error", j),
            this.stream.on("close", () => {
                this.log("(%s)stream :: on close", this.options.clientId),
                this._flushVolatile(),
                this.log("stream: emit close to MqttClient"),
                this.emit("close")
            }
            ),
            this.log("connect: sending packet `connect`");
            let Y = {
                cmd: "connect",
                protocolId: this.options.protocolId,
                protocolVersion: this.options.protocolVersion,
                clean: this.options.clean,
                clientId: this.options.clientId,
                keepalive: this.options.keepalive,
                username: this.options.username,
                password: this.options.password,
                properties: this.options.properties
            };
            if (this.options.will && (Y.will = Object.assign(Object.assign({}, this.options.will), {
                payload: (E = this.options.will) === null || E === void 0 ? void 0 : E.payload
            })),
            this.topicAliasRecv && (Y.properties || (Y.properties = {}),
            this.topicAliasRecv && (Y.properties.topicAliasMaximum = this.topicAliasRecv.max)),
            this._writePacket(Y),
            U.on("error", this.emit.bind(this, "error")),
            this.options.properties) {
                if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData)
                    return this.end( () => this.emit("error", new Error("Packet has no Authentication Method"))),
                    this;
                if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
                    let V = Object.assign({
                        cmd: "auth",
                        reasonCode: 0
                    }, this.options.authPacket);
                    this._writePacket(V)
                }
            }
            return this.stream.setMaxListeners(1e3),
            clearTimeout(this.connackTimer),
            this.connackTimer = setTimeout( () => {
                this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),
                this.emit("error", new Error("connack timeout")),
                this._cleanUp(!0)
            }
            , this.options.connectTimeout),
            this
        }
        publish(E, A, U, W) {
            this.log("publish :: message `%s` to topic `%s`", A, E);
            let {options: $} = this;
            typeof U == "function" && (W = U,
            U = null),
            U = U || {},
            U = Object.assign(Object.assign({}, {
                qos: 0,
                retain: !1,
                dup: !1
            }), U);
            let {qos: Q, retain: O, dup: j, properties: Y, cbStorePut: V} = U;
            if (this._checkDisconnecting(W))
                return this;
            let le = () => {
                let re = 0;
                if ((Q === 1 || Q === 2) && (re = this._nextId(),
                re === null))
                    return this.log("No messageId left"),
                    !1;
                let q = {
                    cmd: "publish",
                    topic: E,
                    payload: A,
                    qos: Q,
                    retain: O,
                    messageId: re,
                    dup: j
                };
                switch ($.protocolVersion === 5 && (q.properties = Y),
                this.log("publish :: qos", Q),
                Q) {
                case 1:
                case 2:
                    this.outgoing[q.messageId] = {
                        volatile: !1,
                        cb: W || this.noop
                    },
                    this.log("MqttClient:publish: packet cmd: %s", q.cmd),
                    this._sendPacket(q, void 0, V);
                    break;
                default:
                    this.log("MqttClient:publish: packet cmd: %s", q.cmd),
                    this._sendPacket(q, W, V);
                    break
                }
                return !0
            }
            ;
            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !le()) && this._storeProcessingQueue.push({
                invoke: le,
                cbStorePut: U.cbStorePut,
                callback: W
            }),
            this
        }
        publishAsync(E, A, U) {
            return new Promise( (W, $) => {
                this.publish(E, A, U, (Q, O) => {
                    Q ? $(Q) : W(O)
                }
                )
            }
            )
        }
        subscribe(E, A, U) {
            let W = this.options.protocolVersion;
            typeof A == "function" && (U = A),
            U = U || this.noop;
            let $ = !1
              , Q = [];
            typeof E == "string" ? (E = [E],
            Q = E) : Array.isArray(E) ? Q = E : typeof E == "object" && ($ = E.resubscribe,
            delete E.resubscribe,
            Q = Object.keys(E));
            let O = u.validateTopics(Q);
            if (O !== null)
                return w(U, new Error(`Invalid topic ${O}`)),
                this;
            if (this._checkDisconnecting(U))
                return this.log("subscribe: discconecting true"),
                this;
            let j = {
                qos: 0
            };
            W === 5 && (j.nl = !1,
            j.rap = !1,
            j.rh = 0),
            A = Object.assign(Object.assign({}, j), A);
            let Y = A.properties
              , V = []
              , le = (q, pe) => {
                if (pe = pe || A,
                !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, q) || this._resubscribeTopics[q].qos < pe.qos || $) {
                    let te = {
                        topic: q,
                        qos: pe.qos
                    };
                    W === 5 && (te.nl = pe.nl,
                    te.rap = pe.rap,
                    te.rh = pe.rh,
                    te.properties = Y),
                    this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", te.topic, te.qos),
                    V.push(te)
                }
            }
            ;
            if (Array.isArray(E) ? E.forEach(q => {
                this.log("subscribe: array topic %s", q),
                le(q)
            }
            ) : Object.keys(E).forEach(q => {
                this.log("subscribe: object topic %s, %o", q, E[q]),
                le(q, E[q])
            }
            ),
            !V.length)
                return U(null, []),
                this;
            let re = () => {
                let q = this._nextId();
                if (q === null)
                    return this.log("No messageId left"),
                    !1;
                let pe = {
                    cmd: "subscribe",
                    subscriptions: V,
                    messageId: q
                };
                if (Y && (pe.properties = Y),
                this.options.resubscribe) {
                    this.log("subscribe :: resubscribe true");
                    let te = [];
                    V.forEach(ge => {
                        if (this.options.reconnectPeriod > 0) {
                            let S = {
                                qos: ge.qos
                            };
                            W === 5 && (S.nl = ge.nl || !1,
                            S.rap = ge.rap || !1,
                            S.rh = ge.rh || 0,
                            S.properties = ge.properties),
                            this._resubscribeTopics[ge.topic] = S,
                            te.push(ge.topic)
                        }
                    }
                    ),
                    this.messageIdToTopic[pe.messageId] = te
                }
                return this.outgoing[pe.messageId] = {
                    volatile: !0,
                    cb(te, ge) {
                        if (!te) {
                            let {granted: S} = ge;
                            for (let H = 0; H < S.length; H += 1)
                                V[H].qos = S[H]
                        }
                        U(te, V, ge)
                    }
                },
                this.log("subscribe :: call _sendPacket"),
                this._sendPacket(pe),
                !0
            }
            ;
            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !re()) && this._storeProcessingQueue.push({
                invoke: re,
                callback: U
            }),
            this
        }
        subscribeAsync(E, A) {
            return new Promise( (U, W) => {
                this.subscribe(E, A, ($, Q) => {
                    $ ? W($) : U(Q)
                }
                )
            }
            )
        }
        unsubscribe(E, A, U) {
            typeof E == "string" && (E = [E]),
            typeof A == "function" && (U = A),
            U = U || this.noop;
            let W = u.validateTopics(E);
            if (W !== null)
                return w(U, new Error(`Invalid topic ${W}`)),
                this;
            if (this._checkDisconnecting(U))
                return this;
            let $ = () => {
                let Q = this._nextId();
                if (Q === null)
                    return this.log("No messageId left"),
                    !1;
                let O = {
                    cmd: "unsubscribe",
                    messageId: Q,
                    unsubscriptions: []
                };
                return typeof E == "string" ? O.unsubscriptions = [E] : Array.isArray(E) && (O.unsubscriptions = E),
                this.options.resubscribe && O.unsubscriptions.forEach(j => {
                    delete this._resubscribeTopics[j]
                }
                ),
                typeof A == "object" && A.properties && (O.properties = A.properties),
                this.outgoing[O.messageId] = {
                    volatile: !0,
                    cb: U
                },
                this.log("unsubscribe: call _sendPacket"),
                this._sendPacket(O),
                !0
            }
            ;
            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !$()) && this._storeProcessingQueue.push({
                invoke: $,
                callback: U
            }),
            this
        }
        unsubscribeAsync(E, A) {
            return new Promise( (U, W) => {
                this.unsubscribe(E, A, ($, Q) => {
                    $ ? W($) : U(Q)
                }
                )
            }
            )
        }
        end(E, A, U) {
            this.log("end :: (%s)", this.options.clientId),
            (E == null || typeof E != "boolean") && (U = U || A,
            A = E,
            E = !1),
            typeof A != "object" && (U = U || A,
            A = null),
            this.log("end :: cb? %s", !!U),
            (!U || typeof U != "function") && (U = this.noop);
            let W = () => {
                this.log("end :: closeStores: closing incoming and outgoing stores"),
                this.disconnected = !0,
                this.incomingStore.close(Q => {
                    this.outgoingStore.close(O => {
                        if (this.log("end :: closeStores: emitting end"),
                        this.emit("end"),
                        U) {
                            let j = Q || O;
                            this.log("end :: closeStores: invoking callback with args"),
                            U(j)
                        }
                    }
                    )
                }
                ),
                this._deferredReconnect ? this._deferredReconnect() : (this.options.reconnectPeriod === 0 || this.options.manualConnect) && (this.disconnecting = !1)
            }
              , $ = () => {
                this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, E),
                this._cleanUp(E, () => {
                    this.log("end :: finish :: calling process.nextTick on closeStores"),
                    (0,
                    _.nextTick)(W)
                }
                , A)
            }
            ;
            return this.disconnecting ? (U(),
            this) : (this._clearReconnect(),
            this.disconnecting = !0,
            !E && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId),
            this.once("outgoingEmpty", setTimeout.bind(null, $, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId),
            $()),
            this)
        }
        endAsync(E, A) {
            return new Promise( (U, W) => {
                this.end(E, A, $ => {
                    $ ? W($) : U()
                }
                )
            }
            )
        }
        removeOutgoingMessage(E) {
            if (this.outgoing[E]) {
                let {cb: A} = this.outgoing[E];
                this._removeOutgoingAndStoreMessage(E, () => {
                    A(new Error("Message removed"))
                }
                )
            }
            return this
        }
        reconnect(E) {
            this.log("client reconnect");
            let A = () => {
                E ? (this.options.incomingStore = E.incomingStore,
                this.options.outgoingStore = E.outgoingStore) : (this.options.incomingStore = null,
                this.options.outgoingStore = null),
                this.incomingStore = this.options.incomingStore || new m.default,
                this.outgoingStore = this.options.outgoingStore || new m.default,
                this.disconnecting = !1,
                this.disconnected = !1,
                this._deferredReconnect = null,
                this._reconnect()
            }
            ;
            return this.disconnecting && !this.disconnected ? this._deferredReconnect = A : A(),
            this
        }
        _flushVolatile() {
            this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),
            Object.keys(this.outgoing).forEach(E => {
                this.outgoing[E].volatile && typeof this.outgoing[E].cb == "function" && (this.outgoing[E].cb(new Error("Connection closed")),
                delete this.outgoing[E])
            }
            ))
        }
        _flush() {
            this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing),
            Object.keys(this.outgoing).forEach(E => {
                typeof this.outgoing[E].cb == "function" && (this.outgoing[E].cb(new Error("Connection closed")),
                delete this.outgoing[E])
            }
            ))
        }
        _removeTopicAliasAndRecoverTopicName(E) {
            let A;
            E.properties && (A = E.properties.topicAlias);
            let U = E.topic.toString();
            if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", A, U),
            U.length === 0) {
                if (typeof A > "u")
                    return new Error("Unregistered Topic Alias");
                if (U = this.topicAliasSend.getTopicByAlias(A),
                typeof U > "u")
                    return new Error("Unregistered Topic Alias");
                E.topic = U
            }
            A && delete E.properties.topicAlias
        }
        _checkDisconnecting(E) {
            return this.disconnecting && (E && E !== this.noop ? E(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))),
            this.disconnecting
        }
        _reconnect() {
            this.log("_reconnect: emitting reconnect to client"),
            this.emit("reconnect"),
            this.connected ? (this.end( () => {
                this.connect()
            }
            ),
            this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"),
            this.connect())
        }
        _setupReconnect() {
            !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"),
            this.emit("offline"),
            this.log("_setupReconnect :: set `reconnecting` to `true`"),
            this.reconnecting = !0),
            this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod),
            this.reconnectTimer = setInterval( () => {
                this.log("reconnectTimer :: reconnect triggered!"),
                this._reconnect()
            }
            , this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...")
        }
        _clearReconnect() {
            this.log("_clearReconnect : clearing reconnect timer"),
            this.reconnectTimer && (clearInterval(this.reconnectTimer),
            this.reconnectTimer = null)
        }
        _cleanUp(E, A, U={}) {
            if (A && (this.log("_cleanUp :: done callback provided for on stream close"),
            this.stream.on("close", A)),
            this.log("_cleanUp :: forced? %s", E),
            E)
                this.options.reconnectPeriod === 0 && this.options.clean && this._flush(),
                this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId),
                this.stream.destroy();
            else {
                let W = Object.assign({
                    cmd: "disconnect"
                }, U);
                this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId),
                this._sendPacket(W, () => {
                    this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId),
                    w( () => {
                        this.stream.end( () => {
                            this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId)
                        }
                        )
                    }
                    )
                }
                )
            }
            !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),
            this._clearReconnect(),
            this._setupReconnect()),
            this._destroyKeepaliveManager(),
            A && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId),
            this.stream.removeListener("close", A),
            A())
        }
        _storeAndSend(E, A, U) {
            this.log("storeAndSend :: store packet with cmd %s to outgoingStore", E.cmd);
            let W = E, $;
            if (W.cmd === "publish" && (W = (0,
            c.default)(E),
            $ = this._removeTopicAliasAndRecoverTopicName(W),
            $))
                return A && A($);
            this.outgoingStore.put(W, Q => {
                if (Q)
                    return A && A(Q);
                U(),
                this._writePacket(E, A)
            }
            )
        }
        _applyTopicAlias(E) {
            if (this.options.protocolVersion === 5 && E.cmd === "publish") {
                let A;
                E.properties && (A = E.properties.topicAlias);
                let U = E.topic.toString();
                if (this.topicAliasSend)
                    if (A) {
                        if (U.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", U, A),
                        !this.topicAliasSend.put(U, A)))
                            return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", U, A),
                            new Error("Sending Topic Alias out of range")
                    } else
                        U.length !== 0 && (this.options.autoAssignTopicAlias ? (A = this.topicAliasSend.getAliasByTopic(U),
                        A ? (E.topic = "",
                        E.properties = Object.assign(Object.assign({}, E.properties), {
                            topicAlias: A
                        }),
                        this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", U, A)) : (A = this.topicAliasSend.getLruAlias(),
                        this.topicAliasSend.put(U, A),
                        E.properties = Object.assign(Object.assign({}, E.properties), {
                            topicAlias: A
                        }),
                        this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", U, A))) : this.options.autoUseTopicAlias && (A = this.topicAliasSend.getAliasByTopic(U),
                        A && (E.topic = "",
                        E.properties = Object.assign(Object.assign({}, E.properties), {
                            topicAlias: A
                        }),
                        this.log("applyTopicAlias :: auto use topic: %s - alias: %d", U, A))));
                else if (A)
                    return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", U, A),
                    new Error("Sending Topic Alias out of range")
            }
        }
        _noop(E) {
            this.log("noop ::", E)
        }
        _writePacket(E, A) {
            this.log("_writePacket :: packet: %O", E),
            this.log("_writePacket :: emitting `packetsend`"),
            this.emit("packetsend", E),
            this.log("_writePacket :: writing to stream");
            let U = o.default.writeToStream(E, this.stream, this.options);
            this.log("_writePacket :: writeToStream result %s", U),
            !U && A && A !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."),
            this.stream.once("drain", A)) : A && (this.log("_writePacket :: invoking cb"),
            A())
        }
        _sendPacket(E, A, U, W) {
            this.log("_sendPacket :: (%s) ::  start", this.options.clientId),
            U = U || this.noop,
            A = A || this.noop;
            let $ = this._applyTopicAlias(E);
            if ($) {
                A($);
                return
            }
            if (!this.connected) {
                if (E.cmd === "auth") {
                    this._writePacket(E, A);
                    return
                }
                this.log("_sendPacket :: client not connected. Storing packet offline."),
                this._storePacket(E, A, U);
                return
            }
            if (W) {
                this._writePacket(E, A);
                return
            }
            switch (E.cmd) {
            case "publish":
                break;
            case "pubrel":
                this._storeAndSend(E, A, U);
                return;
            default:
                this._writePacket(E, A);
                return
            }
            switch (E.qos) {
            case 2:
            case 1:
                this._storeAndSend(E, A, U);
                break;
            case 0:
            default:
                this._writePacket(E, A);
                break
            }
            this.log("_sendPacket :: (%s) ::  end", this.options.clientId)
        }
        _storePacket(E, A, U) {
            this.log("_storePacket :: packet: %o", E),
            this.log("_storePacket :: cb? %s", !!A),
            U = U || this.noop;
            let W = E;
            if (W.cmd === "publish") {
                W = (0,
                c.default)(E);
                let Q = this._removeTopicAliasAndRecoverTopicName(W);
                if (Q)
                    return A && A(Q)
            }
            let $ = W.qos || 0;
            $ === 0 && this.queueQoSZero || W.cmd !== "publish" ? this.queue.push({
                packet: W,
                cb: A
            }) : $ > 0 ? (A = this.outgoing[W.messageId] ? this.outgoing[W.messageId].cb : null,
            this.outgoingStore.put(W, Q => {
                if (Q)
                    return A && A(Q);
                U()
            }
            )) : A && A(new Error("No connection to broker"))
        }
        _setupKeepaliveManager() {
            this.log("_setupKeepaliveManager :: keepalive %d (seconds)", this.options.keepalive),
            !this.keepaliveManager && this.options.keepalive && (this.keepaliveManager = new b.default(this,this.options.timerVariant))
        }
        _destroyKeepaliveManager() {
            this.keepaliveManager && (this.log("_destroyKeepaliveManager :: destroying keepalive manager"),
            this.keepaliveManager.destroy(),
            this.keepaliveManager = null)
        }
        reschedulePing(E=!1) {
            this.keepaliveManager && this.options.keepalive && (E || this.options.reschedulePings) && this._reschedulePing()
        }
        _reschedulePing() {
            this.log("_reschedulePing :: rescheduling ping"),
            this.keepaliveManager.reschedule()
        }
        sendPing() {
            this.log("_sendPing :: sending pingreq"),
            this._sendPacket({
                cmd: "pingreq"
            })
        }
        onKeepaliveTimeout() {
            this.emit("error", new Error("Keepalive timeout")),
            this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),
            this._cleanUp(!0)
        }
        _resubscribe() {
            this.log("_resubscribe");
            let E = Object.keys(this._resubscribeTopics);
            if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && E.length > 0)
                if (this.options.resubscribe)
                    if (this.options.protocolVersion === 5) {
                        this.log("_resubscribe: protocolVersion 5");
                        for (let A = 0; A < E.length; A++) {
                            let U = {};
                            U[E[A]] = this._resubscribeTopics[E[A]],
                            U.resubscribe = !0,
                            this.subscribe(U, {
                                properties: U[E[A]].properties
                            })
                        }
                    } else
                        this._resubscribeTopics.resubscribe = !0,
                        this.subscribe(this._resubscribeTopics);
                else
                    this._resubscribeTopics = {};
            this._firstConnection = !1
        }
        _onConnect(E) {
            if (this.disconnected) {
                this.emit("connect", E);
                return
            }
            this.connackPacket = E,
            this.messageIdProvider.clear(),
            this._setupKeepaliveManager(),
            this.connected = !0;
            let A = () => {
                let U = this.outgoingStore.createStream()
                  , W = () => {
                    U.destroy(),
                    U = null,
                    this._flushStoreProcessingQueue(),
                    $()
                }
                  , $ = () => {
                    this._storeProcessing = !1,
                    this._packetIdsDuringStoreProcessing = {}
                }
                ;
                this.once("close", W),
                U.on("error", O => {
                    $(),
                    this._flushStoreProcessingQueue(),
                    this.removeListener("close", W),
                    this.emit("error", O)
                }
                );
                let Q = () => {
                    if (!U)
                        return;
                    let O = U.read(1), j;
                    if (!O) {
                        U.once("readable", Q);
                        return
                    }
                    if (this._storeProcessing = !0,
                    this._packetIdsDuringStoreProcessing[O.messageId]) {
                        Q();
                        return
                    }
                    !this.disconnecting && !this.reconnectTimer ? (j = this.outgoing[O.messageId] ? this.outgoing[O.messageId].cb : null,
                    this.outgoing[O.messageId] = {
                        volatile: !1,
                        cb(Y, V) {
                            j && j(Y, V),
                            Q()
                        }
                    },
                    this._packetIdsDuringStoreProcessing[O.messageId] = !0,
                    this.messageIdProvider.register(O.messageId) ? this._sendPacket(O, void 0, void 0, !0) : this.log("messageId: %d has already used.", O.messageId)) : U.destroy && U.destroy()
                }
                ;
                U.on("end", () => {
                    let O = !0;
                    for (let j in this._packetIdsDuringStoreProcessing)
                        if (!this._packetIdsDuringStoreProcessing[j]) {
                            O = !1;
                            break
                        }
                    this.removeListener("close", W),
                    O ? ($(),
                    this._invokeAllStoreProcessingQueue(),
                    this.emit("connect", E)) : A()
                }
                ),
                Q()
            }
            ;
            A()
        }
        _invokeStoreProcessingQueue() {
            if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
                let E = this._storeProcessingQueue[0];
                if (E && E.invoke())
                    return this._storeProcessingQueue.shift(),
                    !0
            }
            return !1
        }
        _invokeAllStoreProcessingQueue() {
            for (; this._invokeStoreProcessingQueue(); )
                ;
        }
        _flushStoreProcessingQueue() {
            for (let E of this._storeProcessingQueue)
                E.cbStorePut && E.cbStorePut(new Error("Connection closed")),
                E.callback && E.callback(new Error("Connection closed"));
            this._storeProcessingQueue.splice(0)
        }
        _removeOutgoingAndStoreMessage(E, A) {
            delete this.outgoing[E],
            this.outgoingStore.del({
                messageId: E
            }, (U, W) => {
                A(U, W),
                this.messageIdProvider.deallocate(E),
                this._invokeStoreProcessingQueue()
            }
            )
        }
    }
    ;
    R.VERSION = _.MQTTJS_VERSION,
    e.default = R
}
), yh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = fl()
      , n = class {
        constructor() {
            this.numberAllocator = new t.NumberAllocator(1,65535)
        }
        allocate() {
            return this.lastId = this.numberAllocator.alloc(),
            this.lastId
        }
        getLastAllocated() {
            return this.lastId
        }
        register(i) {
            return this.numberAllocator.use(i)
        }
        deallocate(i) {
            this.numberAllocator.free(i)
        }
        clear() {
            this.numberAllocator.clear()
        }
    }
    ;
    e.default = n
}
);
function jt(e) {
    throw new RangeError(gl[e])
}
function Ws(e, t) {
    let n = e.split("@")
      , i = "";
    n.length > 1 && (i = n[0] + "@",
    e = n[1]);
    let s = function(r, o) {
        let a = []
          , l = r.length;
        for (; l--; )
            a[l] = o(r[l]);
        return a
    }((e = e.replace(ml, ".")).split("."), t).join(".");
    return i + s
}
function Vs(e) {
    let t = []
      , n = 0
      , i = e.length;
    for (; n < i; ) {
        let s = e.charCodeAt(n++);
        if (s >= 55296 && s <= 56319 && n < i) {
            let r = e.charCodeAt(n++);
            (64512 & r) == 56320 ? t.push(((1023 & s) << 10) + (1023 & r) + 65536) : (t.push(s),
            n--)
        } else
            t.push(s)
    }
    return t
}
var Gs, Hs, ml, gl, et, jn, Zr, ei, ti, ni, Ct, _h = We( () => {
    ie(),
    se(),
    oe(),
    Gs = /^xn--/,
    Hs = /[^\0-\x7E]/,
    ml = /[\x2E\u3002\uFF0E\uFF61]/g,
    gl = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    },
    et = Math.floor,
    jn = String.fromCharCode,
    Zr = function(e, t) {
        return e + 22 + 75 * (e < 26) - ((t != 0) << 5)
    }
    ,
    ei = function(e, t, n) {
        let i = 0;
        for (e = n ? et(e / 700) : e >> 1,
        e += et(e / t); e > 455; i += 36)
            e = et(e / 35);
        return et(i + 36 * e / (e + 38))
    }
    ,
    ti = function(e) {
        let t = []
          , n = e.length
          , i = 0
          , s = 128
          , r = 72
          , o = e.lastIndexOf("-");
        o < 0 && (o = 0);
        for (let l = 0; l < o; ++l)
            e.charCodeAt(l) >= 128 && jt("not-basic"),
            t.push(e.charCodeAt(l));
        for (let l = o > 0 ? o + 1 : 0; l < n; ) {
            let c = i;
            for (let d = 1, m = 36; ; m += 36) {
                l >= n && jt("invalid-input");
                let y = (a = e.charCodeAt(l++)) - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : 36;
                (y >= 36 || y > et((2147483647 - i) / d)) && jt("overflow"),
                i += y * d;
                let _ = m <= r ? 1 : m >= r + 26 ? 26 : m - r;
                if (y < _)
                    break;
                let g = 36 - _;
                d > et(2147483647 / g) && jt("overflow"),
                d *= g
            }
            let u = t.length + 1;
            r = ei(i - c, u, c == 0),
            et(i / u) > 2147483647 - s && jt("overflow"),
            s += et(i / u),
            i %= u,
            t.splice(i++, 0, s)
        }
        var a;
        return String.fromCodePoint(...t)
    }
    ,
    ni = function(e) {
        let t = []
          , n = (e = Vs(e)).length
          , i = 128
          , s = 0
          , r = 72;
        for (let l of e)
            l < 128 && t.push(jn(l));
        let o = t.length
          , a = o;
        for (o && t.push("-"); a < n; ) {
            let l = 2147483647;
            for (let u of e)
                u >= i && u < l && (l = u);
            let c = a + 1;
            l - i > et((2147483647 - s) / c) && jt("overflow"),
            s += (l - i) * c,
            i = l;
            for (let u of e)
                if (u < i && ++s > 2147483647 && jt("overflow"),
                u == i) {
                    let d = s;
                    for (let m = 36; ; m += 36) {
                        let y = m <= r ? 1 : m >= r + 26 ? 26 : m - r;
                        if (d < y)
                            break;
                        let _ = d - y
                          , g = 36 - y;
                        t.push(jn(Zr(y + _ % g, 0))),
                        d = et(_ / g)
                    }
                    t.push(jn(Zr(d, 0))),
                    r = ei(s, c, a == o),
                    s = 0,
                    ++a
                }
            ++s,
            ++i
        }
        return t.join("")
    }
    ,
    Ct = {
        version: "2.1.0",
        ucs2: {
            decode: Vs,
            encode: e => String.fromCodePoint(...e)
        },
        decode: ti,
        encode: ni,
        toASCII: function(e) {
            return Ws(e, function(t) {
                return Hs.test(t) ? "xn--" + ni(t) : t
            })
        },
        toUnicode: function(e) {
            return Ws(e, function(t) {
                return Gs.test(t) ? ti(t.slice(4).toLowerCase()) : t
            })
        }
    },
    Ct.decode,
    Ct.encode,
    Ct.toASCII,
    Ct.toUnicode,
    Ct.ucs2,
    Ct.version
}
);
function bh(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
var $s, rn, Ks, at, Th = We( () => {
    ie(),
    se(),
    oe(),
    $s = function(e, t, n, i) {
        t = t || "&",
        n = n || "=";
        var s = {};
        if (typeof e != "string" || e.length === 0)
            return s;
        var r = /\+/g;
        e = e.split(t);
        var o = 1e3;
        i && typeof i.maxKeys == "number" && (o = i.maxKeys);
        var a = e.length;
        o > 0 && a > o && (a = o);
        for (var l = 0; l < a; ++l) {
            var c, u, d, m, y = e[l].replace(r, "%20"), _ = y.indexOf(n);
            _ >= 0 ? (c = y.substr(0, _),
            u = y.substr(_ + 1)) : (c = y,
            u = ""),
            d = decodeURIComponent(c),
            m = decodeURIComponent(u),
            bh(s, d) ? Array.isArray(s[d]) ? s[d].push(m) : s[d] = [s[d], m] : s[d] = m
        }
        return s
    }
    ,
    rn = function(e) {
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return ""
        }
    }
    ,
    Ks = function(e, t, n, i) {
        return t = t || "&",
        n = n || "=",
        e === null && (e = void 0),
        typeof e == "object" ? Object.keys(e).map(function(s) {
            var r = encodeURIComponent(rn(s)) + n;
            return Array.isArray(e[s]) ? e[s].map(function(o) {
                return r + encodeURIComponent(rn(o))
            }).join(t) : r + encodeURIComponent(rn(e[s]))
        }).join(t) : i ? encodeURIComponent(rn(i)) + n + encodeURIComponent(rn(e)) : ""
    }
    ,
    at = {},
    at.decode = at.parse = $s,
    at.encode = at.stringify = Ks,
    at.decode,
    at.encode,
    at.parse,
    at.stringify
}
);
function bo() {
    throw new Error("setTimeout has not been defined")
}
function To() {
    throw new Error("clearTimeout has not been defined")
}
function yl(e) {
    if (gt === setTimeout)
        return setTimeout(e, 0);
    if ((gt === bo || !gt) && setTimeout)
        return gt = setTimeout,
        setTimeout(e, 0);
    try {
        return gt(e, 0)
    } catch {
        try {
            return gt.call(null, e, 0)
        } catch {
            return gt.call(this || zt, e, 0)
        }
    }
}
function kh() {
    Jt && $t && (Jt = !1,
    $t.length ? ct = $t.concat(ct) : vn = -1,
    ct.length && _l())
}
function _l() {
    if (!Jt) {
        var e = yl(kh);
        Jt = !0;
        for (var t = ct.length; t; ) {
            for ($t = ct,
            ct = []; ++vn < t; )
                $t && $t[vn].run();
            vn = -1,
            t = ct.length
        }
        $t = null,
        Jt = !1,
        function(n) {
            if (yt === clearTimeout)
                return clearTimeout(n);
            if ((yt === To || !yt) && clearTimeout)
                return yt = clearTimeout,
                clearTimeout(n);
            try {
                yt(n)
            } catch {
                try {
                    return yt.call(null, n)
                } catch {
                    return yt.call(this || zt, n)
                }
            }
        }(e)
    }
}
function zs(e, t) {
    (this || zt).fun = e,
    (this || zt).array = t
}
function ft() {}
var Js, gt, yt, zt, Le, $t, ct, Jt, vn, De, wh = We( () => {
    ie(),
    se(),
    oe(),
    zt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global,
    Le = Js = {},
    function() {
        try {
            gt = typeof setTimeout == "function" ? setTimeout : bo
        } catch {
            gt = bo
        }
        try {
            yt = typeof clearTimeout == "function" ? clearTimeout : To
        } catch {
            yt = To
        }
    }(),
    ct = [],
    Jt = !1,
    vn = -1,
    Le.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        ct.push(new zs(e,t)),
        ct.length !== 1 || Jt || yl(_l)
    }
    ,
    zs.prototype.run = function() {
        (this || zt).fun.apply(null, (this || zt).array)
    }
    ,
    Le.title = "browser",
    Le.browser = !0,
    Le.env = {},
    Le.argv = [],
    Le.version = "",
    Le.versions = {},
    Le.on = ft,
    Le.addListener = ft,
    Le.once = ft,
    Le.off = ft,
    Le.removeListener = ft,
    Le.removeAllListeners = ft,
    Le.emit = ft,
    Le.prependListener = ft,
    Le.prependOnceListener = ft,
    Le.listeners = function(e) {
        return []
    }
    ,
    Le.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    Le.cwd = function() {
        return "/"
    }
    ,
    Le.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    Le.umask = function() {
        return 0
    }
    ,
    De = Js,
    De.addListener,
    De.argv,
    De.binding,
    De.browser,
    De.chdir,
    De.cwd,
    De.emit,
    De.env,
    De.listeners,
    De.nextTick,
    De.off,
    De.on,
    De.once,
    De.prependListener,
    De.prependOnceListener,
    De.removeAllListeners,
    De.removeListener,
    De.title,
    De.umask,
    De.version,
    De.versions
}
);
function vh() {
    if (ko)
        return Jn;
    ko = !0;
    var e = Jn = {}, t, n;
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    (function() {
        try {
            typeof setTimeout == "function" ? t = setTimeout : t = i
        } catch {
            t = i
        }
        try {
            typeof clearTimeout == "function" ? n = clearTimeout : n = s
        } catch {
            n = s
        }
    }
    )();
    function r(g) {
        if (t === setTimeout)
            return setTimeout(g, 0);
        if ((t === i || !t) && setTimeout)
            return t = setTimeout,
            setTimeout(g, 0);
        try {
            return t(g, 0)
        } catch {
            try {
                return t.call(null, g, 0)
            } catch {
                return t.call(this || Vt, g, 0)
            }
        }
    }
    function o(g) {
        if (n === clearTimeout)
            return clearTimeout(g);
        if ((n === s || !n) && clearTimeout)
            return n = clearTimeout,
            clearTimeout(g);
        try {
            return n(g)
        } catch {
            try {
                return n.call(null, g)
            } catch {
                return n.call(this || Vt, g)
            }
        }
    }
    var a = [], l = !1, c, u = -1;
    function d() {
        !l || !c || (l = !1,
        c.length ? a = c.concat(a) : u = -1,
        a.length && m())
    }
    function m() {
        if (!l) {
            var g = r(d);
            l = !0;
            for (var b = a.length; b; ) {
                for (c = a,
                a = []; ++u < b; )
                    c && c[u].run();
                u = -1,
                b = a.length
            }
            c = null,
            l = !1,
            o(g)
        }
    }
    e.nextTick = function(g) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var k = 1; k < arguments.length; k++)
                b[k - 1] = arguments[k];
        a.push(new y(g,b)),
        a.length === 1 && !l && r(m)
    }
    ;
    function y(g, b) {
        (this || Vt).fun = g,
        (this || Vt).array = b
    }
    y.prototype.run = function() {
        (this || Vt).fun.apply(null, (this || Vt).array)
    }
    ,
    e.title = "browser",
    e.browser = !0,
    e.env = {},
    e.argv = [],
    e.version = "",
    e.versions = {};
    function _() {}
    return e.on = _,
    e.addListener = _,
    e.once = _,
    e.off = _,
    e.removeListener = _,
    e.removeAllListeners = _,
    e.emit = _,
    e.prependListener = _,
    e.prependOnceListener = _,
    e.listeners = function(g) {
        return []
    }
    ,
    e.binding = function(g) {
        throw new Error("process.binding is not supported")
    }
    ,
    e.cwd = function() {
        return "/"
    }
    ,
    e.chdir = function(g) {
        throw new Error("process.chdir is not supported")
    }
    ,
    e.umask = function() {
        return 0
    }
    ,
    Jn
}
var Jn, ko, Vt, Ce, bl = We( () => {
    ie(),
    se(),
    oe(),
    Jn = {},
    ko = !1,
    Vt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global,
    Ce = vh(),
    Ce.platform = "browser",
    Ce.addListener,
    Ce.argv,
    Ce.binding,
    Ce.browser,
    Ce.chdir,
    Ce.cwd,
    Ce.emit,
    Ce.env,
    Ce.listeners,
    Ce.nextTick,
    Ce.off,
    Ce.on,
    Ce.once,
    Ce.prependListener,
    Ce.prependOnceListener,
    Ce.removeAllListeners,
    Ce.removeListener,
    Ce.title,
    Ce.umask,
    Ce.version,
    Ce.versions
}
);
function Eh() {
    if (wo)
        return Yn;
    wo = !0;
    var e = Ce;
    function t(r) {
        if (typeof r != "string")
            throw new TypeError("Path must be a string. Received " + JSON.stringify(r))
    }
    function n(r, o) {
        for (var a = "", l = 0, c = -1, u = 0, d, m = 0; m <= r.length; ++m) {
            if (m < r.length)
                d = r.charCodeAt(m);
            else {
                if (d === 47)
                    break;
                d = 47
            }
            if (d === 47) {
                if (!(c === m - 1 || u === 1))
                    if (c !== m - 1 && u === 2) {
                        if (a.length < 2 || l !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
                            if (a.length > 2) {
                                var y = a.lastIndexOf("/");
                                if (y !== a.length - 1) {
                                    y === -1 ? (a = "",
                                    l = 0) : (a = a.slice(0, y),
                                    l = a.length - 1 - a.lastIndexOf("/")),
                                    c = m,
                                    u = 0;
                                    continue
                                }
                            } else if (a.length === 2 || a.length === 1) {
                                a = "",
                                l = 0,
                                c = m,
                                u = 0;
                                continue
                            }
                        }
                        o && (a.length > 0 ? a += "/.." : a = "..",
                        l = 2)
                    } else
                        a.length > 0 ? a += "/" + r.slice(c + 1, m) : a = r.slice(c + 1, m),
                        l = m - c - 1;
                c = m,
                u = 0
            } else
                d === 46 && u !== -1 ? ++u : u = -1
        }
        return a
    }
    function i(r, o) {
        var a = o.dir || o.root
          , l = o.base || (o.name || "") + (o.ext || "");
        return a ? a === o.root ? a + l : a + r + l : l
    }
    var s = {
        resolve: function() {
            for (var r = "", o = !1, a, l = arguments.length - 1; l >= -1 && !o; l--) {
                var c;
                l >= 0 ? c = arguments[l] : (a === void 0 && (a = e.cwd()),
                c = a),
                t(c),
                c.length !== 0 && (r = c + "/" + r,
                o = c.charCodeAt(0) === 47)
            }
            return r = n(r, !o),
            o ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : "."
        },
        normalize: function(r) {
            if (t(r),
            r.length === 0)
                return ".";
            var o = r.charCodeAt(0) === 47
              , a = r.charCodeAt(r.length - 1) === 47;
            return r = n(r, !o),
            r.length === 0 && !o && (r = "."),
            r.length > 0 && a && (r += "/"),
            o ? "/" + r : r
        },
        isAbsolute: function(r) {
            return t(r),
            r.length > 0 && r.charCodeAt(0) === 47
        },
        join: function() {
            if (arguments.length === 0)
                return ".";
            for (var r, o = 0; o < arguments.length; ++o) {
                var a = arguments[o];
                t(a),
                a.length > 0 && (r === void 0 ? r = a : r += "/" + a)
            }
            return r === void 0 ? "." : s.normalize(r)
        },
        relative: function(r, o) {
            if (t(r),
            t(o),
            r === o || (r = s.resolve(r),
            o = s.resolve(o),
            r === o))
                return "";
            for (var a = 1; a < r.length && r.charCodeAt(a) === 47; ++a)
                ;
            for (var l = r.length, c = l - a, u = 1; u < o.length && o.charCodeAt(u) === 47; ++u)
                ;
            for (var d = o.length, m = d - u, y = c < m ? c : m, _ = -1, g = 0; g <= y; ++g) {
                if (g === y) {
                    if (m > y) {
                        if (o.charCodeAt(u + g) === 47)
                            return o.slice(u + g + 1);
                        if (g === 0)
                            return o.slice(u + g)
                    } else
                        c > y && (r.charCodeAt(a + g) === 47 ? _ = g : g === 0 && (_ = 0));
                    break
                }
                var b = r.charCodeAt(a + g)
                  , k = o.charCodeAt(u + g);
                if (b !== k)
                    break;
                b === 47 && (_ = g)
            }
            var w = "";
            for (g = a + _ + 1; g <= l; ++g)
                (g === l || r.charCodeAt(g) === 47) && (w.length === 0 ? w += ".." : w += "/..");
            return w.length > 0 ? w + o.slice(u + _) : (u += _,
            o.charCodeAt(u) === 47 && ++u,
            o.slice(u))
        },
        _makeLong: function(r) {
            return r
        },
        dirname: function(r) {
            if (t(r),
            r.length === 0)
                return ".";
            for (var o = r.charCodeAt(0), a = o === 47, l = -1, c = !0, u = r.length - 1; u >= 1; --u)
                if (o = r.charCodeAt(u),
                o === 47) {
                    if (!c) {
                        l = u;
                        break
                    }
                } else
                    c = !1;
            return l === -1 ? a ? "/" : "." : a && l === 1 ? "//" : r.slice(0, l)
        },
        basename: function(r, o) {
            if (o !== void 0 && typeof o != "string")
                throw new TypeError('"ext" argument must be a string');
            t(r);
            var a = 0, l = -1, c = !0, u;
            if (o !== void 0 && o.length > 0 && o.length <= r.length) {
                if (o.length === r.length && o === r)
                    return "";
                var d = o.length - 1
                  , m = -1;
                for (u = r.length - 1; u >= 0; --u) {
                    var y = r.charCodeAt(u);
                    if (y === 47) {
                        if (!c) {
                            a = u + 1;
                            break
                        }
                    } else
                        m === -1 && (c = !1,
                        m = u + 1),
                        d >= 0 && (y === o.charCodeAt(d) ? --d === -1 && (l = u) : (d = -1,
                        l = m))
                }
                return a === l ? l = m : l === -1 && (l = r.length),
                r.slice(a, l)
            } else {
                for (u = r.length - 1; u >= 0; --u)
                    if (r.charCodeAt(u) === 47) {
                        if (!c) {
                            a = u + 1;
                            break
                        }
                    } else
                        l === -1 && (c = !1,
                        l = u + 1);
                return l === -1 ? "" : r.slice(a, l)
            }
        },
        extname: function(r) {
            t(r);
            for (var o = -1, a = 0, l = -1, c = !0, u = 0, d = r.length - 1; d >= 0; --d) {
                var m = r.charCodeAt(d);
                if (m === 47) {
                    if (!c) {
                        a = d + 1;
                        break
                    }
                    continue
                }
                l === -1 && (c = !1,
                l = d + 1),
                m === 46 ? o === -1 ? o = d : u !== 1 && (u = 1) : o !== -1 && (u = -1)
            }
            return o === -1 || l === -1 || u === 0 || u === 1 && o === l - 1 && o === a + 1 ? "" : r.slice(o, l)
        },
        format: function(r) {
            if (r === null || typeof r != "object")
                throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof r);
            return i("/", r)
        },
        parse: function(r) {
            t(r);
            var o = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (r.length === 0)
                return o;
            var a = r.charCodeAt(0), l = a === 47, c;
            l ? (o.root = "/",
            c = 1) : c = 0;
            for (var u = -1, d = 0, m = -1, y = !0, _ = r.length - 1, g = 0; _ >= c; --_) {
                if (a = r.charCodeAt(_),
                a === 47) {
                    if (!y) {
                        d = _ + 1;
                        break
                    }
                    continue
                }
                m === -1 && (y = !1,
                m = _ + 1),
                a === 46 ? u === -1 ? u = _ : g !== 1 && (g = 1) : u !== -1 && (g = -1)
            }
            return u === -1 || m === -1 || g === 0 || g === 1 && u === m - 1 && u === d + 1 ? m !== -1 && (d === 0 && l ? o.base = o.name = r.slice(1, m) : o.base = o.name = r.slice(d, m)) : (d === 0 && l ? (o.name = r.slice(1, u),
            o.base = r.slice(1, m)) : (o.name = r.slice(d, u),
            o.base = r.slice(d, m)),
            o.ext = r.slice(u, m)),
            d > 0 ? o.dir = r.slice(0, d - 1) : l && (o.dir = "/"),
            o
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    return s.posix = s,
    Yn = s,
    Yn
}
var Yn, wo, vo, Sh = We( () => {
    ie(),
    se(),
    oe(),
    bl(),
    Yn = {},
    wo = !1,
    vo = Eh()
}
), Tl = {};
Yt(Tl, {
    URL: () => Bl,
    Url: () => Ul,
    default: () => Se,
    fileURLToPath: () => kl,
    format: () => Ml,
    parse: () => Ll,
    pathToFileURL: () => wl,
    resolve: () => xl,
    resolveObject: () => Dl
});
function Xe() {
    this.protocol = null,
    this.slashes = null,
    this.auth = null,
    this.host = null,
    this.port = null,
    this.hostname = null,
    this.hash = null,
    this.search = null,
    this.query = null,
    this.pathname = null,
    this.path = null,
    this.href = null
}
function _n(e, t, n) {
    if (e && nt.isObject(e) && e instanceof Xe)
        return e;
    var i = new Xe;
    return i.parse(e, t, n),
    i
}
function Ih() {
    if (Eo)
        return Qn;
    Eo = !0;
    var e = De;
    function t(r) {
        if (typeof r != "string")
            throw new TypeError("Path must be a string. Received " + JSON.stringify(r))
    }
    function n(r, o) {
        for (var a = "", l = 0, c = -1, u = 0, d, m = 0; m <= r.length; ++m) {
            if (m < r.length)
                d = r.charCodeAt(m);
            else {
                if (d === 47)
                    break;
                d = 47
            }
            if (d === 47) {
                if (!(c === m - 1 || u === 1))
                    if (c !== m - 1 && u === 2) {
                        if (a.length < 2 || l !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
                            if (a.length > 2) {
                                var y = a.lastIndexOf("/");
                                if (y !== a.length - 1) {
                                    y === -1 ? (a = "",
                                    l = 0) : (a = a.slice(0, y),
                                    l = a.length - 1 - a.lastIndexOf("/")),
                                    c = m,
                                    u = 0;
                                    continue
                                }
                            } else if (a.length === 2 || a.length === 1) {
                                a = "",
                                l = 0,
                                c = m,
                                u = 0;
                                continue
                            }
                        }
                        o && (a.length > 0 ? a += "/.." : a = "..",
                        l = 2)
                    } else
                        a.length > 0 ? a += "/" + r.slice(c + 1, m) : a = r.slice(c + 1, m),
                        l = m - c - 1;
                c = m,
                u = 0
            } else
                d === 46 && u !== -1 ? ++u : u = -1
        }
        return a
    }
    function i(r, o) {
        var a = o.dir || o.root
          , l = o.base || (o.name || "") + (o.ext || "");
        return a ? a === o.root ? a + l : a + r + l : l
    }
    var s = {
        resolve: function() {
            for (var r = "", o = !1, a, l = arguments.length - 1; l >= -1 && !o; l--) {
                var c;
                l >= 0 ? c = arguments[l] : (a === void 0 && (a = e.cwd()),
                c = a),
                t(c),
                c.length !== 0 && (r = c + "/" + r,
                o = c.charCodeAt(0) === 47)
            }
            return r = n(r, !o),
            o ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : "."
        },
        normalize: function(r) {
            if (t(r),
            r.length === 0)
                return ".";
            var o = r.charCodeAt(0) === 47
              , a = r.charCodeAt(r.length - 1) === 47;
            return r = n(r, !o),
            r.length === 0 && !o && (r = "."),
            r.length > 0 && a && (r += "/"),
            o ? "/" + r : r
        },
        isAbsolute: function(r) {
            return t(r),
            r.length > 0 && r.charCodeAt(0) === 47
        },
        join: function() {
            if (arguments.length === 0)
                return ".";
            for (var r, o = 0; o < arguments.length; ++o) {
                var a = arguments[o];
                t(a),
                a.length > 0 && (r === void 0 ? r = a : r += "/" + a)
            }
            return r === void 0 ? "." : s.normalize(r)
        },
        relative: function(r, o) {
            if (t(r),
            t(o),
            r === o || (r = s.resolve(r),
            o = s.resolve(o),
            r === o))
                return "";
            for (var a = 1; a < r.length && r.charCodeAt(a) === 47; ++a)
                ;
            for (var l = r.length, c = l - a, u = 1; u < o.length && o.charCodeAt(u) === 47; ++u)
                ;
            for (var d = o.length, m = d - u, y = c < m ? c : m, _ = -1, g = 0; g <= y; ++g) {
                if (g === y) {
                    if (m > y) {
                        if (o.charCodeAt(u + g) === 47)
                            return o.slice(u + g + 1);
                        if (g === 0)
                            return o.slice(u + g)
                    } else
                        c > y && (r.charCodeAt(a + g) === 47 ? _ = g : g === 0 && (_ = 0));
                    break
                }
                var b = r.charCodeAt(a + g)
                  , k = o.charCodeAt(u + g);
                if (b !== k)
                    break;
                b === 47 && (_ = g)
            }
            var w = "";
            for (g = a + _ + 1; g <= l; ++g)
                (g === l || r.charCodeAt(g) === 47) && (w.length === 0 ? w += ".." : w += "/..");
            return w.length > 0 ? w + o.slice(u + _) : (u += _,
            o.charCodeAt(u) === 47 && ++u,
            o.slice(u))
        },
        _makeLong: function(r) {
            return r
        },
        dirname: function(r) {
            if (t(r),
            r.length === 0)
                return ".";
            for (var o = r.charCodeAt(0), a = o === 47, l = -1, c = !0, u = r.length - 1; u >= 1; --u)
                if (o = r.charCodeAt(u),
                o === 47) {
                    if (!c) {
                        l = u;
                        break
                    }
                } else
                    c = !1;
            return l === -1 ? a ? "/" : "." : a && l === 1 ? "//" : r.slice(0, l)
        },
        basename: function(r, o) {
            if (o !== void 0 && typeof o != "string")
                throw new TypeError('"ext" argument must be a string');
            t(r);
            var a = 0, l = -1, c = !0, u;
            if (o !== void 0 && o.length > 0 && o.length <= r.length) {
                if (o.length === r.length && o === r)
                    return "";
                var d = o.length - 1
                  , m = -1;
                for (u = r.length - 1; u >= 0; --u) {
                    var y = r.charCodeAt(u);
                    if (y === 47) {
                        if (!c) {
                            a = u + 1;
                            break
                        }
                    } else
                        m === -1 && (c = !1,
                        m = u + 1),
                        d >= 0 && (y === o.charCodeAt(d) ? --d === -1 && (l = u) : (d = -1,
                        l = m))
                }
                return a === l ? l = m : l === -1 && (l = r.length),
                r.slice(a, l)
            } else {
                for (u = r.length - 1; u >= 0; --u)
                    if (r.charCodeAt(u) === 47) {
                        if (!c) {
                            a = u + 1;
                            break
                        }
                    } else
                        l === -1 && (c = !1,
                        l = u + 1);
                return l === -1 ? "" : r.slice(a, l)
            }
        },
        extname: function(r) {
            t(r);
            for (var o = -1, a = 0, l = -1, c = !0, u = 0, d = r.length - 1; d >= 0; --d) {
                var m = r.charCodeAt(d);
                if (m === 47) {
                    if (!c) {
                        a = d + 1;
                        break
                    }
                    continue
                }
                l === -1 && (c = !1,
                l = d + 1),
                m === 46 ? o === -1 ? o = d : u !== 1 && (u = 1) : o !== -1 && (u = -1)
            }
            return o === -1 || l === -1 || u === 0 || u === 1 && o === l - 1 && o === a + 1 ? "" : r.slice(o, l)
        },
        format: function(r) {
            if (r === null || typeof r != "object")
                throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof r);
            return i("/", r)
        },
        parse: function(r) {
            t(r);
            var o = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (r.length === 0)
                return o;
            var a = r.charCodeAt(0), l = a === 47, c;
            l ? (o.root = "/",
            c = 1) : c = 0;
            for (var u = -1, d = 0, m = -1, y = !0, _ = r.length - 1, g = 0; _ >= c; --_) {
                if (a = r.charCodeAt(_),
                a === 47) {
                    if (!y) {
                        d = _ + 1;
                        break
                    }
                    continue
                }
                m === -1 && (y = !1,
                m = _ + 1),
                a === 46 ? u === -1 ? u = _ : g !== 1 && (g = 1) : u !== -1 && (g = -1)
            }
            return u === -1 || m === -1 || g === 0 || g === 1 && u === m - 1 && u === d + 1 ? m !== -1 && (d === 0 && l ? o.base = o.name = r.slice(1, m) : o.base = o.name = r.slice(d, m)) : (d === 0 && l ? (o.name = r.slice(1, u),
            o.base = r.slice(1, m)) : (o.name = r.slice(d, u),
            o.base = r.slice(d, m)),
            o.ext = r.slice(u, m)),
            d > 0 ? o.dir = r.slice(0, d - 1) : l && (o.dir = "/"),
            o
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    return s.posix = s,
    Qn = s,
    Qn
}
function Rh(e) {
    if (typeof e == "string")
        e = new URL(e);
    else if (!(e instanceof URL))
        throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if (e.protocol !== "file:")
        throw new Deno.errors.InvalidData("invalid url scheme");
    return tr ? Ah(e) : Oh(e)
}
function Ah(e) {
    let t = e.hostname
      , n = e.pathname;
    for (let i = 0; i < n.length; i++)
        if (n[i] === "%") {
            let s = n.codePointAt(i + 2) || 32;
            if (n[i + 1] === "2" && s === 102 || n[i + 1] === "5" && s === 99)
                throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
        }
    if (n = n.replace(Rl, "\\"),
    n = decodeURIComponent(n),
    t !== "")
        return `\\\\${t}${n}`;
    {
        let i = n.codePointAt(1) | 32
          , s = n[2];
        if (i < Sl || i > Il || s !== ":")
            throw new Deno.errors.InvalidData("file url path must be absolute");
        return n.slice(1)
    }
}
function Oh(e) {
    if (e.hostname !== "")
        throw new Deno.errors.InvalidData("invalid file url hostname");
    let t = e.pathname;
    for (let n = 0; n < t.length; n++)
        if (t[n] === "%") {
            let i = t.codePointAt(n + 2) || 32;
            if (t[n + 1] === "2" && i === 102)
                throw new Deno.errors.InvalidData("must not include encoded / characters")
        }
    return decodeURIComponent(t)
}
function Ph(e) {
    let t = So.resolve(e)
      , n = e.charCodeAt(e.length - 1);
    (n === El || tr && n === vl) && t[t.length - 1] !== So.sep && (t += "/");
    let i = new URL("file://");
    return t.includes("%") && (t = t.replace(Al, "%25")),
    !tr && t.includes("\\") && (t = t.replace(Ol, "%5C")),
    t.includes(`
`) && (t = t.replace(Pl, "%0A")),
    t.includes("\r") && (t = t.replace(Nl, "%0D")),
    t.includes("	") && (t = t.replace(Cl, "%09")),
    i.pathname = t,
    i
}
function kl(e) {
    if (typeof e == "string")
        e = new URL(e);
    else if (!(e instanceof URL))
        throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if (e.protocol !== "file:")
        throw new Deno.errors.InvalidData("invalid url scheme");
    return nr ? Nh(e) : Ch(e)
}
function Nh(e) {
    let t = e.hostname
      , n = e.pathname;
    for (let i = 0; i < n.length; i++)
        if (n[i] === "%") {
            let s = n.codePointAt(i + 2) || 32;
            if (n[i + 1] === "2" && s === 102 || n[i + 1] === "5" && s === 99)
                throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
        }
    if (n = n.replace(Vl, "\\"),
    n = decodeURIComponent(n),
    t !== "")
        return `\\\\${t}${n}`;
    {
        let i = n.codePointAt(1) | 32
          , s = n[2];
        if (i < jl || i > Wl || s !== ":")
            throw new Deno.errors.InvalidData("file url path must be absolute");
        return n.slice(1)
    }
}
function Ch(e) {
    if (e.hostname !== "")
        throw new Deno.errors.InvalidData("invalid file url hostname");
    let t = e.pathname;
    for (let n = 0; n < t.length; n++)
        if (t[n] === "%") {
            let i = t.codePointAt(n + 2) || 32;
            if (t[n + 1] === "2" && i === 102)
                throw new Deno.errors.InvalidData("must not include encoded / characters")
        }
    return decodeURIComponent(t)
}
function wl(e) {
    let t = vo.resolve(e)
      , n = e.charCodeAt(e.length - 1);
    (n === ql || nr && n === Fl) && t[t.length - 1] !== vo.sep && (t += "/");
    let i = new URL("file://");
    return t.includes("%") && (t = t.replace(Gl, "%25")),
    !nr && t.includes("\\") && (t = t.replace(Hl, "%5C")),
    t.includes(`
`) && (t = t.replace($l, "%0A")),
    t.includes("\r") && (t = t.replace(Kl, "%0D")),
    t.includes("	") && (t = t.replace(zl, "%09")),
    i.pathname = t,
    i
}
var Se, Ys, nt, Qs, Xs, Zs, ea, Wn, ri, ii, oi, ta, na, Vn, Wt, Gn, Qn, Eo, So, ra, vl, El, Sl, Il, tr, Rl, Al, Ol, Pl, Nl, Cl, ia, Ul, Ml, xl, Dl, Ll, Bl, Fl, ql, jl, Wl, nr, Vl, Gl, Hl, $l, Kl, zl, Uh = We( () => {
    ie(),
    se(),
    oe(),
    _h(),
    Th(),
    wh(),
    Sh(),
    bl(),
    Se = {},
    Ys = Ct,
    nt = {
        isString: function(e) {
            return typeof e == "string"
        },
        isObject: function(e) {
            return typeof e == "object" && e !== null
        },
        isNull: function(e) {
            return e === null
        },
        isNullOrUndefined: function(e) {
            return e == null
        }
    },
    Se.parse = _n,
    Se.resolve = function(e, t) {
        return _n(e, !1, !0).resolve(t)
    }
    ,
    Se.resolveObject = function(e, t) {
        return e ? _n(e, !1, !0).resolveObject(t) : t
    }
    ,
    Se.format = function(e) {
        return nt.isString(e) && (e = _n(e)),
        e instanceof Xe ? e.format() : Xe.prototype.format.call(e)
    }
    ,
    Se.Url = Xe,
    Qs = /^([a-z0-9.+-]+:)/i,
    Xs = /:[0-9]*$/,
    Zs = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    ea = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", `
`, "	"]),
    Wn = ["'"].concat(ea),
    ri = ["%", "/", "?", ";", "#"].concat(Wn),
    ii = ["/", "?", "#"],
    oi = /^[+a-z0-9A-Z_-]{0,63}$/,
    ta = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    na = {
        javascript: !0,
        "javascript:": !0
    },
    Vn = {
        javascript: !0,
        "javascript:": !0
    },
    Wt = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    },
    Gn = at,
    Xe.prototype.parse = function(e, t, n) {
        if (!nt.isString(e))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var i = e.indexOf("?")
          , s = i !== -1 && i < e.indexOf("#") ? "?" : "#"
          , r = e.split(s);
        r[0] = r[0].replace(/\\/g, "/");
        var o = e = r.join(s);
        if (o = o.trim(),
        !n && e.split("#").length === 1) {
            var a = Zs.exec(o);
            if (a)
                return this.path = o,
                this.href = o,
                this.pathname = a[1],
                a[2] ? (this.search = a[2],
                this.query = t ? Gn.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "",
                this.query = {}),
                this
        }
        var l = Qs.exec(o);
        if (l) {
            var c = (l = l[0]).toLowerCase();
            this.protocol = c,
            o = o.substr(l.length)
        }
        if (n || l || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var u = o.substr(0, 2) === "//";
            !u || l && Vn[l] || (o = o.substr(2),
            this.slashes = !0)
        }
        if (!Vn[l] && (u || l && !Wt[l])) {
            for (var d, m, y = -1, _ = 0; _ < ii.length; _++)
                (g = o.indexOf(ii[_])) !== -1 && (y === -1 || g < y) && (y = g);
            for ((m = y === -1 ? o.lastIndexOf("@") : o.lastIndexOf("@", y)) !== -1 && (d = o.slice(0, m),
            o = o.slice(m + 1),
            this.auth = decodeURIComponent(d)),
            y = -1,
            _ = 0; _ < ri.length; _++) {
                var g;
                (g = o.indexOf(ri[_])) !== -1 && (y === -1 || g < y) && (y = g)
            }
            y === -1 && (y = o.length),
            this.host = o.slice(0, y),
            o = o.slice(y),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
            if (!b)
                for (var k = this.hostname.split(/\./), w = (_ = 0,
                k.length); _ < w; _++) {
                    var T = k[_];
                    if (T && !T.match(oi)) {
                        for (var R = "", M = 0, E = T.length; M < E; M++)
                            T.charCodeAt(M) > 127 ? R += "x" : R += T[M];
                        if (!R.match(oi)) {
                            var A = k.slice(0, _)
                              , U = k.slice(_ + 1)
                              , W = T.match(ta);
                            W && (A.push(W[1]),
                            U.unshift(W[2])),
                            U.length && (o = "/" + U.join(".") + o),
                            this.hostname = A.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            b || (this.hostname = Ys.toASCII(this.hostname));
            var $ = this.port ? ":" + this.port : ""
              , Q = this.hostname || "";
            this.host = Q + $,
            this.href += this.host,
            b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            o[0] !== "/" && (o = "/" + o))
        }
        if (!na[c])
            for (_ = 0,
            w = Wn.length; _ < w; _++) {
                var O = Wn[_];
                if (o.indexOf(O) !== -1) {
                    var j = encodeURIComponent(O);
                    j === O && (j = escape(O)),
                    o = o.split(O).join(j)
                }
            }
        var Y = o.indexOf("#");
        Y !== -1 && (this.hash = o.substr(Y),
        o = o.slice(0, Y));
        var V = o.indexOf("?");
        if (V !== -1 ? (this.search = o.substr(V),
        this.query = o.substr(V + 1),
        t && (this.query = Gn.parse(this.query)),
        o = o.slice(0, V)) : t && (this.search = "",
        this.query = {}),
        o && (this.pathname = o),
        Wt[c] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            $ = this.pathname || "";
            var le = this.search || "";
            this.path = $ + le
        }
        return this.href = this.format(),
        this
    }
    ,
    Xe.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"),
        e += "@");
        var t = this.protocol || ""
          , n = this.pathname || ""
          , i = this.hash || ""
          , s = !1
          , r = "";
        this.host ? s = e + this.host : this.hostname && (s = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"),
        this.port && (s += ":" + this.port)),
        this.query && nt.isObject(this.query) && Object.keys(this.query).length && (r = Gn.stringify(this.query));
        var o = this.search || r && "?" + r || "";
        return t && t.substr(-1) !== ":" && (t += ":"),
        this.slashes || (!t || Wt[t]) && s !== !1 ? (s = "//" + (s || ""),
        n && n.charAt(0) !== "/" && (n = "/" + n)) : s || (s = ""),
        i && i.charAt(0) !== "#" && (i = "#" + i),
        o && o.charAt(0) !== "?" && (o = "?" + o),
        t + s + (n = n.replace(/[?#]/g, function(a) {
            return encodeURIComponent(a)
        })) + (o = o.replace("#", "%23")) + i
    }
    ,
    Xe.prototype.resolve = function(e) {
        return this.resolveObject(_n(e, !1, !0)).format()
    }
    ,
    Xe.prototype.resolveObject = function(e) {
        if (nt.isString(e)) {
            var t = new Xe;
            t.parse(e, !1, !0),
            e = t
        }
        for (var n = new Xe, i = Object.keys(this), s = 0; s < i.length; s++) {
            var r = i[s];
            n[r] = this[r]
        }
        if (n.hash = e.hash,
        e.href === "")
            return n.href = n.format(),
            n;
        if (e.slashes && !e.protocol) {
            for (var o = Object.keys(e), a = 0; a < o.length; a++) {
                var l = o[a];
                l !== "protocol" && (n[l] = e[l])
            }
            return Wt[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
            n.href = n.format(),
            n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!Wt[e.protocol]) {
                for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                    var d = c[u];
                    n[d] = e[d]
                }
                return n.href = n.format(),
                n
            }
            if (n.protocol = e.protocol,
            e.host || Vn[e.protocol])
                n.pathname = e.pathname;
            else {
                for (var m = (e.pathname || "").split("/"); m.length && !(e.host = m.shift()); )
                    ;
                e.host || (e.host = ""),
                e.hostname || (e.hostname = ""),
                m[0] !== "" && m.unshift(""),
                m.length < 2 && m.unshift(""),
                n.pathname = m.join("/")
            }
            if (n.search = e.search,
            n.query = e.query,
            n.host = e.host || "",
            n.auth = e.auth,
            n.hostname = e.hostname || e.host,
            n.port = e.port,
            n.pathname || n.search) {
                var y = n.pathname || ""
                  , _ = n.search || "";
                n.path = y + _
            }
            return n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        var g = n.pathname && n.pathname.charAt(0) === "/"
          , b = e.host || e.pathname && e.pathname.charAt(0) === "/"
          , k = b || g || n.host && e.pathname
          , w = k
          , T = n.pathname && n.pathname.split("/") || []
          , R = (m = e.pathname && e.pathname.split("/") || [],
        n.protocol && !Wt[n.protocol]);
        if (R && (n.hostname = "",
        n.port = null,
        n.host && (T[0] === "" ? T[0] = n.host : T.unshift(n.host)),
        n.host = "",
        e.protocol && (e.hostname = null,
        e.port = null,
        e.host && (m[0] === "" ? m[0] = e.host : m.unshift(e.host)),
        e.host = null),
        k = k && (m[0] === "" || T[0] === "")),
        b)
            n.host = e.host || e.host === "" ? e.host : n.host,
            n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname,
            n.search = e.search,
            n.query = e.query,
            T = m;
        else if (m.length)
            T || (T = []),
            T.pop(),
            T = T.concat(m),
            n.search = e.search,
            n.query = e.query;
        else if (!nt.isNullOrUndefined(e.search))
            return R && (n.hostname = n.host = T.shift(),
            (W = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = W.shift(),
            n.host = n.hostname = W.shift())),
            n.search = e.search,
            n.query = e.query,
            nt.isNull(n.pathname) && nt.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.href = n.format(),
            n;
        if (!T.length)
            return n.pathname = null,
            n.search ? n.path = "/" + n.search : n.path = null,
            n.href = n.format(),
            n;
        for (var M = T.slice(-1)[0], E = (n.host || e.host || T.length > 1) && (M === "." || M === "..") || M === "", A = 0, U = T.length; U >= 0; U--)
            (M = T[U]) === "." ? T.splice(U, 1) : M === ".." ? (T.splice(U, 1),
            A++) : A && (T.splice(U, 1),
            A--);
        if (!k && !w)
            for (; A--; A)
                T.unshift("..");
        !k || T[0] === "" || T[0] && T[0].charAt(0) === "/" || T.unshift(""),
        E && T.join("/").substr(-1) !== "/" && T.push("");
        var W, $ = T[0] === "" || T[0] && T[0].charAt(0) === "/";
        return R && (n.hostname = n.host = $ ? "" : T.length ? T.shift() : "",
        (W = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = W.shift(),
        n.host = n.hostname = W.shift())),
        (k = k || n.host && T.length) && !$ && T.unshift(""),
        T.length ? n.pathname = T.join("/") : (n.pathname = null,
        n.path = null),
        nt.isNull(n.pathname) && nt.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
        n.auth = e.auth || n.auth,
        n.slashes = n.slashes || e.slashes,
        n.href = n.format(),
        n
    }
    ,
    Xe.prototype.parseHost = function() {
        var e = this.host
          , t = Xs.exec(e);
        t && ((t = t[0]) !== ":" && (this.port = t.substr(1)),
        e = e.substr(0, e.length - t.length)),
        e && (this.hostname = e)
    }
    ,
    Se.Url,
    Se.format,
    Se.resolve,
    Se.resolveObject,
    Qn = {},
    Eo = !1,
    So = Ih(),
    ra = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0,
    Se.URL = typeof URL < "u" ? URL : null,
    Se.pathToFileURL = Ph,
    Se.fileURLToPath = Rh,
    Se.Url,
    Se.format,
    Se.resolve,
    Se.resolveObject,
    Se.URL,
    vl = 92,
    El = 47,
    Sl = 97,
    Il = 122,
    tr = ra === "win32",
    Rl = /\//g,
    Al = /%/g,
    Ol = /\\/g,
    Pl = /\n/g,
    Nl = /\r/g,
    Cl = /\t/g,
    ia = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0,
    Se.URL = typeof URL < "u" ? URL : null,
    Se.pathToFileURL = wl,
    Se.fileURLToPath = kl,
    Ul = Se.Url,
    Ml = Se.format,
    xl = Se.resolve,
    Dl = Se.resolveObject,
    Ll = Se.parse,
    Bl = Se.URL,
    Fl = 92,
    ql = 47,
    jl = 97,
    Wl = 122,
    nr = ia === "win32",
    Vl = /\//g,
    Gl = /%/g,
    Hl = /\\/g,
    $l = /\n/g,
    Kl = /\r/g,
    zl = /\t/g
}
), Mh = fe( (e, t) => {
    "use strict";
    ie(),
    se(),
    oe(),
    t.exports = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
}
), Do = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.BufferedDuplex = e.writev = void 0;
    var t = Zt()
      , n = (Ge(),
    Pe(Ve));
    function i(r, o) {
        let a = new Array(r.length);
        for (let l = 0; l < r.length; l++)
            typeof r[l].chunk == "string" ? a[l] = n.Buffer.from(r[l].chunk, "utf8") : a[l] = r[l].chunk;
        this._write(n.Buffer.concat(a), "binary", o)
    }
    e.writev = i;
    var s = class extends t.Duplex {
        constructor(r, o, a) {
            super({
                objectMode: !0
            }),
            this.proxy = o,
            this.socket = a,
            this.writeQueue = [],
            r.objectMode || (this._writev = i.bind(this)),
            this.isSocketOpen = !1,
            this.proxy.on("data", l => {
                this.destroyed || this.push(l)
            }
            )
        }
        _read(r) {
            this.proxy.read(r)
        }
        _write(r, o, a) {
            this.isSocketOpen ? this.writeToProxy(r, o, a) : this.writeQueue.push({
                chunk: r,
                encoding: o,
                cb: a
            })
        }
        _final(r) {
            this.writeQueue = [],
            this.proxy.end(r)
        }
        _destroy(r, o) {
            this.writeQueue = [],
            this.proxy.destroy(),
            o(r)
        }
        socketReady() {
            this.emit("connect"),
            this.isSocketOpen = !0,
            this.processWriteQueue()
        }
        writeToProxy(r, o, a) {
            this.proxy.write(r, o) === !1 ? this.proxy.once("drain", a) : a()
        }
        processWriteQueue() {
            for (; this.writeQueue.length > 0; ) {
                let {chunk: r, encoding: o, cb: a} = this.writeQueue.shift();
                this.writeToProxy(r, o, a)
            }
        }
    }
    ;
    e.BufferedDuplex = s
}
), Hn = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(k) {
        return k && k.__esModule ? k : {
            default: k
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.streamBuilder = e.browserStreamBuilder = void 0;
    var n = (Ge(),
    Pe(Ve))
      , i = t(Mh())
      , s = t(vt())
      , r = Zt()
      , o = t(lr())
      , a = Do()
      , l = (0,
    s.default)("mqttjs:ws")
      , c = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
    function u(k, w) {
        let T = `${k.protocol}://${k.hostname}:${k.port}${k.path}`;
        return typeof k.transformWsUrl == "function" && (T = k.transformWsUrl(T, k, w)),
        T
    }
    function d(k) {
        let w = k;
        return k.port || (k.protocol === "wss" ? w.port = 443 : w.port = 80),
        k.path || (w.path = "/"),
        k.wsOptions || (w.wsOptions = {}),
        !o.default && !k.forceNativeWebSocket && k.protocol === "wss" && c.forEach(T => {
            Object.prototype.hasOwnProperty.call(k, T) && !Object.prototype.hasOwnProperty.call(k.wsOptions, T) && (w.wsOptions[T] = k[T])
        }
        ),
        w
    }
    function m(k) {
        let w = d(k);
        if (w.hostname || (w.hostname = w.host),
        !w.hostname) {
            if (typeof document > "u")
                throw new Error("Could not determine host. Specify host manually.");
            let T = new URL(document.URL);
            w.hostname = T.hostname,
            w.port || (w.port = Number(T.port))
        }
        return w.objectMode === void 0 && (w.objectMode = !(w.binary === !0 || w.binary === void 0)),
        w
    }
    function y(k, w, T) {
        l("createWebSocket"),
        l(`protocol: ${T.protocolId} ${T.protocolVersion}`);
        let R = T.protocolId === "MQIsdp" && T.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
        l(`creating new Websocket for url: ${w} and protocol: ${R}`);
        let M;
        return T.createWebsocket ? M = T.createWebsocket(w, [R], T) : M = new i.default(w,[R],T.wsOptions),
        M
    }
    function _(k, w) {
        let T = w.protocolId === "MQIsdp" && w.protocolVersion === 3 ? "mqttv3.1" : "mqtt", R = u(w, k), M;
        return w.createWebsocket ? M = w.createWebsocket(R, [T], w) : M = new WebSocket(R,[T]),
        M.binaryType = "arraybuffer",
        M
    }
    var g = (k, w) => {
        l("streamBuilder");
        let T = d(w);
        T.hostname = T.hostname || T.host || "localhost";
        let R = u(T, k)
          , M = y(k, R, T)
          , E = i.default.createWebSocketStream(M, T.wsOptions);
        return E.url = R,
        M.on("close", () => {
            E.destroy()
        }
        ),
        E
    }
    ;
    e.streamBuilder = g;
    var b = (k, w) => {
        l("browserStreamBuilder");
        let T, R = m(w).browserBufferSize || 1024 * 512, M = w.browserBufferTimeout || 1e3, E = !w.objectMode, A = _(k, w), U = $(w, V, le);
        w.objectMode || (U._writev = a.writev.bind(U)),
        U.on("close", () => {
            A.close()
        }
        );
        let W = typeof A.addEventListener < "u";
        A.readyState === A.OPEN ? (T = U,
        T.socket = A) : (T = new a.BufferedDuplex(w,U,A),
        W ? A.addEventListener("open", Q) : A.onopen = Q),
        W ? (A.addEventListener("close", O),
        A.addEventListener("error", j),
        A.addEventListener("message", Y)) : (A.onclose = O,
        A.onerror = j,
        A.onmessage = Y);
        function $(re, q, pe) {
            let te = new r.Transform({
                objectMode: re.objectMode
            });
            return te._write = q,
            te._flush = pe,
            te
        }
        function Q() {
            l("WebSocket onOpen"),
            T instanceof a.BufferedDuplex && T.socketReady()
        }
        function O(re) {
            l("WebSocket onClose", re),
            T.end(),
            T.destroy()
        }
        function j(re) {
            l("WebSocket onError", re);
            let q = new Error("WebSocket error");
            q.event = re,
            T.destroy(q)
        }
        async function Y(re) {
            let {data: q} = re;
            q instanceof ArrayBuffer ? q = n.Buffer.from(q) : q instanceof Blob ? q = n.Buffer.from(await new Response(q).arrayBuffer()) : q = n.Buffer.from(q, "utf8"),
            U && !U.destroyed && U.push(q)
        }
        function V(re, q, pe) {
            if (A.bufferedAmount > R) {
                setTimeout(V, M, re, q, pe);
                return
            }
            E && typeof re == "string" && (re = n.Buffer.from(re, "utf8"));
            try {
                A.send(re)
            } catch (te) {
                return pe(te)
            }
            pe()
        }
        function le(re) {
            A.close(),
            re()
        }
        return T
    }
    ;
    e.browserStreamBuilder = b
}
), Lo = {};
Yt(Lo, {
    Server: () => Ue,
    Socket: () => Ue,
    Stream: () => Ue,
    _createServerHandle: () => Ue,
    _normalizeArgs: () => Ue,
    _setSimultaneousAccepts: () => Ue,
    connect: () => Ue,
    createConnection: () => Ue,
    createServer: () => Ue,
    default: () => Jl,
    isIP: () => Ue,
    isIPv4: () => Ue,
    isIPv6: () => Ue
});
function Ue() {
    throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")
}
var Jl, Yl = We( () => {
    ie(),
    se(),
    oe(),
    Jl = {
        _createServerHandle: Ue,
        _normalizeArgs: Ue,
        _setSimultaneousAccepts: Ue,
        connect: Ue,
        createConnection: Ue,
        createServer: Ue,
        isIP: Ue,
        isIPv4: Ue,
        isIPv6: Ue,
        Server: Ue,
        Socket: Ue,
        Stream: Ue
    }
}
), oa = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = t((Yl(),
    Pe(Lo)))
      , i = t(vt())
      , s = (0,
    i.default)("mqttjs:tcp")
      , r = (o, a) => {
        a.port = a.port || 1883,
        a.hostname = a.hostname || a.host || "localhost";
        let {port: l, path: c} = a
          , u = a.hostname;
        return s("port %d and host %s", l, u),
        n.default.createConnection({
            port: l,
            host: u,
            path: c
        })
    }
    ;
    e.default = r
}
), Ql = {};
Yt(Ql, {
    default: () => Xl
});
var Xl, xh = We( () => {
    ie(),
    se(),
    oe(),
    Xl = {}
}
), sa = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = t((xh(),
    Pe(Ql)))
      , i = t((Yl(),
    Pe(Lo)))
      , s = t(vt())
      , r = (0,
    s.default)("mqttjs:tls")
      , o = (a, l) => {
        l.port = l.port || 8883,
        l.host = l.hostname || l.host || "localhost",
        i.default.isIP(l.host) === 0 && (l.servername = l.host),
        l.rejectUnauthorized = l.rejectUnauthorized !== !1,
        delete l.path,
        r("port %d host %s rejectUnauthorized %b", l.port, l.host, l.rejectUnauthorized);
        let c = n.default.connect(l);
        c.on("secureConnect", () => {
            l.rejectUnauthorized && !c.authorized ? c.emit("error", new Error("TLS not authorized")) : c.removeListener("error", u)
        }
        );
        function u(d) {
            l.rejectUnauthorized && a.emit("error", d),
            c.end()
        }
        return c.on("error", u),
        c
    }
    ;
    e.default = o
}
), aa = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = (Ge(),
    Pe(Ve)), n = Zt(), i = Do(), s, r, o;
    function a() {
        let m = new n.Transform;
        return m._write = (y, _, g) => {
            s.send({
                data: y.buffer,
                success() {
                    g()
                },
                fail(b) {
                    g(new Error(b))
                }
            })
        }
        ,
        m._flush = y => {
            s.close({
                success() {
                    y()
                }
            })
        }
        ,
        m
    }
    function l(m) {
        m.hostname || (m.hostname = "localhost"),
        m.path || (m.path = "/"),
        m.wsOptions || (m.wsOptions = {})
    }
    function c(m, y) {
        let _ = m.protocol === "wxs" ? "wss" : "ws"
          , g = `${_}://${m.hostname}${m.path}`;
        return m.port && m.port !== 80 && m.port !== 443 && (g = `${_}://${m.hostname}:${m.port}${m.path}`),
        typeof m.transformWsUrl == "function" && (g = m.transformWsUrl(g, m, y)),
        g
    }
    function u() {
        s.onOpen( () => {
            o.socketReady()
        }
        ),
        s.onMessage(m => {
            let {data: y} = m;
            y instanceof ArrayBuffer ? y = t.Buffer.from(y) : y = t.Buffer.from(y, "utf8"),
            r.push(y)
        }
        ),
        s.onClose( () => {
            o.emit("close"),
            o.end(),
            o.destroy()
        }
        ),
        s.onError(m => {
            let y = new Error(m.errMsg);
            o.destroy(y)
        }
        )
    }
    var d = (m, y) => {
        if (y.hostname = y.hostname || y.host,
        !y.hostname)
            throw new Error("Could not determine host. Specify host manually.");
        let _ = y.protocolId === "MQIsdp" && y.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
        l(y);
        let g = c(y, m);
        s = wx.connectSocket({
            url: g,
            protocols: [_]
        }),
        r = a(),
        o = new i.BufferedDuplex(y,r,s),
        o._destroy = (k, w) => {
            s.close({
                success() {
                    w && w(k)
                }
            })
        }
        ;
        let b = o.destroy;
        return o.destroy = (k, w) => (o.destroy = b,
        setTimeout( () => {
            s.close({
                fail() {
                    o._destroy(k, w)
                }
            })
        }
        , 0),
        o),
        u(),
        o
    }
    ;
    e.default = d
}
), la = fe(e => {
    "use strict";
    ie(),
    se(),
    oe(),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = (Ge(),
    Pe(Ve)), n = Zt(), i = Do(), s, r, o, a = !1;
    function l() {
        let y = new n.Transform;
        return y._write = (_, g, b) => {
            s.sendSocketMessage({
                data: _.buffer,
                success() {
                    b()
                },
                fail() {
                    b(new Error)
                }
            })
        }
        ,
        y._flush = _ => {
            s.closeSocket({
                success() {
                    _()
                }
            })
        }
        ,
        y
    }
    function c(y) {
        y.hostname || (y.hostname = "localhost"),
        y.path || (y.path = "/"),
        y.wsOptions || (y.wsOptions = {})
    }
    function u(y, _) {
        let g = y.protocol === "alis" ? "wss" : "ws"
          , b = `${g}://${y.hostname}${y.path}`;
        return y.port && y.port !== 80 && y.port !== 443 && (b = `${g}://${y.hostname}:${y.port}${y.path}`),
        typeof y.transformWsUrl == "function" && (b = y.transformWsUrl(b, y, _)),
        b
    }
    function d() {
        a || (a = !0,
        s.onSocketOpen( () => {
            o.socketReady()
        }
        ),
        s.onSocketMessage(y => {
            if (typeof y.data == "string") {
                let _ = t.Buffer.from(y.data, "base64");
                r.push(_)
            } else {
                let _ = new FileReader;
                _.addEventListener("load", () => {
                    let g = _.result;
                    g instanceof ArrayBuffer ? g = t.Buffer.from(g) : g = t.Buffer.from(g, "utf8"),
                    r.push(g)
                }
                ),
                _.readAsArrayBuffer(y.data)
            }
        }
        ),
        s.onSocketClose( () => {
            o.end(),
            o.destroy()
        }
        ),
        s.onSocketError(y => {
            o.destroy(y)
        }
        ))
    }
    var m = (y, _) => {
        if (_.hostname = _.hostname || _.host,
        !_.hostname)
            throw new Error("Could not determine host. Specify host manually.");
        let g = _.protocolId === "MQIsdp" && _.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
        c(_);
        let b = u(_, y);
        return s = _.my,
        s.connectSocket({
            url: b,
            protocols: g
        }),
        r = l(),
        o = new i.BufferedDuplex(_,r,s),
        d(),
        o
    }
    ;
    e.default = m
}
), Dh = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__importDefault || function(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.connectAsync = void 0;
    var n = t(vt())
      , i = t((Uh(),
    Pe(Tl)))
      , s = t(yo())
      , r = t(lr());
    typeof ve?.nextTick != "function" && (ve.nextTick = setImmediate);
    var o = (0,
    n.default)("mqttjs")
      , a = null;
    function l(d) {
        let m;
        d.auth && (m = d.auth.match(/^(.+):(.+)$/),
        m ? (d.username = m[1],
        d.password = m[2]) : d.username = d.auth)
    }
    function c(d, m) {
        var y, _, g, b;
        if (o("connecting to an MQTT broker..."),
        typeof d == "object" && !m && (m = d,
        d = ""),
        m = m || {},
        d && typeof d == "string") {
            let T = i.default.parse(d, !0)
              , R = {};
            if (T.port != null && (R.port = Number(T.port)),
            R.host = T.hostname,
            R.query = T.query,
            R.auth = T.auth,
            R.protocol = T.protocol,
            R.path = T.path,
            R.protocol = (y = R.protocol) === null || y === void 0 ? void 0 : y.replace(/:$/, ""),
            m = Object.assign(Object.assign({}, R), m),
            !m.protocol)
                throw new Error("Missing protocol")
        }
        if (m.unixSocket = m.unixSocket || ((_ = m.protocol) === null || _ === void 0 ? void 0 : _.includes("+unix")),
        m.unixSocket ? m.protocol = m.protocol.replace("+unix", "") : !(!((g = m.protocol) === null || g === void 0) && g.startsWith("ws")) && !(!((b = m.protocol) === null || b === void 0) && b.startsWith("wx")) && delete m.path,
        l(m),
        m.query && typeof m.query.clientId == "string" && (m.clientId = m.query.clientId),
        m.cert && m.key)
            if (m.protocol) {
                if (["mqtts", "wss", "wxs", "alis"].indexOf(m.protocol) === -1)
                    switch (m.protocol) {
                    case "mqtt":
                        m.protocol = "mqtts";
                        break;
                    case "ws":
                        m.protocol = "wss";
                        break;
                    case "wx":
                        m.protocol = "wxs";
                        break;
                    case "ali":
                        m.protocol = "alis";
                        break;
                    default:
                        throw new Error(`Unknown protocol for secure connection: "${m.protocol}"!`)
                    }
            } else
                throw new Error("Missing secure protocol key");
        if (a || (a = {},
        !r.default && !m.forceNativeWebSocket ? (a.ws = Hn().streamBuilder,
        a.wss = Hn().streamBuilder,
        a.mqtt = oa().default,
        a.tcp = oa().default,
        a.ssl = sa().default,
        a.tls = a.ssl,
        a.mqtts = sa().default) : (a.ws = Hn().browserStreamBuilder,
        a.wss = Hn().browserStreamBuilder,
        a.wx = aa().default,
        a.wxs = aa().default,
        a.ali = la().default,
        a.alis = la().default)),
        !a[m.protocol]) {
            let T = ["mqtts", "wss"].indexOf(m.protocol) !== -1;
            m.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter( (R, M) => T && M % 2 === 0 ? !1 : typeof a[R] == "function")[0]
        }
        if (m.clean === !1 && !m.clientId)
            throw new Error("Missing clientId for unclean clients");
        m.protocol && (m.defaultProtocol = m.protocol);
        function k(T) {
            return m.servers && ((!T._reconnectCount || T._reconnectCount === m.servers.length) && (T._reconnectCount = 0),
            m.host = m.servers[T._reconnectCount].host,
            m.port = m.servers[T._reconnectCount].port,
            m.protocol = m.servers[T._reconnectCount].protocol ? m.servers[T._reconnectCount].protocol : m.defaultProtocol,
            m.hostname = m.host,
            T._reconnectCount++),
            o("calling streambuilder for", m.protocol),
            a[m.protocol](T, m)
        }
        let w = new s.default(k,m);
        return w.on("error", () => {}
        ),
        w
    }
    function u(d, m, y=!0) {
        return new Promise( (_, g) => {
            let b = c(d, m)
              , k = {
                connect: T => {
                    w(),
                    _(b)
                }
                ,
                end: () => {
                    w(),
                    _(b)
                }
                ,
                error: T => {
                    w(),
                    b.end(),
                    g(T)
                }
            };
            y === !1 && (k.close = () => {
                k.error(new Error("Couldn't connect to server"))
            }
            );
            function w() {
                Object.keys(k).forEach(T => {
                    b.off(T, k[T])
                }
                )
            }
            Object.keys(k).forEach(T => {
                b.on(T, k[T])
            }
            )
        }
        )
    }
    e.connectAsync = u,
    e.default = c
}
), ca = fe(e => {
    "use strict";
    ie(),
    se(),
    oe();
    var t = e && e.__createBinding || (Object.create ? function(y, _, g, b) {
        b === void 0 && (b = g);
        var k = Object.getOwnPropertyDescriptor(_, g);
        (!k || ("get"in k ? !_.__esModule : k.writable || k.configurable)) && (k = {
            enumerable: !0,
            get: function() {
                return _[g]
            }
        }),
        Object.defineProperty(y, b, k)
    }
    : function(y, _, g, b) {
        b === void 0 && (b = g),
        y[b] = _[g]
    }
    )
      , n = e && e.__setModuleDefault || (Object.create ? function(y, _) {
        Object.defineProperty(y, "default", {
            enumerable: !0,
            value: _
        })
    }
    : function(y, _) {
        y.default = _
    }
    )
      , i = e && e.__importStar || function(y) {
        if (y && y.__esModule)
            return y;
        var _ = {};
        if (y != null)
            for (var g in y)
                g !== "default" && Object.prototype.hasOwnProperty.call(y, g) && t(_, y, g);
        return n(_, y),
        _
    }
      , s = e && e.__exportStar || function(y, _) {
        for (var g in y)
            g !== "default" && !Object.prototype.hasOwnProperty.call(_, g) && t(_, y, g)
    }
      , r = e && e.__importDefault || function(y) {
        return y && y.__esModule ? y : {
            default: y
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ReasonCodes = e.KeepaliveManager = e.UniqueMessageIdProvider = e.DefaultMessageIdProvider = e.Store = e.MqttClient = e.connectAsync = e.connect = e.Client = void 0;
    var o = r(yo());
    e.MqttClient = o.default;
    var a = r(Qa());
    e.DefaultMessageIdProvider = a.default;
    var l = r(yh());
    e.UniqueMessageIdProvider = l.default;
    var c = r(Xa());
    e.Store = c.default;
    var u = i(Dh());
    e.connect = u.default,
    Object.defineProperty(e, "connectAsync", {
        enumerable: !0,
        get: function() {
            return u.connectAsync
        }
    });
    var d = r(pl());
    e.KeepaliveManager = d.default,
    e.Client = o.default,
    s(yo(), e),
    s(cn(), e);
    var m = ar();
    Object.defineProperty(e, "ReasonCodes", {
        enumerable: !0,
        get: function() {
            return m.ReasonCodes
        }
    })
}
), Lh = fe(e => {
    ie(),
    se(),
    oe();
    var t = e && e.__createBinding || (Object.create ? function(o, a, l, c) {
        c === void 0 && (c = l);
        var u = Object.getOwnPropertyDescriptor(a, l);
        (!u || ("get"in u ? !a.__esModule : u.writable || u.configurable)) && (u = {
            enumerable: !0,
            get: function() {
                return a[l]
            }
        }),
        Object.defineProperty(o, c, u)
    }
    : function(o, a, l, c) {
        c === void 0 && (c = l),
        o[c] = a[l]
    }
    )
      , n = e && e.__setModuleDefault || (Object.create ? function(o, a) {
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: a
        })
    }
    : function(o, a) {
        o.default = a
    }
    )
      , i = e && e.__importStar || function(o) {
        if (o && o.__esModule)
            return o;
        var a = {};
        if (o != null)
            for (var l in o)
                l !== "default" && Object.prototype.hasOwnProperty.call(o, l) && t(a, o, l);
        return n(a, o),
        a
    }
      , s = e && e.__exportStar || function(o, a) {
        for (var l in o)
            l !== "default" && !Object.prototype.hasOwnProperty.call(a, l) && t(a, o, l)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(ca());
    e.default = r,
    s(ca(), e)
}
), Zl = Lh();
function cr() {
    try {
        if (typeof crypto < "u" && crypto.randomUUID)
            return crypto.randomUUID()
    } catch {}
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        let t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16)
    }
    )
}
var ur = class {
    options;
    clientId;
    client;
    topics = ["offer", "answer", "ice"];
    onConnect;
    onIceCandidate;
    onAnswer;
    onOffer;
    constructor(t) {
        this.options = t,
        this.clientId = cr();
        let n = {
            host: this.options.mqttHost,
            port: this.options.mqttPort,
            path: this.options.mqttPath,
            clientId: this.clientId,
            username: this.options.mqttUsername,
            password: this.options.mqttPassword,
            protocol: this.options.mqttProtocol,
            keepalive: 20,
            protocolVersion: 5,
            clean: !0,
            manualConnect: !0,
            reconnectPeriod: 0
        };
        this.client = Zl.connect(n)
    }
    connect = () => {
        this.client.on("connect", () => {
            console.debug(`MQTT connected to "${this.options.deviceUid}" with clientId: ${this.clientId}`);
            let t = this.topics.map(n => this.getFullTopic(n));
            this.client.subscribe(t, {
                qos: 2,
                nl: !0
            }, n => {
                if (n) {
                    console.error("MQTT subscription failed:", n);
                    return
                }
                this.onConnect?.(this)
            }
            )
        }
        ),
        this.client.on("message", (t, n) => this.handleMessage(t, n.toString())),
        this.client.connect()
    }
    ;
    handleMessage(t, n) {
        switch (t) {
        case this.getFullTopic("ice"):
            let i = JSON.parse(n);
            this.onIceCandidate?.(i);
            break;
        case this.getFullTopic("answer"):
            let s = JSON.parse(n);
            this.onAnswer?.(s);
            break;
        case this.getFullTopic("offer"):
            let r = JSON.parse(n);
            this.onOffer?.(r);
            break;
        default:
            console.warn(`Unknown topic: ${t}`);
            return
        }
    }
    send = (t, n) => {
        if (!this.isConnected()) {
            console.warn("Publish failed: client is not connected.");
            return
        }
        let i = `${this.getFullTopic(t)}`;
        this.client.publish(i, n)
    }
    ;
    disconnect = () => {
        if (this.client.disconnected)
            return;
        let t = this.topics.map(n => this.getFullTopic(n));
        this.client.unsubscribe(t),
        this.client.end(!0),
        console.debug(`MQTT disconnected from "${this.options.deviceUid}" with clientId: ${this.clientId}`)
    }
    ;
    isConnected = () => this.client.connected ?? !1;
    getFullTopic(t) {
        return `${this.options.deviceUid}/${t}/${this.clientId}`
    }
}
;
var Bo = class e {
    target;
    candidateInit;
    constructor(t) {
        this.target = t.target,
        this.candidateInit = t.candidateInit
    }
    static fromJson(t) {
        let n = JSON.parse(t);
        return typeof n.candidateInit == "string" && (n.candidateInit = JSON.parse(n.candidateInit)),
        new e(n)
    }
}
  , hr = class {
    url;
    apiKey;
    userId;
    roomId;
    client;
    pingInterval;
    onConnect;
    onJoin;
    onOffer;
    onAnswer;
    onPublisherIce;
    onSubscriberIce;
    onRoomInfo;
    onQuility;
    onSpeaking;
    onParticipant;
    onTrackPublished;
    onLeave;
    constructor(t) {
        this.url = t.websocketUrl,
        this.apiKey = t.apiKey ?? "",
        this.userId = t.userId ?? cr(),
        this.roomId = t.roomId ?? ""
    }
    connect = () => {
        let t = new URLSearchParams({
            apiKey: this.apiKey,
            userId: this.userId,
            roomId: this.roomId
        });
        this.client = new WebSocket(`${this.url}/rtc?${t.toString()}`),
        this.client.onopen = () => {
            console.log("WebSocket Connected"),
            this.onConnect?.(this)
        }
        ,
        this.client.onmessage = n => {
            this.handleMessage(n)
        }
        ,
        this.client.onclose = () => {
            console.log("WebSocket Disconnected"),
            this.clearPingInterval()
        }
        ,
        this.client.onerror = n => {
            console.error("WebSocket Error:", n)
        }
    }
    ;
    handleMessage(t) {
        let {action: n, message: i} = JSON.parse(t.data);
        if (n === "join")
            this.startPingInterval(),
            this.onJoin?.(JSON.parse(i));
        else if (n === "offer") {
            let s = {
                type: "offer",
                sdp: i
            };
            this.onOffer?.(s)
        } else if (n === "answer") {
            let s = {
                type: "answer",
                sdp: i
            };
            this.onAnswer?.(s)
        } else if (n === "trickle") {
            let s = Bo.fromJson(i);
            s.target === "PUBLISHER" ? this.onPublisherIce?.(s.candidateInit) : s.target === "SUBSCRIBER" && this.onSubscriberIce?.(s.candidateInit)
        } else
            n === "trackPublished" ? this.onTrackPublished?.() : n === "roomInfo" ? this.onRoomInfo?.(JSON.parse(i)) : n === "quality" ? this.onQuility?.(JSON.parse(i)) : n === "speaking" ? this.onSpeaking?.(JSON.parse(i)) : n === "participant" ? this.onParticipant?.(JSON.parse(i)) : n === "leave" && (this.clearPingInterval(),
            this.onLeave?.())
    }
    send = (t, n="") => {
        if (!this.isConnected()) {
            console.warn("Publish failed: client is not connected.");
            return
        }
        let i = {
            action: t,
            message: n
        };
        this.client?.send(JSON.stringify(i))
    }
    ;
    disconnect = () => {
        this.client && (this.send("leave"),
        console.debug("Terminating websocket connection."),
        this.client.close())
    }
    ;
    isConnected = () => this.client?.readyState === WebSocket.OPEN;
    startPingInterval() {
        this.clearPingInterval(),
        console.debug("start ping interval"),
        this.pingInterval = setInterval( () => {
            this.send("ping")
        }
        , 5e3)
    }
    clearPingInterval() {
        console.debug("clearing ping interval"),
        this.pingInterval && clearInterval(this.pingInterval)
    }
}
;
var dr = class extends Pt {
    cmdChannel;
    ipcChannel;
    constructor(t) {
        if (super(t),
        this.options.datachannelOnly || (console.debug("Create CommanderPeer with video/audio transceiver."),
        this.createlocalAudioStream(),
        this.peer.addTransceiver("video", {
            direction: "recvonly"
        }),
        this.peer.addTransceiver("audio", {
            direction: "sendrecv"
        })),
        this.cmdChannel = this.createDataChannel(0),
        t.options.ipcMode) {
            let n = t.options.ipcMode === "lossy" ? 1 : 2;
            this.ipcChannel = this.createDataChannel(n)
        }
        console.debug("CommanderPeer is created.")
    }
    close = () => {
        if (this.cmdChannel.readyState === "open") {
            let t = xe.create({
                type: 0,
                disconnectionRequest: en.create()
            })
              , n = xe.encode(t).finish();
            this.cmdChannel.send(n)
        }
        this.cmdChannel.close(),
        this.ipcChannel?.close(),
        super.close(),
        console.debug("CommanderPeer is closed.")
    }
    ;
    createDataChannel = t => {
        let n = {
            id: t,
            ordered: !0,
            negotiated: !0
        };
        t === 1 && (n.maxRetransmits = 0);
        let i = super.createDataChannel(t, n);
        return i.binaryType = "arraybuffer",
        i.onopen = () => this.onDatachannel?.(t),
        i.onmessage = s => {
            this.onDataChannelMessage(Fn[t], s)
        }
        ,
        this.createReceivers(Fn[t]),
        i
    }
    ;
    fetchVideoList = t => {
        if (this.cmdChannel.readyState === "open" && this.onVideoListLoaded) {
            let n = tn.create();
            if (t === void 0)
                n.type = 0;
            else if (typeof t == "string")
                n.type = 1,
                n.parameter = t;
            else {
                let s = `${t.getFullYear()}${nn(t.getMonth() + 1)}${nn(t.getDate())}_${nn(t.getHours())}${nn(t.getMinutes())}${nn(t.getSeconds())}`;
                n.type = 2,
                n.parameter = s
            }
            let i = xe.encode(xe.create({
                type: 3,
                queryFileRequest: n
            })).finish();
            this.cmdChannel.send(i)
        }
    }
    ;
    downloadVideoFile = t => {
        if (this.onVideoDownloaded && this.cmdChannel.readyState === "open") {
            let n = xe.create({
                type: 4,
                transferFileRequest: {
                    filepath: t
                }
            })
              , i = xe.encode(n).finish();
            this.cmdChannel.send(i)
        }
    }
    ;
    setCameraControl = (t, n) => {
        if (this.cmdChannel.readyState === "open") {
            let i = xe.create({
                type: 1,
                controlCameraRequest: {
                    id: t,
                    value: n
                }
            })
              , s = xe.encode(i).finish();
            this.cmdChannel.send(s)
        }
    }
    ;
    snapshot = (t=30) => {
        if (this.onSnapshot && this.cmdChannel.readyState === "open") {
            t = Math.max(0, Math.min(t, 100));
            let n = xe.create({
                type: 2,
                takeSnapshotRequest: {
                    quality: t
                }
            })
              , i = xe.encode(n).finish();
            this.cmdChannel.send(i)
        }
    }
    ;
    sendText = t => {
        this.sendData(new TextEncoder().encode(t))
    }
    ;
    sendData = t => {
        if (this.ipcChannel?.readyState === "open") {
            let n = xe.create({
                type: 100,
                customCommand: t
            })
              , i = xe.encode(n).finish();
            this.ipcChannel.send(i)
        }
    }
    ;
    startRecording = () => {
        if (this.cmdChannel.readyState === "open") {
            let t = xe.create({
                type: 5
            })
              , n = xe.encode(t).finish();
            this.cmdChannel.send(n)
        }
    }
    ;
    stopRecording = () => {
        if (this.cmdChannel.readyState === "open") {
            let t = xe.create({
                type: 6
            })
              , n = xe.encode(t).finish();
            this.cmdChannel.send(n)
        }
    }
}
;
function Re(e, t) {
    if (!e)
        throw new Error(t)
}
var Bh = 34028234663852886e22
  , Fh = -34028234663852886e22
  , qh = 4294967295
  , jh = 2147483647
  , Wh = -2147483648;
function un(e) {
    if (typeof e != "number")
        throw new Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > jh || e < Wh)
        throw new Error("invalid int 32: " + e)
}
function En(e) {
    if (typeof e != "number")
        throw new Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > qh || e < 0)
        throw new Error("invalid uint 32: " + e)
}
function fr(e) {
    if (typeof e != "number")
        throw new Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > Bh || e < Fh))
        throw new Error("invalid float 32: " + e)
}
var ec = Symbol("@bufbuild/protobuf/enum-type");
function tc(e) {
    let t = e[ec];
    return Re(t, "missing enum type on enum object"),
    t
}
function Fo(e, t, n, i) {
    e[ec] = qo(t, n.map(s => ({
        no: s.no,
        name: s.name,
        localName: e[s.no]
    })), i)
}
function qo(e, t, n) {
    let i = Object.create(null)
      , s = Object.create(null)
      , r = [];
    for (let o of t) {
        let a = rc(o);
        r.push(a),
        i[o.name] = a,
        s[o.no] = a
    }
    return {
        typeName: e,
        values: r,
        findName(o) {
            return i[o]
        },
        findNumber(o) {
            return s[o]
        }
    }
}
function nc(e, t, n) {
    let i = {};
    for (let s of t) {
        let r = rc(s);
        i[r.localName] = r.no,
        i[r.no] = r.localName
    }
    return Fo(i, e, t, n),
    i
}
function rc(e) {
    return "localName"in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    })
}
var Mt = class {
    equals(t) {
        return this.getType().runtime.util.equals(this.getType(), this, t)
    }
    clone() {
        return this.getType().runtime.util.clone(this)
    }
    fromBinary(t, n) {
        let i = this.getType()
          , s = i.runtime.bin
          , r = s.makeReadOptions(n);
        return s.readMessage(this, r.readerFactory(t), t.byteLength, r),
        this
    }
    fromJson(t, n) {
        let i = this.getType()
          , s = i.runtime.json
          , r = s.makeReadOptions(n);
        return s.readMessage(i, t, r, this),
        this
    }
    toBinary(t) {
        let n = this.getType()
          , i = n.runtime.bin
          , s = i.makeWriteOptions(t)
          , r = s.writerFactory();
        return i.writeMessage(this, r, s),
        r.finish()
    }
    toJson(t) {
        let n = this.getType()
          , i = n.runtime.json
          , s = i.makeWriteOptions(t);
        return i.writeMessage(this, s)
    }
    toJsonString(t) {
        var n;
        let i = this.toJson(t);
        return JSON.stringify(i, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: !0
        })
    }
    getType() {
        return Object.getPrototypeOf(this).constructor
    }
}
;
function ic(e, t, n, i) {
    var s;
    let r = (s = i?.localName) !== null && s !== void 0 ? s : t.substring(t.lastIndexOf(".") + 1)
      , o = {
        [r]: function(a) {
            e.util.initFields(this),
            e.util.initPartial(a, this)
        }
    }[r];
    return Object.setPrototypeOf(o.prototype, new Mt),
    Object.assign(o, {
        runtime: e,
        typeName: t,
        fields: e.util.newFieldList(n),
        fromBinary(a, l) {
            return new o().fromBinary(a, l)
        },
        fromJson(a, l) {
            return new o().fromJson(a, l)
        },
        fromJsonString(a, l) {
            return new o().fromJsonString(a, l)
        },
        equals(a, l) {
            return e.util.equals(o, a, l)
        }
    }),
    o
}
function sc() {
    let e = 0
      , t = 0;
    for (let i = 0; i < 28; i += 7) {
        let s = this.buf[this.pos++];
        if (e |= (s & 127) << i,
        (s & 128) == 0)
            return this.assertBounds(),
            [e, t]
    }
    let n = this.buf[this.pos++];
    if (e |= (n & 15) << 28,
    t = (n & 112) >> 4,
    (n & 128) == 0)
        return this.assertBounds(),
        [e, t];
    for (let i = 3; i <= 31; i += 7) {
        let s = this.buf[this.pos++];
        if (t |= (s & 127) << i,
        (s & 128) == 0)
            return this.assertBounds(),
            [e, t]
    }
    throw new Error("invalid varint")
}
function mr(e, t, n) {
    for (let r = 0; r < 28; r = r + 7) {
        let o = e >>> r
          , a = !(!(o >>> 7) && t == 0)
          , l = (a ? o | 128 : o) & 255;
        if (n.push(l),
        !a)
            return
    }
    let i = e >>> 28 & 15 | (t & 7) << 4
      , s = t >> 3 != 0;
    if (n.push((s ? i | 128 : i) & 255),
    !!s) {
        for (let r = 3; r < 31; r = r + 7) {
            let o = t >>> r
              , a = !!(o >>> 7)
              , l = (a ? o | 128 : o) & 255;
            if (n.push(l),
            !a)
                return
        }
        n.push(t >>> 31 & 1)
    }
}
var pr = 4294967296;
function jo(e) {
    let t = e[0] === "-";
    t && (e = e.slice(1));
    let n = 1e6
      , i = 0
      , s = 0;
    function r(o, a) {
        let l = Number(e.slice(o, a));
        s *= n,
        i = i * n + l,
        i >= pr && (s = s + (i / pr | 0),
        i = i % pr)
    }
    return r(-24, -18),
    r(-18, -12),
    r(-12, -6),
    r(-6),
    t ? lc(i, s) : Vo(i, s)
}
function ac(e, t) {
    let n = Vo(e, t)
      , i = n.hi & 2147483648;
    i && (n = lc(n.lo, n.hi));
    let s = Wo(n.lo, n.hi);
    return i ? "-" + s : s
}
function Wo(e, t) {
    if ({lo: e, hi: t} = Vh(e, t),
    t <= 2097151)
        return String(pr * t + e);
    let n = e & 16777215
      , i = (e >>> 24 | t << 8) & 16777215
      , s = t >> 16 & 65535
      , r = n + i * 6777216 + s * 6710656
      , o = i + s * 8147497
      , a = s * 2
      , l = 1e7;
    return r >= l && (o += Math.floor(r / l),
    r %= l),
    o >= l && (a += Math.floor(o / l),
    o %= l),
    a.toString() + oc(o) + oc(r)
}
function Vh(e, t) {
    return {
        lo: e >>> 0,
        hi: t >>> 0
    }
}
function Vo(e, t) {
    return {
        lo: e | 0,
        hi: t | 0
    }
}
function lc(e, t) {
    return t = ~t,
    e ? e = ~e + 1 : t += 1,
    Vo(e, t)
}
var oc = e => {
    let t = String(e);
    return "0000000".slice(t.length) + t
}
;
function Go(e, t) {
    if (e >= 0) {
        for (; e > 127; )
            t.push(e & 127 | 128),
            e = e >>> 7;
        t.push(e)
    } else {
        for (let n = 0; n < 9; n++)
            t.push(e & 127 | 128),
            e = e >> 7;
        t.push(1)
    }
}
function cc() {
    let e = this.buf[this.pos++]
      , t = e & 127;
    if ((e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 7,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 14,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    if (e = this.buf[this.pos++],
    t |= (e & 127) << 21,
    (e & 128) == 0)
        return this.assertBounds(),
        t;
    e = this.buf[this.pos++],
    t |= (e & 15) << 28;
    for (let n = 5; (e & 128) !== 0 && n < 10; n++)
        e = this.buf[this.pos++];
    if ((e & 128) != 0)
        throw new Error("invalid varint");
    return this.assertBounds(),
    t >>> 0
}
function Gh() {
    let e = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        let s = BigInt("-9223372036854775808")
          , r = BigInt("9223372036854775807")
          , o = BigInt("0")
          , a = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse(l) {
                let c = typeof l == "bigint" ? l : BigInt(l);
                if (c > r || c < s)
                    throw new Error(`int64 invalid: ${l}`);
                return c
            },
            uParse(l) {
                let c = typeof l == "bigint" ? l : BigInt(l);
                if (c > a || c < o)
                    throw new Error(`uint64 invalid: ${l}`);
                return c
            },
            enc(l) {
                return e.setBigInt64(0, this.parse(l), !0),
                {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            uEnc(l) {
                return e.setBigInt64(0, this.uParse(l), !0),
                {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                }
            },
            dec(l, c) {
                return e.setInt32(0, l, !0),
                e.setInt32(4, c, !0),
                e.getBigInt64(0, !0)
            },
            uDec(l, c) {
                return e.setInt32(0, l, !0),
                e.setInt32(4, c, !0),
                e.getBigUint64(0, !0)
            }
        }
    }
    let n = s => Re(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`)
      , i = s => Re(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
    return {
        zero: "0",
        supported: !1,
        parse(s) {
            return typeof s != "string" && (s = s.toString()),
            n(s),
            s
        },
        uParse(s) {
            return typeof s != "string" && (s = s.toString()),
            i(s),
            s
        },
        enc(s) {
            return typeof s != "string" && (s = s.toString()),
            n(s),
            jo(s)
        },
        uEnc(s) {
            return typeof s != "string" && (s = s.toString()),
            i(s),
            jo(s)
        },
        dec(s, r) {
            return ac(s, r)
        },
        uDec(s, r) {
            return Wo(s, r)
        }
    }
}
var Fe = Gh();
var ee;
(function(e) {
    e[e.DOUBLE = 1] = "DOUBLE",
    e[e.FLOAT = 2] = "FLOAT",
    e[e.INT64 = 3] = "INT64",
    e[e.UINT64 = 4] = "UINT64",
    e[e.INT32 = 5] = "INT32",
    e[e.FIXED64 = 6] = "FIXED64",
    e[e.FIXED32 = 7] = "FIXED32",
    e[e.BOOL = 8] = "BOOL",
    e[e.STRING = 9] = "STRING",
    e[e.BYTES = 12] = "BYTES",
    e[e.UINT32 = 13] = "UINT32",
    e[e.SFIXED32 = 15] = "SFIXED32",
    e[e.SFIXED64 = 16] = "SFIXED64",
    e[e.SINT32 = 17] = "SINT32",
    e[e.SINT64 = 18] = "SINT64"
}
)(ee || (ee = {}));
var it;
(function(e) {
    e[e.BIGINT = 0] = "BIGINT",
    e[e.STRING = 1] = "STRING"
}
)(it || (it = {}));
function Rt(e, t, n) {
    if (t === n)
        return !0;
    if (e == ee.BYTES) {
        if (!(t instanceof Uint8Array) || !(n instanceof Uint8Array) || t.length !== n.length)
            return !1;
        for (let i = 0; i < t.length; i++)
            if (t[i] !== n[i])
                return !1;
        return !0
    }
    switch (e) {
    case ee.UINT64:
    case ee.FIXED64:
    case ee.INT64:
    case ee.SFIXED64:
    case ee.SINT64:
        return t == n
    }
    return !1
}
function ot(e, t) {
    switch (e) {
    case ee.BOOL:
        return !1;
    case ee.UINT64:
    case ee.FIXED64:
    case ee.INT64:
    case ee.SFIXED64:
    case ee.SINT64:
        return t == 0 ? Fe.zero : "0";
    case ee.DOUBLE:
    case ee.FLOAT:
        return 0;
    case ee.BYTES:
        return new Uint8Array(0);
    case ee.STRING:
        return "";
    default:
        return 0
    }
}
function gr(e, t) {
    switch (e) {
    case ee.BOOL:
        return t === !1;
    case ee.STRING:
        return t === "";
    case ee.BYTES:
        return t instanceof Uint8Array && !t.byteLength;
    default:
        return t == 0
    }
}
var Be;
(function(e) {
    e[e.Varint = 0] = "Varint",
    e[e.Bit64 = 1] = "Bit64",
    e[e.LengthDelimited = 2] = "LengthDelimited",
    e[e.StartGroup = 3] = "StartGroup",
    e[e.EndGroup = 4] = "EndGroup",
    e[e.Bit32 = 5] = "Bit32"
}
)(Be || (Be = {}));
var yr = class {
    constructor(t) {
        this.stack = [],
        this.textEncoder = t ?? new TextEncoder,
        this.chunks = [],
        this.buf = []
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let t = 0;
        for (let s = 0; s < this.chunks.length; s++)
            t += this.chunks[s].length;
        let n = new Uint8Array(t)
          , i = 0;
        for (let s = 0; s < this.chunks.length; s++)
            n.set(this.chunks[s], i),
            i += this.chunks[s].length;
        return this.chunks = [],
        n
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }),
        this.chunks = [],
        this.buf = [],
        this
    }
    join() {
        let t = this.finish()
          , n = this.stack.pop();
        if (!n)
            throw new Error("invalid state, fork stack empty");
        return this.chunks = n.chunks,
        this.buf = n.buf,
        this.uint32(t.byteLength),
        this.raw(t)
    }
    tag(t, n) {
        return this.uint32((t << 3 | n) >>> 0)
    }
    raw(t) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
        this.buf = []),
        this.chunks.push(t),
        this
    }
    uint32(t) {
        for (En(t); t > 127; )
            this.buf.push(t & 127 | 128),
            t = t >>> 7;
        return this.buf.push(t),
        this
    }
    int32(t) {
        return un(t),
        Go(t, this.buf),
        this
    }
    bool(t) {
        return this.buf.push(t ? 1 : 0),
        this
    }
    bytes(t) {
        return this.uint32(t.byteLength),
        this.raw(t)
    }
    string(t) {
        let n = this.textEncoder.encode(t);
        return this.uint32(n.byteLength),
        this.raw(n)
    }
    float(t) {
        fr(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, t, !0),
        this.raw(n)
    }
    double(t) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, t, !0),
        this.raw(n)
    }
    fixed32(t) {
        En(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, t, !0),
        this.raw(n)
    }
    sfixed32(t) {
        un(t);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, t, !0),
        this.raw(n)
    }
    sint32(t) {
        return un(t),
        t = (t << 1 ^ t >> 31) >>> 0,
        Go(t, this.buf),
        this
    }
    sfixed64(t) {
        let n = new Uint8Array(8)
          , i = new DataView(n.buffer)
          , s = Fe.enc(t);
        return i.setInt32(0, s.lo, !0),
        i.setInt32(4, s.hi, !0),
        this.raw(n)
    }
    fixed64(t) {
        let n = new Uint8Array(8)
          , i = new DataView(n.buffer)
          , s = Fe.uEnc(t);
        return i.setInt32(0, s.lo, !0),
        i.setInt32(4, s.hi, !0),
        this.raw(n)
    }
    int64(t) {
        let n = Fe.enc(t);
        return mr(n.lo, n.hi, this.buf),
        this
    }
    sint64(t) {
        let n = Fe.enc(t)
          , i = n.hi >> 31
          , s = n.lo << 1 ^ i
          , r = (n.hi << 1 | n.lo >>> 31) ^ i;
        return mr(s, r, this.buf),
        this
    }
    uint64(t) {
        let n = Fe.uEnc(t);
        return mr(n.lo, n.hi, this.buf),
        this
    }
}
  , _r = class {
    constructor(t, n) {
        this.varint64 = sc,
        this.uint32 = cc,
        this.buf = t,
        this.len = t.length,
        this.pos = 0,
        this.view = new DataView(t.buffer,t.byteOffset,t.byteLength),
        this.textDecoder = n ?? new TextDecoder
    }
    tag() {
        let t = this.uint32()
          , n = t >>> 3
          , i = t & 7;
        if (n <= 0 || i < 0 || i > 5)
            throw new Error("illegal tag: field no " + n + " wire type " + i);
        return [n, i]
    }
    skip(t, n) {
        let i = this.pos;
        switch (t) {
        case Be.Varint:
            for (; this.buf[this.pos++] & 128; )
                ;
            break;
        case Be.Bit64:
            this.pos += 4;
        case Be.Bit32:
            this.pos += 4;
            break;
        case Be.LengthDelimited:
            let s = this.uint32();
            this.pos += s;
            break;
        case Be.StartGroup:
            for (; ; ) {
                let[r,o] = this.tag();
                if (o === Be.EndGroup) {
                    if (n !== void 0 && r !== n)
                        throw new Error("invalid end group tag");
                    break
                }
                this.skip(o, r)
            }
            break;
        default:
            throw new Error("cant skip wire type " + t)
        }
        return this.assertBounds(),
        this.buf.subarray(i, this.pos)
    }
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF")
    }
    int32() {
        return this.uint32() | 0
    }
    sint32() {
        let t = this.uint32();
        return t >>> 1 ^ -(t & 1)
    }
    int64() {
        return Fe.dec(...this.varint64())
    }
    uint64() {
        return Fe.uDec(...this.varint64())
    }
    sint64() {
        let[t,n] = this.varint64()
          , i = -(t & 1);
        return t = (t >>> 1 | (n & 1) << 31) ^ i,
        n = n >>> 1 ^ i,
        Fe.dec(t, n)
    }
    bool() {
        let[t,n] = this.varint64();
        return t !== 0 || n !== 0
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0)
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0)
    }
    fixed64() {
        return Fe.uDec(this.sfixed32(), this.sfixed32())
    }
    sfixed64() {
        return Fe.dec(this.sfixed32(), this.sfixed32())
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0)
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0)
    }
    bytes() {
        let t = this.uint32()
          , n = this.pos;
        return this.pos += t,
        this.assertBounds(),
        this.buf.subarray(n, n + t)
    }
    string() {
        return this.textDecoder.decode(this.bytes())
    }
}
;
function uc(e, t, n, i) {
    let s;
    return {
        typeName: t,
        extendee: n,
        get field() {
            if (!s) {
                let r = typeof i == "function" ? i() : i;
                r.name = t.split(".").pop(),
                r.jsonName = `[${t}]`,
                s = e.util.newFieldList([r]).list()[0]
            }
            return s
        },
        runtime: e
    }
}
function br(e) {
    let t = e.field.localName
      , n = Object.create(null);
    return n[t] = Hh(e),
    [n, () => n[t]]
}
function Hh(e) {
    let t = e.field;
    if (t.repeated)
        return [];
    if (t.default !== void 0)
        return t.default;
    switch (t.kind) {
    case "enum":
        return t.T.values[0].no;
    case "scalar":
        return ot(t.T, t.L);
    case "message":
        let n = t.T
          , i = new n;
        return n.fieldWrapper ? n.fieldWrapper.unwrapField(i) : i;
    case "map":
        throw "map fields are not allowed to be extensions"
    }
}
function hc(e, t) {
    if (!t.repeated && (t.kind == "enum" || t.kind == "scalar")) {
        for (let n = e.length - 1; n >= 0; --n)
            if (e[n].no == t.no)
                return [e[n]];
        return []
    }
    return e.filter(n => n.no === t.no)
}
var At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
  , Tr = [];
for (let e = 0; e < At.length; e++)
    Tr[At[e].charCodeAt(0)] = e;
Tr[45] = At.indexOf("+");
Tr[95] = At.indexOf("/");
var Ho = {
    dec(e) {
        let t = e.length * 3 / 4;
        e[e.length - 2] == "=" ? t -= 2 : e[e.length - 1] == "=" && (t -= 1);
        let n = new Uint8Array(t), i = 0, s = 0, r, o = 0;
        for (let a = 0; a < e.length; a++) {
            if (r = Tr[e.charCodeAt(a)],
            r === void 0)
                switch (e[a]) {
                case "=":
                    s = 0;
                case `
`:
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
                }
            switch (s) {
            case 0:
                o = r,
                s = 1;
                break;
            case 1:
                n[i++] = o << 2 | (r & 48) >> 4,
                o = r,
                s = 2;
                break;
            case 2:
                n[i++] = (o & 15) << 4 | (r & 60) >> 2,
                o = r,
                s = 3;
                break;
            case 3:
                n[i++] = (o & 3) << 6 | r,
                s = 0;
                break
            }
        }
        if (s == 1)
            throw Error("invalid base64 string.");
        return n.subarray(0, i)
    },
    enc(e) {
        let t = "", n = 0, i, s = 0;
        for (let r = 0; r < e.length; r++)
            switch (i = e[r],
            n) {
            case 0:
                t += At[i >> 2],
                s = (i & 3) << 4,
                n = 1;
                break;
            case 1:
                t += At[s | i >> 4],
                s = (i & 15) << 2,
                n = 2;
                break;
            case 2:
                t += At[s | i >> 6],
                t += At[i & 63],
                n = 0;
                break
            }
        return n && (t += At[s],
        t += "=",
        n == 1 && (t += "=")),
        t
    }
};
function dc(e, t, n) {
    pc(t, e);
    let i = t.runtime.bin.makeReadOptions(n)
      , s = hc(e.getType().runtime.bin.listUnknownFields(e), t.field)
      , [r,o] = br(t);
    for (let a of s)
        t.runtime.bin.readField(r, i.readerFactory(a.data), t.field, a.wireType, i);
    return o()
}
function fc(e, t, n, i) {
    pc(t, e);
    let s = t.runtime.bin.makeReadOptions(i)
      , r = t.runtime.bin.makeWriteOptions(i);
    if ($o(e, t)) {
        let c = e.getType().runtime.bin.listUnknownFields(e).filter(u => u.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (let u of c)
            e.getType().runtime.bin.onUnknownField(e, u.no, u.wireType, u.data)
    }
    let o = r.writerFactory()
      , a = t.field;
    !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, t.field), {
        opt: !0
    })),
    t.runtime.bin.writeField(a, n, o, r);
    let l = s.readerFactory(o.finish());
    for (; l.pos < l.len; ) {
        let[c,u] = l.tag()
          , d = l.skip(u, c);
        e.getType().runtime.bin.onUnknownField(e, c, u, d)
    }
}
function $o(e, t) {
    let n = e.getType();
    return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find(i => i.no == t.field.no)
}
function pc(e, t) {
    Re(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
}
function kr(e, t) {
    let n = e.localName;
    if (e.repeated)
        return t[n].length > 0;
    if (e.oneof)
        return t[e.oneof.localName].case === n;
    switch (e.kind) {
    case "enum":
    case "scalar":
        return e.opt || e.req ? t[n] !== void 0 : e.kind == "enum" ? t[n] !== e.T.values[0].no : !gr(e.T, t[n]);
    case "message":
        return t[n] !== void 0;
    case "map":
        return Object.keys(t[n]).length > 0
    }
}
function Ko(e, t) {
    let n = e.localName
      , i = !e.opt && !e.req;
    if (e.repeated)
        t[n] = [];
    else if (e.oneof)
        t[e.oneof.localName] = {
            case: void 0
        };
    else
        switch (e.kind) {
        case "map":
            t[n] = {};
            break;
        case "enum":
            t[n] = i ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            t[n] = i ? ot(e.T, e.L) : void 0;
            break;
        case "message":
            t[n] = void 0;
            break
        }
}
function Qe(e, t) {
    if (e === null || typeof e != "object" || !Object.getOwnPropertyNames(Mt.prototype).every(i => i in e && typeof e[i] == "function"))
        return !1;
    let n = e.getType();
    return n === null || typeof n != "function" || !("typeName"in n) || typeof n.typeName != "string" ? !1 : t === void 0 ? !0 : n.typeName == t.typeName
}
function wr(e, t) {
    return Qe(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t)
}
var Kp = {
    "google.protobuf.DoubleValue": ee.DOUBLE,
    "google.protobuf.FloatValue": ee.FLOAT,
    "google.protobuf.Int64Value": ee.INT64,
    "google.protobuf.UInt64Value": ee.UINT64,
    "google.protobuf.Int32Value": ee.INT32,
    "google.protobuf.UInt32Value": ee.UINT32,
    "google.protobuf.BoolValue": ee.BOOL,
    "google.protobuf.StringValue": ee.STRING,
    "google.protobuf.BytesValue": ee.BYTES
};
var mc = {
    ignoreUnknownFields: !1
}
  , gc = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
};
function $h(e) {
    return e ? Object.assign(Object.assign({}, mc), e) : mc
}
function Kh(e) {
    return e ? Object.assign(Object.assign({}, gc), e) : gc
}
var Sr = Symbol()
  , vr = Symbol();
function bc() {
    return {
        makeReadOptions: $h,
        makeWriteOptions: Kh,
        readMessage(e, t, n, i) {
            if (t == null || Array.isArray(t) || typeof t != "object")
                throw new Error(`cannot decode message ${e.typeName} from JSON: ${ut(t)}`);
            i = i ?? new e;
            let s = new Map
              , r = n.typeRegistry;
            for (let[o,a] of Object.entries(t)) {
                let l = e.fields.findJsonName(o);
                if (l) {
                    if (l.oneof) {
                        if (a === null && l.kind == "scalar")
                            continue;
                        let c = s.get(l.oneof);
                        if (c !== void 0)
                            throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${c}", "${o}"`);
                        s.set(l.oneof, o)
                    }
                    yc(i, a, l, n, e)
                } else {
                    let c = !1;
                    if (r?.findExtension && o.startsWith("[") && o.endsWith("]")) {
                        let u = r.findExtension(o.substring(1, o.length - 1));
                        if (u && u.extendee.typeName == e.typeName) {
                            c = !0;
                            let[d,m] = br(u);
                            yc(d, a, u.field, n, u),
                            fc(i, u, m(), n)
                        }
                    }
                    if (!c && !n.ignoreUnknownFields)
                        throw new Error(`cannot decode message ${e.typeName} from JSON: key "${o}" is unknown`)
                }
            }
            return i
        },
        writeMessage(e, t) {
            let n = e.getType(), i = {}, s;
            try {
                for (s of n.fields.byNumber()) {
                    if (!kr(s, e)) {
                        if (s.req)
                            throw "required field not set";
                        if (!t.emitDefaultValues || !Jh(s))
                            continue
                    }
                    let o = s.oneof ? e[s.oneof.localName].value : e[s.localName]
                      , a = _c(s, o, t);
                    a !== void 0 && (i[t.useProtoFieldName ? s.name : s.jsonName] = a)
                }
                let r = t.typeRegistry;
                if (r?.findExtensionFor)
                    for (let o of n.runtime.bin.listUnknownFields(e)) {
                        let a = r.findExtensionFor(n.typeName, o.no);
                        if (a && $o(e, a)) {
                            let l = dc(e, a, t)
                              , c = _c(a.field, l, t);
                            c !== void 0 && (i[a.field.jsonName] = c)
                        }
                    }
            } catch (r) {
                let o = s ? `cannot encode field ${n.typeName}.${s.name} to JSON` : `cannot encode message ${n.typeName} to JSON`
                  , a = r instanceof Error ? r.message : String(r);
                throw new Error(o + (a.length > 0 ? `: ${a}` : ""))
            }
            return i
        },
        readScalar(e, t, n) {
            return Sn(e, t, n ?? it.BIGINT, !0)
        },
        writeScalar(e, t, n) {
            if (t !== void 0 && (n || gr(e, t)))
                return Er(e, t)
        },
        debug: ut
    }
}
function ut(e) {
    if (e === null)
        return "null";
    switch (typeof e) {
    case "object":
        return Array.isArray(e) ? "array" : "object";
    case "string":
        return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
    default:
        return String(e)
    }
}
function yc(e, t, n, i, s) {
    let r = n.localName;
    if (n.repeated) {
        if (Re(n.kind != "map"),
        t === null)
            return;
        if (!Array.isArray(t))
            throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${ut(t)}`);
        let o = e[r];
        for (let a of t) {
            if (a === null)
                throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${ut(a)}`);
            switch (n.kind) {
            case "message":
                o.push(n.T.fromJson(a, i));
                break;
            case "enum":
                let l = zo(n.T, a, i.ignoreUnknownFields, !0);
                l !== vr && o.push(l);
                break;
            case "scalar":
                try {
                    o.push(Sn(n.T, a, n.L, !0))
                } catch (c) {
                    let u = `cannot decode field ${s.typeName}.${n.name} from JSON: ${ut(a)}`;
                    throw c instanceof Error && c.message.length > 0 && (u += `: ${c.message}`),
                    new Error(u)
                }
                break
            }
        }
    } else if (n.kind == "map") {
        if (t === null)
            return;
        if (typeof t != "object" || Array.isArray(t))
            throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${ut(t)}`);
        let o = e[r];
        for (let[a,l] of Object.entries(t)) {
            if (l === null)
                throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
            let c;
            try {
                c = zh(n.K, a)
            } catch (u) {
                let d = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${ut(t)}`;
                throw u instanceof Error && u.message.length > 0 && (d += `: ${u.message}`),
                new Error(d)
            }
            switch (n.V.kind) {
            case "message":
                o[c] = n.V.T.fromJson(l, i);
                break;
            case "enum":
                let u = zo(n.V.T, l, i.ignoreUnknownFields, !0);
                u !== vr && (o[c] = u);
                break;
            case "scalar":
                try {
                    o[c] = Sn(n.V.T, l, it.BIGINT, !0)
                } catch (d) {
                    let m = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${ut(t)}`;
                    throw d instanceof Error && d.message.length > 0 && (m += `: ${d.message}`),
                    new Error(m)
                }
                break
            }
        }
    } else
        switch (n.oneof && (e = e[n.oneof.localName] = {
            case: r
        },
        r = "value"),
        n.kind) {
        case "message":
            let o = n.T;
            if (t === null && o.typeName != "google.protobuf.Value")
                return;
            let a = e[r];
            Qe(a) ? a.fromJson(t, i) : (e[r] = a = o.fromJson(t, i),
            o.fieldWrapper && !n.oneof && (e[r] = o.fieldWrapper.unwrapField(a)));
            break;
        case "enum":
            let l = zo(n.T, t, i.ignoreUnknownFields, !1);
            switch (l) {
            case Sr:
                Ko(n, e);
                break;
            case vr:
                break;
            default:
                e[r] = l;
                break
            }
            break;
        case "scalar":
            try {
                let c = Sn(n.T, t, n.L, !1);
                switch (c) {
                case Sr:
                    Ko(n, e);
                    break;
                default:
                    e[r] = c;
                    break
                }
            } catch (c) {
                let u = `cannot decode field ${s.typeName}.${n.name} from JSON: ${ut(t)}`;
                throw c instanceof Error && c.message.length > 0 && (u += `: ${c.message}`),
                new Error(u)
            }
            break
        }
}
function zh(e, t) {
    if (e === ee.BOOL)
        switch (t) {
        case "true":
            t = !0;
            break;
        case "false":
            t = !1;
            break
        }
    return Sn(e, t, it.BIGINT, !0).toString()
}
function Sn(e, t, n, i) {
    if (t === null)
        return i ? ot(e, n) : Sr;
    switch (e) {
    case ee.DOUBLE:
    case ee.FLOAT:
        if (t === "NaN")
            return Number.NaN;
        if (t === "Infinity")
            return Number.POSITIVE_INFINITY;
        if (t === "-Infinity")
            return Number.NEGATIVE_INFINITY;
        if (t === "" || typeof t == "string" && t.trim().length !== t.length || typeof t != "string" && typeof t != "number")
            break;
        let s = Number(t);
        if (Number.isNaN(s) || !Number.isFinite(s))
            break;
        return e == ee.FLOAT && fr(s),
        s;
    case ee.INT32:
    case ee.FIXED32:
    case ee.SFIXED32:
    case ee.SINT32:
    case ee.UINT32:
        let r;
        if (typeof t == "number" ? r = t : typeof t == "string" && t.length > 0 && t.trim().length === t.length && (r = Number(t)),
        r === void 0)
            break;
        return e == ee.UINT32 || e == ee.FIXED32 ? En(r) : un(r),
        r;
    case ee.INT64:
    case ee.SFIXED64:
    case ee.SINT64:
        if (typeof t != "number" && typeof t != "string")
            break;
        let o = Fe.parse(t);
        return n ? o.toString() : o;
    case ee.FIXED64:
    case ee.UINT64:
        if (typeof t != "number" && typeof t != "string")
            break;
        let a = Fe.uParse(t);
        return n ? a.toString() : a;
    case ee.BOOL:
        if (typeof t != "boolean")
            break;
        return t;
    case ee.STRING:
        if (typeof t != "string")
            break;
        try {
            encodeURIComponent(t)
        } catch {
            throw new Error("invalid UTF8")
        }
        return t;
    case ee.BYTES:
        if (t === "")
            return new Uint8Array(0);
        if (typeof t != "string")
            break;
        return Ho.dec(t)
    }
    throw new Error
}
function zo(e, t, n, i) {
    if (t === null)
        return e.typeName == "google.protobuf.NullValue" ? 0 : i ? e.values[0].no : Sr;
    switch (typeof t) {
    case "number":
        if (Number.isInteger(t))
            return t;
        break;
    case "string":
        let s = e.findName(t);
        if (s !== void 0)
            return s.no;
        if (n)
            return vr;
        break
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${ut(t)}`)
}
function Jh(e) {
    return e.repeated || e.kind == "map" ? !0 : !(e.oneof || e.kind == "message" || e.opt || e.req)
}
function _c(e, t, n) {
    if (e.kind == "map") {
        Re(typeof t == "object" && t != null);
        let i = {}
          , s = Object.entries(t);
        switch (e.V.kind) {
        case "scalar":
            for (let[o,a] of s)
                i[o.toString()] = Er(e.V.T, a);
            break;
        case "message":
            for (let[o,a] of s)
                i[o.toString()] = a.toJson(n);
            break;
        case "enum":
            let r = e.V.T;
            for (let[o,a] of s)
                i[o.toString()] = Jo(r, a, n.enumAsInteger);
            break
        }
        return n.emitDefaultValues || s.length > 0 ? i : void 0
    }
    if (e.repeated) {
        Re(Array.isArray(t));
        let i = [];
        switch (e.kind) {
        case "scalar":
            for (let s = 0; s < t.length; s++)
                i.push(Er(e.T, t[s]));
            break;
        case "enum":
            for (let s = 0; s < t.length; s++)
                i.push(Jo(e.T, t[s], n.enumAsInteger));
            break;
        case "message":
            for (let s = 0; s < t.length; s++)
                i.push(t[s].toJson(n));
            break
        }
        return n.emitDefaultValues || i.length > 0 ? i : void 0
    }
    switch (e.kind) {
    case "scalar":
        return Er(e.T, t);
    case "enum":
        return Jo(e.T, t, n.enumAsInteger);
    case "message":
        return wr(e.T, t).toJson(n)
    }
}
function Jo(e, t, n) {
    var i;
    if (Re(typeof t == "number"),
    e.typeName == "google.protobuf.NullValue")
        return null;
    if (n)
        return t;
    let s = e.findNumber(t);
    return (i = s?.name) !== null && i !== void 0 ? i : t
}
function Er(e, t) {
    switch (e) {
    case ee.INT32:
    case ee.SFIXED32:
    case ee.SINT32:
    case ee.FIXED32:
    case ee.UINT32:
        return Re(typeof t == "number"),
        t;
    case ee.FLOAT:
    case ee.DOUBLE:
        return Re(typeof t == "number"),
        Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
    case ee.STRING:
        return Re(typeof t == "string"),
        t;
    case ee.BOOL:
        return Re(typeof t == "boolean"),
        t;
    case ee.UINT64:
    case ee.FIXED64:
    case ee.INT64:
    case ee.SFIXED64:
    case ee.SINT64:
        return Re(typeof t == "bigint" || typeof t == "string" || typeof t == "number"),
        t.toString();
    case ee.BYTES:
        return Re(t instanceof Uint8Array),
        Ho.enc(t)
    }
}
var hn = Symbol("@bufbuild/protobuf/unknown-fields")
  , Tc = {
    readUnknownFields: !0,
    readerFactory: e => new _r(e)
}
  , kc = {
    writeUnknownFields: !0,
    writerFactory: () => new yr
};
function Yh(e) {
    return e ? Object.assign(Object.assign({}, Tc), e) : Tc
}
function Qh(e) {
    return e ? Object.assign(Object.assign({}, kc), e) : kc
}
function Sc() {
    return {
        makeReadOptions: Yh,
        makeWriteOptions: Qh,
        listUnknownFields(e) {
            var t;
            return (t = e[hn]) !== null && t !== void 0 ? t : []
        },
        discardUnknownFields(e) {
            delete e[hn]
        },
        writeUnknownFields(e, t) {
            let i = e[hn];
            if (i)
                for (let s of i)
                    t.tag(s.no, s.wireType).raw(s.data)
        },
        onUnknownField(e, t, n, i) {
            let s = e;
            Array.isArray(s[hn]) || (s[hn] = []),
            s[hn].push({
                no: t,
                wireType: n,
                data: i
            })
        },
        readMessage(e, t, n, i, s) {
            let r = e.getType(), o = s ? t.len : t.pos + n, a, l;
            for (; t.pos < o && ([a,l] = t.tag(),
            !(s === !0 && l == Be.EndGroup)); ) {
                let c = r.fields.find(a);
                if (!c) {
                    let u = t.skip(l, a);
                    i.readUnknownFields && this.onUnknownField(e, a, l, u);
                    continue
                }
                wc(e, t, c, l, i)
            }
            if (s && (l != Be.EndGroup || a !== n))
                throw new Error("invalid end group tag")
        },
        readField: wc,
        writeMessage(e, t, n) {
            let i = e.getType();
            for (let s of i.fields.byNumber()) {
                if (!kr(s, e)) {
                    if (s.req)
                        throw new Error(`cannot encode field ${i.typeName}.${s.name} to binary: required field not set`);
                    continue
                }
                let r = s.oneof ? e[s.oneof.localName].value : e[s.localName];
                vc(s, r, t, n)
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, t),
            t
        },
        writeField(e, t, n, i) {
            t !== void 0 && vc(e, t, n, i)
        }
    }
}
function wc(e, t, n, i, s) {
    let {repeated: r, localName: o} = n;
    switch (n.oneof && (e = e[n.oneof.localName],
    e.case != o && delete e.value,
    e.case = o,
    o = "value"),
    n.kind) {
    case "scalar":
    case "enum":
        let a = n.kind == "enum" ? ee.INT32 : n.T
          , l = Rr;
        if (n.kind == "scalar" && n.L > 0 && (l = Zh),
        r) {
            let m = e[o];
            if (i == Be.LengthDelimited && a != ee.STRING && a != ee.BYTES) {
                let _ = t.uint32() + t.pos;
                for (; t.pos < _; )
                    m.push(l(t, a))
            } else
                m.push(l(t, a))
        } else
            e[o] = l(t, a);
        break;
    case "message":
        let c = n.T;
        r ? e[o].push(Ir(t, new c, s, n)) : Qe(e[o]) ? Ir(t, e[o], s, n) : (e[o] = Ir(t, new c, s, n),
        c.fieldWrapper && !n.oneof && !n.repeated && (e[o] = c.fieldWrapper.unwrapField(e[o])));
        break;
    case "map":
        let[u,d] = Xh(n, t, s);
        e[o][u] = d;
        break
    }
}
function Ir(e, t, n, i) {
    let s = t.getType().runtime.bin
      , r = i?.delimited;
    return s.readMessage(t, e, r ? i.no : e.uint32(), n, r),
    t
}
function Xh(e, t, n) {
    let i = t.uint32(), s = t.pos + i, r, o;
    for (; t.pos < s; ) {
        let[a] = t.tag();
        switch (a) {
        case 1:
            r = Rr(t, e.K);
            break;
        case 2:
            switch (e.V.kind) {
            case "scalar":
                o = Rr(t, e.V.T);
                break;
            case "enum":
                o = t.int32();
                break;
            case "message":
                o = Ir(t, new e.V.T, n, void 0);
                break
            }
            break
        }
    }
    if (r === void 0 && (r = ot(e.K, it.BIGINT)),
    typeof r != "string" && typeof r != "number" && (r = r.toString()),
    o === void 0)
        switch (e.V.kind) {
        case "scalar":
            o = ot(e.V.T, it.BIGINT);
            break;
        case "enum":
            o = e.V.T.values[0].no;
            break;
        case "message":
            o = new e.V.T;
            break
        }
    return [r, o]
}
function Zh(e, t) {
    let n = Rr(e, t);
    return typeof n == "bigint" ? n.toString() : n
}
function Rr(e, t) {
    switch (t) {
    case ee.STRING:
        return e.string();
    case ee.BOOL:
        return e.bool();
    case ee.DOUBLE:
        return e.double();
    case ee.FLOAT:
        return e.float();
    case ee.INT32:
        return e.int32();
    case ee.INT64:
        return e.int64();
    case ee.UINT64:
        return e.uint64();
    case ee.FIXED64:
        return e.fixed64();
    case ee.BYTES:
        return e.bytes();
    case ee.FIXED32:
        return e.fixed32();
    case ee.SFIXED32:
        return e.sfixed32();
    case ee.SFIXED64:
        return e.sfixed64();
    case ee.SINT64:
        return e.sint64();
    case ee.UINT32:
        return e.uint32();
    case ee.SINT32:
        return e.sint32()
    }
}
function vc(e, t, n, i) {
    Re(t !== void 0);
    let s = e.repeated;
    switch (e.kind) {
    case "scalar":
    case "enum":
        let r = e.kind == "enum" ? ee.INT32 : e.T;
        if (s)
            if (Re(Array.isArray(t)),
            e.packed)
                td(n, r, e.no, t);
            else
                for (let o of t)
                    In(n, r, e.no, o);
        else
            In(n, r, e.no, t);
        break;
    case "message":
        if (s) {
            Re(Array.isArray(t));
            for (let o of t)
                Ec(n, i, e, o)
        } else
            Ec(n, i, e, t);
        break;
    case "map":
        Re(typeof t == "object" && t != null);
        for (let[o,a] of Object.entries(t))
            ed(n, i, e, o, a);
        break
    }
}
function ed(e, t, n, i, s) {
    e.tag(n.no, Be.LengthDelimited),
    e.fork();
    let r = i;
    switch (n.K) {
    case ee.INT32:
    case ee.FIXED32:
    case ee.UINT32:
    case ee.SFIXED32:
    case ee.SINT32:
        r = Number.parseInt(i);
        break;
    case ee.BOOL:
        Re(i == "true" || i == "false"),
        r = i == "true";
        break
    }
    switch (In(e, n.K, 1, r),
    n.V.kind) {
    case "scalar":
        In(e, n.V.T, 2, s);
        break;
    case "enum":
        In(e, ee.INT32, 2, s);
        break;
    case "message":
        Re(s !== void 0),
        e.tag(2, Be.LengthDelimited).bytes(s.toBinary(t));
        break
    }
    e.join()
}
function Ec(e, t, n, i) {
    let s = wr(n.T, i);
    n.delimited ? e.tag(n.no, Be.StartGroup).raw(s.toBinary(t)).tag(n.no, Be.EndGroup) : e.tag(n.no, Be.LengthDelimited).bytes(s.toBinary(t))
}
function In(e, t, n, i) {
    Re(i !== void 0);
    let[s,r] = Ic(t);
    e.tag(n, s)[r](i)
}
function td(e, t, n, i) {
    if (!i.length)
        return;
    e.tag(n, Be.LengthDelimited).fork();
    let[,s] = Ic(t);
    for (let r = 0; r < i.length; r++)
        e[s](i[r]);
    e.join()
}
function Ic(e) {
    let t = Be.Varint;
    switch (e) {
    case ee.BYTES:
    case ee.STRING:
        t = Be.LengthDelimited;
        break;
    case ee.DOUBLE:
    case ee.FIXED64:
    case ee.SFIXED64:
        t = Be.Bit64;
        break;
    case ee.FIXED32:
    case ee.SFIXED32:
    case ee.FLOAT:
        t = Be.Bit32;
        break
    }
    let n = ee[e].toLowerCase();
    return [t, n]
}
function Rc() {
    return {
        setEnumType: Fo,
        initPartial(e, t) {
            if (e === void 0)
                return;
            let n = t.getType();
            for (let i of n.fields.byMember()) {
                let s = i.localName
                  , r = t
                  , o = e;
                if (o[s] != null)
                    switch (i.kind) {
                    case "oneof":
                        let a = o[s].case;
                        if (a === void 0)
                            continue;
                        let l = i.findField(a)
                          , c = o[s].value;
                        l && l.kind == "message" && !Qe(c, l.T) ? c = new l.T(c) : l && l.kind === "scalar" && l.T === ee.BYTES && (c = Rn(c)),
                        r[s] = {
                            case: a,
                            value: c
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let u = o[s];
                        i.T === ee.BYTES && (u = i.repeated ? u.map(Rn) : Rn(u)),
                        r[s] = u;
                        break;
                    case "map":
                        switch (i.V.kind) {
                        case "scalar":
                        case "enum":
                            if (i.V.T === ee.BYTES)
                                for (let[y,_] of Object.entries(o[s]))
                                    r[s][y] = Rn(_);
                            else
                                Object.assign(r[s], o[s]);
                            break;
                        case "message":
                            let m = i.V.T;
                            for (let y of Object.keys(o[s])) {
                                let _ = o[s][y];
                                m.fieldWrapper || (_ = new m(_)),
                                r[s][y] = _
                            }
                            break
                        }
                        break;
                    case "message":
                        let d = i.T;
                        if (i.repeated)
                            r[s] = o[s].map(m => Qe(m, d) ? m : new d(m));
                        else {
                            let m = o[s];
                            d.fieldWrapper ? d.typeName === "google.protobuf.BytesValue" ? r[s] = Rn(m) : r[s] = m : r[s] = Qe(m, d) ? m : new d(m)
                        }
                        break
                    }
            }
        },
        equals(e, t, n) {
            return t === n ? !0 : !t || !n ? !1 : e.fields.byMember().every(i => {
                let s = t[i.localName]
                  , r = n[i.localName];
                if (i.repeated) {
                    if (s.length !== r.length)
                        return !1;
                    switch (i.kind) {
                    case "message":
                        return s.every( (o, a) => i.T.equals(o, r[a]));
                    case "scalar":
                        return s.every( (o, a) => Rt(i.T, o, r[a]));
                    case "enum":
                        return s.every( (o, a) => Rt(ee.INT32, o, r[a]))
                    }
                    throw new Error(`repeated cannot contain ${i.kind}`)
                }
                switch (i.kind) {
                case "message":
                    let o = s
                      , a = r;
                    return i.T.fieldWrapper && (o !== void 0 && !Qe(o) && (o = i.T.fieldWrapper.wrapField(o)),
                    a !== void 0 && !Qe(a) && (a = i.T.fieldWrapper.wrapField(a))),
                    i.T.equals(o, a);
                case "enum":
                    return Rt(ee.INT32, s, r);
                case "scalar":
                    return Rt(i.T, s, r);
                case "oneof":
                    if (s.case !== r.case)
                        return !1;
                    let l = i.findField(s.case);
                    if (l === void 0)
                        return !0;
                    switch (l.kind) {
                    case "message":
                        return l.T.equals(s.value, r.value);
                    case "enum":
                        return Rt(ee.INT32, s.value, r.value);
                    case "scalar":
                        return Rt(l.T, s.value, r.value)
                    }
                    throw new Error(`oneof cannot contain ${l.kind}`);
                case "map":
                    let c = Object.keys(s).concat(Object.keys(r));
                    switch (i.V.kind) {
                    case "message":
                        let u = i.V.T;
                        return c.every(m => u.equals(s[m], r[m]));
                    case "enum":
                        return c.every(m => Rt(ee.INT32, s[m], r[m]));
                    case "scalar":
                        let d = i.V.T;
                        return c.every(m => Rt(d, s[m], r[m]))
                    }
                    break
                }
            }
            )
        },
        clone(e) {
            let t = e.getType()
              , n = new t
              , i = n;
            for (let s of t.fields.byMember()) {
                let r = e[s.localName], o;
                if (s.repeated)
                    o = r.map(Ar);
                else if (s.kind == "map") {
                    o = i[s.localName];
                    for (let[a,l] of Object.entries(r))
                        o[a] = Ar(l)
                } else
                    s.kind == "oneof" ? o = s.findField(r.case) ? {
                        case: r.case,
                        value: Ar(r.value)
                    } : {
                        case: void 0
                    } : o = Ar(r);
                i[s.localName] = o
            }
            for (let s of t.runtime.bin.listUnknownFields(e))
                t.runtime.bin.onUnknownField(i, s.no, s.wireType, s.data);
            return n
        }
    }
}
function Ar(e) {
    if (e === void 0)
        return e;
    if (Qe(e))
        return e.clone();
    if (e instanceof Uint8Array) {
        let t = new Uint8Array(e.byteLength);
        return t.set(e),
        t
    }
    return e
}
function Rn(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e)
}
function Ac(e, t, n) {
    return {
        syntax: e,
        json: bc(),
        bin: Sc(),
        util: Object.assign(Object.assign({}, Rc()), {
            newFieldList: t,
            initFields: n
        }),
        makeMessageType(i, s, r) {
            return ic(this, i, s, r)
        },
        makeEnum: nc,
        makeEnumType: qo,
        getEnumType: tc,
        makeExtension(i, s, r) {
            return uc(this, i, s, r)
        }
    }
}
var Or = class {
    constructor(t, n) {
        this._fields = t,
        this._normalizer = n
    }
    findJsonName(t) {
        if (!this.jsonNames) {
            let n = {};
            for (let i of this.list())
                n[i.jsonName] = n[i.name] = i;
            this.jsonNames = n
        }
        return this.jsonNames[t]
    }
    find(t) {
        if (!this.numbers) {
            let n = {};
            for (let i of this.list())
                n[i.no] = i;
            this.numbers = n
        }
        return this.numbers[t]
    }
    list() {
        return this.all || (this.all = this._normalizer(this._fields)),
        this.all
    }
    byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort( (t, n) => t.no - n.no)),
        this.numbersAsc
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            let t = this.members, n;
            for (let i of this.list())
                i.oneof ? i.oneof !== n && (n = i.oneof,
                t.push(n)) : t.push(i)
        }
        return this.members
    }
}
;
function Yo(e, t) {
    let n = Nc(e);
    return t ? n : od(id(n))
}
function Oc(e) {
    return Yo(e, !1)
}
var Pc = Nc;
function Nc(e) {
    let t = !1
      , n = [];
    for (let i = 0; i < e.length; i++) {
        let s = e.charAt(i);
        switch (s) {
        case "_":
            t = !0;
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            n.push(s),
            t = !1;
            break;
        default:
            t && (t = !1,
            s = s.toUpperCase()),
            n.push(s);
            break
        }
    }
    return n.join("")
}
var nd = new Set(["constructor", "toString", "toJSON", "valueOf"])
  , rd = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"])
  , Cc = e => `${e}$`
  , id = e => rd.has(e) ? Cc(e) : e
  , od = e => nd.has(e) ? Cc(e) : e;
var Pr = class {
    constructor(t) {
        this.kind = "oneof",
        this.repeated = !1,
        this.packed = !1,
        this.opt = !1,
        this.req = !1,
        this.default = void 0,
        this.fields = [],
        this.name = t,
        this.localName = Oc(t)
    }
    addField(t) {
        Re(t.oneof === this, `field ${t.name} not one of ${this.name}`),
        this.fields.push(t)
    }
    findField(t) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for (let n = 0; n < this.fields.length; n++)
                this._lookup[this.fields[n].localName] = this.fields[n]
        }
        return this._lookup[t]
    }
}
;
function Uc(e, t) {
    var n, i, s, r, o, a;
    let l = [], c;
    for (let u of typeof e == "function" ? e() : e) {
        let d = u;
        if (d.localName = Yo(u.name, u.oneof !== void 0),
        d.jsonName = (n = u.jsonName) !== null && n !== void 0 ? n : Pc(u.name),
        d.repeated = (i = u.repeated) !== null && i !== void 0 ? i : !1,
        u.kind == "scalar" && (d.L = (s = u.L) !== null && s !== void 0 ? s : it.BIGINT),
        d.delimited = (r = u.delimited) !== null && r !== void 0 ? r : !1,
        d.req = (o = u.req) !== null && o !== void 0 ? o : !1,
        d.opt = (a = u.opt) !== null && a !== void 0 ? a : !1,
        u.packed === void 0 && (t ? d.packed = u.kind == "enum" || u.kind == "scalar" && u.T != ee.BYTES && u.T != ee.STRING : d.packed = !1),
        u.oneof !== void 0) {
            let m = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
            (!c || c.name != m) && (c = new Pr(m)),
            d.oneof = c,
            c.addField(d)
        }
        l.push(d)
    }
    return l
}
var we = Ac("proto3", e => new Or(e,t => Uc(t, !0)), e => {
    for (let t of e.getType().fields.byMember()) {
        if (t.opt)
            continue;
        let n = t.localName
          , i = e;
        if (t.repeated) {
            i[n] = [];
            continue
        }
        switch (t.kind) {
        case "oneof":
            i[n] = {
                case: void 0
            };
            break;
        case "enum":
            i[n] = 0;
            break;
        case "map":
            i[n] = {};
            break;
        case "scalar":
            i[n] = ot(t.T, t.L);
            break;
        case "message":
            break
        }
    }
}
);
var ht = class e extends Mt {
    constructor(t) {
        super(),
        this.seconds = Fe.zero,
        this.nanos = 0,
        we.util.initPartial(t, this)
    }
    fromJson(t, n) {
        if (typeof t != "string")
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${we.json.debug(t)}`);
        let i = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i)
            throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        let s = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
        if (Number.isNaN(s))
            throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z"))
            throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = Fe.parse(s / 1e3),
        this.nanos = 0,
        i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9),
        this
    }
    toJson(t) {
        let n = Number(this.seconds) * 1e3;
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z"))
            throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0)
            throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let i = "Z";
        if (this.nanos > 0) {
            let s = (this.nanos + 1e9).toString().substring(1);
            s.substring(3) === "000000" ? i = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? i = "." + s.substring(0, 6) + "Z" : i = "." + s + "Z"
        }
        return new Date(n).toISOString().replace(".000Z", i)
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6))
    }
    static now() {
        return e.fromDate(new Date)
    }
    static fromDate(t) {
        let n = t.getTime();
        return new e({
            seconds: Fe.parse(Math.floor(n / 1e3)),
            nanos: n % 1e3 * 1e6
        })
    }
    static fromBinary(t, n) {
        return new e().fromBinary(t, n)
    }
    static fromJson(t, n) {
        return new e().fromJson(t, n)
    }
    static fromJsonString(t, n) {
        return new e().fromJsonString(t, n)
    }
    static equals(t, n) {
        return we.util.equals(e, t, n)
    }
}
;
ht.runtime = we;
ht.typeName = "google.protobuf.Timestamp";
ht.fields = we.util.newFieldList( () => [{
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
}]);
var sd = we.makeMessageType("livekit.MetricsBatch", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: ht
}, {
    no: 3,
    name: "str_data",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 4,
    name: "time_series",
    kind: "message",
    T: ad,
    repeated: !0
}, {
    no: 5,
    name: "events",
    kind: "message",
    T: cd,
    repeated: !0
}])
  , ad = we.makeMessageType("livekit.TimeSeriesMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "samples",
    kind: "message",
    T: ld,
    repeated: !0
}, {
    no: 5,
    name: "rid",
    kind: "scalar",
    T: 13
}])
  , ld = we.makeMessageType("livekit.MetricSample", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: ht
}, {
    no: 3,
    name: "value",
    kind: "scalar",
    T: 2
}])
  , cd = we.makeMessageType("livekit.EventMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
}, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "start_timestamp_ms",
    kind: "scalar",
    T: 3
}, {
    no: 5,
    name: "end_timestamp_ms",
    kind: "scalar",
    T: 3,
    opt: !0
}, {
    no: 6,
    name: "normalized_start_timestamp",
    kind: "message",
    T: ht
}, {
    no: 7,
    name: "normalized_end_timestamp",
    kind: "message",
    T: ht,
    opt: !0
}, {
    no: 8,
    name: "metadata",
    kind: "scalar",
    T: 9
}, {
    no: 9,
    name: "rid",
    kind: "scalar",
    T: 13
}]);
var ud = we.makeEnum("livekit.Encryption.Type", [{
    no: 0,
    name: "NONE"
}, {
    no: 1,
    name: "GCM"
}, {
    no: 2,
    name: "CUSTOM"
}]);
var Nr = we.makeMessageType("livekit.DataPacket", () => [{
    no: 1,
    name: "kind",
    kind: "enum",
    T: we.getEnumType(Cr)
}, {
    no: 4,
    name: "participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 2,
    name: "user",
    kind: "message",
    T: Qo,
    oneof: "value"
}, {
    no: 3,
    name: "speaker",
    kind: "message",
    T: hd,
    oneof: "value"
}, {
    no: 6,
    name: "sip_dtmf",
    kind: "message",
    T: fd,
    oneof: "value"
}, {
    no: 7,
    name: "transcription",
    kind: "message",
    T: pd,
    oneof: "value"
}, {
    no: 8,
    name: "metrics",
    kind: "message",
    T: sd,
    oneof: "value"
}, {
    no: 9,
    name: "chat_message",
    kind: "message",
    T: gd,
    oneof: "value"
}, {
    no: 10,
    name: "rpc_request",
    kind: "message",
    T: yd,
    oneof: "value"
}, {
    no: 11,
    name: "rpc_ack",
    kind: "message",
    T: _d,
    oneof: "value"
}, {
    no: 12,
    name: "rpc_response",
    kind: "message",
    T: bd,
    oneof: "value"
}, {
    no: 13,
    name: "stream_header",
    kind: "message",
    T: Ed,
    oneof: "value"
}, {
    no: 14,
    name: "stream_chunk",
    kind: "message",
    T: Sd,
    oneof: "value"
}, {
    no: 15,
    name: "stream_trailer",
    kind: "message",
    T: Id,
    oneof: "value"
}])
  , Cr = we.makeEnum("livekit.DataPacket.Kind", [{
    no: 0,
    name: "RELIABLE"
}, {
    no: 1,
    name: "LOSSY"
}])
  , hd = we.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{
    no: 1,
    name: "speakers",
    kind: "message",
    T: dd,
    repeated: !0
}])
  , dd = we.makeMessageType("livekit.SpeakerInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "level",
    kind: "scalar",
    T: 2
}, {
    no: 3,
    name: "active",
    kind: "scalar",
    T: 8
}])
  , Qo = we.makeMessageType("livekit.UserPacket", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 12
}, {
    no: 3,
    name: "destination_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 6,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 4,
    name: "topic",
    kind: "scalar",
    T: 9,
    opt: !0
}, {
    no: 8,
    name: "id",
    kind: "scalar",
    T: 9,
    opt: !0
}, {
    no: 9,
    name: "start_time",
    kind: "scalar",
    T: 4,
    opt: !0
}, {
    no: 10,
    name: "end_time",
    kind: "scalar",
    T: 4,
    opt: !0
}, {
    no: 11,
    name: "nonce",
    kind: "scalar",
    T: 12
}])
  , fd = we.makeMessageType("livekit.SipDTMF", () => [{
    no: 3,
    name: "code",
    kind: "scalar",
    T: 13
}, {
    no: 4,
    name: "digit",
    kind: "scalar",
    T: 9
}])
  , pd = we.makeMessageType("livekit.Transcription", () => [{
    no: 2,
    name: "transcribed_participant_identity",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "track_id",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "segments",
    kind: "message",
    T: md,
    repeated: !0
}])
  , md = we.makeMessageType("livekit.TranscriptionSegment", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "start_time",
    kind: "scalar",
    T: 4
}, {
    no: 4,
    name: "end_time",
    kind: "scalar",
    T: 4
}, {
    no: 5,
    name: "final",
    kind: "scalar",
    T: 8
}, {
    no: 6,
    name: "language",
    kind: "scalar",
    T: 9
}])
  , gd = we.makeMessageType("livekit.ChatMessage", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
}, {
    no: 3,
    name: "edit_timestamp",
    kind: "scalar",
    T: 3,
    opt: !0
}, {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "deleted",
    kind: "scalar",
    T: 8
}, {
    no: 6,
    name: "generated",
    kind: "scalar",
    T: 8
}])
  , yd = we.makeMessageType("livekit.RpcRequest", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "method",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "payload",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "response_timeout_ms",
    kind: "scalar",
    T: 13
}, {
    no: 5,
    name: "version",
    kind: "scalar",
    T: 13
}])
  , _d = we.makeMessageType("livekit.RpcAck", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
}])
  , bd = we.makeMessageType("livekit.RpcResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 9,
    oneof: "value"
}, {
    no: 3,
    name: "error",
    kind: "message",
    T: Td,
    oneof: "value"
}])
  , Td = we.makeMessageType("livekit.RpcError", () => [{
    no: 1,
    name: "code",
    kind: "scalar",
    T: 13
}, {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "data",
    kind: "scalar",
    T: 9
}]);
var kd = we.makeEnum("livekit.DataStream.OperationType", [{
    no: 0,
    name: "CREATE"
}, {
    no: 1,
    name: "UPDATE"
}, {
    no: 2,
    name: "DELETE"
}, {
    no: 3,
    name: "REACTION"
}])
  , wd = we.makeMessageType("livekit.DataStream.TextHeader", () => [{
    no: 1,
    name: "operation_type",
    kind: "enum",
    T: we.getEnumType(kd)
}, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 5
}, {
    no: 3,
    name: "reply_to_stream_id",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "attached_stream_ids",
    kind: "scalar",
    T: 9,
    repeated: !0
}, {
    no: 5,
    name: "generated",
    kind: "scalar",
    T: 8
}], {
    localName: "DataStream_TextHeader"
})
  , vd = we.makeMessageType("livekit.DataStream.ByteHeader", () => [{
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
}], {
    localName: "DataStream_ByteHeader"
})
  , Ed = we.makeMessageType("livekit.DataStream.Header", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
}, {
    no: 3,
    name: "topic",
    kind: "scalar",
    T: 9
}, {
    no: 4,
    name: "mime_type",
    kind: "scalar",
    T: 9
}, {
    no: 5,
    name: "total_length",
    kind: "scalar",
    T: 4,
    opt: !0
}, {
    no: 7,
    name: "encryption_type",
    kind: "enum",
    T: we.getEnumType(ud)
}, {
    no: 8,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
        kind: "scalar",
        T: 9
    }
}, {
    no: 9,
    name: "text_header",
    kind: "message",
    T: wd,
    oneof: "content_header"
}, {
    no: 10,
    name: "byte_header",
    kind: "message",
    T: vd,
    oneof: "content_header"
}], {
    localName: "DataStream_Header"
})
  , Sd = we.makeMessageType("livekit.DataStream.Chunk", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "chunk_index",
    kind: "scalar",
    T: 4
}, {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 12
}, {
    no: 4,
    name: "version",
    kind: "scalar",
    T: 5
}, {
    no: 5,
    name: "iv",
    kind: "scalar",
    T: 12,
    opt: !0
}], {
    localName: "DataStream_Chunk"
})
  , Id = we.makeMessageType("livekit.DataStream.Trailer", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
}, {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
}, {
    no: 3,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
        kind: "scalar",
        T: 9
    }
}], {
    localName: "DataStream_Trailer"
});
var Ur = class extends Pt {
    constructor(t) {
        super(t),
        console.debug("SubscriberPeer created.")
    }
    async onDataChannelMessage(t, n) {
        let i;
        if (n.data instanceof ArrayBuffer)
            i = n.data;
        else if (n.data instanceof Blob)
            i = await n.data.arrayBuffer();
        else {
            console.error("unsupported data type", n.data);
            return
        }
        let s = Nr.fromBinary(new Uint8Array(i));
        s.value?.case === "user" && super.dispatchPayload(t, s.value.value.payload)
    }
}
;
var Mr = class extends Pt {
    pubLossyChannel;
    pubReliableChannel;
    constructor(t) {
        super(t),
        this.pubReliableChannel = super.createDataChannel(2, {
            ordered: !0
        }),
        this.pubLossyChannel = super.createDataChannel(1, {
            ordered: !1,
            maxRetransmits: 0
        }),
        this.pubReliableChannel.onopen = () => {
            this.onDatachannel?.(2)
        }
        ,
        this.pubLossyChannel.onopen = () => {
            this.onDatachannel?.(1)
        }
        ,
        console.debug("PublisherPeer created.")
    }
    sendText = t => {
        this.sendData(new TextEncoder().encode(t))
    }
    ;
    sendData = t => {
        let n = xe.create({
            type: 100,
            customCommand: t
        })
          , i = xe.encode(n).finish()
          , s = new Nr({
            kind: this.options.ipcMode === "lossy" ? Cr.LOSSY : Cr.RELIABLE,
            value: {
                case: "user",
                value: new Qo({
                    payload: i,
                    topic: "ipc_topic"
                })
            }
        })
          , r = new Uint8Array(s.toBinary());
        this.options.ipcMode === "lossy" ? this.pubLossyChannel.readyState === "open" && this.pubLossyChannel.send(r) : this.pubReliableChannel.readyState === "open" && this.pubReliableChannel.send(r)
    }
}
;
var Mc = {
    SIGNALING_TIMEOUT: 1e4
};
var Xo = class {
    onConnectionState;
    onDatachannel;
    onSnapshot;
    onStream;
    onSfuStream;
    onVideoListLoaded;
    onProgress;
    onVideoDownloaded;
    onMessage;
    onRecording;
    onTimeout;
    onRoomInfo;
    onQuility;
    onSpeaking;
    onParticipant;
    options;
    client;
    rtcTimer;
    cmdPeer;
    subPeer;
    pubPeer;
    constructor(t) {
        if (this.options = this.initializeOptions(t),
        this.options.signaling === "mqtt")
            this.client = new ur(this.options),
            this.CreateCmdPeer(this.client),
            this.client.onConnect = n => this.mqttOnConnect(n);
        else if (this.options.signaling === "websocket")
            this.client = new hr(this.options),
            this.setSfuServerEvent(this.client);
        else
            throw "unknow signaling method."
    }
    connect = () => {
        this.client.connect(),
        this.options.timeout !== 0 && (this.rtcTimer = setTimeout( () => {
            this.cmdPeer?.connectionState === "connected" || this.subPeer?.connectionState === "connected" || this.pubPeer?.connectionState === "connected" || (this.onTimeout && this.onTimeout(),
            console.warn("RTC connection timeout."),
            this.terminate())
        }
        , this.options.timeout))
    }
    ;
    terminate = () => {
        clearTimeout(this.rtcTimer),
        this.cmdPeer?.close(),
        this.subPeer?.close(),
        this.pubPeer?.close(),
        this.client.disconnect(),
        this.onConnectionState?.("closed"),
        console.debug("PiCamera connections had been terminated.")
    }
    ;
    getStatus = () => this.cmdPeer ? this.cmdPeer.connectionState : "new";
    fetchVideoList(t) {
        this.onVideoListLoaded && this.cmdPeer?.fetchVideoList(t)
    }
    downloadVideoFile(t) {
        this.onVideoDownloaded && this.cmdPeer?.downloadVideoFile(t)
    }
    setCameraControl = (t, n) => {
        this.cmdPeer?.setCameraControl(t, n)
    }
    ;
    snapshot = (t=30) => {
        this.cmdPeer?.snapshot(t)
    }
    ;
    sendText = t => {
        this.cmdPeer?.sendText(t),
        this.pubPeer?.sendText(t)
    }
    ;
    sendData = t => {
        this.cmdPeer?.sendData(t),
        this.pubPeer?.sendData(t)
    }
    ;
    startRecording = () => {
        this.cmdPeer?.startRecording()
    }
    ;
    stopRecording = () => {
        this.cmdPeer?.stopRecording()
    }
    ;
    toggleMic = (t=!this.options.isMicOn) => {
        this.cmdPeer?.toggleMic(t),
        this.pubPeer?.toggleMic(t),
        this.subPeer?.toggleMic(t)
    }
    ;
    toggleSpeaker = (t=!this.options.isSpeakerOn) => {
        this.cmdPeer?.toggleSpeaker(t),
        this.pubPeer?.toggleSpeaker(t),
        this.subPeer?.toggleSpeaker(t)
    }
    ;
    initializeOptions(t) {
        return {
            ...{
                signaling: "mqtt",
                mqttProtocol: "wss",
                mqttPath: "/mqtt",
                timeout: Mc.SIGNALING_TIMEOUT,
                datachannelOnly: !1,
                isMicOn: !0,
                isSpeakerOn: !0
            },
            ...t
        }
    }
    getRtcConfig = t => {
        let n = {};
        return n.iceServers = [],
        n.iceCandidatePoolSize = 10,
        t.stunUrls && t.stunUrls.length > 0 && n.iceServers.push({
            urls: t.stunUrls
        }),
        t.turnUrls && t.turnUsername && t.turnPassword && n.iceServers.push({
            urls: t.turnUrls,
            username: t.turnUsername,
            credential: t.turnPassword
        }),
        n
    }
    ;
    CreateCmdPeer = async t => {
        this.cmdPeer = new dr({
            options: this.options,
            ...this.getRtcConfig(this.options)
        }),
        this.cmdPeer.onStream = n => this.onStream?.(n),
        this.cmdPeer.onSfuStream = (n, i) => this.onSfuStream?.(n, i),
        this.cmdPeer.onIceCandidate = n => t.send("ice", JSON.stringify(n.candidate)),
        this.cmdPeer.onConnectionStateChange = n => {
            this.onConnectionState?.(n),
            n === "connected" && this.client?.isConnected() || n === "failed" && this.terminate()
        }
        ,
        this.cmdPeer.onSnapshot = n => this.onSnapshot?.(n),
        this.cmdPeer.onVideoListLoaded = n => this.onVideoListLoaded?.(n),
        this.cmdPeer.onProgress = (n, i, s) => this.onProgress?.(n, i, s),
        this.cmdPeer.onVideoDownloaded = n => this.onVideoDownloaded?.(n),
        this.cmdPeer.onDatachannel = n => this.onDatachannel?.(n),
        this.cmdPeer.onMessage = n => this.onMessage?.(n),
        this.cmdPeer.onRecording = n => this.onRecording?.(n),
        t.onIceCandidate = n => this.cmdPeer?.addIceCandidate(n),
        t.onAnswer = n => this.cmdPeer?.setRemoteDescription(n),
        t.onOffer = async n => {
            let i = await this.cmdPeer?.createAnswer(n);
            i && t.send("answer", JSON.stringify(i))
        }
    }
    ;
    mqttOnConnect = async t => {
        console.debug("Mqtt connected!");
        let n = await this.cmdPeer?.createOffer();
        this.options.codec && n?.sdp && (n.sdp = ks(n.sdp, this.options.codec)),
        n && t.send("offer", JSON.stringify(n))
    }
    ;
    setSfuServerEvent(t) {
        t.onConnect = () => {}
        ,
        t.onJoin = async n => {
            let i = {
                options: this.options
            };
            i.iceServers = [n],
            this.pubPeer = new Mr(i),
            this.pubPeer.onDatachannel = r => this.onDatachannel?.(r),
            this.pubPeer.onIceCandidate = r => {
                r.candidate && t.send("tricklePublisher", JSON.stringify(r.candidate))
            }
            ,
            this.subPeer = new Ur(i),
            this.subPeer.onMessage = r => this.onMessage?.(r),
            this.subPeer.onStream = r => this.onStream?.(r),
            this.subPeer.onSfuStream = (r, o) => this.onSfuStream?.(r, o),
            this.subPeer.onIceCandidate = r => {
                r.candidate && t.send("trickleSubscriber", JSON.stringify(r.candidate))
            }
            ;
            let s = await this.pubPeer.createOffer();
            t.send("offer", s.sdp)
        }
        ,
        t.onOffer = async n => {
            let i = await this.subPeer?.createAnswer(n);
            i && t.send("answer", i.sdp)
        }
        ,
        t.onAnswer = async n => this.pubPeer?.setRemoteDescription(n),
        t.onPublisherIce = async n => this.pubPeer?.addIceCandidate(n),
        t.onSubscriberIce = async n => this.subPeer?.addIceCandidate(n),
        t.onTrackPublished = () => {}
        ,
        t.onParticipant = n => this.onParticipant?.(n),
        t.onRoomInfo = n => this.onRoomInfo?.(n),
        t.onQuility = n => this.onQuility?.(n),
        t.onSpeaking = n => this.onSpeaking?.(n),
        t.onLeave = async () => t.disconnect()
    }
}
;
//export {Br as CameraControlId, xc as CameraKeyLabels, Dc as CameraValueLabels, Bn as ChannelId, pn as CommandType, fn as FileEntry, Xo as PiCamera, Ln as QueryFileResponse};
/*! Bundled license information:

mqtt/dist/mqtt.esm.js:
  (*! Bundled license information:
  
  @jspm/core/nodelibs/browser/buffer.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  *)
*/
