(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7737], {
        44807: function(e, n, t) {
            "use strict";
            t.d(n, {
                X: function() {
                    return l
                }
            });
            var o = t(14924),
                r = t(85893),
                i = (t(67294), t(45927)),
                a = t.n(i),
                s = t(86010),
                l = function(e) {
                    var n = e.value,
                        t = e.onChange,
                        i = e.variant,
                        l = void 0 === i ? "light" : i,
                        c = e.onClick,
                        d = e.className;
                    return (0, r.jsxs)("label", {
                        className: (0, s.Z)(a().root, a()[l], (0, o.Z)({}, a().checked, n), d),
                        onClick: c,
                        children: [(0, r.jsx)("input", {
                            type: "checkbox",
                            checked: n,
                            onChange: function() {
                                null === t || void 0 === t || t(!n)
                            },
                            className: a().input
                        }), (0, r.jsx)("svg", {
                            width: "16",
                            height: "11",
                            viewBox: "0 0 16 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().mark,
                            children: (0, r.jsx)("path", {
                                d: "M15 1L10.6 5.4L6.2 9.8L1 5",
                                strokeLinecap: "round"
                            })
                        })]
                    })
                }
        },
        79717: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return dt
                }
            });
            var o = t(47568),
                r = t(10253),
                i = t(70655),
                a = t(85893),
                s = t(86010),
                l = t(11163),
                c = t.n(l),
                d = t(78466),
                u = t(67294),
                p = t(9473),
                h = t(60258),
                C = {
                    src: "/_next/static/media/Icon_Premium.7d0ec499.svg",
                    height: 25,
                    width: 25
                },
                f = {
                    src: "/_next/static/media/Icon_Premium_Silver.aba2bfb7.svg",
                    height: 25,
                    width: 25
                },
                m = t(82489),
                g = t(82319),
                v = t(43678),
                x = t.n(v),
                _ = t(61225),
                w = t(91655),
                j = t(210),
                k = t(25675),
                b = t.n(k),
                y = t(11500),
                L = t(62982),
                S = t(14825),
                Z = t(41929),
                N = t(73967),
                P = t(14096),
                M = t(24104),
                H = function() {
                    var e = (0, o.Z)((function(e, n, t, o, r, a, s, l, c) {
                        var d, u, p, C, f, m, g, v, x, _, w, j, k;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return o ? [2] : (r(!0), d = e.toJSON(), u = JSON.stringify(d), p = new Blob([u], {
                                        type: "application/json"
                                    }), C = new File([p], "template.json", {
                                        type: "application/json"
                                    }), f = new FormData, m = new FormData, s && (f.append("temporaryUserToken", s), m.append("temporaryUserToken", s)), f.append("template", C), f.append("title", a), [4, e.toDataURL()]);
                                case 1:
                                    return g = i.sent(), [4, fetch(g).then((function(e) {
                                        return e.blob()
                                    }))];
                                case 2:
                                    v = i.sent(), x = new File([v], "template.png", {
                                        type: "image/png"
                                    }), m.append("preview", x), f.append("height", e.height), f.append("width", e.width), _ = {
                                        headers: {
                                            Authorization: null !== t && void 0 !== t ? t : ""
                                        }
                                    }, i.label = 3;
                                case 3:
                                    return i.trys.push([3, 10, , 11]), n ? [4, h.V0.patch("/user/templates/save/".concat(n, "/0"), f, _)] : [3, 6];
                                case 4:
                                    return i.sent(), [4, h.V0.patch("/user/templates/".concat(n, "/preview"), m, _)];
                                case 5:
                                    return i.sent(), [3, 9];
                                case 6:
                                    return s || t ? ((null === c || void 0 === c ? void 0 : c.categoryId) && f.append("categoryId", c.categoryId), [4, h.V0.post("/user/templates/create", f, _)]) : [3, 9];
                                case 7:
                                    return w = i.sent(), j = w.data._id, null === l || void 0 === l || l(j), [4, h.V0.patch("/user/templates/".concat(j, "/preview"), m, _)];
                                case 8:
                                    i.sent(), i.label = 9;
                                case 9:
                                    return [3, 11];
                                case 10:
                                    return k = i.sent(), console.log(k), [3, 11];
                                case 11:
                                    return r(!1), [2]
                            }
                        }))
                    }));
                    return function(n, t, o, r, i, a, s, l, c) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = H,
                I = function(e, n) {
                    var t = e.error.removeBackgroundError,
                        o = e.scale.reset,
                        r = e.sidePanel,
                        i = r.bodyText,
                        a = r.createBody,
                        s = r.createHeader,
                        l = r.createSubHeader,
                        c = r.error,
                        d = r.headerText,
                        u = r.height,
                        p = r.layers,
                        h = r.layersTip,
                        C = r.magicResizeDescription,
                        f = r.myFonts,
                        m = r.namePlaceholder,
                        g = r.noLayers,
                        v = r.noResults,
                        x = r.otherFormats,
                        _ = r.photos,
                        w = r.searchTemplatesWithSameSize,
                        j = r.subHeaderText,
                        k = r.templates,
                        b = r.uploadFont,
                        y = r.uploadImage,
                        L = r.uploadTip,
                        S = r.useMagicResize,
                        Z = r.width,
                        N = r.template,
                        P = r.text,
                        M = r.photo,
                        H = r.elements,
                        D = r.upload,
                        I = r.background,
                        E = r.resize,
                        R = r.searchPlaceholder,
                        T = e.toolbar,
                        B = T.alignBottom,
                        V = T.alignCenter,
                        W = T.alignLeft,
                        F = T.alignMiddle,
                        U = T.alignRight,
                        O = T.alignTop,
                        A = T.alwaysOnTop,
                        q = T.blur,
                        G = T.border,
                        z = T.brightness,
                        Y = T.cancelRemoveBackground,
                        X = T.confirmRemoveBackground,
                        J = T.cornerRadius,
                        $ = T.crop,
                        K = T.cropCancel,
                        Q = T.cropDone,
                        ee = T.down,
                        ne = T.download,
                        te = T.duplicateElements,
                        oe = T.effects,
                        re = T.fitToBackground,
                        ie = T.flip,
                        ae = T.flipHorizontally,
                        se = T.flipVertically,
                        le = T.grayscale,
                        ce = T.layering,
                        de = T.lockedDescription,
                        ue = T.opacity,
                        pe = T.position,
                        he = T.removeBackground,
                        Ce = T.removeClip,
                        fe = T.removeElements,
                        me = T.removeMask,
                        ge = T.saveAsImage,
                        ve = T.saveAsPDF,
                        xe = T.selectable,
                        _e = T.sepia,
                        we = T.shadow,
                        je = T.showInExport,
                        ke = T.textStroke,
                        be = T.toBottom,
                        ye = T.toForward,
                        Le = T.transparency,
                        Se = T.unlockedDescription,
                        Ze = T.up,
                        Ne = e.workspace;
                    n({
                        error: {
                            removeBackground: t
                        },
                        scale: {
                            reset: o
                        },
                        sidePanel: {
                            bodyText: i,
                            createBody: a,
                            createHeader: s,
                            createSubHeader: l,
                            error: c,
                            headerText: d,
                            height: u,
                            layers: p,
                            layersTip: h,
                            magicResizeDescription: C,
                            myFonts: f,
                            namePlaceholder: m,
                            noLayers: g,
                            noResults: v,
                            otherFormats: x,
                            photos: _,
                            searchTemplatesWithSameSize: w,
                            subHeaderText: j,
                            templates: k,
                            uploadFont: b,
                            uploadImage: y,
                            uploadTip: L,
                            useMagicResize: S,
                            width: Z,
                            template: N,
                            text: P,
                            photo: M,
                            elements: H,
                            upload: D,
                            background: I,
                            resize: E,
                            searchPlaceholder: R
                        },
                        toolbar: {
                            alignBottom: B,
                            alignCenter: V,
                            alignLeft: W,
                            alignMiddle: F,
                            alignRight: U,
                            alignTop: O,
                            alwaysOnTop: A,
                            blur: q,
                            border: G,
                            brightness: z,
                            cancelRemoveBackground: Y,
                            confirmRemoveBackground: X,
                            cornerRadius: J,
                            crop: $,
                            cropCancel: K,
                            cropDone: Q,
                            down: ee,
                            download: ne,
                            duplicateElements: te,
                            effects: oe,
                            fitToBackground: re,
                            flip: ie,
                            flipHorizontally: ae,
                            flipVertically: se,
                            grayscale: le,
                            layering: ce,
                            lockedDescription: de,
                            opacity: ue,
                            position: pe,
                            removeBackground: he,
                            removeClip: Ce,
                            removeElements: fe,
                            removeMask: me,
                            saveAsImage: ge,
                            saveAsPDF: ve,
                            selectable: xe,
                            sepia: _e,
                            shadow: we,
                            showInExport: je,
                            textStroke: ke,
                            toBottom: be,
                            toForward: ye,
                            transparency: Le,
                            unlockedDescription: Se,
                            up: Ze
                        },
                        workspace: {
                            addPage: Ne.addPage,
                            duplicatePage: Ne.duplicatePage,
                            moveDown: Ne.moveDown,
                            moveUp: Ne.moveUp,
                            noPages: Ne.noPages,
                            removePage: Ne.removePage
                        }
                    })
                },
                E = function() {
                    var e = (0, r.Z)(u.useState(document.documentElement.clientHeight), 2),
                        n = e[0],
                        t = e[1],
                        o = (0, r.Z)(u.useState(document.documentElement.clientWidth), 2),
                        i = o[0],
                        a = o[1];
                    return u.useEffect((function() {
                        window.addEventListener("resize", (function() {
                            t(document.documentElement.clientHeight), a(document.documentElement.clientWidth)
                        }))
                    }), []), [i, n]
                },
                R = t(68949),
                T = t(57156),
                B = t(82932),
                V = t(19233),
                W = t(37207),
                F = t(25221),
                U = t(56620),
                O = t(71775),
                A = t.n(O),
                q = t(44460),
                G = t(6392),
                z = t(67074),
                Y = t(57937),
                X = t(10708),
                J = t(49491),
                $ = (0, z.ZP)(Y.ZP)((function(e) {
                    e.theme;
                    return {
                        color: "#3880ff",
                        height: 3,
                        padding: "10px 0",
                        "&.disabled": {
                            opacity: .4
                        },
                        "& .MuiSlider-rail": {
                            opacity: 1,
                            backgroundColor: "#E1E5ED",
                            borderRadius: "10px"
                        },
                        "& .MuiSlider-track": {
                            opacity: 1,
                            border: "none"
                        },
                        "& .MuiSlider-thumb": {
                            height: 10,
                            width: 10,
                            backgroundColor: "#fff",
                            boxShadow: "unset ",
                            border: "2px solid var(--blue-color)",
                            "&:focus, &:hover, &.Mui-active": {
                                boxShadow: "unset",
                                "@media (hover: none)": {
                                    boxShadow: "unset"
                                }
                            },
                            "&:before, &:after": {
                                width: 10,
                                height: 10
                            }
                        },
                        "& .MuiSlider-valueLabel": {
                            fontSize: 12,
                            fontWeight: "normal",
                            top: -6,
                            backgroundColor: "unset",
                            "&:before": {
                                display: "none"
                            },
                            "& *": {
                                background: "transparent",
                                color: "#000"
                            }
                        },
                        "& .MuiSlider-mark": {
                            backgroundColor: "#bfbfbf",
                            height: 8,
                            width: 1,
                            "&.MuiSlider-markActive": {
                                opacity: 1,
                                backgroundColor: "currentColor"
                            }
                        }
                    }
                })),
                K = function(e) {
                    var n = e.store,
                        t = e.downloadName,
                        l = void 0 === t ? "Untitled" : t,
                        c = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        d = (0, _.Z)("(max-width: 500px)"),
                        h = (0, p.I0)(),
                        C = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        f = (0, r.Z)((0, X.Z)(), 2),
                        v = f[0],
                        x = (f[1], [{
                            value: c.JPG,
                            svg: "jpg",
                            pro: !0
                        }, {
                            value: c.PNG,
                            svg: "png",
                            pro: !1
                        }, {
                            value: c.transparentPNG,
                            svg: "png",
                            pro: !0
                        }, {
                            value: c.PDF,
                            svg: "pdf",
                            pro: !0
                        }]),
                        w = ["admin", "designer"].includes(C.role);
                    w && x.push({
                        value: c.JSON,
                        svg: "pdf",
                        pro: !1
                    });
                    var k = (0, r.Z)(u.useState("PNG"), 2),
                        b = k[0],
                        y = k[1],
                        L = (0, r.Z)(u.useState(1), 2),
                        S = L[0],
                        Z = L[1],
                        N = function() {
                            var e = (0, o.Z)((function(e) {
                                var t, o, r, a, s, d, u;
                                return (0, i.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            switch ((0, g.Z)("download_template"), e) {
                                                case c.JPG:
                                                    return [3, 1];
                                                case c.PNG:
                                                    return [3, 3];
                                                case c.transparentPNG:
                                                    return [3, 5];
                                                case c.PDF:
                                                    return [3, 7];
                                                case c.JSON:
                                                    return [3, 9]
                                            }
                                            return [3, 10];
                                        case 1:
                                            return [4, n.saveAsImage({
                                                fileName: "".concat(l, ".jpg"),
                                                mimeType: "image/jpg",
                                                pixelRatio: S,
                                                pageId: null === (t = n.activePage) || void 0 === t ? void 0 : t.id
                                            })];
                                        case 2:
                                        case 11:
                                            return i.sent(), (0, g.Z)("download_template_jpg"), [3, 12];
                                        case 3:
                                            return [4, n.saveAsImage({
                                                fileName: l,
                                                mimeType: "image/png",
                                                pixelRatio: S,
                                                pageId: null === (o = n.activePage) || void 0 === o ? void 0 : o.id
                                            })];
                                        case 4:
                                            return i.sent(), (0, g.Z)("download_template_png"), [3, 12];
                                        case 5:
                                            return [4, n.saveAsImage({
                                                fileName: l,
                                                ignoreBackground: !0,
                                                mimeType: "image/png",
                                                pixelRatio: S,
                                                pageId: null === (r = n.activePage) || void 0 === r ? void 0 : r.id
                                            })];
                                        case 6:
                                            return i.sent(), (0, g.Z)("download_template_transparent_png"), [3, 12];
                                        case 7:
                                            return [4, n.saveAsPDF({
                                                fileName: l,
                                                dpi: n.dpi / S,
                                                pixelRatio: 2 * S,
                                                pageId: null === (a = n.activePage) || void 0 === a ? void 0 : a.id
                                            })];
                                        case 8:
                                            return i.sent(), (0, g.Z)("download_template_pdf"), [3, 12];
                                        case 9:
                                            return w ? (s = n.toJSON(), (d = document.createElement("a")).href = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], {
                                                type: "text/plain"
                                            })), d.setAttribute("download", "".concat(l, ".json")), document.body.appendChild(d), d.click(), document.body.removeChild(d), (0, g.Z)("download_template_json"), [3, 12]) : [2];
                                        case 10:
                                            return [4, n.saveAsImage({
                                                fileName: "".concat(l, ".jpg"),
                                                mimeType: "image/jpg",
                                                pixelRatio: S,
                                                pageId: null === (u = n.activePage) || void 0 === u ? void 0 : u.id
                                            })];
                                        case 12:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsxs)("div", {
                        className: (0, s.Z)(A().root),
                        children: [(0, a.jsx)("span", {
                            className: A().text,
                            children: c.fileType
                        }), (0, a.jsx)("div", {
                            className: A().select,
                            children: (0, a.jsx)(q.Z, {
                                value: b,
                                elements: x,
                                onSelect: function(e) {
                                    y(e.value), Z(1)
                                },
                                downloadDropdown: !0
                            })
                        }), "JSON" !== b && (0, a.jsxs)("div", {
                            className: A().slider,
                            children: [(0, a.jsxs)("div", {
                                className: A().sizeRow,
                                children: [(0, a.jsxs)("span", {
                                    className: (0, s.Z)("pro" !== C.plan && A().disabled, "pro" !== C.plan && "unselectable"),
                                    children: [c.size, " x ", S, " (", "PDF" === b && (0, a.jsxs)(a.Fragment, {
                                        children: [G.pxToUnitRounded({
                                            px: n.width,
                                            dpi: n.dpi / S,
                                            precious: 0,
                                            unit: "mm"
                                        }), "x", G.pxToUnitRounded({
                                            px: n.height,
                                            dpi: n.dpi / S,
                                            precious: 0,
                                            unit: "mm"
                                        }), " ", c.mm]
                                    }), "PDF" !== b && (0, a.jsxs)(a.Fragment, {
                                        children: [Math.round(n.width * S), "x", Math.round(n.height * S), " ", c.px]
                                    }), ")"]
                                }), (0, a.jsx)(J.Z, {})]
                            }), (0, a.jsx)($, {
                                value: S,
                                onChange: function(e, n) {
                                    if (null === C.plan) return h((0, m.aN)("logIn")), void h((0, m.Ps)(null));
                                    "free" !== C.plan ? Z(Number(n)) : h((0, m.hr)(!0))
                                },
                                defaultValue: S,
                                step: .2,
                                min: .2,
                                max: 3,
                                className: (0, s.Z)("pro" !== C.plan && "disabled")
                            })]
                        }), (0, a.jsx)("div", {
                            className: A().downloadBtnPopper,
                            children: (0, a.jsx)(V.Z, {
                                onClick: function() {
                                    ! function(e) {
                                        if (null === C.email) return h((0, m.Ps)(null)), void h((0, m.aN)("logIn"));
                                        v.user.accessToken, d || h((0, m.zw)(!0)), h((0, m.iI)(!0)), N(e).then((function() {
                                            return h((0, m.iI)(!1))
                                        }))
                                    }(b)
                                },
                                variant: "yellow",
                                children: c.download
                            })
                        })]
                    })
                },
                Q = function(e) {
                    var n = e.store,
                        t = e.downloadTooltip,
                        o = e.downloadTooltipRef,
                        r = e.isOpenDrawer,
                        i = void 0 !== r && r,
                        s = e.setIsOpenDrawer,
                        l = void 0 === s ? function() {
                            return !1
                        } : s,
                        c = e.mobile,
                        d = void 0 !== c && c,
                        u = e.downloadName,
                        p = void 0 === u ? "Untitled" : u;
                    return d ? (0, a.jsx)(F.ZP, {
                        anchor: "bottom",
                        ref: o,
                        onClose: function() {
                            return l(!1)
                        },
                        open: !!i,
                        sx: {
                            "& .MuiDrawer-paper": {
                                bgcolor: "transparent",
                                borderRadius: "16px 16px 0 0"
                            }
                        },
                        children: (0, a.jsx)(K, {
                            store: n,
                            downloadName: p
                        })
                    }) : (0, a.jsx)(U.Z, {
                        ref: o,
                        id: "popper",
                        open: !!t,
                        anchorEl: t,
                        children: (0, a.jsx)(K, {
                            store: n,
                            downloadName: p
                        })
                    })
                },
                ee = t(33746),
                ne = t(17013),
                te = t.n(ne),
                oe = t(24255),
                re = t.n(oe),
                ie = function(e) {
                    var n = e.children,
                        t = e.onClick,
                        o = e.onClickRedirect,
                        r = e.disabled;
                    return o && (t = function() {
                        c().push(o)
                    }), (0, a.jsx)("button", {
                        className: (0, s.Z)(re().root, r && re().disabled),
                        onClick: t,
                        children: n
                    })
                },
                ae = function(e) {
                    var n = e.placement,
                        t = e.anchorEl,
                        o = e.offsetX,
                        i = void 0 === o ? 0 : o,
                        l = e.offsetY,
                        c = void 0 === l ? 0 : l,
                        d = e.firstStage,
                        h = (0, (0, j.$G)("design").t)("hints", {
                            returnObjects: !0
                        }),
                        C = (0, r.Z)((0, X.Z)(), 2),
                        f = C[0],
                        g = C[1],
                        v = (0, p.I0)(),
                        x = (0, p.v9)((function(e) {
                            return e.designReducer.hintStage
                        })),
                        _ = (0, r.Z)(u.useState(!1), 2),
                        w = _[0],
                        k = _[1],
                        b = (0, r.Z)(u.useState(!1), 2),
                        y = b[0],
                        L = b[1],
                        S = function() {
                            k(!0), setTimeout((function() {
                                k(!1), v((0, m.bj)(5)), g("hintsPassed", !0, {
                                    path: "/"
                                })
                            }), 390)
                        };
                    return f.hintsPassed || f.user ? (0, a.jsx)("div", {}) : (0, a.jsx)(U.Z, {
                        id: "popper",
                        open: !!t,
                        anchorEl: t.current,
                        placement: n,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.Z)(te().root, w && te().isClosing, y && te().closed, "right-start" == n ? te().animationX : te().animationY),
                            style: {
                                top: "".concat(c, "px"),
                                left: "".concat(i, "px")
                            },
                            children: [(0, a.jsx)("div", {
                                className: (0, s.Z)(te().triangle, "right-start" == n ? te().left : te().top)
                            }), (0, a.jsxs)("div", {
                                className: te().header,
                                children: [(0, a.jsxs)("div", {
                                    className: te().step,
                                    children: [h.step, " ", x, " ", h.of, " ", 5 - d]
                                }), (0, a.jsx)("div", {
                                    className: te().btnClose,
                                    onClick: S,
                                    children: (0, a.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                            d: "M4.0022 3.74512L12.1622 11.9051M4.0022 11.9051L12.1622 3.74512",
                                            stroke: "#36373C",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round"
                                        })
                                    })
                                })]
                            }), x == 1 - d + 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: te().title,
                                    children: h.step1.title
                                }), (0, a.jsx)("div", {
                                    className: te().text,
                                    children: h.step1.text
                                })]
                            }), x == 2 - d + 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: te().title,
                                    children: h.step2.title
                                }), (0, a.jsx)("div", {
                                    className: te().text,
                                    children: h.step2.text
                                })]
                            }), x == 3 - d + 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: te().title,
                                    children: h.step3.title
                                }), (0, a.jsx)("div", {
                                    className: te().text,
                                    children: h.step3.text
                                })]
                            }), x == 4 - d + 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: te().title,
                                    children: h.step4.title
                                }), (0, a.jsx)("div", {
                                    className: te().text,
                                    children: h.step4.text
                                })]
                            }), (0, a.jsxs)("div", {
                                className: te().btnWrapper,
                                children: [x !== 4 - d + 1 && (0, a.jsx)("div", {
                                    className: te().btnText,
                                    children: (0, a.jsx)(ie, {
                                        onClick: S,
                                        children: h.skip
                                    })
                                }), x == 4 - d + 1 ? (0, a.jsx)("button", {
                                    onClick: function() {
                                        k(!0), setTimeout((function() {
                                            k(!1), L(!0)
                                        }), 380), setTimeout((function() {
                                            L(!1), g("hintsPassed", !0, {
                                                path: "/"
                                            })
                                        }), 600)
                                    },
                                    children: h.done
                                }) : (0, a.jsx)("button", {
                                    onClick: function() {
                                        k(!0), setTimeout((function() {
                                            k(!1), L(!0)
                                        }), 380), setTimeout((function() {
                                            L(!1), v((0, m.bj)(x + 1))
                                        }), 600)
                                    },
                                    children: h.next
                                })]
                            })]
                        })
                    })
                },
                se = t(26042),
                le = t(69396),
                ce = t(13507),
                de = t(46670),
                ue = (t(30933), t(9607)),
                pe = t.n(ue),
                he = t(60139),
                Ce = t.n(he),
                fe = t(30719),
                me = t(71911),
                ge = t(9246),
                ve = function(e) {
                    return e()
                },
                xe = function(e) {
                    var n = Math.floor(9999 * Math.random()),
                        t = (0, r.Z)(e.split("?"), 2),
                        o = t[0],
                        i = t[1];
                    return void 0 === i ? [o, "nocache=".concat(n)].join("?") : [o, "nocache=".concat(n, "&").concat(i)].join("?")
                },
                _e = function(e) {
                    var n = e.store,
                        t = e.src,
                        s = e.preview,
                        l = e.uuid,
                        c = e.status,
                        d = void 0 === c ? "free" : c,
                        C = e.loadWrapper,
                        f = void 0 === C ? ve : C,
                        g = e.width,
                        v = e.height,
                        _ = ((0, r.Z)((0, X.Z)(), 1)[0], (0, p.I0)()),
                        w = (0, r.Z)(E(), 1)[0],
                        j = (JSON.stringify({
                            format: "svg"
                        }), (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        }))),
                        k = u.useRef(null),
                        y = l ? "".concat(h._n, "/iconfinder/v4/icons/").concat(l, "/formats/svg/0/download") : void 0,
                        L = function() {
                            return t.startsWith("arrow")
                        },
                        Z = function(e, t, o) {
                            var r = 400,
                                i = [(n.width - r) / 2, (n.height - 2) / 2],
                                a = [t || i[0], o || i[1]],
                                s = a[0],
                                l = a[1];
                            switch (Number(e)) {
                                case 1:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black"
                                    });
                                    break;
                                case 2:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [5, 1]
                                    });
                                    break;
                                case 3:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [1, 1]
                                    });
                                    break;
                                case 4:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "arrow"
                                    });
                                    break;
                                case 5:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "triangle"
                                    });
                                    break;
                                case 6:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [1, 1],
                                        endHead: "triangle"
                                    });
                                    break;
                                case 7:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "arrow",
                                        startHead: "arrow"
                                    });
                                    break;
                                case 8:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [1, 1],
                                        endHead: "arrow",
                                        startHead: "arrow"
                                    });
                                    break;
                                case 9:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "arrow",
                                        startHead: "bar"
                                    });
                                    break;
                                case 10:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [1, 1],
                                        endHead: "triangle",
                                        startHead: "bar"
                                    });
                                    break;
                                case 11:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [5, 1],
                                        endHead: "triangle",
                                        startHead: "circle"
                                    });
                                    break;
                                case 12:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "bar",
                                        startHead: "bar"
                                    });
                                    break;
                                case 13:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        dash: [1, 1],
                                        endHead: "bar",
                                        startHead: "bar"
                                    });
                                    break;
                                case 14:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "square",
                                        startHead: "square"
                                    });
                                    break;
                                case 15:
                                    n.activePage.addElement({
                                        type: "line",
                                        x: s,
                                        y: l,
                                        width: r,
                                        height: 2,
                                        color: "black",
                                        endHead: "circle",
                                        startHead: "circle"
                                    })
                            }
                        };
                    return (0, a.jsxs)("div", {
                        className: x().gridImg,
                        onClick: (0, o.Z)((function() {
                            var e, r, a, l;
                            return (0, i.__generator)(this, (function(c) {
                                return e = function() {
                                    w <= 500 && n.openSidePanel("")
                                }, L() ? (Z(Number(t.split("-")[1])), e(), [2]) : (r = (y || t).includes("svg") ? "svg" : (y || t).includes(".json") ? "json" : "image", a = function() {
                                    h.V0.get(y || t).then((function(e) {
                                        n.loadJSON(e.data)
                                    })).catch((function(e) {
                                        console.log(e)
                                    })).finally((function() {}))
                                }, l = function() {
                                    var e = (0, o.Z)((function() {
                                        var e, o, a, s, l, c, d;
                                        return (0, i.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return e = xe(y || t), [4, (0, ge.getImageSize)(y || t)];
                                                case 1:
                                                    return o = i.sent(), a = o.width, s = o.height, l = a / s, c = .2 * n.width, d = c / l, n.activePage.addElement({
                                                        type: r,
                                                        src: e,
                                                        x: n.width / 2 - c / 2,
                                                        y: n.height / 2 - d / 2,
                                                        width: c,
                                                        height: d,
                                                        keepRatio: !1
                                                    }), [2]
                                            }
                                        }))
                                    }));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(), f((function() {
                                    if ("json" === r) {
                                        if ("free" === d) return a(), void e();
                                        j.email ? "free" === j.plan ? (_((0, m.qP)(s)), _((0, m.jB)(!0))) : a() : _((0, m.Ps)(null))
                                    }
                                    if ("svg" === r || "image" === r) {
                                        if ("free" === d) return l(), void e();
                                        j.email ? "free" === j.plan ? (_((0, m.jY)(s)), _((0, m.Vk)(!0))) : l() : _((0, m.Ps)(null))
                                    }
                                    e()
                                })), [2])
                            }))
                        })),
                        children: [(0, a.jsx)("div", {
                            className: "itemSkeleton",
                            ref: k
                        }), (0, a.jsx)(b(), {
                            src: s || t,
                            draggable: !0,
                            width: g,
                            height: v,
                            layout: g && v ? "intrinsic" : "fill",
                            objectFit: "contain",
                            unoptimized: !0,
                            onLoadingComplete: function() {
                                var e;
                                return null === (e = k.current) || void 0 === e ? void 0 : e.remove()
                            },
                            onDragStart: function() {
                                var e = (0, o.Z)((function(e) {
                                    var o, r, a, s, l, c, d, u, p;
                                    return (0, i.__generator)(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return e.dataTransfer.effectAllowed = "move", (o = document.createElement("img")).src = e.currentTarget.src, o.style.width = "73px", o.style.height = "73px", e.currentTarget.style.opacity = "0", document.body.appendChild(o), e.dataTransfer.setDragImage(o, 36.5, 36.5), L() ? ((0, S._$)((function(e) {
                                                    Z(Number(t.split("-")[1]), e.x - 200, e.y)
                                                })), o.remove(), [2]) : [4, (0, ge.getImageSize)(y || t)];
                                            case 1:
                                                return r = i.sent(), a = r.width, s = r.height, l = a / s, c = .2 * n.width, d = c / l, u = xe(y || t), "json" === (p = (y || t).includes("svg") ? "svg" : (y || t).includes(".json") ? "json" : "image") ? (n.loadJSON(JSON.parse(u)), [2]) : ((0, S._$)((function(e, t) {
                                                    n.activePage.addElement({
                                                        type: p,
                                                        src: u,
                                                        x: e.x - 30,
                                                        y: e.y - 30,
                                                        width: c,
                                                        height: d,
                                                        keepRatio: !1
                                                    })
                                                })), o.remove(), [2])
                                        }
                                    }))
                                }));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            onDragEnd: function() {
                                var e = (0, o.Z)((function(e) {
                                    return (0, i.__generator)(this, (function(n) {
                                        return e.currentTarget.style.opacity = "1", (0, S._$)(null), [2]
                                    }))
                                }));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            alt: "element item"
                        }), "pro" === d && (0, a.jsx)("div", {
                            className: x().proBadge,
                            children: (0, a.jsx)("svg", {
                                width: "17",
                                height: "17",
                                viewBox: "7 7 25 30",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M9.40499 18.445C9.24069 18.0616 9.59037 17.6574 9.9934 17.7649L16.0952 19.3921C16.3294 19.4545 16.5747 19.34 16.6772 19.1204L19.5469 12.9709C19.7265 12.5862 20.2735 12.5862 20.4531 12.9709L23.3228 19.1204C23.4253 19.34 23.6706 19.4545 23.9048 19.3921L30.0066 17.7649C30.4096 17.6574 30.7593 18.0616 30.595 18.445L26.6299 27.697C26.5511 27.8808 26.3703 28 26.1703 28H13.8297C13.6297 28 13.4489 27.8808 13.3701 27.697L9.40499 18.445Z",
                                    fill: "#FFBE0B"
                                })
                            })
                        })]
                    })
                },
                we = [1, 2, 3, 4, 5, 6, 7, 8],
                je = function(e) {
                    var n = e.store,
                        t = e.category,
                        o = (0, (0, j.$G)("common").t)("categories", {
                            returnObjects: !0
                        }).find((function(e) {
                            return e.value == t.value
                        })),
                        i = (0, (0, j.$G)("design").t)("content.polotno.sidePanel", {
                            returnObjects: !0
                        }),
                        l = (0, p.I0)(),
                        c = (0, r.Z)(u.useState([]), 2),
                        d = c[0],
                        C = c[1],
                        f = (0, r.Z)(u.useState(!0), 2),
                        g = f[0],
                        v = f[1],
                        x = we.map((function(e) {
                            return (0, a.jsx)(fe.o5, {
                                className: Ce().slide,
                                children: (0, a.jsx)("div", {
                                    className: Ce().skeleton
                                })
                            }, e)
                        })),
                        _ = d.map((function(e, t) {
                            "".concat(e.src);
                            return (0, a.jsx)(fe.o5, {
                                className: Ce().slide,
                                children: (0, a.jsx)(_e, {
                                    store: n,
                                    src: e.data,
                                    preview: e.preview[0],
                                    status: e.status
                                })
                            }, t)
                        }));
                    return u.useEffect((function() {
                        h.V0.get("/elements?categories=".concat(t._id, "&amount=10&offset=1")).then((function(e) {
                            C(e.data.elements)
                        })).catch((function(e) {
                            console.log(e.response)
                        })).finally((function() {
                            v(!1)
                        }))
                    }), []), (0, a.jsxs)("div", {
                        className: Ce().root,
                        children: [(0, a.jsxs)("div", {
                            className: Ce().sliderHeader,
                            children: [g ? (0, a.jsx)("div", {
                                className: Ce().textSkeleton,
                                style: {
                                    width: "125px"
                                }
                            }) : (0, a.jsx)("div", {
                                children: o.text
                            }), (0, a.jsx)("div", {
                                onClick: function() {
                                    l((0, m.RV)(t))
                                },
                                children: g ? (0, a.jsx)("div", {
                                    className: Ce().textSkeleton,
                                    style: {
                                        width: "68px"
                                    }
                                }) : i.showMore
                            })]
                        }), (0, a.jsxs)(fe.tq, {
                            spaceBetween: 15,
                            onInit: function(e) {
                                window.innerWidth <= 500 && (e.allowTouchMove = !0), e.init()
                            },
                            slidesPerView: "auto",
                            modules: [me.W_, me.Rv, me.Gk],
                            freeMode: {
                                enabled: !0,
                                momentumBounce: !1
                            },
                            init: !1,
                            navigation: {
                                prevEl: ".prevSlide".concat(t.value),
                                nextEl: ".nextSlide".concat(t.value),
                                disabledClass: "disabled",
                                enabled: d.length > 0
                            },
                            allowTouchMove: !1,
                            mousewheel: {
                                forceToAxis: !0
                            },
                            direction: "horizontal",
                            children: [d.length ? _ : x, (0, a.jsx)(fe.o5, {
                                className: Ce().lastSlide,
                                children: (0, a.jsx)("button", {
                                    onClick: function() {
                                        l((0, m.RV)(t))
                                    },
                                    children: (0, a.jsx)("svg", {
                                        viewBox: "0 0 6 10",
                                        children: (0, a.jsx)("path", {
                                            d: "M1.45222 0.644603L5.40234 4.59473L1.39462 8.60245",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: (0, s.Z)(Ce().prevSlide, "prevSlide".concat(t.value, " prevSlideUnstyled disabled")),
                            children: (0, a.jsx)("svg", {
                                viewBox: "0 0 6 10",
                                children: (0, a.jsx)("path", {
                                    d: "M1.45222 0.644603L5.40234 4.59473L1.39462 8.60245",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: (0, s.Z)(Ce().nextSlide, "nextSlide".concat(t.value, " nextSlideUnstyled disabled")),
                            children: (0, a.jsx)("svg", {
                                viewBox: "0 0 6 10",
                                children: (0, a.jsx)("path", {
                                    d: "M1.45222 0.644603L5.40234 4.59473L1.39462 8.60245",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })]
                    })
                },
                ke = t(246),
                be = t.n(ke),
                ye = t(40827),
                Le = function(e) {
                    var n = e.store,
                        t = e.query,
                        o = (0, r.Z)(u.useState([]), 2),
                        i = o[0],
                        l = o[1],
                        c = (0, r.Z)(u.useState(!1), 2),
                        d = c[0],
                        p = c[1],
                        C = (0, r.Z)(u.useState(!1), 2),
                        f = C[0],
                        m = C[1],
                        g = u.useRef(null);
                    u.useEffect((function() {}), []), u.useEffect((function() {
                        p(!1), v(!0)
                    }), [t]);
                    var v = function(e) {
                        !d && t && (p(!0), h.V0.get("/iconfinder/v4/icons/search?query=".concat(t, "&count=").concat(160, "&vector=1&premium=0")).then((function(n) {
                            var t = n.data.icons;
                            l(e ? t : i.concat(t)), m(!0)
                        })).catch((function(e) {
                            console.log(e)
                        })).finally((function() {
                            p(!1)
                        })))
                    };
                    return (0, a.jsx)("div", {
                        className: pe().infiniteScrollWrapper,
                        ref: g,
                        children: (0, a.jsx)(be(), {
                            pageStart: 0,
                            loadMore: function() {
                                v(!1)
                            },
                            hasMore: !f,
                            loader: (0, a.jsx)("div", {
                                className: pe().loader,
                                children: "Loading ..."
                            }, 0),
                            useWindow: !1,
                            getScrollParent: function() {
                                return g.current
                            },
                            className: pe().grid,
                            children: (0, a.jsx)(ye.Z, {
                                breakpointCols: {
                                    default: 3
                                },
                                className: "my-masonry-grid ".concat(pe().masonryGrid),
                                columnClassName: "my-masonry-grid_column ".concat(pe().masonryGridColumn),
                                children: i.map((function(e, t) {
                                    var o;
                                    return (0, a.jsx)("div", {
                                        className: (0, s.Z)(pe().gridItem, pe().element),
                                        children: (0, a.jsx)("div", {
                                            className: pe().content,
                                            children: (0, a.jsx)(_e, {
                                                store: n,
                                                src: null === (o = e.raster_sizes[6]) || void 0 === o ? void 0 : o.formats[0].preview_url,
                                                uuid: e.icon_id
                                            })
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                Se = function(e) {
                    var n = e.store,
                        t = e.columns,
                        o = void 0 === t ? 3 : t,
                        r = e.gridElements,
                        i = e.fetchData,
                        l = e.isReachingEnd,
                        c = e.mode,
                        d = e.loadWrapper,
                        p = u.useRef(null);
                    return (0, a.jsxs)("div", {
                        className: (0, s.Z)(pe().infiniteScrollWrapper, "templates" == c && pe().wrapperForTemplate),
                        ref: p,
                        children: [0 == r.length && (0, a.jsx)("div", {
                            className: pe().grid,
                            children: (0, a.jsx)(ye.Z, {
                                breakpointCols: {
                                    default: o
                                },
                                className: "my-masonry-grid ".concat(pe().masonryGrid),
                                columnClassName: "my-masonry-grid_column ".concat(pe().masonryGridColumn),
                                children: new Array("elements" === c ? 24 : 13).fill(null).map((function(e, n) {
                                    return (0, a.jsx)("div", {
                                        className: "skeleton"
                                    }, n)
                                }))
                            })
                        }), (0, a.jsx)(be(), {
                            pageStart: 0,
                            loadMore: function() {
                                i(!1)
                            },
                            hasMore: !l,
                            useWindow: !1,
                            getScrollParent: function() {
                                return p.current
                            },
                            className: pe().grid,
                            children: (0, a.jsx)(ye.Z, {
                                breakpointCols: {
                                    default: o
                                },
                                className: "my-masonry-grid ".concat(pe().masonryGrid),
                                columnClassName: "my-masonry-grid_column ".concat(pe().masonryGridColumn),
                                children: r.map((function(e, t) {
                                    return (0, a.jsx)("div", {
                                        className: (0, s.Z)(pe().gridItem, "templates" == c && pe().template, "elements" == c && pe().element),
                                        children: (0, a.jsx)("div", {
                                            className: pe().content,
                                            children: (0, a.jsx)(_e, {
                                                store: n,
                                                src: e.data,
                                                preview: e.preview[0],
                                                status: e.status,
                                                loadWrapper: d,
                                                width: e.width,
                                                height: e.height
                                            })
                                        })
                                    }, t)
                                }))
                            })
                        })]
                    })
                };
            var Ze = function() {
                var e = (0, p.I0)(),
                    n = (0, (0, j.$G)("common").t)("categories", {
                        returnObjects: !0
                    }),
                    t = (0, u.useRef)(null),
                    o = (0, p.v9)((function(e) {
                        return e.designReducer.elementsPanelCategory
                    })),
                    r = n.find((function(e) {
                        return e.value == o.value
                    }));
                return (0, a.jsx)("div", {
                    className: pe().title,
                    ref: t,
                    children: (0, a.jsxs)("div", {
                        className: pe().itemContainer,
                        onClick: function() {
                            e((0, m.RV)(""))
                        },
                        children: [(0, a.jsx)("div", {
                            className: pe().svgContainer,
                            children: (0, a.jsx)("svg", {
                                viewBox: "0 0 6 10",
                                children: (0, a.jsx)("path", {
                                    d: "M1.45222 0.644603L5.40234 4.59473L1.39462 8.60245",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        }), (0, a.jsx)("span", {
                            children: null === r || void 0 === r ? void 0 : r.text
                        })]
                    })
                })
            };
            var Ne = function(e) {
                    var n = e.query,
                        t = e.setQuery,
                        o = (0, u.useRef)(null),
                        r = (0, u.useRef)(null),
                        i = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        });
                    return (0, a.jsx)("div", {
                        className: pe().childContainer,
                        ref: r,
                        children: (0, a.jsxs)("div", {
                            className: pe().searchInputWrapper,
                            onClick: function() {
                                o.current && o.current.focus()
                            },
                            children: [(0, a.jsx)("div", {
                                className: pe().img,
                                children: (0, a.jsx)("div", {})
                            }), (0, a.jsx)("input", {
                                className: pe().searchInput,
                                placeholder: i.polotno.sidePanel.searchPlaceholder,
                                value: n,
                                onChange: function(e) {
                                    t(e.target.value)
                                },
                                ref: o
                            }), (0, a.jsx)("div", {
                                className: pe().searchInputBorder
                            })]
                        })
                    })
                },
                Pe = [{
                    value: "Shapes",
                    _id: "62b5da7b6eaa3bf06a0f76eb"
                }, {
                    value: "Stars",
                    _id: "62bd873dcb30c110ccac4fff"
                }, {
                    value: "Abstract-Forms",
                    _id: "64bb74012d5237ddac41e86c"
                }, {
                    value: "Arrows",
                    _id: "64b241a24ff29748593d8138"
                }, {
                    value: "Photo Frames",
                    _id: "63a675c6600dbb67896fdb75"
                }, {
                    value: "Lines",
                    _id: "62baccf5a2b3912ba88aead7"
                }, {
                    value: "Print-and-Paper",
                    _id: "637f640cfdc5fdb9e2e6590d"
                }, {
                    value: "Line-Shapes",
                    _id: "62c14a912bf5e6650f4b9161"
                }, {
                    value: "Stickers",
                    _id: "62c4710f80ecee20302a35fc"
                }, {
                    value: "Letterings",
                    _id: "62c4710380ecee20302a35f0"
                }, {
                    value: "Brushes",
                    _id: "62c470fe80ecee20302a35e8"
                }, {
                    value: "Labels",
                    _id: "62c4710c80ecee20302a35f8"
                }, {
                    value: "Speech-bubble",
                    _id: "62c4710980ecee20302a35f4"
                }, {
                    value: "Boho",
                    _id: "62c4711280ecee20302a3600"
                }, {
                    value: "Gradients",
                    _id: "62c470f580ecee20302a35dc"
                }, {
                    value: "Buttons",
                    _id: "62c470f880ecee20302a35e0"
                }, {
                    value: "Botanicals",
                    _id: "62c470fc80ecee20302a35e4"
                }, {
                    value: "People",
                    _id: "62c4710180ecee20302a35ec"
                }, {
                    value: "Line-Drawings",
                    _id: "62c4711580ecee20302a3604"
                }, {
                    value: "Shadows",
                    _id: "62c470f080ecee20302a35d8"
                }, {
                    value: "Animals",
                    _id: "62c4711b80ecee20302a360c"
                }, {
                    value: "Patterns",
                    _id: "62c4711d80ecee20302a3610"
                }, {
                    value: "Web-Elements",
                    _id: "62c4711880ecee20302a3608"
                }, {
                    value: "Frames",
                    _id: "62c2d034fcb5d5d746c5801e"
                }, {
                    value: "Winter",
                    _id: "6394880a412d0e40f0515c58"
                }],
                Me = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = (0, p.I0)(),
                        o = (0, p.v9)((function(e) {
                            return e.designReducer.elementsPanelCategory
                        })),
                        i = (0, r.Z)(u.useState([]), 2),
                        s = i[0],
                        l = i[1],
                        c = (0, r.Z)(u.useState(!1), 2),
                        d = c[0],
                        C = c[1],
                        f = (0, r.Z)(u.useState(!1), 2),
                        g = f[0],
                        v = f[1],
                        x = u.useRef(),
                        _ = (0, r.Z)(u.useState(""), 2),
                        w = _[0],
                        j = _[1],
                        k = (0, r.Z)(u.useState(w), 2),
                        b = k[0],
                        y = k[1],
                        L = !!w;
                    u.useEffect((function() {
                        return x.current = setTimeout((function() {
                                y(w)
                            }), 500),
                            function() {
                                clearTimeout(x.current)
                            }
                    }), [w]), u.useEffect((function() {
                        return function() {
                            t((0, m.RV)(""))
                        }
                    }), []), u.useEffect((function() {
                        o || (l([]), C(!1), v(!1))
                    }), [o]);
                    return (0, a.jsxs)("div", {
                        className: pe().root,
                        children: [!o && (0, a.jsx)(Ne, {
                            query: w,
                            setQuery: j
                        }), L && (0, a.jsx)(Le, {
                            store: n,
                            query: b
                        }), !L && !o && (0, a.jsx)("div", {
                            style: {
                                padding: "0 14px",
                                overflowY: "auto"
                            },
                            children: Pe.map((function(e, t) {
                                return (0, a.jsx)(je, {
                                    store: n,
                                    category: e
                                }, t)
                            }))
                        }), !L && o && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(Ze, {}), (0, a.jsx)(Se, {
                                store: n,
                                gridElements: s,
                                columns: 3,
                                fetchData: function(e) {
                                    if (!d) {
                                        C(!0);
                                        var n = e ? 1 : s.length / 50 + 1;
                                        h.V0.get("/elements?categories=".concat(o._id, "&amount=").concat(50, "&offset=").concat(n)).then((function(n) {
                                            var t = n.data,
                                                o = t.elements,
                                                r = t.page,
                                                i = t.pages;
                                            l(e ? o : s.concat(o)), r === i && v(!0)
                                        })).catch((function(e) {
                                            console.log(e.response)
                                        })).finally((function() {
                                            C(!1)
                                        }))
                                    }
                                },
                                isReachingEnd: g,
                                mode: "elements"
                            })]
                        })]
                    })
                })),
                He = t(9669),
                De = t.n(He),
                Ie = t(30120),
                Ee = t(10096),
                Re = t(22943),
                Te = t.n(Re),
                Be = t(14547),
                Ve = t(79271),
                We = function(e) {
                    var n = e.open,
                        t = e.onClose,
                        o = e.onConfirm,
                        i = (0, r.Z)(E(), 1)[0],
                        l = (0, j.$G)("design", {
                            keyPrefix: "replaceTemplate"
                        }).t,
                        c = i < 500,
                        d = (0, a.jsxs)("div", {
                            className: Te().content,
                            children: [(0, a.jsx)("h2", {
                                children: l("title")
                            }), (0, a.jsx)("p", {
                                children: l("description")
                            }), (0, a.jsxs)("div", {
                                className: Te().actions,
                                children: [(0, a.jsx)(Be.Z, {
                                    onClick: t,
                                    children: l("cancel")
                                }), (0, a.jsx)(Ve.Z, {
                                    onClick: o,
                                    children: l("confirm")
                                })]
                            })]
                        });
                    return c ? (0, a.jsx)(F.ZP, {
                        anchor: "bottom",
                        onClose: t,
                        open: n,
                        sx: {
                            "& .MuiDrawer-paper": {
                                bgcolor: "transparent",
                                borderRadius: "16px 16px 0 0"
                            }
                        },
                        children: (0, a.jsx)(Ie.Z, {
                            className: Te().root,
                            children: d
                        })
                    }) : (0, a.jsx)(Ee.Z, {
                        open: n,
                        onClose: t,
                        closeAfterTransition: !0,
                        children: (0, a.jsx)(Ie.Z, {
                            className: (0, s.Z)("modal", Te().modalRoot),
                            children: d
                        })
                    })
                },
                Fe = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = (0, j.$G)("design").t,
                        s = t("content", {
                            returnObjects: !0
                        }),
                        c = (0, p.v9)((function(e) {
                            return e.designReducer.numberOfChanges
                        })),
                        d = (0, p.I0)(),
                        C = (0, l.useRouter)(),
                        f = (0, r.Z)((0, X.Z)(), 1)[0],
                        g = u.useRef(),
                        v = (0, r.Z)(u.useState(""), 2),
                        x = v[0],
                        _ = v[1],
                        w = (0, r.Z)(u.useState(!1), 2),
                        k = w[0],
                        b = w[1],
                        y = (0, r.Z)(u.useState(x), 2),
                        L = y[0],
                        S = y[1],
                        Z = u.useRef(!1),
                        N = (0, r.Z)(u.useState([]), 2),
                        P = N[0],
                        M = N[1],
                        H = u.useRef(null),
                        D = (0, r.Z)(u.useState(!1), 2),
                        I = D[0],
                        E = D[1],
                        R = (0, r.Z)(u.useState(!1), 2),
                        T = R[0],
                        B = R[1],
                        V = (0, r.Z)(u.useState(!0), 2),
                        W = V[0],
                        F = V[1],
                        U = (0, r.Z)(u.useState(!1), 2),
                        O = U[0],
                        A = U[1],
                        q = (0, r.Z)(u.useState(!1), 2),
                        G = q[0],
                        z = q[1],
                        Y = u.useRef(null),
                        J = C.query.category || C.query.category_id || "";
                    u.useEffect((function() {
                        return g.current = setTimeout((function() {
                                S(x)
                            }), 500),
                            function() {
                                clearTimeout(g.current)
                            }
                    }), [x]);
                    var $ = function() {
                        var e = (0, o.Z)((function(e, n) {
                            var t, o, r, a, s, l, c, d, u, p, C, m;
                            return (0, i.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return I ? [2] : (E(!0), t = e ? 1 : Math.ceil(P.length / 50) + 1, null !== H.current ? [3, 2] : [4, De().get("".concat(h._n, "/templates?categories=").concat(J, "&query=").concat(n, "&amount=1&page=1&language=").concat(f.locale)).then((function(e) {
                                            H.current = e.data.totalItems
                                        })).catch((function(e) {
                                            console.log(e)
                                        }))]);
                                    case 1:
                                        i.sent(), i.label = 2;
                                    case 2:
                                        if (t <= Math.ceil(H.current / 50) ? Z.current = !1 : Z.current = !0, !Z.current) return [3, 7];
                                        o = Math.ceil(H.current / 50), i.label = 3;
                                    case 3:
                                        return i.trys.push([3, 5, , 6]), [4, h.V0.get("/templates?categories=".concat(J, "&query=").concat(n, "&amount=").concat(50, "&page=").concat(t - o, "&language[ne]=").concat(f.locale))];
                                    case 4:
                                        return r = i.sent(), a = r.data, s = a.templates, l = a.page, c = a.pages, M(e ? s : P.concat(s)), l >= c && B(!0), [3, 6];
                                    case 5:
                                        return d = i.sent(), console.log(d.response), [3, 6];
                                    case 6:
                                        return [3, 10];
                                    case 7:
                                        return i.trys.push([7, 9, , 10]), [4, h.V0.get("/templates?categories=".concat(J, "&query=").concat(n, "&amount=").concat(50, "&page=").concat(t, "&language=").concat(f.locale))];
                                    case 8:
                                        return u = i.sent(), p = u.data, C = p.templates, p.page, p.pages, M(e ? C : P.concat(C)), [3, 10];
                                    case 9:
                                        return m = i.sent(), console.log(m.response), [3, 10];
                                    case 10:
                                        return A(!0), E(!1), [2]
                                }
                            }))
                        }));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    u.useEffect((function() {
                        W ? F(!1) : (b(!1), M([]), Z.current = !1, H.current = null, E(!1), B(!1), $(!0, L))
                    }), [L]), u.useEffect((function() {
                        k || O && (0 !== P.length || I || (b(!0), Z.current = !1, H.current = null, E(!1), B(!1), $(!1, "")))
                    }), [P.length, I, O]);
                    return (0, a.jsxs)("div", {
                        className: pe().root,
                        style: {
                            top: "14px"
                        },
                        children: [k && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("p", {
                                className: pe().noTemplatesFound,
                                children: (0, a.jsx)(j.cC, {
                                    t: t,
                                    i18nKey: "content.polotno.sidePanel.noTemplatesFound",
                                    values: {
                                        keyword: L
                                    },
                                    components: {
                                        reset: (0, a.jsx)("span", {
                                            className: pe().textLink,
                                            onClick: function() {
                                                return _("")
                                            }
                                        })
                                    }
                                })
                            }), (0, a.jsxs)("p", {
                                className: pe().youMayAlsoLike,
                                children: [s.polotno.sidePanel.youMayAlsoLike, ":"]
                            })]
                        }), (0, a.jsx)(Se, {
                            store: n,
                            loadWrapper: function(e) {
                                if (c < 2.5) return e(), void d((0, m.h2)());
                                z(!0), Y.current = e
                            },
                            columns: 2,
                            gridElements: P,
                            fetchData: function(e) {
                                return $(e, k ? "" : L)
                            },
                            isReachingEnd: T,
                            mode: "templates"
                        }), (0, a.jsx)(We, {
                            open: G,
                            onClose: function() {
                                return z(!1)
                            },
                            onConfirm: function() {
                                var e;
                                z(!1), d((0, m.h2)()), null === (e = Y.current) || void 0 === e || e.call(Y)
                            }
                        })]
                    })
                })),
                Ue = Fe,
                Oe = t(14924),
                Ae = t(82670),
                qe = t(29815),
                Ge = t(81506),
                ze = t(62969),
                Ye = t(37504),
                Xe = t.n(Ye),
                Je = t(74023),
                $e = t(81576),
                Ke = function(e) {
                    var n = e.images,
                        t = e.isDeleted,
                        o = (0, u.useState)([]),
                        r = o[0],
                        i = o[1],
                        s = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel.trashOverlay"
                        }).t;
                    return (0, u.useEffect)((function() {
                        0 !== n.length && i((0, qe.Z)(n))
                    }), [n]), (0, a.jsx)(Ge.Z, {
                        open: n.length > 0,
                        className: Xe().root,
                        unmountOnExit: !0,
                        children: (0, a.jsxs)(Je.P, {
                            position: "relative",
                            children: [(0, a.jsx)("div", {
                                className: Xe().images,
                                children: (0, a.jsx)($e.B, {
                                    images: n
                                })
                            }), (0, a.jsxs)("div", {
                                className: Xe().info,
                                children: [1 === r.length ? (0, a.jsx)("p", {
                                    children: s("movingToTrash").replace(/{{.+?}}/, "").trim()
                                }) : (0, a.jsx)("p", {
                                    children: s("movingToTrash", {
                                        name: s("items", {
                                            count: r.length
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: Xe().loader,
                                    children: (0, a.jsx)(ze.z, {
                                        hasLoaded: t,
                                        progressClass: Xe().progress
                                    })
                                })]
                            })]
                        })
                    })
                },
                Qe = t(60039),
                en = t.n(Qe),
                nn = ["raw", "png", "tiff", "tif", "jpeg", "bmp", "svg", "webp", "jpg"],
                tn = function(e) {
                    var n = e.progress,
                        t = e.onUpload,
                        o = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel"
                        }).t,
                        r = (0, j.$G)("index").t,
                        i = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        s = (0, p.I0)(),
                        l = (0, u.useRef)(null),
                        c = {
                            className: en().uploadBtn,
                            disabled: null === n && i.uuid || 100 === n && "pro" === i.plan
                        };
                    if (!i.uuid) return (0, a.jsx)("div", {
                        className: en().uploadLabel,
                        children: (0, a.jsx)(Ve.Z, (0, le.Z)((0, se.Z)({}, c), {
                            onClick: function() {
                                return s((0, m.Ps)(!0))
                            },
                            children: o("uploadBtn")
                        }))
                    });
                    if ("free" === i.plan && 100 === n) return (0, a.jsx)("div", {
                        className: en().uploadLabel,
                        children: (0, a.jsx)(Ve.Z, (0, le.Z)((0, se.Z)({}, c), {
                            onClick: function() {
                                return s((0, m.hr)(!0))
                            },
                            children: r("toPro")
                        }))
                    });
                    return (0, a.jsxs)("label", {
                        className: en().uploadLabel,
                        children: [(0, a.jsx)(Ve.Z, (0, le.Z)((0, se.Z)({}, c), {
                            onClick: function() {
                                var e;
                                return null === (e = l.current) || void 0 === e ? void 0 : e.click()
                            },
                            style: {
                                cursor: c.disabled ? "not-allowed" : void 0
                            },
                            children: o("uploadBtn")
                        })), (0, a.jsx)("input", {
                            type: "file",
                            id: "12",
                            accept: ".".concat(nn.join(",.")),
                            onChange: function(e) {
                                if (e.target.files) {
                                    var n = Array.from(e.target.files).filter((function(e) {
                                        return function(e) {
                                            var n = e.name.split(".")[e.name.split(".").length - 1].toLowerCase();
                                            return !!nn.includes(n) && !(e.size > 52428800)
                                        }(e)
                                    }));
                                    t(n), e.target.value = ""
                                }
                            },
                            multiple: !0,
                            disabled: c.disabled,
                            title: "",
                            ref: l
                        })]
                    })
                },
                on = t(19865),
                rn = t(51766),
                an = function(e) {
                    var n = e.anchorElement,
                        t = e.onDelete,
                        o = e.onClose,
                        r = e.onCancel,
                        i = (0, u.useRef)(null),
                        s = (0, _.Z)("(max-width: 768px)");
                    (0, on.O)(i, o, n);
                    var l = (0, a.jsx)(rn.z, {
                        onCancel: function() {
                            null === r || void 0 === r || r(), o()
                        },
                        onSubmit: t,
                        ref: i
                    });
                    return s ? (0, a.jsx)(F.ZP, {
                        anchor: "bottom",
                        open: !!n,
                        onClose: o,
                        ref: n,
                        sx: {
                            "& .MuiDrawer-paper": {
                                bgcolor: "transparent",
                                borderRadius: "16px 16px 0 0"
                            }
                        },
                        children: l
                    }) : (0, a.jsx)(U.Z, {
                        anchorEl: n,
                        id: "popper",
                        open: !0,
                        placement: "bottom-start",
                        children: l
                    })
                },
                sn = function(e) {
                    var n = e.selectedCount,
                        t = e.onDelete,
                        o = e.onDeselect,
                        r = e.onDownload,
                        i = (0, u.useState)(null),
                        l = i[0],
                        c = i[1],
                        d = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel"
                        }).t;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: en().actions,
                            children: [(0, a.jsx)("span", {
                                className: en().selected,
                                children: (0, a.jsx)(j.cC, {
                                    t: d,
                                    i18nKey: "selected",
                                    values: {
                                        count: n
                                    },
                                    components: [(0, a.jsx)("span", {}, "1")]
                                })
                            }), (0, a.jsxs)("div", {
                                className: en().middleContainer,
                                children: [(0, a.jsx)("button", {
                                    className: en().download,
                                    onClick: r,
                                    title: d("downloadSelected"),
                                    children: (0, a.jsx)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                            d: "M17 11.6667V12.7333C17 14.2268 17 14.9735 16.7094 15.544C16.4537 16.0457 16.0457 16.4537 15.544 16.7094C14.9735 17 14.2268 17 12.7333 17H5.26667C3.77319 17 3.02646 17 2.45603 16.7094C1.95426 16.4537 1.54631 16.0457 1.29065 15.544C1 14.9735 1 14.2268 1 12.7333V11.6667M13.4444 7.22222L9 11.6667M9 11.6667L4.55556 7.22222M9 11.6667V1",
                                            stroke: "white",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, a.jsx)("button", {
                                    className: (0, s.Z)(en().delete, (0, Oe.Z)({}, en().active, l)),
                                    onClick: function(e) {
                                        c(null), null === t || void 0 === t || t()
                                    },
                                    title: d("deleteSelected"),
                                    children: (0, a.jsxs)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, a.jsx)("path", {
                                            d: "M3.46191 7.03516L3.98983 16.0595C4.02076 16.5882 4.45852 17.0011 4.98812 17.0011H13.0126C13.5422 17.0011 13.98 16.5882 14.0109 16.0595L14.5388 7.03516",
                                            stroke: "white",
                                            strokeLinecap: "round"
                                        }), (0, a.jsx)("path", {
                                            d: "M1 4.73723H17H13.6667L12.3333 1H5.66667L4.33333 4.73723H1Z",
                                            stroke: "white",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: en().deselectContainer,
                                children: (0, a.jsx)("button", {
                                    onClick: o,
                                    title: d("deselect"),
                                    children: (0, a.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                            d: "M1 1L15 15M1 15L15 1",
                                            stroke: "white",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round"
                                        })
                                    })
                                })
                            })]
                        }), l && (0, a.jsx)(an, {
                            anchorElement: l,
                            onDelete: function() {
                                c(null), null === t || void 0 === t || t()
                            },
                            onClose: function() {
                                c(null)
                            },
                            onCancel: o
                        })]
                    })
                },
                ln = t(44807),
                cn = t(7348),
                dn = t.n(cn),
                un = t(429),
                pn = t(51829),
                hn = function(e) {
                    var n = e.anchor,
                        t = e.image,
                        r = e.onSelect,
                        s = e.onClose,
                        l = e.onDelete,
                        c = e.onUpdate,
                        d = (0, u.useRef)(null),
                        p = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel.imageModal"
                        }).t;

                    function h(e) {
                        return C.apply(this, arguments)
                    }

                    function C() {
                        return (C = (0, o.Z)((function(e) {
                            var n;
                            return (0, i.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, fetch(e).then((function(e) {
                                            return e.blob()
                                        }))];
                                    case 1:
                                        return n = t.sent(), [2, URL.createObjectURL(n)]
                                }
                            }))
                        }))).apply(this, arguments)
                    }

                    function f() {
                        return (f = (0, o.Z)((function() {
                            var e;
                            return (0, i.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = document.createElement("a"), [4, h(t.src)];
                                    case 1:
                                        return e.href = n.sent(), e.download = t.title, document.body.appendChild(e), e.click(), document.body.removeChild(e), s(), [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }(0, on.O)(d, s, n);
                    return (0, a.jsx)(pn.Z, {
                        anchor: n,
                        popperRef: d,
                        onClose: s,
                        children: (0, a.jsx)(un.X, {
                            upload: t,
                            onUploadUpdate: function(e, n) {
                                return c(e, (0, se.Z)({}, t, n))
                            },
                            children: (0, a.jsxs)("div", {
                                className: dn().actions,
                                children: [(0, a.jsxs)("button", {
                                    onClick: function() {
                                        return f.apply(this, arguments)
                                    },
                                    className: dn().xPadding,
                                    children: [(0, a.jsx)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                            d: "M17 11.6667V12.7333C17 14.2268 17 14.9735 16.7094 15.544C16.4537 16.0457 16.0457 16.4537 15.544 16.7094C14.9735 17 14.2268 17 12.7333 17H5.26667C3.77319 17 3.02646 17 2.45603 16.7094C1.95426 16.4537 1.54631 16.0457 1.29065 15.544C1 14.9735 1 14.2268 1 12.7333V11.6667M13.4444 7.22222L9 11.6667M9 11.6667L4.55556 7.22222M9 11.6667V1",
                                            stroke: "#1F2128",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), p("download")]
                                }), (0, a.jsxs)("button", {
                                    onClick: function() {
                                        r(), s()
                                    },
                                    className: dn().xPadding,
                                    children: [(0, a.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, a.jsx)("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "15",
                                            height: "15",
                                            rx: "2.5",
                                            stroke: "#1F2128"
                                        }), (0, a.jsx)("path", {
                                            d: "M12.7999 5.33301L10.118 8.01491L7.43613 10.6968L4.2666 7.7711",
                                            stroke: "#1F2128",
                                            strokeLinecap: "round"
                                        })]
                                    }), p("select")]
                                }), (0, a.jsxs)("button", {
                                    onClick: function() {
                                        l(), s()
                                    },
                                    className: dn().xPadding,
                                    children: [(0, a.jsx)("svg", {
                                        width: "18",
                                        height: "19",
                                        viewBox: "0 0 18 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, a.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M8.71011 0.986328H8.73305H10.2204H10.2433H10.2433C10.7444 0.986323 11.1535 0.986319 11.4859 1.00908C11.8281 1.03252 12.1402 1.08244 12.4352 1.20844C12.8956 1.40509 13.2915 1.72802 13.5478 2.14969C13.7196 2.43235 13.7864 2.73285 13.8166 3.04328C13.8331 3.21287 13.8401 3.40362 13.8429 3.61438H15.591H15.6023H17.3417C17.7007 3.61438 17.9917 3.90539 17.9917 4.26438C17.9917 4.62336 17.7007 4.91438 17.3417 4.91438H16.2057L15.6342 13.5369L15.6325 13.5635C15.5881 14.2333 15.5523 14.7739 15.4884 15.2112C15.4226 15.662 15.3208 16.0552 15.1163 16.4163C14.79 16.9924 14.2975 17.4562 13.7031 17.746C13.3302 17.9278 12.9321 18.0041 12.4797 18.0402C12.0413 18.0752 11.5023 18.0752 10.8354 18.0752H10.8353H10.8084H8.1755H8.14857H8.14851C7.48159 18.0752 6.94258 18.0752 6.50416 18.0402C6.05182 18.0041 5.65372 17.9278 5.28078 17.746C4.68639 17.4562 4.19387 16.9924 3.8676 16.4163C3.66313 16.0552 3.56125 15.662 3.49546 15.2112C3.43163 14.7739 3.39581 14.2333 3.35142 13.5635L3.34966 13.5369L2.77823 4.91438H1.64219C1.2832 4.91438 0.992188 4.62336 0.992188 4.26438C0.992188 3.90539 1.2832 3.61438 1.64219 3.61438H3.38156H3.39288H5.11046C5.11335 3.40362 5.12026 3.21287 5.13679 3.04328C5.16705 2.73285 5.23378 2.43235 5.40559 2.14969C5.66188 1.72802 6.0578 1.40509 6.51819 1.20844C6.8132 1.08244 7.12531 1.03252 7.46754 1.00908C7.79988 0.986319 8.20897 0.986323 8.7101 0.986328H8.71011ZM12.5228 3.16938C12.5347 3.29154 12.5402 3.43483 12.5428 3.61438H6.41063C6.41321 3.43483 6.41876 3.29154 6.43066 3.16938C6.45107 2.96004 6.48565 2.87563 6.51648 2.8249C6.61667 2.66006 6.78958 2.50615 7.02883 2.40395C7.13153 2.36009 7.27857 2.32507 7.55637 2.30604C7.83901 2.28668 8.20343 2.28633 8.73305 2.28633H10.2204C10.75 2.28633 11.1144 2.28668 11.397 2.30604C11.6748 2.32507 11.8219 2.36009 11.9246 2.40395C12.1638 2.50615 12.3367 2.66006 12.4369 2.8249C12.4678 2.87563 12.5023 2.96004 12.5228 3.16938ZM14.9028 4.91438H4.08108L4.64681 13.4509C4.69338 14.1536 4.72628 14.6429 4.78183 15.0235C4.83624 15.3963 4.90596 15.6118 4.9988 15.7757C5.19603 16.1239 5.49314 16.4033 5.85045 16.5775C6.01801 16.6592 6.23505 16.7146 6.60764 16.7444C6.98824 16.7748 7.47529 16.7752 8.1755 16.7752H10.8084C11.5086 16.7752 11.9957 16.7748 12.3763 16.7444C12.7488 16.7146 12.9659 16.6592 13.1334 16.5775C13.4908 16.4033 13.7879 16.1239 13.9851 15.7757C14.0779 15.6118 14.1477 15.3963 14.2021 15.0235C14.2576 14.6429 14.2905 14.1536 14.3371 13.4509L14.9028 4.91438ZM8.30684 6.86946C8.30684 6.51047 8.01582 6.21946 7.65684 6.21946C7.29785 6.21946 7.00684 6.51047 7.00684 6.86946V14.3504C7.00684 14.7093 7.29785 15.0004 7.65684 15.0004C8.01582 15.0004 8.30684 14.7093 8.30684 14.3504V6.86946ZM11.612 6.86946C11.612 6.51047 11.321 6.21946 10.962 6.21946C10.603 6.21946 10.312 6.51047 10.312 6.86946V14.3504C10.312 14.7093 10.603 15.0004 10.962 15.0004C11.321 15.0004 11.612 14.7093 11.612 14.3504V6.86946Z",
                                            fill: "#232327"
                                        })
                                    }), p("trash")]
                                })]
                            })
                        })
                    })
                },
                Cn = (0, de.observer)((function(e) {
                    var n = e.isSelected,
                        t = e.onSelect,
                        l = e.showActions,
                        c = e.image,
                        d = e.alwaysHideActions,
                        p = e.store,
                        C = e.showUpload,
                        f = e.hasLoaded,
                        m = e.onDelete,
                        g = e.onDeleteStart,
                        v = e.onUpdate,
                        x = (0, r.Z)((0, X.Z)(), 1)[0],
                        w = (0, _.Z)("(max-width: 500px)"),
                        j = (0, r.Z)(u.useState(null), 2),
                        k = j[0],
                        y = j[1],
                        L = (0, r.Z)(u.useState(null), 2),
                        Z = L[0],
                        N = L[1],
                        P = u.useRef(null),
                        M = (0, Ae.Z)(c, File),
                        H = !M && c.src.toLowerCase().endsWith(".svg"),
                        D = M ? URL.createObjectURL(c) : c.preview,
                        I = function() {
                            var e = (0, o.Z)((function() {
                                var e, n, t, o, r, a, s;
                                return (0, i.__generator)(this, (function(i) {
                                    return M ? [2, void 0] : (e = c.height, n = c.width, t = p.height / e, o = p.width / n, r = .7 * e, a = .7 * n, (t < 1 || o < 1) && (s = Math.min(t, o), r *= s, a *= s), [2, {
                                        elementHeight: r,
                                        elementWidth: a
                                    }])
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        E = function() {
                            var e = (0, o.Z)((function() {
                                var e;
                                return (0, i.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return M ? [2] : [4, I()];
                                        case 1:
                                            return (e = n.sent()) ? (p.activePage.addElement({
                                                type: H ? "svg" : "image",
                                                src: xe(c.src),
                                                x: p.width / 2 - e.elementWidth / 2,
                                                y: p.height / 2 - e.elementHeight / 2,
                                                height: e.elementHeight,
                                                width: e.elementWidth
                                            }), w && p.openSidePanel(""), [2]) : [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        R = function() {
                            var e = (0, o.Z)((function() {
                                var e;
                                return (0, i.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return M ? [2] : [4, I()];
                                        case 1:
                                            return (e = n.sent()) ? ((0, S._$)((function(n, t) {
                                                H || !t ? p.activePage.addElement({
                                                    type: H ? "svg" : "image",
                                                    src: c.src,
                                                    x: n.x - e.elementWidth / 2,
                                                    y: n.y - e.elementHeight / 2,
                                                    width: e.elementWidth,
                                                    height: e.elementHeight
                                                }) : t.set({
                                                    maskSrc: c.src
                                                })
                                            })), [2]) : [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        T = function() {
                            var e = (0, o.Z)((function() {
                                var e;
                                return (0, i.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return M ? [2] : (N(null), null === g || void 0 === g || g(), [4, h.V0.patch("uploads/trash", {
                                                ids: [c._id]
                                            }, {
                                                headers: {
                                                    Authorization: x.user.accessToken
                                                }
                                            })]);
                                        case 1:
                                            return e = n.sent(), null === m || void 0 === m || m(e), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsxs)("div", {
                        className: dn().gridItem,
                        children: [l && (0, a.jsx)("div", {
                            onClick: t,
                            className: dn().clickOverlay
                        }), !M && !d && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(ln.X, {
                                value: n,
                                className: (0, s.Z)(dn().selectAction, (0, Oe.Z)({}, dn().visible, l)),
                                onChange: t,
                                variant: "dark"
                            }), (0, a.jsx)("button", {
                                onClick: function(e) {
                                    y(k ? null : e.currentTarget)
                                },
                                className: (0, s.Z)(dn().dropdownAction, (0, Oe.Z)({}, dn().visible, k)),
                                children: (0, a.jsxs)("svg", {
                                    width: "15",
                                    height: "4",
                                    viewBox: "0 0 15 4",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, a.jsx)("path", {
                                        d: "M7.65627 2.64324C8.11579 2.64324 8.4883 2.27539 8.4883 1.82162C8.4883 1.36785 8.11579 1 7.65627 1C7.19675 1 6.82423 1.36785 6.82423 1.82162C6.82423 2.27539 7.19675 2.64324 7.65627 2.64324Z",
                                        fill: "white"
                                    }), (0, a.jsx)("path", {
                                        d: "M13.4805 2.64324C13.94 2.64324 14.3125 2.27539 14.3125 1.82162C14.3125 1.36785 13.94 1 13.4805 1C13.021 1 12.6485 1.36785 12.6485 1.82162C12.6485 2.27539 13.021 2.64324 13.4805 2.64324Z",
                                        fill: "white"
                                    }), (0, a.jsx)("path", {
                                        d: "M1.83203 2.64324C2.29155 2.64324 2.66407 2.27539 2.66407 1.82162C2.66407 1.36785 2.29155 1 1.83203 1C1.37251 1 1 1.36785 1 1.82162C1 2.27539 1.37251 2.64324 1.83203 2.64324Z",
                                        fill: "white"
                                    }), (0, a.jsx)("path", {
                                        d: "M7.65627 2.64324C8.11579 2.64324 8.4883 2.27539 8.4883 1.82162C8.4883 1.36785 8.11579 1 7.65627 1C7.19675 1 6.82423 1.36785 6.82423 1.82162C6.82423 2.27539 7.19675 2.64324 7.65627 2.64324Z",
                                        stroke: "white",
                                        strokeWidth: "1.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, a.jsx)("path", {
                                        d: "M13.4805 2.64324C13.94 2.64324 14.3125 2.27539 14.3125 1.82162C14.3125 1.36785 13.94 1 13.4805 1C13.021 1 12.6485 1.36785 12.6485 1.82162C12.6485 2.27539 13.021 2.64324 13.4805 2.64324Z",
                                        stroke: "white",
                                        strokeWidth: "1.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, a.jsx)("path", {
                                        d: "M1.83203 2.64324C2.29155 2.64324 2.66407 2.27539 2.66407 1.82162C2.66407 1.36785 2.29155 1 1.83203 1C1.37251 1 1 1.36785 1 1.82162C1 2.27539 1.37251 2.64324 1.83203 2.64324Z",
                                        stroke: "white",
                                        strokeWidth: "1.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                })
                            })]
                        }), C && (0, a.jsx)("div", {
                            className: dn().loading,
                            children: (0, a.jsx)(ze.z, {
                                hasLoaded: !!f,
                                progressClass: dn().progressClass
                            })
                        }), (0, a.jsx)("div", {
                            onClick: l ? void 0 : E,
                            className: (0, s.Z)(dn().imageWrapper, (0, Oe.Z)({}, dn().selected, n)),
                            children: M || H ? (0, a.jsx)("img", {
                                src: D,
                                alt: ""
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "itemSkeleton",
                                    ref: P
                                }), (0, a.jsx)(b(), {
                                    src: D,
                                    alt: c.title,
                                    width: c.width,
                                    height: c.height,
                                    loader: function(e) {
                                        return e.src
                                    },
                                    onLoadingComplete: function() {
                                        var e;
                                        return null === (e = P.current) || void 0 === e ? void 0 : e.remove()
                                    },
                                    draggable: !0,
                                    onDragStart: R,
                                    onDragEnd: function() {
                                        (0, S._$)(null)
                                    }
                                })]
                            })
                        }), !M && t && k && v && (0, a.jsx)("div", {
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: (0, a.jsx)(hn, {
                                anchor: k,
                                image: c,
                                onSelect: t,
                                onDelete: T,
                                onClose: function() {
                                    return y(null)
                                },
                                onUpdate: v
                            })
                        }), Z && m && (0, a.jsx)(an, {
                            anchorElement: Z,
                            onClose: function() {
                                return N(null)
                            },
                            onDelete: T
                        })]
                    })
                })),
                fn = (0, de.observer)((function(e) {
                    var n = e.images,
                        t = e.total,
                        o = e.onSelectedImageIdsChange,
                        r = e.selectedImageIds,
                        i = e.store,
                        s = e.hasMore,
                        l = e.fetchData,
                        c = e.uploadingFiles,
                        d = e.finishingUploadFiles,
                        p = e.onDelete,
                        h = e.onDeleteStart,
                        C = e.onUpdate,
                        f = (0, u.useRef)(null),
                        m = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        g = function(e) {
                            return function() {
                                r.includes(e._id) ? o(r.filter((function(n) {
                                    return n !== e._id
                                }))) : o((0, qe.Z)(r).concat([e._id]))
                            }
                        };
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            ref: f,
                            className: en().gridRoot,
                            children: (0, a.jsx)(be(), {
                                pageStart: 0,
                                loadMore: function() {
                                    l()
                                },
                                hasMore: s,
                                useWindow: !1,
                                getScrollParent: function() {
                                    return f.current
                                },
                                children: (0, a.jsxs)(ye.Z, {
                                    breakpointCols: {
                                        default: 2
                                    },
                                    className: "my-masonry-grid ".concat(en().masonryGrid),
                                    columnClassName: "my-masonry-grid_column ".concat(en().masonryGridColumn),
                                    children: [null == t && m.uuid && new Array(13).fill(null).map((function(e, n) {
                                        return (0, a.jsx)("div", {
                                            className: "skeleton"
                                        }, n)
                                    })), n.map((function(e) {
                                        return (0, Ae.Z)(e, File) ? (0, a.jsx)(Cn, {
                                            store: null,
                                            showUpload: c.includes(e),
                                            hasLoaded: d.includes(e),
                                            image: e,
                                            alwaysHideActions: !0
                                        }, e.lastModified) : (0, a.jsx)(Cn, {
                                            image: e,
                                            store: i,
                                            isSelected: r.includes(e._id),
                                            onSelect: g(e),
                                            showActions: 0 !== r.length,
                                            onDelete: function(n) {
                                                return p(e, n)
                                            },
                                            onDeleteStart: function() {
                                                return null === h || void 0 === h ? void 0 : h(e)
                                            },
                                            onUpdate: C
                                        }, e._id)
                                    }))]
                                })
                            })
                        })
                    })
                })),
                mn = t(86070),
                gn = function(e) {
                    var n = e.progress,
                        t = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel"
                        }).t,
                        o = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        r = (0, p.I0)(),
                        i = o.uuid && "free" === o.plan;
                    return (0, a.jsxs)("div", {
                        className: (0, s.Z)(en().storage, (0, Oe.Z)({}, en().clickable, i)),
                        onClick: i ? function() {
                            return r((0, m.hr)(!0))
                        } : void 0,
                        children: [(0, a.jsxs)("div", {
                            className: en().storageInfo,
                            children: [(0, a.jsxs)("div", {
                                children: [null === n && (0, a.jsx)("div", {
                                    className: en().skeleton
                                }), (0, a.jsx)("p", {
                                    children: t("storage", {
                                        percentage: n
                                    })
                                })]
                            }), "free" === o.plan && (0, a.jsx)("span", {
                                children: (0, a.jsx)("svg", {
                                    width: "17",
                                    height: "17",
                                    viewBox: "7 7 25 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        d: "M9.40499 18.445C9.24069 18.0616 9.59037 17.6574 9.9934 17.7649L16.0952 19.3921C16.3294 19.4545 16.5747 19.34 16.6772 19.1204L19.5469 12.9709C19.7265 12.5862 20.2735 12.5862 20.4531 12.9709L23.3228 19.1204C23.4253 19.34 23.6706 19.4545 23.9048 19.3921L30.0066 17.7649C30.4096 17.6574 30.7593 18.0616 30.595 18.445L26.6299 27.697C26.5511 27.8808 26.3703 28 26.1703 28H13.8297C13.6297 28 13.4489 27.8808 13.3701 27.697L9.40499 18.445Z",
                                        fill: "#FFBE0B"
                                    })
                                })
                            })]
                        }), (0, a.jsx)(mn.Z, {
                            classes: {
                                root: en().progressRoot,
                                bar: (0, s.Z)(en().progressBar, (0, Oe.Z)({}, en().full, n && n >= 80))
                            },
                            variant: null === n ? "indeterminate" : "determinate",
                            value: null !== n && void 0 !== n ? n : void 0
                        })]
                    })
                },
                vn = t(10894),
                xn = 34,
                _n = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = (0, j.$G)("design", {
                            keyPrefix: "content.polotno.sidePanel"
                        }).t,
                        l = (0, u.useRef)(!1),
                        c = (0, r.Z)((0, X.Z)(), 1)[0],
                        d = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        p = (0, u.useState)(1),
                        C = p[0],
                        f = p[1],
                        m = (0, u.useState)(0),
                        g = m[0],
                        v = m[1],
                        x = (0, u.useState)(!1),
                        _ = x[0],
                        w = x[1],
                        k = (0, u.useState)({
                            total: null,
                            data: []
                        }),
                        b = k[0],
                        y = k[1],
                        L = (0, u.useState)([]),
                        S = L[0],
                        Z = L[1],
                        N = (0, u.useState)(!1),
                        P = N[0],
                        M = N[1],
                        H = (0, u.useCallback)((function(e) {
                            y((function(n) {
                                var t, o = (0, qe.Z)(n.data),
                                    r = e.filter((function(e) {
                                        return !!e
                                    }));
                                return (t = o).unshift.apply(t, (0, qe.Z)(r)), {
                                    total: n.total,
                                    data: o
                                }
                            }))
                        }), []),
                        D = (0, vn.s)({
                            onUploaded: H
                        }),
                        I = D.enqueueFilesForUpload,
                        E = D.finishingUploadFiles,
                        R = D.storageData,
                        B = D.uploadingFiles,
                        V = D.setStorageMetaData,
                        W = D.imagesToUpload,
                        F = R ? Math.min(Math.floor((null === R || void 0 === R ? void 0 : R.storageUsed) / (null === R || void 0 === R ? void 0 : R.totalStorage) * 100), 100) : null,
                        U = (0, u.useState)([]),
                        O = U[0],
                        A = U[1],
                        q = (0, u.useCallback)((0, o.Z)((function() {
                            var e, n;
                            return (0, i.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return _ || !d.uuid ? [2] : (w(!0), [4, h.V0.get("/uploads?page=".concat(C, "&amount=").concat(xn), {
                                            headers: {
                                                Authorization: c.user.accessToken
                                            }
                                        })]);
                                    case 1:
                                        return e = t.sent(), n = e.data, y((function(e) {
                                            var t, o = (0, qe.Z)(e.data);
                                            return (t = o).splice.apply(t, [n.page * xn, xn].concat((0, qe.Z)(n.uploads))), {
                                                total: n.totalDocs,
                                                data: o
                                            }
                                        })), f((function(e) {
                                            return e + 1
                                        })), v(n.pages), w(!1), [2, e.data]
                                }
                            }))
                        })), [c, C, _, d]);
                    (0, u.useEffect)((function() {
                        l.current || (q(), l.current = !0)
                    }), [q]);
                    var G = function() {
                        var e = (0, o.Z)((function() {
                            var e, n;
                            return (0, i.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = (0, qe.Z)(O), A([]), Z(b.data.filter((function(n) {
                                            return !(0, Ae.Z)(n, File) && e.includes(n._id)
                                        }))), [4, h.V0.patch("/uploads/trash", {
                                            ids: e
                                        }, {
                                            headers: {
                                                Authorization: c.user.accessToken
                                            }
                                        })];
                                    case 1:
                                        return n = t.sent(), V(n.data), M(!0), y((function(n) {
                                            return (0, le.Z)((0, se.Z)({}, n), {
                                                data: n.data.filter((function(n) {
                                                    return !!(0, Ae.Z)(n, File) || !e.includes(n._id)
                                                }))
                                            })
                                        })), [4, new Promise((function(e) {
                                            return setTimeout(e, 1e3)
                                        }))];
                                    case 2:
                                        return t.sent(), Z([]), M(!1), [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();

                    function z(e) {
                        return Y.apply(this, arguments)
                    }

                    function Y() {
                        return (Y = (0, o.Z)((function(e) {
                            var n;
                            return (0, i.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, fetch(e).then((function(e) {
                                            return e.blob()
                                        }))];
                                    case 1:
                                        return n = t.sent(), [2, URL.createObjectURL(n)]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    var J = function() {
                            var e = (0, o.Z)((function(e, n) {
                                return (0, i.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return M(!0), V(n.data), y((function(n) {
                                                return (0, le.Z)((0, se.Z)({}, n), {
                                                    data: n.data.filter((function(n) {
                                                        return !!(0, Ae.Z)(n, File) || n._id !== e._id
                                                    }))
                                                })
                                            })), A((function(n) {
                                                return n.filter((function(n) {
                                                    return n !== e._id
                                                }))
                                            })), [4, new Promise((function(e) {
                                                return setTimeout(e, 1e3)
                                            }))];
                                        case 1:
                                            return t.sent(), Z([]), M(!1), [2]
                                    }
                                }))
                            }));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        $ = O.length > 0;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: (0, s.Z)(en().root, (0, Oe.Z)({}, en().actionsShown, $)),
                            style: {
                                padding: "0"
                            },
                            children: [(0, a.jsx)("p", {
                                className: en().hint,
                                children: t("uploadHint")
                            }), d.uuid && (0, a.jsx)(gn, {
                                progress: F
                            }), (0, a.jsx)(tn, {
                                progress: F,
                                onUpload: I
                            }), $ && (0, a.jsx)(sn, {
                                selectedCount: O.length,
                                onDeselect: function() {
                                    A([])
                                },
                                onDelete: G,
                                onDownload: function() {
                                    b.data.filter((function(e) {
                                        return !(0, Ae.Z)(e, File) && O.includes(e._id)
                                    })).forEach(function() {
                                        var e = (0, o.Z)((function(e) {
                                            var n;
                                            return (0, i.__generator)(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return n = document.createElement("a"), [4, z(e.src)];
                                                    case 1:
                                                        return n.href = t.sent(), n.download = e.title, document.body.appendChild(n), n.click(), document.body.removeChild(n), [2]
                                                }
                                            }))
                                        }));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                            }), (0, a.jsx)(fn, {
                                store: n,
                                images: (0, qe.Z)(W).concat((0, qe.Z)(b.data)),
                                total: b.total,
                                uploadingFiles: B,
                                finishingUploadFiles: E,
                                selectedImageIds: O,
                                onSelectedImageIdsChange: function(e) {
                                    return A(e)
                                },
                                fetchData: q,
                                hasMore: g >= C && 0 !== b.data.length,
                                onDelete: J,
                                onDeleteStart: function(e) {
                                    return Z([e])
                                },
                                onUpdate: function(e, n) {
                                    y((function(t) {
                                        var o = t.data.findIndex((function(n) {
                                                return !(0, Ae.Z)(n, File) && n._id === e
                                            })),
                                            r = (0, qe.Z)(t.data);
                                        return r.splice(o, 1, n), (0, le.Z)((0, se.Z)({}, t), {
                                            data: r
                                        })
                                    }))
                                }
                            })]
                        }), (0, a.jsx)(Ke, {
                            images: S,
                            isDeleted: P
                        })]
                    })
                })),
                wn = t(38322),
                jn = t.n(wn),
                kn = function() {
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            d: "M6.5 6.5H6.51M17.5 6.5H17.51M6.5 17.5H6.51M13 13H13.01M17.5 17.5H17.51M17 21H21V17M14 16.5V21M21 14H16.5M15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21Z",
                            stroke: "#878787",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                bn = function() {
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            d: "M2 11.941L11.6422 16.7621C11.7734 16.8277 11.839 16.8605 11.9078 16.8734C11.9687 16.8848 12.0313 16.8848 12.0922 16.8734C12.161 16.8605 12.2266 16.8277 12.3578 16.7621L22 11.941M2 14.941L11.6422 19.7621C11.7734 19.8277 11.839 19.8605 11.9078 19.8734C11.9687 19.8848 12.0313 19.8848 12.0922 19.8734C12.161 19.8605 12.2266 19.8277 12.3578 19.7621L22 14.941M2 8.94098L11.6422 4.11987C11.7734 4.05428 11.839 4.02148 11.9078 4.00857C11.9687 3.99714 12.0313 3.99714 12.0922 4.00857C12.161 4.02148 12.2266 4.05428 12.3578 4.11987L22 8.94098L12.3578 13.7621C12.2266 13.8277 12.161 13.8605 12.0922 13.8734C12.0313 13.8848 11.9687 13.8848 11.9078 13.8734C11.839 13.8605 11.7734 13.8277 11.6422 13.7621L2 8.94098Z",
                            stroke: "#878787",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                yn = function(e) {
                    var n = e.name,
                        t = e.icon,
                        o = e.panelName,
                        r = e.setPanelView;
                    return (0, a.jsxs)("div", {
                        className: jn().appIcon,
                        onClick: function() {
                            return r(o)
                        },
                        children: [(0, a.jsx)("div", {
                            className: jn().iconWrapper,
                            children: t()
                        }), (0, a.jsx)("div", {
                            className: jn().nameWrapper,
                            children: n
                        })]
                    })
                },
                Ln = t(92592),
                Sn = t(34824),
                Zn = t(40027),
                Nn = t.n(Zn),
                Pn = function(e) {
                    var n = e.onClick,
                        t = (0, u.useState)(!1),
                        o = t[0],
                        r = t[1],
                        i = (0, u.useState)(!1),
                        s = i[0],
                        l = i[1],
                        c = s ? "#333333" : o ? "#2E2E2E" : "#141414";
                    return (0, a.jsx)("svg", {
                        onClick: n,
                        onMouseEnter: function() {
                            r(!0)
                        },
                        onMouseLeave: function() {
                            r(!1)
                        },
                        onMouseDown: function() {
                            l(!0)
                        },
                        onMouseUp: function() {
                            l(!1)
                        },
                        style: {
                            cursor: "pointer",
                            background: c,
                            borderRadius: "4px"
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30",
                        viewBox: "0 0 30 30",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            d: "M17.5 9L11.5707 14.9293C11.5317 14.9683 11.5317 15.0317 11.5707 15.0707L17.5 21",
                            stroke: "#F6F6F6",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        })
                    })
                };

            function Mn(e) {
                return Hn.apply(this, arguments)
            }

            function Hn() {
                return (Hn = (0, o.Z)((function(e) {
                    return (0, i.__generator)(this, (function(n) {
                        return [2, new Promise((function(n) {
                            Ln.toString(e || "no-data", {
                                type: "svg",
                                color: {
                                    dark: "#000000",
                                    light: "#ffffffff"
                                }
                            }, (function(e, t) {
                                n(Sn.svgToURL(t))
                            }))
                        }))]
                    }))
                }))).apply(this, arguments)
            }
            var Dn = (0, de.observer)((function(e) {
                    var n, t = e.store,
                        s = e.setPanelView,
                        l = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        c = (0, r.Z)(u.useState(""), 2),
                        d = c[0],
                        p = c[1],
                        h = (0, u.useState)(void 0),
                        C = h[0],
                        f = h[1],
                        m = (0, u.useRef)(null),
                        g = t.selectedElements[0];
                    console.log(g, "from qr");
                    var v = "qr" === (null === g || void 0 === g || null === (n = g.custom) || void 0 === n ? void 0 : n.svgType);
                    (0, u.useEffect)((function() {
                        g ? v && p(g.custom.qrValue) : p("")
                    }), [v, g]), (0, u.useEffect)((function() {
                        var e = function() {
                            f(window.innerWidth)
                        };
                        return e(), window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), []);
                    var x = (0, u.useCallback)((0, o.Z)((function() {
                        var e, n, o, r, a, s;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return d ? v ? (console.log("qr el", g), [4, Mn(d)]) : [3, 2] : [3, 4];
                                case 1:
                                    return e = i.sent(), g.set({
                                        src: e,
                                        custom: {
                                            qrValue: d,
                                            svgType: "qr"
                                        }
                                    }), C && C < 501 && (null === t || void 0 === t || t.openSidePanel("")), [3, 4];
                                case 2:
                                    return [4, Mn(d)];
                                case 3:
                                    r = i.sent(), a = null === t || void 0 === t || null === (n = t.activePage) || void 0 === n ? void 0 : n.computedHeight, s = null === t || void 0 === t || null === (o = t.activePage) || void 0 === o ? void 0 : o.computedWidth, t.activePage.addElement({
                                        type: "svg",
                                        name: "qr",
                                        x: s ? s / 2 - 100 : 50,
                                        y: a ? a / 2 - 100 : 50,
                                        width: 200,
                                        height: 200,
                                        src: r,
                                        custom: {
                                            qrValue: d,
                                            svgType: "qr"
                                        }
                                    }), C && C < 501 && (null === t || void 0 === t || t.openSidePanel("")), p(""), i.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    })), [g, v, t, d, C]);
                    return (0, u.useEffect)((function() {
                        var e = function(e) {
                                "Enter" === e.key && x()
                            },
                            n = m.current;
                        return n && n.addEventListener("keypress", e),
                            function() {
                                n && n.removeEventListener("keypress", e)
                            }
                    }), [x]), (0, a.jsx)("div", {
                        className: pe().root,
                        children: (0, a.jsxs)("div", {
                            className: Nn().rootPanel,
                            children: [(0, a.jsxs)("div", {
                                className: Nn().titleWrapper,
                                children: [(0, a.jsx)(Pn, {
                                    onClick: function() {
                                        return s("home")
                                    }
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)("h3", {
                                        className: Nn().qrtitle,
                                        children: l.polotno.sidePanel.appSection.qr
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: Nn().bodyWrapper,
                                children: [(0, a.jsx)("p", {
                                    className: Nn().qrDesription,
                                    children: l.polotno.sidePanel.appSection.qrDetails.description
                                }), (0, a.jsx)("input", {
                                    className: Nn().qrInput,
                                    onChange: function(e) {
                                        p(e.target.value)
                                    },
                                    value: d,
                                    type: "text",
                                    name: "qr-url",
                                    placeholder: l.polotno.sidePanel.appSection.qrDetails.inputPlaceholder,
                                    ref: m
                                }), (0, a.jsx)("button", {
                                    style: {
                                        cursor: d ? "" : "not-allowed",
                                        color: d ? "#000000" : "#878787",
                                        backgroundColor: d ? "#FFCE22" : "#232323"
                                    },
                                    disabled: !d,
                                    onClick: x,
                                    className: Nn().generateBtn,
                                    children: v ? l.polotno.sidePanel.appSection.qrDetails.update : l.polotno.sidePanel.appSection.qrDetails.generate
                                })]
                            })]
                        })
                    })
                })),
                In = t(60887),
                En = t(45587),
                Rn = t(43165),
                Tn = t(24285),
                Bn = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        o = (0, u.useState)(!1),
                        r = o[0],
                        i = o[1];
                    return (0, a.jsxs)("svg", {
                        className: n,
                        onClick: t,
                        onMouseEnter: function() {
                            i(!0)
                        },
                        onMouseLeave: function() {
                            i(!1)
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M8.26805 18.8868C8.12971 18.6942 8.06054 18.598 8.02181 18.4495C7.99273 18.3379 7.99273 18.1621 8.02181 18.0505C8.06054 17.902 8.12971 17.8058 8.26805 17.6132C9.41127 16.0222 12.8142 12 18 12C23.1858 12 26.5887 16.0222 27.7319 17.6132C27.8703 17.8058 27.9395 17.902 27.9782 18.0505C28.0073 18.1621 28.0073 18.3379 27.9782 18.4495C27.9395 18.598 27.8703 18.6942 27.7319 18.8868C26.5887 20.4778 23.1858 24.5 18 24.5C12.8142 24.5 9.41127 20.4778 8.26805 18.8868Z",
                            stroke: r ? "#CDCDCD" : "#878787",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M18 20.9286C19.6831 20.9286 21.0475 19.7293 21.0475 18.25C21.0475 16.7707 19.6831 15.5714 18 15.5714C16.3169 15.5714 14.9525 16.7707 14.9525 18.25C14.9525 19.7293 16.3169 20.9286 18 20.9286Z",
                            stroke: r ? "#CDCDCD" : "#878787",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                Vn = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        o = (0, u.useState)(!1),
                        r = o[0],
                        i = o[1];
                    return (0, a.jsx)("svg", {
                        className: n,
                        onClick: t,
                        onMouseEnter: function() {
                            i(!0)
                        },
                        onMouseLeave: function() {
                            i(!1)
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            d: "M16.7226 12.7436C17.1355 12.6935 17.5614 12.6667 18 12.6667C23.1858 12.6667 26.5887 16.4207 27.7319 17.9057C27.8703 18.0854 27.9395 18.1753 27.9782 18.3139C28.0073 18.418 28.0073 18.5822 27.9782 18.6863C27.9394 18.8249 27.8697 18.9154 27.7304 19.0963C27.4258 19.4918 26.9614 20.0476 26.3461 20.6504M12.6404 14.0959C10.4441 15.3181 8.95305 17.0161 8.26905 17.9044C8.13006 18.0849 8.06057 18.1751 8.02183 18.3137C7.99273 18.4178 7.99272 18.582 8.0218 18.6861C8.06052 18.8247 8.1297 18.9146 8.26806 19.0943C9.41128 20.5793 12.8142 24.3333 18 24.3333C20.091 24.3333 21.8921 23.723 23.3721 22.8972M8.85753 11L27.1425 26M15.8451 16.7322C15.2936 17.1846 14.9525 17.8096 14.9525 18.5C14.9525 19.8807 16.3169 21 18 21C18.8415 21 19.6034 20.7202 20.1549 20.2678",
                            stroke: r ? "#CDCDCD" : "#878787",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Wn = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        o = (0, u.useState)(!1),
                        r = o[0],
                        i = o[1];
                    return (0, a.jsx)("svg", {
                        className: n,
                        onClick: t,
                        onMouseEnter: function() {
                            i(!0)
                        },
                        onMouseLeave: function() {
                            i(!1)
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.7734 13.1995C13.9641 11.0124 15.7952 9.33359 17.9911 9.33359C20.187 9.33359 22.0181 11.0124 22.2088 13.1995H13.7734ZM12.3672 13.2116L12.3781 13.0847C12.6287 10.1711 15.0668 7.93359 17.9911 7.93359C20.9154 7.93359 23.3536 10.1711 23.6041 13.0847L23.615 13.2116C23.7483 13.216 23.8735 13.2221 23.9914 13.2304C24.4424 13.2621 24.8408 13.329 25.2124 13.4921C25.8022 13.7508 26.3016 14.1723 26.6218 14.7134C26.8307 15.0662 26.9149 15.4452 26.9538 15.8552C26.9909 16.2459 26.9908 16.7241 26.9908 17.2964V17.2964V17.2964V17.2964V17.3293V23.3314V23.3643V23.3643V23.3643V23.3643C26.9908 23.9366 26.9909 24.4148 26.9538 24.8055C26.9149 25.2155 26.8307 25.5945 26.6218 25.9473C26.3016 26.4885 25.8022 26.9099 25.2124 27.1687C24.8408 27.3317 24.4424 27.3986 23.9914 27.4303C23.5515 27.4613 23.0081 27.4613 22.3329 27.4613H22.3328H22.3328H22.3327H22.3068H13.6747H13.6488H13.6488H13.6487H13.6487C12.9735 27.4613 12.43 27.4613 11.9902 27.4303C11.5391 27.3986 11.1408 27.3317 10.7691 27.1687C10.1793 26.9099 9.67998 26.4885 9.35972 25.9473C9.15088 25.5945 9.06669 25.2155 9.02778 24.8055C8.9907 24.4148 8.99071 23.9366 8.99072 23.3643V23.3643V23.3314V17.3293V17.2964V17.2964C8.99071 16.7241 8.9907 16.2459 9.02778 15.8552C9.06669 15.4452 9.15088 15.0662 9.35972 14.7134C9.67998 14.1723 10.1793 13.7508 10.7691 13.4921C11.1408 13.329 11.5391 13.2621 11.9902 13.2304C12.1082 13.2221 12.2337 13.216 12.3672 13.2116ZM11.3315 14.7742C11.4924 14.7035 11.7091 14.6536 12.0884 14.6269C12.4734 14.5999 12.9675 14.5995 13.6747 14.5995H22.3068C23.014 14.5995 23.5082 14.5999 23.8931 14.6269C24.2725 14.6536 24.4891 14.7035 24.6501 14.7742C24.9973 14.9265 25.2598 15.1609 25.417 15.4264C25.4796 15.5321 25.5311 15.6826 25.56 15.9875C25.5901 16.3042 25.5908 16.7156 25.5908 17.3293V23.3314C25.5908 23.9451 25.5901 24.3565 25.56 24.6732C25.5311 24.9781 25.4796 25.1286 25.417 25.2343C25.2598 25.4999 24.9973 25.7343 24.6501 25.8866C24.4891 25.9572 24.2725 26.0071 23.8931 26.0338C23.5082 26.0609 23.014 26.0613 22.3068 26.0613H13.6747C12.9675 26.0613 12.4734 26.0609 12.0884 26.0338C11.7091 26.0071 11.4924 25.9572 11.3315 25.8866C10.9842 25.7343 10.7217 25.4999 10.5645 25.2343C10.502 25.1286 10.4505 24.9781 10.4215 24.6732C10.3915 24.3565 10.3907 23.9451 10.3907 23.3314V17.3293C10.3907 16.7156 10.3915 16.3042 10.4215 15.9875C10.4505 15.6826 10.502 15.5321 10.5645 15.4264C10.7217 15.1609 10.9842 14.9265 11.3315 14.7742ZM18.8408 20.4608C19.3261 20.1982 19.6511 19.7176 19.6511 19.1682C19.6511 18.3373 18.9078 17.6637 17.9909 17.6637C17.074 17.6637 16.3308 18.3373 16.3308 19.1682C16.3308 19.7175 16.6556 20.198 17.1408 20.4606V22.924C17.1408 23.3934 17.5213 23.774 17.9908 23.774C18.4602 23.774 18.8408 23.3934 18.8408 22.924V20.4608Z",
                            fill: r ? "#CDCDCD" : "#878787"
                        })
                    })
                },
                Fn = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        o = (0, u.useState)(!1),
                        r = o[0],
                        i = o[1];
                    return (0, a.jsx)("svg", {
                        className: n,
                        onClick: t,
                        onMouseEnter: function() {
                            i(!0)
                        },
                        onMouseLeave: function() {
                            i(!1)
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.844 9.917C15.3665 9.5378 15.9956 9.33359 16.6412 9.33359H17.9435C20.1549 9.33359 22.002 11.0099 22.222 13.2036H13.6796L13.6536 13.2036H13.6536C12.9776 13.2036 12.4336 13.2036 11.9933 13.2346C11.5418 13.2664 11.1432 13.3333 10.7712 13.4965C10.1809 13.7555 9.68121 14.1773 9.36072 14.7189C9.15174 15.072 9.06749 15.4512 9.02855 15.8616C8.99143 16.2528 8.99144 16.7314 8.99146 17.3044V17.3044V17.3373V23.3461V23.379V23.379C8.99144 23.952 8.99143 24.4307 9.02855 24.8218C9.06749 25.2322 9.15174 25.6114 9.36072 25.9645C9.68121 26.5061 10.1809 26.9279 10.7712 27.1869C11.1432 27.3501 11.5418 27.417 11.9933 27.4488C12.4336 27.4798 12.9776 27.4798 13.6535 27.4798H13.6535H13.6536H13.6536H13.6796H22.3204H22.3464H22.3464H22.3465H22.3465C23.0224 27.4798 23.5664 27.4798 24.0067 27.4488C24.4582 27.417 24.8568 27.3501 25.2288 27.1869C25.8191 26.9279 26.3188 26.5061 26.6393 25.9645C26.8483 25.6114 26.9325 25.2322 26.9715 24.8218C27.0086 24.4307 27.0086 23.952 27.0085 23.379V23.3461V17.3373V17.3044C27.0086 16.7315 27.0086 16.2528 26.9715 15.8616C26.9325 15.4512 26.8483 15.072 26.6393 14.7189C26.3188 14.1773 25.8191 13.7555 25.2288 13.4965C24.8568 13.3333 24.4582 13.2664 24.0067 13.2346C23.8883 13.2263 23.7625 13.2202 23.6286 13.2157L23.6225 13.1453C23.3691 10.1974 20.9022 7.93359 17.9435 7.93359H16.6412C15.7002 7.93359 14.7833 8.23124 14.0217 8.78394C13.7088 9.01101 13.6392 9.44873 13.8663 9.76162C14.0934 10.0745 14.5311 10.1441 14.844 9.917ZM11.3336 14.7786C11.4949 14.7079 11.7118 14.6579 12.0916 14.6312C12.4769 14.6041 12.9716 14.6036 13.6796 14.6036H22.3204C23.0284 14.6036 23.5231 14.6041 23.9084 14.6312C24.2882 14.6579 24.5051 14.7079 24.6664 14.7786C25.0141 14.9311 25.277 15.1659 25.4345 15.4319C25.4972 15.5378 25.5487 15.6886 25.5777 15.9939C25.6078 16.3111 25.6085 16.7229 25.6085 17.3373V23.3461C25.6085 23.9605 25.6078 24.3724 25.5777 24.6895C25.5487 24.9948 25.4972 25.1456 25.4345 25.2515C25.277 25.5175 25.0141 25.7523 24.6664 25.9048C24.5051 25.9756 24.2882 26.0255 23.9084 26.0522C23.5231 26.0794 23.0284 26.0798 22.3204 26.0798H13.6796C12.9716 26.0798 12.4769 26.0794 12.0916 26.0522C11.7118 26.0255 11.4949 25.9756 11.3336 25.9048C10.9859 25.7523 10.723 25.5175 10.5655 25.2515C10.5028 25.1456 10.4513 24.9948 10.4223 24.6895C10.3922 24.3724 10.3915 23.9605 10.3915 23.3461V17.3373C10.3915 16.7229 10.3922 16.3111 10.4223 15.9939C10.4513 15.6886 10.5028 15.5378 10.5655 15.4319C10.723 15.1659 10.9859 14.9311 11.3336 14.7786ZM18.8501 20.472C19.3362 20.2092 19.6618 19.7279 19.6618 19.1776C19.6618 18.3459 18.9178 17.6716 18.0001 17.6716C17.0823 17.6716 16.3383 18.3459 16.3383 19.1776C16.3383 19.7279 16.6639 20.2092 17.1501 20.472V22.9394C17.1501 23.4088 17.5306 23.7894 18.0001 23.7894C18.4695 23.7894 18.8501 23.4088 18.8501 22.9394V20.472Z",
                            fill: r ? "#CDCDCD" : "#878787"
                        })
                    })
                },
                Un = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        o = (0, u.useState)(!1),
                        r = o[0],
                        i = o[1];
                    return (0, a.jsx)("svg", {
                        className: n,
                        onClick: t,
                        onMouseEnter: function() {
                            i(!0)
                        },
                        onMouseLeave: function() {
                            i(!1)
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.3934 9.19458H17.4179H18.9905H19.015H19.0151C19.5447 9.19457 19.9775 9.19457 20.3292 9.21852C20.6914 9.24318 21.0226 9.29573 21.336 9.4288C21.8244 9.63619 22.2456 9.97723 22.5187 10.4238C22.7023 10.7242 22.7734 11.0433 22.8056 11.3713C22.8232 11.551 22.8305 11.753 22.8335 11.9759H24.6479H24.6601H26.4991C26.8857 11.9759 27.1991 12.2893 27.1991 12.6759C27.1991 13.0625 26.8857 13.3759 26.4991 13.3759H25.3096L24.7064 22.4233L24.7045 22.4521L24.7045 22.4521L24.7045 22.4522C24.6576 23.1554 24.6197 23.7244 24.5521 24.1848C24.4823 24.6599 24.3741 25.0759 24.1563 25.4582C23.8095 26.0669 23.2865 26.5563 22.656 26.8618C22.2601 27.0537 21.8378 27.134 21.3591 27.172C20.8952 27.2088 20.325 27.2088 19.6201 27.2088H19.5912H16.8074H16.7786C16.0737 27.2088 15.5035 27.2088 15.0396 27.172C14.5608 27.134 14.1386 27.0537 13.7427 26.8618C13.1122 26.5563 12.5891 26.0669 12.2424 25.4582C12.0246 25.0759 11.9163 24.6599 11.8466 24.1848C11.779 23.7243 11.741 23.1554 11.6942 22.4521L11.6942 22.452L11.6922 22.4233L11.0891 13.3759H9.89958C9.51299 13.3759 9.19958 13.0625 9.19958 12.6759C9.19958 12.2893 9.51299 11.9759 9.89958 11.9759H11.7385H11.7508H13.5749C13.578 11.753 13.5853 11.551 13.6029 11.3713C13.6351 11.0433 13.7062 10.7242 13.8898 10.4238C14.1629 9.97723 14.5841 9.63619 15.0725 9.4288C15.3859 9.29573 15.7171 9.24318 16.0793 9.21852C16.431 9.19457 16.8638 9.19457 17.3934 9.19458H17.3934ZM21.4123 11.508C21.4248 11.6361 21.4307 11.7866 21.4334 11.9759H14.9751C14.9778 11.7866 14.9837 11.6361 14.9962 11.508C15.0176 11.2897 15.0536 11.2042 15.0842 11.1542C15.1881 10.9843 15.3684 10.8242 15.6197 10.7174C15.7268 10.672 15.8811 10.6353 16.1744 10.6153C16.4729 10.595 16.8578 10.5946 17.4179 10.5946H18.9905C19.5506 10.5946 19.9356 10.595 20.2341 10.6153C20.5274 10.6353 20.6817 10.672 20.7888 10.7174C21.0401 10.8242 21.2204 10.9843 21.3242 11.1542C21.3548 11.2042 21.3909 11.2897 21.4123 11.508ZM23.9065 13.3759H12.4922L13.0891 22.3302C13.1384 23.069 13.1731 23.5824 13.2317 23.9814C13.2891 24.3719 13.3623 24.5957 13.4588 24.7652C13.6655 25.1281 13.9774 25.4198 14.3532 25.6019C14.5287 25.687 14.7569 25.7452 15.1504 25.7764C15.5524 25.8083 16.0669 25.8088 16.8074 25.8088H19.5912C20.3317 25.8088 20.8463 25.8083 21.2483 25.7764C21.6418 25.7452 21.8699 25.687 22.0455 25.6019C22.4213 25.4198 22.7331 25.1281 22.9399 24.7652C23.0364 24.5957 23.1096 24.3719 23.1669 23.9814C23.2255 23.5824 23.2603 23.069 23.3095 22.3302L23.9065 13.3759ZM16.9846 15.4182C16.9846 15.0316 16.6712 14.7182 16.2846 14.7182C15.898 14.7182 15.5846 15.0316 15.5846 15.4182V23.2811C15.5846 23.6677 15.898 23.9811 16.2846 23.9811C16.6712 23.9811 16.9846 23.6677 16.9846 23.2811V15.4182ZM20.4792 15.4182C20.4792 15.0316 20.1658 14.7182 19.7792 14.7182C19.3926 14.7182 19.0792 15.0316 19.0792 15.4182V23.2811C19.0792 23.6677 19.3926 23.9811 19.7792 23.9811C20.1658 23.9811 20.4792 23.6677 20.4792 23.2811V15.4182Z",
                            fill: r ? "#CDCDCD" : "#878787"
                        })
                    })
                },
                On = function() {
                    return (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "13",
                        height: "36",
                        viewBox: "0 0 13 36",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M8.30435 13.8261C8.80861 13.8261 9.21739 13.4173 9.21739 12.913C9.21739 12.4088 8.80861 12 8.30435 12C7.80009 12 7.3913 12.4088 7.3913 12.913C7.3913 13.4173 7.80009 13.8261 8.30435 13.8261Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M8.30435 19.2174C8.80861 19.2174 9.21739 18.8086 9.21739 18.3043C9.21739 17.8001 8.80861 17.3913 8.30435 17.3913C7.80009 17.3913 7.3913 17.8001 7.3913 18.3043C7.3913 18.8086 7.80009 19.2174 8.30435 19.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M8.30435 24.6087C8.80861 24.6087 9.21739 24.1999 9.21739 23.6957C9.21739 23.1914 8.80861 22.7826 8.30435 22.7826C7.80009 22.7826 7.3913 23.1914 7.3913 23.6957C7.3913 24.1999 7.80009 24.6087 8.30435 24.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 13.8261C4.4173 13.8261 4.82609 13.4173 4.82609 12.913C4.82609 12.4088 4.4173 12 3.91304 12C3.40878 12 3 12.4088 3 12.913C3 13.4173 3.40878 13.8261 3.91304 13.8261Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 19.2174C4.4173 19.2174 4.82609 18.8086 4.82609 18.3043C4.82609 17.8001 4.4173 17.3913 3.91304 17.3913C3.40878 17.3913 3 17.8001 3 18.3043C3 18.8086 3.40878 19.2174 3.91304 19.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 24.6087C4.4173 24.6087 4.82609 24.1999 4.82609 23.6957C4.82609 23.1914 4.4173 22.7826 3.91304 22.7826C3.40878 22.7826 3 23.1914 3 23.6957C3 24.1999 3.40878 24.6087 3.91304 24.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M8.30435 13.8261C8.80861 13.8261 9.21739 13.4173 9.21739 12.913C9.21739 12.4088 8.80861 12 8.30435 12C7.80009 12 7.3913 12.4088 7.3913 12.913C7.3913 13.4173 7.80009 13.8261 8.30435 13.8261Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M8.30435 19.2174C8.80861 19.2174 9.21739 18.8086 9.21739 18.3043C9.21739 17.8001 8.80861 17.3913 8.30435 17.3913C7.80009 17.3913 7.3913 17.8001 7.3913 18.3043C7.3913 18.8086 7.80009 19.2174 8.30435 19.2174Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M8.30435 24.6087C8.80861 24.6087 9.21739 24.1999 9.21739 23.6957C9.21739 23.1914 8.80861 22.7826 8.30435 22.7826C7.80009 22.7826 7.3913 23.1914 7.3913 23.6957C7.3913 24.1999 7.80009 24.6087 8.30435 24.6087Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 13.8261C4.4173 13.8261 4.82609 13.4173 4.82609 12.913C4.82609 12.4088 4.4173 12 3.91304 12C3.40878 12 3 12.4088 3 12.913C3 13.4173 3.40878 13.8261 3.91304 13.8261Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 19.2174C4.4173 19.2174 4.82609 18.8086 4.82609 18.3043C4.82609 17.8001 4.4173 17.3913 3.91304 17.3913C3.40878 17.3913 3 17.8001 3 18.3043C3 18.8086 3.40878 19.2174 3.91304 19.2174Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M3.91304 24.6087C4.4173 24.6087 4.82609 24.1999 4.82609 23.6957C4.82609 23.1914 4.4173 22.7826 3.91304 22.7826C3.40878 22.7826 3 23.1914 3 23.6957C3 24.1999 3.40878 24.6087 3.91304 24.6087Z",
                            stroke: "#878787",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                An = t(75093),
                qn = t.n(An),
                Gn = (0, de.observer)((function(e) {
                    var n = e.id,
                        t = e.layer,
                        o = e.store,
                        r = function() {
                            f ? (m(!1), t.set({
                                visible: !0
                            })) : (m(!0), t.set({
                                visible: !1
                            }))
                        },
                        i = function() {
                            p ? (h(!1), t.set({
                                draggable: !0,
                                contentEditable: !0,
                                styleEditable: !0,
                                resizable: !0
                            })) : (h(!0), t.set({
                                draggable: !1,
                                contentEditable: !1,
                                styleEditable: !1,
                                resizable: !1
                            }))
                        },
                        s = (0, u.useState)(!1),
                        l = s[0],
                        c = s[1],
                        d = (0, u.useState)(!1),
                        p = d[0],
                        h = d[1],
                        C = (0, u.useState)(!t.visible),
                        f = C[0],
                        m = C[1],
                        g = (0, u.useState)(!1),
                        v = g[0],
                        x = g[1],
                        _ = (0, u.useRef)(null),
                        w = (0, u.useRef)(null),
                        k = (0, u.useState)(t.name ? t.name : ""),
                        b = k[0],
                        y = k[1],
                        L = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        S = (0, En.nB)({
                            id: n
                        }),
                        Z = S.attributes,
                        N = S.listeners,
                        P = S.setNodeRef,
                        M = S.transform,
                        H = S.transition,
                        D = S.isDragging,
                        I = {
                            transform: Tn.ux.Transform.toString(M),
                            transition: H
                        },
                        E = o.selectedElements[0],
                        R = (null === E || void 0 === E ? void 0 : E.id) === t.id;
                    (0, u.useEffect)((function() {
                        c(!!R)
                    }), [o, R]), (0, u.useEffect)((function() {
                        var e = function(e) {
                                _.current && !_.current.contains(e.target) && x(!1)
                            },
                            n = function(e) {
                                "Enter" === e.key && x(!1)
                            };
                        return document.addEventListener("mousedown", e), document.addEventListener("keydown", n),
                            function() {
                                document.removeEventListener("mousedown", e), document.removeEventListener("keydown", n)
                            }
                    }), []), (0, u.useEffect)((function() {
                        v && w.current && w.current.focus()
                    }), [v]), (0, u.useEffect)((function() {
                        if (o && t) return (0, Rn.autorun)((function() {
                            var e = null !== E && void 0 !== E && !E.draggable && !E.contentEditable && !E.styleEditable && !E.resizable;
                            (null === E || void 0 === E ? void 0 : E.id) === t.id && h(!!e)
                        }))
                    }), [o, t, E]), (0, u.useEffect)((function() {
                        if (o && t) return (0, Rn.autorun)((function() {
                            var e = null !== E && void 0 !== E && E.visible;
                            (null === E || void 0 === E ? void 0 : E.id) === t.id && m(!e)
                        }))
                    }), [o, t, E]);
                    var T;
                    return (0, a.jsx)("div", (0, le.Z)((0, se.Z)({
                        ref: P,
                        style: (0, se.Z)({}, I, {
                            outline: "none"
                        })
                    }, Z), {
                        children: (0, a.jsxs)("div", {
                            className: qn().LayerItemWrapper,
                            style: {
                                border: l ? "0.7px solid #F6F6F6" : "0.7px solid var(--borders-on-dark-bg, #535353)",
                                background: D ? "#303030" : "#232323"
                            },
                            onClick: function() {
                                o.selectElements([t.id])
                            },
                            children: [(0, a.jsx)("div", (0, le.Z)((0, se.Z)({
                                className: qn().LayerDragHandle
                            }, N), {
                                children: (0, a.jsx)(On, {})
                            })), (0, a.jsx)("div", {
                                ref: _,
                                className: qn().LayerNameWrapper,
                                style: {
                                    flex: v ? "" : "1 0 0"
                                },
                                onClick: function() {
                                    return x(!0)
                                },
                                children: v ? (0, a.jsx)("input", {
                                    ref: w,
                                    className: qn().layerNameInput,
                                    value: b,
                                    onChange: function(e) {
                                        y(e.target.value), t.set({
                                            name: e.target.value
                                        })
                                    },
                                    placeholder: L.polotno.sidePanel.appSection.layersDetails.inputPlaceholder,
                                    autoComplete: "off",
                                    type: "text",
                                    name: "layerName"
                                }) : (0, a.jsx)("p", {
                                    className: qn().layerName,
                                    children: (T = t.name ? t.name : "text" === t.type ? t.text : "svg" === t.type ? "Element-".concat(t.id) : "image" === t.type ? "Photo-".concat(t.id) : "upload" === t.type ? "Upload-".concat(t.id) : t.id, T.length > 12 ? T.substring(0, 12) + "..." : T)
                                })
                            }), (0, a.jsxs)("div", {
                                className: qn().LayerControl,
                                children: [f ? (0, a.jsx)(Vn, {
                                    className: qn().controlIcon,
                                    onClick: r
                                }) : (0, a.jsx)(Bn, {
                                    className: qn().controlIcon,
                                    onClick: r
                                }), p ? (0, a.jsx)(Wn, {
                                    className: qn().controlIcon,
                                    onClick: i
                                }) : (0, a.jsx)(Fn, {
                                    className: qn().controlIcon,
                                    onClick: i
                                }), (0, a.jsx)(Un, {
                                    className: qn().controlIcon,
                                    onClick: function() {
                                        o.deleteElements([t.id])
                                    }
                                })]
                            })]
                        })
                    }))
                })),
                zn = (0, de.observer)((function(e) {
                    var n, t = e.store,
                        o = e.setPanelView,
                        r = null === (n = t.activePage) || void 0 === n ? void 0 : n.children.filter((function(e) {
                            return "watermark" !== e.name
                        })).reverse(),
                        i = (0, u.useState)(null),
                        s = i[0],
                        l = i[1],
                        c = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        d = (0, In.Dy)((0, In.VT)(In.we)),
                        p = r.length > 0 ? c.polotno.sidePanel.appSection.layersDetails.description : c.polotno.sidePanel.appSection.layersDetails.noLayers;
                    return (0, a.jsxs)("div", {
                        className: pe().root,
                        children: [(0, a.jsxs)("div", {
                            className: qn().rootPanel,
                            children: [(0, a.jsxs)("div", {
                                className: qn().titleWrapper,
                                children: [(0, a.jsx)(Pn, {
                                    onClick: function() {
                                        return o("home")
                                    }
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)("h3", {
                                        className: qn().qrtitle,
                                        children: c.polotno.sidePanel.appSection.layers
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: qn().bodyWrapper,
                                children: (0, a.jsx)("div", {
                                    className: qn().descriptionWrapper,
                                    children: (0, a.jsx)("p", {
                                        className: qn().layerDesription,
                                        children: p
                                    })
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: qn().layerListWrapper,
                            style: {
                                overflowY: "auto",
                                height: "100%"
                            },
                            children: r && r.length > 0 && (0, a.jsx)(In.LB, {
                                sensors: d,
                                collisionDetection: In.pE,
                                modifiers: [function(e) {
                                    var n = e.transform;
                                    return (0, le.Z)((0, se.Z)({}, n), {
                                        x: 0
                                    })
                                }],
                                onDragStart: function(e) {
                                    var n = e.active.id,
                                        t = r.filter((function(e) {
                                            return e.id === n
                                        }))[0];
                                    l(t)
                                },
                                onDragEnd: function(e) {
                                    var n = e.active,
                                        t = e.over,
                                        o = r.findIndex((function(e) {
                                            return e.id === n.id
                                        })) - r.findIndex((function(e) {
                                            return e.id === t.id
                                        }));
                                    if (n.id !== t.id && s)
                                        if (o > 0)
                                            for (var i = 0; i < o; i++) s.moveUp();
                                        else
                                            for (var a = 0; a < Math.abs(o); a++) s.moveDown()
                                },
                                children: (0, a.jsx)(En.Fo, {
                                    items: r,
                                    strategy: En.qw,
                                    children: r.map((function(e) {
                                        return (0, a.jsx)(Gn, {
                                            id: e.id,
                                            layer: e,
                                            store: t
                                        }, e.id)
                                    }))
                                })
                            })
                        })]
                    })
                })),
                Yn = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        o = (0, u.useState)("home"),
                        r = o[0],
                        i = o[1],
                        s = [{
                            name: t.polotno.sidePanel.appSection.qr,
                            icon: kn,
                            panelName: "qr"
                        }, {
                            name: t.polotno.sidePanel.appSection.layers,
                            icon: bn,
                            panelName: "layers"
                        }];
                    return "layers" === r ? (0, a.jsx)(zn, {
                        store: n,
                        setPanelView: i
                    }) : "qr" === r ? (0, a.jsx)(Dn, {
                        store: n,
                        setPanelView: i
                    }) : "home" === r ? (0, a.jsx)("div", {
                        className: pe().root,
                        children: (0, a.jsx)("div", {
                            className: jn().rootPanel,
                            children: (0, a.jsx)("div", {
                                className: jn().appIconsWrapper,
                                children: s.map((function(e) {
                                    return (0, a.jsx)(yn, {
                                        name: e.name,
                                        icon: e.icon,
                                        panelName: e.panelName,
                                        setPanelView: i
                                    }, e.name)
                                }))
                            })
                        })
                    }) : void 0
                })),
                Xn = function() {
                    return (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M9.30435 5.82609C9.80861 5.82609 10.2174 5.4173 10.2174 4.91304C10.2174 4.40878 9.80861 4 9.30435 4C8.80009 4 8.3913 4.40878 8.3913 4.91304C8.3913 5.4173 8.80009 5.82609 9.30435 5.82609Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M9.30435 12.2174C9.80861 12.2174 10.2174 11.8086 10.2174 11.3043C10.2174 10.8001 9.80861 10.3913 9.30435 10.3913C8.80009 10.3913 8.3913 10.8001 8.3913 11.3043C8.3913 11.8086 8.80009 12.2174 9.30435 12.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M9.30435 18.6087C9.80861 18.6087 10.2174 18.1999 10.2174 17.6957C10.2174 17.1914 9.80861 16.7826 9.30435 16.7826C8.80009 16.7826 8.3913 17.1914 8.3913 17.6957C8.3913 18.1999 8.80009 18.6087 9.30435 18.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 5.82609C16.1999 5.82609 16.6087 5.4173 16.6087 4.91304C16.6087 4.40878 16.1999 4 15.6957 4C15.1914 4 14.7826 4.40878 14.7826 4.91304C14.7826 5.4173 15.1914 5.82609 15.6957 5.82609Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 12.2174C16.1999 12.2174 16.6087 11.8086 16.6087 11.3043C16.6087 10.8001 16.1999 10.3913 15.6957 10.3913C15.1914 10.3913 14.7826 10.8001 14.7826 11.3043C14.7826 11.8086 15.1914 12.2174 15.6957 12.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 18.6087C16.1999 18.6087 16.6087 18.1999 16.6087 17.6957C16.6087 17.1914 16.1999 16.7826 15.6957 16.7826C15.1914 16.7826 14.7826 17.1914 14.7826 17.6957C14.7826 18.1999 15.1914 18.6087 15.6957 18.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 5.82609C3.4173 5.82609 3.82609 5.4173 3.82609 4.91304C3.82609 4.40878 3.4173 4 2.91304 4C2.40878 4 2 4.40878 2 4.91304C2 5.4173 2.40878 5.82609 2.91304 5.82609Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 12.2174C3.4173 12.2174 3.82609 11.8086 3.82609 11.3043C3.82609 10.8001 3.4173 10.3913 2.91304 10.3913C2.40878 10.3913 2 10.8001 2 11.3043C2 11.8086 2.40878 12.2174 2.91304 12.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 18.6087C3.4173 18.6087 3.82609 18.1999 3.82609 17.6957C3.82609 17.1914 3.4173 16.7826 2.91304 16.7826C2.40878 16.7826 2 17.1914 2 17.6957C2 18.1999 2.40878 18.6087 2.91304 18.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 5.82609C22.5912 5.82609 23 5.4173 23 4.91304C23 4.40878 22.5912 4 22.087 4C21.5827 4 21.1739 4.40878 21.1739 4.91304C21.1739 5.4173 21.5827 5.82609 22.087 5.82609Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 12.2174C22.5912 12.2174 23 11.8086 23 11.3043C23 10.8001 22.5912 10.3913 22.087 10.3913C21.5827 10.3913 21.1739 10.8001 21.1739 11.3043C21.1739 11.8086 21.5827 12.2174 22.087 12.2174Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 18.6087C22.5912 18.6087 23 18.1999 23 17.6957C23 17.1914 22.5912 16.7826 22.087 16.7826C21.5827 16.7826 21.1739 17.1914 21.1739 17.6957C21.1739 18.1999 21.5827 18.6087 22.087 18.6087Z",
                            fill: "#878787"
                        }), (0, a.jsx)("path", {
                            d: "M9.30435 5.82609C9.80861 5.82609 10.2174 5.4173 10.2174 4.91304C10.2174 4.40878 9.80861 4 9.30435 4C8.80009 4 8.3913 4.40878 8.3913 4.91304C8.3913 5.4173 8.80009 5.82609 9.30435 5.82609Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.30435 12.2174C9.80861 12.2174 10.2174 11.8086 10.2174 11.3043C10.2174 10.8001 9.80861 10.3913 9.30435 10.3913C8.80009 10.3913 8.3913 10.8001 8.3913 11.3043C8.3913 11.8086 8.80009 12.2174 9.30435 12.2174Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.30435 18.6087C9.80861 18.6087 10.2174 18.1999 10.2174 17.6957C10.2174 17.1914 9.80861 16.7826 9.30435 16.7826C8.80009 16.7826 8.3913 17.1914 8.3913 17.6957C8.3913 18.1999 8.80009 18.6087 9.30435 18.6087Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 5.82609C16.1999 5.82609 16.6087 5.4173 16.6087 4.91304C16.6087 4.40878 16.1999 4 15.6957 4C15.1914 4 14.7826 4.40878 14.7826 4.91304C14.7826 5.4173 15.1914 5.82609 15.6957 5.82609Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 12.2174C16.1999 12.2174 16.6087 11.8086 16.6087 11.3043C16.6087 10.8001 16.1999 10.3913 15.6957 10.3913C15.1914 10.3913 14.7826 10.8001 14.7826 11.3043C14.7826 11.8086 15.1914 12.2174 15.6957 12.2174Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M15.6957 18.6087C16.1999 18.6087 16.6087 18.1999 16.6087 17.6957C16.6087 17.1914 16.1999 16.7826 15.6957 16.7826C15.1914 16.7826 14.7826 17.1914 14.7826 17.6957C14.7826 18.1999 15.1914 18.6087 15.6957 18.6087Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 5.82609C3.4173 5.82609 3.82609 5.4173 3.82609 4.91304C3.82609 4.40878 3.4173 4 2.91304 4C2.40878 4 2 4.40878 2 4.91304C2 5.4173 2.40878 5.82609 2.91304 5.82609Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 12.2174C3.4173 12.2174 3.82609 11.8086 3.82609 11.3043C3.82609 10.8001 3.4173 10.3913 2.91304 10.3913C2.40878 10.3913 2 10.8001 2 11.3043C2 11.8086 2.40878 12.2174 2.91304 12.2174Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M2.91304 18.6087C3.4173 18.6087 3.82609 18.1999 3.82609 17.6957C3.82609 17.1914 3.4173 16.7826 2.91304 16.7826C2.40878 16.7826 2 17.1914 2 17.6957C2 18.1999 2.40878 18.6087 2.91304 18.6087Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 5.82609C22.5912 5.82609 23 5.4173 23 4.91304C23 4.40878 22.5912 4 22.087 4C21.5827 4 21.1739 4.40878 21.1739 4.91304C21.1739 5.4173 21.5827 5.82609 22.087 5.82609Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 12.2174C22.5912 12.2174 23 11.8086 23 11.3043C23 10.8001 22.5912 10.3913 22.087 10.3913C21.5827 10.3913 21.1739 10.8001 21.1739 11.3043C21.1739 11.8086 21.5827 12.2174 22.087 12.2174Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M22.087 18.6087C22.5912 18.6087 23 18.1999 23 17.6957C23 17.1914 22.5912 16.7826 22.087 16.7826C21.5827 16.7826 21.1739 17.1914 21.1739 17.6957C21.1739 18.1999 21.5827 18.6087 22.087 18.6087Z",
                            stroke: "#878787",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                Jn = function() {
                    var e = (0, (0, j.$G)("design").t)("content", {
                            returnObjects: !0
                        }),
                        n = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "templates" === e.name
                        })),
                        t = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "text" === e.name
                        })),
                        o = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "photos" === e.name
                        })),
                        r = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "elements" === e.name
                        })),
                        i = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "upload" === e.name
                        })),
                        s = Z.DEFAULT_SECTIONS.find((function(e) {
                            return "background" === e.name
                        }));
                    n.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.template")
                        }, e), {
                            children: (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "22",
                                fill: "none",
                                viewBox: "0 0 22 22",
                                children: (0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.5",
                                    d: "M11 11h10M11 1v20M6.333 1h9.334c1.867 0 2.8 0 3.513.363.627.32 1.137.83 1.457 1.457C21 3.533 21 4.466 21 6.333v9.334c0 1.867 0 2.8-.363 3.513a3.334 3.334 0 01-1.457 1.457c-.713.363-1.646.363-3.513.363H6.333c-1.867 0-2.8 0-3.513-.363a3.333 3.333 0 01-1.457-1.457C1 18.467 1 17.534 1 15.667V6.333c0-1.867 0-2.8.363-3.513.32-.627.83-1.137 1.457-1.457C3.533 1 4.466 1 6.333 1z"
                                })
                            })
                        }))
                    }, n.Panel = Ue, t.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.text")
                        }, e), {
                            children: (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: (0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.4",
                                    d: "M3 6.375c0-1.048 0-1.573.171-1.986A2.25 2.25 0 014.39 3.171C4.802 3 5.327 3 6.375 3h11.25c1.048 0 1.573 0 1.986.171.551.229.99.667 1.218 1.218.171.413.171.938.171 1.986M8.625 21h6.75M12 3v18"
                                })
                            })
                        }))
                    }, o.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.photo")
                        }, e), {
                            children: (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "20",
                                fill: "none",
                                viewBox: "0 0 22 20",
                                children: (0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.4",
                                    d: "M3.272 18.728L9.87 12.13c.396-.396.594-.594.822-.668a1 1 0 01.618 0c.228.074.426.272.822.668l6.553 6.553M13 13l2.869-2.869c.396-.396.594-.594.822-.668a1 1 0 01.618 0c.228.074.426.272.822.668L21 13M9 7a2 2 0 11-4 0 2 2 0 014 0zM5.8 19h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 16.72 21 15.88 21 14.2V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 1 17.88 1 16.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C1 3.28 1 4.12 1 5.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C3.28 19 4.12 19 5.8 19z"
                                })
                            })
                        }))
                    }, r.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.elements")
                        }, e), {
                            children: (0, a.jsx)("svg", {
                                width: "27",
                                height: "26",
                                viewBox: "0 0 27 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M20.9283 3.25H6.07158C3.59571 3.25 1.58441 5.24617 1.58441 7.71478L1.58325 10.6985C1.58309 11.1217 1.89589 11.4716 2.3018 11.5269L2.41465 11.5346C3.32306 11.5346 3.99616 12.1669 3.99616 13.0011C3.99616 13.864 3.29432 14.5607 2.41465 14.5607C1.95548 14.5607 1.58325 14.9349 1.58325 15.3964V18.2852C1.58325 20.7542 3.59376 22.75 6.07043 22.75H20.9294C23.4061 22.75 25.4166 20.7542 25.4166 18.2852V15.3964C25.4166 14.9349 25.0444 14.5607 24.5852 14.5607C23.7055 14.5607 23.0037 13.864 23.0037 13.0011C23.0037 12.138 23.7059 11.4404 24.5852 11.4404C25.0445 11.4404 25.4168 11.0661 25.4166 10.6044L25.4154 7.71445C25.4154 5.24617 23.4041 3.25 20.9283 3.25ZM20.9281 4.92155L21.114 4.9275C22.5893 5.02222 23.7525 6.23582 23.7525 7.7149L23.7525 9.87678L23.6634 9.9008C22.3198 10.295 21.3407 11.5303 21.3407 13.0013L21.3462 13.1917C21.4265 14.5779 22.3781 15.7238 23.6633 16.1007L23.7536 16.1246V18.2853C23.7536 19.8265 22.4922 21.0787 20.9292 21.0787H16.382V19.4185L16.3744 19.3051C16.3193 18.8972 15.9715 18.5828 15.5506 18.5828C15.0914 18.5828 14.7192 18.9569 14.7192 19.4185V21.0787H6.07024L5.8842 21.0727C4.40839 20.9781 3.24586 19.7648 3.24586 18.2853V16.1235L3.33613 16.1007C4.67976 15.7067 5.65877 14.4722 5.65877 13.0013L5.6533 12.8119C5.57347 11.4355 4.6274 10.3444 3.33944 9.98754L3.24475 9.96369L3.24702 7.71523C3.24702 6.1742 4.50916 4.92155 6.0714 4.92155H14.7192V7.06105L14.7268 7.17446C14.7818 7.58237 15.1297 7.89677 15.5506 7.89677C16.0098 7.89677 16.382 7.52261 16.382 7.06105V4.92155H20.9281ZM15.5506 9.38263C15.9715 9.38263 16.3193 9.69703 16.3744 10.1049L16.382 10.2183V15.5903C16.382 16.0519 16.0098 16.426 15.5506 16.426C15.1297 16.426 14.7818 16.1116 14.7268 15.7037L14.7192 15.5903V10.2183C14.7192 9.75679 15.0914 9.38263 15.5506 9.38263Z",
                                    fill: "white"
                                })
                            })
                        }))
                    };
                    var l = {
                        name: "custom elements",
                        Tab: function(e) {
                            return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                                name: (0, ce.t)("sidePanel.elements")
                            }, e), {
                                children: (0, a.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [(0, a.jsx)("path", {
                                        stroke: "#878787",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.4",
                                        d: "M20 14h-4.222c-.623 0-.934 0-1.171.121a1.11 1.11 0 00-.486.486c-.121.237-.121.549-.121 1.17V20c0 .622 0 .933.121 1.171.107.21.277.38.486.486.237.12.549.12 1.17.12H20c.622 0 .933 0 1.171-.12.21-.107.38-.277.486-.486.12-.238.12-.549.12-1.171v-4.222c0-.623 0-.934-.12-1.171a1.111 1.111 0 00-.486-.486C20.933 14 20.622 14 20 14zM10.66 9.778h4.882c.622 0 .933 0 1.171-.121.21-.107.38-.277.486-.486C17.319 8.933 14.16 3 13.66 2.5a.705.705 0 00-.997 0c-.497.5-3.78 6.433-3.66 6.671.107.21.277.38.486.486.238.12.549.12 1.17.12z"
                                    }), (0, a.jsx)("circle", {
                                        cx: "6",
                                        cy: "16",
                                        r: "4",
                                        stroke: "#878787",
                                        strokeWidth: "1.4"
                                    })]
                                })
                            }))
                        },
                        Panel: Me
                    };
                    i.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.upload")
                        }, e), {
                            children: (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: (0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.4",
                                    d: "M7 14l5-5m0 0l5 5m-5-5v12M21 10V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 6.28 3 7.12 3 8.8V10"
                                })
                            })
                        }))
                    }, i.Panel = _n, s.Tab = function(e) {
                        return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                            name: (0, ce.t)("sidePanel.background")
                        }, e), {
                            children: (0, a.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.4",
                                    d: "M1 8.04c0-1.764 0-2.646.343-3.32A3.15 3.15 0 012.72 3.343C3.394 3 4.276 3 6.04 3h10.92c1.764 0 2.646 0 3.32.343a3.15 3.15 0 011.377 1.377C22 5.394 22 6.276 22 8.04v8.82c0 1.764 0 2.646-.343 3.32a3.15 3.15 0 01-1.377 1.377c-.674.343-1.556.343-3.32.343H6.04c-1.764 0-2.646 0-3.32-.343a3.15 3.15 0 01-1.377-1.377C1 19.506 1 18.624 1 16.86V8.04z"
                                }), (0, a.jsx)("path", {
                                    stroke: "#878787",
                                    strokeWidth: "1.4",
                                    d: "M1 11.4L10.45 3M1 16.65L15.7 3M2.05 21.9L20.95 3M7.3 21.9L22 8.25M13.6 21.9l8.4-8.4"
                                })]
                            })
                        }))
                    };
                    var c = [n, t, o, l, i, s, {
                            name: "apps",
                            Tab: function(n) {
                                return (0, a.jsx)(Z.SectionTab, (0, le.Z)((0, se.Z)({
                                    name: e.polotno.sidePanel.appSection.apps
                                }, n), {
                                    children: (0, a.jsx)(Xn, {})
                                }))
                            },
                            Panel: Yn
                        }],
                        d = (0, u.useState)(c),
                        p = d[0];
                    d[1];
                    return [p]
                },
                $n = t(32237),
                Kn = t(86333),
                Qn = t(11229),
                et = t(57299),
                nt = t.n(et);
            (0, S.MO)({
                type: "star",
                radius: 100,
                fill: "black",
                numPoints: 6
            });
            var tt = (0, de.observer)((function(e) {
                var n = e.element,
                    t = (e.store, u.useRef(null)),
                    o = function(e) {
                        var t = e.currentTarget,
                            o = t.scaleX();
                        t.scaleX(1), t.scaleY(1), n.set({
                            x: t.x(),
                            y: t.y(),
                            rotation: e.target.rotation(),
                            radius: n.radius * o
                        })
                    };
                return (0, a.jsx)($n.Star, {
                    ref: t,
                    name: "element",
                    id: n.id,
                    x: n.x,
                    y: n.y,
                    fill: n.fill,
                    offsetX: -n.radius,
                    offsetY: -n.radius,
                    rotation: n.rotation,
                    opacity: n.opacity,
                    draggable: !n.locked,
                    outerRadius: n.radius,
                    innerRadius: .5 * n.radius,
                    onDragMove: o,
                    onTransform: o
                })
            }));
            (0, S.o_)("star", tt), (0, S.bN)("star", {
                enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"]
            });
            var ot = (0, de.observer)((function(e) {
                var n = e.store,
                    t = n.selectedElements[0];
                return (0, a.jsxs)(Kn.wp.Group, {
                    align: Qn.v.LEFT,
                    children: [(0, a.jsx)(nt(), {
                        value: t.fill,
                        onChange: function(e) {
                            return t.set({
                                fill: e
                            })
                        },
                        store: n
                    }), (0, a.jsx)(Kn.Af, {
                        onValueChange: function(e) {
                            t.set({
                                radius: e
                            })
                        },
                        value: t.radius,
                        style: {
                            width: "50px",
                            marginLeft: "10px"
                        },
                        min: 1,
                        max: 500
                    })]
                })
            }));
            (0, S.D8)("star", ot);
            var rt = (0, de.observer)((function(e) {
                    var n = e.store;
                    return (0, a.jsx)("button", {
                        className: x().workspaceBtn,
                        onClick: function() {
                            n.addPage()
                        },
                        children: (0, a.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M12.0001 8.32715V15.6535",
                                stroke: "#36373C",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                d: "M15.6666 11.9904H8.33331",
                                stroke: "#36373C",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z",
                                stroke: "#36373C",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                })),
                it = (0, de.observer)((function(e) {
                    var n = e.store;
                    return (0, a.jsx)("button", {
                        className: x().workspaceBtn,
                        onClick: function() {
                            var e;
                            null === (e = n.activePage) || void 0 === e || e.clone()
                        },
                        children: (0, a.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M11.4523 2.25C10.2377 2.25 9.19022 2.67319 8.43826 3.44465C7.73192 4.16933 7.33393 5.15179 7.25999 6.25H6.72C5.39096 6.25 4.25447 6.72543 3.4539 7.58421C2.65878 8.43715 2.25 9.60833 2.25 10.9096V17.0904C2.25 18.3907 2.65657 19.562 3.45107 20.4154C4.25121 21.2749 5.3881 21.75 6.72 21.75H13.28C14.6119 21.75 15.7488 21.2749 16.5489 20.4154C17.3434 19.562 17.75 18.3907 17.75 17.0904V16.7459C18.9122 16.6997 19.9074 16.2592 20.6201 15.4937C21.3688 14.6897 21.75 13.5882 21.75 12.3696V6.63035C21.75 5.41178 21.3688 4.31027 20.6201 3.50625C19.8658 2.69619 18.7952 2.25 17.545 2.25H11.4523ZM17.75 15.2443C18.5276 15.2006 19.1166 14.9073 19.5224 14.4715C19.9687 13.9922 20.25 13.2786 20.25 12.3696V6.63035C20.25 5.72143 19.9687 5.00776 19.5224 4.52848C19.0817 4.05524 18.4248 3.75 17.545 3.75H11.4523C10.5981 3.75 9.95274 4.0399 9.51242 4.49165C9.10968 4.90484 8.83423 5.49955 8.76462 6.25H13.28C14.6119 6.25 15.7488 6.72513 16.5489 7.58457C17.3434 8.43795 17.75 9.60925 17.75 10.9096V15.2443ZM4.5511 8.60703C4.05788 9.13611 3.75 9.91974 3.75 10.9096V17.0904C3.75 18.0812 4.05677 18.8647 4.54893 19.3933C5.03545 19.9159 5.75857 20.25 6.72 20.25H13.28C14.2414 20.25 14.9645 19.9159 15.4511 19.3933C15.9432 18.8647 16.25 18.0812 16.25 17.0904V10.9096C16.25 9.91882 15.9432 9.13531 15.4511 8.60668C14.9645 8.0841 14.2414 7.75 13.28 7.75H6.72C5.76238 7.75 5.03886 8.0838 4.5511 8.60703ZM10.75 11.5C10.75 11.0858 10.4142 10.75 10 10.75C9.58579 10.75 9.25 11.0858 9.25 11.5V13.25H7.5C7.08579 13.25 6.75 13.5858 6.75 14C6.75 14.4142 7.08579 14.75 7.5 14.75H9.25V16.5C9.25 16.9142 9.58579 17.25 10 17.25C10.4142 17.25 10.75 16.9142 10.75 16.5V14.75H12.5C12.9142 14.75 13.25 14.4142 13.25 14C13.25 13.5858 12.9142 13.25 12.5 13.25H10.75V11.5Z",
                                fill: "#36373C"
                            })
                        })
                    })
                })),
                at = (0, de.observer)((function(e) {
                    var n = e.store;
                    return (0, a.jsx)("button", {
                        className: (0, s.Z)(x().workspaceBtn, 1 == n.pages.length && "hidden"),
                        onClick: function() {
                            n.deletePages([n.activePage.id])
                        },
                        children: (0, a.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M19.3247 9.46826C19.3247 9.46826 18.7817 16.2033 18.4667 19.0403C18.3167 20.3953 17.4797 21.1893 16.1087 21.2143C13.4997 21.2613 10.8877 21.2643 8.27967 21.2093C6.96067 21.1823 6.13767 20.3783 5.99067 19.0473C5.67367 16.1853 5.13367 9.46826 5.13367 9.46826",
                                stroke: "#1F2128",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                d: "M20.708 6.23975H3.75",
                                stroke: "#1F2128",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                d: "M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",
                                stroke: "#1F2128",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                })),
                st = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = n.pages.findIndex((function(e) {
                            return e.id == n.activePage.id
                        }));
                    return (0, a.jsx)("button", {
                        className: (0, s.Z)(x().workspaceBtn, 0 == t && x().disabled, 1 == n.pages.length && "hidden"),
                        onClick: function() {
                            var e;
                            null === (e = n.activePage) || void 0 === e || e.setZIndex(t - 1), n.selectPage(n.pages[t - 1].id)
                        },
                        disabled: 0 == t && !0,
                        children: (0, a.jsx)("svg", {
                            style: {
                                transform: "rotate(180deg)"
                            },
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("g", {
                                id: "Iconly/Light-outline/Arrow - Down 2",
                                children: (0, a.jsx)("g", {
                                    id: "Arrow - Down 2",
                                    children: (0, a.jsx)("path", {
                                        id: "Arrow - Down 2_2",
                                        d: "M4.24106 7.7459C4.53326 7.44784 4.99051 7.42074 5.31272 7.66461L5.40503 7.7459L12 14.4734L18.595 7.7459C18.8872 7.44784 19.3444 7.42074 19.6666 7.66461L19.7589 7.7459C20.0511 8.04396 20.0777 8.51037 19.8386 8.83904L19.7589 8.93321L12.582 16.2541C12.2898 16.5522 11.8325 16.5793 11.5103 16.3354L11.418 16.2541L4.24106 8.93321C3.91965 8.60534 3.91965 8.07376 4.24106 7.7459Z",
                                        fill: "#1F2128"
                                    })
                                })
                            })
                        })
                    })
                })),
                lt = (0, de.observer)((function(e) {
                    var n = e.store,
                        t = n.pages.findIndex((function(e) {
                            return e.id == n.activePage.id
                        }));
                    return (0, a.jsx)("button", {
                        className: (0, s.Z)(x().workspaceBtn, n.pages.length - 1 == t && x().disabled, 1 == n.pages.length && "hidden"),
                        onClick: function() {
                            var e;
                            null === (e = n.activePage) || void 0 === e || e.setZIndex(t + 1), n.selectPage(n.pages[t + 1].id)
                        },
                        disabled: t == n.pages.length - 1 && !0,
                        children: (0, a.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("g", {
                                id: "Iconly/Light-outline/Arrow - Down 2",
                                children: (0, a.jsx)("g", {
                                    id: "Arrow - Down 2",
                                    children: (0, a.jsx)("path", {
                                        id: "Arrow - Down 2_2",
                                        d: "M4.24106 7.7459C4.53326 7.44784 4.99051 7.42074 5.31272 7.66461L5.40503 7.7459L12 14.4734L18.595 7.7459C18.8872 7.44784 19.3444 7.42074 19.6666 7.66461L19.7589 7.7459C20.0511 8.04396 20.0777 8.51037 19.8386 8.83904L19.7589 8.93321L12.582 16.2541C12.2898 16.5522 11.8325 16.5793 11.5103 16.3354L11.418 16.2541L4.24106 8.93321C3.91965 8.60534 3.91965 8.07376 4.24106 7.7459Z",
                                        fill: "#1F2128"
                                    })
                                })
                            })
                        })
                    })
                })),
                ct = function(e) {
                    var n = e.onClick;
                    return (0, a.jsx)("svg", {
                        onClick: n,
                        className: x().hoverEffect,
                        width: "17",
                        height: "17",
                        viewBox: "0 0 17 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M15.3571 15.612H9.14863M1 16L5.30655 14.3436C5.58201 14.2377 5.71974 14.1847 5.84859 14.1155C5.96305 14.0541 6.07216 13.9832 6.17479 13.9036C6.29033 13.8139 6.39467 13.7096 6.60336 13.5009L15.3571 4.74715C16.2143 3.88993 16.2143 2.50012 15.3571 1.64291C14.4999 0.785698 13.1101 0.785697 12.2529 1.64291L3.49913 10.3966C3.29044 10.6053 3.1861 10.7097 3.09644 10.8252C3.0168 10.9278 2.94589 11.0369 2.88445 11.1514C2.81528 11.2803 2.76231 11.418 2.65637 11.6934L1 16ZM1 16L2.59722 11.8473C2.71152 11.5501 2.76866 11.4015 2.86668 11.3335C2.95234 11.274 3.05834 11.2515 3.16078 11.2711C3.27799 11.2934 3.39056 11.406 3.61569 11.6311L5.36888 13.3843C5.59401 13.6095 5.70658 13.722 5.72896 13.8392C5.74852 13.9417 5.72603 14.0477 5.66655 14.1333C5.59849 14.2314 5.44991 14.2885 5.15274 14.4028L1 16Z",
                            stroke: "#242124",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                dt = function(e) {
                    var n = e.userToken,
                        t = e.templateId,
                        c = e.userTemplateId,
                        v = e.categoryId,
                        k = (0, _.Z)("(max-width: 1440px)"),
                        H = (0, j.$G)("design").t,
                        F = H("content", {
                            returnObjects: !0
                        }),
                        U = H("content.polotno.sidePanel", {
                            returnObjects: !0
                        }),
                        O = (0, l.useRouter)(),
                        A = O.query.category_id,
                        q = "undefined" !== A && void 0 !== A ? A : null,
                        G = (0, u.useState)(null),
                        z = G[0],
                        Y = G[1],
                        X = F.input,
                        J = (0, u.useState)(X),
                        $ = J[0],
                        K = J[1],
                        ne = (0, u.useState)(!1),
                        te = ne[0],
                        oe = ne[1],
                        re = (0, u.useState)([]),
                        ie = re[0],
                        se = re[1],
                        le = (0, r.Z)(E(), 2),
                        ce = le[0],
                        de = le[1],
                        ue = (0, p.I0)(),
                        pe = (0, T.Z)((function(e) {
                            return e.mainReducer.user
                        })),
                        he = (0, u.useState)(!1),
                        Ce = he[0],
                        fe = he[1],
                        me = (0, p.v9)((function(e) {
                            return e.designReducer.initialSection
                        })),
                        ge = (0, r.Z)(Jn(), 1)[0],
                        ve = (0, p.v9)((function(e) {
                            return e.designReducer.sidePanelDefaultOpen
                        })),
                        xe = (0, u.useState)(!1),
                        _e = xe[0],
                        we = xe[1],
                        je = (0, u.useState)(null !== c && void 0 !== c ? c : O.query.type),
                        ke = je[0],
                        be = je[1],
                        ye = (0, u.useState)(!1),
                        Le = ye[0],
                        Se = ye[1],
                        Ze = (0, R.A)(n),
                        Ne = (0, u.useRef)(null),
                        Pe = (0, u.useRef)(null),
                        Me = (0, u.useRef)(null),
                        He = (0, u.useState)(null),
                        De = He[0],
                        Ie = He[1],
                        Ee = (0, u.useRef)(null),
                        Re = (0, u.useRef)(null),
                        Te = (0, u.useState)(null),
                        Be = Te[0],
                        Ve = Te[1],
                        We = (0, u.useRef)(null),
                        Fe = (0, u.useRef)(null),
                        Ue = (0, u.useState)(null),
                        Oe = Ue[0],
                        Ae = Ue[1],
                        qe = (0, u.useRef)(null),
                        Ge = (0, u.useRef)(null),
                        ze = (0, u.useState)(null),
                        Ye = ze[0],
                        Xe = ze[1],
                        Je = (0, u.useRef)(null),
                        $e = (0, u.useState)(null),
                        Ke = $e[0],
                        Qe = $e[1],
                        en = (0, u.useRef)(null),
                        nn = (0, u.useRef)(null),
                        tn = (0, u.useState)(null),
                        on = tn[0],
                        rn = tn[1],
                        an = (0, u.useRef)(null),
                        sn = (0, u.useRef)(null),
                        ln = (0, u.useState)(!1),
                        cn = ln[0],
                        dn = ln[1],
                        un = (0, u.useState)(!1),
                        pn = un[0],
                        hn = un[1],
                        Cn = (0, p.v9)((function(e) {
                            return e.designReducer.hintStage
                        }));
                    (0, u.useEffect)((function() {
                        if (O.query.type !== ke) {
                            var e = "/design/".concat(ke);
                            if ("en" !== O.locale && (e = "/".concat(O.locale) + e), v && (e += "/".concat(v)), Object.keys(O.query).length > 0) {
                                var n = new URLSearchParams(O.query).toString();
                                e += "?".concat(n)
                            }
                            window.history.replaceState(null, "", e)
                        }
                    }), [ke, O, v]), (0, u.useEffect)((function() {
                        var e = function(e) {
                            !Ee.current || Ee.current.contains(e.target) || Re.current.contains(e.target) || document.querySelector(".modal") || Ie(!1), !qe.current || qe.current.contains(e.target) || Ge.current.contains(e.target) || document.querySelector(".modal") || Ae(!1), !Je.current || Je.current.contains(e.target) || document.querySelector(".modal") || Xe(!1), !an.current || an.current.contains(e.target) || sn.current.contains(e.target) || rn(!1), !en.current || en.current.contains(e.target) || nn.current.contains(e.target) || Qe(!1), !We.current || We.current.contains(e.target) || Fe.current.contains(e.target) || document.querySelector(".modal") || Ve(!1)
                        };
                        return document.addEventListener("click", e, !0),
                            function() {
                                document.removeEventListener("click", e, !0)
                            }
                    }), []), (0, u.useEffect)((function() {
                        I(F.polotno, S.Yh), Pe.current || (Pe.current = document.querySelector(".polotno-side-tabs-container"))
                    }), [F.polotno]), (0, u.useEffect)((function() {
                        var e = (0, d.createStore)({
                            key: "5WZgkgr7CZj0XSGxxdjj",
                            showCredit: !1
                        });
                        e.setSize(Number(O.query.width) || 1080, Number(O.query.height) || 1080), (0, o.Z)((function() {
                            var o, r, a, s, l, c, d, u, p, C, f;
                            return (0, i.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, e.waitLoading()];
                                    case 1:
                                        return i.sent(), o = {
                                            headers: {
                                                Authorization: n
                                            }
                                        }, r = null, ke && n ? [4, h.V0.get("/user/templates/".concat(ke), o)] : [3, 4];
                                    case 2:
                                        return a = i.sent(), r = a.data, [4, h.V0.get("/user/templates/meta/".concat(ke), o)];
                                    case 3:
                                        return s = i.sent(), K(s.data.title), [3, 13];
                                    case 4:
                                        if (!ke || !Ze) return [3, 9];
                                        i.label = 5;
                                    case 5:
                                        return i.trys.push([5, 7, , 8]), [4, h.V0.get("/user/templates/non/".concat(ke, "?user=").concat(Ze))];
                                    case 6:
                                        return l = i.sent(), r = l.data, [3, 8];
                                    case 7:
                                        return c = i.sent(), O.replace("/design"), console.log(c), [3, 8];
                                    case 8:
                                        return [3, 13];
                                    case 9:
                                        return t ? [4, h.V0.get("/templates/single/".concat(t))] : [3, 12];
                                    case 10:
                                        return d = i.sent(), u = d.data.data, d.data.title && $ === X && K(d.data.title), [4, h.V0.get(u)];
                                    case 11:
                                        return p = i.sent(), r = p.data, [3, 13];
                                    case 12:
                                        e.addPage(), i.label = 13;
                                    case 13:
                                        r && e.loadJSON(r), i.label = 14;
                                    case 14:
                                        return i.trys.push([14, 16, , 17]), [4, h.V0.get("/categories")];
                                    case 15:
                                        return C = i.sent(), se(C.data), [3, 17];
                                    case 16:
                                        return f = i.sent(), console.log(f), [3, 17];
                                    case 17:
                                        return [2]
                                }
                            }))
                        }))(), Y(e)
                    }), []);
                    var fn = (0, u.useCallback)((function() {}), [$, te, q, z, Ze, ke, n]);
                    (0, u.useEffect)((function() {
                        return Le ? O.events.on("routeChangeStart", fn) : O.events.off("routeChangeStart", fn),
                            function() {
                                O.events.off("routeChangeStart", fn)
                            }
                    }), [fn, Le, O.events]), (0, u.useEffect)((function() {
                        return window.onbeforeunload = Le ? function() {
                                return !0
                            } : null,
                            function() {
                                window.onbeforeunload = null
                            }
                    }), [Le]), (0, u.useEffect)((function() {
                        if (z) {
                            var e = null,
                                t = new Date,
                                o = !0,
                                r = z.on("change", (function() {
                                    if (o && (t = new Date, o = !1), !te) {
                                        var r = t.getTime() + 1e4 < (new Date).getTime();
                                        e && clearTimeout(e);
                                        var i = function() {
                                            e = null, D(z, ke, n, te, oe, $, Ze, be, q ? {
                                                categoryId: q
                                            } : void 0), t = new Date, Se(!1)
                                        };
                                        Se(!0), r ? i() : e = setTimeout((function() {
                                            i(), o = !0
                                        }), 2e3)
                                    }
                                }));
                            return function() {
                                e && clearTimeout(e), null === r || void 0 === r || r()
                            }
                        }
                    }), [z, te, Ze, ke, n, $, q]), (0, u.useEffect)((function() {
                        z && !_e && ve && (z.openSidePanel(me), we(!0))
                    }), [me, _e, ve, z]), (0, u.useEffect)((function() {
                        if (z) {
                            var e = 0,
                                n = null,
                                t = z.on("change", (function() {
                                    e++, n && clearTimeout(n), n = setTimeout((function() {
                                        ue((0, m.Q9)(e)), e = 0
                                    }), 200)
                                }));
                            return function() {
                                null === t || void 0 === t || t(), n && clearTimeout(n)
                            }
                        }
                    }), [ue, z]);
                    var mn = (0, u.useCallback)((function(e) {
                        for (var n = 0; n < e.pages.length; n++) {
                            var t = e.pages[n].children.find((function(e) {
                                return "watermark" == e.name
                            }));
                            if ("null == pe.plan) t || e.pages[n].addElement({
                                type: "image",
                                x: e.width - 166,
                                y: e.height - 126,
                                src: "/design/watermark.png",
                                name: "watermark",
                                width: 136,
                                height: 96,
                                keepRatio: !0,
                                selectable: !1,
                                draggable: !1,
                                showInExport: !0,
                                resizeable: !1,
                                contentEditable: !1,
                                removeable: !0,
                                alwaysOnTop: !0
                            });
                            else {
                                var o = e.pages[n].children.find((function(e) {
                                    return "watermark" == e.name
                                }));
                                o && e.deleteElements([o.id])
                            }
                        }
                    }), [pe]);
                    (0, u.useEffect)((function() {
                        if (z) {
                            mn(z);
                            var e = z.on("change", (function() {
                                mn(z)
                            }));
                            return function() {
                                null === e || void 0 === e || e()
                            }
                        }
                    }), [z, mn]);
                    var gn = function() {
                            (0, g.Z)("view_checkout_form"), ue((0, m.hr)(!0)), ue((0, m.Ur)("monthly")), ue((0, m.KK)(null))
                        },
                        vn = function() {
                            var e = (0, o.Z)((function() {
                                return (0, i.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return n ? te ? [2] : (Se(!1), [4, D(z, String(O.query.type), n, te, oe, $, void 0, void 0, q ? {
                                                categoryId: q
                                            } : void 0)]) : (ue((0, m.aN)("signUp")), ue((0, m.Ps)(null)), [2]);
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        xn = function() {
                            var e = (0, o.Z)((function() {
                                var e, t, o, r = arguments;
                                return (0, i.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = r.length > 0 && void 0 !== r[0] ? r[0] : $, n && ke ? (t = JSON.stringify({
                                                title: e
                                            }), o = {
                                                headers: {
                                                    Authorization: n
                                                }
                                            }, [4, h.V0.patch("user/templates/".concat(ke, "/title"), t, o).then((function(e) {
                                                200 === e.status ? console.log("done") : console.log("Something went wrong, please try again.")
                                            })).catch((function(e) {
                                                console.log(e)
                                            }))]) : [2];
                                        case 1:
                                            return i.sent(), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _n = function() {
                            Ce && xn(), fe(!Ce)
                        };
                    return (0, S.bN)("text", {
                        anchorCornerRadius: 10,
                        anchorStroke: "#2469F6",
                        borderStroke: "#2469F6"
                    }), z && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            style: {
                                height: de + "px"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: x().header,
                                children: [(0, a.jsxs)("div", {
                                    className: x().wrapperLeft,
                                    children: [(0, a.jsxs)(B.Z, {
                                        onClickRedirect: "/",
                                        className: (0, s.Z)(x().link, x().pc),
                                        children: [(0, a.jsx)("svg", {
                                            width: "9",
                                            height: "14",
                                            viewBox: "0 0 9 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M7.66431 13.2122L1.45215 7L7.75489 0.697259",
                                                stroke: "#1F2128",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        }), F.home]
                                    }), (0, a.jsx)(B.Z, {
                                        ref: Re,
                                        className: (0, s.Z)(x().file, x().link, "unselectable"),
                                        focus: !!De,
                                        onClick: function(e) {
                                            Ie(De ? null : e.currentTarget)
                                        },
                                        children: F.file.file
                                    }), (0, a.jsxs)(B.Z, {
                                        ref: Ge,
                                        className: (0, s.Z)(x().file, x().link, "unselectable"),
                                        focus: !!Oe,
                                        onClick: function(e) {
                                            Ae(Oe ? null : e.currentTarget)
                                        },
                                        children: ["free" === pe.plan || null === pe.email ? (0, a.jsx)("svg", {
                                            className: x().crown,
                                            width: "17",
                                            height: "17",
                                            viewBox: "7 7 25 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M9.40499 18.445C9.24069 18.0616 9.59037 17.6574 9.9934 17.7649L16.0952 19.3921C16.3294 19.4545 16.5747 19.34 16.6772 19.1204L19.5469 12.9709C19.7265 12.5862 20.2735 12.5862 20.4531 12.9709L23.3228 19.1204C23.4253 19.34 23.6706 19.4545 23.9048 19.3921L30.0066 17.7649C30.4096 17.6574 30.7593 18.0616 30.595 18.445L26.6299 27.697C26.5511 27.8808 26.3703 28 26.1703 28H13.8297C13.6297 28 13.4489 27.8808 13.3701 27.697L9.40499 18.445Z",
                                                fill: "#FFBE0B"
                                            })
                                        }) : (0, a.jsx)("svg", {
                                            className: x().crown,
                                            width: "17",
                                            height: "17",
                                            viewBox: "7 7 25 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M9.40499 18.445C9.24069 18.0616 9.59037 17.6574 9.9934 17.7649L16.0952 19.3921C16.3294 19.4545 16.5747 19.34 16.6772 19.1204L19.5469 12.9709C19.7265 12.5862 20.2735 12.5862 20.4531 12.9709L23.3228 19.1204C23.4253 19.34 23.6706 19.4545 23.9048 19.3921L30.0066 17.7649C30.4096 17.6574 30.7593 18.0616 30.595 18.445L26.6299 27.697C26.5511 27.8808 26.3703 28 26.1703 28H13.8297C13.6297 28 13.4489 27.8808 13.3701 27.697L9.40499 18.445Z",
                                                fill: "#E3E3E3"
                                            })
                                        }), U.resize]
                                    }), (0, a.jsxs)("div", {
                                        className: (0, s.Z)(x().cloud, te && x().saving, pe.email && x().authorized, "unselectable"),
                                        onClick: vn,
                                        children: [(0, a.jsxs)("svg", {
                                            width: "29",
                                            height: "18",
                                            viewBox: "0 0 29 18",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, a.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M7.67893 3.05834C6.74004 4.11115 6.22257 5.59535 6.22257 7.29395H5.93191C3.45369 7.40796 1.47949 9.45325 1.47949 11.9596C1.47949 14.5392 3.57064 16.6304 6.15021 16.6304V16.6328H20.298V16.6301C21.6326 16.6301 22.9884 16.2228 23.998 15.4992C25.0004 14.7807 25.6388 13.7721 25.6388 12.5393C25.6388 11.154 25.374 9.4703 24.2993 8.24722C23.2519 7.05512 21.3267 6.1834 17.7356 6.63494L17.7191 6.63941L17.7184 6.63711L17.7177 6.6372L17.717 6.63168C16.7218 2.9598 14.3517 1.35352 11.8113 1.35352C9.99343 1.35352 8.61138 2.01276 7.67893 3.05834ZM20.4137 17.6292C21.8982 17.6065 23.414 17.1481 24.5805 16.312C25.7846 15.449 26.6388 14.1623 26.6388 12.5393C26.6388 11.069 26.3658 9.08404 25.0505 7.58716C23.8114 6.17689 21.7424 5.30244 18.4312 5.55896C17.2089 2.06643 14.6587 0.353516 11.8113 0.353516C9.73271 0.353516 8.07041 1.11691 6.9326 2.39276C5.99059 3.44907 5.43174 4.82942 5.27107 6.35667C2.5567 6.77914 0.479492 9.12681 0.479492 11.9596C0.479492 15.0445 2.9428 17.5541 6.00976 17.6287V17.6328H20.4137V17.6292Z",
                                                fill: "#1F2128"
                                            }), (0, a.jsx)("circle", {
                                                cx: "24.2489",
                                                cy: "13.6268",
                                                r: "4.0057",
                                                fill: Le ? "#ED695E" : te ? "#F4BE4F" : "#61C454"
                                            })]
                                        }), (0, a.jsx)("span", {
                                            children: !ke || Le ? F.unsaved : te ? F.saving : F.saved
                                        })]
                                    })]
                                }), ce >= 768 && pe.uuid && (0, a.jsx)(a.Fragment, {
                                    children: Ce ? (0, a.jsx)("div", {
                                        className: x().nameInput,
                                        children: (0, a.jsx)("form", {
                                            onSubmit: _n,
                                            children: (0, a.jsx)("input", {
                                                onChange: function(e) {
                                                    return K(e.target.value)
                                                },
                                                defaultValue: $,
                                                onBlur: _n,
                                                autoFocus: !0
                                            })
                                        })
                                    }) : (0, a.jsxs)("div", {
                                        className: x().check,
                                        children: [(0, a.jsx)("p", {
                                            className: x().titleName,
                                            onClick: _n,
                                            children: (0, a.jsx)("span", {
                                                children: $
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: x().pensilHolder,
                                            onClick: function() {
                                                fe(!Ce)
                                            },
                                            children: (0, a.jsx)(ct, {})
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: x().btnWrapper,
                                    children: [null === pe.email && (0, a.jsx)("div", {
                                        className: x().logInBtn,
                                        children: (0, a.jsx)(V.Z, {
                                            reff: Me,
                                            variant: "root",
                                            onClick: function() {
                                                ue((0, m.Ps)(null)), ue((0, m.aN)("logIn"))
                                            },
                                            children: F.logIn
                                        })
                                    }), ce >= 768 ? (0, a.jsxs)(a.Fragment, {
                                        children: ["free" === pe.plan && (ce >= 1024 ? (0, a.jsx)("div", {
                                            className: x().upgradeBtn,
                                            children: (0, a.jsx)(W.Z, {
                                                remainingDownloads: pe.remainingDownloads,
                                                br: !1
                                            })
                                        }) : (0, a.jsx)("div", {
                                            className: x().laptopItem,
                                            children: (0, a.jsx)(b(), {
                                                src: C,
                                                alt: "icon",
                                                onClick: gn
                                            })
                                        })), ce >= 1024 ? (0, a.jsx)("div", {
                                            className: (0, s.Z)(x().downloadButton, !pe.email && x().downloadButtonUnlogged),
                                            children: (0, a.jsx)(V.Z, {
                                                variant: "yellow",
                                                reff: Fe,
                                                onClick: function(e) {
                                                    Ve(Be ? null : e.currentTarget)
                                                },
                                                children: (0, a.jsx)("div", {
                                                    className: x().downloadWrapper,
                                                    children: F.download
                                                })
                                            })
                                        }) : (0, a.jsx)("svg", {
                                            ref: Fe,
                                            onClick: function(e) {
                                                Ve(Be ? null : e.currentTarget)
                                            },
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 18 18",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5",
                                                stroke: "#36373C",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    }) : (0, a.jsxs)("div", {
                                        className: x().mobileWrapper,
                                        children: [(0, a.jsx)("div", {
                                            className: x().mobileItem,
                                            children: (0, a.jsx)("svg", {
                                                ref: nn,
                                                onClick: function(e) {
                                                    dn(!cn)
                                                },
                                                width: "32",
                                                height: "32",
                                                viewBox: "78 53 26 7",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, a.jsx)("path", {
                                                    d: "M84.1973 58.1605C83.6373 58.1605 83.1573 57.9705 82.7573 57.5905C82.3573 57.1905 82.1573 56.6905 82.1573 56.0905C82.1573 55.5105 82.3573 55.0305 82.7573 54.6505C83.1573 54.2505 83.6373 54.0505 84.1973 54.0505C84.7573 54.0505 85.2273 54.2405 85.6073 54.6205C85.9873 55.0005 86.1773 55.4905 86.1773 56.0905C86.1773 56.6905 85.9773 57.1905 85.5773 57.5905C85.1973 57.9705 84.7373 58.1605 84.1973 58.1605ZM90.9942 58.1605C90.4342 58.1605 89.9542 57.9705 89.5542 57.5905C89.1542 57.1905 88.9542 56.6905 88.9542 56.0905C88.9542 55.5105 89.1542 55.0305 89.5542 54.6505C89.9542 54.2505 90.4342 54.0505 90.9942 54.0505C91.5542 54.0505 92.0242 54.2405 92.4042 54.6205C92.7842 55.0005 92.9742 55.4905 92.9742 56.0905C92.9742 56.6905 92.7742 57.1905 92.3742 57.5905C91.9942 57.9705 91.5342 58.1605 90.9942 58.1605ZM97.7911 58.1605C97.2311 58.1605 96.7511 57.9705 96.3511 57.5905C95.9511 57.1905 95.7511 56.6905 95.7511 56.0905C95.7511 55.5105 95.9511 55.0305 96.3511 54.6505C96.7511 54.2505 97.2311 54.0505 97.7911 54.0505C98.3511 54.0505 98.8211 54.2405 99.2011 54.6205C99.5811 55.0005 99.7711 55.4905 99.7711 56.0905C99.7711 56.6905 99.5711 57.1905 99.1711 57.5905C98.7911 57.9705 98.3311 58.1605 97.7911 58.1605Z"
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: (0, s.Z)(x().mobileItem, null == pe.email && x().emptyMobileCrown),
                                            children: "free" === pe.plan ? (0, a.jsx)(b(), {
                                                src: C,
                                                alt: "icon",
                                                onClick: gn
                                            }) : (0, a.jsx)(b(), {
                                                src: f,
                                                alt: "icon"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: x().mobileItem,
                                            children: [" ", (0, a.jsx)("svg", {
                                                ref: Fe,
                                                onClick: function() {
                                                    hn(!pn)
                                                },
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, a.jsx)("path", {
                                                    d: "M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5",
                                                    stroke: "#36373C",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            })]
                                        })]
                                    }), Ne.current && Cn == (t ? 0 : 1) && (0, a.jsx)(ae, {
                                        placement: "right-start",
                                        arrowPosition: "left",
                                        anchorEl: Ne,
                                        offsetX: 12,
                                        offsetY: 134,
                                        firstStage: t ? 2 : 1
                                    }), Pe.current && Cn == (t ? 1 : 2) && (0, a.jsx)(ae, {
                                        placement: "right-start",
                                        arrowPosition: "left",
                                        anchorEl: Pe,
                                        offsetX: 12,
                                        offsetY: 294,
                                        firstStage: t ? 2 : 1
                                    }), Pe.current && Cn == (t ? 2 : 3) && (0, a.jsx)(ae, {
                                        placement: "right-start",
                                        arrowPosition: "left",
                                        anchorEl: Pe,
                                        offsetX: 12,
                                        offsetY: 69,
                                        firstStage: t ? 2 : 1
                                    }), Pe.current && Cn == (t ? 3 : 4) && (0, a.jsx)(ae, {
                                        placement: "top-end",
                                        arrowPosition: "left",
                                        anchorEl: Me,
                                        offsetX: 0,
                                        offsetY: -4,
                                        firstStage: t ? 2 : 1
                                    }), (0, a.jsx)(ee.Z, {
                                        designName: $,
                                        userTemplateId: ke,
                                        onCopyClick: function() {
                                            return Ie(!1)
                                        },
                                        onDesignNameChange: K,
                                        onDesignNameSubmit: xn,
                                        fileTooltip: De,
                                        fileTooltipRef: Ee,
                                        categories: ie,
                                        onClickDownload: function() {
                                            Ve(Fe.current), Ie(!1)
                                        },
                                        offsetTop: 4,
                                        offsetLeft: k ? -7 : 0,
                                        designMode: !0,
                                        forDesign: !0,
                                        userToken: n,
                                        templateId: t,
                                        onSaveClick: function() {
                                            vn(), Ie(!1)
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: (0, s.Z)(!Oe && x().emptyDiv),
                                        children: (0, a.jsx)(ee.Z, {
                                            designName: $,
                                            userTemplateId: ke,
                                            onCopyClick: function() {
                                                return Ie(!1)
                                            },
                                            onDesignNameChange: K,
                                            onDesignNameSubmit: xn,
                                            fileTooltip: Oe,
                                            fileTooltipRef: qe,
                                            categories: ie,
                                            store: z,
                                            onClickDownload: function() {
                                                Ve(Fe.current), Ie(!1)
                                            },
                                            initialWindow: "resize",
                                            forDesign: !0,
                                            designMode: !0,
                                            goBackBtn: !1,
                                            offsetTop: 4,
                                            offsetLeft: k ? 7 : 4
                                        })
                                    }), (0, a.jsx)(ee.Z, {
                                        designName: $,
                                        userTemplateId: ke,
                                        onCopyClick: function() {
                                            return Ie(!1)
                                        },
                                        onDesignNameChange: K,
                                        onDesignNameSubmit: xn,
                                        fileTooltip: Ye,
                                        fileTooltipRef: Je,
                                        categories: ie,
                                        onClickDownload: function() {
                                            Ve(Fe.current), Ie(!1)
                                        },
                                        initialWindow: "categories",
                                        forDesign: !0,
                                        designMode: !0,
                                        goBackBtn: !1
                                    }), ce <= 768 && (0, a.jsx)(ee.Z, {
                                        designName: $,
                                        userTemplateId: ke,
                                        onCopyClick: function() {
                                            return Ie(!1)
                                        },
                                        onDesignNameChange: K,
                                        onDesignNameSubmit: xn,
                                        fileTooltip: Ke,
                                        fileTooltipRef: en,
                                        categories: ie,
                                        onClickDownload: function() {
                                            Ve(Fe.current), Ie(!1)
                                        },
                                        designMode: !0,
                                        goBackBtn: !0,
                                        store: z,
                                        isOpenDrawer: cn,
                                        setIsOpenDrawer: dn,
                                        isOpenDownloadDrawer: pn,
                                        setIsOpenDownloadDrawer: hn,
                                        mobile: !0
                                    }), (0, a.jsx)(Q, {
                                        store: z,
                                        downloadName: $,
                                        downloadTooltip: Be,
                                        downloadTooltipRef: We,
                                        isOpenDrawer: pn,
                                        setIsOpenDrawer: hn,
                                        mobile: ce <= 768
                                    }), pe.email && ce >= 1024 && (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("div", {
                                            ref: sn,
                                            className: x().avatar,
                                            onClick: function(e) {
                                                rn(on ? null : e.currentTarget)
                                            },
                                            children: pe.avatar ? (0, a.jsx)("img", {
                                                src: pe.avatar,
                                                alt: "profile image"
                                            }) : (0, a.jsx)(w.Z, {
                                                variant: "circular",
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }), (0, a.jsx)(M.Z, {
                                            profileTooltip: on,
                                            profileTooltipRef: an,
                                            offsetRight: 20
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                style: {
                                    height: "calc(100% - ".concat(ce > 768 ? 56 : 48, "px)")
                                },
                                children: (0, a.jsxs)(y.PolotnoContainer, {
                                    className: x().polotnoContainer,
                                    children: [(0, a.jsx)(y.SidePanelWrap, {
                                        children: (0, a.jsx)("div", {
                                            ref: Ne,
                                            className: (0, s.Z)(x().sidePanelWrap, "bp4-dark"),
                                            children: (0, a.jsx)(Z.SidePanel, {
                                                store: z,
                                                defaultSection: me,
                                                sections: ge
                                            })
                                        })
                                    }), (0, a.jsxs)(y.WorkspaceWrap, {
                                        children: [(0, a.jsxs)("div", {
                                            className: x().toolbar,
                                            children: [(0, a.jsx)(P.ZoomButtons, {
                                                store: z
                                            }), (0, a.jsx)(N.Toolbar, {
                                                store: z
                                            })]
                                        }), z.pages.length > 0 && (0, a.jsx)(L.Workspace, {
                                            store: z,
                                            backgroundColor: "#F8F9FC",
                                            components: {
                                                PageControls: function(e) {
                                                    e.width, e.height;
                                                    var n = e.xPadding,
                                                        t = e.yPadding;
                                                    return (0, a.jsxs)("div", {
                                                        className: x().workspaceBtnsWrap,
                                                        style: {
                                                            top: t - 39 + "px",
                                                            right: n + "px"
                                                        },
                                                        children: [(0, a.jsx)(st, {
                                                            store: z
                                                        }), (0, a.jsx)(lt, {
                                                            store: z
                                                        }), (0, a.jsx)(rt, {
                                                            store: z
                                                        }), (0, a.jsx)(it, {
                                                            store: z
                                                        }), (0, a.jsx)(at, {
                                                            store: z
                                                        })]
                                                    })
                                                }
                                            }
                                        })]
                                    })]
                                })
                            }), (0, a.jsxs)("svg", {
                                display: "none",
                                children: [(0, a.jsx)("symbol", {
                                    id: "paper",
                                    viewBox: "0 0 17 17",
                                    children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M6.17741 1.03443C6.06473 1.07923 5.92228 1.22025 5.85275 1.35586C5.82064 1.41849 5.20341 3.10228 4.48109 5.09761C3.24798 8.50403 3.1679 8.7384 3.16937 8.93697C3.17106 9.17032 3.22598 9.29051 3.39553 9.43186C3.70854 9.69277 4.17658 9.58563 4.36647 9.2096C4.39467 9.15376 4.96092 7.60263 5.62483 5.76266C6.28872 3.9227 6.83774 2.40784 6.84487 2.39633C6.85473 2.38035 15.0174 3.98156 15.051 4.00606C15.067 4.01767 14.319 6.30112 13.8622 7.63549C12.3763 11.9757 11.7882 13.3063 10.973 14.1729C10.5737 14.5975 10.1986 14.8343 9.65886 15.0027C8.95867 15.2212 8.38601 15.1027 7.98119 14.6555C7.80575 14.4617 7.60991 14.0666 7.53364 13.7524C7.47124 13.4954 7.40483 12.8598 7.41944 12.6593L7.43008 12.5132L3.85102 11.0656C1.88253 10.2695 0.240487 9.61003 0.202029 9.6002C0.140208 9.58439 0.127974 9.60153 0.0965438 9.74808C-0.0356539 10.3644 -0.0317494 11.1293 0.106175 11.6469C0.294954 12.3553 0.737164 12.9767 1.32117 13.3541C1.57421 13.5177 7.25497 16.0992 7.68631 16.2466C8.3159 16.4619 8.84251 16.5031 9.45385 16.3852C11.4125 16.0072 12.5553 14.8176 13.6706 11.9954C14.1675 10.738 15.1914 7.82076 15.8517 5.78088C16.592 3.49422 16.5944 3.48387 16.4484 3.20744C16.2931 2.91337 16.5945 2.98808 11.3437 1.94227C8.52238 1.38036 6.53281 0.998799 6.43058 1C6.33606 1.00114 6.22215 1.01663 6.17741 1.03443Z"
                                    })
                                }), (0, a.jsxs)("symbol", {
                                    id: "logo",
                                    viewBox: "0 0 17 18",
                                    children: [(0, a.jsx)("circle", {
                                        cx: "2.8877",
                                        cy: "3.0835",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    }), (0, a.jsx)("circle", {
                                        cx: "8.50098",
                                        cy: "3.0835",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    }), (0, a.jsx)("circle", {
                                        cx: "8.50098",
                                        cy: "8.6958",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    }), (0, a.jsx)("circle", {
                                        cx: "14.1123",
                                        cy: "3.0835",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    }), (0, a.jsx)("circle", {
                                        cx: "14.1123",
                                        cy: "8.6958",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    }), (0, a.jsx)("circle", {
                                        cx: "14.1123",
                                        cy: "14.3091",
                                        r: "2.1123",
                                        strokeWidth: "1.2"
                                    })]
                                }), (0, a.jsx)("symbol", {
                                    id: "jpg",
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M4.39207 1.38789C2.71702 1.38789 1.63477 2.53644 1.63477 4.30834V9.64744C1.63477 10.1447 1.72707 10.5886 1.88502 10.9728C1.89183 10.9647 2.04052 10.7835 2.2345 10.5471C2.61377 10.0849 3.1662 9.41168 3.17007 9.40824C3.61987 8.89474 4.46422 8.12904 5.57247 8.59249C5.81532 8.69319 6.03118 8.83112 6.2299 8.9581C6.24925 8.97047 6.26843 8.98273 6.28747 8.99484C6.65992 9.24379 6.87897 9.36079 7.10647 9.34129C7.20072 9.32829 7.28912 9.30034 7.37297 9.24834C7.68927 9.05334 8.50932 7.89139 8.75489 7.54344C8.79091 7.49241 8.81457 7.45888 8.82247 7.44849C9.53097 6.52549 10.623 6.27849 11.533 6.82449C11.6552 6.89729 12.5307 7.50894 12.8206 7.75464V4.30834C12.8206 2.53644 11.7384 1.38789 10.0575 1.38789H4.39207ZM10.0567 0.481445C12.2517 0.481445 13.7266 2.01675 13.7266 4.30865V9.64775C13.7266 9.70539 13.7205 9.75944 13.7145 9.81347C13.7102 9.85143 13.706 9.88938 13.7038 9.92854C13.7024 9.95222 13.7017 9.9759 13.7011 9.99958C13.7002 10.0312 13.6993 10.0627 13.6967 10.0943C13.6954 10.1066 13.6929 10.1185 13.6905 10.1304C13.688 10.1422 13.6856 10.1541 13.6843 10.1664C13.6629 10.3705 13.6297 10.5655 13.5836 10.7547C13.5727 10.802 13.5601 10.8475 13.5473 10.8935L13.5446 10.9035C13.4926 11.0868 13.4315 11.2617 13.358 11.4287C13.3451 11.4568 13.3316 11.4842 13.318 11.5116C13.309 11.5298 13.2999 11.5481 13.2911 11.5665C13.2118 11.7258 13.126 11.8785 13.0265 12.0202C13.0081 12.0465 12.9885 12.0711 12.9689 12.0957C12.956 12.1119 12.943 12.1282 12.9303 12.145C12.827 12.2789 12.7191 12.407 12.5969 12.5233C12.5725 12.5465 12.5461 12.5678 12.5197 12.589C12.5032 12.6023 12.4868 12.6155 12.4708 12.6293C12.3453 12.7372 12.2173 12.8405 12.0762 12.9289C12.0454 12.9483 12.0127 12.9645 11.9801 12.9807C11.9591 12.9911 11.938 13.0016 11.9176 13.0128C11.774 13.0921 11.629 13.1694 11.4711 13.2292C11.4331 13.2437 11.3926 13.2541 11.3521 13.2646C11.3233 13.272 11.2944 13.2795 11.2663 13.2884C11.2523 13.2927 11.2382 13.2971 11.2242 13.3015C11.0831 13.3454 10.9424 13.3891 10.7905 13.4151C10.7025 13.4306 10.6091 13.4365 10.5156 13.4424C10.4752 13.445 10.4347 13.4476 10.3947 13.4509C10.3516 13.4541 10.3094 13.4593 10.2671 13.4645C10.1984 13.473 10.1295 13.4814 10.0567 13.4814H4.39126C4.14686 13.4814 3.91351 13.4567 3.68796 13.4197L3.66391 13.4158C2.78446 13.2643 2.05451 12.8399 1.54296 12.1996C1.53941 12.1996 1.53801 12.1972 1.53616 12.1941C1.53495 12.192 1.53356 12.1896 1.53126 12.1873C1.01711 11.5399 0.726562 10.6695 0.726562 9.64775V4.30865C0.726562 2.01675 2.20271 0.481445 4.39126 0.481445H10.0567ZM6.57617 4.71617C6.57617 5.59689 5.83925 6.33145 4.95432 6.33145C4.17646 6.33145 3.51324 5.76312 3.36459 5.02731C3.34003 4.9169 3.32617 4.80336 3.32617 4.68606C3.32617 3.79907 4.04671 3.08145 4.93732 3.08145C5.3908 3.08145 5.80146 3.27214 6.0956 3.57638C6.391 3.86995 6.57617 4.27455 6.57617 4.71617Z",
                                        fill: "#1F2128"
                                    })
                                }), (0, a.jsx)("symbol", {
                                    id: "png",
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M4.40642 0.773438H10.0402C12.2523 0.773438 13.7266 2.3522 13.7266 4.61759V9.92863C13.7266 12.1941 12.2522 13.7734 10.0402 13.7734H4.40642C2.19541 13.7734 0.726562 12.1954 0.726562 9.92863V4.61759C0.726562 2.35332 2.1997 0.773438 4.40642 0.773438ZM10.0402 1.75093H4.40642C2.75499 1.75093 1.70352 2.8786 1.70352 4.61759V9.92863C1.70352 11.6705 2.75111 12.7959 4.40642 12.7959H10.0402C11.6972 12.7959 12.7496 11.6686 12.7496 9.92863V4.61759C12.7496 2.87777 11.6974 1.75093 10.0402 1.75093ZM8.22142 7.57196C8.79817 6.86955 9.83671 6.79846 10.5029 7.39297L10.5876 7.4743L11.9397 8.87016C12.1275 9.06399 12.1227 9.37341 11.9289 9.56126C11.7528 9.73204 11.4812 9.74357 11.2923 9.59862L11.2382 9.55045L9.88617 8.15466C9.65062 7.91158 9.26769 7.90931 9.02864 8.1362L8.97616 8.19262L7.52464 9.95899C7.01121 10.5848 6.08742 10.6518 5.48972 10.1274L5.4103 10.0522L4.83102 9.46081C4.67886 9.30281 4.43619 9.28786 4.26721 9.41535L4.21383 9.46313L3.21799 10.5143C3.0324 10.7102 2.72322 10.7184 2.52743 10.5327C2.34943 10.3639 2.32642 10.0929 2.46315 9.89785L2.50897 9.84178L3.5046 8.79088C4.02875 8.23693 4.8919 8.20743 5.45025 8.70154L5.53163 8.77958L6.10799 9.36799C6.27648 9.53995 6.54651 9.54432 6.72062 9.38964L6.76978 9.33847L8.22142 7.57196ZM4.9974 3.79063C4.0972 3.79063 3.36719 4.52161 3.36719 5.42239C3.36719 6.32316 4.0972 7.05415 4.9974 7.05415C5.89764 7.05415 6.62826 6.32312 6.62826 5.42239C6.62826 4.52165 5.89764 3.79063 4.9974 3.79063ZM4.99701 4.76816C5.35769 4.76816 5.65091 5.06155 5.65091 5.42243C5.65091 5.78331 5.35769 6.0767 4.99701 6.0767C4.63653 6.0767 4.34375 5.78352 4.34375 5.42243C4.34375 5.06134 4.63653 4.76816 4.99701 4.76816Z",
                                        fill: "#1F2128"
                                    })
                                }), (0, a.jsx)("symbol", {
                                    id: "pdf",
                                    width: "13",
                                    height: "14",
                                    viewBox: "0 0 13 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M8.07506 0.262387C8.04698 0.257455 8.0181 0.254883 7.98861 0.254883C7.95912 0.254883 7.93023 0.257455 7.90216 0.262387H3.75982C2.11396 0.262387 0.726562 1.5976 0.726562 3.22617V10.315C0.726562 12.0358 2.05302 13.3992 3.75982 13.3992H9.0462C10.6696 13.3992 12.01 11.9687 12.01 10.315V4.24983C12.01 4.12171 11.9604 3.99856 11.8717 3.90614L8.52016 0.414975C8.42658 0.317492 8.29729 0.262387 8.16216 0.262387H8.07506ZM7.49233 1.25381L3.76033 1.25434C2.65431 1.25434 1.71962 2.15386 1.71962 3.22556V10.3144C1.71962 11.4931 2.60789 12.4061 3.76033 12.4061H9.0467C10.1069 12.4061 11.0179 11.4338 11.0179 10.3144L11.0175 4.87563L10.4379 4.87761C10.2172 4.87734 9.96606 4.87687 9.68682 4.87624C8.51591 4.87376 7.56031 3.956 7.4958 2.80072L7.49233 2.67607V1.25381ZM10.4751 3.88357L9.689 3.88368C9.02367 3.88227 8.48489 3.34204 8.48489 2.67607V1.81044L10.4751 3.88357ZM7.86183 8.73083C8.13592 8.73083 8.35811 8.95302 8.35811 9.22711C8.35811 9.47835 8.17141 9.68599 7.92917 9.71885L7.86183 9.72339H4.2906C4.01651 9.72339 3.79432 9.50119 3.79432 9.22711C3.79432 8.97586 3.98103 8.76822 4.22326 8.73536L4.2906 8.73083H7.86183ZM7.00757 5.94983C7.00757 5.67574 6.78538 5.45355 6.51129 5.45355H4.2906L4.22326 5.45808C3.98103 5.49094 3.79432 5.69859 3.79432 5.94983C3.79432 6.22392 4.01651 6.44611 4.2906 6.44611H6.51129L6.57863 6.44158C6.82086 6.40872 7.00757 6.20108 7.00757 5.94983Z",
                                        fill: "#1F2128"
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        44460: function(e, n, t) {
            "use strict";
            var o = t(10253),
                r = t(85893),
                i = t(67294),
                a = t(18058),
                s = t.n(a),
                l = t(86010),
                c = t(49491),
                d = t(9473),
                u = t(82489),
                p = t(57156);
            n.Z = function(e) {
                var n = e.value,
                    t = e.elements,
                    a = e.onSelect,
                    h = e.downloadDropdown,
                    C = (e.cookieUser, e.isDropDownUp),
                    f = e.mobile,
                    m = void 0 !== f && f,
                    g = (0, d.I0)(),
                    v = (0, p.Z)((function(e) {
                        return e.mainReducer.user
                    })),
                    x = i.useRef(null),
                    _ = i.useRef(null),
                    w = (0, o.Z)(i.useState(!1), 2),
                    j = w[0],
                    k = w[1],
                    b = function(e) {
                        !x.current || x.current.contains(e.target) || _.current.contains(e.target) || document.querySelector(".modal") || k(!1)
                    };
                i.useEffect((function() {
                    return document.addEventListener("click", b, !0),
                        function() {
                            document.removeEventListener("click", b, !0)
                        }
                }));
                var y = t.map((function(e) {
                    return h ? (0, r.jsxs)("div", {
                        className: (0, l.Z)(s().dropdownElement, s().downloadElement, "pro" !== v.plan && e.pro && s().disabled),
                        onClick: function() {
                            if (null === v.plan) return g((0, u.Ps)(null)), void g((0, u.aN)("logIn"));
                            "pro" !== v.plan && e.pro ? g((0, u.zA)(!0)) : (a(e), k(!1))
                        },
                        children: [(0, r.jsxs)("div", {
                            className: (0, l.Z)("pro" !== v.plan && e.pro && s().disabled),
                            children: [(0, r.jsx)("svg", {
                                className: s()[e.svg],
                                children: (0, r.jsx)("use", {
                                    href: "#".concat(e.svg)
                                })
                            }), e.value]
                        }), e.pro && (0, r.jsx)(c.Z, {})]
                    }, e.value) : (0, r.jsx)("div", {
                        className: (0, l.Z)(s().dropdownElement),
                        onClick: function() {
                            a(e), k(!1)
                        },
                        children: e.value
                    }, e.value)
                }));
                return (0, r.jsxs)("div", {
                    className: s().root,
                    children: [(0, r.jsx)("input", {
                        ref: _,
                        type: "text",
                        value: n,
                        onClick: function() {
                            k(!j)
                        },
                        onMouseDown: function(e) {
                            e.preventDefault()
                        },
                        readOnly: !0
                    }), (0, r.jsx)("div", {
                        ref: x,
                        className: (0, l.Z)(s().dropdown, j && s().open, C && s().dropDownUp, m && s().mobileDropDown),
                        children: y
                    })]
                })
            }
        },
        49491: function(e, n, t) {
            "use strict";
            var o = t(85893),
                r = t(35522),
                i = t.n(r);
            n.Z = function() {
                return (0, o.jsx)("div", {
                    className: i().root,
                    children: (0, o.jsx)("span", {
                        children: "pro"
                    })
                })
            }
        },
        24255: function(e) {
            e.exports = {
                root: "BtnText_root__74NCN",
                disabled: "BtnText_disabled__mMG35"
            }
        },
        45927: function(e) {
            e.exports = {
                root: "Checkbox_root__jek88",
                dark: "Checkbox_dark__QtxDm",
                input: "Checkbox_input__nTZmL",
                mark: "Checkbox_mark__8Bf1h",
                checked: "Checkbox_checked__lkDil"
            }
        },
        71775: function(e) {
            e.exports = {
                root: "DownloadDropdown_root__RkjYR",
                text: "DownloadDropdown_text__iafVG",
                select: "DownloadDropdown_select__KOM2P",
                slider: "DownloadDropdown_slider__77qZd",
                sizeRow: "DownloadDropdown_sizeRow__sR5ia",
                disabled: "DownloadDropdown_disabled__E9tRv",
                downloadBtnPopper: "DownloadDropdown_downloadBtnPopper___RPoh"
            }
        },
        17013: function(e) {
            e.exports = {
                root: "Hint_root__oBJKq",
                animationX: "Hint_animationX__E_ern",
                slideX: "Hint_slideX__Q0Iyk",
                animationY: "Hint_animationY__4eO71",
                slideY: "Hint_slideY__i9cTk",
                isClosing: "Hint_isClosing___Vuqo",
                slideCloseX: "Hint_slideCloseX__7PlA7",
                slideCloseY: "Hint_slideCloseY__aKYtw",
                closed: "Hint_closed__JPO8s",
                triangle: "Hint_triangle__VpHC8",
                left: "Hint_left___qI94",
                top: "Hint_top__JZdgX",
                header: "Hint_header__BuWSC",
                step: "Hint_step___gJ0l",
                btnClose: "Hint_btnClose__MXkpG",
                title: "Hint_title__ZfPGF",
                text: "Hint_text__7yccG",
                btnWrapper: "Hint_btnWrapper__N3tXC",
                btnText: "Hint_btnText__p6D0l"
            }
        },
        43678: function(e) {
            e.exports = {
                header: "Polotno_header__0EZv1",
                mobileWrapper: "Polotno_mobileWrapper__mjl4g",
                emptyMobileCrown: "Polotno_emptyMobileCrown__KrCzI",
                mobileItem: "Polotno_mobileItem__rGX2_",
                nameInput: "Polotno_nameInput__UC8Ii",
                check: "Polotno_check__b4d5K",
                titleName: "Polotno_titleName__L0DSW",
                pensilHolder: "Polotno_pensilHolder__3yx5O",
                logo: "Polotno_logo__j2TJY",
                wrapperLeft: "Polotno_wrapperLeft__umGXp",
                link: "Polotno_link__AEhoO",
                mobile: "Polotno_mobile__4oi34",
                file: "Polotno_file__gFVao",
                crown: "Polotno_crown__1OzO9",
                cloud: "Polotno_cloud__ya38a",
                btnWrapper: "Polotno_btnWrapper__lhvFC",
                laptopItem: "Polotno_laptopItem__eTof8",
                emptyDiv: "Polotno_emptyDiv__k_s5Z",
                downloadWrapper: "Polotno_downloadWrapper__SGjDv",
                designNameWrapper: "Polotno_designNameWrapper___obza",
                designNameInput: "Polotno_designNameInput__q2Trd",
                toolbar: "Polotno_toolbar__wRMIl",
                workspaceLoading: "Polotno_workspaceLoading__meatW",
                tryProBtn: "Polotno_tryProBtn__osspJ",
                logInBtn: "Polotno_logInBtn__Kmecj",
                upgradeBtn: "Polotno_upgradeBtn__Pc_8P",
                downloadButton: "Polotno_downloadButton__PO9fC",
                downloadButtonUnlogged: "Polotno_downloadButtonUnlogged__3euXa",
                downloadBtn: "Polotno_downloadBtn__6cij_",
                downloadBtnMobile: "Polotno_downloadBtnMobile__EIESj",
                avatar: "Polotno_avatar__T19MV",
                sidePanelWrap: "Polotno_sidePanelWrap__6dnAe",
                workspaceBtnsWrap: "Polotno_workspaceBtnsWrap__ENG_F",
                workspaceBtn: "Polotno_workspaceBtn__pkHB5",
                disabled: "Polotno_disabled__OU4YE",
                gridImg: "Polotno_gridImg__NWhos",
                proBadge: "Polotno_proBadge___qptG"
            }
        },
        22943: function(e) {
            e.exports = {
                root: "ReplaceTemplateModal_root__wn5UO",
                modalRoot: "ReplaceTemplateModal_modalRoot___VNIY",
                content: "ReplaceTemplateModal_content__lNFWd",
                actions: "ReplaceTemplateModal_actions__PeprS"
            }
        },
        38322: function(e) {
            e.exports = {
                rootPanel: "AppSection_rootPanel__asJkn",
                appIconsWrapper: "AppSection_appIconsWrapper__Aj81c",
                appIcon: "AppSection_appIcon__QhukJ",
                iconWrapper: "AppSection_iconWrapper__IHiLL",
                nameWrapper: "AppSection_nameWrapper___EfFe"
            }
        },
        75093: function(e) {
            e.exports = {
                rootPanel: "Layers_rootPanel__wvC0Z",
                titleWrapper: "Layers_titleWrapper__VHrdf",
                qrtitle: "Layers_qrtitle__Dutjo",
                bodyWrapper: "Layers_bodyWrapper__TPiCr",
                descriptionWrapper: "Layers_descriptionWrapper__gzc_e",
                layerDesription: "Layers_layerDesription__rEJAk",
                layerListWrapper: "Layers_layerListWrapper__efond",
                LayerItemWrapper: "Layers_LayerItemWrapper__vxbah",
                LayerNameWrapper: "Layers_LayerNameWrapper__w8rR7",
                layerNameInput: "Layers_layerNameInput__rDVGi",
                layerName: "Layers_layerName__IhqBP",
                LayerDragHandle: "Layers_LayerDragHandle__F2qJ6",
                LayerControl: "Layers_LayerControl__Dvoqr",
                controlIcon: "Layers_controlIcon__kUMP_"
            }
        },
        40027: function(e) {
            e.exports = {
                rootPanel: "QrSection_rootPanel__rXMDe",
                titleWrapper: "QrSection_titleWrapper__srXbK",
                qrtitle: "QrSection_qrtitle__6e_cS",
                bodyWrapper: "QrSection_bodyWrapper__7VODs",
                qrDesription: "QrSection_qrDesription___Ef6T",
                qrInput: "QrSection_qrInput__ZUL_L",
                generateBtn: "QrSection_generateBtn__GwcoB"
            }
        },
        9607: function(e) {
            e.exports = {
                root: "SidePanelSections_root__Sf8LC",
                textLink: "SidePanelSections_textLink__yOUqa",
                youMayAlsoLike: "SidePanelSections_youMayAlsoLike__a60NY",
                noTemplatesFound: "SidePanelSections_noTemplatesFound__4CQDK",
                childContainer: "SidePanelSections_childContainer__Hk9sa",
                searchInputWrapper: "SidePanelSections_searchInputWrapper__4BYyZ",
                img: "SidePanelSections_img__sbCNM",
                searchInput: "SidePanelSections_searchInput__M5l9S",
                searchInputBorder: "SidePanelSections_searchInputBorder__MuSU3",
                title: "SidePanelSections_title__cB3Fc",
                itemContainer: "SidePanelSections_itemContainer__bkt3O",
                svgContainer: "SidePanelSections_svgContainer__zqzY0",
                infiniteScrollWrapper: "SidePanelSections_infiniteScrollWrapper__KEF4A",
                column: "SidePanelSections_column__l24c2",
                wrapperForTemplate: "SidePanelSections_wrapperForTemplate__4LkhS",
                grid: "SidePanelSections_grid__kYA2A",
                masonryGrid: "SidePanelSections_masonryGrid__kolci",
                masonryGridColumn: "SidePanelSections_masonryGridColumn__sJaEp",
                gridItem: "SidePanelSections_gridItem__pYM91",
                content: "SidePanelSections_content__1Il10",
                element: "SidePanelSections_element__FL9ou",
                proBadge: "SidePanelSections_proBadge__18ETM",
                template: "SidePanelSections_template__E2kMo"
            }
        },
        7348: function(e) {
            e.exports = {
                gridItem: "ImageItem_gridItem__jsIYS",
                imageWrapper: "ImageItem_imageWrapper__0BCjR",
                selected: "ImageItem_selected__MFXvu",
                selectAction: "ImageItem_selectAction__xwpbg",
                dropdownAction: "ImageItem_dropdownAction__USJK0",
                visible: "ImageItem_visible__yYWtO",
                loading: "ImageItem_loading__dAIGD",
                clickOverlay: "ImageItem_clickOverlay__L8FN5",
                popperRoot: "ImageItem_popperRoot__QuxXy",
                title: "ImageItem_title__s0ul9",
                edit: "ImageItem_edit__5Ckb6",
                meta: "ImageItem_meta__kZcHO",
                timeElapsed: "ImageItem_timeElapsed__2ablA",
                actions: "ImageItem_actions__bY3dQ",
                progressClass: "ImageItem_progressClass__ushFC",
                xPadding: "ImageItem_xPadding__C0uuS"
            }
        },
        37504: function(e) {
            e.exports = {
                root: "DeletingImagesOverlay_root__MBjg4",
                images: "DeletingImagesOverlay_images__ol_ky",
                imageContainer: "DeletingImagesOverlay_imageContainer__BbL04",
                spacingImage: "DeletingImagesOverlay_spacingImage__dbpM4",
                info: "DeletingImagesOverlay_info__SZ1Tn",
                loader: "DeletingImagesOverlay_loader__uHYa5",
                progress: "DeletingImagesOverlay_progress__NUUo6"
            }
        },
        60039: function(e) {
            e.exports = {
                root: "UploadsSection_root__YmPLs",
                actionsShown: "UploadsSection_actionsShown__TS0KQ",
                hint: "UploadsSection_hint__LAT4T",
                uploadBtn: "UploadsSection_uploadBtn__ODi2W",
                uploadLabel: "UploadsSection_uploadLabel__en_I_",
                storage: "UploadsSection_storage__pBsNO",
                clickable: "UploadsSection_clickable__QfPe_",
                storageInfo: "UploadsSection_storageInfo__DHU06",
                skeleton: "UploadsSection_skeleton__uiBhr",
                progressRoot: "UploadsSection_progressRoot__e0F_H",
                progressBar: "UploadsSection_progressBar__IKaKV",
                full: "UploadsSection_full__D3cXF",
                actions: "UploadsSection_actions__4vc8t",
                selected: "UploadsSection_selected__ZVTWL",
                middleContainer: "UploadsSection_middleContainer__OeAr_",
                delete: "UploadsSection_delete__soY6g",
                deselectContainer: "UploadsSection_deselectContainer__mH3bV",
                active: "UploadsSection_active__WhirB",
                gridRoot: "UploadsSection_gridRoot__8PxW3",
                masonryGrid: "UploadsSection_masonryGrid__8Naxr",
                masonryGridColumn: "UploadsSection_masonryGridColumn__onoCN"
            }
        },
        60139: function(e) {
            e.exports = {
                root: "Slider_root__IEhBg",
                sliderHeader: "Slider_sliderHeader__remZL",
                textSkeleton: "Slider_textSkeleton__XLhi1",
                slide: "Slider_slide__7S_sq",
                skeleton: "Slider_skeleton___qDVD",
                lastSlide: "Slider_lastSlide__qVHFa",
                prevSlide: "Slider_prevSlide__ukokL",
                nextSlide: "Slider_nextSlide__pvtv3",
                disabled: "Slider_disabled__sR0mC"
            }
        },
        18058: function(e) {
            e.exports = {
                root: "Select_root__72KsU",
                dropDownUp: "Select_dropDownUp__6tNSL",
                dropdown: "Select_dropdown__g750s",
                open: "Select_open__kXZDw",
                dropdownElement: "Select_dropdownElement__c8IDp",
                downloadElement: "Select_downloadElement__vtjSt",
                disabled: "Select_disabled__Nvtil",
                pdf: "Select_pdf__H_wE3",
                mobileDropDown: "Select_mobileDropDown__UIg9y"
            }
        },
        35522: function(e) {
            e.exports = {
                root: "StatusBadge_root__Pb588"
            }
        }
    }
]);
