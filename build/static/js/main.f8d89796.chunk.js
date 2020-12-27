(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a.p + 'static/media/cheering.25f80649.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/flip.e70852f0.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/goeasy.87e6bd67.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/dreams.ed9fefcd.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/chillout.26e30108.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/twistter.6bf275b2.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/freebird.0740af77.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/love.fa2785d1.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/morningdew.d11e76f4.mp3';
        },
        function (e, t, a) {
            e.exports = a.p + 'static/media/thelounge.25478905.mp3';
        },
        ,
        function (e, t, a) {
            e.exports = a(37);
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                i = a.n(n),
                s = a(9),
                c = a.n(s),
                r = (a(26), a(2)),
                o = a(3),
                l = a(6),
                u = a(4),
                m = a(7),
                p = a(20),
                d = a(1),
                h = a(5),
                f = a(10),
                b = a.n(f),
                g = a(11),
                v = a.n(g);
            a(28);
            var E = function (e) {
                var t = Object(h.a)(v.a),
                    a = Object(d.a)(t, 1)[0],
                    n = 'Cell' + (e.isLit ? ' Cell-lit' : '');
                return i.a.createElement('td', {
                    className: n,
                    onClick: function (t) {
                        a(), e.flipCellsAroundMe();
                    },
                });
            };
            a(30);
            var y = function (e) {
                    var t = e.nrows,
                        a = void 0 === t ? 5 : t,
                        s = e.ncols,
                        c = void 0 === s ? 5 : s,
                        r = e.chanceLightStartsOn,
                        o = void 0 === r ? 0.25 : r,
                        l = Object(n.useState)(!1),
                        u = Object(d.a)(l, 2),
                        m = u[0],
                        f = u[1],
                        g = Object(n.useState)([]),
                        v = Object(d.a)(g, 2),
                        y = v[0],
                        w = v[1];
                    Object(n.useEffect)(function () {
                        w(
                            (function () {
                                for (var e = [], t = 0; t < a; t++) {
                                    for (var n = [], i = 0; i < c; i++)
                                        n.push(Math.random() < o);
                                    e.push(n);
                                }
                                return e;
                            })()
                        );
                    }, []);
                    var j = function (e) {
                            var t = Object(p.a)(y),
                                n = e.split('-').map(Number),
                                i = Object(d.a)(n, 2),
                                s = i[0],
                                r = i[1];
                            function o(e, n) {
                                n >= 0 &&
                                    n < c &&
                                    e >= 0 &&
                                    e < a &&
                                    (t[e][n] = !t[e][n]);
                            }
                            console.log(e, s, r),
                                o(s, r),
                                o(s, r - 1),
                                o(s, r + 1),
                                o(s - 1, r),
                                o(s + 1, r);
                            var l = t.every(function (e) {
                                return e.every(function (e) {
                                    return !e;
                                });
                            });
                            w(t), f(l);
                        },
                        k = Object(h.a)(b.a, { volume: 0.5 }),
                        N = Object(d.a)(k, 2),
                        O = N[0],
                        S = N[1].stop,
                        x = Object(n.useState)(!1),
                        C = Object(d.a)(x, 2),
                        L = C[0],
                        M = C[1];
                    return i.a.createElement(
                        'div',
                        { className: 'BoardDisplay' },
                        m
                            ? i.a.createElement(
                                  'div',
                                  {
                                      className: 'Winner',
                                      onMouseEnter: function () {
                                          M(!0), O();
                                      },
                                      onMouseLeave: function () {
                                          M(!1), S();
                                      },
                                      isHovering: L,
                                  },
                                  i.a.createElement(
                                      'span',
                                      { className: ' neon-blue' },
                                      'YOU'
                                  ),
                                  i.a.createElement(
                                      'span',
                                      { className: ' neon-orange' },
                                      'WIN! '
                                  )
                              )
                            : i.a.createElement(
                                  'div',
                                  null,
                                  i.a.createElement(
                                      'div',
                                      { className: 'Board-title' },
                                      i.a.createElement(
                                          'div',
                                          { className: ' neon-orange' },
                                          'Lights '
                                      ),
                                      i.a.createElement(
                                          'div',
                                          { className: ' neon-blue' },
                                          'Out '
                                      )
                                  ),
                                  (function () {
                                      if (0 !== y.length) {
                                          for (var e = [], t = 0; t < a; t++) {
                                              for (
                                                  var n = [],
                                                      s = function (e) {
                                                          var a = ''
                                                              .concat(t, '-')
                                                              .concat(e);
                                                          n.push(
                                                              i.a.createElement(
                                                                  E,
                                                                  {
                                                                      key: a,
                                                                      isLit:
                                                                          y[t][
                                                                              e
                                                                          ],
                                                                      flipCellsAroundMe: function () {
                                                                          return j(
                                                                              a
                                                                          );
                                                                      },
                                                                  }
                                                              )
                                                          );
                                                      },
                                                      r = 0;
                                                  r < c;
                                                  r++
                                              )
                                                  s(r);
                                              e.push(
                                                  i.a.createElement(
                                                      'tr',
                                                      { key: t },
                                                      n
                                                  )
                                              );
                                          }
                                          return (
                                              console.log(e),
                                              console.log(a),
                                              i.a.createElement(
                                                  'table',
                                                  { className: 'Board' },
                                                  i.a.createElement(
                                                      'tbody',
                                                      null,
                                                      e
                                                  )
                                              )
                                          );
                                      }
                                  })()
                              )
                    );
                },
                w = a(12),
                j = a.n(w),
                k = a(13),
                N = a.n(k),
                O = a(14),
                S = a.n(O),
                x = a(15),
                C = a.n(x),
                L = a(16),
                M = a.n(L),
                T = a(17),
                D = a.n(T),
                F = a(18),
                W = a.n(F),
                B = a(19),
                Q = a.n(B),
                G =
                    (a(32),
                    [
                        {
                            id: 1,
                            title: 'Go Easy',
                            url:
                                'https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg',
                        },
                        {
                            id: 2,
                            title: 'Dreams',
                            url:
                                'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        },
                        {
                            id: 3,
                            title: 'Chill Out',
                            url:
                                'https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg',
                        },
                        {
                            id: 4,
                            title: 'Twistter',
                            url:
                                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407161403,1267423408&fm=26&gp=0.jpg',
                        },
                        {
                            id: 5,
                            title: 'Free Bird',
                            url:
                                'https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg',
                        },
                        {
                            id: 6,
                            title: 'Love',
                            url:
                                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1108304347,2567589749&fm=26&gp=0.jpg',
                        },
                        {
                            id: 7,
                            title: 'Morning Dew',
                            url:
                                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255898899,2917333309&fm=26&gp=0.jpg',
                        },
                        {
                            id: 8,
                            title: 'The Lounge',
                            url:
                                'https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg',
                        },
                    ]);
            function H(e) {
                if (!isNaN(e))
                    return (
                        Math.floor(e / 60) +
                        ':' +
                        ('0' + Math.floor(e % 60)).slice(-2)
                    );
            }
            var Y = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (
                            var n = arguments.length, i = new Array(n), s = 0;
                            s < n;
                            s++
                        )
                            i[s] = arguments[s];
                        return (
                            ((a = Object(l.a)(
                                this,
                                (e = Object(u.a)(t)).call.apply(
                                    e,
                                    [this].concat(i)
                                )
                            )).state = {
                                currentSong: null,
                                music: 'stopped',
                                currentTime: null,
                                duration: null,
                            }),
                            a
                        );
                    }
                    return (
                        Object(m.a)(t, e),
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    var e = this,
                                        t = H(this.state.currentTime),
                                        a = H(this.state.duration),
                                        n = G.map(function (t, a) {
                                            return i.a.createElement(
                                                'div',
                                                {
                                                    className: 'ui list',
                                                    key: a,
                                                },
                                                i.a.createElement(
                                                    'div',
                                                    { className: 'item' },
                                                    i.a.createElement('img', {
                                                        className:
                                                            'ui avatar image',
                                                        src: t.url,
                                                        alt: 'music images',
                                                    }),
                                                    i.a.createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                'content',
                                                        },
                                                        i.a.createElement(
                                                            'li',
                                                            {
                                                                className:
                                                                    'title',
                                                                key: t.id,
                                                                onClick: function () {
                                                                    return e.setState(
                                                                        {
                                                                            currentSong:
                                                                                t.title,
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                            t.title
                                                        )
                                                    )
                                                )
                                            );
                                        });
                                    return i.a.createElement(
                                        'div',
                                        { className: 'MusicDisplay' },
                                        i.a.createElement(
                                            'div',
                                            {
                                                className:
                                                    'ui card main-container',
                                            },
                                            i.a.createElement(
                                                'div',
                                                { className: 'info-container' },
                                                'playing' === this.state.music
                                                    ? i.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'current-song',
                                                          },
                                                          'Now Playing ',
                                                          this.state.currentSong
                                                      )
                                                    : i.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'current-song',
                                                          },
                                                          'Choose Your Song'
                                                      ),
                                                'paused' === this.state.music
                                                    ? i.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'current-song',
                                                          },
                                                          this.state
                                                              .currentSong,
                                                          ' is paused',
                                                          ' '
                                                      )
                                                    : null,
                                                'playing' ===
                                                    this.state.music ||
                                                    'paused' ===
                                                        this.state.music
                                                    ? i.a.createElement(
                                                          'div',
                                                          null,
                                                          t,
                                                          ' / ',
                                                          a
                                                      )
                                                    : ''
                                            ),
                                            i.a.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'button-container',
                                                },
                                                'paused' === this.state.music &&
                                                    i.a.createElement(
                                                        'button',
                                                        {
                                                            class:
                                                                'ui labeled icon secondary basic button',
                                                            onClick: function () {
                                                                return e.setState(
                                                                    {
                                                                        music:
                                                                            'playing',
                                                                    }
                                                                );
                                                            },
                                                        },
                                                        i.a.createElement('i', {
                                                            class:
                                                                ' large play circle outline icon',
                                                        }),
                                                        'Play'
                                                    ),
                                                'playing' ===
                                                    this.state.music &&
                                                    i.a.createElement(
                                                        'button',
                                                        {
                                                            class:
                                                                'ui labeled icon secondary basic button',
                                                            onClick: function () {
                                                                return e.setState(
                                                                    {
                                                                        music:
                                                                            'paused',
                                                                    }
                                                                );
                                                            },
                                                        },
                                                        i.a.createElement('i', {
                                                            class:
                                                                'large pause circle outline icon',
                                                        }),
                                                        'Pause'
                                                    ),
                                                'playing' ===
                                                    this.state.music ||
                                                    'paused' ===
                                                        this.state.music
                                                    ? i.a.createElement(
                                                          'button',
                                                          {
                                                              class:
                                                                  'ui labeled icon secondary basic button',
                                                              onClick: function () {
                                                                  return e.setState(
                                                                      {
                                                                          music:
                                                                              'stop',
                                                                      }
                                                                  );
                                                              },
                                                          },
                                                          i.a.createElement(
                                                              'i',
                                                              {
                                                                  class:
                                                                      'large stop circle outline icon',
                                                              }
                                                          ),
                                                          'Stop'
                                                      )
                                                    : null
                                            ),
                                            i.a.createElement(
                                                'div',
                                                { className: 'playlist' },
                                                n
                                            ),
                                            i.a.createElement('audio', {
                                                ref: function (t) {
                                                    return (e.music = t);
                                                },
                                            })
                                        )
                                    );
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e, t) {
                                    if (
                                        this.state.currentSong !== t.currentSong
                                    ) {
                                        var a;
                                        switch (this.state.currentSong) {
                                            case 'Go Easy':
                                                a = j.a;
                                                break;
                                            case 'Dreams':
                                                a = N.a;
                                                break;
                                            case 'Chill Out':
                                                a = S.a;
                                                break;
                                            case 'Twistter':
                                                a = C.a;
                                                break;
                                            case 'Free Bird':
                                                a = M.a;
                                                break;
                                            case 'Love':
                                                a = D.a;
                                                break;
                                            case 'Morning Dew':
                                                a = W.a;
                                                break;
                                            case 'The Lounge':
                                                a = Q.a;
                                        }
                                        a &&
                                            ((this.music.src = a),
                                            this.music.play(),
                                            this.setState({
                                                music: 'playing',
                                            }));
                                    }
                                    this.state.music !== t.music &&
                                        ('paused' === this.state.music &&
                                            this.music.pause(),
                                        'playing' === this.state.music &&
                                            'paused' === t.music &&
                                            this.music.play(),
                                        'stop' === this.state.music &&
                                            (this.music.pause(),
                                            (this.currentTime = 0),
                                            this.setState({
                                                currentSong: null,
                                            })));
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    var e = this;
                                    this.music.addEventListener(
                                        'timeupdate',
                                        function (t) {
                                            e.setState({
                                                currentTime:
                                                    t.target.currentTime,
                                                duration: t.target.duration,
                                            });
                                        }
                                    );
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.music.removeEventListener(
                                        'timeupdate',
                                        function () {}
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(i.a.Component),
                _ =
                    (a(35),
                    (function (e) {
                        function t() {
                            return (
                                Object(r.a)(this, t),
                                Object(l.a)(
                                    this,
                                    Object(u.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(m.a)(t, e),
                            Object(o.a)(t, [
                                {
                                    key: 'render',
                                    value: function () {
                                        return i.a.createElement(
                                            'div',
                                            { className: 'App' },
                                            i.a.createElement(
                                                'div',
                                                { className: 'Display' },
                                                i.a.createElement(y, null),
                                                i.a.createElement(Y, null)
                                            ),
                                            i.a.createElement(
                                                'p',
                                                { className: 'Instruction' },
                                                'Pressing any of the lights will toggle it and the four adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible.'
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            c.a.render(
                i.a.createElement(_, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function (e) {
                        e.unregister();
                    });
        },
    ],
    [[21, 3, 1]],
]);
//# sourceMappingURL=main.f8d89796.chunk.js.map
