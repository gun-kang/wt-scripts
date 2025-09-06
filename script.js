var $win = $(window),
  $doc = $(document);
(function ($) {
  'use strict';
  var d = /["\\\x00-\x1f\x7f-\x9f]/g,
    meta = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' },
    hasOwn = Object.prototype.hasOwnProperty;
  $.toJSON =
    typeof JSON === 'object' && JSON.stringify
      ? JSON.stringify
      : function (o) {
          if (o === null) {
            return 'null';
          }
          var a,
            k,
            name,
            val,
            type = $.type(o);
          if (type === 'undefined') {
            return undefined;
          }
          if (type === 'number' || type === 'boolean') {
            return String(o);
          }
          if (type === 'string') {
            return $.quoteString(o);
          }
          if (typeof o.toJSON === 'function') {
            return $.toJSON(o.toJSON());
          }
          if (type === 'date') {
            var b = o.getUTCMonth() + 1,
              day = o.getUTCDate(),
              year = o.getUTCFullYear(),
              hours = o.getUTCHours(),
              minutes = o.getUTCMinutes(),
              seconds = o.getUTCSeconds(),
              milli = o.getUTCMilliseconds();
            if (b < 10) {
              b = '0' + b;
            }
            if (day < 10) {
              day = '0' + day;
            }
            if (hours < 10) {
              hours = '0' + hours;
            }
            if (minutes < 10) {
              minutes = '0' + minutes;
            }
            if (seconds < 10) {
              seconds = '0' + seconds;
            }
            if (milli < 100) {
              milli = '0' + milli;
            }
            if (milli < 10) {
              milli = '0' + milli;
            }
            return '"' + year + '-' + b + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"';
          }
          a = [];
          if ($.isArray(o)) {
            for (k = 0; k < o.length; k++) {
              a.push($.toJSON(o[k]) || 'null');
            }
            return '[' + a.join(',') + ']';
          }
          if (typeof o === 'object') {
            for (k in o) {
              if (hasOwn.call(o, k)) {
                type = typeof k;
                if (type === 'number') {
                  name = '"' + k + '"';
                } else if (type === 'string') {
                  name = $.quoteString(k);
                } else {
                  continue;
                }
                type = typeof o[k];
                if (type !== 'function' && type !== 'undefined') {
                  val = $.toJSON(o[k]);
                  a.push(name + ':' + val);
                }
              }
            }
            return '{' + a.join(',') + '}';
          }
        };
  $.evalJSON =
    typeof JSON === 'object' && JSON.parse
      ? JSON.parse
      : function (a) {
          return eval('(' + a + ')');
        };
  $.secureEvalJSON =
    typeof JSON === 'object' && JSON.parse
      ? JSON.parse
      : function (a) {
          var b = a
            .replace(/\\["\\\/bfnrtu]/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, '');
          if (/^[\],:{}\s]*$/.test(b)) {
            return eval('(' + a + ')');
          }
          throw new SyntaxError('Error parsing JSON,source is not valid.');
        };
  $.quoteString = function (b) {
    if (b.match(d)) {
      return (
        '"' +
        b.replace(d, function (a) {
          var c = meta[a];
          if (typeof c === 'string') {
            return c;
          }
          c = a.charCodeAt();
          return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
        }) +
        '"'
      );
    }
    return '"' + b + '"';
  };
})(jQuery);
var xi = {
  members: [],
  APIKEYS: {
    MEMBER: '02b5735e610d0fb7c9b96154f613d14f',
    NOVEL: 'd7dbfddf567dca21794d120f48678360',
    BOARD: 'd3794a73beff03f17a8c6468fd89cb17',
    BLOG: 'e47ee0fde13da2929dedc8b832ec50d0',
    WEBTOON: 'afb89a2b142acb39bf74d7bec4699077',
    TOONCOMICS: 'a4eaf7910c8d6361c8d018c49c85c346',
    EVENTAJAX: '55836389b6e1c04a759f3d77e989a210',
  },
  userSelectCss: {
    'user-select': 'none',
    '-o-user-select': 'none',
    '-moz-user-select': 'none',
    '-khtml-user-select': 'none',
    '-webkit-user-select': 'none',
  },
  __init: function () {
    xi.setMemberMenu();
    if (parseInt($_Member.ttl) > 0)
      window.setTimeout(function () {
        xi.go(xi.host('www') + '/module/member/mbView/viewPattern/pattern/true');
      }, parseInt($_Member.ttl) * 1000);
    if (!!$xiOption.use.quickbar) {
      var $Quicker = $('#quick');
      if ($ROOT_DOMAIN != 'munpiacorp.com') {
        window.document.domain = 'munpia.com';
      }
      if ($Quicker.is('div') && window.location.protocol !== 'http:') {
        var $QFrame = $('<iframe />').attr({
          src: xi.host('www') + '/page/quicker/group/nv.regular/order/' + ($.xcookie('QUICKER-ORDER') || 'update'),
          id: 'quicker-content',
          name: 'quicker-content',
          height: '100%',
          frameborder: '0',
          scrolling: 'auto',
          title: '퀵메뉴영역',
        });
        if (Boolean($.xcookie('QUICKER-OPENEDv2'))) $Quicker.html($QFrame).show();
      }
    }
    if (!!$xiOption.use.shortcut) {
      if (!!$_Member.uid)
        $doc
          .on('keydown.go-blog', { hotkey: 'b' }, function (e) {
            if ($_Member.blogPass) {
              xi.goByHotkey(e, 'https://library.munpia.com/' + $_Member.blogId);
            } else {
              xi.goByHotkey(e, xi.host('blog') + '/' + $_Member.blogId);
            }
          })
          .on('keydown.go-home', { hotkey: 'f' }, function (e) {
            if ($_Member.blogPass) {
              xi.goByHotkey(e, 'https://library.munpia.com/api/profiles/go-before-profile-prefer');
            } else {
              xi.goByHotkey(e, xi.host('blog') + '/' + $_Member.blogId + '/subscriptions');
            }
          });
      $doc
        .on('keydown.go-home', { hotkey: 'h' }, function (e) {
          xi.goByHotkey(e, xi.host('www'));
        })
        .on('keydown.go-talk', { hotkey: 'm' }, function (e) {
          xi.goByHotkey(e, xi.host('novel') + '/page/hd.novel/group/nv.regular');
        });
    }
  },
  expose: function (e) {
    if ($('html', $doc).is('.ie67')) return $.alert('IE8.0부터 지원하는 기능입니다.');
    if (e.data.exposeAt) $(e.data.exposeAt).expose({ color: '#111111' });
    return false;
  },
  fixHeight: function (l, r) {
    var $l = $(l),
      $r = $(r);
    if ($l.height() > $r.height()) $r.height($l.height());
    else $l.height($r.height());
  },
  host: function ($sub, $pure) {
    var $protocol;
    if (!!$HAS_MEMBERSET) {
      return '';
    } else if ($.inArray($sub, ['static']) > -1) {
      $protocol = '//';
    } else {
      $protocol = 'https://';
    }
    if ($sub === 'cdn1') {
      if ($RUN !== 'SERVICE') {
        $sub = 'static';
      }
    }
    $sub = $sub ? $sub + '.' : '';
    if ($RUN === 'RELEASE') {
      $sub = 'r' + $sub;
    } else if ($RUN === 'TEST') {
      $sub = 't' + $sub;
    } else if ($RUN === 'DEV') {
      var tmp = $REAL_HOST.split('_');
      var tmp2 = $REAL_HOST.split('-');
      if (tmp.length > 1) {
        $sub = tmp[0] + '_' + $sub;
      } else if (tmp2.length > 1) {
        $sub = tmp2[0] + '-' + $sub;
      }
    }
    var domain = $ROOT_DOMAIN == 'munpiacorp.com' ? 'munpia.com' : $ROOT_DOMAIN;
    return !!$pure ? $sub + domain : $protocol + $sub + domain;
  },
  parsing: function ($url) {
    var $O = {};
    $url = $url
      .replace(/^#|#$/g, '')
      .replace(/^[\/]*/, '')
      .split('/');
    for (var i = 0; i < $url.length; i += 2) $O[$url[i]] = $url[i + 1];
    return $O;
  },
  go: function (url) {
    if (url) document.location = url;
    return false;
  },
  goByHotkey: function (e, $url) {
    return xi.go($url);
  },
  isEditNode: function (e) {
    var $e = e.target;
    return /input|textarea|button|select/i.test($e.nodeName) || $e.contentEditable === 'true' ? true : false;
  },
  imageResizing: function (canvas) {
    canvas = canvas || 'div.content';
    var $BOX = $('<div />').appendTo('body').draggable();
    $(canvas)
      .find('img')
      .hide()
      .each(function () {
        var $OO = $(this);
        if ($OO.width() > $OO.parents(canvas).width()) $OO.removeAttr('width height').width('100%');
        $OO.show();
        $OO = null;
      })
      .on('click', function () {
        $(this)
          .clone()
          .removeAttr('width height')
          .css({
            width: '',
            height: '',
            border: '10px solid #333',
            'border-radius': '6px',
            'box-shadow': '0 0 20px',
            cursor: '',
          })
          .one('load', function () {
            $BOX
              .empty()
              .append(this)
              .show()
              .hide()
              .css({
                position: 'absolute',
                top: $win.scrollTop() + $win.height() / 2 - this.height / 2 - 10,
                left: $win.width() / 2 - this.width / 2 - 10,
                'z-index': '9999',
              })
              .fadeIn(200);
            $doc.one('click', function () {
              $BOX.fadeOut(400);
            });
          })
          .load();
        return false;
      })
      .css({ cursor: 'pointer' });
  },
  open: function (o) {
    o = $.extend(
      {
        title: 'XIED',
        href: null,
        top: 0,
        left: 0,
        width: '500',
        height: '500',
        menubar: 'no',
        toolbar: 'no',
        location: 'no',
        status: 'no',
        resizable: 'no',
        scrollbars: 'no',
        fullscreen: 'no',
        returnID: false,
      },
      o
    );
    o.top = o.top || screen.height / 2 - o.height / 2 - 100;
    o.left = o.left || screen.width / 2 - o.width / 2;
    var option = $.map(o, function (x, i) {
      if (i.match(/^(title|href|returnID)$/)) return null;
      return i + '=' + x;
    }).join(',');
    var $ID = window.open(o.href || this.href, o.title, option).focus();
    return !!o.returnID ? $ID : false;
  },
  reverseChecked: function (o) {
    $(o + ' input:checkbox').click();
  },
  searching: function () {
    return xi.submitV2.call(this, {
      data: {
        after: function () {
          var keyword = $.trim($('#keyword').val());
          if (keyword && keyword.length < 2) {
            alert('검색어는 최소 2글자 이상 입력해주세요.');
            return;
          }
          this.action = this.action
            .replace(
              /@SCOPE/i,
              $(
                ':input[name="shScope"]:checked,:input[name="scope"]:checked,:input[name="shScope"],:input[name="scope"]',
                this
              ).val()
            )
            .replace(/@KEYWORD/i, $(':input[name="shKey"],:input[name="keyword"]', this).val());
          return xi.go(this.action);
        },
      },
    });
  },
  submit: function (e) {
    var $o = e.target,
      $x = true,
      $i;
    $('input:text,textarea', $o).each(function () {
      $i = $.trim(this.title);
      if ($i && $i == $.trim(this.value)) this.value = '';
    });
    $('[required]:enabled', $o).each(function () {
      var $this = $(this);
      $i = $.trim(this.value);
      if (!$i || $i === $.trim(this.title) || ($this.is(':radio,:checkbox') && !$this.is(':checked'))) {
        $x = false;
        this.focus();
        return $.alert(this.title + (!this.title.match(/입력|작성|선택/g) ? ' 을(를) 입력하세요.' : ''));
      }
    });
    if ($x) return $o.submit();
    else return false;
  },
  validated: true,
  submitV2: function (e) {
    if (xi.validated === false) return false;
    var $F = this;
    $F.fine = true;
    if (e.data && e.data.before) $F.fine = e.data.before.call(this);
    $(':input[required]:enabled', $F).each(function () {
      var $O = $(this),
        $V = $.trim($O.val()),
        $W = '입력',
        $N = $O.data('name') || $O.attr('placeholder') || $O.attr('title'),
        $T = null;
      if (
        ($O.is(':text') && !$V) ||
        ($O.is(':radio,:checkbox') &&
          (!($T = $('[name="' + $O.attr('name') + '"]:enabled:checked', $F)).length || /^null$/i.test($T.val()))) ||
        ($O.is('select') && !$V)
      ) {
        if ($O.is(':text,:password')) $W = '입력';
        else if ($O.is('textarea')) $W = '작성';
        else if ($O.is(':radio,:checkbox,select')) $W = '선택';
        $O.focus();
        return ($F.fine = $.alert($N + (!String($N).match(/입력|작성|선택/g) ? ' 을(를) ' + $W + '하세요.' : '')));
      }
    });
    xi.validated &&
      $F.fine &&
      $(':input:not(button,[type="hidden"],[type="submit"]):enabled', $F).each(function () {
        var $O = $(this),
          $V = $.trim($O.val()),
          $N = $O.data('name') || $O.attr('placeholder') || $O.attr('title');
        if ($O.attr('type') === 'email' && $V && !/^[a-z\d\.\-_]{2,40}@[a-z\d\.\-_]{2,16}\.[a-z\.]{2,6}$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 이메일 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'url' && $V && !/^https?:\/\/.+$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 숫자 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'tel' && $V && !/^01[016789]-?\d{3,4}-?\d{4}$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 전화번호 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'number' && $V && !/^[\d]+$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 숫자 형식이 아닙니다.', $O.focus()));
        else if (
          $O.attr('type') === 'datetime' &&
          $V &&
          !/^(\d{2}|\d{4})[\/\-\.]\d{2}[\/\-\.]\d{2}\s+\d{2}:\d{2}(:\d{2})?$/.test($V)
        )
          return ($F.fine = $.alert($N + ' 은(는) 올바른 날짜시간 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'date' && $V && !/^(\d{2}|\d{4})[\/\-\.]\d{2}[\/\-\.]\d{2}$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 날짜 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'time' && $V && !/^\d{2}:\d{2}(:\d{2})?$/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 시간 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'month' && $V && !/^\d{4}\-\d{2}/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 월(month) 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'week' && $V && !/^\d{4}\-W\d{2}/.test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 주(week) 형식이 아닙니다.', $O.focus()));
        else if ($O.attr('type') === 'range' && $V && ($O.attr('min') > $V || $O.attr('max') < $V))
          return ($F.fine = $.alert(
            $N + ' 을(를) ' + $O.attr('min') + ' 이상, ' + $O.attr('max') + ' 이하로 입력하세요.',
            $O.focus()
          ));
        if ($O.attr('minlength') && $V && $O.attr('minlength') > $V.length)
          return ($F.fine = $.alert($N + ' 을(를) ' + $O.attr('minlength') + '자 이상 입력하세요.', $O.focus()));
        if ($O.attr('maxlength') && $V && $O.attr('maxlength') < $V.length)
          return ($F.fine = $.alert($N + ' 을(를) ' + $O.attr('maxlength') + '자 이하로 입력하세요.', $O.focus()));
        if ($O.attr('pattern') && $V && !new RegExp($O.attr('pattern').replace('///', '/\\//')).test($V))
          return ($F.fine = $.alert($N + ' 은(는) 올바른 형식이 아닙니다.', $O.focus()));
        return true;
      });
    if (e.data && e.data.after && $F.fine) $F.fine = e.data.after.call(this);
    return xi.validated && $F.fine ? $F.submit() : false;
  },
  unchecking: function ($target) {
    $($target + ' input:checkbox')
      .attr('checked', false)
      .on('click', function () {
        $(this).parents('tr,dl,li').toggleClass('checked');
      });
  },
  setMemberMenu: function () {
    if ($doc.data('SettedMemberLayer')) return false;
    else $doc.data('SettedMemberLayer', true);
    var $MemberLayer = $('<div />').addClass('member-layer-popup').appendTo('body');
    var $MemberInfo = $('<div />').attr('id', 'member-info-popup').appendTo('body');
    $doc
      .on('member-popup-close', function () {
        $MemberLayer.fadeOut(200);
      })
      .on('click', 'a.member-trigger', function (e) {
        var $O = $(this);
        $MemberLayer.hide();
        new xAPI({
          host: null,
          apikey: xAPI.keys.get('MEMBER'),
          service: 'member',
          scope: 'member-info-items',
          params: { mid: $MID, no: $O.data('no') },
        })
          .ajax()
          .on('done', function ($R) {
            $MemberLayer
              .empty()
              .html($R.api)
              .css({ top: $O.offset().top - 4, left: $O.offset().left + $O.width() + 2 })
              .fadeIn(200);
          });
        return false;
      });
    $MemberLayer.on('click', 'a.i-info', function () {
      var $O = $(this);
      $doc.trigger('member-popup-close');
      new xAPI({
        host: null,
        apikey: xAPI.keys.get('MEMBER'),
        service: 'member',
        scope: 'member-info',
        params: { no: $O.data('no') },
      })
        .ajax()
        .on('done', function ($R) {
          $MemberInfo
            .html($R.api)
            .css({
              top: parseInt($win.height() / 2 - $MemberInfo.height() / 2),
              left: parseInt($win.width() / 2 - $MemberInfo.width() / 2),
              position: 'fixed',
            })
            .fadeIn(200);
        });
      return false;
    });
  },
};
var util = {
  array_chunk: function (a, b, d) {
    var x,
      p = '',
      i = 0,
      c = -1,
      l = a.length || 0,
      n = [];
    if (b < 1) return null;
    if (Object.prototype.toString.call(a) === '[object Array]') {
      if (d) {
        while (i < l) {
          (x = i % b) ? (n[c][i] = a[i]) : (n[++c] = {}), (n[c][i] = a[i]);
          i++;
        }
      } else {
        while (i < l) {
          (x = i % b) ? (n[c][x] = a[i]) : (n[++c] = [a[i]]);
          i++;
        }
      }
    } else {
      if (d) {
        for (p in a) {
          if (a.hasOwnProperty(p)) {
            (x = i % b) ? (n[c][p] = a[p]) : (n[++c] = {}), (n[c][p] = a[p]);
            i++;
          }
        }
      } else {
        for (p in a) {
          if (a.hasOwnProperty(p)) {
            (x = i % b) ? (n[c][x] = a[p]) : (n[++c] = [a[p]]);
            i++;
          }
        }
      }
    }
    return n;
  },
  preg_grep: function (a, b, c) {
    var p = '',
      retObj = {};
    var d = c === 1 || c === 'PREG_GREP_INVERT';
    if (typeof a === 'string') {
      a = eval(a);
    }
    if (d) {
      for (p in b) {
        if (b[p].search(a) === -1) {
          retObj[p] = b[p];
        }
      }
    } else {
      for (p in b) {
        if (b[p].search(a) !== -1) {
          retObj[p] = b[p];
        }
      }
    }
    return retObj;
  },
  paramToJSON: function ($FORM) {
    var $OO = {};
    $FORM.serializeArray().map(function (v) {
      $OO[v.name] = v.value;
    });
    return $.toJSON($OO);
  },
  number_format: function (b, c, d, e) {
    b = (b + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+b) ? 0 : +b,
      prec = !isFinite(+c) ? 0 : Math.abs(c),
      sep = typeof e === 'undefined' ? ',' : e,
      dec = typeof d === 'undefined' ? '.' : d,
      s = '',
      toFixedFix = function (n, a) {
        var k = Math.pow(10, a);
        return '' + Math.round(n * k) / k;
      };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  },
};
String.prototype = $.extend(String.prototype, {
  strpad: function (c, d, e) {
    var f = '',
      pad_to_go,
      input = this;
    var g = function (s, a) {
      var b = '',
        i;
      while (b.length < a) {
        b += s;
      }
      b = b.substr(0, a);
      return b;
    };
    input += '';
    d = d !== undefined ? d : ' ';
    if (e !== 'STR_PAD_LEFT' && e !== 'STR_PAD_RIGHT' && e !== 'STR_PAD_BOTH') {
      e = 'STR_PAD_RIGHT';
    }
    if ((pad_to_go = c - input.length) > 0) {
      if (e === 'STR_PAD_LEFT') {
        input = g(d, pad_to_go) + input;
      } else if (e === 'STR_PAD_RIGHT') {
        input = input + g(d, pad_to_go);
      } else if (e === 'STR_PAD_BOTH') {
        f = g(d, Math.ceil(pad_to_go / 2));
        input = f + input + f;
        input = input.substr(0, c);
      }
    }
    return input;
  },
});
(function (a) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], a);
  } else if (typeof exports === 'object') {
    module.exports = a;
  } else {
    a(jQuery);
  }
})(function ($) {
  var e = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    toBind =
      'onwheel' in document || document.documentMode >= 9
        ? ['wheel']
        : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    slice = Array.prototype.slice,
    nullLowestDeltaTimeout,
    lowestDelta;
  if ($.event.fixHooks) {
    for (var i = e.length; i; ) {
      $.event.fixHooks[e[--i]] = $.event.mouseHooks;
    }
  }
  var f = ($.event.special.mousewheel = {
    version: '3.1.9',
    setup: function () {
      if (this.addEventListener) {
        for (var i = toBind.length; i; ) {
          this.addEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
      $.data(this, 'mousewheel-line-height', f.getLineHeight(this));
      $.data(this, 'mousewheel-page-height', f.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var i = toBind.length; i; ) {
          this.removeEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    },
    getLineHeight: function (a) {
      return parseInt($(a)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
    },
    getPageHeight: function (a) {
      return $(a).height();
    },
    settings: { adjustOldDeltas: true },
  });
  $.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind('mousewheel', a) : this.trigger('mousewheel');
    },
    unmousewheel: function (a) {
      return this.unbind('mousewheel', a);
    },
  });
  function handler(a) {
    var b = a || window.event,
      args = slice.call(arguments, 1),
      delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0;
    a = $.event.fix(b);
    a.type = 'mousewheel';
    if ('detail' in b) {
      deltaY = b.detail * -1;
    }
    if ('wheelDelta' in b) {
      deltaY = b.wheelDelta;
    }
    if ('wheelDeltaY' in b) {
      deltaY = b.wheelDeltaY;
    }
    if ('wheelDeltaX' in b) {
      deltaX = b.wheelDeltaX * -1;
    }
    if ('axis' in b && b.axis === b.HORIZONTAL_AXIS) {
      deltaX = deltaY * -1;
      deltaY = 0;
    }
    delta = deltaY === 0 ? deltaX : deltaY;
    if ('deltaY' in b) {
      deltaY = b.deltaY * -1;
      delta = deltaY;
    }
    if ('deltaX' in b) {
      deltaX = b.deltaX;
      if (deltaY === 0) {
        delta = deltaX * -1;
      }
    }
    if (deltaY === 0 && deltaX === 0) {
      return;
    }
    if (b.deltaMode === 1) {
      var c = $.data(this, 'mousewheel-line-height');
      delta *= c;
      deltaY *= c;
      deltaX *= c;
    } else if (b.deltaMode === 2) {
      var d = $.data(this, 'mousewheel-page-height');
      delta *= d;
      deltaY *= d;
      deltaX *= d;
    }
    absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
      if (shouldAdjustOldDeltas(b, absDelta)) {
        lowestDelta /= 40;
      }
    }
    if (shouldAdjustOldDeltas(b, absDelta)) {
      delta /= 40;
      deltaX /= 40;
      deltaY /= 40;
    }
    delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
    deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
    deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
    a.deltaX = deltaX;
    a.deltaY = deltaY;
    a.deltaFactor = lowestDelta;
    a.deltaMode = 0;
    args.unshift(a, delta, deltaX, deltaY);
    if (nullLowestDeltaTimeout) {
      clearTimeout(nullLowestDeltaTimeout);
    }
    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }
  function nullLowestDelta() {
    lowestDelta = null;
  }
  function shouldAdjustOldDeltas(a, b) {
    return f.settings.adjustOldDeltas && a.type === 'mousewheel' && b % 120 === 0;
  }
});
(function (a) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], a);
  } else {
    a(jQuery);
  }
})(function ($) {
  var k = /\+/g;
  function encode(s) {
    return m.raw ? s : encodeURIComponent(s);
  }
  function decode(s) {
    return m.raw ? s : decodeURIComponent(s);
  }
  function stringifyCookieValue(a) {
    return encode(m.json ? JSON.stringify(a) : String(a));
  }
  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      s = decodeURIComponent(s.replace(k, ' '));
      return m.json ? JSON.parse(s) : s;
    } catch (e) {}
  }
  function read(s, a) {
    var b = m.raw ? s : parseCookieValue(s);
    return $.isFunction(a) ? a(b) : b;
  }
  var m = ($.xcookie = function (a, b, c) {
    if (b !== undefined && !$.isFunction(b)) {
      c = $.extend({}, m.defaults, c);
      if (typeof c.expires === 'number') {
        var d = c.expires,
          t = (c.expires = new Date());
        t.setDate(t.getDate() + d);
      }
      return (document.cookie = [
        encode(a),
        '=',
        stringifyCookieValue(b),
        c.expires ? '; expires=' + c.expires.toUTCString() : '',
        c.path ? '; path=' + c.path : '',
        c.domain ? '; domain=' + c.domain : '',
        c.secure ? '; secure' : '',
      ].join(''));
    }
    var e = a ? undefined : {};
    var f = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0, l = f.length; i < l; i++) {
      var g = f[i].split('=');
      var h = decode(g.shift());
      var j = g.join('=');
      if (a && a === h) {
        e = read(j, b);
        break;
      }
      if (!a && (j = read(j)) !== undefined) {
        e[h] = j;
      }
    }
    return e;
  });
  m.defaults = {};
  $.removeCookie = function (a, b) {
    if ($.xcookie(a) === undefined) {
      return false;
    }
    $.xcookie(a, '', $.extend({}, b, { expires: -1 }));
    return !$.xcookie(a);
  };
});
(function (c) {
  c.hotkeys = {
    spkeys: {
      8: 'backspace',
      9: 'tab',
      13: 'return',
      16: 'shift',
      17: 'ctrl',
      18: 'alt',
      19: 'pause',
      20: 'capslock',
      27: 'esc',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      45: 'insert',
      46: 'del',
      96: '0',
      97: '1',
      98: '2',
      99: '3',
      100: '4',
      101: '5',
      102: '6',
      103: '7',
      104: '8',
      105: '9',
      106: '*',
      107: '+',
      109: '-',
      110: '.',
      111: '/',
      112: 'f1',
      113: 'f2',
      114: 'f3',
      115: 'f4',
      116: 'f5',
      117: 'f6',
      118: 'f7',
      119: 'f8',
      120: 'f9',
      121: 'f10',
      122: 'f11',
      123: 'f12',
      144: 'numlock',
      145: 'scroll',
      191: '/',
      224: 'meta',
    },
    shiftNums: {
      '`': '~',
      1: '!',
      2: '@',
      3: '#',
      4: '$',
      5: '%',
      6: '^',
      7: '&',
      8: '*',
      9: '(',
      0: ')',
      '-': '_',
      '=': '+',
      ';': ':',
      "'": '"',
      ',': '<',
      '.': '>',
      '/': '?',
      '\\': '|',
    },
  };
  function keyHandler(d) {
    var f = d.data;
    if (!c.isEmptyObject(f) && f.hotkey) f = f.hotkey;
    else if (typeof f !== 'string') return;
    var e = d.handler,
      keys = f.toLowerCase().split(' '),
      textAcceptingInputTypes = [
        'text',
        'password',
        'number',
        'email',
        'url',
        'range',
        'date',
        'month',
        'week',
        'time',
        'datetime',
        'datetime-local',
        'search',
        'color',
        'tel',
      ];
    d.handler = function (a) {
      if (
        this !== a.target &&
        (/textarea|select/i.test(a.target.nodeName) ||
          c.inArray(a.target.type, textAcceptingInputTypes) > -1 ||
          a.target.contentEditable === 'true')
      )
        return;
      var b = a.type !== 'keypress' && c.hotkeys.spkeys[a.which],
        character = String.fromCharCode(a.which).toLowerCase(),
        key,
        modif = '',
        possible = {};
      if (a.altKey && b !== 'alt') {
        modif += 'alt+';
      }
      if (a.ctrlKey && b !== 'ctrl') {
        modif += 'ctrl+';
      }
      if (a.metaKey && !a.ctrlKey && b !== 'meta') {
        modif += 'meta+';
      }
      if (a.shiftKey && b !== 'shift') {
        modif += 'shift+';
      }
      if (b) {
        possible[modif + b] = true;
      } else {
        possible[modif + character] = true;
        possible[modif + c.hotkeys.shiftNums[character]] = true;
        if (modif === 'shift+') {
          possible[c.hotkeys.shiftNums[character]] = true;
        }
      }
      for (var i = 0, l = keys.length; i < l; i++) {
        if (possible[keys[i]]) {
          return e.apply(this, arguments);
        }
      }
    };
  }
  c.each(['keydown', 'keyup', 'keypress'], function () {
    c.event.special[this] = { add: keyHandler };
  });
})(jQuery);
(function ($) {
  if (!('placeholder' in document.createElement('input'))) {
    var d = 0;
    var f = function () {
      var a = $(this)
        .on('keydown', function (e) {
          $(this).prev('label.placeholder').hide();
        })
        .on('keyup', function (e) {
          if (!this.value.length) $(this).prev('label.placeholder').show();
        })
        .on('change', function (e) {
          $(this).keyup();
        })
        .attr('id', this.id || 'fix-ph-' + (this.name || ++d))
        .addClass('fix-placeholder');
      var b = $('<label />', { for: a[0].id, class: 'placeholder', text: a.attr('placeholder') })
        .css({
          width: a.width(),
          height: a.height(),
          'font-family': a.style('font-family'),
          'font-size': a.style('font-size'),
          'line-height': a.style('line-height'),
          'text-align': 'left',
          overflow: 'hidden',
          cursor: 'text',
          'white-space': a.is('input') ? 'nowrap' : 'normal',
          float: 'none',
          display: 'block',
          margin: '0',
          padding: a.style('padding'),
          'padding-top': '+=' + (parseInt(a.style('border-top-width')) + 1) + 'px',
          'padding-left': '+=' + (parseInt(a.style('border-left-width')) + 1) + 'px',
          position: 'absolute',
        })
        .fixBorderBox()
        .insertBefore(a);
      if (!!this.value.length) b.hide();
      a = null;
    };
    $(function () {
      $(':input[placeholder]:visible').each(f);
    });
    $.each(['show', 'fadeIn', 'slideDown'], function (i, x) {
      var c = $.fn[x];
      $.fn[x] = function () {
        if (!this.is(':input[placeholder]')) {
          var a = c.apply(this, arguments);
          $(':input[placeholder]:not(.fix-placeholder)', a).each(f);
        }
        var a = c.apply(this, arguments);
        var b = this.prev('label.placeholder');
        try {
          if (!!b[0] && !a.val().length) {
            b.show();
            return a;
          }
        } catch (e) {}
        if (a.is(':input[placeholder]:visible:not(.fix-placeholder)')) {
          a.each(f);
          return a;
        }
        return a;
      };
    });
    $.each(['hide', 'fadeOut', 'slideUp'], function (i, x) {
      var c = $.fn[x];
      $.fn[x] = function () {
        if (!this.is(':input[placeholder]')) return c.apply(this, arguments);
        var a = c.apply(this, arguments);
        var b = this.prev('label.placeholder');
        try {
          if (!b[0]) return a;
        } catch (e) {
          return a;
        }
        if (b.is(':hidden')) return a;
        b.hide();
        return a;
      };
    });
    $.each(['append', 'prepend', 'after', 'before'], function (i, x) {
      var b = $.fn[x];
      $.fn[x] = function () {
        if (
          !arguments[0].jquery &&
          (!!arguments[0].nodeName || /<(input|textarea)[^>]+placeholder[^>]+>/i.test(String(arguments[0])))
        )
          arguments[0] = $(arguments[0]);
        var a = b.apply(this, arguments);
        if (!!arguments[0].jquery && arguments[0].is(':input[placeholder]:visible:not(.fix-placeholder)'))
          arguments[0].each(f);
        return a;
      };
    });
    $.each(['remove'], function (i, x) {
      var b = $.fn[x];
      $.fn[x] = function () {
        var a = this.prev('label.placeholder');
        if (!!a[0]) a.remove();
        return b.apply(this, arguments);
      };
    });
  }
})(jQuery);
(function (a, b, c, d) {
  var e = a(b);
  (a.fn.lazyload = function (f) {
    function g() {
      var b = 0;
      i.each(function () {
        var c = a(this);
        if (!j.skip_invisible || c.is(':visible'))
          if (a.abovethetop(this, j) || a.leftofbegin(this, j));
          else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
            if (++b > j.failure_limit) return !1;
          } else c.trigger('appear'), (b = 0);
      });
    }
    var h,
      i = this,
      j = {
        threshold: 0,
        failure_limit: 0,
        event: 'scroll',
        effect: 'show',
        container: b,
        data_attribute: 'original',
        skip_invisible: !0,
        appear: null,
        load: null,
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
      };
    return (
      f &&
        (d !== f.failurelimit && ((f.failure_limit = f.failurelimit), delete f.failurelimit),
        d !== f.effectspeed && ((f.effect_speed = f.effectspeed), delete f.effectspeed),
        a.extend(j, f)),
      (h = j.container === d || j.container === b ? e : a(j.container)),
      0 === j.event.indexOf('scroll') &&
        h.bind(j.event, function () {
          return g();
        }),
      this.each(function () {
        var b = this,
          c = a(b);
        (b.loaded = !1),
          (c.attr('src') === d || c.attr('src') === !1) && c.is('img') && c.attr('src', j.placeholder),
          c.one('appear', function () {
            if (!this.loaded) {
              if (j.appear) {
                var d = i.length;
                j.appear.call(b, d, j);
              }
              a('<img />')
                .bind('load', function () {
                  var d = c.attr('data-' + j.data_attribute);
                  c.hide(),
                    c.is('img') ? c.attr('src', d) : c.css('background-image', "url('" + d + "')"),
                    c[j.effect](j.effect_speed),
                    (b.loaded = !0);
                  var e = a.grep(i, function (a) {
                    return !a.loaded;
                  });
                  if (((i = a(e)), j.load)) {
                    var f = i.length;
                    j.load.call(b, f, j);
                  }
                })
                .attr('src', c.attr('data-' + j.data_attribute));
            }
          }),
          0 !== j.event.indexOf('scroll') &&
            c.bind(j.event, function () {
              b.loaded || c.trigger('appear');
            });
      }),
      e.bind('resize', function () {
        g();
      }),
      /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
        e.bind('pageshow', function (b) {
          b.originalEvent &&
            b.originalEvent.persisted &&
            i.each(function () {
              a(this).trigger('appear');
            });
        }),
      a(c).ready(function () {
        g();
      }),
      this
    );
  }),
    (a.belowthefold = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop()
            : a(f.container).offset().top + a(f.container).height()),
        g <= a(c).offset().top - f.threshold
      );
    }),
    (a.rightoffold = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? e.width() + e.scrollLeft()
            : a(f.container).offset().left + a(f.container).width()),
        g <= a(c).offset().left - f.threshold
      );
    }),
    (a.abovethetop = function (c, f) {
      var g;
      return (
        (g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top),
        g >= a(c).offset().top + f.threshold + a(c).height()
      );
    }),
    (a.leftofbegin = function (c, f) {
      var g;
      return (
        (g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left),
        g >= a(c).offset().left + f.threshold + a(c).width()
      );
    }),
    (a.inviewport = function (b, c) {
      return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c));
    }),
    a.extend(a.expr[':'], {
      'below-the-fold': function (b) {
        return a.belowthefold(b, { threshold: 0 });
      },
      'above-the-top': function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      'right-of-screen': function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      'left-of-screen': function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
      'in-viewport': function (b) {
        return a.inviewport(b, { threshold: 0 });
      },
      'above-the-fold': function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      'right-of-fold': function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      'left-of-fold': function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
    });
})(jQuery, window, document);
(function (t) {
  t.extend(t.fn, {
    validate: function (e) {
      if (!this.length)
        return (
          e && e.debug && window.console && console.warn("Nothing selected,can't validate,returning nothing."), void 0
        );
      var i = t.data(this[0], 'validator');
      return i
        ? i
        : (this.attr('novalidate', 'novalidate'),
          (i = new t.validator(e, this[0])),
          t.data(this[0], 'validator', i),
          i.settings.onsubmit &&
            (this.validateDelegate(':submit', 'click', function (e) {
              i.settings.submitHandler && (i.submitButton = e.target),
                t(e.target).hasClass('cancel') && (i.cancelSubmit = !0),
                void 0 !== t(e.target).attr('formnovalidate') && (i.cancelSubmit = !0);
            }),
            this.submit(function (e) {
              function s() {
                var s;
                return i.settings.submitHandler
                  ? (i.submitButton &&
                      (s = t("<input type='hidden'/>")
                        .attr('name', i.submitButton.name)
                        .val(t(i.submitButton).val())
                        .appendTo(i.currentForm)),
                    i.settings.submitHandler.call(i, i.currentForm, e),
                    i.submitButton && s.remove(),
                    !1)
                  : !0;
              }
              return (
                i.settings.debug && e.preventDefault(),
                i.cancelSubmit
                  ? ((i.cancelSubmit = !1), s())
                  : i.form()
                  ? i.pendingRequest
                    ? ((i.formSubmitted = !0), !1)
                    : s()
                  : (i.focusInvalid(), !1)
              );
            })),
          i);
    },
    valid: function () {
      if (t(this[0]).is('form')) return this.validate().form();
      var e = !0,
        i = t(this[0].form).validate();
      return (
        this.each(function () {
          e = e && i.element(this);
        }),
        e
      );
    },
    removeAttrs: function (e) {
      var i = {},
        s = this;
      return (
        t.each(e.split(/\s/), function (t, e) {
          (i[e] = s.attr(e)), s.removeAttr(e);
        }),
        i
      );
    },
    rules: function (e, i) {
      var s = this[0];
      if (e) {
        var r = t.data(s.form, 'validator').settings,
          n = r.rules,
          a = t.validator.staticRules(s);
        switch (e) {
          case 'add':
            t.extend(a, t.validator.normalizeRule(i)),
              delete a.messages,
              (n[s.name] = a),
              i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
            break;
          case 'remove':
            if (!i) return delete n[s.name], a;
            var u = {};
            return (
              t.each(i.split(/\s/), function (t, e) {
                (u[e] = a[e]), delete a[e];
              }),
              u
            );
        }
      }
      var o = t.validator.normalizeRules(
        t.extend(
          {},
          t.validator.classRules(s),
          t.validator.attributeRules(s),
          t.validator.dataRules(s),
          t.validator.staticRules(s)
        ),
        s
      );
      if (o.required) {
        var l = o.required;
        delete o.required, (o = t.extend({ required: l }, o));
      }
      return o;
    },
  }),
    t.extend(t.expr[':'], {
      blank: function (e) {
        return !t.trim('' + t(e).val());
      },
      filled: function (e) {
        return !!t.trim('' + t(e).val());
      },
      unchecked: function (e) {
        return !t(e).prop('checked');
      },
    }),
    (t.validator = function (e, i) {
      (this.settings = t.extend(!0, {}, t.validator.defaults, e)), (this.currentForm = i), this.init();
    }),
    (t.validator.format = function (e, i) {
      return 1 === arguments.length
        ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i);
          }
        : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
          i.constructor !== Array && (i = [i]),
          t.each(i, function (t, i) {
            e = e.replace(RegExp('\\{' + t + '\\}', 'g'), function () {
              return i;
            });
          }),
          e);
    }),
    t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: 'error',
        validClass: 'valid',
        errorElement: 'label',
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ':hidden',
        ignoreTitle: !1,
        onfocusin: function (t) {
          (this.lastActive = t),
            this.settings.focusCleanup &&
              !this.blockFocusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
              this.addWrapper(this.errorsFor(t)).hide());
        },
        onfocusout: function (t) {
          this.checkable(t) || (!(t.name in this.submitted) && this.optional(t)) || this.element(t);
        },
        onkeyup: function (t, e) {
          (9 !== e.which || '' !== this.elementValue(t)) &&
            (t.name in this.submitted || t === this.lastElement) &&
            this.element(t);
        },
        onclick: function (t) {
          t.name in this.submitted
            ? this.element(t)
            : t.parentNode.name in this.submitted && this.element(t.parentNode);
        },
        highlight: function (e, i, s) {
          'radio' === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
        },
        unhighlight: function (e, i, s) {
          'radio' === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
        },
      },
      setDefaults: function (e) {
        t.extend(t.validator.defaults, e);
      },
      messages: {
        required: 'This field is required.',
        remote: 'Please fix this field.',
        email: 'Please enter a valid email address.',
        url: 'Please enter a valid URL.',
        date: 'Please enter a valid date.',
        dateISO: 'Please enter a valid date (ISO).',
        number: 'Please enter a valid number.',
        digits: 'Please enter only digits.',
        creditcard: 'Please enter a valid credit card number.',
        equalTo: 'Please enter the same value again.',
        maxlength: t.validator.format('Please enter no more than{0}characters.'),
        minlength: t.validator.format('Please enter at least{0}characters.'),
        rangelength: t.validator.format('Please enter a value between{0}and{1}characters long.'),
        range: t.validator.format('Please enter a value between{0}and{1}.'),
        max: t.validator.format('Please enter a value less than or equal to{0}.'),
        min: t.validator.format('Please enter a value greater than or equal to{0}.'),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function e(e) {
            var i = t.data(this[0].form, 'validator'),
              s = 'on' + e.type.replace(/^validate/, '');
            i.settings[s] && i.settings[s].call(i, this[0], e);
          }
          (this.labelContainer = t(this.settings.errorLabelContainer)),
            (this.errorContext = (this.labelContainer.length && this.labelContainer) || t(this.currentForm)),
            (this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var i = (this.groups = {});
          t.each(this.settings.groups, function (e, s) {
            'string' == typeof s && (s = s.split(/\s/)),
              t.each(s, function (t, s) {
                i[s] = e;
              });
          });
          var s = this.settings.rules;
          t.each(s, function (e, i) {
            s[e] = t.validator.normalizeRule(i);
          }),
            t(this.currentForm)
              .validateDelegate(
                ":text,[type='password'],[type='file'],select,textarea,[type='number'],[type='search'],[type='tel'],[type='url'],[type='email'],[type='datetime'],[type='date'],[type='month'],[type='week'],[type='time'],[type='datetime-local'],[type='range'],[type='color'] ",
                'focusin focusout keyup',
                e
              )
              .validateDelegate("[type='radio'],[type='checkbox'],select,option", 'click', e),
            this.settings.invalidHandler &&
              t(this.currentForm).bind('invalid-form.validate', this.settings.invalidHandler);
        },
        form: function () {
          return (
            this.checkForm(),
            t.extend(this.submitted, this.errorMap),
            (this.invalid = t.extend({}, this.errorMap)),
            this.valid() || t(this.currentForm).triggerHandler('invalid-form', [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++) this.check(e[t]);
          return this.valid();
        },
        element: function (e) {
          (e = this.validationTargetFor(this.clean(e))),
            (this.lastElement = e),
            this.prepareElement(e),
            (this.currentElements = t(e));
          var i = this.check(e) !== !1;
          return (
            i ? delete this.invalid[e.name] : (this.invalid[e.name] = !0),
            this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            i
          );
        },
        showErrors: function (e) {
          if (e) {
            t.extend(this.errorMap, e), (this.errorList = []);
            for (var i in e) this.errorList.push({ message: e[i], element: this.findByName(i)[0] });
            this.successList = t.grep(this.successList, function (t) {
              return !(t.name in e);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          t.fn.resetForm && t(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors(),
            this.elements().removeClass(this.settings.errorClass).removeData('previousValue');
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (t) {
          var e = 0;
          for (var i in t) e++;
          return e;
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              t(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                .filter(':visible')
                .focus()
                .trigger('focusin');
            } catch (e) {}
        },
        findLastActive: function () {
          var e = this.lastActive;
          return (
            e &&
            1 ===
              t.grep(this.errorList, function (t) {
                return t.element.name === e.name;
              }).length &&
            e
          );
        },
        elements: function () {
          var e = this,
            i = {};
          return t(this.currentForm)
            .find('input,select,textarea')
            .not(':submit,:reset,:image,[disabled]')
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name && e.settings.debug && window.console && console.error('%o has no name assigned', this),
                this.name in i || !e.objectLength(t(this).rules()) ? !1 : ((i[this.name] = !0), !0)
              );
            });
        },
        clean: function (e) {
          return t(e)[0];
        },
        errors: function () {
          var e = this.settings.errorClass.replace(' ', '.');
          return t(this.settings.errorElement + '.' + e, this.errorContext);
        },
        reset: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = t([])),
            (this.toHide = t([])),
            (this.currentElements = t([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (t) {
          this.reset(), (this.toHide = this.errorsFor(t));
        },
        elementValue: function (e) {
          var i = t(e).attr('type'),
            s = t(e).val();
          return 'radio' === i || 'checkbox' === i
            ? t("input[name='" + t(e).attr('name') + "']:checked").val()
            : 'string' == typeof s
            ? s.replace(/\r/g, '')
            : s;
        },
        check: function (e) {
          e = this.validationTargetFor(this.clean(e));
          var i,
            s = t(e).rules(),
            r = !1,
            n = this.elementValue(e);
          for (var a in s) {
            var u = { method: a, parameters: s[a] };
            try {
              if (((i = t.validator.methods[a].call(this, n, e, u.parameters)), 'dependency-mismatch' === i)) {
                r = !0;
                continue;
              }
              if (((r = !1), 'pending' === i)) return (this.toHide = this.toHide.not(this.errorsFor(e))), void 0;
              if (!i) return this.formatAndAdd(e, u), !1;
            } catch (o) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    'Exception occurred when checking element ' + e.id + ",check the '" + u.method + "' method.",
                    o
                  ),
                o)
              );
            }
          }
          return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
        },
        customDataMessage: function (e, i) {
          return t(e).data('msg-' + i.toLowerCase()) || (e.attributes && t(e).attr('data-msg-' + i.toLowerCase()));
        },
        customMessage: function (t, e) {
          var i = this.settings.messages[t];
          return i && (i.constructor === String ? i : i[e]);
        },
        findDefined: function () {
          for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];
          return void 0;
        },
        defaultMessage: function (e, i) {
          return this.findDefined(
            this.customMessage(e.name, i),
            this.customDataMessage(e, i),
            (!this.settings.ignoreTitle && e.title) || void 0,
            t.validator.messages[i],
            '<strong>Warning:No message defined for ' + e.name + '</strong>'
          );
        },
        formatAndAdd: function (e, i) {
          var s = this.defaultMessage(e, i.method),
            r = /\$?\{(\d+)\}/g;
          'function' == typeof s
            ? (s = s.call(this, i.parameters, e))
            : r.test(s) && (s = t.validator.format(s.replace(r, '{$1}'), i.parameters)),
            this.errorList.push({ message: s, element: e }),
            (this.errorMap[e.name] = s),
            (this.submitted[e.name] = s);
        },
        addWrapper: function (t) {
          return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
        },
        defaultShowErrors: function () {
          var t, e;
          for (t = 0; this.errorList[t]; t++) {
            var i = this.errorList[t];
            this.settings.highlight &&
              this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
              this.showLabel(i.element, i.message);
          }
          if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success))
            for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
          if (this.settings.unhighlight)
            for (t = 0, e = this.validElements(); e[t]; t++)
              this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
          (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return t(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (e, i) {
          var s = this.errorsFor(e);
          s.length
            ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i))
            : ((s = t('<' + this.settings.errorElement + '>')
                .attr('for', this.idOrName(e))
                .addClass(this.settings.errorClass)
                .html(i || '')),
              this.settings.wrapper &&
                (s = s
                  .hide()
                  .show()
                  .wrap('<' + this.settings.wrapper + '/>')
                  .parent()),
              this.labelContainer.append(s).length ||
                (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))),
            !i &&
              this.settings.success &&
              (s.text(''),
              'string' == typeof this.settings.success
                ? s.addClass(this.settings.success)
                : this.settings.success(s, e)),
            (this.toShow = this.toShow.add(s));
        },
        errorsFor: function (e) {
          var i = this.idOrName(e);
          return this.errors().filter(function () {
            return t(this).attr('for') === i;
          });
        },
        idOrName: function (t) {
          return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
        },
        validationTargetFor: function (t) {
          return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
        },
        checkable: function (t) {
          return /radio|checkbox/i.test(t.type);
        },
        findByName: function (e) {
          return t(this.currentForm).find("[name='" + e + "']");
        },
        getLength: function (e, i) {
          switch (i.nodeName.toLowerCase()) {
            case 'select':
              return t('option:selected', i).length;
            case 'input':
              if (this.checkable(i)) return this.findByName(i.name).filter(':checked').length;
          }
          return e.length;
        },
        depend: function (t, e) {
          return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0;
        },
        dependTypes: {
          boolean: function (t) {
            return t;
          },
          string: function (e, i) {
            return !!t(e, i.form).length;
          },
          function: function (t, e) {
            return t(e);
          },
        },
        optional: function (e) {
          var i = this.elementValue(e);
          return !t.validator.methods.required.call(this, i, e) && 'dependency-mismatch';
        },
        startRequest: function (t) {
          this.pending[t.name] || (this.pendingRequest++, (this.pending[t.name] = !0));
        },
        stopRequest: function (e, i) {
          this.pendingRequest--,
            0 > this.pendingRequest && (this.pendingRequest = 0),
            delete this.pending[e.name],
            i && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (t(this.currentForm).submit(), (this.formSubmitted = !1))
              : !i &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (t(this.currentForm).triggerHandler('invalid-form', [this]), (this.formSubmitted = !1));
        },
        previousValue: function (e) {
          return (
            t.data(e, 'previousValue') ||
            t.data(e, 'previousValue', { old: null, valid: !0, message: this.defaultMessage(e, 'remote') })
          );
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (e, i) {
        e.constructor === String ? (this.classRuleSettings[e] = i) : t.extend(this.classRuleSettings, e);
      },
      classRules: function (e) {
        var i = {},
          s = t(e).attr('class');
        return (
          s &&
            t.each(s.split(' '), function () {
              this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
            }),
          i
        );
      },
      attributeRules: function (e) {
        var i = {},
          s = t(e),
          r = s[0].getAttribute('type');
        for (var n in t.validator.methods) {
          var a;
          'required' === n ? ((a = s.get(0).getAttribute(n)), '' === a && (a = !0), (a = !!a)) : (a = s.attr(n)),
            /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)),
            a ? (i[n] = a) : r === n && 'range' !== r && (i[n] = !0);
        }
        return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
      },
      dataRules: function (e) {
        var i,
          s,
          r = {},
          n = t(e);
        for (i in t.validator.methods) (s = n.data('rule-' + i.toLowerCase())), void 0 !== s && (r[i] = s);
        return r;
      },
      staticRules: function (e) {
        var i = {},
          s = t.data(e.form, 'validator');
        return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i;
      },
      normalizeRules: function (e, i) {
        return (
          t.each(e, function (s, r) {
            if (r === !1) return delete e[s], void 0;
            if (r.param || r.depends) {
              var n = !0;
              switch (typeof r.depends) {
                case 'string':
                  n = !!t(r.depends, i.form).length;
                  break;
                case 'function':
                  n = r.depends.call(i, i);
              }
              n ? (e[s] = void 0 !== r.param ? r.param : !0) : delete e[s];
            }
          }),
          t.each(e, function (s, r) {
            e[s] = t.isFunction(r) ? r(i) : r;
          }),
          t.each(['minlength', 'maxlength'], function () {
            e[this] && (e[this] = Number(e[this]));
          }),
          t.each(['rangelength', 'range'], function () {
            var i;
            e[this] &&
              (t.isArray(e[this])
                ? (e[this] = [Number(e[this][0]), Number(e[this][1])])
                : 'string' == typeof e[this] &&
                  ((i = e[this].split(/[\s,]+/)), (e[this] = [Number(i[0]), Number(i[1])])));
          }),
          t.validator.autoCreateRanges &&
            (e.min && e.max && ((e.range = [e.min, e.max]), delete e.min, delete e.max),
            e.minlength &&
              e.maxlength &&
              ((e.rangelength = [e.minlength, e.maxlength]), delete e.minlength, delete e.maxlength)),
          e
        );
      },
      normalizeRule: function (e) {
        if ('string' == typeof e) {
          var i = {};
          t.each(e.split(/\s/), function () {
            i[this] = !0;
          }),
            (e = i);
        }
        return e;
      },
      addMethod: function (e, i, s) {
        (t.validator.methods[e] = i),
          (t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e]),
          3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e));
      },
      methods: {
        required: function (e, i, s) {
          if (!this.depend(s, i)) return 'dependency-mismatch';
          if ('select' === i.nodeName.toLowerCase()) {
            var r = t(i).val();
            return r && r.length > 0;
          }
          return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
        },
        email: function (t, e) {
          return (
            this.optional(e) ||
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
              t
            )
          );
        },
        url: function (t, e) {
          return (
            this.optional(e) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              t
            )
          );
        },
        date: function (t, e) {
          return this.optional(e) || !/Invalid|NaN/.test('' + new Date(t));
        },
        dateISO: function (t, e) {
          return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
        },
        number: function (t, e) {
          return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
        },
        digits: function (t, e) {
          return this.optional(e) || /^\d+$/.test(t);
        },
        creditcard: function (t, e) {
          if (this.optional(e)) return 'dependency-mismatch';
          if (/[^0-9 \-]+/.test(t)) return !1;
          var i = 0,
            s = 0,
            r = !1;
          t = t.replace(/\D/g, '');
          for (var n = t.length - 1; n >= 0; n--) {
            var a = t.charAt(n);
            (s = parseInt(a, 10)), r && (s *= 2) > 9 && (s -= 9), (i += s), (r = !r);
          }
          return 0 === i % 10;
        },
        minlength: function (e, i, s) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
          return this.optional(i) || r >= s;
        },
        maxlength: function (e, i, s) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
          return this.optional(i) || s >= r;
        },
        rangelength: function (e, i, s) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
          return this.optional(i) || (r >= s[0] && s[1] >= r);
        },
        min: function (t, e, i) {
          return this.optional(e) || t >= i;
        },
        max: function (t, e, i) {
          return this.optional(e) || i >= t;
        },
        range: function (t, e, i) {
          return this.optional(e) || (t >= i[0] && i[1] >= t);
        },
        equalTo: function (e, i, s) {
          var r = t(s);
          return (
            this.settings.onfocusout &&
              r.unbind('.validate-equalTo').bind('blur.validate-equalTo', function () {
                t(i).valid();
              }),
            e === r.val()
          );
        },
        remote: function (e, i, s) {
          if (this.optional(i)) return 'dependency-mismatch';
          var r = this.previousValue(i);
          if (
            (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
            (r.originalMessage = this.settings.messages[i.name].remote),
            (this.settings.messages[i.name].remote = r.message),
            (s = ('string' == typeof s && { url: s }) || s),
            r.old === e)
          )
            return r.valid;
          r.old = e;
          var n = this;
          this.startRequest(i);
          var a = {};
          return (
            (a[i.name] = e),
            t.ajax(
              t.extend(
                !0,
                {
                  url: s,
                  mode: 'abort',
                  port: 'validate' + i.name,
                  dataType: 'json',
                  data: a,
                  success: function (s) {
                    n.settings.messages[i.name].remote = r.originalMessage;
                    var a = s === !0 || 'true' === s;
                    if (a) {
                      var u = n.formSubmitted;
                      n.prepareElement(i),
                        (n.formSubmitted = u),
                        n.successList.push(i),
                        delete n.invalid[i.name],
                        n.showErrors();
                    } else {
                      var o = {},
                        l = s || n.defaultMessage(i, 'remote');
                      (o[i.name] = r.message = t.isFunction(l) ? l(e) : l), (n.invalid[i.name] = !0), n.showErrors(o);
                    }
                    (r.valid = a), n.stopRequest(i, a);
                  },
                },
                s
              )
            ),
            'pending'
          );
        },
      },
    }),
    (t.format = t.validator.format);
})(jQuery),
  (function (t) {
    var e = {};
    if (t.ajaxPrefilter)
      t.ajaxPrefilter(function (t, i, s) {
        var r = t.port;
        'abort' === t.mode && (e[r] && e[r].abort(), (e[r] = s));
      });
    else {
      var i = t.ajax;
      t.ajax = function (s) {
        var r = ('mode' in s ? s : t.ajaxSettings).mode,
          n = ('port' in s ? s : t.ajaxSettings).port;
        return 'abort' === r
          ? (e[n] && e[n].abort(), (e[n] = i.apply(this, arguments)), e[n])
          : i.apply(this, arguments);
      };
    }
  })(jQuery),
  (function (t) {
    t.extend(t.fn, {
      validateDelegate: function (e, i, s) {
        return this.bind(i, function (i) {
          var r = t(i.target);
          return r.is(e) ? s.apply(r, arguments) : void 0;
        });
      },
    });
  })(jQuery);
(function ($, window) {
  function isNumeric(arg) {
    return !isNaN(parseFloat(arg)) && isFinite(arg);
  }
  $.url = function (arg, url) {
    var _ls = url || window.location.toString();
    if (!arg) {
      return _ls;
    } else {
      arg = arg.toString();
    }
    if (_ls.substring(0, 2) === '//') {
      _ls = 'http:' + _ls;
    } else if (_ls.split('://').length === 1) {
      _ls = 'http://' + _ls;
    }
    url = _ls.split('/');
    var _l = { auth: '' },
      host = url[2].split('@');
    if (host.length === 1) {
      host = host[0].split(':');
    } else {
      _l.auth = host[0];
      host = host[1].split(':');
    }
    _l.protocol = url[0];
    _l.hostname = host[0];
    _l.port = host[1] || (_l.protocol.split(':')[0].toLowerCase() === 'https' ? '443' : '80');
    _l.pathname = (url.length > 3 ? '/' : '') + url.slice(3, url.length).join('/').split('?')[0].split('#')[0];
    var _p = _l.pathname;
    if (_p.charAt(_p.length - 1) === '/') {
      _p = _p.substring(0, _p.length - 1);
    }
    var _h = _l.hostname,
      _hs = _h.split('.'),
      _ps = _p.split('/');
    if (arg === 'hostname') {
      return _h;
    } else if (arg === 'domain') {
      if (
        /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
          _h
        )
      ) {
        return _h;
      }
      return _hs.slice(-2).join('.');
    } else if (arg === 'sub') {
      return _hs.slice(0, _hs.length - 2).join('.');
    } else if (arg === 'port') {
      return _l.port;
    } else if (arg === 'protocol') {
      return _l.protocol.split(':')[0];
    } else if (arg === 'auth') {
      return _l.auth;
    } else if (arg === 'user') {
      return _l.auth.split(':')[0];
    } else if (arg === 'pass') {
      return _l.auth.split(':')[1] || '';
    } else if (arg === 'path') {
      return _l.pathname;
    } else if (arg.charAt(0) === '.') {
      arg = arg.substring(1);
      if (isNumeric(arg)) {
        arg = parseInt(arg, 10);
        return _hs[arg < 0 ? _hs.length + arg : arg - 1] || '';
      }
    } else if (isNumeric(arg)) {
      arg = parseInt(arg, 10);
      return _ps[arg < 0 ? _ps.length + arg : arg] || '';
    } else if (arg === 'file') {
      return _ps.slice(-1)[0];
    } else if (arg === 'filename') {
      return _ps.slice(-1)[0].split('.')[0];
    } else if (arg === 'fileext') {
      return _ps.slice(-1)[0].split('.')[1] || '';
    } else if (arg.charAt(0) === '?' || arg.charAt(0) === '#') {
      var params = _ls,
        param = null;
      if (arg.charAt(0) === '?') {
        params = (params.split('?')[1] || '').split('#')[0];
      } else if (arg.charAt(0) === '#') {
        params = params.split('#')[1] || '';
      }
      if (!arg.charAt(1)) {
        return params;
      }
      arg = arg.substring(1);
      params = params.split('&');
      for (var i = 0, ii = params.length; i < ii; i++) {
        param = params[i].split('=');
        if (param[0] === arg) {
          return param[1] || '';
        }
      }
      return null;
    }
    return '';
  };
})(jQuery, window);
(function ($) {
  'use strict';
  $.fx.interval = 10;
  $.xcookie.defaults = { expires: 365, path: '/', domain: $ALLOW_DOMAIN };
  $.log = function (a) {
    if (!!window.console) window.console.log(a);
    else return null;
  };
  $.alert = function ($message) {
    alert($message);
    $message = false;
    return $message;
  };
  $.confirm = function ($message) {
    $message = confirm($message);
    return $message;
  };
  $.fn.xscroller = function ($OPT) {
    $OPT = $.extend({ height: 0, minScrollHeight: 16, infinity: null }, $OPT);
    return this.each(function () {
      var $Container = $(this).height(!!$OPT.height ? $OPT.height : null),
        $View = $Container.children('.xs-view').addClass('xs-collapse'),
        $Pane = $('<div />').addClass('xs-pane').insertAfter($View),
        $Slider = $('<div />').addClass('xs-slider').appendTo($Pane),
        $More = true,
        $Visible = true,
        $DragOn = false,
        $hideTimer = null,
        $XViewHeight = 0,
        $XDocumentHeight = 0,
        $XViewScrollHeight = 0,
        $XPaneHeight = 0,
        $XSliderHeight = 0,
        $XPaneScrollHeight = 0;
      $Container
        .on('hiding', function () {
          if (!!$hideTimer) window.clearTimeout($hideTimer);
          $hideTimer = window.setTimeout(function () {
            $Visible = false;
            $Pane.removeClass('xs-pane-hover');
          }, 1000);
        })
        .on('mousemove', function (e) {
          if ($View[0].scrollHeight <= $View.height()) return;
          if ($View.offset().left + $View.width() - e.pageX <= 50) {
            if (!!$hideTimer) window.clearTimeout($hideTimer);
            if (!$Pane.hasClass('xs-pane-hover')) $Pane.addClass('xs-pane-hover');
            $Visible = true;
          } else if (!!$Visible && $Pane.hasClass('xs-pane-hover')) {
            $Container.triggerHandler('hiding');
            $Visible = false;
          }
        })
        .on('refresh mouseenter mouseleave', function (e, $init) {
          if ($View[0].scrollHeight <= $View.height()) return;
          $XViewHeight = $View.innerHeight();
          $XDocumentHeight = $View[0].scrollHeight;
          $XViewScrollHeight = $XDocumentHeight - $XViewHeight;
          $XPaneHeight = $Pane.height();
          $XSliderHeight =
            ($XSliderHeight = Math.floor(($XViewHeight * $XPaneHeight) / $XDocumentHeight)) > $OPT.minScrollHeight
              ? $XSliderHeight
              : $OPT.minScrollHeight;
          $XPaneScrollHeight = $XPaneHeight - $XSliderHeight;
          $Slider.height($XSliderHeight - ($Slider.outerHeight(true) - $Slider.innerHeight()));
          $View.triggerHandler('scroll');
          if (e.type === 'mouseenter') {
            $Visible = true;
            $Pane.addClass('xs-pane-hover');
            if (!$init) $Container.triggerHandler('hiding');
          } else if (e.type === 'mouseleave') {
            $Visible = false;
            $Pane.removeClass('xs-pane-hover');
          }
        })
        .triggerHandler('mouseenter', true);
      $View
        .on('mousewheel', function (e, delta) {
          var $NPos = $View.scrollTop();
          if ((delta < 0 && $XViewScrollHeight <= $NPos) || (delta > 0 && !$NPos)) return false;
          $View.triggerHandler('scroll');
        })
        .on('scroll', function (e) {
          if (!$Visible) {
            $Pane.addClass('xs-pane-hover');
            $Container.triggerHandler('hiding');
          }
          var $NPos = $View.scrollTop(),
            _pos_ = Math.floor(($NPos * $XPaneScrollHeight) / $XViewScrollHeight);
          $Slider.css({ top: _pos_ });
          if (
            $.type($OPT.infinity) === 'function' &&
            $XViewScrollHeight <= $NPos + $XPaneScrollHeight / 20 &&
            $More !== false
          ) {
            $More = $OPT.infinity.apply(this);
            $Container.triggerHandler('refresh');
          }
        });
      $Pane
        .on('mouseenter', function (e) {
          if ($View[0].scrollHeight <= $View.height()) return;
          $Pane.addClass('xs-pane-drag');
        })
        .on('mouseleave', function (e) {
          if ($View[0].scrollHeight <= $View.height()) return;
          if (!$DragOn) $Pane.removeClass('xs-pane-drag');
        })
        .on('mousedown', function (e) {
          if ($View[0].scrollHeight <= $View.height()) return;
          if ($(e.target).hasClass('xs-slider')) return false;
          var _pos_ =
            ((e.pageY - $Container.offset().top - $XSliderHeight / 2) * $XViewScrollHeight) / $XPaneScrollHeight;
          $View.scrollTop(_pos_);
        });
      $Slider.draggable({
        axis: 'y',
        containment: $Pane,
        start: function () {
          $DragOn = true;
          $Pane.addClass('xs-pane-drag');
        },
        stop: function () {
          $DragOn = false;
          window.setTimeout(function () {
            $Pane.removeClass('xs-pane-drag');
          }, 500);
        },
        drag: function (e, ui) {
          var _pos_ = parseInt((ui.position.top * $XViewScrollHeight) / $XPaneScrollHeight);
          $View.scrollTop(_pos_);
        },
      });
    });
  };
  $.validator.setDefaults({
    ignore: '',
    onkeyup: false,
    onclick: false,
    onfocusout: false,
    showErrors: function (errormap, errors) {
      if (this.numberOfInvalids()) {
        $.alert(errors[0].message);
        errors[0].element.focus();
      }
    },
    submitHandler: function ($FORM) {
      $FORM.submit();
    },
  });
  $.clippy = function (e) {
    var $OPT = $.extend({ text: null, done: null }, this),
      $TXT;
    if (!!window.clipboardData) {
      $TXT = $OPT.text.call(e.currentTarget);
      window.clipboardData.setData('Text', $TXT);
      if ($.type($OPT.done) === 'function') $OPT.done.call(e.currentTarget);
      return true;
    } else return $.alert($message.NO_SUPPORT_BROWSER);
  };
  $.fn.style = function (x) {
    if (window.getComputedStyle) return document.defaultView.getComputedStyle(this[0], null).getPropertyValue(x);
    else if (this[0].currentStyle)
      return this[0].currentStyle[
        x.replace(/-([a-z])/g, function (m, a) {
          return a.toUpperCase();
        })
      ];
    return null;
  };
  $.fn.outerHtml = function (a) {
    if (a) return this.replaceWith(a);
    else if ('outerHTML' in this[0]) return this[0].outerHTML;
    else return this.clone().wrapAll('<div/>').parent().html();
  };
  $.fn.fixBorderBox = function () {
    if (!$('html', $doc).is('.ie67')) return this;
    return this.not('.fix-border-box,:hidden')
      .each(function () {
        var $OO = $(this),
          w =
            $OO.width() -
            parseInt($OO.css('padding-left')) -
            parseInt($OO.css('padding-right')) -
            parseInt($OO.css('border-left-width')) -
            parseInt($OO.css('border-right-width')),
          h =
            $OO.height() -
            parseInt($OO.css('padding-top')) -
            parseInt($OO.css('padding-bottom')) -
            parseInt($OO.css('border-top-width')) -
            parseInt($OO.css('border-bottom-width'));
        $OO.width(w).height(h).addClass('fix-border-box');
      })
      .end();
  };
  $.fn.action = function ($act) {
    return this.each(function () {
      var $OO = $(this);
      $OO.on('click', function () {
        if ($act === 'back') history.back();
        else if ($act === 'close') window.close();
        return false;
      });
    });
  };
  $.fn.invertChecked = function ($MODE, $CALLBACK) {
    return this.each(function () {
      var $OO = $(this).prop('checked', false),
        $CARTS = $($OO.data('cart')).prop('checked', false);
      $OO.on('change', function () {
        if (!$MODE || $MODE === 'INVERT')
          $CARTS.prop('checked', function () {
            return !this.checked;
          });
        else if ($MODE === 'ALL') $CARTS.prop('checked', !!$OO.prop('checked'));
        if ($.type($CALLBACK) === 'function') $CALLBACK.call(this);
      });
    });
  };
  $.fn.permission = function () {
    return this.filter('.require-login,.require-permission').each(function () {
      var $OO = $(this);
      if ($OO.hasClass('require-login')) $OO.on('click', $.proxy($.alert, null, $message.REQUIRE_LOGIN));
      else if ($OO.hasClass('require-permission')) $OO.on('click', $.proxy($.alert, null, $message.UNAUTHORIZED));
      $OO = null;
    });
  };
  $.fn.exposion = function ($OPT) {
    $OPT = $.extend({ at: null, hotkey: null, color: '#101010' }, $OPT);
    return this.each(function () {
      var $OO = $(this).closest('a,input,button');
      $OO.on('click', function () {
        if (!!$('html', $doc).is('.ie67')) return $.alert($message.SUPPORTED_BY_IE8);
        if (!!$OPT.at || !!$OO.data('at')) $($OPT.at || $OO.data('at')).expose({ color: $OPT.color, zIndex: 999 });
        return false;
      });
      if (!!$OPT.hotkey)
        $doc.off('keydown.expose').on('keydown.expose', { hotkey: $OPT.hotkey }, function (e) {
          $OO.trigger('click');
          return false;
        });
    });
  };
  $.fn.xselect = function () {
    return this.each(function () {
      var $OO = $(this).css('user-select', 'none');
      $OO
        .children('a.text')
        .on('click', function () {
          $(this).next('ul').removeClass('invisible');
          return false;
        })
        .parent()
        .on('mouseleave', function () {
          $(this).children('ul').addClass('invisible');
        })
        .find('.a')
        .on('click', function () {
          var $OO = $(this).addClass('on').children('input').prop('checked', true).end();
          if (/^null$/i.test($OO.children(':radio').val())) $OO.children(':radio').prop('checked', false);
          $OO
            .closest('ul')
            .find('.a')
            .not($OO)
            .removeClass('on')
            .children(':radio')
            .prop('checked', false)
            .end()
            .end()
            .end()
            .addClass('invisible')
            .prev('a.text')
            .text($OO.text());
        })
        .end()
        .on('SetLabel', function () {
          if (!!$(':checked', this).length) $(':checked', this).parent('.a').triggerHandler('click');
          $('a.text', this).text($('.on', this).text());
        })
        .trigger('SetLabel');
    });
  };
  $.fn.searching = function () {
    return this.each(function () {
      var $OO = $(this);
      $OO.on('submit', function () {
        var $scope = $('input[name$="cope"]:checked,select[name$="cope"]:checked');
        var $keyword = $(':text[name="shKey"],:text[name="keyword"]', this);
        if (!$keyword.val().length) return $.alert($message.NO_KEYWORD);
        else if (parseInt($keyword.attr('minlength')) > $keyword.val().length)
          return $.alert(parseInt($keyword.attr('minlength')) + '자 이상 입력하세요.');
        if (/%/g.test($keyword.val())) {
          $keyword.val($keyword.val().replace(/%/g, '％'));
        }
        this.action = this.action.replace(/@SCOPE/i, $scope.val()).replace(/@KEYWORD/i, $keyword.val());
        $OO = $scope = $keyword = null;
        return xi.go(this.action);
      });
    });
  };
  $.fn.detectTextLength = function ($OPT) {
    $OPT = $.extend({ selector: this.selector, to: null }, $OPT);
    var $Timer = null;
    var $TTT = function () {
      var xxx = $.map($($OPT.selector), function (TXT) {
        return $(TXT).val();
      }).join('\n');
      return xxx.replace(/[\r\n]/g, '').length;
    };
    this.each(function () {
      var $OO = $(this),
        $UpdateBox = $($OPT.to, $OO.parents('form')),
        $TextNode = $('.text-length', $UpdateBox),
        $TextLength = 0,
        $MaxTextNode = $('.max-text-length', $UpdateBox),
        $MaxTextLength = !$.isEmptyObject($MaxTextNode) ? parseInt($MaxTextNode.text().replace(/[^0-9]/g, '')) : 0,
        $PreviousText = null;
      $MaxTextNode.text(util.number_format($MaxTextLength));
      $OO
        .on('focus.dtl-input', function () {
          $OO.triggerHandler('blur.dtl-timeclear');
          $Timer = window.setInterval(function () {
            $TextLength = $TTT();
            if (!!$MaxTextLength) {
              if ($TextLength > $MaxTextLength) {
                $.alert($MaxTextLength + ' 자를 초과했습니다.');
                $OO.val($PreviousText).focus();
                $TextLength = $PreviousText.length;
              } else $PreviousText = $OO.val();
            }
            console.log('asdfasdf');
            $TextNode.text(util.number_format($TextLength));
          }, 500);
        })
        .on('blur.dtl-timeclear', function () {
          if (!!$Timer) window.clearInterval($Timer);
        })
        .on('blur.dtl-update', function () {
          $TextLength = $TTT();
          $TextNode.text(util.number_format($TextLength));
        });
      $UpdateBox = $MaxTextNode = null;
    })
      .eq(0)
      .triggerHandler('blur');
    return this;
  };
  $.fn.autolink = function () {
    var $protocol = '(https?|ftp|news|telnet|irc|mms)://',
      $domain = '(?:[\\w\\-]+\\.)+(?:[a-z]+)',
      $max255 = '(?:1[0-9]{2}|2[0-4][0-9]|25[0-5]|[1-9]?[0-9])',
      $ip = '(?:' + $max255 + '\\.){3}' + $max255,
      $port = '(?::([0-9]+))?',
      $user = '(?:/~[\\w-]+)?',
      $path = '((?:/[\\w!"$-/:-@]*)*)',
      $hash = '(?:#([\\w!-@]+))?',
      $regx = new RegExp(
        '(' + $protocol + '(' + $domain + '|' + $ip + '|localhost' + ')' + $port + $user + $path + $hash + ')',
        'ig'
      );
    var $F = function () {
      var $Node = $(this);
      $Node.contents().each(function () {
        if (
          $.inArray(this.nodeName.toLowerCase(), [
            'a',
            'pre',
            'xml',
            'textarea',
            'input',
            'select',
            'option',
            'code',
            'script',
            'style',
            'iframe',
            'button',
            'img',
            'embed',
            'object',
            'ins',
          ]) !== -1
        )
          return;
        else if (this.nodeType === 3) {
          var $Node = $(this),
            $CONTENT = this.nodeValue;
          if (
            $CONTENT.length < 5 ||
            !/(https?|ftp|news|telnet|irc|mms):\/\//i.test($CONTENT) ||
            !$Node.parent().length ||
            !!$Node.parent().is('a')
          )
            return;
          $Node.replaceWith(
            $CONTENT.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace($regx, '<a href="$1" target="_blank">$1</a>')
          );
          $Node = $CONTENT = null;
        } else $F.call(this);
      });
      $Node = null;
    };
    return this.each(function () {
      $F.call(this);
    });
  };
  $.fn.affixy = function ($OPT) {
    if ($('html', $doc).is('.mobile,.linux,.ie6')) return this;
    if (!$.$AFFIXY)
      $.$AFFIXY = function (e) {
        var $OPT = this.$OPT,
          $WH = parseInt($win.height()),
          $WST = parseInt($win.scrollTop()),
          $WSL = parseInt($win.scrollLeft()),
          $BH = 0;
        if (!!$OPT.before) $OPT.before.call(this, e, $OPT);
        if ($OPT.where === 'top') {
          if (!this.below && $WST > this.origin.offset.top) {
            $OPT.classTo.addClass($OPT.className);
            this.below = true;
          } else if (!!this.below && $WST <= this.origin.offset.top) {
            $OPT.classTo.removeClass($OPT.className);
            this.below = false;
          }
        } else if ($OPT.where === 'bottom') {
          if (!this.below && $WST + $WH - this.origin.outerHeightWithMargin < this.origin.offset.top) {
            $OPT.classTo.addClass($OPT.className);
            this.below = true;
          } else if (!!this.below && $WST + $WH - this.origin.outerHeightWithMargin >= this.origin.offset.top) {
            $OPT.classTo.removeClass($OPT.className);
            this.below = false;
          }
        }
        if (!!this.below && !!$OPT.boundaryTop) {
          if ($WST + $WH < $OPT.boundaryTop.offset().top + this.origin.outerHeightWithMargin) {
            this.mt = $WST - ($OPT.boundaryTop.offset().top - $WH) - this.origin.outerHeightWithMargin;
            this.css('bottom', this.mt);
            this.collision = true;
          } else if (!!this.collision) {
            this.css('bottom', '');
            this.collision = false;
          }
        }
        if (!!this.below && !!$OPT.boundaryBottom) {
          $BH = parseInt($OPT.boundaryBottom.offset().top + $OPT.boundaryBottom.outerHeight());
          if ($WST + this.origin.outerHeightWithMargin > $BH) {
            this.mt = $BH - ($WST + this.origin.outerHeightWithMargin) + this.origin.top;
            if (Math.abs(this.mt) <= this.origin.outerHeightWithMargin || !this.collision) this.css('top', this.mt);
            this.collision = true;
          } else if (!!this.collision) {
            this.css('top', '');
            this.collision = false;
          }
        }
        if (!!this.below && !!$WSL) {
          this.css('left', this.origin.offset.left - $WSL);
          this.leftscrolled = true;
        } else if (!!this.leftscrolled) {
          this.css('left', '');
          this.leftscrolled = false;
        }
        if (!!$OPT.after) $OPT.after.call(this, e, $OPT);
      };
    $OPT = $.extend(
      { event: 'scroll load', before: null, scroll: null, after: null, boundaryRight: null, boundaryBottom: null },
      $OPT
    );
    if ($.type($OPT.before) !== 'function') $OPT.before = null;
    if ($.type($OPT.after) !== 'function') $OPT.after = null;
    return this.each(function () {
      var $OO;
      $OO = $.extend(($OO = $(this).addClass('affixy-ready')), {
        origin: {
          top: parseInt($OO.css('top')) || 0,
          width: parseInt($OO.width()),
          innerWidth: parseInt($OO.innerWidth()),
          outerWidth: parseInt($OO.outerWidth()),
          height: parseInt($OO.height()),
          innerHeight: parseInt($OO.innerHeight()),
          outerHeight: parseInt($OO.outerHeight()),
          outerHeightWithMargin: $OO.outerHeight(true) + (parseInt($OO.css('top')) || 0),
          offset: {
            top: parseInt($OO.offset().top) - (parseInt($OO.css('margin-top')) || 0) - (parseInt($OO.css('top')) || 0),
            left: parseInt($OO.offset().left),
          },
          position: { top: parseInt($OO.position().top), left: parseInt($OO.position().left) },
        },
      });
      $OO.$OPT = $.extend({ className: 'affixy', classTo: $OO, where: 'top' }, $OPT);
      if (!$OPT.classTo.jquery) $OO.$OPT.classTo = $OO.parents($OPT.classTo);
      if (!!$OPT.boundaryRight && !$OPT.boundaryRight.jquery)
        $OO.$OPT.boundaryRight = $OO.$OPT.classTo
          .find($OPT.boundaryRight)
          .addBack($OO.$OPT.classTo)
          .filter($OPT.boundaryRight)
          .eq(0);
      if (!!$OPT.boundaryTop && !$OPT.boundaryTop.jquery)
        $OO.$OPT.boundaryTop = $OO.$OPT.classTo
          .find($OPT.boundaryTop)
          .addBack($OO.$OPT.classTo)
          .filter($OPT.boundaryTop)
          .eq(0);
      if (!!$OPT.boundaryBottom && !$OPT.boundaryBottom.jquery)
        $OO.$OPT.boundaryBottom = $OO.$OPT.classTo
          .find($OPT.boundaryBottom)
          .addBack($OO.$OPT.classTo)
          .filter($OPT.boundaryBottom)
          .eq(0);
      $win.on($OO.$OPT.event, $.proxy($OO.$OPT.scroll || $.$AFFIXY, $OO));
    });
  };
  $.scrollTo = function ($OBJ, $Forced) {
    var $OPT = $.extend(
      {
        action: function () {
          if (!$win.scrollTop() || !!$Forced) $win.scrollTop(parseInt(!!$OBJ.jquery ? $OBJ.offset().top : $OPT.top));
        },
        top: 0,
        timeout: 100,
      },
      !!$OBJ.jquery ? {} : $OBJ
    );
    if (!!this.setted) window.clearTimeout(this.setted);
    this.setted = window.setTimeout($OPT.action, $OPT.timeout);
  };
  $.fn.save = function ($OPT) {
    function variablize($DatasS) {
      var $ITEMS = {};
      $.each($DatasS, function ($K, $V) {
        if (typeof $V === 'object') {
          if ($V.length > 1) {
            $V = variablize($V);
          } else {
            $V = !!$V.jquery ? $V : $($V);
            var $Type = $V.attr('type');
            if ($.inArray($Type, ['radio', 'checkbox']) !== -1) $V = $V.filter(':checked').val();
            else if ($V.is('select')) $V = $V.val();
            else $V = $.trim($V.val() || $V.html());
          }
        }
        $ITEMS[$K] = $V;
      });
      return $ITEMS;
    }
    var $FORM = $(this);
    $OPT = $.extend(
      {
        apikey: null,
        apiservice: null,
        apiscope: null,
        start: 30,
        autosave: 0,
        trigger: null,
        params: null,
        savedatas: null,
        done: function () {},
        complete: function () {},
        excute: function () {
          var $Trigger = $(this),
            $Datas = { params: {}, savedatas: {} };
          $.each($OPT.params, function (key, node) {
            $Datas.params[key] = $(node, $FORM);
          });
          $Datas.params.svScope = $Trigger.data('scope') || 'temp';
          $Datas.params.svCode = $Datas.params.svCode.val($Datas.params.svCode.val().replace(/^([^A-Z0-9])/gi, ''));
          $.each($OPT.savedatas, function (key, node) {
            $Datas.savedatas[key] = $(node, $FORM);
          });
          $Datas = $.extend(variablize($Datas.params), { savedatas: variablize($Datas.savedatas) });
          if ($.param($Datas) === $OPT.$Datas) return false;
          else $OPT.$Datas = $.param($Datas);
          return new xAPI({
            host: null,
            apikey: $OPT.apikey || xAPI.keys.get('SAVE'),
            service: $OPT.apiservice || 'save',
            scope: $OPT.apiscope || 'saving',
          })
            .ajax({ type: 'POST', data: $Datas })
            .on('done', $OPT.done)
            .on('complete', $OPT.complete);
        },
      },
      $OPT
    );
    return this.each(function () {
      if (!!$OPT.start) window.setTimeout($OPT.excute, $OPT.start * 1000);
      if (!!$OPT.autosave) window.setInterval($OPT.excute, $OPT.autosave * 1000);
      if (!!$OPT.trigger) $(this).on('click', $OPT.trigger, $OPT.excute);
    });
  };
  $.fn.stylizer = function ($OPT, $Container) {
    $OPT = $.extend({ at: null, key: 'FONTSIZE', size: 12, max: 34, min: 12, ratio: 1 }, $OPT);
    var $Content = $($OPT.at, $Container);
    $OPT.size = parseInt($.xcookie($OPT.key) || $Content.eq(0).css('font-size'));
    return this.on('stylizer', function () {
      $($OPT.at, $Container).css({ 'font-size': parseInt($OPT.size * $OPT.ratio) + 'px' });
    })
      .each(function () {
        var $XX = $(this);
        $('button', this).on('click', function () {
          var $OO = $(this);
          if ($OO.hasClass('sizeup')) $OPT.size = $OPT.size >= $OPT.max ? $OPT.max : $OPT.size + 2;
          else if ($OO.hasClass('sizedown')) $OPT.size = $OPT.size <= $OPT.min ? $OPT.min : $OPT.size - 2;
          $OPT.size = parseInt($OPT.size);
          $XX.triggerHandler('stylizer');
          $.xcookie($OPT.key, $OPT.size);
          return false;
        });
      })
      .triggerHandler('stylizer');
  };
  $.resizeTo = function ($w, $h) {
    if (!window.opener) return false;
    window.resizeTo($w || 450, $h || 450);
    if (!$w) $w = $('body').width() + 20;
    if (!$h) $h = $('body').height() + 80;
    if ($w > screen.width) $w = screen.width - 40;
    if ($h > screen.height) $h = screen.height - 40;
    window.resizeTo($w, $h);
    window.moveTo(screen.width / 2 - $w / 2, screen.height / 2 - $h / 2);
  };
})(jQuery);
(function (window, $) {
  var xAPIKeys = function ($Keys) {
    this.$Keys = $.extend(
      {
        MEMBER: '02b5735e610d0fb7c9b96154f613d14f',
        BLOG: 'e47ee0fde13da2929dedc8b832ec50d0',
        NOVEL: 'd7dbfddf567dca21794d120f48678360',
        BOARD: 'd3794a73beff03f17a8c6468fd89cb17',
        SAVE: '04edcb7ec252a14884eb86d1452dc81a',
        WEBTOON: 'afb89a2b142acb39bf74d7bec4699077',
        TOONCOMICS: 'a4eaf7910c8d6361c8d018c49c85c346',
        EVENTAJAX: '55836389b6e1c04a759f3d77e989a210',
      },
      $Keys
    );
    return this;
  };
  xAPIKeys.prototype.get = function ($Module) {
    return this.$Keys[$Module.toUpperCase()];
  };
  xAPIKeys.prototype.set = function ($Module, $Key) {
    this.$Keys[$Module.toUpperCase()] = $Key;
    return this;
  };
  var xAPI = function ($OPT) {
    var $xapi = this;
    $xapi.$EVENTS = {};
    $xapi.option = $.extend(
      { host: xi.host('api'), apikey: null, service: null, scope: null, params: null, sid: $.xcookie($SID) },
      $OPT
    );
    return this;
  };
  xAPI.keys = new xAPIKeys();
  xAPI.prototype.keys = xAPI.keys;
  xAPI.prototype.setOption = function ($OPT) {
    var $xapi = this;
    if (!!$OPT.length) $xapi = $.extend($xapi, $OPT);
  };
  xAPI.prototype.geturl = function ($OPT) {
    var $option = this.option;
    if (!!$option.params && typeof $option.params === 'object')
      $option.params = $.map($option.params, function (val, key) {
        return '/' + key + '/' + val;
      }).join('');
    return (
      ($option.host || '') +
      '/module/api' +
      '/apiCode/' +
      $option.apikey +
      '/service/' +
      $option.service +
      '/scope/' +
      $option.scope +
      '/' +
      $SID +
      '/' +
      $option.sid +
      '/HTTP_FORCED_AJAX/' +
      true +
      ($option.params || '') +
      (typeof $OPT === 'object' && $OPT.dataType !== 'json' ? '' : '/?AJAX=?')
    );
  };
  xAPI.prototype.ajax = function ($OPT) {
    var $xapi = this;
    $xapi.$ajax = $.ajax($.extend({ type: 'GET', dataType: 'json', url: $xapi.geturl($OPT) }, $OPT))
      .done(function ($R) {
        $xapi.result = $R.result;
        if ($xapi.hasError()) {
          var $message = $xapi.getMessage();
          $xapi.trigger('error.before', $message);
          if ($xapi.$EVENTS['error'] !== undefined) $xapi.trigger('error', $message);
          else $.alert($message);
          return $xapi.trigger('error.after', $message);
        } else {
          $xapi.trigger('done.before', $R);
          if ($xapi.$EVENTS['done'] !== undefined) $xapi.trigger('done', $R);
          return $xapi.trigger('done.after', $R);
        }
      })
      .fail(function ($R, nul, Error) {
        return $.alert(Error + '\n\n' + $R.responseText);
      })
      .complete(function () {
        return $xapi.trigger('complete');
      });
    return $xapi;
  };
  xAPI.prototype.hasError = function () {
    return this.result.constant !== 'SUCCESS';
  };
  xAPI.prototype.getMessage = function () {
    return this.result.message || '';
  };
  xAPI.prototype.on = function ($ID, $FUNC, $SCOPE) {
    var $xapi = this,
      $ev;
    $ID = $ID.toLowerCase();
    $ev = $xapi.$EVENTS[$ID] || [];
    $ev.push({ callback: $FUNC, scope: $SCOPE || $xapi });
    $xapi.$EVENTS[$ID] = $ev;
    return $xapi;
  };
  xAPI.prototype.trigger = function ($ID) {
    var $xapi = this,
      $ev,
      $args;
    $ID = $ID.toLowerCase();
    $ev = $xapi.$EVENTS[$ID];
    if (!!$ev) {
      $args = Array.prototype.slice.call(arguments).slice(1);
      for ($i in $ev) if ($ev[$i].callback.apply($ev[$i].scope, $args) === false) return false;
    }
    return true;
  };
  window.xAPI = xAPI;
})(window, jQuery);
(function ($) {
  $doc.ready(function () {
    if (!!$('html', $doc).is('.ie67'))
      try {
        doument.execCommand('BackgroundImageCache', false, true);
      } catch (e) {}
    if (!!$('html', $doc).is('.mobile,.linux') && !$win.scrollTop()) $.scrollTo({ top: 0 });
  });
})(jQuery);
var $message = {
  REQUIRE_LOGIN: '로그인 후 이용 가능합니다.',
  REQUIRE_ADULT: '성인인증을 거치지 않았습니다.',
  UNAUTHORIZED: '권한이 없습니다.',
  NO_SUPPORT_BROWSER: '지원하지 않는 웹브라우저입니다.',
  SUPPORTED_BY_IE8: 'IE8부터 지원하는 기능입니다.',
  NO_KEYWORD: '검색어가 없습니다.',
  INSERTED: '등록했습니다.',
  DELETED: '삭제했습니다.',
  WANT_TO_DELETE: '정말 삭제할까요?',
  WANT_TO_NOVEL_ENTRY_DELETE: '선택한 글을 정말 삭제하시겠습니까?',
  SUBSCRIBED: '선호작으로 등록했습니다.',
  UNSUBSCRIBED: '선호작을 취소했습니다.',
};
var assets_site_core_xied_js = '202006';
('use static');
(function ($) {
  var html = '';
  html += '<div class="isms_pop">';
  html += '<p class="pop_title">';
  html += '<b>ISMS-P 인증정보</b>';
  html += '<a href="#" class="btn-close-popup"><span>icon</span></a>';
  html += '</p>';
  html +=
    '<img src="/assets/legacy/www/tpl/site/00-munpia-hd/images/img_isms_p.jpg?time=20250410" style="width:205px;padding:30px 0 10px 0;">';
  html += '<p style="text-align:left;padding-left:30px;"><b>인증범위&nbsp;:&nbsp;</b>문피아 웹 소설 서비스</p>';
  html += '<p style="text-align:left;padding-left:30px;"><b>유효기간&nbsp;:&nbsp;</b>2025.03.19 ~ 2028.03.18</p>';
  html += '</div>';
  $(function () {
    $('#btn-isms').on('click', function (e) {
      e.preventDefault();
      $('.isms_pop').remove();
      $('#footer').append(html);
    });
    $('footer').on('click', '.btn-close-popup', function (e) {
      e.preventDefault();
      $('.isms_pop').remove();
    });
  });
})(jQuery);
!(function (i) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
    ? (module.exports = i(require('jquery')))
    : i(jQuery);
})(function (i) {
  'use strict';
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = 'mozHidden'), (n.visibilityChange = 'mozvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = 'webkitHidden'), (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find('.slick-active')
      .attr({ 'aria-hidden': 'false' })
      .find('a,input,button,select')
      .attr({ tabindex: '0' });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ('boolean' == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          'number' == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr('data-slick-index', e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
            : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = 'translate(' + i + 'px,0px)'), s.$slideTrack.css(o))
                      : ((o[s.animType] = 'translate(0px,' + i + 'px)'), s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = 'translate3d(' + e + 'px,0px,0px)')
              : (o[s.animType] = 'translate3d(0px,' + e + 'px,0px)'),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        'object' == typeof t &&
        t.each(function () {
          var t = i(this).slick('getSlick');
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] = e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] = 'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
            e.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite && e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
          : e.$prevArrow.add(e.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', tabindex: '-1' }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass('slick-dotted'), t = i('<ul />').addClass(o.options.dotsClass), e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find('li').first().addClass('slick-active');
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider.children(e.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '');
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass('draggable');
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 1)) {
        for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
          var d = document.createElement('div');
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div');
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({ width: 100 / l.options.slidesPerRow + '%', display: 'inline-block' });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
          ? (n = d)
          : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger('breakpoint', [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case 'next':
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case 'index':
          var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger('focus');
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off('click.slick', e.selectHandler),
        i(window).off('orientationchange.slick.slick-' + e.instanceUid, e.orientationChange),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off('dragstart', e.preventDefault),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr('style'), e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
              i(this).attr('style', i(this).data('originalStyling'));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ''), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
        : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (t) {
        t.stopImmediatePropagation();
        var o = i(this);
        setTimeout(function () {
          e.options.pauseOnFocus && ((e.focussed = o.is(':focus')), e.autoPlay());
        }, 0);
      });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack.children('.slick-slide').eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack.children('.slick-slide').eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find('.slick-slide').each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
            }),
            Math.abs(i(e).attr('data-slick-index') - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a,input,button,select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({ role: 'tabpanel', id: 'slick-slide' + e.instanceUid + t, tabindex: -1 }),
              -1 !== s && i(this).attr({ 'aria-describedby': 'slick-slide-control' + e.instanceUid + s });
          }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  });
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr('tabindex', 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler), i.$nextArrow.on('keydown.slick', i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i('li', e.$dots).on('click.slick', { message: 'index' }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on('keydown.slick', e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, e.swipeHandler),
        e.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, e.swipeHandler),
        e.$list.on('touchend.slick mouseup.slick', { action: 'end' }, e.swipeHandler),
        e.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, e.swipeHandler),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        i(window).on('orientationchange.slick.slick-' + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on('resize.slick.slick-' + e.instanceUid, i.proxy(e.resize, e)),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({ data: { message: !0 === e.options.rtl ? 'next' : 'previous' } })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({ data: { message: !0 === e.options.rtl ? 'previous' : 'next' } }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i('img[data-lazy]', e).each(function () {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || n.$slider.attr('data-sizes'),
            r = document.createElement('img');
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                }),
                n.$slider.trigger('lazyLoaded', [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                n.$slider.trigger('lazyLoadError', [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2)
            : ((o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find('.slick-slide').slice(o, s)),
        'anticipated' === n.options.lazyLoad)
      )
        for (var r = o - 1, l = s, d = n.$slider.find('.slick-slide'), a = 0; a < n.options.slidesToScroll; a++)
          r < 0 && (r = n.slideCount - 1), (t = (t = t.add(d.eq(r))).add(d.eq(l))), r--, l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find('.slick-slide'))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find('.slick-cloned').slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide && e(n.$slider.find('.slick-cloned').slice(-1 * n.options.slidesToShow));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: 'next' } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr('tabindex', 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: 'previous' } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          ((r = document.createElement('img')).onload = function () {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t.attr('src', o).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading'),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window';
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack.children(e.options.slide).addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i = 'boolean' == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = 'translate(' + e + ',' + t + ')'), o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ',' + t + ',0px)'), o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode && i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
          !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children('.slick-slide').length)))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children('.slick-slide').length)
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth && i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({ position: 'relative', right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 })
            : i(s).css({ position: 'relative', left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
      }),
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css('height', e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ('object' === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === i.type(arguments[1])
                ? (n = 'responsive')
                : void 0 !== arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[o] = s;
        else if ('multiple' === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ('responsive' === n)
          for (t in s)
            if ('array' !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger('setPosition', [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? 'top' : 'left'),
        'top' === i.positionProp ? i.$slider.addClass('slick-vertical') : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = 'transform'), (i.transformType = 'transform'), (i.transitionType = 'transition')),
        (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t.eq(t.length - 1 - n.options.slidesToShow).addClass('slick-center')
              : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center');
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'));
      ('ondemand' !== n.options.lazyLoad && 'anticipated' !== n.options.lazyLoad) || n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned');
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned');
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            i(this).attr('id', '');
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is('.slick-slide') ? i(e.target) : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'));
      s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i)))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick('getSlick')).slideCount <= l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass('slick-loading');
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? 'right'
            : 'left'
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
      if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX))
        return !1;
      if (
        (!0 === o.touchObject.edgeHit && o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case 'right':
          case 'up':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        'vertical' != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger('swipe', [o, t]));
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ('ontouchend' in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf('mouse'))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i);
            break;
          case 'move':
            e.swipeMove(i);
            break;
          case 'end':
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
          (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
              (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && 'right' === t) || (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow))
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger('unslick', [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
          i.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
          0 === i.currentSlide
            ? (i.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              i.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
            ? (i.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              i.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              i.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find('li').removeClass('slick-active').end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ('object' == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
('use strict');
(function ($) {
  $('.top_banner_list').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.btn_prev'),
    nextArrow: $('.btn_next'),
    cssEase: 'linear',
    speed: 250,
  });
})(jQuery);
$(document).ready(function () {
  $('button[name=alarmButton]').on('click', function () {
    let value = $(this).data('value');
    let url = $(this).data('url');
    let blogId = $(this).data('blog-id');
    const alarmValue = ['Y', 'N'];
    $('#alarm-notice-modal').hide();
    if (alarmValue.indexOf(value) < 0) {
      alert('알림 설정할 수 없습니다.');
      location.reload();
    } else {
      new xAPI({
        apikey: xAPI.keys.get('MEMBER'),
        service: 'member',
        scope: 'member-alarm-page-update',
        params: { alarmState: value },
      })
        .ajax()
        .on('done', function ($R) {
          if (value == 'Y') {
            location.href = '/page/j/view/s/messages';
          } else {
            location.href = url + '/' + blogId + '/message';
          }
        });
    }
    return;
  });
});
$(function () {
  var chkView = 0;
  $('#header .navbar-main .mdi').on('mouseenter', function () {
    $('#header .navbar-sub').hide().filter($(this).next()).show();
  });
  $('#FORM-LOGIN').validate({
    messages: { mbUser: '아이디를 입력하세요.', mbPass: '비밀번호를 입력하세요.' },
    submitHandler: function ($FORM) {
      $FORM.submit();
    },
  });
  $('#NOVEL-ITEMS').on('click', '.navgenre a', function () {
    var $Oo = $(this),
      $Nav = $Oo.parents('nav'),
      $Views = $Nav.parent().find('.type-list .items'),
      $UrlPrefix = $Oo.parents('#NOVEL-ITEMS').data('url').replace(/\/$/, '');
    $Nav.find('.item').removeClass('on').filter($Oo).addClass('on');
    $.each($Nav.data('group').split(','), function (i, $Group) {
      new xAPI({ host: null, apikey: xAPI.keys.get('NOVEL'), service: 'novel', scope: 'latest-novel' })
        .ajax({
          type: 'POST',
          data: { group: $Group, genre: $.url('#', $Oo.attr('href')), limit: '10', addwhere: 'MAIN-B1' },
        })
        .on('done', function ($R) {
          var $View = $Views.filter('#NOVEL-VIEW-' + $Group.replace(/\./g, '')).empty();
          if (!$R.api.items.length) {
            return false;
          }
          var $Itemset = $R.api.items,
            $Node = null,
            $Link = null;
          $.each($Itemset, function (j, $Novel) {
            var $Date = !!$Novel.nvTimeUpdate
              ? new Date($Novel.nvTimeUpdate * 1000).toString().match(/([0-9]{2}:[0-9]{2}):/)[1]
              : '00:00';
            $Node = $('<li />').appendTo($View);
            $Link = $('<a />')
              .attr({ href: $UrlPrefix + '/' + $Novel.nvSrl, class: 'item zoom' })
              .appendTo($Node);
            $('<span />').text($Novel.nvAuthor).addClass('author').appendTo($Link);
            $('<span />')
              .text($Novel.nvTitle)
              .addClass('title' + ($Novel.nvOptExclusive === 'Y' ? ' heavy' : ''))
              .appendTo($Link);
            $('<span />').text($Date).addClass('time').appendTo($Link);
          });
        });
    });
    return false;
  });
  $('#PLATINUM-ITEMS').on('click', '.navgenre a', function () {
    var $Oo = $(this),
      $Nav = $Oo.parents('nav'),
      $View = $Nav.parent().find($Nav.data('view')),
      $UrlPrefix = $Oo.parents('#PLATINUM-ITEMS').data('url').replace(/\/$/, '');
    $Nav.find('.item').removeClass('on').filter($Oo).addClass('on');
    var isAdultCheck = $(this).data('adult');
    new xAPI({ host: null, apikey: xAPI.keys.get('NOVEL'), service: 'novel', scope: 'latest-novel' })
      .ajax({
        type: 'POST',
        data: { group: 'pl.serial', genre: $.url('#', $Oo.attr('href')), limit: '14', addwhere: 'MAIN-B2' },
      })
      .on('done', function ($R) {
        $View.empty();
        if (!$R.api.items.length) {
          return false;
        }
        var $Itemset = util.array_chunk($R.api.items, 7),
          $Nodes = null,
          $Node = null,
          $Link = null;
        $.each($Itemset, function (i, $Items) {
          $Nodes = $('<ul />').addClass('subitems zoom').appendTo($View);
          $.each($Items, function (j, $Novel) {
            $Node = $('<li />').appendTo($Nodes);
            var list_image = $Novel.nvCover + 'tb.jpg';
            var list_url = $UrlPrefix + '/' + $Novel.nvSrl;
            var adultClass = '';
            if (!!$Novel.nvOptAdult) {
              adultClass = ' label_19';
              if (isAdultCheck == 'N') {
                list_image = '/assets/legacy/www/tpl/novel/core/covers/cover_private.png';
              }
            }
            $Link = $('<a />').attr({ href: list_url, class: 'item zoom' }).appendTo($Node);
            $('<p />')
              .addClass(isAdultCheck)
              .append($('<img />').attr({ src: xi.host('static') + list_image, class: 'cover', alt: $Novel.nvTitle }))
              .append($('<span />').attr({ class: 'mpic pic-bookcover' }))
              .append(!!$Novel.nvOptAdult ? $('<span />').attr({ class: 'mpic ' }) : null)
              .addClass('cover-collapse' + adultClass)
              .appendTo($Link);
            $('<span />')
              .html($Novel.nvGnMainTitle + (!!$Novel.nvGnSubTitle ? ',&nbsp;' + $Novel.nvGnSubTitle : ''))
              .addClass('genre')
              .appendTo($Link);
            $('<span />')
              .text($Novel.nvTitle)
              .addClass('title' + ($Novel.nvOptExclusive === 'Y' ? ' heavy' : ''))
              .appendTo($Link);
            $('<span />').text($Novel.nvAuthor).addClass('author').appendTo($Link);
          });
        });
      });
    return false;
  });
  $('#EXCLUSIVE-PLATINUM')
    .on('mouseup', '.tabs a', function () {
      var $OO = $(this);
      if ($OO.parent().hasClass('ui-state-active')) {
        return xi.go($OO.data('href'));
      }
      return false;
    })
    .tabs({ active: $('#EXCLUSIVE-PLATINUM').data('active') || 0 });
  $('#BEST-PLATINUM')
    .on('mouseup', '.tabs a', function () {
      var $OO = $(this);
      if ($OO.parent().hasClass('ui-state-active')) {
        return xi.go($OO.data('href'));
      }
      return false;
    })
    .tabs({ active: $('#BEST-PLATINUM').data('active') || 0 });
  $('#TABS-EBOOK')
    .on('mouseup', '.tabs a', function () {
      var $OO = $(this);
      if ($OO.parent().hasClass('ui-state-active')) {
        return xi.go($OO.data('href'));
      }
      return false;
    })
    .tabs();
  $('#TABS-ROMANCE')
    .on('mouseup', '.tabs a', function () {
      var $OO = $(this);
      if ($OO.parent().hasClass('ui-state-active')) {
        return xi.go($OO.data('href'));
      }
      return false;
    })
    .tabs();
  $('#FORM-NOVEL-SEARCH').searching();
});
$('.btn-example-today').click(function () {
  var $href = $(this).attr('id');
  layer_popup($href);
});
$('.btn-example-best').click(function () {
  var $href = $(this).attr('id');
  layer_popup($href);
});
function layer_popup(el) {
  var $el = $(el);
  var isDim = $el.prev().hasClass('dimBg');
  isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
  var $elWidth = ~~$el.outerWidth(),
    $elHeight = ~~$el.outerHeight(),
    docWidth = $(document).width(),
    docHeight = $(document).height();
  if ($elHeight < docHeight || $elWidth < docWidth) {
    $el.css({ top: '10%', marginLeft: -$elWidth / 2 });
  } else {
    $el.css({ top: 0, left: 0 });
  }
  $(document).on('click', '.btn-layerClose', function () {
    $('#today_layer').hide();
  });
  $('.layer .dimBg').click(function () {
    $('.dim-layer').fadeOut();
    return false;
  });
}
function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getFullYear(), 4) +
    '년 ' +
    leadingZeros(d.getMonth() + 1, 2) +
    '월 ' +
    leadingZeros(d.getDate(), 2) +
    '일 ' +
    leadingZeros(d.getHours(), 2) +
    '시 기준';
  return s;
}
function get_today() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (('' + month).length == 1) {
    month = '0' + month;
  }
  if (('' + day).length == 1) {
    day = '0' + day;
  }
  return year + '' + month + '' + day;
}
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();
  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++) zero += '0';
  }
  return zero + n;
}
var pagenum = 1;
var f_num = 1;
var b_num = 10;
$(document).on('click', '#prev_btn', function () {
  var sel_date = $('#today_sel_date').val();
  sel_date = sel_date.replace('년', ' ');
  sel_date = sel_date.replace('월', ' ');
  sel_date = sel_date.replace('일', ' ');
  sel_date = sel_date.replace(/(\s*)/g, '');
  var chart_section = $('#chart_section').val();
  var pagenum = $('#page').val();
  if (pagenum == 1) {
    return false;
  } else {
    $('#next_btn').css('display', '');
    $('#prev_btn').css('display', 'none');
    $('#page').val('1');
    var string_f_num = '00';
    var string_b_num = '11';
    $('.rank_num').html(string_f_num + ' ~ ' + string_b_num + '시');
    $('#now_time').html($('#today_sel_date').val() + ' ' + string_b_num + '시 기준');
    $.ajax({
      url:
        '/tpl/site/00-munpia-hd/ajax_today_best_chart.php?date=' +
        sel_date +
        '&mode=plsa.eachtoday&shin=test&section=' +
        chart_section +
        '&page=' +
        $('#page').val() +
        '&adult=' +
        $('#adult_chk').val(),
      type: 'GET',
      dataType: 'html',
      data: $('#novelchange_send_form').serialize(),
      success: function (res) {
        $('#tbl_content').html(res);
        setTimeout(function () {
          today_best_popup_view2(chart_section, 2);
        }, 500);
      },
    });
  }
});
$('body').click(function (e) {
  if ($('#today_layer').css('display') == 'block' && $('#ui-datepicker-div').css('display') == 'none') {
    if (chkView == 1 && !$('#today_layer').has(e.target).length) {
      chkView = 0;
      $('#today_layer').hide();
      return false;
    }
  }
});
function today_best_popup_view(section, page_num) {
  chkView = 1;
  var sel_date = $('#today_sel_date').val();
  var string_f_num = '01';
  var string_b_num = '12';
  var today = get_today();
  sel_date = sel_date.replace('년', ' ');
  sel_date = sel_date.replace('월', ' ');
  sel_date = sel_date.replace('일', ' ');
  sel_date = sel_date.replace(/(\s*)/g, '');
  var date = new Date();
  var hour = '';
  var min = date.getMinutes();
  if (section == 'today') {
    hour = date.getHours();
    if (min < 16) {
      hour = hour == 0 ? 23 : hour - 1;
    }
  } else if (section == 'contoday') {
    if (min > 1) {
      hour = date.getHours();
    } else {
      hour = date.getHours() - 1;
    }
  } else {
    if (min > 10) {
      hour = date.getHours();
    } else {
      hour = date.getHours() - 1;
    }
  }
  $('#now_time').html($('#today_sel_date').val() + ' ' + hour + '시 기준');
  if (sel_date == today) {
    if (hour <= 12) {
      $('#page').val('1');
      var hour2 = new Date(Date.parse(date) - 1000 * 60 * 60 * 11);
      hour2 = hour2.getHours();
      if (hour < 10) {
        string_b_num = '0' + hour.toString();
      } else {
        string_b_num = hour.toString();
      }
      if (min < 16) {
        hour2 = hour2 == 0 ? 23 : hour2 - 1;
      }
      if (hour2 < 10) {
        string_f_num = '0' + hour2.toString();
      } else {
        string_f_num = hour2.toString();
      }
      if (string_f_num == '00') {
      }
      if (string_b_num == '00') {
      }
      $('#next_btn').css('display', 'none');
      $('#prev_btn').css('display', 'none');
    } else {
      $('#page').val('2');
      var f_num = hour - 11;
      if (f_num < 10) {
        string_f_num = '0' + f_num.toString();
      } else {
        string_f_num = f_num.toString();
      }
      string_b_num = +hour.toString();
      $('#next_btn').css('display', 'none');
      $('#prev_btn').css('display', '');
    }
  } else {
    $('#next_btn').css('display', '');
    $('#prev_btn').css('display', '');
  }
  $('.rank_num').html(string_f_num + ' ~ ' + string_b_num + '시');
  if ($(this).attr('class') == 'btn-example-today') {
    $('#chart_section').val('today');
  } else if ($(this).attr('class') == 'btn-example-best') {
    $('#chart_section').val('plsa.eachtoday');
  }
  var chart_section = $('#chart_section').val();
  var html = '';
  if (page_num == 1) {
    $.ajax({
      url:
        '/tpl/site/00-munpia-hd/ajax_today_best_chart.php?date=' +
        sel_date +
        '&section=' +
        section +
        '&page=' +
        $('#page').val() +
        '&scroll_page=' +
        page_num +
        '&adult=' +
        $('#adult_chk').val(),
      type: 'GET',
      async: false,
      dataType: 'html',
      success: function (res) {
        $('#tbl_content').html(res);
      },
    });
  } else {
    $.ajax({
      url:
        '/tpl/site/00-munpia-hd/ajax_today_best_scroll.php?date=' +
        sel_date +
        '&section=' +
        section +
        '&page=' +
        $('#page').val() +
        '&scroll_page=' +
        page_num +
        '&adult=' +
        $('#adult_chk').val(),
      type: 'GET',
      async: false,
      dataType: 'html',
      success: function (res) {
        $('#tbl_data').append(res);
      },
    });
  }
}
function today_best_popup_view2(section, page_num) {
  var sel_date = $('#today_sel_date').val();
  sel_date = sel_date.replace('년', ' ');
  sel_date = sel_date.replace('월', ' ');
  sel_date = sel_date.replace('일', ' ');
  sel_date = sel_date.replace(/(\s*)/g, '');
  $.ajax({
    url:
      '/tpl/site/00-munpia-hd/ajax_today_best_scroll.php?date=' +
      sel_date +
      '&section=' +
      section +
      '&page=' +
      $('#page').val() +
      '&scroll_page=' +
      page_num +
      '&adult=' +
      $('#adult_chk').val(),
    type: 'GET',
    async: false,
    dataType: 'html',
    success: function (res) {
      $.when($('#tbl_data').append(res)).done(function () {
        if (section == 'contoday') {
          if (page_num < 5) {
            today_best_popup_view2(section, page_num + 1);
          }
        }
      });
    },
  });
}
$(document).on('click', '#next_btn', function () {
  var sel_date = $('#today_sel_date').val();
  sel_date = sel_date.replace('년', ' ');
  sel_date = sel_date.replace('월', ' ');
  sel_date = sel_date.replace('일', ' ');
  sel_date = sel_date.replace(/(\s*)/g, '');
  var today = get_today();
  var chart_section = $('#chart_section').val();
  var pagenum = $('#page').val();
  var date = new Date();
  var hour = '';
  var min = date.getMinutes();
  hour = date.getHours();
  if (min < 16) {
    hour = hour == 0 ? 23 : hour - 1;
  }
  if (pagenum == 2) {
    return false;
  } else {
    $('#page').val('2');
    if (sel_date == today) {
      var hour2 = new Date(Date.parse(date) - 1000 * 60 * 60 * 11);
      hour2 = hour2.getHours();
      if (min < 16) {
        hour2 = hour2 == 0 ? 23 : hour2 - 1;
      }
      if (hour < 10) {
        string_b_num = '0' + hour.toString();
      } else {
        string_b_num = hour.toString();
      }
      if (hour2 < 10) {
        string_f_num = '0' + hour2.toString();
      } else {
        string_f_num = hour2.toString();
      }
      $('#now_time').html(sel_date + ' 12시 기준');
    } else {
      var string_f_num = '12';
      var string_b_num = '23';
    }
    $('#prev_btn').css('display', '');
    $('#next_btn').css('display', 'none');
    $('.rank_num').html(string_f_num + ' ~ ' + string_b_num + '시');
    $('#now_time').html($('#today_sel_date').val() + ' ' + string_b_num + '시 기준');
    $.ajax({
      url:
        '/tpl/site/00-munpia-hd/ajax_today_best_chart.php?date=' +
        sel_date +
        '&mode=plsa.eachtoday&shin=test&section=' +
        chart_section +
        '&page=' +
        $('#page').val() +
        '&adult=' +
        $('#adult_chk').val(),
      type: 'GET',
      dataType: 'html',
      data: $('#novelchange_send_form').serialize(),
      success: function (res) {
        $('#tbl_content').html(res);
        setTimeout(function () {
          today_best_popup_view2(chart_section, 2);
        }, 500);
      },
    });
  }
});
$(document).on('change', '#today_sel_date', function () {
  var sel_date = $('#today_sel_date').val();
  $('#page').val('1');
  f_num = 1;
  pagenum = 1;
  var string_f_num = '00';
  var string_b_num = '11';
  var today = get_today();
  $('#now_time').html(sel_date + ' 12시 기준');
  sel_date = sel_date.replace('년', ' ');
  sel_date = sel_date.replace('월', ' ');
  sel_date = sel_date.replace('일', ' ');
  sel_date = sel_date.replace(/(\s*)/g, '');
  var date = new Date();
  var hour = '';
  var min = date.getMinutes();
  if (min > 15) {
    hour = date.getHours();
  } else {
    hour = date.getHours() - 1;
  }
  hour = date.getHours();
  if (min < 16) {
    hour = hour == 0 ? 23 : hour - 1;
  }
  if (sel_date == today) {
    if (hour <= 12) {
      var hour2 = new Date(Date.parse(date) - 1000 * 60 * 60 * 11);
      hour2 = hour2.getHours();
      if (min < 16) {
        hour2 = hour2 == 0 ? 23 : hour2 - 1;
      }
      if (hour < 10) {
        string_b_num = '0' + hour.toString();
      } else {
        string_b_num = hour.toString();
      }
      if (hour2 < 10) {
        string_f_num = '0' + hour2.toString();
      } else {
        string_f_num = hour2.toString();
      }
      if (string_f_num == '00') {
      }
      if (string_b_num == '00') {
      }
      $('#next_btn').css('display', 'none');
      $('#prev_btn').css('display', 'none');
    } else {
      $('#next_btn').css('display', '');
      $('#prev_btn').css('display', '');
    }
  } else {
    $('#next_btn').css('display', '');
    $('#prev_btn').css('display', 'none');
  }
  if ($('#chart_section').val() == 'contoday' && sel_date == '20170626') {
    string_b_num = '24';
    string_f_num = '13';
    $('#next_btn').css('display', 'none');
    $('#prev_btn').css('display', 'none');
  }
  $('#now_time').html($('#today_sel_date').val() + ' ' + string_b_num + '시 기준');
  $('.rank_num').html(string_f_num + ' ~ ' + string_b_num + '시');
  var chart_section = $('#chart_section').val();
  $.ajax({
    url:
      '/tpl/site/00-munpia-hd/ajax_today_best_chart.php?date=' +
      sel_date +
      '&mode=plsa.eachtoday&shin=test&section=' +
      chart_section +
      '&page=1' +
      '&adult=' +
      $('#adult_chk').val(),
    type: 'GET',
    dataType: 'html',
    data: $('#novelchange_send_form').serialize(),
    success: function (res) {
      $('#tbl_content').html(res);
      setTimeout(function () {
        today_best_popup_view2(chart_section, 2);
      }, 500);
    },
  });
});
$(document).on('click', '#date_img', function () {
  $('#today_sel_date').datepicker('show');
});
function onGoBtn(rank, chk_num) {
  $('#data_' + rank + '_' + chk_num).css('background', '#EDEDED');
  $('#data_' + rank + '_' + chk_num).css('cursor', 'default');
  $('#data_' + rank + '_' + chk_num + ' .today_tbl_hit').css('color', '#EDEDED');
  $('#data_' + rank + '_' + chk_num + ' .today_tbl_prefer').css('color', '#EDEDED');
  $('#best_more_btn_' + rank + '_' + chk_num).css('display', '');
}
function outGoBtn(rank, chk_num) {
  $('#data_' + rank + '_' + chk_num).css('background', '#265293');
  $('#data_' + rank + '_' + chk_num + ' .today_tbl_hit').css('color', '#FFF');
  $('#data_' + rank + '_' + chk_num + ' .today_tbl_prefer').css('color', '#FFF');
  $('#best_more_btn_' + rank + '_' + chk_num).css('display', 'none');
}
function androidIosChk() {
  var varUA = navigator.userAgent.toLowerCase();
  var deviceName = '';
  if (varUA.match('android') != null) {
    deviceName = 'android';
  } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
    deviceName = 'ios';
  } else {
    deviceName = 'etc';
  }
  return deviceName;
}
var assets_site_00_munpia_hd_ux_js = '202007';
('use static');
(function ($) {
  var html = '';
  html += '<div class="isms_pop">';
  html += '<p class="pop_title">';
  html += '<b>ISMS-P 인증정보</b>';
  html += '<a href="#" class="btn-close-popup"><span>icon</span></a>';
  html += '</p>';
  html +=
    '<img src="/assets/legacy/www/tpl/site/00-munpia-hd/images/img_isms_p.jpg?time=20250410" style="width:205px;padding:30px 0 10px 0;">';
  html += '<p style="text-align:left;padding-left:30px;"><b>인증범위&nbsp;:&nbsp;</b>문피아 웹 소설 서비스</p>';
  html += '<p style="text-align:left;padding-left:30px;"><b>유효기간&nbsp;:&nbsp;</b>2025.03.19 ~ 2028.03.18</p>';
  html += '</div>';
  $(function () {
    $('#btn-isms').on('click', function (e) {
      e.preventDefault();
      $('.isms_pop').remove();
      $('#footer').append(html);
    });
    $('footer').on('click', '.btn-close-popup', function (e) {
      e.preventDefault();
      $('.isms_pop').remove();
    });
  });
})(jQuery);
(function ($) {
  var $Novelous = $('#NOVELOUS').css('user-select', 'none');
  var $Preview = $('#NAV-PREVIEW');
  function _hashtag($hashtag) {
    return $.trim($hashtag).replace(/^.+#\/?/, '');
  }
  function _novelous($hashtag) {
    $Novelous.append(
      $('<div/>').css({
        width: '100%',
        height: '100%',
        background: '#ffffff',
        position: 'absolute',
        top: '0',
        left: '0',
        'z-index': '80',
        opacity: '0.2',
      })
    );
    return '/page/novelous/' + _hashtag($hashtag) + ' #NOVELOUS-CONTENTS';
  }
  function _preview($hashtag) {
    return '/page/novelous.preview/' + _hashtag($hashtag) + ' #NAV-PREVIEW > div';
  }
  $Novelous
    .on('click', '#SECTION-HEADER h2', function () {
      $Novelous.find('#SECTION-HEADER a.trigger-table').trigger('click');
      return false;
    })
    .on('click', '#SECTION-HEADER a.trigger-table', function () {
      var $OO = $(this).toggleClass('on');
      $Novelous.find('#NAV-TABLE').stop().slideToggle(500, 'easeOutCubic');
      $OO.hasClass('on') ? $.xcookie('NS_MENU', true) : $.removeCookie('NS_MENU');
      return false;
    })
    .on('click', '#NAV-TABLE a.ma', function () {
      $Novelous.load(_novelous(this.href), function () {
        $('#SECTION-HEADER a.trigger-table').trigger('click');
      });
      return false;
    })
    .on('click', '#NAV-TABLE a.ma_19', function () {
      $Novelous.load(_novelous(this.href), function () {
        $('#SECTION-HEADER a.trigger-table').trigger('click');
      });
      return false;
    })
    .on('click', '#SECTION-MENU a.ma:not(a.trigger-config)', function () {
      var $OO = $(this).parent();
      $OO.addClass('on').siblings().not(':has(a.trigger-config)').removeClass('on');
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#SECTION-MENU a.ma_19:not(a.trigger-config)', function () {
      var $OO = $(this).parent();
      $OO.addClass('on').siblings().not(':has(a.trigger-config)').removeClass('on');
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#SECTION-MENU a.trigger-config', function () {
      var $OO = $(this).parent();
      $OO.toggleClass('on');
      $('#SECTION-CONFIG').stop().slideToggle(500, 'easeOutCubic');
      $OO.hasClass('on') ? $.xcookie('NS_CONFIG', true) : $.removeCookie('NS_CONFIG');
      return false;
    })
    .on('click', '#SECTION-CONFIG a.ma', function () {
      $.xcookie('NS_URL', _hashtag(this.href));
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#SECTION-CONFIG a.ma_19', function () {
      $.xcookie('NS_URL', _hashtag(this.href));
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#SECTION-SEARCH-OPTION a.trigger-genres', function () {
      var $OO = $(this).toggleClass('on');
      $Novelous.find('#NAV-GENRES').stop().slideToggle(500, 'easeOutCubic');
      return false;
    })
    .on('submit', '#SECTION-SEARCH-OPTION form', function () {
      var $OO = $(this),
        $Keyword = $.trim($OO.find('.xput').val());
      if (/%/g.test($Keyword)) {
        $Keyword = $Keyword.replace(/%/g, '％');
        $('#SECTION-SEARCH-OPTION form').find('.xput').val($Keyword);
      }
      if ($Keyword.length < 2) {
        return $.alert('검색어는 2자 이상이어야 합니다.');
      }
      var order_val = '';
      if ($Keyword) {
        order_val = '/order/search_result';
      }
      $Novelous.load(_novelous('keyword/' + encodeURIComponent($Keyword) + order_val), function () {
        $OO = $Novelous.find('#SECTION-SEARCH-OPTION input[name="keyword"]');
        $Keyword = $.trim($OO.val());
        $OO.focus().val('').val($Keyword);
      });
      return false;
    })
    .on('click', '#SECTION-SEARCH-OPTION button.trigger-cancel', function () {
      $Novelous.load(_novelous('reset/true'));
      return false;
    })
    .on('click', '#SECTION-SUBSCRIBE-OPTION a.trigger-category', function () {
      var $OO = $(this).toggleClass('on');
      $Novelous
        .find('#NAV-CATEGORY')
        .stop()
        .slideToggle(500, 'easeOutCubic')
        .end()
        .find('#NAV-GROUPS')
        .stop()
        .slideUp(500, 'easeOutCubic');
      return false;
    })
    .on('click', '#SECTION-SUBSCRIBE-OPTION a.trigger-groups', function () {
      var $OO = $(this).toggleClass('on');
      $Novelous
        .find('#NAV-GROUPS')
        .stop()
        .slideToggle(500, 'easeOutCubic')
        .end()
        .find('#NAV-CATEGORY')
        .stop()
        .slideUp(500, 'easeOutCubic');
      return false;
    })
    .on('click', '#NAV-GENRES a.ma,#NAV-CATEGORY a.ma,#NAV-GROUPS a.ma', function () {
      $.xcookie('NS_URL', _hashtag(this.href));
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#NAV-GENRES a.ma_19,#NAV-CATEGORY a.ma_19,#NAV-GROUPS a.ma_19', function () {
      $.xcookie('NS_URL', _hashtag(this.href));
      $Novelous.load(_novelous(this.href));
      return false;
    })
    .on('click', '#SECTION-LIST a.trigger-unsubscribe', function () {
      var $OO = $(this),
        $Item = $OO.parent('li.mi');
      $Novelous.trigger('unsubscribe', [
        $OO,
        function () {
          $Item.slideUp(250, function () {
            $Item.remove();
          });
        },
      ]);
      return false;
    })
    .on('click', 'section.ns-pagination a.ma', function () {
      $Novelous.load(_novelous(this.href), function () {
        $('html,body').animate({ scrollTop: $Novelous.offset().top }, '500', 'easeOutCubic');
      });
      return false;
    })
    .on('click', 'section.ns-pagination a.ma_19', function () {
      $Novelous.load(_novelous(this.href), function () {
        $('html,body').animate({ scrollTop: $Novelous.offset().top }, '500', 'easeOutCubic');
      });
      return false;
    })
    .on('click', '#SECTION-LIST a.trigger-preview', function () {
      var $OO = $(this).parent();
      $OO.siblings().removeClass('mi-on');
      if (!$OO.hasClass('mi-on')) {
        $Preview.empty().load(_preview(this.href)).appendTo($OO.addClass('mi-on')).hide().fadeIn(500, 'easeOutCubic');
      } else {
        $OO.removeClass('mi-on');
        $Preview.fadeOut(500, 'easeOutCubic');
      }
      return false;
    })
    .on('click', '#NAV-PREVIEW a.trigger-preview-subscribe', function () {
      var $OO = $(this);
      $Novelous.trigger('subscribe', [
        $OO,
        function () {
          $Preview.load(_preview($OO.get(0).href));
        },
      ]);
      return false;
    })
    .on('click', '#NAV-PREVIEW a.trigger-preview-unsubscribe', function () {
      var $OO = $(this);
      $Novelous.trigger('unsubscribe', [
        $OO,
        function () {
          $Preview.load(_preview($OO.get(0).href));
        },
      ]);
      return false;
    })
    .on('subscribe', function (e, $OO, $Done) {
      $Done = $Done || function () {};
      var $xapi = new xAPI({
        host: null,
        apikey: xAPI.keys.get('NOVEL'),
        service: 'novel',
        scope: 'prefer-subscribe',
        params: '/nvSrl/' + $OO.data('uno') + '/ssSign/' + $Novelous.data('usign'),
      })
        .ajax()
        .on('done', $Done);
      return false;
    })
    .on('unsubscribe', function (e, $OO, $Done) {
      $Done = $Done || function () {};
      if (!$.confirm($message.WANT_TO_DELETE)) return false;
      var $xapi = new xAPI({
        host: null,
        apikey: xAPI.keys.get('NOVEL'),
        service: 'novel',
        scope: 'prefer-unsubscribe',
        params: '/ppSrl/' + $OO.data('uno') + '/ssSign/' + $Novelous.data('usign'),
      })
        .ajax()
        .on('done', $Done);
      return false;
    });
  $(document).ready(function () {
    var urlParams = new URL(location.href).searchParams;
    var name = urlParams.get('mode');
    if (name == 'prefer') {
      var moveUrl = window.location.href + '#/group/subscribe/sort/my';
      $Novelous.load(_novelous(moveUrl));
    }
  });
})(jQuery);
var assets_site_grace_ux_novelous_js = '202006';
(function ($) {
  var $window = $(window);
  var $report = $('#report');
  var $reportForm = $('#FormReport', $report);
  var $reportOverlay = $('<div />').attr('id', 'report-overlay').appendTo('body');
  var $reportItems = $('> fieldset > div', $reportForm);
  var $reportItem = $(':radio[name="riSrl"]', $reportForm);
  var $rptContent = $('textarea#report-content', $reportForm);
  var $reportClose = $('#report-close', $report);
  var $rptTarget;
  var $rptResult = [];
  $doc.on('click', 'a.report-trigger', function () {
    var $this = $(this);
    var $rptData = $this.data('report');
    if ($this.data('reported')) return $.alert($message.COMPLETED_BY_MANAGER);
    if (!$rptData || $rptResult[$rptData])
      return $.alert(!$rptData || $rptResult[$rptData] === 'success' ? $message.REPORTED : $rptResult[$rptData]);
    $rptTarget = $this;
    $reportOverlay.css('opacity', 0.5).show();
    $reportItems.hide().not('.report-complete').show();
    $(':hidden[name="rptData"]').val($this.data('report'));
    $reportItem.prop('checked', false);
    $rptContent.prop('disabled', true).val(null).hide();
    $report
      .css({
        top: $window.height() / 2 - $report.height() / 2 - 20,
        left: $window.width() / 2 - $report.width() / 2,
        opacity: 0,
      })
      .show()
      .animate({ opacity: 1 }, 200);
    return false;
  });
  $reportItem.on('click', function () {
    if ($(this).is('#report-etc')) $rptContent.prop('disabled', false).show().focus();
    else $rptContent.prop('disabled', true).hide();
    $report.css({
      top: $window.height() / 2 - $report.height() / 2 - 20,
      left: $window.width() / 2 - $report.width() / 2,
    });
  });
  $reportClose.add($reportOverlay).on('click', function () {
    $report.hide();
    $reportOverlay.animate({ opacity: 0 }, 200, function () {
      $(this).hide();
    });
  });
  $reportForm.on('submit', function () {
    if (!$reportItem.filter(':checked').length) $.alert($message.NOSELECT_ITEM);
    else if ($reportItem.filter(':checked').is('#report-etc') && !$rptContent.val()) {
      $.alert('내용을 적지 않았습니다.');
      $rptContent.focus();
    } else
      $.post(
        this.action,
        $reportForm.serialize(),
        function (x) {
          $reportItems
            .hide()
            .filter('.report-complete')
            .show()
            .html(x.error || x.success);
          $rptResult[$rptTarget.data('report')] = x.error || 'success';
          if (x.success) $rptTarget.data('report', null);
          setTimeout(function () {
            $reportClose.click();
          }, 1000);
          $report.css({
            top: $window.height() / 2 - $report.height() / 2 - 20,
            left: $window.width() / 2 - $report.width() / 2,
          });
        },
        'json'
      );
  });
})(jQuery);
$message = $.extend(
  {
    COMPLETED_BY_MANAGER: '이미 관리자에 의해 처리되었습니다.',
    REPORTED: '이미 신고되었습니다.',
    NOSELECT_ITEM: '신고 항목을 선택하지 않았습니다.',
  },
  $message
);
var assets_report_legender_ux_js = '202007';
(function ($) {
  $.fn.extend({
    leanModal: function (options) {
      var defaults = { dialog: null, top: 100, overlay: 0.5, closeButton: null, openCallback: null };
      var overlay = $("<div id='lean_overlay'></div>");
      $('body').append(overlay);
      options = $.extend(defaults, options);
      return this.each(function () {
        var o = options;
        $(this).click(function (e) {
          var modal_id = o.dialog;
          $('#lean_overlay').click(function () {
            close_modal(modal_id);
          });
          $(o.closeButton).click(function () {
            close_modal(modal_id);
          });
          $(modal_id + ' .modal_close').click(function (e) {
            close_modal(modal_id);
            e.preventDefault();
          });
          var modal_width = $(modal_id).outerWidth();
          $('#lean_overlay').css({ display: 'block', opacity: 0 });
          $('#lean_overlay').fadeTo(200, o.overlay);
          $(modal_id).css({
            display: 'block',
            position: 'fixed',
            opacity: 0,
            'z-index': 11000,
            left: 50 + '%',
            'margin-left': -(modal_width / 2) + 'px',
            top: o.top + 'px',
          });
          $(modal_id).fadeTo(200, 1);
          e.preventDefault();
          if (o.openCallback != null) {
            o.openCallback($(this));
          }
        });
      });
      function close_modal(modal_id) {
        $('#lean_overlay').fadeOut(200);
        $(modal_id).css({ display: 'none' });
      }
    },
    leanClose: function () {
      $('#lean_overlay').click();
    },
  });
})(jQuery);
(function ($) {
  $.fn.story = function () {
    return this.on('click', function () {
      $(this).parents('#STORY-BOX').toggleClass('story-opened');
      $(this).toggleClass('arrow-up');
      return false;
    });
  };
  $.fn.otherNovels = function () {
    return this.on('click', function () {
      $(this).next('.other-novels-box').stop().slideToggle(500, 'easeOutQuad');
      return false;
    });
  };
  $.fn.novelXviewer = function ($OPT) {
    var $ConfigBox,
      $XViewerBox,
      $Pageset,
      $WH = parseInt($win.height());
    $WH = $WH > 720 ? $WH - 200 : 500;
    $OPT = $.extend(
      {
        XVMode: null,
        XVPaddingTop: null,
        XVPaddingRight: null,
        XVPaddingBottom: null,
        XVPaddingLeft: null,
        XVFont: null,
        XVFontSize: null,
        XVLineHeight: null,
        XVColor: null,
        XVBackgroundColor: null,
      },
      $OPT
    );
    $XViewer = $('#xviewer').XIEDViewer({
      height: $WH,
      flashVars: { owner: '$XViewer', novel: novel.xvurl, uk: novel.xvkey, uv: novel.xviv },
      params: { allowFullScreen: 'true', allowScriptAccess: 'always', wmode: 'opaque' },
      onChangePosition: function (DocumentPosition, ViewPosition) {
        if (!$Pageset) $Pageset = $XViewerBox.find('.xv-pageset').show();
        if (ViewPosition.mode === 0) {
          var $per = parseInt((ViewPosition.pos / (ViewPosition.max - ViewPosition.size)) * 100);
          $Pageset.text($per + ' / 100 %');
        } else $Pageset.text(ViewPosition.pos + 1 + ' / ' + ViewPosition.count);
        $XVPosition = parseInt(DocumentPosition.index) + '|' + parseInt(DocumentPosition.pos);
      },
      onGotoPrevSubject: function () {
        var $OO = $('.movepage .prev', $Novel);
        return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
      },
      onGotoNextSubject: function () {
        var $OO = $('.movepage .next', $Novel);
        return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_NEXT);
      },
      onInit: function () {
        if ($('html', $doc).is('.ie67')) $XViewerBox.find('.trigger-expand,.trigger-contract').remove();
        $XViewerBox.find('.xv-modeset').show();
        $XViewerBox.find('.xv-canvas-modeset').hide();
        $('#MOVEPAGE', $Novel).affixy({
          event: 'scroll',
          className: 'xmoving',
          classTo: $Novel,
          where: 'bottom',
          before: function (e) {
            if (!this.hasClass('afficy-width')) this.width(this.origin.width).addClass('afficy-width');
            if (e.type === 'resize') this.width(this.origin.width - (this.origin.outerWidth - $Novel.width()));
          },
          boundaryTop: '#FDUMMY',
        });
        $win.triggerHandler('scroll');
        $XViewer
          .setViewMode($.xcookie('XVMode') || $OPT.XVMode || 0)
          .setPaddingTop($OPT.XVPaddingTop || 9)
          .setPaddingRight($OPT.XVPaddingRight || 10)
          .setPaddingBottom($OPT.XVPaddingBottom || 9)
          .setPaddingLeft($OPT.XVPaddingLeft || 10)
          .setFontName($.xcookie('XVFont') || $OPT.XVFont || 'Batang')
          .setFontSize($.xcookie('XVFontSize') || $OPT.XVFontSize || 17)
          .setFontHeight($.xcookie('XVLineHeight') || $OPT.XVLineHeight || 180)
          .setFontColor($.xcookie('XVColor') || $OPT.XVColor || '0x494949')
          .setBackgroundColor($.xcookie('XVBackgroundColor') || $OPT.XVBackgroundColor || '0xe3efee');
        $XVPosition = novel.poffset.split('|');
        if (!!$XVPosition[0]) $XViewer.setViewPosition($XVPosition[0], $XVPosition[1]);
      },
      onLoadCompleted: function () {
        $XViewer.$.tabIndex = 1000;
        $XViewer.$.focus();
      },
    });
    $ConfigBox = $('#CONFIG-BOX', $Novel)
      .on('click', 'ul.fontfamily button', function () {
        var $OO = $(this).data('fontfamily');
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeTextFont($OO);
        } else {
          $XViewer.setFontName($OO);
        }
      })
      .on('click', 'ul.fontsize button', function () {
        var $OO = parseInt($(this).data('fontsize'));
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeTextSize($OO);
        } else {
          $XViewer.setFontSize($OO);
        }
      })
      .on('click', 'ul.lineheight button', function () {
        var $OO = parseInt($(this).data('lineheight'));
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeLinePer($OO);
        } else {
          $XViewer.setFontHeight($OO);
        }
      })
      .on('click', 'ul.color button', function () {
        var $OO = '0x' + $(this).data('hex');
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeTextColor('0x' + $(this).data('hex'));
        } else {
          $XViewer.setFontColor($OO);
        }
        $('#ENTRY-CONTENT', $Novel).css({ color: '#' + $(this).data('hex') });
      })
      .on('click', 'ul.background button', function () {
        var $OO = '0x' + $(this).data('hex');
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeBackgroundColor('0x' + $(this).data('hex'));
          $('#parentsView').css('background-color', '#' + $(this).data('hex'));
          $('#viewer_container').css('background-color', '#' + $(this).data('hex'));
        } else {
          $XViewer.setBackgroundColor($OO);
        }
        $('#ENTRY-CONTENT', $Novel).css({ 'background-color': '#' + $(this).data('hex') });
      })
      .on('click', 'ul.theme button', function () {
        var $OO = $(this).data('hex').split('|');
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          munpiaViewer.changeThemeColor('0x' + $OO[1], '0x' + $OO[0]);
          $('#parentsView').css('background-color', '#' + $OO[1]);
          $('#viewer_container').css('background-color', '#' + $OO[1]);
        } else {
          $XViewer.setFontColor('0x' + $OO[0]).setBackgroundColor('0x' + $OO[1]);
        }
        $('#ENTRY-CONTENT', $Novel).css({ color: '#' + $OO[0], 'background-color': '#' + $OO[1] });
      })
      .on('click', 'strong.reset', function () {
        if ($.xcookie('viewerType') == 1 && typeof munpiaViewer !== 'undefined') {
          $.xcookie('XVFont', 'Batang', { expires: 365 });
          $.xcookie('XVFontSize', 17, { expires: 365 });
          $.xcookie('XVLineHeight', 180, { expires: 365 });
          $.xcookie('XVBackgroundColor', '0xe3efee', { expires: 365 });
          $.xcookie('XVColor', '0x494949', { expires: 365 });
          var w = munpiaViewer.defaultWidth - munpiaViewer.padding * 2;
          munpiaViewer.reSizeView(w, munpiaViewer.defaultHeight);
          $('#parentsView').css('background-color', '#e3efee');
          $('#viewer_container').css('background-color', '#e3efee');
        } else {
          $XViewer
            .setViewMode(0)
            .setFontName('Batang')
            .setFontSize(17)
            .setFontHeight(180)
            .setFontColor('0x494949')
            .setBackgroundColor('0xe3efee');
        }
        $('#ENTRY-CONTENT', $Novel).css({ color: '#494949', 'background-color': '#e3efee' });
      })
      .find('.color button,.background button')
      .css('background-color', function () {
        return '#' + $(this).data('hex');
      })
      .end();
    $XViewerBox = $('#XVIEWER-BOX', $Novel)
      .on('click', '.trigger-twopage', function () {
        $XViewer.setViewMode(2);
      })
      .on('click', '.trigger-onepage', function () {
        $XViewer.setViewMode(1);
      })
      .on('click', '.trigger-scroll', function () {
        $XViewer.setViewMode(0);
      })
      .on('click.viewer-expand', '.trigger-expand', function () {
        $('body', $doc).css('overflow', 'hidden');
        $(this).removeClass('trigger-expand').addClass('trigger-contract');
        $XViewerBox
          .css({ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 'z-index': '5000' })
          .find($XViewer.$)
          .width('100%')
          .height('100%');
        $XViewerBox.one('keydown.viewer-contract', { hotkey: 'esc' }, function (e) {
          $XViewerBox.find('.trigger-contract').trigger('click');
        });
      })
      .on('click.viewer-contract', '.trigger-contract', function () {
        $('body', $doc).css('overflow', 'auto');
        $(this).removeClass('trigger-contract').addClass('trigger-expand');
        $XViewerBox
          .css({ position: 'relative', top: '', left: '', width: '', height: '', 'z-index': '' })
          .find($XViewer.$)
          .width('100%')
          .height($WH);
      });
    var $canvasViewerBox = $('#viewer_wrap', $Novel)
      .on('click.viewer-expand', '.trigger-expand', function () {
        $('body', $doc).css('overflow', 'hidden');
        $(this).removeClass('trigger-expand').addClass('trigger-contract');
        $canvasViewerBox.css({ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 'z-index': '5000' });
        var canvasDefaultWidth = $(window).width();
        var canvasDefaultHeight = $(window).height() - 100;
        if (canvasDefaultWidth % 2 !== 0) {
          canvasDefaultWidth += 1;
        }
        munpiaViewer.canvasParentObj.css({ width: canvasDefaultWidth + 'px', height: canvasDefaultHeight + 'px' });
        if (munpiaViewer.G_ViewerMode === 2) {
          munpiaViewer.canvasObj.css({
            width: canvasDefaultWidth + 'px',
            height: canvasDefaultHeight + 'px',
            'text-align': 'center',
          });
        } else {
          munpiaViewer.canvasObj.css({
            width: canvasDefaultWidth + munpiaViewer.scrollWidth + 'px',
            height: canvasDefaultHeight + 'px',
          });
        }
        var w = canvasDefaultWidth - munpiaViewer.padding * 2;
        munpiaViewer.reSizeView(w, canvasDefaultHeight, true);
      })
      .on('click.viewer-contract', '.trigger-contract', function () {
        $('body', $doc).css('overflow', 'auto');
        $(this).removeClass('trigger-contract').addClass('trigger-expand');
        $canvasViewerBox.css({ position: 'relative', top: '', left: '', width: '', height: '', 'z-index': '' });
        var canvasDefaultWidth = munpiaViewer.defaultWidth;
        var canvasDefaultHeight = munpiaViewer.defaultHeight;
        munpiaViewer.canvasParentObj.css({ width: canvasDefaultWidth + 'px', height: canvasDefaultHeight + 'px' });
        munpiaViewer.canvasObj.css({
          width: canvasDefaultWidth + munpiaViewer.scrollWidth + 'px',
          height: canvasDefaultHeight + 'px',
          'text-align': 'unset',
        });
        w = canvasDefaultWidth - munpiaViewer.padding * 2;
        munpiaViewer.reSizeView(w, canvasDefaultHeight, false);
      });
    $('#ENTRY-VIEW-HEADER', $Novel).on('click', '.view-config', function () {
      $ConfigBox.toggle();
    });
    window.setTimeout(function () {
      $XViewerBox.find('a.getflash').css('display', 'inline-block');
    }, 1500);
    return this;
  };
  $.fn.novelview = function () {
    $('#COMMENTS .ctrl-nav', $Novel).stylizer(
      { at: '#COMMENTS .content', key: 'COMMENT-FONTSIZE', min: 13, max: 27 },
      $Novel
    );
    this.find('#MOVEPAGE:not(.xmovepage)')
      .affixy({
        event: 'load scroll resize',
        className: 'moving',
        classTo: $Novel,
        before: function (e) {
          if (!this.hasClass('afficy-width')) this.width(this.origin.width).addClass('afficy-width');
          if (e.type === 'resize') this.width(this.origin.width - (this.origin.outerWidth - $Novel.width()));
        },
        boundaryBottom: '#ENTRY-CONTENT-BOX',
      })
      .filter('.affixy-ready')
      .children('a')
      .css('opacity', 0.4)
      .on('mouseenter mouseleave', function (e) {
        if (e.type === 'mouseenter') $(this).css('opacity', 1);
        else $(this).css('opacity', 0.4);
      });
    this.find('.do-expose')
      .exposion({ at: '#ENTRY-CONTENT-BOX', hotkey: 'ctrl+e' })
      .closest('a,button')
      .on('focus mouseenter click', function (e) {
        if (e.type === 'click') $('#AUTOEXPOSE-BOX').hide();
        else $('#AUTOEXPOSE-BOX').show().appendTo($(this).parents('div.btn-group'));
      })
      .end()
      .end()
      .find('#AUTOEXPOSE-BOX')
      .on('blur mouseleave', function () {
        $(this).hide();
      })
      .on('change', 'input', function () {
        if (!!this.checked) $.xcookie('AUTOEXPOSE', true);
        else $.removeCookie('AUTOEXPOSE');
      });
    if (!!$.xcookie('AUTOEXPOSE')) $('.do-expose').trigger('click');
    $.scrollTo({
      top: !!novel.poffset && !novel.poffset.match(/\|/) ? novel.poffset : $('#ENTRY-CONTENT-BOX', $Novel).offset().top,
    });
    $('.trigger-good', this).on('click', function () {
      var $OO = this;
      $('#fade_btn').show();
      var $xapi = new xAPI({
        host: null,
        apikey: xAPI.keys.get('NOVEL'),
        service: 'novel',
        scope: 'entry-good',
        params: $(this).data('params'),
      })
        .ajax()
        .on('done', function ($R) {
          if ($R.prc == 'p') {
            var image_src = '/assets/legacy/www/image/novel/recommend.png';
            var image_width = 329;
            var image_height = 200;
          } else {
            var image_src = '/assets/legacy/www/image/novel/recommend_cancel.png';
            var image_width = 329;
            var image_height = 157;
          }
          var recommend_popup = $('body').find('#recommend_popup');
          if (recommend_popup.length <= 0) {
            $('body').append(
              '<div id="recommend_popup"><img src="' +
                image_src +
                '" width="' +
                image_width +
                '" height="' +
                image_height +
                '" /></div>'
            );
            var recommend_popup = $('body').find('#recommend_popup');
          } else {
            recommend_popup.find('img').attr('src', image_src).attr('width', image_width).attr('height', image_height);
          }
          var recommend_left = Math.floor(($(window).width() - image_width) / 2);
          var recommend_top = Math.floor(($(window).height() - image_height) / 2) + $(window).scrollTop() - 100;
          recommend_popup
            .css({
              display: '',
              opacity: '0',
              filter: 'alpha(opacity=0)',
              zoom: '1',
              position: 'absolute',
              'z-index': 10000,
              top: recommend_top + 100 + 'px',
              left: recommend_left + 'px',
            })
            .animate({ top: recommend_top + 'px', opacity: 1, filter: 'alpha(opacity=100)' }, 150)
            .animate({ top: recommend_top + 'px' }, 500)
            .animate({ top: recommend_top + 100 + 'px', opacity: 0, filter: 'alpha(opacity=100)' }, 150, function () {
              $(this).remove();
            });
          $('#fade_btn').hide();
          $('strong', $OO).text(util.number_format($R.neSumGood));
        });
      return false;
    });
    if (!!novel.prefered)
      $win.on('beforeunload', function () {
        $.ajax({
          url:
            xi.host('api') +
            '/' +
            xi.APIKEYS.NOVEL +
            '/service/novel/scope/prefer-offset-update/offset/' +
            ($XVPosition || $(this).scrollTop()) +
            '/nvSrl/' +
            novel.uno +
            '/' +
            $SID +
            '/' +
            $.xcookie($SID),
          type: 'get',
          async: false,
        });
      });
    var checkViewFocus = '';
    $('body').click(function (e) {
      if (e.target.id) {
        var searchEl = $('.entry-view #' + e.target.id).length;
        if (searchEl > 0) {
          checkViewFocus = 'viewer';
        } else {
          checkViewFocus = '';
        }
      } else {
        checkViewFocus = '';
      }
    });
    if (typeof munpiaViewer !== 'undefined' && munpiaViewer.isActivedCanvas) {
      $doc.unbind('keydown.go-home');
    }
    $doc
      .on('keydown.prevDocument', { hotkey: 'left' }, function () {
        var $OO = $('.movepage .prev', $Novel);
        if (typeof munpiaViewer !== 'undefined' && munpiaViewer.isActivedCanvas && munpiaViewer.G_ViewerMode != 0) {
          var result = munpiaViewer.reDrowPageData(0, 'pre');
          if (result == 'pre') {
            if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
              munpiaViewer.closeFullScreen();
            }
            return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
          }
        } else {
          if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
            munpiaViewer.closeFullScreen();
          }
          return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
        }
      })
      .on('keydown.nextDocument', { hotkey: 'right' }, function () {
        var $OO = $('.movepage .next', $Novel);
        if (typeof munpiaViewer !== 'undefined' && munpiaViewer.isActivedCanvas && munpiaViewer.G_ViewerMode != 0) {
          var result = munpiaViewer.reDrowPageData(0, 'next');
          if (result == 'next') {
            if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
              munpiaViewer.closeFullScreen();
            }
            return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_NEXT);
          }
        } else {
          if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
            munpiaViewer.closeFullScreen();
          }
          return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_NEXT);
        }
      })
      .on('keydown.upDocument', { hotkey: 'up' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.G_ViewerMode != 0) {
            var $OO = $('.movepage .prev', $Novel);
            if (munpiaViewer.isActivedCanvas) {
              munpiaViewer.reDrowPageData(0, 'pre');
            } else {
              return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
            }
          } else {
            var canvasScrollOffset = munpiaViewer.canvasObj.scrollTop();
            canvasScrollOffset -= munpiaViewer.oneLineHeight * munpiaViewer.G_LinePerScroll;
            munpiaViewer.canvasObj.animate({ scrollTop: canvasScrollOffset }, 0);
            setTimeout(function () {
              var per = munpiaViewer.getReadPercent();
              munpiaViewer.canvasPageObj.html(Math.ceil(per) + ' / 100%');
            }, 100);
          }
        }
      })
      .on('keydown.downDocument', { hotkey: 'down' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.G_ViewerMode != 0) {
            var $OO = $('.movepage .next', $Novel);
            if (munpiaViewer.isActivedCanvas) {
              munpiaViewer.reDrowPageData(0, 'next');
            } else {
              return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_NEXT);
            }
          } else {
            var canvasScrollOffset = munpiaViewer.canvasObj.scrollTop();
            canvasScrollOffset += munpiaViewer.oneLineHeight * munpiaViewer.G_LinePerScroll;
            munpiaViewer.canvasObj.animate({ scrollTop: canvasScrollOffset }, 0);
            setTimeout(function () {
              var per = munpiaViewer.getReadPercent();
              munpiaViewer.canvasPageObj.html(Math.ceil(per) + ' / 100%');
            }, 100);
          }
        }
      })
      .on('keydown.upDocument', { hotkey: 'pageup' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.G_ViewerMode != 0) {
            var $OO = $('.movepage .prev', $Novel);
            if (munpiaViewer.isActivedCanvas) {
              munpiaViewer.reDrowPageData(0, 'pre');
            } else {
              return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
            }
          } else {
            var canvasScrollOffset = munpiaViewer.canvasObj.scrollTop();
            canvasScrollOffset -= munpiaViewer.oneLineHeight * munpiaViewer.G_LinePerKey;
            munpiaViewer.canvasObj.animate({ scrollTop: canvasScrollOffset }, 0);
            setTimeout(function () {
              var per = munpiaViewer.getReadPercent();
              munpiaViewer.canvasPageObj.html(Math.ceil(per) + ' / 100%');
            }, 100);
          }
        }
      })
      .on('keydown.upDocument', { hotkey: 'pagedown' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.G_ViewerMode != 0) {
            var $OO = $('.movepage .prev', $Novel);
            if (munpiaViewer.isActivedCanvas) {
              munpiaViewer.reDrowPageData(0, 'next');
            } else {
              return !!$OO[0] ? xi.go($OO.attr('href')) : $.alert($message.NO_PREV);
            }
          } else {
            var canvasScrollOffset = munpiaViewer.canvasObj.scrollTop();
            canvasScrollOffset += munpiaViewer.oneLineHeight * munpiaViewer.G_LinePerKey;
            munpiaViewer.canvasObj.animate({ scrollTop: canvasScrollOffset }, 0);
            setTimeout(function () {
              var per = munpiaViewer.getReadPercent();
              munpiaViewer.canvasPageObj.html(Math.ceil(per) + ' / 100%');
            }, 100);
          }
        }
      })
      .on('keydown.changePageMode', { hotkey: 'p' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.G_ViewerMode === 0) {
            munpiaViewer.changeViewerMode(2);
          } else if (munpiaViewer.G_ViewerMode === 1) {
            munpiaViewer.changeViewerMode(0);
          } else if (munpiaViewer.G_ViewerMode === 2) {
            munpiaViewer.changeViewerMode(1);
          }
        }
      })
      .on('keydown.changeExpandMode', { hotkey: 'f' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (checkViewFocus == 'viewer') {
            if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
              munpiaViewer.closeFullScreen();
            } else {
              munpiaViewer.openFullScreen();
            }
          } else {
            xi.goByHotkey(e, xi.host('blog') + '/' + $_Member.uid + '/subscriptions');
          }
        }
      })
      .on('keydown.movePageTop', { hotkey: 'home' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          munpiaViewer.followUp(0, true);
        }
      })
      .on('keydown.movePageBottom', { hotkey: 'end' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          munpiaViewer.followUp(100, true);
        }
      })
      .on('keydown.moveNextPage', { hotkey: 'space' }, function (e) {
        if (typeof munpiaViewer !== 'undefined') {
          e.preventDefault();
          if (munpiaViewer.isActivedCanvas) {
            if (munpiaViewer.G_ViewerMode !== 0) {
              munpiaViewer.reDrowPageData(0, 'next');
            } else {
              var canvasScrollOffset = munpiaViewer.canvasObj.scrollTop();
              canvasScrollOffset += munpiaViewer.oneLineHeight * munpiaViewer.G_LinePerScroll;
              munpiaViewer.canvasObj.animate({ scrollTop: canvasScrollOffset }, 0);
              setTimeout(
                function () {
                  var per = munpiaViewer.getReadPercent();
                  munpiaViewer.canvasPageObj.html(Math.ceil(per) + ' / 100%');
                }.bind(this),
                100
              );
            }
          }
        }
      })
      .find('body')
      .css('user-select', 'none')
      .on('dragstart contextmenu', false);
    return this;
  };
  $.fn.novelwrite = function () {
    this.on('MergeTextbox', function () {
      $('#FORM-WRITE dl.sheet', $Novel)
        .find('dd.txt+dd.txt')
        .each(function () {
          var $CELL = $(this),
            $PREV = $CELL.prev('dd.cell:visible');
          $('textarea.text-box', $CELL)
            .val($('textarea.text-box', $PREV).val() + '\n' + $('textarea.text-box', $CELL).val())
            .focus();
          $PREV.remove();
        });
    })
      .on(
        'click',
        '.trigger-copy',
        $.proxy($.clippy, {
          text: function () {
            return $(this).parents('dd.cell').find('textarea.text-box').val();
          },
          done: function () {
            var $XX = $(this),
              $TXT;
            if (!this.$TXT) this.$TXT = $XX.val();
            $TXT = this.$TXT;
            $XX.val('복사되었습니다.').addClass('trigger-copy-done');
            if (!!this.$Timer) window.clearTimeout(this.$Timer);
            this.$Timer = window.setTimeout(function () {
              $XX.val($TXT).removeClass('trigger-copy-done');
            }, 2000);
          },
        })
      )
      .on('click', '.trigger-empty', function () {
        var $CELL = $(this).parents('dd.cell');
        if (!!$.confirm('내용을 지울까요?')) $CELL.find('textarea.text-box').focus().val('');
        return false;
      })
      .on('click', '.trigger-up', function () {
        var $CELL = $(this).parents('dd.cell');
        if ($CELL.is('dd.pic:visible') == true && $CELL.index() <= 4) {
          return $.alert('이미지는 맨 위로 이동이 불가능합니다.');
        }
        $CELL.prev('dd.cell:visible').before($CELL);
        $('#FORM-WRITE', $Novel).trigger('MergeTextbox');
        if ($CELL.next('dd.cell:visible').length <= 2) {
          var $SHEET = $('#FORM-WRITE dl.sheet', $Novel);
          $CELL = $SHEET.find('dd.txt:hidden').eq(0).clone(true, true).removeClass('template');
          $('dd.cell:last', $SHEET).not('dd.txt').after($CELL);
          $('dd.cell:last', $SHEET).find(':input').prop('disabled', false);
          if (!!$('html', $doc).is('.ie67'))
            window.setTimeout(function () {
              $('dd.cell:last', $SHEET).find('textarea.text-box').fixBorderBox();
            }, 1000);
        }
        return false;
      })
      .on('click', '.trigger-down', function () {
        var $CELL = $(this).parents('dd.cell');
        if ($CELL.next('dd.pic:visible').is('dd.pic') == true && $CELL.index() == 3) {
          return $.alert('현재 영역의 본문은 이동이 불가능합니다.');
        }
        $CELL.next('dd.cell:visible').after($CELL);
        $('#FORM-WRITE', $Novel).trigger('MergeTextbox');
        if ($CELL.next('dd.cell:visible').length <= 2) {
          var $SHEET = $('#FORM-WRITE dl.sheet', $Novel);
          $CELL = $SHEET.find('dd.txt:hidden').eq(0).clone(true, true).removeClass('template');
          $('dd.cell:last', $SHEET).not('dd.txt').after($CELL);
          $('dd.cell:last', $SHEET).find(':input').prop('disabled', false);
          if (!!$('html', $doc).is('.ie67'))
            window.setTimeout(function () {
              $('dd.cell:last', $SHEET).find('textarea.text-box').fixBorderBox();
            }, 1000);
        }
        return false;
      })
      .on('click', '.trigger-remove', function (e) {
        var $CELL = $(this).parents('dd.cell'),
          $SHEET = $CELL.parent(),
          $PREV = $CELL.prev('dd.cell:visible'),
          $NEXT = $CELL.next('dd.cell:visible');
        if ($CELL.index() == 3) {
          return $.alert('현재 본문은 삭제할 수 없습니다.');
        }
        if ($CELL.parent().children('dd.cell:visible').length <= 1) return $.alert('본문은 삭제할 수 없습니다.');
        var dd_text = $CELL.parent().children('dd.cell:visible').length;
        var dd_pic = $CELL.parent().children('dd.pic').length;
        if (dd_text == dd_pic) {
          if (!$CELL.is('dd.pic:visible')) {
            return $.alert('본문은 삭제할 수 없습니다.');
          }
        } else if (dd_pic >= 2 && dd_text - dd_pic == 1 && !$CELL.is('dd.pic:visible') && $NEXT.length == 0) {
          if (!!$.confirm('내용을 지울까요?')) {
            $CELL.find('textarea.text-box').focus().val('');
          }
          return false;
        }
        if (!$.confirm('항목을 삭제할까요?삭제하면 복구할 수 없습니다.')) return false;
        if ($CELL.is('dd.pic:visible')) $('#UPLOADY', $Novel)[0].uploady.trigger('Remove', $CELL.data('pic'), true);
        $CELL.slideUp(100, function () {
          $(this).remove();
        });
        if ($PREV.is('dd.txt') && $NEXT.is('dd.txt')) {
          var $TXT = $('textarea.text-box', $PREV).val() + '\n' + $('textarea.text-box', $NEXT).val();
          $PREV.find('textarea.text-box').val($TXT);
          $NEXT.remove();
        }
        $('#UPLOADY', $Novel)[0].uploady.refresh();
        return false;
      })
      .on('click', '.trigger-insert-txt', function () {
        var $SHEET = $(this).parents('dl.sheet'),
          $CELL = $SHEET.find('dd.txt:hidden').eq(0).clone(true, true).removeClass('template');
        $('dd.cell:last', $SHEET).not('dd.txt').after($CELL);
        $('dd.cell:last', $SHEET).find(':input').prop('disabled', false).end().find('textarea.text-box').focus();
        if (!!$('html', $doc).is('.ie67'))
          window.setTimeout(function () {
            $('dd.cell:last', $SHEET).find('textarea.text-box').fixBorderBox();
          }, 1000);
        return false;
      });
    return this;
  };
  $.fn.novelUploady = function ($OPT) {
    $OPT = $.extend({ url: '/', params: {} }, $OPT);
    var atSeq = $('input[name="atSeq"]').val();
    return this.uploady({
      runtimes: 'html5,flash',
      url: $OPT.url,
      browse_button: 'UPLOADY-BROWSE',
      min_file_size: '1kb',
      max_file_size: '5mb',
      max_total_size: '100mb',
      max_file_count: 100,
      multi_selection: true,
      multipart_params: $.extend({ seq: $('#FORM-WRITE > input[name="atSeq"]', $Novel).val() || 0 }, $OPT.params),
      filters: [{ title: 'Image files', extensions: 'jpg,gif,png' }],
      postinit: function (u) {
        $('#FORM-WRITE input[name="neContent[]"]:enabled', $Novel).each(function () {
          var $O = $(this),
            $PIC = $O.data('pic'),
            $CELL = $O.parents('dd.cell');
          $PIC = $.extend(new plupload.File($PIC.atName), {
            uno: $PIC.atSrl,
            name: $PIC.atName,
            size: $PIC.atSize,
            origSize: $PIC.atSize,
            loaded: $PIC.atSize,
            percent: 100,
            status: plupload.DONE,
          });
          $CELL.data('pic', $PIC);
          u.files.push($PIC);
        });
        u.trigger('QueueChanged');
      },
      uploaded: function (u, file) {
        try {
          u.$R.seq = parseInt(u.$R.seq);
          if (!!u.$R.seq && atSeq == 0) {
            u.settings.multipart_params.seq = u.$R.seq;
            atSeq = u.$R.seq;
          }
          if (!!u.$R.total) {
            u.total = $.extend(u.total, u.$R.total);
          }
          u.$R.total = null;
          if (!u.$R.seq) return;
          var $SHEET = $('#FORM-WRITE dl.sheet', $Novel);
          var $CELL = $('dd.pic:hidden', $SHEET).clone().removeClass('template').insertAfter($('dd.cell:last', $SHEET));
          $CELL
            .data('pic', $.extend(file, u.$R))
            .hide()
            .slideDown(100)
            .find('.name')
            .text('현재위치 이미지 추가완료')
            .end()
            .find('img')
            .attr({ src: xi.host('cdn1') + u.$R.thumb, alt: u.$R.name })
            .end()
            .find(':input')
            .prop('disabled', false)
            .val('{@PIC:' + u.$R.uno + '}');
          $CELL.data('pic', $.extend(file, u.$R)).bind('ondragstart', function (e) {
            e.preventDefault();
          });
          $CELL.data('pic', $.extend(file, u.$R)).bind('drag', function (e) {
            e.preventDefault();
          });
          $CELL.find('textarea.text-box').focus();
          if ($('input[name="atSeq"]').val() == 0) {
            $('input[name="atSeq"]').val(u.$R.seq);
          } else if (u.$R.seq == 0) {
            $('input[name="atSeq"]').val('0');
          }
        } catch (e) {}
      },
      complete: function (u) {
        if (!!u.$R.total) {
          u.total = $.extend(u.total, u.$R.total);
        }
        var $SHEET = $('#FORM-WRITE dl.sheet', $Novel);
        $CELL = $SHEET.find('dd.txt:hidden').eq(0).clone(true, true).removeClass('template');
        $('dd.cell:last', $SHEET).not('dd.txt').after($CELL);
        $('dd.cell:last', $SHEET)
          .find(':input')
          .prop('disabled', false)
          .end()
          .find('textarea.text-box')
          .focus()
          .val('');
        if (!!$('html', $doc).is('.ie67'))
          window.setTimeout(function () {
            $('dd.cell:last', $SHEET).find('textarea.text-box').fixBorderBox();
          }, 1000);
        u.refresh();
      },
      remove: function (u, pic) {
        return new xAPI({ host: null, apikey: xAPI.keys.get('NOVEL'), service: 'novel', scope: 'pic-remove' })
          .ajax({
            type: 'POST',
            data: {
              nvSrl: novel.uno,
              ssSign: $('#FORM-WRITE input[name="ssSign"]').val(),
              atSeq: u.settings.multipart_params.seq,
              atSrl: pic.uno,
            },
          })
          .on('done', function ($R) {
            u.$R = $R.pic;
            u.getFile(pic.id).status = plupload.REMOVED;
            u.trigger('QueueChanged');
            var $CELL = $(this).parents('dd.cell');
            $CELL.find('textarea.text-box').focus();
            if (u.$R.seq == 0) {
              $('input[name="atSeq"]').val('0');
            }
          });
      },
    });
  };
  $.fn.subjecty = function () {
    var $OO = $(this)
      .next('ul')
      .on('click', 'a', function () {
        $OO
          .hide()
          .prevAll('.xput')
          .focus()
          .val($.trim($(this).text()))
          .keydown();
        return false;
      })
      .fixBorderBox();
    return this.on('click', function () {
      $OO.slideToggle(500, 'easeOutQuad');
      $doc.off('click.subjectx').one('click.subjectx', function () {
        $OO.slideUp(500, 'easeOutQuad');
      });
      return false;
    });
  };
  $.fn.purchasing = function ($OPT) {
    $OPT = $.extend({ entries: '#ENTRIES', box: '#PURCHASING-BOX' }, $OPT);
    var ceNoRentCnt = $('#ceNoRentCnt').val();
    var cpSrl = $('#cpSrl').val();
    var useRentCnt = $('#useRentCnt').val();
    var sel_rent = $('#sel_rent').val();
    var couponNowCnt = $('#couponNowCnt').val();
    var bulletNowCnt = $('#bulletNowCnt').val();
    var bulletRent = $('#bulletRent').val();
    var gRentTotalCnt = $('#gRentTotalCnt').val();
    var gRentNowUseCnt = $('#gRentNowUseCnt').val();
    var gRentList = $('#gRentList').val();
    var gRentUsedCnt = $('#gRentUsedCnt').val();
    var purRentTotalCnt = $('#purRentTotalCnt').val();
    var purRentNowUseCnt = $('#purRentNowUseCnt').val();
    var purRentList = $('#purRentList').val();
    var purRentUsedCnt = $('#purRentUsedCnt').val();
    if (couponNowCnt > 0 || gRentTotalCnt > 0 || purRentTotalCnt > 0) {
    } else {
      $('.rent_sel_area,.rent_sel_area2').css('display', 'none');
    }
    var rent_list = $('#rent_list').val();
    var coupon_useN_neSrl = $('#coupon_useN_neSrl').val();
    var tot_rent_cnt = $('#tot_rent_cnt').val();
    var avgPurchaseCost = $('#avgPurchaseCost').val();
    var avgRentCost = $('#avgRentCost').val();
    var adultCnt = $('#adultCnt').val();
    var adultList = $('#adultList').val();
    var adultListCk = $('#adultListCk').val();
    var $Overay,
      $OpneAnchor,
      $CheckEvent = false;
    var $PurchaseBox = $($OPT.box)
      .on('CLOSEBOX', function () {
        $PurchaseBox.add($Overay).fadeOut(200);
        var useRentCnt_sel = $('#useRentCnt_sel').val();
        var rent_list_sel = $('#rent_list_sel').val();
        $('#rent_ck').attr('checked', true);
        $('#useRentCnt,#sel_rent').val(useRentCnt_sel);
        $('#rent_list').val(rent_list_sel);
        $('#u_cnt').html(useRentCnt_sel);
        var gRentNowUseCntSel = $('#gRentNowUseCntSel').val();
        var gRentListSel = $('#gRentListSel').val();
        $('#gRentNowUseCnt').val(gRentNowUseCntSel);
        $('#gRentList').val(gRentListSel);
        var purRentNowUseCntSel = $('#purRentNowUseCntSel').val();
        var purRentListSel = $('#purRentListSel').val();
        $('#purRentNowUseCnt').val(purRentNowUseCntSel);
        $('#purRentList').val(purRentListSel);
        if ($CheckEvent) {
          window.location.reload();
        }
        return false;
      })
      .on('click', '.trigger-close,.rentalSalePackageBuyBanner', function () {
        $PurchaseBox.trigger('CLOSEBOX');
        return false;
      })
      .on('click', '.trigger-purchasing:not(.progressing)', function () {
        var data_serially_rent = $(this).attr('data-serially-rent');
        var useRentCnt = $('#useRentCnt').val();
        var rent_list = $('#rent_list').val();
        var bulletRent = $('#bulletRent').val();
        var gRentNowUseCnt = $('#gRentNowUseCnt').val();
        var gRentList = $('#gRentList').val();
        var purRentNowUseCnt = $('#purRentNowUseCnt').val();
        var purRentList = $('#purRentList').val();
        var $OO = $(this),
          $Type = $PurchaseBox.attr('class').match(/((pan|selective)\-(purchase|rent))/g)[0],
          $Carts = $PurchaseBox.data('items');
        $METHOD = $(this).data('purchase-method');
        if ($.inArray($Type, ['selective-purchase', 'selective-rent']) !== -1 && !$Carts)
          return $.alert($message.NO_PURCHASABLE_ITEM);
        $OO.addClass('progressing');
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'purchasing',
          params: { type: 'open' },
        })
          .ajax({
            type: 'POST',
            data: {
              nvSrl: novel.uno,
              npuType: $Type,
              rent_list: rent_list,
              useRentCnt: useRentCnt,
              bulletRent: bulletRent,
              gRentList: gRentList,
              gRentNowUseCnt: gRentNowUseCnt,
              purRentList: purRentList,
              purRentNowUseCnt: purRentNowUseCnt,
              seriallyRent: data_serially_rent,
              cpSrl: cpSrl,
              npuItems: $PurchaseBox.data('items'),
              npuMethod: $METHOD,
              ssSign: novel.usign,
              USID: $.cookie('USID'),
              UAID: $.cookie('UAID'),
            },
          })
          .on('done', function ($R) {
            if (!$R.event_confirm) {
              window.setTimeout(function () {
                window.location.reload();
              }, 4000);
            } else {
              confirm_msg = '환생좌 완결 기념 이벤트 당첨!\n\n받은 선물 골드를 확인하시겠습니까?';
              if (confirm(confirm_msg) == true) {
                window.location.href =
                  'https://ssl.munpia.com/module/member/mbView/viewManage/tab/gift_log_receive/view/my/member/my-page/left';
              } else {
                window.setTimeout(function () {
                  window.location.reload();
                }, 4000);
              }
            }
            $rtitle = $R.nvTitle + $Type;
            (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              (i[r] =
                i[r] ||
                function () {
                  (i[r].q = i[r].q || []).push(arguments);
                }),
                (i[r].l = 1 * new Date());
              (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m);
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-36764584-1', 'auto');
            ga('send', 'pageview');
            ga('require', 'ecommerce', 'ecommerce.js');
            ga('ecommerce:addTransaction', {
              id: $R.purSrl,
              affiliation: 'munpia.com',
              revenue: $R.sumcost,
              shipping: '0',
              tax: '0',
            });
            ga('ecommerce:send');
            $PurchaseBox
              .addClass('done')
              .find('h2.oo')
              .text(!!$R.error ? '죄송해요' : '구입성공!')
              .end()
              .find('div.pmessage h3.lead')
              .html($R.error || $R.message.replace(/\n/g, '<br/>') + '<br />' + $message.REFRESH_AFTER_2SECOND)
              .end();
          })
          .on('complete', function () {
            $OO.removeClass('progressing');
          });
      });
    $Novel.on('click', '.trigger-charging', function () {
      if ($(this).hasClass('charge-popup-button')) {
        return false;
      }
      return xi.go(xi.host('www') + '/page/charge/pageType/normal');
    });
    $Novel.on('click', '.weekend-purchasing:not(.progressing)', function () {
      var weekend = $(this).data('weekend');
      var promotionIdx = $(this).data('promotion');
      var neSrl = $(this).data('items');
      $(this).addClass('progressing');
      return new xAPI({
        host: null,
        apikey: xAPI.keys.get('NOVEL'),
        service: 'novel',
        scope: 'purchasing',
        params: { type: 'open' },
      })
        .ajax({
          type: 'POST',
          data: {
            nvSrl: novel.uno,
            weekend: weekend,
            promotionIdx: promotionIdx,
            useNeSrl: neSrl,
            npuType: 'selective-coupon',
            rentType: 'weekend',
            npuItems: neSrl,
            npuMethod: 'G',
            ssSign: novel.usign,
          },
        })
        .on('done', function ($R) {
          window.setTimeout(function () {
            window.location.reload();
          }, 4000);
          $rtitle = $R.nvTitle + 'G';
          (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            (i[r] =
              i[r] ||
              function () {
                (i[r].q = i[r].q || []).push(arguments);
              }),
              (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-36764584-1', 'auto');
          ga('send', 'pageview');
          ga('require', 'ecommerce', 'ecommerce.js');
          ga('ecommerce:addTransaction', {
            id: $R.purSrl,
            affiliation: 'munpia.com',
            revenue: $R.sumcost,
            shipping: '0',
            tax: '0',
          });
          ga('ecommerce:send');
          var html = '';
          var message =
            $R.error || $R.message.replace(/\n/g, '<br/>') + '<br /><br />' + $message.REFRESH_AFTER_2SECOND;
          html += '<div class="body pmessage" style="display:block;border-top:1px;border-bottom:0">';
          html +=
            '<h3 class="lead veryshy" style="color:#000;text-shadow:none;font-size:17px;font-weight:400;line-height:24px;">' +
            message +
            '</h3>';
          html += '</div>';
          $('.pbox')
            .find('h2.hero')
            .text(!!$R.error ? '죄송해요' : '구입성공!')
            .end()
            .find('div.body')
            .html(html)
            .end();
        })
        .on('complete', function () {
          $(this).removeClass('progressing');
        });
    });
    $($OPT.entries, $Novel)
      .on('CALCURATE', function () {
        var $CARTS = $($OPT.entries + ' input.purchase:enabled', $Novel),
          $PurchaseCost = 0,
          $RentCost = 0,
          $SelectItems = $CARTS
            .filter(':checked:enabled')
            .map(function () {
              return this.value;
            })
            .get()
            .join(',');
        var ne_cnt = 1;
        var check_cnt = $("input[name='neCart[]']").filter('[name]:checked').length;
        setTimeout(function () {
          var useRentCnt = $('#useRentCnt').val();
          var bulletNowCnt = $('#bulletNowCnt').val();
          var bulletRent = $('#bulletRent').val();
          var gRentUseCnt = $('#gRentUseCnt').val();
          var gRentNowUseCnt = $('#gRentNowUseCnt').val();
          var purRentUseCnt = $('#purRentUseCnt').val();
          var purRentNowUseCnt = $('#purRentNowUseCnt').val();
          if ($('#all_sel').val() == 'ALL') {
            useRentCnt = 0;
            gRentNowUseCnt = 0;
            purRentNowUseCnt = 0;
          }
          var rent_cnt = tot_rent_cnt - useRentCnt;
          var gRentUsingCnt = gRentUseCnt - gRentNowUseCnt;
          var purRentUsingCnt = purRentUseCnt - purRentNowUseCnt;
          var gRentAddCnt = 0;
          var purRentAddCnt = 0;
          $CARTS.filter(':checked:enabled').each(function (i, $Node) {
            var $Node = $($Node);
            $PurchaseCost += parseInt($Node.data('costpurchase'));
            $RentCost += parseInt($Node.data('costrent'));
            var ne_srl = $Node.val();
            if (
              check_cnt - rent_cnt < ne_cnt &&
              $('input:checkbox[id="CB-PURCHASE"]').is(':checked') == true &&
              $('#all_sel').val() == 'ALL'
            ) {
              if (ne_srl < coupon_useN_neSrl) {
                rent_list = $('#rent_list').val();
                rent_list = rent_list + ne_srl + ',';
                useRentCnt++;
                $('#coin_' + ne_srl).css('display', 'none');
                if (bulletRent == '') {
                  $('#rent_' + ne_srl).css('display', '');
                  $('#bullet_' + ne_srl).css('display', 'none');
                } else {
                  $('#rent_' + ne_srl).css('display', 'none');
                  $('#bullet_' + ne_srl).css('display', '');
                }
                $('#gauge_rent_' + ne_srl).css('display', 'none');
                $('#pur_rent_' + ne_srl).css('display', 'none');
                $('#rent_list,#rent_list_sel').val(rent_list);
              } else {
                if (rent_cnt > 0) {
                  rent_list = $('#rent_list').val();
                  rent_list = rent_list + ne_srl + ',';
                  useRentCnt++;
                  $('#coin_' + ne_srl).css('display', 'none');
                  if (bulletRent == '') {
                    $('#rent_' + ne_srl).css('display', '');
                    $('#bullet_' + ne_srl).css('display', 'none');
                  } else {
                    $('#rent_' + ne_srl).css('display', 'none');
                    $('#bullet_' + ne_srl).css('display', '');
                  }
                  $('#gauge_rent_' + ne_srl).css('display', 'none');
                  $('#pur_rent_' + ne_srl).css('display', 'none');
                  $('#rent_list,#rent_list_sel').val(rent_list);
                } else if (gRentUsingCnt - gRentAddCnt > 0) {
                  gRentList = $('#gRentList').val();
                  gRentList = gRentList + ne_srl + ',';
                  gRentNowUseCnt++;
                  gRentAddCnt++;
                  $('#coin_' + ne_srl).css('display', 'none');
                  $('#rent_' + ne_srl).css('display', 'none');
                  $('#bullet_' + ne_srl).css('display', 'none');
                  $('#gauge_rent_' + ne_srl).css('display', '');
                  $('#pur_rent_' + ne_srl).css('display', 'none');
                  $('#gRentList,#gRentListSel').val(gRentList);
                } else if (purRentUsingCnt - purRentAddCnt > 0) {
                  purRentList = $('#purRentList').val();
                  purRentList = purRentList + ne_srl + ',';
                  purRentNowUseCnt++;
                  purRentAddCnt++;
                  $('#coin_' + ne_srl).css('display', 'none');
                  $('#rent_' + ne_srl).css('display', 'none');
                  $('#bullet_' + ne_srl).css('display', 'none');
                  $('#gauge_rent_' + ne_srl).css('display', 'none');
                  $('#pur_rent_' + ne_srl).css('display', '');
                  $('#purRentList,#purRentListSel').val(purRentList);
                }
              }
            } else if (
              check_cnt - rent_cnt + gRentAddCnt - gRentUsingCnt < ne_cnt &&
              $('input:checkbox[id="CB-PURCHASE"]').is(':checked') == true &&
              $('#all_sel').val() == 'ALL'
            ) {
              gRentList = $('#gRentList').val();
              gRentList = gRentList + ne_srl + ',';
              gRentNowUseCnt++;
              $('#coin_' + ne_srl).css('display', 'none');
              $('#rent_' + ne_srl).css('display', 'none');
              $('#bullet_' + ne_srl).css('display', 'none');
              $('#gauge_rent_' + ne_srl).css('display', '');
              $('#pur_rent_' + ne_srl).css('display', 'none');
              $('#gRentList,#gRentListSel').val(gRentList);
            } else if (
              check_cnt - rent_cnt + gRentAddCnt - gRentUsingCnt + purRentAddCnt - purRentUsingCnt < ne_cnt &&
              $('input:checkbox[id="CB-PURCHASE"]').is(':checked') == true &&
              $('#all_sel').val() == 'ALL'
            ) {
              purRentList = $('#purRentList').val();
              purRentList = purRentList + ne_srl + ',';
              purRentNowUseCnt++;
              $('#coin_' + ne_srl).css('display', 'none');
              $('#rent_' + ne_srl).css('display', 'none');
              $('#bullet_' + ne_srl).css('display', 'none');
              $('#gauge_rent_' + ne_srl).css('display', 'none');
              $('#pur_rent_' + ne_srl).css('display', '');
              $('#purRentList,#purRentListSel').val(purRentList);
            } else if ($('input:checkbox[id="CB-PURCHASE"]').is(':checked') == true && $('#all_sel').val() == 'ALL') {
              $('#coin_' + ne_srl).css('display', '');
              $('#rent_' + ne_srl).css('display', 'none');
              $('#bullet_' + ne_srl).css('display', 'none');
              $('#gauge_rent_' + ne_srl).css('display', 'none');
              $('#pur_rent_' + ne_srl).css('display', 'none');
            }
            ne_cnt++;
          });
          if (!check_cnt && $('input:checkbox[id="CB-PURCHASE"]').is(':checked') == false) {
            rent_list = $('#rent_list').val();
            if (rent_list) {
              var ne_srl = rent_list.split(',');
            } else {
              var ne_srl = rent_list;
            }
            useRentCnt = 0;
            for (var i = 0; i < ne_srl.length - 1; i++) {
              $('#coin_' + ne_srl[i]).css('display', '');
              $('#rent_' + ne_srl[i]).css('display', 'none');
              $('#bullet_' + ne_srl[i]).css('display', 'none');
              $('#gauge_rent_' + ne_srl[i]).css('display', 'none');
              $('#pur_rent_' + ne_srl[i]).css('display', 'none');
            }
            $('#rent_list,#rent_list_sel').val('');
            gRentList = $('#gRentList').val();
            if (gRentList) {
              var ne_srl = gRentList.split(',');
            } else {
              var ne_srl = gRentList;
            }
            gRentNowUseCnt = 0;
            for (var i = 0; i < ne_srl.length - 1; i++) {
              $('#coin_' + ne_srl[i]).css('display', '');
              $('#rent_' + ne_srl[i]).css('display', 'none');
              $('#bullet_' + ne_srl[i]).css('display', 'none');
              $('#gauge_rent_' + ne_srl[i]).css('display', 'none');
              $('#pur_rent_' + ne_srl[i]).css('display', 'none');
            }
            $('#gRentList,#gRentListSel').val('');
            $('#purRentList,#purRentListSel').val('');
          }
          $('#useRentCnt,#useRentCnt_sel,#sel_rent').val(useRentCnt);
          $('#gRentNowUseCnt,#gRentNowUseCntSel').val(gRentNowUseCnt);
          $('#purRentNowUseCnt,#purRentNowUseCntSel').val(purRentNowUseCnt);
          if (useRentCnt || gRentNowUseCnt || purRentNowUseCnt) {
            var rentTotalSumCnt = Number(useRentCnt) + Number(gRentNowUseCnt) + Number(purRentNowUseCnt);
            $PurchaseCost = $PurchaseCost - ($PurchaseCost * rentTotalSumCnt) / check_cnt;
            $RentCost = $RentCost - ($RentCost * rentTotalSumCnt) / check_cnt;
          }
          var check_nv = novel.uno;
          $('#PURCHASE-CNT', $Novel).text('');
          var nv_sale_ym = $('#nv_sale_ym', $Novel).val();
          var nesSaleCount = $('#nesSaleCount', $Novel).val();
          if (check_cnt >= nesSaleCount && nesSaleCount > 0) {
            $('#PURCHASE-CNT', $Novel).text(' / 10%할인');
            $PurchaseCost = $PurchaseCost * 0.9;
          }
          if ($PurchaseCost < 0) {
            alert('다시 시도해 주세요.');
            document.location.reload();
          }
          $('#PURCHASE-COST', $Novel).text(util.number_format($PurchaseCost)).closest('a').data('cost', $PurchaseCost);
          $('#RENT-COST', $Novel).text(util.number_format($RentCost)).closest('a').data('cost', $RentCost);
          $PurchaseBox.data('items', $SelectItems);
        }, 300);
      })
      .on('change', 'input#CB-PURCHASE,input.purchase', function () {
        var adultCnt = $('#adultCnt').val();
        var adultList = $('#adultList').val();
        if (adultList) {
          $('#adultListCk').val('');
          var adultList = adultList.split(',');
          for (var i = 0; i < adultList.length; i++) {
            if ($('#neCart_' + adultList[i]).is(':checked') == true) {
              $('#adultListCk').val('Y');
            }
          }
        }
        var ckAll = $(this).val();
        if (ckAll == 'Y') $('#all_sel').val('ALL');
        else $('#all_sel').val('SEL');
        $($OPT.entries, $Novel).trigger('CALCURATE');
        var rent_cost_btn_day = '';
        var check_cnt = $("input[name='neCart[]']").filter('[name]:checked').length;
        if (check_cnt > 0) {
          var rent_one_price = $("input[name='neCart[]']").attr('data-costrent');
          var date = new Date();
          var expireDate =
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate() +
            ' ' +
            date.getHours() +
            ':' +
            date.getMinutes();
          if (expireDate >= '2019-11-01 00:00') {
            if (rent_one_price > 300) {
              if (check_cnt >= 30) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">90일</font>';
              } else {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">' + Number(check_cnt) * 3 + '일</font>';
              }
            } else {
              if (check_cnt >= 90) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">90일</font>';
              } else {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">' + check_cnt + '일</font>';
              }
            }
          } else {
            if (rent_one_price <= 300) {
              if (check_cnt <= 3) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">1일</font>';
              } else if (check_cnt >= 4 && check_cnt <= 6) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">2일</font>';
              } else if (check_cnt >= 7 && check_cnt <= 9) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">3일</font>';
              } else if (check_cnt >= 10 && check_cnt <= 12) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">4일</font>';
              } else if (check_cnt >= 13 && check_cnt <= 15) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">5일</font>';
              } else if (check_cnt >= 16 && check_cnt <= 18) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">6일</font>';
              } else if (check_cnt >= 19 && check_cnt <= 21) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">7일</font>';
              } else if (check_cnt >= 22 && check_cnt <= 24) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">8일</font>';
              } else if (check_cnt >= 25 && check_cnt <= 27) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">9일</font>';
              } else if (check_cnt >= 28 && check_cnt <= 30) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">10일</font>';
              } else if (check_cnt >= 31 && check_cnt <= 33) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">11일</font>';
              } else if (check_cnt >= 34 && check_cnt <= 36) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">12일</font>';
              } else if (check_cnt >= 37 && check_cnt <= 39) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">13일</font>';
              } else if (check_cnt >= 40) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">14일</font>';
              }
            } else {
              if (check_cnt > 14) {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">14일</font>';
              } else {
                rent_cost_btn_day = ' | <font style="color:#FCBE16;">' + check_cnt + '일</font>';
              }
            }
          }
        } else {
          rent_cost_btn_day = '';
        }
        $('#RENT-COST-DAY').html(rent_cost_btn_day);
      })
      .find('#CB-PURCHASE')
      .invertChecked('ALL');
    return this.on('click', function () {
      var eGold = $('#data-eGold').val();
      var nesSalePercent = $('#nesSalePercent').val();
      var $OpneAnchor = $(this),
        $CLASS = $OpneAnchor.attr('class').match(/((pan|selective)\-(purchase|rent))/g)[0],
        $COST = $OpneAnchor.data('cost') || 0,
        $ONECK = $OpneAnchor.data('oneck') || 0,
        $Carts = $OpneAnchor.data('items') || null,
        isEnoughGold = $COST <= Number($_Member.gold) + Number(eGold),
        isEnoughCoin = $COST <= $_Member.coin;
      if ($CLASS == 'pan-purchase' || $CLASS == 'selective-purchase') var avgCost = avgPurchaseCost;
      else if ($CLASS == 'pan-rent' || $CLASS == 'selective-rent') var avgCost = avgRentCost;
      if (!$_Member.uno) return $.alert($message.REQUIRE_LOGIN);
      if (!$Overay)
        $Overay = $('<div />')
          .css({
            width: '100%',
            height: '100%',
            'background-color': '#000000',
            position: 'fixed',
            top: 0,
            left: 0,
            opacity: 0.3,
            'z-index': 1999,
            display: 'none',
          })
          .on('click', $.proxy($PurchaseBox.trigger, $PurchaseBox, 'CLOSEBOX'))
          .appendTo($Novel);
      $('#purchase-area').hide();
      $('#pan-purchase-area').hide();
      $('#rent-purchase-area').hide();
      $('#myinfo_area').css('padding-bottom', '0px');
      $('#purchase_sub_title').html('※이미 구매/대여한 편은 제외됩니다.');
      $('#rent_purchase_sub_title').html('※이미 구매/대여한 편은 제외됩니다.');
      var data_serially_rent = $(this).attr('data-serially-rent');
      if (
        $CLASS == 'pan-purchase' ||
        $CLASS == 'pan-purchase exceed-cost' ||
        $CLASS == 'selective-purchase' ||
        $CLASS == 'selective-purchase exceed-cost'
      ) {
        $('#gold_pay_btn').html('골드로 구매');
        $('#gold_pay_btn1').html('구매하기');
        $('.purchase_type_txt').html('구매');
        $('#purchase_pre_txt').html('구매 예정 금액');
        if (tot_rent_cnt > 0 || gRentTotalCnt > 0 || purRentTotalCnt > 0) {
          $('.rent_sel_area2').css('display', '');
        } else {
          $('.rent_sel_area2').css('display', 'none');
        }
        var data_pre_cost = $('#data-pre-cost').val();
        var data_sale_cost = $('#data-sale-cost').val();
        var data_sale_part = $('#data-sale-part').val();
        $('#purchase-area-new,#pan-purchase-area-new').css('display', 'none');
        if (data_sale_cost == 0 && !data_sale_part) {
          $('#purchase-area-new').show();
        } else {
          if (data_sale_part) {
            if ($CLASS == 'pan-purchase' || $CLASS == 'pan-purchase exceed-cost') {
              data_pre_cost = (data_pre_cost / (100 - data_sale_part)) * 100;
              data_sale_cost = (data_pre_cost / 100) * data_sale_part;
            } else {
              data_pre_cost = ($COST / (100 - data_sale_part)) * 100;
              data_sale_cost = data_pre_cost - $COST;
            }
          }
          if ($CLASS == 'pan-purchase' || $CLASS == 'pan-purchase exceed-cost' || data_sale_part) {
            $('#pan-purchase-area-new').show();
          } else {
            $('#purchase-area-new').show();
          }
          $('#myinfo_area').css('padding-bottom', '75px');
          $('#purchase_sub_title').html(' ※이미 구매/대여한 편은 제외됩니다.');
        }
      } else if (
        $CLASS == 'pan-rent' ||
        $CLASS == 'pan-rent exceed-cost' ||
        $CLASS == 'selective-rent' ||
        $CLASS == 'selective-rent exceed-cost'
      ) {
        $('#gold_pay_btn').html('골드로 대여');
        $('#gold_pay_btn1').html('대여하기');
        $('.purchase_type_txt').html('대여');
        $('#purchase_pre_txt').html('대여 예정 금액');
        $('.rent_sel_area2').css('display', '');
        var data_pre_cost = $('#data-pre-cost-rent').val();
        var data_sale_cost = $('#data-sale-cost-rent').val();
        var data_sale_part_rent = $('#data-sale-part-rent').val();
        $('#purchase-area-new,#pan-purchase-area-new').css('display', 'none');
        if (data_sale_cost == 0 && !data_sale_part_rent) {
          $('#purchase-area-new').show();
        } else {
          if (data_sale_part_rent) {
            if ($CLASS == 'pan-rent' || $CLASS == 'pan-rent exceed-cost') {
              if (data_serially_rent == 'Y') {
                $COST = data_sale_cost;
                data_sale_cost = data_pre_cost * (data_sale_part_rent * 0.01);
              } else {
                data_pre_cost = (data_pre_cost / (100 - data_sale_part_rent)) * 100;
                data_sale_cost = (data_pre_cost / 100) * data_sale_part_rent;
              }
            } else {
              data_pre_cost = ($COST / (100 - data_sale_part_rent)) * 100;
              data_sale_cost = data_pre_cost - $COST;
            }
          }
          if ($CLASS == 'pan-rent' || $CLASS == 'pan-rent exceed-cost' || data_sale_part_rent) {
            $('#pan-purchase-area-new').show();
          } else {
            $('#purchase-area-new').show();
          }
          $('#myinfo_area').css('padding-bottom', '75px');
          $('#rent_purchase_sub_title').html(' ※이미 구매/대여한 편은 제외됩니다.');
        }
      }
      var data_sale_per = (100 * data_sale_cost) / data_pre_cost;
      if (
        (tot_rent_cnt || gRentNowUseCnt || purRentNowUseCnt) &&
        ($CLASS == 'pan-purchase' ||
          $CLASS == 'pan-rent' ||
          $CLASS == 'pan-purchase exceed-cost' ||
          $CLASS == 'pan-rent exceed-cost')
      ) {
        if (data_sale_per) avgCost = (avgCost * (100 - data_sale_per)) / 100;
        var max_cnt = data_pre_cost / avgCost;
        if (max_cnt < tot_rent_cnt) {
          tot_rent_cnt = max_cnt;
          gRentTotalCnt = 0;
          purRentTotalCnt = 0;
        } else {
          var gRentBuyCnt = max_cnt - tot_rent_cnt;
          if (gRentBuyCnt < gRentTotalCnt) {
            gRentTotalCnt = gRentBuyCnt;
          }
          var purRentBuyCnt = max_cnt - tot_rent_cnt - gRentTotalCnt;
          if (purRentBuyCnt < purRentTotalCnt) {
            purRentTotalCnt = purRentBuyCnt;
          }
        }
        var orgcost = $COST;
        $COST = $COST - (Number(tot_rent_cnt) + Number(gRentTotalCnt) + Number(purRentTotalCnt)) * avgCost;
        isEnoughGold = $COST <= Number($_Member.gold) + Number(eGold);
        isEnoughCoin = $COST <= $_Member.coin;
        $('#useRentCnt,#sel_rent').val(tot_rent_cnt);
        $('#rent_list').val('');
        $('#gRentNowUseCnt').val(gRentTotalCnt);
        $('#gRentList').val('');
        $('#purRentNowUseCnt').val(purRentTotalCnt);
        $('#purRentList').val('');
      } else {
        if ($ONECK == 'Y') {
          var couponType = $OpneAnchor.data('rent');
          if (couponType == 'CR') {
            $('#useRentCnt,#sel_rent').val(1);
            $('#rent_list').val($Carts);
          } else if (couponType == 'GR') {
            $('#gRentNowUseCnt').val(1);
            $('#gRentList').val($Carts);
          } else if (couponType == 'PR') {
            $('#purRentNowUseCnt').val(1);
            $('#purRentList').val($Carts);
          }
          $('.rent_sel_area,.rent_sel_area2').css('display', '');
        } else if ($ONECK == 'G') {
          $('.rent_sel_area,.rent_sel_area2').css('display', 'none');
          $('#rent_ck').attr('checked', false);
        }
      }
      useRentCnt = $('#useRentCnt').val();
      gRentNowUseCnt = $('#gRentNowUseCnt').val();
      purRentNowUseCnt = $('#purRentNowUseCnt').val();
      $('#totNeCnt').val(max_cnt);
      var adultCnt = $('#adultCnt').val();
      var adultList = $('#adultList').val();
      var adultListCk = $('#adultListCk').val();
      var adultCk = $('#adultCk').val();
      if (
        ($CLASS == 'pan-purchase' && adultCnt > 0 && adultCk == 'Y') ||
        ($CLASS == 'selective-purchase' && adultCnt > 0 && adultCk == 'Y' && adultListCk == 'Y')
      ) {
        $('#layer_pop_19').css('display', 'block');
        if ($CLASS == 'pan-purchase') {
          if ($COST == 0) {
            var check_cnt = orgcost / avgCost;
            $('#layer_pop_19 p').html(
              '총 ' +
                check_cnt +
                '편 중 19금인 편이 ' +
                adultCnt +
                '편 포함되어 있습니다.<br/>성인 인증 후 대여권 사용 가능합니다.'
            );
          } else {
            var check_cnt = $COST / avgCost;
            $('#layer_pop_19 p').html(
              '총 ' +
                check_cnt +
                '편 중 19금인 편이 ' +
                adultCnt +
                '편 포함되어 있습니다.<br/>성인 인증 후 구매가 가능합니다. '
            );
          }
          $('.layer_adult_cnt').css('display', 'inline-block');
        } else {
          var useRentCnt_sel = $('#useRentCnt_sel').val();
          if (useRentCnt_sel > 0)
            $('#layer_pop_19 p').html(
              '선택한 편 중 19금인 편이 포함되어 있습니다.<br/>성인 인증 후 대여권 사용이 가능합니다.'
            );
          else
            $('#layer_pop_19 p').html(
              '선택한 편 중 19금인 편이 포함되어 있습니다.<br/>성인 인증 후 구매가 가능합니다.'
            );
          $('.layer_adult_cnt').css('display', 'none');
        }
        return false;
      }
      var rentCouponSum = Number(useRentCnt) + Number(gRentNowUseCnt) + Number(purRentNowUseCnt);
      if (!!novel.adult && !$_Member.isAdult) return $.alert($message.REQUIRE_ADULT);
      else if (!$COST && (rentCouponSum == 0 || !rentCouponSum)) return $.alert($message.NO_PURCHASABLE_ITEM);
      else if (!isEnoughGold && !isEnoughCoin) {
        $CLASS += ' exceed-cost';
      }
      if ((!useRentCnt || useRentCnt == 0) && gRentNowUseCnt == 0 && purRentNowUseCnt == 0) {
        var rent_cost_btn_day;
        var check_cnt = $COST / avgCost;
        var date = new Date();
        var expireDate =
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate() +
          ' ' +
          date.getHours() +
          ':' +
          date.getMinutes();
        if (expireDate >= '2019-11-01 00:00') {
          if (avgCost > 300) {
            if (check_cnt >= 30) {
              rent_cost_btn_day = ' | <font style="color:#FCBE16;">90일</font>';
            } else {
              rent_cost_btn_day = ' | <font style="color:#FCBE16;">' + Number(check_cnt) * 3 + '일</font>';
            }
          } else {
            if (check_cnt >= 90) {
              rent_cost_btn_day = ' | <font style="color:#FCBE16;">90일</font>';
            } else {
              rent_cost_btn_day = ' | <font style="color:#FCBE16;">' + check_cnt + '일</font>';
            }
          }
        } else {
          if (avgCost <= 300) {
            if (check_cnt <= 3) {
              rent_cost_btn_day = 1;
            } else if (check_cnt >= 4 && check_cnt <= 6) {
              rent_cost_btn_day = 2;
            } else if (check_cnt >= 7 && check_cnt <= 9) {
              rent_cost_btn_day = 3;
            } else if (check_cnt >= 10 && check_cnt <= 12) {
              rent_cost_btn_day = 4;
            } else if (check_cnt >= 13 && check_cnt <= 15) {
              rent_cost_btn_day = 5;
            } else if (check_cnt >= 16 && check_cnt <= 18) {
              rent_cost_btn_day = 6;
            } else if (check_cnt >= 19 && check_cnt <= 21) {
              rent_cost_btn_day = 7;
            } else if (check_cnt >= 22 && check_cnt <= 24) {
              rent_cost_btn_day = 8;
            } else if (check_cnt >= 25 && check_cnt <= 27) {
              rent_cost_btn_day = 9;
            } else if (check_cnt >= 28 && check_cnt <= 30) {
              rent_cost_btn_day = 10;
            } else if (check_cnt >= 31 && check_cnt <= 33) {
              rent_cost_btn_day = 11;
            } else if (check_cnt >= 34 && check_cnt <= 36) {
              rent_cost_btn_day = 12;
            } else if (check_cnt >= 37 && check_cnt <= 39) {
              rent_cost_btn_day = 13;
            } else if (check_cnt >= 40) {
              rent_cost_btn_day = 14;
            }
          } else {
            if (check_cnt > 14) {
              rent_cost_btn_day = 14;
            } else {
              rent_cost_btn_day = check_cnt;
            }
          }
        }
        $('#rent_term').html(rent_cost_btn_day);
        if ($CLASS == 'selective-rent') {
          $('#selective_rent_term').html(rent_cost_btn_day);
          $('#selective_rent_term').show();
          $('#pan_rent_term').hide();
        } else {
          $('#selective_rent_term').hide();
          $('#pan_rent_term').show();
        }
      } else {
        var rentCouponCnt = 0;
        if (useRentCnt > 0) {
          rentCouponCnt = useRentCnt;
        }
        var gRentCouponCnt = 0;
        if (gRentNowUseCnt > 0) {
          gRentCouponCnt = gRentNowUseCnt;
        }
        var purRentCouponCnt = 0;
        if (purRentNowUseCnt > 0) {
          purRentCouponCnt = purRentNowUseCnt;
        }
        $('#gRentBeforeUseCnt').html(Number(rentCouponCnt) + Number(gRentCouponCnt) + Number(purRentCouponCnt));
      }
      $PurchaseBox
        .attr('tabindex', '0')
        .css({ 'user-select': 'none', 'z-index': 2000 })
        .removeClass('pan-purchase pan-rent selective-purchase selective-rent exceed-cost done')
        .addClass($CLASS)
        .find('.require-pre-cost')
        .text(util.number_format(data_pre_cost))
        .end()
        .find('.require-sale-cost')
        .text('-' + util.number_format(data_sale_cost))
        .end()
        .find('.require-sale-per')
        .text('-' + util.number_format(data_sale_per))
        .end()
        .find('.require-cost')
        .text(util.number_format($COST))
        .end()
        .find('.require-cost2')
        .text(util.number_format($COST))
        .end()
        .find('.require-cnt')
        .text(util.number_format($COST / avgCost))
        .end()
        .find('.after-change')
        .text(util.number_format(Number($_Member.gold) + Number(eGold) - Number($COST)))
        .end()
        .add($Overay)
        .fadeIn(200);
      if (!!$Carts) {
        $PurchaseBox.data('items', $Carts);
      }
      $PurchaseBox.focus();
      return false;
    });
  };
  $.fn.management = function () {
    if (!this.length) return this;
    var $Manager = this.eq(0).hide();
    var $Carts = $('table.entries', $Novel).find(':checkbox');
    var $Managetable = $('#FORM-MANAGETABLE', $Novel).hide().css('user-select', 'none');
    $Carts.on('change', function () {
      if (!$Carts.filter('[name]:checked').length) return $Manager.fadeOut(100);
      $Manager.fadeIn(100).insertAfter(this);
    });
    $Manager
      .on('click', 'button.u', function () {
        $(':hidden[name="cart"]', $Manager).val(
          $.map($Carts.filter('[name]').filter(':checked'), function (n) {
            return parseInt(n.value);
          }).join(',')
        );
        return false;
      })
      .on('click', 'button.opening', function () {
        if (!$.confirm($message.CAHNGE_OPEN)) return false;
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-entry-modify-state',
          params: { type: 'open' },
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            document.location.reload();
          });
      })
      .on('click', 'button.closing', function () {
        var storyArenaNvSrl = $(this).attr('data-storyarena');
        if (storyArenaNvSrl) {
          var checkboxCount = $("[id^='neCart-']").length;
          var checkCount = $("[id^='neCart-']:checked").length;
          if (checkboxCount > 0 && checkboxCount == checkCount) {
            if (!$.confirm($message.STORYARENA_CAHNGE_CLOSE)) return false;
          } else {
            if (!$.confirm($message.CAHNGE_CLOSE)) return false;
          }
        } else {
          if (!$.confirm($message.CAHNGE_CLOSE)) return false;
        }
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-entry-modify-state',
          params: { type: 'close' },
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            document.location.reload();
          });
      })
      .on('click', 'button.removing', function () {
        var storyArenaNvSrl = $(this).attr('data-storyarena');
        if (storyArenaNvSrl) {
          var checkboxCount = $("[id^='neCart-']").length;
          var checkCount = $("[id^='neCart-']:checked").length;
          if (checkboxCount > 0 && checkboxCount == checkCount) {
            if (!$.confirm($message.STORYARENA_WANT_TO_DELETE)) return false;
          } else {
            if (!$.confirm($message.WANT_TO_NOVEL_ENTRY_DELETE)) return false;
          }
        } else {
          if (!$.confirm($message.WANT_TO_NOVEL_ENTRY_DELETE)) return false;
        }
        return new xAPI({ host: null, apikey: xAPI.keys.get('NOVEL'), service: 'novel', scope: 'manage-entry-delete' })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            document.location.reload();
          });
      })
      .on('click', 'button.paylizing', function () {
        if (!$.confirm($message.WANT_TO_PAYLIZE)) return false;
        var kyobo = $(this).attr('data-kyobo');
        if (kyobo == 'true') {
          if (
            !confirm(
              '교보문고 연동 작품도 유료 연동으로 설정하시겠습니까?\n작가 요청으로 유료로 변경하는 경우 확인을 눌러주세요.'
            )
          ) {
            kyobo = 'false';
          }
        }
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-entry-modify-state',
          params: { type: 'paid', kyobo: kyobo },
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            document.location.reload();
          });
      })
      .on('click', 'button.freelizing', function () {
        if (!$.confirm($message.WANT_TO_FREELIZE)) return false;
        var kyobo = $(this).attr('data-kyobo');
        if (kyobo == 'true') {
          if (
            !confirm(
              '교보문고 연동 작품도 무료 연동으로 설정하시겠습니까?\n작가 요청으로 무료로 변경하는 경우 확인을 눌러주세요.'
            )
          ) {
            kyobo = 'false';
          }
        }
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-entry-modify-state',
          params: { type: 'free', kyobo: kyobo },
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            document.location.reload();
          });
      })
      .on('click', 'button.unpurchasing', function () {
        if (!$.confirm($message.WANT_TO_UNPURCHASING)) return false;
        if (!$.confirm($message.WANT_TO_UNPURCHASING_RECHECK)) return false;
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-entry-unpurchasing',
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            $.alert($message.UNPURCHASE_DONE);
            document.location.reload();
          });
      })
      .on('click', 'button.discounting', function () {
        return new xAPI({
          host: null,
          apikey: xAPI.keys.get('NOVEL'),
          service: 'novel',
          scope: 'manage-discount-table',
        })
          .ajax({ type: 'POST', data: $Manager.serialize() })
          .on('done', function ($R) {
            $Managetable
              .html($R.html)
              .show()
              .css({ top: parseInt($win.scrollTop() + $win.height() / 20 - $Novel.offset().top) + 'px' });
            $('.xscroll', $Managetable).xscroller();
          });
      });
    $Managetable
      .on('click', '.in-close', function () {
        $Managetable.hide();
      })
      .validate({
        messages: {
          ndCostPurchase: '구매료를 입력하세요.',
          ndCostRental: '대여료를 입력하세요.',
          ndTimeBegin: '할인기간을 입력하세요.',
          ndTimeEnd: '할인기간을 입력하세요.',
        },
        submitHandler: function ($FORM) {
          if (!$.confirm($message.IS_CORRECT)) return false;
          else if (!$.confirm($message.RECHECK)) return false;
          return new xAPI({ host: null, apikey: xAPI.keys.get('NOVEL'), service: 'novel', scope: 'manage-discounting' })
            .ajax({ type: 'POST', data: $Managetable.serialize() })
            .on('done', function ($R) {
              $Managetable.hide();
              document.location.reload();
            });
        },
      });
    return this;
  };
  $('.trigger-purchase').on('click', function (e) {
    var chkEpub = $('#chkEpub').val();
    if (chkEpub == 'Y') {
      $('#epub_bg').show();
      $('.layer_pop_ebook').show();
    }
  });
})(jQuery);
var $XViewer = null,
  $XVPosition = null,
  novel = {
    uno: 0,
    adult: false,
    paid: false,
    cost: {},
    chars: {},
    usign: null,
    prefered: null,
    xvurl: null,
    xvkey: null,
    xviv: null,
    openCommentWindow: function () {
      var $H = $win.height();
      xi.open.call(this, {
        title: 'comment',
        href: this.href + '/window-mode/true',
        width: '580',
        height: $H > 800 ? 800 : $H - 40,
        scrollbars: 'yes',
      });
      return false;
    },
  };
$message = $.extend(
  {
    NO_PREV: '이전글이 없습니다.',
    NO_NEXT: '다음글이 없습니다.',
    NO_PURCHASABLE_ITEM: '구입할 글이 없습니다',
    REFRESH_AFTER_2SECOND: '4초 후에 화면을 새로고침 합니다.',
    CAHNGE_OPEN: '선택한 글을 공개글로 변경 하시겠습니까?',
    CAHNGE_CLOSE: '선택한 글을 비밀글로 변경 하시겠습니까?',
    STORYARENA_CAHNGE_CLOSE:
      '오늘 중에 새롭게 연재된 글이나 공개된 글이 없는 경우 스토리 아레나에서 탈락 할 수 있습니다.\n선택한 글을 비밀글로 변경하시겠습니까?',
    STORYARENA_WANT_TO_DELETE:
      '선택한 글을 삭제 후 오늘 중에 새 연재 글을 등록 하지 않으시면 스토리 아레나에서 탈락 할 수 있습니다.\n선택한 글을 정말 삭제하시겠습니까?',
    WANT_TO_PAYLIZE: '유료글로 변경할까요?',
    WANT_TO_FREELIZE: '무료글로 변경할까요?',
    WANT_TO_UNPURCHASING: '모든 구매 항목을 구매취소할까요?',
    WANT_TO_UNPURCHASING_RECHECK:
      '되돌릴 수 없으므로 신중하게 결정하세요! 정말로 구매취소할까요?\n구매수에 따라 시간이 다소 걸릴 수 있습니다.\n완료될 때까지 잠시 기다려주세요.',
    UNPURCHASE_DONE: '일괄적으로 구매취소했습니다.',
    SUBSCRIBED: '선호작으로 등록했습니다.',
    UNSUBSCRIBED: '선호작을 취소했습니다.',
    IS_CORRECT: '설정 내용이 정확한가요?',
    RECHECK: '마지막으로 한 번 더 확인해보세요.\n정말 이대로 설정할까요?',
  },
  $message
);
var assets_novel_core_ux_js = '202007';
('use strict');
document.domain = 'munpia.com';
Munpia.namespace('contestStarEvent');
Munpia.contestStarEvent = (function ($) {
  function contestEventEarnStar(nvSrl, neSrl, starType) {
    new xAPI({ host: null, apikey: xAPI.keys.get('EVENTAJAX'), service: 'eventAjax', scope: '2020ContestEvent' })
      .ajax({
        type: 'POST',
        data: {
          nvSrl: encodeURIComponent(nvSrl),
          neSrl: encodeURIComponent(neSrl),
          starType: encodeURIComponent(starType),
        },
      })
      .on('done', function (response) {
        alert('이벤트 기간이 종료되었습니다');
        return false;
        var message = '';
        if (response.message != null && response.message.code == 200) {
          message = '출석 완료!<br>' + response.message.stars + ' ☆ 적립';
          if (response.message.starType) {
            if (response.message.starType == 1) {
              var todayDate = response.message.checkDate;
              changeDaily(getFormatDate(todayDate), response.message.stars);
              msgBox(message);
            } else if (response.message.starType == 8) {
              alert('2020 공모대전 한눈에 알아보기 좋아요 완료!');
              location.reload();
            }
          }
        }
      });
  }
  function contestEventUserStar(starType) {
    new xAPI({ host: null, apikey: xAPI.keys.get('EVENTAJAX'), service: 'eventAjax', scope: '2020ContestEventStarUse' })
      .ajax({ type: 'POST', data: { starType: encodeURIComponent(starType) } })
      .on('done', function (response) {
        alert('이벤트 기간이 종료되었습니다');
        return false;
        var result = response.message;
        if (result.code == 200) {
          alert(result.message);
          location.reload();
        } else {
          msgBox(result.message);
        }
      });
  }
  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
  }
  function getFormatDate(dateStr) {
    var date = new Date(dateStr);
    var month = 1 + date.getMonth();
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return month.toString() + day.toString();
  }
  return {
    contestEventEarnStar: function (nvSrl, neSrl, starType) {
      contestEventEarnStar(nvSrl, neSrl, starType);
    },
    contestEventUserStar: function (starType) {
      contestEventUserStar(starType);
    },
    readCookie: function (name) {
      readCookie(name);
    },
  };
})(jQuery);
var assets_site_munpia_contest_star_event_js = '202007';
(function () {
  'use strict';
  var l;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  function n(a) {
    var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: aa(a) };
  }
  function ba(a) {
    if (!(a instanceof Array)) {
      a = n(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ca(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return { N: e, T: f };
    }
    return { N: -1, T: void 0 };
  }
  var da =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ea(a) {
    a = [
      'object' == typeof globalThis && globalThis,
      a,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error('Cannot find global object');
  }
  var fa = ea(this);
  function q(a, b) {
    if (b)
      a: {
        var c = fa;
        a = a.split('.');
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && da(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  q('Array.prototype.findIndex', function (a) {
    return a
      ? a
      : function (b, c) {
          return ca(this, b, c).N;
        };
  });
  q('Array.prototype.find', function (a) {
    return a
      ? a
      : function (b, c) {
          return ca(this, b, c).T;
        };
  });
  function r(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + ' must not be null or undefined');
    if (b instanceof RegExp)
      throw new TypeError('First argument to String.prototype.' + c + ' must not be a regular expression');
    return a + '';
  }
  q('String.prototype.endsWith', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = r(this, b, 'endsWith');
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  });
  q('String.prototype.startsWith', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = r(this, b, 'startsWith'),
            e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  q('String.prototype.repeat', function (a) {
    return a
      ? a
      : function (b) {
          var c = r(this, null, 'repeat');
          if (0 > b || 1342177279 < b) throw new RangeError('Invalid count value');
          b |= 0;
          for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  q('String.prototype.trimLeft', function (a) {
    function b() {
      return this.replace(/^[\s\xa0]+/, '');
    }
    return a || b;
  });
  q('String.prototype.trimStart', function (a) {
    return a || String.prototype.trimLeft;
  });
  q('Promise', function (a) {
    function b(g) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.g();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    function c() {
      this.a = null;
    }
    function d(g) {
      return g instanceof b
        ? g
        : new b(function (h) {
            h(g);
          });
    }
    if (a) return a;
    c.prototype.b = function (g) {
      if (null == this.a) {
        this.a = [];
        var h = this;
        this.c(function () {
          h.h();
        });
      }
      this.a.push(g);
    };
    var e = fa.setTimeout;
    c.prototype.c = function (g) {
      e(g, 0);
    };
    c.prototype.h = function () {
      for (; this.a && this.a.length; ) {
        var g = this.a;
        this.a = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (m) {
            this.g(m);
          }
        }
      }
      this.a = null;
    };
    c.prototype.g = function (g) {
      this.c(function () {
        throw g;
      });
    };
    b.prototype.g = function () {
      function g(m) {
        return function (p) {
          k || ((k = !0), m.call(h, p));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.B), reject: g(this.h) };
    };
    b.prototype.B = function (g) {
      if (g === this) this.h(new TypeError('A Promise cannot resolve to itself'));
      else if (g instanceof b) this.H(g);
      else {
        a: switch (typeof g) {
          case 'object':
            var h = null != g;
            break a;
          case 'function':
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.A(g) : this.i(g);
      }
    };
    b.prototype.A = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.h(k);
        return;
      }
      'function' == typeof h ? this.F(h, g) : this.i(g);
    };
    b.prototype.h = function (g) {
      this.j(2, g);
    };
    b.prototype.i = function (g) {
      this.j(1, g);
    };
    b.prototype.j = function (g, h) {
      if (0 != this.b) throw Error('Cannot settle(' + g + ',' + h + '):Promise already settled in state' + this.b);
      this.b = g;
      this.c = h;
      this.m();
    };
    b.prototype.m = function () {
      if (null != this.a) {
        for (var g = 0; g < this.a.length; ++g) f.b(this.a[g]);
        this.a = null;
      }
    };
    var f = new c();
    b.prototype.H = function (g) {
      var h = this.g();
      g.G(h.resolve, h.reject);
    };
    b.prototype.F = function (g, h) {
      var k = this.g();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    b.prototype.then = function (g, h) {
      function k(A, I) {
        return 'function' == typeof A
          ? function (wa) {
              try {
                m(A(wa));
              } catch (xa) {
                p(xa);
              }
            }
          : I;
      }
      var m,
        p,
        x = new b(function (A, I) {
          m = A;
          p = I;
        });
      this.G(k(g, m), k(h, p));
      return x;
    };
    b.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    b.prototype.G = function (g, h) {
      function k() {
        switch (m.b) {
          case 1:
            g(m.c);
            break;
          case 2:
            h(m.c);
            break;
          default:
            throw Error('Unexpected state:' + m.b);
        }
      }
      var m = this;
      null == this.a ? f.b(k) : this.a.push(k);
    };
    b.resolve = d;
    b.reject = function (g) {
      return new b(function (h, k) {
        k(g);
      });
    };
    b.race = function (g) {
      return new b(function (h, k) {
        for (var m = n(g), p = m.next(); !p.done; p = m.next()) d(p.value).G(h, k);
      });
    };
    b.all = function (g) {
      var h = n(g),
        k = h.next();
      return k.done
        ? d([])
        : new b(function (m, p) {
            function x(wa) {
              return function (xa) {
                A[wa] = xa;
                I--;
                0 == I && m(A);
              };
            }
            var A = [],
              I = 0;
            do A.push(void 0), I++, d(k.value).G(x(A.length - 1), p), (k = h.next());
            while (!k.done);
          });
    };
    return b;
  });
  q('Object.is', function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  q('Array.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  q('String.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== r(this, b, 'includes').indexOf(b, c || 0);
        };
  });
  q('Array.prototype.copyWithin', function (a) {
    function b(c) {
      c = Number(c);
      return Infinity === c || -Infinity === c ? c : c | 0;
    }
    return a
      ? a
      : function (c, d, e) {
          var f = this.length;
          c = b(c);
          d = b(d);
          e = void 0 === e ? f : b(e);
          c = 0 > c ? Math.max(f + c, 0) : Math.min(c, f);
          d = 0 > d ? Math.max(f + d, 0) : Math.min(d, f);
          e = 0 > e ? Math.max(f + e, 0) : Math.min(e, f);
          if (c < d) for (; d < e; ) d in this ? (this[c++] = this[d++]) : (delete this[c++], d++);
          else
            for (e = Math.min(e, f + d - c), c += e - d; e > d; )
              --e in this ? (this[--c] = this[e]) : delete this[--c];
          return this;
        };
  });
  q('Symbol', function (a) {
    function b(e) {
      if (this instanceof b) throw new TypeError('Symbol is not a constructor');
      return new c('jscomp_symbol_' + (e || '') + '_' + d++, e);
    }
    function c(e, f) {
      this.a = e;
      da(this, 'description', { configurable: !0, writable: !0, value: f });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.a;
    };
    var d = 0;
    return b;
  });
  q('Symbol.iterator', function (a) {
    if (a) return a;
    a = Symbol('Symbol.iterator');
    for (
      var b =
          'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
            ' '
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = fa[b[c]];
      'function' === typeof d &&
        'function' != typeof d.prototype[a] &&
        da(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ha(aa(this));
          },
        });
    }
    return a;
  });
  q('Symbol.asyncIterator', function (a) {
    return a ? a : Symbol('Symbol.asyncIterator');
  });
  function ha(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function ia(a, b) {
    a instanceof String && (a += '');
    var c = 0,
      d = {
        next: function () {
          if (c < a.length) {
            var e = c++;
            return { value: b(e, a[e]), done: !1 };
          }
          d.next = function () {
            return { done: !0, value: void 0 };
          };
          return d.next();
        },
      };
    d[Symbol.iterator] = function () {
      return d;
    };
    return d;
  }
  q('Array.prototype.entries', function (a) {
    return a
      ? a
      : function () {
          return ia(this, function (b, c) {
            return [b, c];
          });
        };
  });
  q('Array.prototype.fill', function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  q('Array.prototype.flat', function (a) {
    return a
      ? a
      : function (b) {
          b = void 0 === b ? 1 : b;
          for (var c = [], d = 0; d < this.length; d++) {
            var e = this[d];
            Array.isArray(e) && 0 < b ? ((e = Array.prototype.flat.call(e, b - 1)), c.push.apply(c, e)) : c.push(e);
          }
          return c;
        };
  });
  q('Array.prototype.flatMap', function (a) {
    return a
      ? a
      : function (b, c) {
          for (var d = [], e = 0; e < this.length; e++) {
            var f = b.call(c, this[e], e, this);
            Array.isArray(f) ? d.push.apply(d, f) : d.push(f);
          }
          return d;
        };
  });
  q('Array.from', function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f = 'undefined' != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
          if ('function' == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
          } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  q('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return ia(this, function (b) {
            return b;
          });
        };
  });
  q('Array.of', function (a) {
    return a
      ? a
      : function (b) {
          return Array.from(arguments);
        };
  });
  q('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return ia(this, function (b, c) {
            return c;
          });
        };
  });
  var ja;
  if ('function' == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { X: !0 },
        ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.X;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var na = ja;
  q('globalThis', function (a) {
    return a || fa;
  });
  function t(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  q('WeakMap', function (a) {
    function b(k) {
      this.a = (h += Math.random() + 1).toString();
      if (k) {
        k = n(k);
        for (var m; !(m = k.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    }
    function c() {}
    function d(k) {
      var m = typeof k;
      return ('object' === m && null !== k) || 'function' === m;
    }
    function e(k) {
      if (!t(k, g)) {
        var m = new c();
        da(k, g, { value: m });
      }
    }
    function f(k) {
      var m = Object[k];
      m &&
        (Object[k] = function (p) {
          if (p instanceof c) return p;
          Object.isExtensible(p) && e(p);
          return m(p);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            m = Object.seal({}),
            p = new a([
              [k, 2],
              [m, 3],
            ]);
          if (2 != p.get(k) || 3 != p.get(m)) return !1;
          p.delete(k);
          p.set(m, 4);
          return !p.has(k) && 4 == p.get(m);
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var g = '$jscomp_hidden_' + Math.random();
    f('freeze');
    f('preventExtensions');
    f('seal');
    var h = 0;
    b.prototype.set = function (k, m) {
      if (!d(k)) throw Error('Invalid WeakMap key');
      e(k);
      if (!t(k, g)) throw Error('WeakMap key fail:' + k);
      k[g][this.a] = m;
      return this;
    };
    b.prototype.get = function (k) {
      return d(k) && t(k, g) ? k[g][this.a] : void 0;
    };
    b.prototype.has = function (k) {
      return d(k) && t(k, g) && t(k[g], this.a);
    };
    b.prototype.delete = function (k) {
      return d(k) && t(k, g) && t(k[g], this.a) ? delete k[g][this.a] : !1;
    };
    return b;
  });
  q('Map', function (a) {
    function b() {
      var h = {};
      return (h.s = h.next = h.head = h);
    }
    function c(h, k) {
      var m = h.a;
      return ha(function () {
        if (m) {
          for (; m.head != h.a; ) m = m.s;
          for (; m.next != m.head; ) return (m = m.next), { done: !1, value: k(m) };
          m = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(h, k) {
      var m = k && typeof k;
      'object' == m || 'function' == m ? (f.has(k) ? (m = f.get(k)) : ((m = '' + ++g), f.set(k, m))) : (m = 'p_' + k);
      var p = h.b[m];
      if (p && t(h.b, m))
        for (h = 0; h < p.length; h++) {
          var x = p[h];
          if ((k !== k && x.key !== x.key) || k === x.key) return { id: m, list: p, index: h, l: x };
        }
      return { id: m, list: p, index: -1, l: void 0 };
    }
    function e(h) {
      this.b = {};
      this.a = b();
      this.size = 0;
      if (h) {
        h = n(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    if (
      (function () {
        if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(n([[h, 's']]));
          if ('s' != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, 't') != k || 2 != k.size) return !1;
          var m = k.entries(),
            p = m.next();
          if (p.done || p.value[0] != h || 's' != p.value[1]) return !1;
          p = m.next();
          return p.done || 4 != p.value[0].x || 't' != p.value[1] || !m.next().done ? !1 : !0;
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this.b[m.id] = []);
      m.l
        ? (m.l.value = k)
        : ((m.l = { next: this.a, s: this.a.s, head: this.a, key: h, value: k }),
          m.list.push(m.l),
          (this.a.s.next = m.l),
          (this.a.s = m.l),
          this.size++);
      return this;
    };
    e.prototype.delete = function (h) {
      h = d(this, h);
      return h.l && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.b[h.id],
          (h.l.s.next = h.l.next),
          (h.l.next.s = h.l.s),
          (h.l.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this.b = {};
      this.a = this.a.s = b();
      this.size = 0;
    };
    e.prototype.has = function (h) {
      return !!d(this, h).l;
    };
    e.prototype.get = function (h) {
      return (h = d(this, h).l) && h.value;
    };
    e.prototype.entries = function () {
      return c(this, function (h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (h) {
        return h.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (h) {
        return h.value;
      });
    };
    e.prototype.forEach = function (h, k) {
      for (var m = this.entries(), p; !(p = m.next()).done; ) (p = p.value), h.call(k, p[1], p[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  q('Math.acosh', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          return Math.log(b + Math.sqrt(b * b - 1));
        };
  });
  q('Math.asinh', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (0 === b) return b;
          var c = Math.log(Math.abs(b) + Math.sqrt(b * b + 1));
          return 0 > b ? -c : c;
        };
  });
  q('Math.log1p', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (0.25 > b && -0.25 < b) {
            for (var c = b, d = 1, e = b, f = 0, g = 1; f != e; ) (c *= b), (g *= -1), (e = (f = e) + (g * c) / ++d);
            return e;
          }
          return Math.log(1 + b);
        };
  });
  q('Math.atanh', function (a) {
    if (a) return a;
    var b = Math.log1p;
    return function (c) {
      c = Number(c);
      return (b(c) - b(-c)) / 2;
    };
  });
  q('Math.cbrt', function (a) {
    return a
      ? a
      : function (b) {
          if (0 === b) return b;
          b = Number(b);
          var c = Math.pow(Math.abs(b), 1 / 3);
          return 0 > b ? -c : c;
        };
  });
  q('Math.clz32', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b) >>> 0;
          if (0 === b) return 32;
          var c = 0;
          0 === (b & 4294901760) && ((b <<= 16), (c += 16));
          0 === (b & 4278190080) && ((b <<= 8), (c += 8));
          0 === (b & 4026531840) && ((b <<= 4), (c += 4));
          0 === (b & 3221225472) && ((b <<= 2), (c += 2));
          0 === (b & 2147483648) && c++;
          return c;
        };
  });
  q('Math.cosh', function (a) {
    if (a) return a;
    var b = Math.exp;
    return function (c) {
      c = Number(c);
      return (b(c) + b(-c)) / 2;
    };
  });
  q('Math.expm1', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (0.25 > b && -0.25 < b) {
            for (var c = b, d = 1, e = b, f = 0; f != e; ) (c *= b / ++d), (e = (f = e) + c);
            return e;
          }
          return Math.exp(b) - 1;
        };
  });
  q('Math.fround', function (a) {
    if (a) return a;
    if ('function' !== typeof Float32Array)
      return function (c) {
        return c;
      };
    var b = new Float32Array(1);
    return function (c) {
      b[0] = c;
      return b[0];
    };
  });
  q('Math.hypot', function (a) {
    return a
      ? a
      : function (b) {
          if (2 > arguments.length) return arguments.length ? Math.abs(arguments[0]) : 0;
          var c, d, e;
          for (c = e = 0; c < arguments.length; c++) e = Math.max(e, Math.abs(arguments[c]));
          if (1e100 < e || 1e-100 > e) {
            if (!e) return e;
            for (c = d = 0; c < arguments.length; c++) {
              var f = Number(arguments[c]) / e;
              d += f * f;
            }
            return Math.sqrt(d) * e;
          }
          for (c = d = 0; c < arguments.length; c++) (f = Number(arguments[c])), (d += f * f);
          return Math.sqrt(d);
        };
  });
  q('Math.imul', function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (d * e + (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>> 0)) | 0;
        };
  });
  q('Math.log10', function (a) {
    return a
      ? a
      : function (b) {
          return Math.log(b) / Math.LN10;
        };
  });
  q('Math.log2', function (a) {
    return a
      ? a
      : function (b) {
          return Math.log(b) / Math.LN2;
        };
  });
  q('Math.sign', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1;
        };
  });
  q('Math.sinh', function (a) {
    if (a) return a;
    var b = Math.exp;
    return function (c) {
      c = Number(c);
      return 0 === c ? c : (b(c) - b(-c)) / 2;
    };
  });
  q('Math.tanh', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (0 === b) return b;
          var c = Math.exp(-2 * Math.abs(b));
          c = (1 - c) / (1 + c);
          return 0 > b ? -c : c;
        };
  });
  q('Math.trunc', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  q('Number.EPSILON', function () {
    return Math.pow(2, -52);
  });
  q('Number.MAX_SAFE_INTEGER', function () {
    return 9007199254740991;
  });
  q('Number.MIN_SAFE_INTEGER', function () {
    return -9007199254740991;
  });
  q('Number.isFinite', function (a) {
    return a
      ? a
      : function (b) {
          return 'number' !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  q('Number.isInteger', function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  q('Number.isNaN', function (a) {
    return a
      ? a
      : function (b) {
          return 'number' === typeof b && isNaN(b);
        };
  });
  q('Number.isSafeInteger', function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  q('Number.parseFloat', function (a) {
    return a || parseFloat;
  });
  q('Number.parseInt', function (a) {
    return a || parseInt;
  });
  var oa =
    'function' == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) t(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  q('Object.assign', function (a) {
    return a || oa;
  });
  q('Object.entries', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) t(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  q('Object.fromEntries', function (a) {
    return a
      ? a
      : function (b) {
          var c = {};
          if (!(Symbol.iterator in b)) throw new TypeError('' + b + ' is not iterable');
          b = b[Symbol.iterator].call(b);
          for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            if (Object(d) !== d) throw new TypeError('iterable for fromEntries should yield objects');
            c[d[0]] = d[1];
          }
          return c;
        };
  });
  q('Reflect', function (a) {
    return a ? a : {};
  });
  q('Object.getOwnPropertySymbols', function (a) {
    return a
      ? a
      : function () {
          return [];
        };
  });
  q('Reflect.ownKeys', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d = Object.getOwnPropertyNames(b);
          b = Object.getOwnPropertySymbols(b);
          for (var e = 0; e < d.length; e++) ('jscomp_symbol_' == d[e].substring(0, 14) ? b : c).push(d[e]);
          return c.concat(b);
        };
  });
  q('Object.getOwnPropertyDescriptors', function (a) {
    return a
      ? a
      : function (b) {
          for (var c = {}, d = Reflect.ownKeys(b), e = 0; e < d.length; e++)
            c[d[e]] = Object.getOwnPropertyDescriptor(b, d[e]);
          return c;
        };
  });
  q('Object.setPrototypeOf', function (a) {
    return a || na;
  });
  q('Object.values', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) t(b, d) && c.push(b[d]);
          return c;
        };
  });
  q('Promise.allSettled', function (a) {
    function b(d) {
      return { status: 'fulfilled', value: d };
    }
    function c(d) {
      return { status: 'rejected', reason: d };
    }
    return a
      ? a
      : function (d) {
          var e = this;
          d = Array.from(d, function (f) {
            return e.resolve(f).then(b, c);
          });
          return e.all(d);
        };
  });
  q('Promise.prototype.finally', function (a) {
    return a
      ? a
      : function (b) {
          return this.then(
            function (c) {
              return Promise.resolve(b()).then(function () {
                return c;
              });
            },
            function (c) {
              return Promise.resolve(b()).then(function () {
                throw c;
              });
            }
          );
        };
  });
  q('Reflect.apply', function (a) {
    if (a) return a;
    var b = Function.prototype.apply;
    return function (c, d, e) {
      return b.call(c, d, e);
    };
  });
  var pa =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    qa = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if ('undefined' != typeof Reflect && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = pa(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })();
  q('Reflect.construct', function () {
    return qa;
  });
  q('Reflect.defineProperty', function (a) {
    return a
      ? a
      : function (b, c, d) {
          try {
            Object.defineProperty(b, c, d);
            var e = Object.getOwnPropertyDescriptor(b, c);
            return e
              ? e.configurable === (d.configurable || !1) &&
                  e.enumerable === (d.enumerable || !1) &&
                  ('value' in e
                    ? e.value === d.value && e.writable === (d.writable || !1)
                    : e.get === d.get && e.set === d.set)
              : !1;
          } catch (f) {
            return !1;
          }
        };
  });
  q('Reflect.deleteProperty', function (a) {
    return a
      ? a
      : function (b, c) {
          if (!t(b, c)) return !0;
          try {
            return delete b[c];
          } catch (d) {
            return !1;
          }
        };
  });
  q('Reflect.getOwnPropertyDescriptor', function (a) {
    return a || Object.getOwnPropertyDescriptor;
  });
  q('Reflect.getPrototypeOf', function (a) {
    return a || Object.getPrototypeOf;
  });
  function ra(a, b) {
    for (; a; ) {
      var c = Reflect.getOwnPropertyDescriptor(a, b);
      if (c) return c;
      a = Reflect.getPrototypeOf(a);
    }
  }
  q('Reflect.get', function (a) {
    return a
      ? a
      : function (b, c, d) {
          if (2 >= arguments.length) return b[c];
          var e = ra(b, c);
          if (e) return e.get ? e.get.call(d) : e.value;
        };
  });
  q('Reflect.has', function (a) {
    return a
      ? a
      : function (b, c) {
          return c in b;
        };
  });
  q('Reflect.isExtensible', function (a) {
    return a
      ? a
      : 'function' == typeof Object.isExtensible
      ? Object.isExtensible
      : function () {
          return !0;
        };
  });
  q('Reflect.preventExtensions', function (a) {
    return a
      ? a
      : 'function' != typeof Object.preventExtensions
      ? function () {
          return !1;
        }
      : function (b) {
          Object.preventExtensions(b);
          return !Object.isExtensible(b);
        };
  });
  q('Reflect.set', function (a) {
    return a
      ? a
      : function (b, c, d, e) {
          var f = ra(b, c);
          return f
            ? f.set
              ? (f.set.call(3 < arguments.length ? e : b, d), !0)
              : f.writable && !Object.isFrozen(b)
              ? ((b[c] = d), !0)
              : !1
            : Reflect.isExtensible(b)
            ? ((b[c] = d), !0)
            : !1;
        };
  });
  q('Reflect.setPrototypeOf', function (a) {
    return a
      ? a
      : na
      ? function (b, c) {
          try {
            return na(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  q('Set', function (a) {
    function b(c) {
      this.a = new Map();
      if (c) {
        c = n(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.a.size;
    }
    if (
      (function () {
        if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(n([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size)
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.a.set(c, c);
      this.size = this.a.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.a.delete(c);
      this.size = this.a.size;
      return c;
    };
    b.prototype.clear = function () {
      this.a.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.a.has(c);
    };
    b.prototype.entries = function () {
      return this.a.entries();
    };
    b.prototype.values = function () {
      return this.a.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.a.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  q('String.prototype.codePointAt', function (a) {
    return a
      ? a
      : function (b) {
          var c = r(this, null, 'codePointAt'),
            d = c.length;
          b = Number(b) || 0;
          if (0 <= b && b < d) {
            b |= 0;
            var e = c.charCodeAt(b);
            if (55296 > e || 56319 < e || b + 1 === d) return e;
            b = c.charCodeAt(b + 1);
            return 56320 > b || 57343 < b ? e : 1024 * (e - 55296) + b + 9216;
          }
        };
  });
  q('String.fromCodePoint', function (a) {
    return a
      ? a
      : function (b) {
          for (var c = '', d = 0; d < arguments.length; d++) {
            var e = Number(arguments[d]);
            if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError('invalid_code_point ' + e);
            65535 >= e
              ? (c += String.fromCharCode(e))
              : ((e -= 65536),
                (c += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                (c += String.fromCharCode((e & 1023) | 56320)));
          }
          return c;
        };
  });
  q('String.prototype.matchAll', function (a) {
    return a
      ? a
      : function (b) {
          if (b instanceof RegExp && !b.global)
            throw new TypeError('RegExp passed into String.prototype.matchAll() must have global tag.');
          var c = new RegExp(b, b instanceof RegExp ? void 0 : 'g'),
            d = this,
            e = !1,
            f = {
              next: function () {
                var g = {},
                  h = c.lastIndex;
                if (e) return { value: void 0, done: !0 };
                var k = c.exec(d);
                if (!k) return (e = !0), { value: void 0, done: !0 };
                c.lastIndex === h && (c.lastIndex += 1);
                g.value = k;
                g.done = !1;
                return g;
              },
            };
          f[Symbol.iterator] = function () {
            return f;
          };
          return f;
        };
  });
  function sa(a, b) {
    a = void 0 !== a ? String(a) : ' ';
    return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : '';
  }
  q('String.prototype.padEnd', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = r(this, null, 'padStart');
          return d + sa(c, b - d.length);
        };
  });
  q('String.prototype.padStart', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = r(this, null, 'padStart');
          return sa(c, b - d.length) + d;
        };
  });
  q('String.prototype.trimRight', function (a) {
    function b() {
      return this.replace(/[\s\xa0]+$/, '');
    }
    return a || b;
  });
  q('String.prototype.trimEnd', function (a) {
    return a || String.prototype.trimRight;
  });
  function u(a) {
    return a ? a : Array.prototype.copyWithin;
  }
  q('Int8Array.prototype.copyWithin', u);
  q('Uint8Array.prototype.copyWithin', u);
  q('Uint8ClampedArray.prototype.copyWithin', u);
  q('Int16Array.prototype.copyWithin', u);
  q('Uint16Array.prototype.copyWithin', u);
  q('Int32Array.prototype.copyWithin', u);
  q('Uint32Array.prototype.copyWithin', u);
  q('Float32Array.prototype.copyWithin', u);
  q('Float64Array.prototype.copyWithin', u);
  function v(a) {
    return a ? a : Array.prototype.fill;
  }
  q('Int8Array.prototype.fill', v);
  q('Uint8Array.prototype.fill', v);
  q('Uint8ClampedArray.prototype.fill', v);
  q('Int16Array.prototype.fill', v);
  q('Uint16Array.prototype.fill', v);
  q('Int32Array.prototype.fill', v);
  q('Uint32Array.prototype.fill', v);
  q('Float32Array.prototype.fill', v);
  q('Float64Array.prototype.fill', v);
  q('WeakSet', function (a) {
    function b(c) {
      this.a = new WeakMap();
      if (c) {
        c = n(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var c = Object.seal({}),
            d = Object.seal({}),
            e = new a([c]);
          if (!e.has(c) || e.has(d)) return !1;
          e.delete(c);
          e.add(d);
          return !e.has(c) && e.has(d);
        } catch (f) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      this.a.set(c, !0);
      return this;
    };
    b.prototype.has = function (c) {
      return this.a.has(c);
    };
    b.prototype.delete = function (c) {
      return this.a.delete(c);
    };
    return b;
  });
  var w = this || self,
    ta = /^[\w+/_-]+[=]{0,2}$/,
    ua = null;
  function va(a) {
    return (a = a.querySelector && a.querySelector('script[nonce]')) &&
      (a = a.nonce || a.getAttribute('nonce')) &&
      ta.test(a)
      ? a
      : '';
  }
  function y(a) {
    a = a.split('.');
    for (var b = w, c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function z() {}
  function ya(a) {
    var b = typeof a;
    return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
  }
  function B(a) {
    return 'function' == ya(a);
  }
  function za(a) {
    var b = typeof a;
    return ('object' == b && null != a) || 'function' == b;
  }
  function Aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Ba(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function C(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? (C = Aa) : (C = Ba);
    return C.apply(null, arguments);
  }
  function D(a, b) {
    a = a.split('.');
    var c = w;
    a[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = b);
  }
  function E(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  function Ca(a) {
    return a;
  }
  function F(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, F);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  E(F, Error);
  F.prototype.name = 'CustomError';
  function G(a, b) {
    this.a = (a === Da && b) || '';
    this.b = Ea;
  }
  G.prototype.O = !0;
  G.prototype.M = function () {
    return this.a;
  };
  function Fa(a) {
    return a instanceof G && a.constructor === G && a.b === Ea ? a.a : 'type_error:Const';
  }
  function H(a) {
    return new G(Da, a);
  }
  var Ea = {},
    Da = {};
  var J = { f: {} };
  J.f.I = {
    ha: {
      'gstatic.com': {
        loader: H('https://www.gstatic.com/charts/%{version}/loader.js'),
        debug: H('https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js'),
        debug_i18n: H(
          'https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js'
        ),
        compiled: H('https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js'),
        compiled_i18n: H(
          'https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js'
        ),
        css: H('https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}'),
        css2: H('https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}'),
        third_party: H('https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}'),
        third_party2: H('https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}'),
        third_party_gen: H('https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}'),
      },
      'gstatic.cn': {
        loader: H('https://www.gstatic.cn/charts/%{version}/loader.js'),
        debug: H('https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js'),
        debug_i18n: H(
          'https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js'
        ),
        compiled: H('https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js'),
        compiled_i18n: H(
          'https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js'
        ),
        css: H('https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}'),
        css2: H('https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}'),
        third_party: H('https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}'),
        third_party2: H('https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}'),
        third_party_gen: H('https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}'),
      },
    },
    Y: ['default'],
    na: {
      default: [],
      graphics: ['default'],
      ui: ['graphics'],
      ui_base: ['graphics'],
      flashui: ['ui'],
      fw: ['ui'],
      geo: ['ui'],
      annotatedtimeline: ['annotationchart'],
      annotationchart: ['ui', 'controls', 'corechart', 'table'],
      areachart: 'browserchart',
      bar: ['fw', 'dygraph', 'webfontloader'],
      barchart: 'browserchart',
      browserchart: ['ui'],
      bubbles: ['fw', 'd3'],
      calendar: ['fw'],
      charteditor: 'ui corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table'.split(' '),
      charteditor_base:
        'ui_base corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table_base'.split(' '),
      circles: ['fw', 'd3'],
      clusterchart: ['corechart', 'd3'],
      columnchart: 'browserchart',
      controls: ['ui'],
      controls_base: ['ui_base'],
      corechart: ['ui'],
      gantt: ['fw', 'dygraph'],
      gauge: ['ui'],
      geochart: ['geo'],
      geomap: ['flashui', 'geo'],
      geomap_base: ['ui_base'],
      heatmap: ['vegachart'],
      helloworld: ['fw'],
      imagechart: ['ui'],
      imageareachart: 'imagechart',
      imagebarchart: 'imagechart',
      imagelinechart: 'imagechart',
      imagepiechart: 'imagechart',
      imagesparkline: 'imagechart',
      line: ['fw', 'dygraph', 'webfontloader'],
      linechart: 'browserchart',
      map: ['geo'],
      motionchart: ['flashui'],
      orgchart: ['ui'],
      overtimecharts: ['ui', 'corechart'],
      piechart: 'browserchart',
      sankey: ['fw', 'd3', 'd3.sankey'],
      scatter: ['fw', 'dygraph', 'webfontloader'],
      scatterchart: 'browserchart',
      sunburst: ['fw', 'd3'],
      streamgraph: ['fw', 'd3'],
      table: ['ui'],
      table_base: ['ui_base'],
      timeline: ['fw', 'ui', 'dygraph'],
      treemap: ['ui'],
      vegachart: ['graphics'],
      wordtree: ['ui'],
    },
    Ha: {
      d3: { subdir1: 'd3', subdir2: 'v5', filename: 'd3.js' },
      'd3.sankey': { subdir1: 'd3_sankey', subdir2: 'v4', filename: 'd3.sankey.js' },
      webfontloader: { subdir: 'webfontloader', filename: 'webfont.js' },
    },
    Ga: { dygraph: { subdir: 'dygraphs', filename: 'dygraph-tickers-combined.js' } },
    ma: {
      default: [{ subdir: 'core', filename: 'tooltip.css' }],
      annotationchart: [{ subdir: 'annotationchart', filename: 'annotationchart.css' }],
      charteditor: [{ subdir: 'charteditor', filename: 'charteditor.css' }],
      charteditor_base: [{ subdir: 'charteditor_base', filename: 'charteditor_base.css' }],
      controls: [{ subdir: 'controls', filename: 'controls.css' }],
      imagesparkline: [{ subdir: 'imagechart', filename: 'imagesparkline.css' }],
      orgchart: [{ subdir: 'orgchart', filename: 'orgchart.css' }],
      table: [
        { subdir: 'table', filename: 'table.css' },
        { subdir: 'util', filename: 'format.css' },
      ],
      table_base: [
        { subdir: 'util', filename: 'format.css' },
        { subdir: 'table', filename: 'table_base.css' },
      ],
      ui: [{ subdir: 'util', filename: 'util.css' }],
      ui_base: [{ subdir: 'util', filename: 'util_base.css' }],
    },
  };
  J.f.V = {
    $: {
      'chrome-frame': {
        versions: {
          '1.0.0': { uncompressed: 'CFInstall.js', compressed: 'CFInstall.min.js' },
          '1.0.1': { uncompressed: 'CFInstall.js', compressed: 'CFInstall.min.js' },
          '1.0.2': { uncompressed: 'CFInstall.js', compressed: 'CFInstall.min.js' },
        },
        aliases: { 1: '1.0.2', '1.0': '1.0.2' },
      },
      swfobject: {
        versions: {
          2.1: { uncompressed: 'swfobject_src.js', compressed: 'swfobject.js' },
          2.2: { uncompressed: 'swfobject_src.js', compressed: 'swfobject.js' },
        },
        aliases: { 2: '2.2' },
      },
      'ext-core': {
        versions: {
          '3.1.0': { uncompressed: 'ext-core-debug.js', compressed: 'ext-core.js' },
          '3.0.0': { uncompressed: 'ext-core-debug.js', compressed: 'ext-core.js' },
        },
        aliases: { 3: '3.1.0', '3.0': '3.0.0', 3.1: '3.1.0' },
      },
      scriptaculous: {
        versions: {
          '1.8.3': { uncompressed: 'scriptaculous.js', compressed: 'scriptaculous.js' },
          '1.9.0': { uncompressed: 'scriptaculous.js', compressed: 'scriptaculous.js' },
          '1.8.1': { uncompressed: 'scriptaculous.js', compressed: 'scriptaculous.js' },
          '1.8.2': { uncompressed: 'scriptaculous.js', compressed: 'scriptaculous.js' },
        },
        aliases: { 1: '1.9.0', 1.8: '1.8.3', 1.9: '1.9.0' },
      },
      webfont: {
        versions: {
          '1.0.12': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.13': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.14': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.15': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.10': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.11': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.27': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.28': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.29': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.23': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.24': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.25': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.26': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.21': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.22': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.3': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.4': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.5': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.6': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.9': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.16': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.17': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.0': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.18': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.1': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.19': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
          '1.0.2': { uncompressed: 'webfont_debug.js', compressed: 'webfont.js' },
        },
        aliases: { 1: '1.0.29', '1.0': '1.0.29' },
      },
      jqueryui: {
        versions: {
          '1.8.17': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.16': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.15': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.14': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.4': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.13': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.5': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.12': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.6': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.11': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.7': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.10': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.8': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.9': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.6.0': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.7.0': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.5.2': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.0': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.7.1': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.5.3': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.1': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.7.2': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.8.2': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
          '1.7.3': { uncompressed: 'jquery-ui.js', compressed: 'jquery-ui.min.js' },
        },
        aliases: { 1: '1.8.17', 1.5: '1.5.3', 1.6: '1.6.0', 1.7: '1.7.3', 1.8: '1.8.17', '1.8.3': '1.8.4' },
      },
      mootools: {
        versions: {
          '1.3.0': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.2.1': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.1.2': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.4.0': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.3.1': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.2.2': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.4.1': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.3.2': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.2.3': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.4.2': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.2.4': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.2.5': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
          '1.1.1': { uncompressed: 'mootools.js', compressed: 'mootools-yui-compressed.js' },
        },
        aliases: { 1: '1.1.2', 1.1: '1.1.2', 1.2: '1.2.5', 1.3: '1.3.2', 1.4: '1.4.2', 1.11: '1.1.1' },
      },
      yui: {
        versions: {
          '2.8.0r4': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
          '2.9.0': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
          '2.8.1': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
          '2.6.0': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
          '2.7.0': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
          '3.3.0': { uncompressed: 'build/yui/yui.js', compressed: 'build/yui/yui-min.js' },
          '2.8.2r1': { uncompressed: 'build/yuiloader/yuiloader.js', compressed: 'build/yuiloader/yuiloader-min.js' },
        },
        aliases: {
          2: '2.9.0',
          2.6: '2.6.0',
          2.7: '2.7.0',
          2.8: '2.8.2r1',
          '2.8.0': '2.8.0r4',
          '2.8.2': '2.8.2r1',
          2.9: '2.9.0',
          3: '3.3.0',
          3.3: '3.3.0',
        },
      },
      prototype: {
        versions: {
          '1.6.1.0': { uncompressed: 'prototype.js', compressed: 'prototype.js' },
          '1.6.0.2': { uncompressed: 'prototype.js', compressed: 'prototype.js' },
          '1.7.0.0': { uncompressed: 'prototype.js', compressed: 'prototype.js' },
          '1.6.0.3': { uncompressed: 'prototype.js', compressed: 'prototype.js' },
        },
        aliases: {
          1: '1.7.0.0',
          1.6: '1.6.1.0',
          '1.6.0': '1.6.0.3',
          '1.6.1': '1.6.1.0',
          1.7: '1.7.0.0',
          '1.7.0': '1.7.0.0',
        },
      },
      jquery: {
        versions: {
          '1.2.3': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.2.6': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.3.0': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.3.1': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.3.2': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.4.0': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.4.1': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.4.2': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.4.3': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.4.4': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.5.0': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.5.1': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.5.2': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.6.0': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.6.1': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.6.2': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.6.3': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.6.4': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.7.0': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
          '1.7.1': { uncompressed: 'jquery.js', compressed: 'jquery.min.js' },
        },
        aliases: { 1: '1.7.1', 1.2: '1.2.6', 1.3: '1.3.2', 1.4: '1.4.4', 1.5: '1.5.2', 1.6: '1.6.4', 1.7: '1.7.1' },
      },
      dojo: {
        versions: {
          '1.3.0': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.4.0': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.3.1': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.5.0': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.4.1': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.3.2': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.2.3': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.6.0': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.5.1': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.7.0': { uncompressed: 'dojo/dojo.js.uncompressed.js', compressed: 'dojo/dojo.js' },
          '1.6.1': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.4.3': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.7.1': { uncompressed: 'dojo/dojo.js.uncompressed.js', compressed: 'dojo/dojo.js' },
          '1.7.2': { uncompressed: 'dojo/dojo.js.uncompressed.js', compressed: 'dojo/dojo.js' },
          '1.2.0': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
          '1.1.1': { uncompressed: 'dojo/dojo.xd.js.uncompressed.js', compressed: 'dojo/dojo.xd.js' },
        },
        aliases: {
          1: '1.6.1',
          1.1: '1.1.1',
          1.2: '1.2.3',
          1.3: '1.3.2',
          1.4: '1.4.3',
          1.5: '1.5.1',
          1.6: '1.6.1',
          1.7: '1.7.2',
        },
      },
    },
  };
  J.f.W = {
    af: !0,
    am: !0,
    az: !0,
    ar: !0,
    arb: 'ar',
    bg: !0,
    bn: !0,
    ca: !0,
    cs: !0,
    cmn: 'zh',
    da: !0,
    de: !0,
    el: !0,
    en: !0,
    en_gb: !0,
    es: !0,
    es_419: !0,
    et: !0,
    eu: !0,
    fa: !0,
    fi: !0,
    fil: !0,
    fr: !0,
    fr_ca: !0,
    gl: !0,
    ka: !0,
    gu: !0,
    he: 'iw',
    hi: !0,
    hr: !0,
    hu: !0,
    hy: !0,
    id: !0,
    in: 'id',
    is: !0,
    it: !0,
    iw: !0,
    ja: !0,
    ji: 'yi',
    jv: !1,
    jw: 'jv',
    km: !0,
    kn: !0,
    ko: !0,
    lo: !0,
    lt: !0,
    lv: !0,
    ml: !0,
    mn: !0,
    mo: 'ro',
    mr: !0,
    ms: !0,
    nb: 'no',
    ne: !0,
    nl: !0,
    no: !0,
    pl: !0,
    pt: 'pt_br',
    pt_br: !0,
    pt_pt: !0,
    ro: !0,
    ru: !0,
    si: !0,
    sk: !0,
    sl: !0,
    sr: !0,
    sv: !0,
    sw: !0,
    swh: 'sw',
    ta: !0,
    te: !0,
    th: !0,
    tl: 'fil',
    tr: !0,
    uk: !0,
    ur: !0,
    vi: !0,
    yi: !1,
    zh: 'zh_cn',
    zh_cn: !0,
    zh_hk: !0,
    zh_tw: !0,
    zsm: 'ms',
    zu: !0,
  };
  var Ga = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Ha = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    Ia = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function Ja(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Ka(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function La(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c],
        e = ya(d);
      if ('array' == e || ('object' == e && 'number' == typeof d.length)) {
        e = a.length || 0;
        var f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  var Ma;
  function K(a, b) {
    this.a = (a === Na && b) || '';
    this.b = Oa;
  }
  K.prototype.O = !0;
  K.prototype.M = function () {
    return this.a.toString();
  };
  function Pa(a) {
    return a instanceof K && a.constructor === K && a.b === Oa ? a.a : 'type_error:TrustedResourceUrl';
  }
  function Qa(a, b) {
    var c = Fa(a);
    if (!Ra.test(c)) throw Error('Invalid TrustedResourceUrl format:' + c);
    a = c.replace(Sa, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error(
          'Found marker,"' +
            e +
            '",in format string,"' +
            c +
            '",but no valid label mapping found in args:' +
            JSON.stringify(b)
        );
      d = b[e];
      return d instanceof G ? Fa(d) : encodeURIComponent(String(d));
    });
    return Ta(a);
  }
  var Sa = /%{(\w+)}/g,
    Ra = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    Ua = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  function Va(a, b, c) {
    a = Qa(a, b);
    a = Ua.exec(Pa(a).toString());
    b = a[3] || '';
    return Ta(a[1] + Wa('?', a[2] || '', c) + Wa('#', b, void 0));
  }
  var Oa = {};
  function Ta(a) {
    if (void 0 === Ma) {
      var b = null;
      var c = w.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy('goog#html', { createHTML: Ca, createScript: Ca, createScriptURL: Ca });
        } catch (d) {
          w.console && w.console.error(d.message);
        }
        Ma = b;
      } else Ma = b;
    }
    a = (b = Ma) ? b.createScriptURL(a) : a;
    return new K(Na, a);
  }
  function Wa(a, b, c) {
    if (null == c) return b;
    if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b += (b.length > a.length ? '&' : '') + encodeURIComponent(d) + '=' + encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  var Na = {};
  var Xa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function Ya(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var L;
  a: {
    var Za = w.navigator;
    if (Za) {
      var $a = Za.userAgent;
      if ($a) {
        L = $a;
        break a;
      }
    }
    L = '';
  }
  function M(a) {
    return -1 != L.indexOf(a);
  }
  function ab(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  var bb = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
  function cb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < bb.length; f++) (c = bb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function db(a, b) {
    a.src = Pa(b);
    (b = a.ownerDocument && a.ownerDocument.defaultView) && b != w
      ? (b = va(b.document))
      : (null === ua && (ua = va(w.document)), (b = ua));
    b && a.setAttribute('nonce', b);
  }
  function eb(a) {
    var b = fb;
    return Object.prototype.hasOwnProperty.call(b, 11) ? b[11] : (b[11] = a(11));
  }
  var gb = M('Opera'),
    hb = M('Trident') || M('MSIE'),
    ib = M('Edge'),
    jb =
      M('Gecko') &&
      !(-1 != L.toLowerCase().indexOf('webkit') && !M('Edge')) &&
      !(M('Trident') || M('MSIE')) &&
      !M('Edge'),
    kb = -1 != L.toLowerCase().indexOf('webkit') && !M('Edge'),
    lb;
  a: {
    var mb = '',
      nb = (function () {
        var a = L;
        if (jb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (ib) return /Edge\/([\d\.]+)/.exec(a);
        if (hb) return /\b(?:MSIE|rv)[:]([^\);]+)(\)|;)/.exec(a);
        if (kb) return /WebKit\/(\S+)/.exec(a);
        if (gb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    nb && (mb = nb ? nb[1] : '');
    if (hb) {
      var ob,
        pb = w.document;
      ob = pb ? pb.documentMode : void 0;
      if (null != ob && ob > parseFloat(mb)) {
        lb = String(ob);
        break a;
      }
    }
    lb = mb;
  }
  var qb = lb,
    fb = {};
  function rb() {
    return eb(function () {
      for (
        var a = 0, b = Xa(String(qb)).split('.'), c = Xa('11').split('.'), d = Math.max(b.length, c.length), e = 0;
        0 == a && e < d;
        e++
      ) {
        var f = b[e] || '',
          g = c[e] || '';
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
          g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
          if (0 == f[0].length && 0 == g[0].length) break;
          a =
            Ya(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
            Ya(0 == f[2].length, 0 == g[2].length) ||
            Ya(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == a);
      }
      return 0 <= a;
    });
  }
  function sb(a, b) {
    ab(b, function (c, d) {
      c && 'object' == typeof c && c.O && (c = c.M());
      'style' == d
        ? (a.style.cssText = c)
        : 'class' == d
        ? (a.className = c)
        : 'for' == d
        ? (a.htmlFor = c)
        : tb.hasOwnProperty(d)
        ? a.setAttribute(tb[d], c)
        : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var tb = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width',
  };
  function ub(a) {
    var b = document;
    a = String(a);
    'application/xhtml+xml' === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  }
  function vb(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null;
  }
  vb.prototype.get = function () {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else a = this.c();
    return a;
  };
  function wb(a, b) {
    a.g(b);
    100 > a.b && (a.b++, (b.next = a.a), (a.a = b));
  }
  function xb(a) {
    w.setTimeout(function () {
      throw a;
    }, 0);
  }
  var yb;
  function zb() {
    var a = w.MessageChannel;
    'undefined' === typeof a &&
      'undefined' !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !M('Presto') &&
      (a = function () {
        var e = ub('IFRAME');
        e.style.display = 'none';
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = 'callImmediate' + Math.random(),
          h = 'file:' == f.location.protocol ? '*' : f.location.protocol + '//' + f.location.host;
        e = C(function (k) {
          if (('*' == h || k.origin == h) && k.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener('message', e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          },
        };
      });
    if ('undefined' !== typeof a && !M('Trident') && !M('MSIE')) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.L;
          c.L = null;
          e();
        }
      };
      return function (e) {
        d.next = { L: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      w.setTimeout(e, 0);
    };
  }
  function Ab() {
    this.b = this.a = null;
  }
  var Cb = new vb(
    function () {
      return new Bb();
    },
    function (a) {
      a.reset();
    }
  );
  Ab.prototype.add = function (a, b) {
    var c = Cb.get();
    c.set(a, b);
    this.b ? (this.b.next = c) : (this.a = c);
    this.b = c;
  };
  function Db() {
    var a = Eb,
      b = null;
    a.a && ((b = a.a), (a.a = a.a.next), a.a || (a.b = null), (b.next = null));
    return b;
  }
  function Bb() {
    this.next = this.b = this.a = null;
  }
  Bb.prototype.set = function (a, b) {
    this.a = a;
    this.b = b;
    this.next = null;
  };
  Bb.prototype.reset = function () {
    this.next = this.b = this.a = null;
  };
  function Fb(a, b) {
    Gb || Hb();
    Ib || (Gb(), (Ib = !0));
    Eb.add(a, b);
  }
  var Gb;
  function Hb() {
    if (w.Promise && w.Promise.resolve) {
      var a = w.Promise.resolve(void 0);
      Gb = function () {
        a.then(Jb);
      };
    } else
      Gb = function () {
        var b = Jb;
        !B(w.setImmediate) ||
        (w.Window && w.Window.prototype && !M('Edge') && w.Window.prototype.setImmediate == w.setImmediate)
          ? (yb || (yb = zb()), yb(b))
          : w.setImmediate(b);
      };
  }
  var Ib = !1,
    Eb = new Ab();
  function Jb() {
    for (var a; (a = Db()); ) {
      try {
        a.a.call(a.b);
      } catch (b) {
        xb(b);
      }
      wb(Cb, a);
    }
    Ib = !1;
  }
  function Kb(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }
  function N(a) {
    this.a = 0;
    this.j = void 0;
    this.g = this.b = this.c = null;
    this.h = this.i = !1;
    if (a != z)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            O(b, 2, c);
          },
          function (c) {
            O(b, 3, c);
          }
        );
      } catch (c) {
        O(this, 3, c);
      }
  }
  function Lb() {
    this.next = this.c = this.b = this.g = this.a = null;
    this.h = !1;
  }
  Lb.prototype.reset = function () {
    this.c = this.b = this.g = this.a = null;
    this.h = !1;
  };
  var Mb = new vb(
    function () {
      return new Lb();
    },
    function (a) {
      a.reset();
    }
  );
  function Nb(a, b, c) {
    var d = Mb.get();
    d.g = a;
    d.b = b;
    d.c = c;
    return d;
  }
  N.prototype.then = function (a, b, c) {
    return Ob(this, B(a) ? a : null, B(b) ? b : null, c);
  };
  N.prototype.$goog_Thenable = !0;
  N.prototype.cancel = function (a) {
    if (0 == this.a) {
      var b = new P(a);
      Fb(function () {
        Pb(this, b);
      }, this);
    }
  };
  function Pb(a, b) {
    if (0 == a.a)
      if (a.c) {
        var c = a.c;
        if (c.b) {
          for (
            var d = 0, e = null, f = null, g = c.b;
            g && (g.h || (d++, g.a == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.a && 1 == d
              ? Pb(c, b)
              : (f ? ((d = f), d.next == c.g && (c.g = d), (d.next = d.next.next)) : Qb(c), Rb(c, e, 3, b)));
        }
        a.c = null;
      } else O(a, 3, b);
  }
  function Sb(a, b) {
    a.b || (2 != a.a && 3 != a.a) || Tb(a);
    a.g ? (a.g.next = b) : (a.b = b);
    a.g = b;
  }
  function Ob(a, b, c, d) {
    var e = Nb(null, null, null);
    e.a = new N(function (f, g) {
      e.g = b
        ? function (h) {
            try {
              var k = b.call(d, h);
              f(k);
            } catch (m) {
              g(m);
            }
          }
        : f;
      e.b = c
        ? function (h) {
            try {
              var k = c.call(d, h);
              void 0 === k && h instanceof P ? g(h) : f(k);
            } catch (m) {
              g(m);
            }
          }
        : g;
    });
    e.a.c = a;
    Sb(a, e);
    return e.a;
  }
  N.prototype.A = function (a) {
    this.a = 0;
    O(this, 2, a);
  };
  N.prototype.B = function (a) {
    this.a = 0;
    O(this, 3, a);
  };
  function O(a, b, c) {
    if (0 == a.a) {
      a === c && ((b = 3), (c = new TypeError('Promise cannot resolve to itself')));
      a.a = 1;
      a: {
        var d = c,
          e = a.A,
          f = a.B;
        if (d instanceof N) {
          Sb(d, Nb(e || z, f || null, a));
          var g = !0;
        } else if (Kb(d)) d.then(e, f, a), (g = !0);
        else {
          if (za(d))
            try {
              var h = d.then;
              if (B(h)) {
                Ub(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (k) {
              f.call(a, k);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
      g || ((a.j = c), (a.a = b), (a.c = null), Tb(a), 3 != b || c instanceof P || Vb(a, c));
    }
  }
  function Ub(a, b, c, d, e) {
    function f(k) {
      h || ((h = !0), d.call(e, k));
    }
    function g(k) {
      h || ((h = !0), c.call(e, k));
    }
    var h = !1;
    try {
      b.call(a, g, f);
    } catch (k) {
      f(k);
    }
  }
  function Tb(a) {
    a.i || ((a.i = !0), Fb(a.m, a));
  }
  function Qb(a) {
    var b = null;
    a.b && ((b = a.b), (a.b = b.next), (b.next = null));
    a.b || (a.g = null);
    return b;
  }
  N.prototype.m = function () {
    for (var a; (a = Qb(this)); ) Rb(this, a, this.a, this.j);
    this.i = !1;
  };
  function Rb(a, b, c, d) {
    if (3 == c && b.b && !b.h) for (; a && a.h; a = a.c) a.h = !1;
    if (b.a) (b.a.c = null), Wb(b, c, d);
    else
      try {
        b.h ? b.g.call(b.c) : Wb(b, c, d);
      } catch (e) {
        Xb.call(null, e);
      }
    wb(Mb, b);
  }
  function Wb(a, b, c) {
    2 == b ? a.g.call(a.c, c) : a.b && a.b.call(a.c, c);
  }
  function Vb(a, b) {
    a.h = !0;
    Fb(function () {
      a.h && Xb.call(null, b);
    });
  }
  var Xb = xb;
  function P(a) {
    F.call(this, a);
  }
  E(P, F);
  P.prototype.name = 'cancel';
  function Q(a, b) {
    this.h = [];
    this.F = a;
    this.H = b || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.A = this.U = this.j = !1;
    this.i = 0;
    this.b = null;
    this.m = 0;
  }
  Q.prototype.cancel = function (a) {
    if (this.a) this.c instanceof Q && this.c.cancel();
    else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.m--, 0 >= b.m && b.cancel());
      }
      this.F ? this.F.call(this.H, this) : (this.A = !0);
      this.a || ((a = new Yb(this)), Zb(this), R(this, !1, a));
    }
  };
  Q.prototype.B = function (a, b) {
    this.j = !1;
    R(this, a, b);
  };
  function R(a, b, c) {
    a.a = !0;
    a.c = c;
    a.g = !b;
    $b(a);
  }
  function Zb(a) {
    if (a.a) {
      if (!a.A) throw new ac(a);
      a.A = !1;
    }
  }
  function bc(a, b, c, d) {
    a.h.push([b, c, d]);
    a.a && $b(a);
    return a;
  }
  Q.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new N(function (g, h) {
        d = g;
        e = h;
      });
    bc(this, d, function (g) {
      g instanceof Yb ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };
  Q.prototype.$goog_Thenable = !0;
  function cc(a) {
    return Ia(a.h, function (b) {
      return B(b[1]);
    });
  }
  function $b(a) {
    if (a.i && a.a && cc(a)) {
      var b = a.i,
        c = dc[b];
      c && (w.clearTimeout(c.a), delete dc[b]);
      a.i = 0;
    }
    a.b && (a.b.m--, delete a.b);
    b = a.c;
    for (var d = (c = !1); a.h.length && !a.j; ) {
      var e = a.h.shift(),
        f = e[0],
        g = e[1];
      e = e[2];
      if ((f = a.g ? g : f))
        try {
          var h = f.call(e || a.H, b);
          void 0 !== h && ((a.g = a.g && (h == b || h instanceof Error)), (a.c = b = h));
          if (Kb(b) || ('function' === typeof w.Promise && b instanceof w.Promise)) (d = !0), (a.j = !0);
        } catch (k) {
          (b = k), (a.g = !0), cc(a) || (c = !0);
        }
    }
    a.c = b;
    d && ((h = C(a.B, a, !0)), (d = C(a.B, a, !1)), b instanceof Q ? (bc(b, h, d), (b.U = !0)) : b.then(h, d));
    c && ((b = new ec(b)), (dc[b.a] = b), (a.i = b.a));
  }
  function fc() {
    var a = new Q();
    Zb(a);
    R(a, !0, null);
    return a;
  }
  function ac() {
    F.call(this);
  }
  E(ac, F);
  ac.prototype.message = 'Deferred has already fired';
  ac.prototype.name = 'AlreadyCalledError';
  function Yb() {
    F.call(this);
  }
  E(Yb, F);
  Yb.prototype.message = 'Deferred was canceled';
  Yb.prototype.name = 'CanceledError';
  function ec(a) {
    this.a = w.setTimeout(C(this.c, this), 0);
    this.b = a;
  }
  ec.prototype.c = function () {
    delete dc[this.a];
    throw this.b;
  };
  var dc = {};
  var gc,
    hc = [];
  function ic(a, b) {
    function c() {
      var e = a.shift();
      e = jc(e, b);
      a.length && bc(e, c, c, void 0);
      return e;
    }
    if (!a.length) return fc();
    var d = hc.length;
    La(hc, a);
    if (d) return gc;
    a = hc;
    return (gc = c());
  }
  function jc(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = Pa(a).toString(),
      e = ub('SCRIPT'),
      f = { P: e, S: void 0 },
      g = new Q(kc, f),
      h = null,
      k = null != c.timeout ? c.timeout : 5e3;
    0 < k &&
      ((h = window.setTimeout(function () {
        lc(e, !0);
        var m = new mc(1, 'Timeout reached for loading script ' + d);
        Zb(g);
        R(g, !1, m);
      }, k)),
      (f.S = h));
    e.onload = e.onreadystatechange = function () {
      (e.readyState && 'loaded' != e.readyState && 'complete' != e.readyState) ||
        (lc(e, c.la || !1, h), Zb(g), R(g, !0, null));
    };
    e.onerror = function () {
      lc(e, !0, h);
      var m = new mc(0, 'Error while loading script ' + d);
      Zb(g);
      R(g, !1, m);
    };
    f = c.attributes || {};
    cb(f, { type: 'text/javascript', charset: 'UTF-8' });
    sb(e, f);
    db(e, a);
    nc(b).appendChild(e);
    return g;
  }
  function nc(a) {
    var b;
    return (b = (a || document).getElementsByTagName('HEAD')) && 0 != b.length ? b[0] : a.documentElement;
  }
  function kc() {
    if (this && this.P) {
      var a = this.P;
      a && 'SCRIPT' == a.tagName && lc(a, !0, this.S);
    }
  }
  function lc(a, b, c) {
    null != c && w.clearTimeout(c);
    a.onload = z;
    a.onerror = z;
    a.onreadystatechange = z;
    b &&
      window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
  }
  function mc(a, b) {
    var c = 'Jsloader error (code #' + a + ')';
    b && (c += ':' + b);
    F.call(this, c);
    this.code = a;
  }
  E(mc, F);
  J.f.o = {};
  var oc = jc,
    qc = pc;
  function rc(a) {
    return Va(a.format, a.K, a.ea || {});
  }
  function pc(a, b, c) {
    c = c || {};
    a = Va(a, b, c);
    var d = oc(a, { timeout: 3e4, attributes: { async: !1, defer: !1 } });
    return new Promise(function (e) {
      bc(d, e, null, void 0);
    });
  }
  J.f.o.Ca = function (a) {
    pc = a;
  };
  J.f.o.Fa = function (a) {
    oc = a;
  };
  J.f.o.Z = rc;
  J.f.o.load = qc;
  J.f.o.ua = function (a) {
    a = Ha(a, rc);
    if (0 == a.length) return Promise.resolve();
    var b = { timeout: 3e4, attributes: { async: !1, defer: !1 } },
      c = [];
    !hb || rb()
      ? Ga(a, function (d) {
          c.push(oc(d, b));
        })
      : c.push(ic(a, b));
    return Promise.all(
      Ha(c, function (d) {
        return new Promise(function (e) {
          return bc(d, e, null, void 0);
        });
      })
    );
  };
  J.f.o.wa = function (a, b, c) {
    return { format: a, K: b, ea: c };
  };
  J.f.v = {};
  var S = {};
  J.f.v.oa = function (a) {
    return S[a] && S[a].loaded;
  };
  J.f.v.pa = function (a) {
    return S[a] && S[a].ga;
  };
  J.f.v.aa = function () {
    return new Promise(function (a) {
      'undefined' == typeof window || 'complete' === document.readyState
        ? a()
        : window.addEventListener
        ? (document.addEventListener('DOMContentLoaded', a, !0), window.addEventListener('load', a, !0))
        : window.attachEvent
        ? window.attachEvent('onload', a)
        : 'function' !== typeof window.onload
        ? (window.onload = a)
        : (window.onload = function (b) {
            window.onload(b);
            a();
          });
    });
  };
  J.f.v.va = S;
  J.f.v.Ba = function () {
    S = {};
  };
  J.f.v.Da = function (a) {
    S[a] || (S[a] = { loaded: !1 });
    S[a].loaded = !0;
  };
  J.f.v.Ea = function (a, b) {
    S[a] = { ga: b, loaded: !1 };
  };
  J.f.J = {
    1: '1.0',
    '1.0': 'current',
    1.1: 'upcoming',
    1.2: 'testing',
    41: 'pre-45',
    42: 'pre-45',
    43: 'pre-45',
    44: 'pre-45',
    46: '46.1',
    46.1: '46.2',
    48: '48.1',
    current: '49',
    upcoming: '49',
    testing: '49',
  };
  function sc(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof sc) for (c = a.C(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  l = sc.prototype;
  l.D = function () {
    tc(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a;
  };
  l.C = function () {
    tc(this);
    return this.a.concat();
  };
  function tc(a) {
    if (a.c != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length; ) {
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) {
      var e = {};
      for (c = b = 0; b < a.a.length; ) (d = a.a[b]), T(e, d) || ((a.a[c++] = d), (e[d] = 1)), b++;
      a.a.length = c;
    }
  }
  l.get = function (a, b) {
    return T(this.b, a) ? this.b[a] : b;
  };
  l.set = function (a, b) {
    T(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.C(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  function T(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var uc =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function vc(a, b) {
    if (a) {
      a = a.split('&');
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf('='),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '');
      }
    }
  }
  function wc(a) {
    this.a = this.j = this.g = '';
    this.m = null;
    this.h = this.b = '';
    this.i = !1;
    var b;
    a instanceof wc
      ? ((this.i = a.i),
        xc(this, a.g),
        (this.j = a.j),
        (this.a = a.a),
        yc(this, a.m),
        (this.b = a.b),
        zc(this, Ac(a.c)),
        (this.h = a.h))
      : a && (b = String(a).match(uc))
      ? ((this.i = !1),
        xc(this, b[1] || '', !0),
        (this.j = Bc(b[2] || '')),
        (this.a = Bc(b[3] || '', !0)),
        yc(this, b[4]),
        (this.b = Bc(b[5] || '', !0)),
        zc(this, b[6] || '', !0),
        (this.h = Bc(b[7] || '')))
      : ((this.i = !1), (this.c = new U(null, this.i)));
  }
  wc.prototype.toString = function () {
    var a = [],
      b = this.g;
    b && a.push(Cc(b, Dc, !0), ':');
    var c = this.a;
    if (c || 'file' == b)
      a.push('//'),
        (b = this.j) && a.push(Cc(b, Dc, !0), '@'),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        (c = this.m),
        null != c && a.push(':', String(c));
    if ((c = this.b)) this.a && '/' != c.charAt(0) && a.push('/'), a.push(Cc(c, '/' == c.charAt(0) ? Ec : Fc, !0));
    (c = this.c.toString()) && a.push('?', c);
    (c = this.h) && a.push('#', Cc(c, Gc));
    return a.join('');
  };
  wc.prototype.resolve = function (a) {
    var b = new wc(this),
      c = !!a.g;
    c ? xc(b, a.g) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.a);
    c ? (b.a = a.a) : (c = null != a.m);
    var d = a.b;
    if (c) yc(b, a.m);
    else if ((c = !!a.b)) {
      if ('/' != d.charAt(0))
        if (this.a && !this.b) d = '/' + d;
        else {
          var e = b.b.lastIndexOf('/');
          -1 != e && (d = b.b.substr(0, e + 1) + d);
        }
      e = d;
      if ('..' == e || '.' == e) d = '';
      else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
        d = 0 == e.lastIndexOf('/', 0);
        e = e.split('/');
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          '.' == h
            ? d && g == e.length && f.push('')
            : '..' == h
            ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(), d && g == e.length && f.push(''))
            : (f.push(h), (d = !0));
        }
        d = f.join('/');
      } else d = e;
    }
    c ? (b.b = d) : (c = '' !== a.c.toString());
    c ? zc(b, Ac(a.c)) : (c = !!a.h);
    c && (b.h = a.h);
    return b;
  };
  function xc(a, b, c) {
    a.g = c ? Bc(b, !0) : b;
    a.g && (a.g = a.g.replace(/:$/, ''));
  }
  function yc(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
      a.m = b;
    } else a.m = null;
  }
  function zc(a, b, c) {
    b instanceof U ? ((a.c = b), Hc(a.c, a.i)) : (c || (b = Cc(b, Ic)), (a.c = new U(b, a.i)));
  }
  function Bc(a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, '%2525')) : decodeURIComponent(a)) : '';
  }
  function Cc(a, b, c) {
    return 'string' === typeof a
      ? ((a = encodeURI(a).replace(b, Jc)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), a)
      : null;
  }
  function Jc(a) {
    a = a.charCodeAt(0);
    return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var Dc = /[#\/\?@]/g,
    Fc = /[#\?:]/g,
    Ec = /[#\?]/g,
    Ic = /[#\?@]/g,
    Gc = /#/g;
  function U(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.g = !!b;
  }
  function V(a) {
    a.a ||
      ((a.a = new sc()),
      (a.b = 0),
      a.c &&
        vc(a.c, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
        }));
  }
  l = U.prototype;
  l.add = function (a, b) {
    V(this);
    this.c = null;
    a = W(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, (c = []));
    c.push(b);
    this.b += 1;
    return this;
  };
  function Kc(a, b) {
    V(a);
    b = W(a, b);
    T(a.a.b, b) &&
      ((a.c = null),
      (a.b -= a.a.get(b).length),
      (a = a.a),
      T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && tc(a)));
  }
  function Lc(a, b) {
    V(a);
    b = W(a, b);
    return T(a.a.b, b);
  }
  l.forEach = function (a, b) {
    V(this);
    this.a.forEach(function (c, d) {
      Ga(
        c,
        function (e) {
          a.call(b, e, d, this);
        },
        this
      );
    }, this);
  };
  l.C = function () {
    V(this);
    for (var a = this.a.D(), b = this.a.C(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.D = function (a) {
    V(this);
    var b = [];
    if ('string' === typeof a) Lc(this, a) && (b = Ja(b, this.a.get(W(this, a))));
    else {
      a = this.a.D();
      for (var c = 0; c < a.length; c++) b = Ja(b, a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    V(this);
    this.c = null;
    a = W(this, a);
    Lc(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.D(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return '';
    for (var a = [], b = this.a.C(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.D(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.c = a.join('&'));
  };
  function Ac(a) {
    var b = new U();
    b.c = a.c;
    a.a && ((b.a = new sc(a.a)), (b.b = a.b));
    return b;
  }
  function W(a, b) {
    b = String(b);
    a.g && (b = b.toLowerCase());
    return b;
  }
  function Hc(a, b) {
    b &&
      !a.g &&
      (V(a),
      (a.c = null),
      a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e &&
          (Kc(this, d),
          Kc(this, e),
          0 < c.length && ((this.c = null), this.a.set(W(this, e), Ka(c)), (this.b += c.length)));
      }, a));
    a.g = b;
  }
  J.f.u = {};
  var X = '',
    Y = '',
    Mc,
    Z,
    Nc = null,
    Oc;
  function Pc() {
    Y = X = '';
    Nc = Z = Mc = null;
    y('google.load') || (D('google.load', Qc), D('google.setOnLoadCallback', J.R));
    var a = document.getElementsByTagName('script');
    a = (document.currentScript || a[a.length - 1]).getAttribute('src');
    a = new wc(a);
    var b = a.a;
    Oc = b = b.match(/^www\.gstatic\.cn/) ? 'gstatic.cn' : 'gstatic.com';
    Rc(a);
  }
  function Rc(a) {
    a = new U(a.c.toString());
    var b = a.get('callback');
    'string' === typeof b && ((b = Sc(b)), J.f.v.aa().then(b));
    a = a.get('autoload');
    if ('string' === typeof a)
      try {
        if ('' !== a) {
          var c = JSON.parse(a).modules;
          for (a = 0; a < c.length; a++) {
            var d = c[a];
            Qc(d.name, d.version, d);
          }
        }
      } catch (e) {
        throw Error('Autoload failed with:' + e);
      }
  }
  function Tc(a) {
    var b = a,
      c,
      d = a.match(/^testing-/);
    d && (b = b.replace(/^testing-/, ''));
    a = b;
    do {
      if (b === J.f.J[b]) throw Error('Infinite loop in version mapping:' + b);
      (c = J.f.J[b]) && (b = c);
    } while (c);
    c = (d ? 'testing-' : '') + b;
    return { version: 'pre-45' == b ? a : c, ba: c };
  }
  function Uc(a) {
    var b = J.f.I.ha[Oc].loader,
      c = Tc(a);
    return J.f.o.load(b, { version: c.ba }).then(function () {
      var d =
        y('google.charts.loader.VersionSpecific.load') ||
        y('google.charts.loader.publicLoad') ||
        y('google.charts.versionSpecific.load');
      if (!d) throw Error('Bad version:' + a);
      Nc = function (e) {
        e = d(c.version, e);
        if (null == e || null == e.then) {
          var f =
            y('google.charts.loader.publicSetOnLoadCallback') || y('google.charts.versionSpecific.setOnLoadCallback');
          e = new Promise(function (g) {
            f(g);
          });
          e.then = f;
        }
        return e;
      };
    });
  }
  function Vc(a) {
    'string' === typeof a && (a = [a]);
    (Array.isArray(a) && 0 !== a.length) || (a = J.f.I.Y);
    var b = [];
    a.forEach(function (c) {
      c = c.toLowerCase();
      b = b.concat(c.split(/[\s,]+\s*/));
    });
    return b;
  }
  function Wc(a) {
    a = a || '';
    for (var b = a.replace(/-/g, '_').toLowerCase(); 'string' === typeof b; )
      (a = b), (b = J.f.W[b]), b === a && (b = !1);
    b || (a.match(/_[^_]+$/) ? ((a = a.replace(/_[^_]+$/, '')), (a = Wc(a))) : (a = 'en'));
    return a;
  }
  function Xc(a) {
    a = a || '';
    '' !== X &&
      X !== a &&
      (console.warn(
        " Attempting to load version '" +
          a +
          "' of Google Charts,but the previously loaded '" +
          (X + "' will be used instead.")
      ),
      (a = X));
    return (X = a || '');
  }
  function Yc(a) {
    a = a || '';
    '' !== Y &&
      Y !== a &&
      (console.warn(
        " Attempting to load Google Charts for language '" +
          a +
          "',but the previously loaded '" +
          (Y + "' will be used instead.")
      ),
      (a = Y));
    'en' === a && (a = '');
    return (Y = a || '');
  }
  function Zc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  function $c(a, b) {
    b = Zc(b);
    b.domain = Oc;
    b.callback = Sc(b.callback);
    a = Xc(a);
    var c = b.language;
    c = Yc(Wc(c));
    b.language = c;
    if (!Mc) {
      if (b.enableUrlSettings && window.URLSearchParams)
        try {
          a = new URLSearchParams(top.location.search).get('charts-version') || a;
        } catch (d) {
          console.info('Failed to get charts-version from top URL', d);
        }
      Mc = Uc(a);
    }
    b.packages = Vc(b.packages);
    return (Z = Mc.then(function () {
      return Nc(b);
    }));
  }
  J.ia = function (a) {
    return J.load(Object.assign({}, a, { safeMode: !0 }));
  };
  D('google.charts.safeLoad', J.ia);
  J.load = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    c = 0;
    'visualization' === b[c] && c++;
    var d = 'current';
    if ('string' === typeof b[c] || 'number' === typeof b[c]) (d = String(b[c])), c++;
    var e = {};
    za(b[c]) && (e = b[c]);
    return $c(d, e);
  };
  D('google.charts.load', J.load);
  J.R = function (a) {
    if (!Z) throw Error('Must call google.charts.load before google.charts.setOnLoadCallback');
    return a ? Z.then(a) : Z;
  };
  D('google.charts.setOnLoadCallback', J.R);
  var ad = H('https://maps.googleapis.com/maps/api/js?jsapiRedirect=true'),
    bd = H('https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi');
  function cd(a, b, c) {
    console.warn('Loading Maps API with the jsapi loader is deprecated.');
    c = c || {};
    a = c.key || c.client;
    var d = c.libraries,
      e = (function (h) {
        for (var k = {}, m = 0; m < h.length; m++) {
          var p = h[m];
          k[p[0]] = p[1];
        }
        return k;
      })(
        c.other_params
          ? c.other_params.split('&').map(function (h) {
              return h.split('=');
            })
          : []
      ),
      f = Object.assign({}, { key: a, sa: d }, e),
      g = '2' === b ? bd : ad;
    Z = new Promise(function (h) {
      var k = Sc(c && c.callback);
      J.f.o.load(g, {}, f).then(k).then(h);
    });
  }
  var dd = H('https://www.gstatic.com/inputtools/js/ita/inputtools_3.js');
  function ed(a, b, c) {
    za(c) && c.packages
      ? (Array.isArray(c.packages) ? c.packages : [c.packages]).includes('inputtools')
        ? (console.warn('Loading "elements" with the jsapi loader is deprecated.\nPlease load ' + (dd + ' directly.')),
          (Z = new Promise(function (d) {
            var e = Sc(c && c.callback);
            J.f.o.load(dd, {}, {}).then(e).then(d);
          })))
        : console.error('Loading "elements" other than "inputtools" is unsupported.')
      : console.error('google.load of elements was invoked without specifying packages');
  }
  var fd = H('https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}');
  function gd(a, b) {
    var c;
    do {
      if (a === b[a]) throw Error('Infinite loop in version mapping for version ' + a);
      (c = b[a]) && (a = c);
    } while (c);
    return a;
  }
  function hd(a, b, c) {
    var d = J.f.V.$[a];
    if (d) {
      b = gd(b, d.aliases);
      d = d.versions[b];
      if (!d) throw Error('Unknown version,' + b + ',of ' + a + '.');
      var e = { module: a, version: b || '', file: d.compressed };
      b = Pa(J.f.o.Z({ format: fd, K: e })).toString();
      console.warn(
        'Loading modules with the jsapi loader is deprecated.\nPlease load ' + (a + ' directly from ' + b + '.')
      );
      Z = new Promise(function (f) {
        var g = Sc(c && c.callback);
        J.f.o.load(fd, e).then(g).then(f);
      });
    } else
      setTimeout(function () {
        throw Error('Module "' + a + '" is not supported.');
      }, 0);
  }
  function Sc(a) {
    return function () {
      if ('function' === typeof a) a();
      else if ('string' === typeof a && '' !== a)
        try {
          var b = y(a);
          if ('function' !== typeof b) throw Error("Type of '" + a + "' is " + typeof b + '.');
          b();
        } catch (c) {
          throw Error('Callback of ' + a + ' failed with:' + c);
        }
    };
  }
  function Qc(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    switch (b[0]) {
      case 'maps':
        cd.apply(null, ba(b));
        break;
      case 'elements':
        ed.apply(null, ba(b));
        break;
      case 'visualization':
        J.load.apply(J, ba(b));
        break;
      default:
        hd.apply(null, ba(b));
    }
  }
  D('google.loader.LoadFailure', !1);
  Oc ? console.warn('Google Charts loader.js should only be loaded once.') : Pc();
  J.f.u.ra = Pc;
  J.f.u.xa = Tc;
  J.f.u.ya = Wc;
  J.f.u.za = Vc;
  J.f.u.Ja = Xc;
  J.f.u.Ia = Yc;
  J.f.u.Aa = Rc;
  J.f.u.qa = function () {
    return Nc;
  };
}).call(this);
$(function () {
  var $HOW = $('#HOW-ABOUT-THIS').on('mouseenter mouseleave', function (e) {
      $HOW.hovered = e.type === 'mouseenter';
    }),
    $Wrapper = $HOW.find('div.iwrapper'),
    $Items = $HOW.find('ul.items'),
    $Nav = $HOW.find('a.nav'),
    maxrows = $Items.length,
    idx = 0;
  $Wrapper.width(100 * maxrows + '%');
  $Items.width(100 / maxrows + '%');
  $Nav
    .on('click', function () {
      var $OO = $(this);
      if ($OO.hasClass('nav-freeze')) {
      } else if ($OO.hasClass('nav-prev')) {
        $Nav.triggerHandler('move', 'prev');
      } else if ($OO.hasClass('nav-next')) {
        $Nav.triggerHandler('move', 'next');
      }
      return false;
    })
    .on('move', function (e, dr) {
      $Nav.removeClass('nav-freeze');
      if (dr === 'prev') {
        idx = idx <= 0 ? 0 : idx - 1;
        idx === 0 && $Nav.filter('.nav-prev').addClass('nav-freeze');
      } else if (dr === 'next') {
        idx = idx >= maxrows - 1 ? maxrows - 1 : idx + 1;
        idx === maxrows - 1 && $Nav.filter('.nav-next').addClass('nav-freeze');
      }
      $Wrapper.css('left', -$Items.eq(idx).position().left);
    });
  window.setInterval(function () {
    if (!!$HOW.hovered) {
      return;
    }
    if (!$Nav.filter('.nav-next').hasClass('nav-freeze')) {
      $Nav.triggerHandler('move', 'next');
    } else {
      idx = 0;
      $Nav.triggerHandler('move', 'prev');
    }
  }, 10000);
});
var CryptoJS =
  CryptoJS ||
  (function (u, p) {
    var d = {},
      l = (d.lib = {}),
      s = function () {},
      t = (l.Base = {
        extend: function (a) {
          s.prototype = this;
          var c = new s();
          a && c.mixIn(a);
          c.hasOwnProperty('init') ||
            (c.init = function () {
              c.$super.init.apply(this, arguments);
            });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create: function () {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function () {},
        mixIn: function (a) {
          for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
          a.hasOwnProperty('toString') && (this.toString = a.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      }),
      r = (l.WordArray = t.extend({
        init: function (a, c) {
          a = this.words = a || [];
          this.sigBytes = c != p ? c : 4 * a.length;
        },
        toString: function (a) {
          return (a || v).stringify(this);
        },
        concat: function (a) {
          var c = this.words,
            e = a.words,
            j = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (j % 4)
            for (var k = 0; k < a; k++)
              c[(j + k) >>> 2] |= ((e[k >>> 2] >>> (24 - 8 * (k % 4))) & 255) << (24 - 8 * ((j + k) % 4));
          else if (65535 < e.length) for (k = 0; k < a; k += 4) c[(j + k) >>> 2] = e[k >>> 2];
          else c.push.apply(c, e);
          this.sigBytes += a;
          return this;
        },
        clamp: function () {
          var a = this.words,
            c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
          a.length = u.ceil(c / 4);
        },
        clone: function () {
          var a = t.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function (a) {
          for (var c = [], e = 0; e < a; e += 4) c.push((4294967296 * u.random()) | 0);
          return new r.init(c, a);
        },
      })),
      w = (d.enc = {}),
      v = (w.Hex = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) {
            var k = (c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255;
            e.push((k >>> 4).toString(16));
            e.push((k & 15).toString(16));
          }
          return e.join('');
        },
        parse: function (a) {
          for (var c = a.length, e = [], j = 0; j < c; j += 2)
            e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << (24 - 4 * (j % 8));
          return new r.init(e, c / 2);
        },
      }),
      b = (w.Latin1 = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode((c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255));
          return e.join('');
        },
        parse: function (a) {
          for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << (24 - 8 * (j % 4));
          return new r.init(e, c);
        },
      }),
      x = (w.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(b.stringify(a)));
          } catch (c) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function (a) {
          return b.parse(unescape(encodeURIComponent(a)));
        },
      }),
      q = (l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
          this._data = new r.init();
          this._nDataBytes = 0;
        },
        _append: function (a) {
          'string' == typeof a && (a = x.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process: function (a) {
          var c = this._data,
            e = c.words,
            j = c.sigBytes,
            k = this.blockSize,
            b = j / (4 * k),
            b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
          a = b * k;
          j = u.min(4 * a, j);
          if (a) {
            for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);
            q = e.splice(0, a);
            c.sigBytes -= j;
          }
          return new r.init(q, j);
        },
        clone: function () {
          var a = t.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0,
      }));
    l.Hasher = q.extend({
      cfg: t.extend(),
      init: function (a) {
        this.cfg = this.cfg.extend(a);
        this.reset();
      },
      reset: function () {
        q.reset.call(this);
        this._doReset();
      },
      update: function (a) {
        this._append(a);
        this._process();
        return this;
      },
      finalize: function (a) {
        a && this._append(a);
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (a) {
        return function (b, e) {
          return new a.init(e).finalize(b);
        };
      },
      _createHmacHelper: function (a) {
        return function (b, e) {
          return new n.HMAC.init(a, e).finalize(b);
        };
      },
    });
    var n = (d.algo = {});
    return d;
  })(Math);
(function () {
  var u = CryptoJS,
    p = u.lib.WordArray;
  u.enc.Base64 = {
    stringify: function (d) {
      var l = d.words,
        p = d.sigBytes,
        t = this._map;
      d.clamp();
      d = [];
      for (var r = 0; r < p; r += 3)
        for (
          var w =
              (((l[r >>> 2] >>> (24 - 8 * (r % 4))) & 255) << 16) |
              (((l[(r + 1) >>> 2] >>> (24 - 8 * ((r + 1) % 4))) & 255) << 8) |
              ((l[(r + 2) >>> 2] >>> (24 - 8 * ((r + 2) % 4))) & 255),
            v = 0;
          4 > v && r + 0.75 * v < p;
          v++
        )
          d.push(t.charAt((w >>> (6 * (3 - v))) & 63));
      if ((l = t.charAt(64))) for (; d.length % 4; ) d.push(l);
      return d.join('');
    },
    parse: function (d) {
      var l = d.length,
        s = this._map,
        t = s.charAt(64);
      t && ((t = d.indexOf(t)), -1 != t && (l = t));
      for (var t = [], r = 0, w = 0; w < l; w++)
        if (w % 4) {
          var v = s.indexOf(d.charAt(w - 1)) << (2 * (w % 4)),
            b = s.indexOf(d.charAt(w)) >>> (6 - 2 * (w % 4));
          t[r >>> 2] |= (v | b) << (24 - 8 * (r % 4));
          r++;
        }
      return p.create(t, r);
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  };
})();
(function (u) {
  function p(b, n, a, c, e, j, k) {
    b = b + ((n & a) | (~n & c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function d(b, n, a, c, e, j, k) {
    b = b + ((n & c) | (a & ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function l(b, n, a, c, e, j, k) {
    b = b + (n ^ a ^ c) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function s(b, n, a, c, e, j, k) {
    b = b + (a ^ (n | ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
    b[x] = (4294967296 * u.abs(u.sin(x + 1))) | 0;
  r = r.MD5 = v.extend({
    _doReset: function () {
      this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (q, n) {
      for (var a = 0; 16 > a; a++) {
        var c = n + a,
          e = q[c];
        q[c] = (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      }
      var a = this._hash.words,
        c = q[n + 0],
        e = q[n + 1],
        j = q[n + 2],
        k = q[n + 3],
        z = q[n + 4],
        r = q[n + 5],
        t = q[n + 6],
        w = q[n + 7],
        v = q[n + 8],
        A = q[n + 9],
        B = q[n + 10],
        C = q[n + 11],
        u = q[n + 12],
        D = q[n + 13],
        E = q[n + 14],
        x = q[n + 15],
        f = a[0],
        m = a[1],
        g = a[2],
        h = a[3],
        f = p(f, m, g, h, c, 7, b[0]),
        h = p(h, f, m, g, e, 12, b[1]),
        g = p(g, h, f, m, j, 17, b[2]),
        m = p(m, g, h, f, k, 22, b[3]),
        f = p(f, m, g, h, z, 7, b[4]),
        h = p(h, f, m, g, r, 12, b[5]),
        g = p(g, h, f, m, t, 17, b[6]),
        m = p(m, g, h, f, w, 22, b[7]),
        f = p(f, m, g, h, v, 7, b[8]),
        h = p(h, f, m, g, A, 12, b[9]),
        g = p(g, h, f, m, B, 17, b[10]),
        m = p(m, g, h, f, C, 22, b[11]),
        f = p(f, m, g, h, u, 7, b[12]),
        h = p(h, f, m, g, D, 12, b[13]),
        g = p(g, h, f, m, E, 17, b[14]),
        m = p(m, g, h, f, x, 22, b[15]),
        f = d(f, m, g, h, e, 5, b[16]),
        h = d(h, f, m, g, t, 9, b[17]),
        g = d(g, h, f, m, C, 14, b[18]),
        m = d(m, g, h, f, c, 20, b[19]),
        f = d(f, m, g, h, r, 5, b[20]),
        h = d(h, f, m, g, B, 9, b[21]),
        g = d(g, h, f, m, x, 14, b[22]),
        m = d(m, g, h, f, z, 20, b[23]),
        f = d(f, m, g, h, A, 5, b[24]),
        h = d(h, f, m, g, E, 9, b[25]),
        g = d(g, h, f, m, k, 14, b[26]),
        m = d(m, g, h, f, v, 20, b[27]),
        f = d(f, m, g, h, D, 5, b[28]),
        h = d(h, f, m, g, j, 9, b[29]),
        g = d(g, h, f, m, w, 14, b[30]),
        m = d(m, g, h, f, u, 20, b[31]),
        f = l(f, m, g, h, r, 4, b[32]),
        h = l(h, f, m, g, v, 11, b[33]),
        g = l(g, h, f, m, C, 16, b[34]),
        m = l(m, g, h, f, E, 23, b[35]),
        f = l(f, m, g, h, e, 4, b[36]),
        h = l(h, f, m, g, z, 11, b[37]),
        g = l(g, h, f, m, w, 16, b[38]),
        m = l(m, g, h, f, B, 23, b[39]),
        f = l(f, m, g, h, D, 4, b[40]),
        h = l(h, f, m, g, c, 11, b[41]),
        g = l(g, h, f, m, k, 16, b[42]),
        m = l(m, g, h, f, t, 23, b[43]),
        f = l(f, m, g, h, A, 4, b[44]),
        h = l(h, f, m, g, u, 11, b[45]),
        g = l(g, h, f, m, x, 16, b[46]),
        m = l(m, g, h, f, j, 23, b[47]),
        f = s(f, m, g, h, c, 6, b[48]),
        h = s(h, f, m, g, w, 10, b[49]),
        g = s(g, h, f, m, E, 15, b[50]),
        m = s(m, g, h, f, r, 21, b[51]),
        f = s(f, m, g, h, u, 6, b[52]),
        h = s(h, f, m, g, k, 10, b[53]),
        g = s(g, h, f, m, B, 15, b[54]),
        m = s(m, g, h, f, e, 21, b[55]),
        f = s(f, m, g, h, v, 6, b[56]),
        h = s(h, f, m, g, x, 10, b[57]),
        g = s(g, h, f, m, t, 15, b[58]),
        m = s(m, g, h, f, D, 21, b[59]),
        f = s(f, m, g, h, z, 6, b[60]),
        h = s(h, f, m, g, C, 10, b[61]),
        g = s(g, h, f, m, j, 15, b[62]),
        m = s(m, g, h, f, A, 21, b[63]);
      a[0] = (a[0] + f) | 0;
      a[1] = (a[1] + m) | 0;
      a[2] = (a[2] + g) | 0;
      a[3] = (a[3] + h) | 0;
    },
    _doFinalize: function () {
      var b = this._data,
        n = b.words,
        a = 8 * this._nDataBytes,
        c = 8 * b.sigBytes;
      n[c >>> 5] |= 128 << (24 - (c % 32));
      var e = u.floor(a / 4294967296);
      n[(((c + 64) >>> 9) << 4) + 15] = (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      n[(((c + 64) >>> 9) << 4) + 14] = (((a << 8) | (a >>> 24)) & 16711935) | (((a << 24) | (a >>> 8)) & 4278255360);
      b.sigBytes = 4 * (n.length + 1);
      this._process();
      b = this._hash;
      n = b.words;
      for (a = 0; 4 > a; a++)
        (c = n[a]), (n[a] = (((c << 8) | (c >>> 24)) & 16711935) | (((c << 24) | (c >>> 8)) & 4278255360));
      return b;
    },
    clone: function () {
      var b = v.clone.call(this);
      b._hash = this._hash.clone();
      return b;
    },
  });
  t.MD5 = v._createHelper(r);
  t.HmacMD5 = v._createHmacHelper(r);
})(Math);
(function () {
  var u = CryptoJS,
    p = u.lib,
    d = p.Base,
    l = p.WordArray,
    p = u.algo,
    s = (p.EvpKDF = d.extend({
      cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }),
      init: function (d) {
        this.cfg = this.cfg.extend(d);
      },
      compute: function (d, r) {
        for (
          var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations;
          u.length < q;

        ) {
          n && s.update(n);
          var n = s.update(d).finalize(r);
          s.reset();
          for (var a = 1; a < p; a++) (n = s.finalize(n)), s.reset();
          b.concat(n);
        }
        b.sigBytes = 4 * q;
        return b;
      },
    }));
  u.EvpKDF = function (d, l, p) {
    return s.create(p).compute(d, l);
  };
})();
CryptoJS.lib.Cipher ||
  (function (u) {
    var p = CryptoJS,
      d = p.lib,
      l = d.Base,
      s = d.WordArray,
      t = d.BufferedBlockAlgorithm,
      r = p.enc.Base64,
      w = p.algo.EvpKDF,
      v = (d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function (e, a) {
          return this.create(this._ENC_XFORM_MODE, e, a);
        },
        createDecryptor: function (e, a) {
          return this.create(this._DEC_XFORM_MODE, e, a);
        },
        init: function (e, a, b) {
          this.cfg = this.cfg.extend(b);
          this._xformMode = e;
          this._key = a;
          this.reset();
        },
        reset: function () {
          t.reset.call(this);
          this._doReset();
        },
        process: function (e) {
          this._append(e);
          return this._process();
        },
        finalize: function (e) {
          e && this._append(e);
          return this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function (e) {
          return {
            encrypt: function (b, k, d) {
              return ('string' == typeof k ? c : a).encrypt(e, b, k, d);
            },
            decrypt: function (b, k, d) {
              return ('string' == typeof k ? c : a).decrypt(e, b, k, d);
            },
          };
        },
      }));
    d.StreamCipher = v.extend({
      _doFinalize: function () {
        return this._process(!0);
      },
      blockSize: 1,
    });
    var b = (p.mode = {}),
      x = function (e, a, b) {
        var c = this._iv;
        c ? (this._iv = u) : (c = this._prevBlock);
        for (var d = 0; d < b; d++) e[a + d] ^= c[d];
      },
      q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
          return this.Encryptor.create(e, a);
        },
        createDecryptor: function (e, a) {
          return this.Decryptor.create(e, a);
        },
        init: function (e, a) {
          this._cipher = e;
          this._iv = a;
        },
      })).extend();
    q.Encryptor = q.extend({
      processBlock: function (e, a) {
        var b = this._cipher,
          c = b.blockSize;
        x.call(this, e, a, c);
        b.encryptBlock(e, a);
        this._prevBlock = e.slice(a, a + c);
      },
    });
    q.Decryptor = q.extend({
      processBlock: function (e, a) {
        var b = this._cipher,
          c = b.blockSize,
          d = e.slice(a, a + c);
        b.decryptBlock(e, a);
        x.call(this, e, a, c);
        this._prevBlock = d;
      },
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
      pad: function (a, b) {
        for (
          var c = 4 * b, c = c - (a.sigBytes % c), d = (c << 24) | (c << 16) | (c << 8) | c, l = [], n = 0;
          n < c;
          n += 4
        )
          l.push(d);
        c = s.create(l, c);
        a.concat(c);
      },
      unpad: function (a) {
        a.sigBytes -= a.words[(a.sigBytes - 1) >>> 2] & 255;
      },
    };
    d.BlockCipher = v.extend({
      cfg: v.cfg.extend({ mode: b, padding: q }),
      reset: function () {
        v.reset.call(this);
        var a = this.cfg,
          b = a.iv,
          a = a.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
        else (c = a.createDecryptor), (this._minBufferSize = 1);
        this._mode = c.call(a, this, b && b.words);
      },
      _doProcessBlock: function (a, b) {
        this._mode.processBlock(a, b);
      },
      _doFinalize: function () {
        var a = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          a.pad(this._data, this.blockSize);
          var b = this._process(!0);
        } else (b = this._process(!0)), a.unpad(b);
        return b;
      },
      blockSize: 4,
    });
    var n = (d.CipherParams = l.extend({
        init: function (a) {
          this.mixIn(a);
        },
        toString: function (a) {
          return (a || this.formatter).stringify(this);
        },
      })),
      b = ((p.format = {}).OpenSSL = {
        stringify: function (a) {
          var b = a.ciphertext;
          a = a.salt;
          return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
        },
        parse: function (a) {
          a = r.parse(a);
          var b = a.words;
          if (1398893684 == b[0] && 1701076831 == b[1]) {
            var c = s.create(b.slice(2, 4));
            b.splice(0, 4);
            a.sigBytes -= 16;
          }
          return n.create({ ciphertext: a, salt: c });
        },
      }),
      a = (d.SerializableCipher = l.extend({
        cfg: l.extend({ format: b }),
        encrypt: function (a, b, c, d) {
          d = this.cfg.extend(d);
          var l = a.createEncryptor(c, d);
          b = l.finalize(b);
          l = l.cfg;
          return n.create({
            ciphertext: b,
            key: c,
            iv: l.iv,
            algorithm: a,
            mode: l.mode,
            padding: l.padding,
            blockSize: a.blockSize,
            formatter: d.format,
          });
        },
        decrypt: function (a, b, c, d) {
          d = this.cfg.extend(d);
          b = this._parse(b, d.format);
          return a.createDecryptor(c, d).finalize(b.ciphertext);
        },
        _parse: function (a, b) {
          return 'string' == typeof a ? b.parse(a, this) : a;
        },
      })),
      p = ((p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
          d || (d = s.random(8));
          a = w.create({ keySize: b + c }).compute(a, d);
          c = s.create(a.words.slice(b), 4 * c);
          a.sigBytes = 4 * b;
          return n.create({ key: a, iv: c, salt: d });
        },
      }),
      c = (d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({ kdf: p }),
        encrypt: function (b, c, d, l) {
          l = this.cfg.extend(l);
          d = l.kdf.execute(d, b.keySize, b.ivSize);
          l.iv = d.iv;
          b = a.encrypt.call(this, b, c, d.key, l);
          b.mixIn(d);
          return b;
        },
        decrypt: function (b, c, d, l) {
          l = this.cfg.extend(l);
          c = this._parse(c, l.format);
          d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
          l.iv = d.iv;
          return a.decrypt.call(this, b, c, d.key, l);
        },
      }));
  })();
(function () {
  for (
    var u = CryptoJS,
      p = u.lib.BlockCipher,
      d = u.algo,
      l = [],
      s = [],
      t = [],
      r = [],
      w = [],
      v = [],
      b = [],
      x = [],
      q = [],
      n = [],
      a = [],
      c = 0;
    256 > c;
    c++
  )
    a[c] = 128 > c ? c << 1 : (c << 1) ^ 283;
  for (var e = 0, j = 0, c = 0; 256 > c; c++) {
    var k = j ^ (j << 1) ^ (j << 2) ^ (j << 3) ^ (j << 4),
      k = (k >>> 8) ^ (k & 255) ^ 99;
    l[e] = k;
    s[k] = e;
    var z = a[e],
      F = a[z],
      G = a[F],
      y = (257 * a[k]) ^ (16843008 * k);
    t[e] = (y << 24) | (y >>> 8);
    r[e] = (y << 16) | (y >>> 16);
    w[e] = (y << 8) | (y >>> 24);
    v[e] = y;
    y = (16843009 * G) ^ (65537 * F) ^ (257 * z) ^ (16843008 * e);
    b[k] = (y << 24) | (y >>> 8);
    x[k] = (y << 16) | (y >>> 16);
    q[k] = (y << 8) | (y >>> 24);
    n[k] = y;
    e ? ((e = z ^ a[a[a[G ^ z]]]), (j ^= a[a[j]])) : (e = j = 1);
  }
  var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    d = (d.AES = p.extend({
      _doReset: function () {
        for (
          var a = this._key,
            c = a.words,
            d = a.sigBytes / 4,
            a = 4 * ((this._nRounds = d + 6) + 1),
            e = (this._keySchedule = []),
            j = 0;
          j < a;
          j++
        )
          if (j < d) e[j] = c[j];
          else {
            var k = e[j - 1];
            j % d
              ? 6 < d &&
                4 == j % d &&
                (k = (l[k >>> 24] << 24) | (l[(k >>> 16) & 255] << 16) | (l[(k >>> 8) & 255] << 8) | l[k & 255])
              : ((k = (k << 8) | (k >>> 24)),
                (k = (l[k >>> 24] << 24) | (l[(k >>> 16) & 255] << 16) | (l[(k >>> 8) & 255] << 8) | l[k & 255]),
                (k ^= H[(j / d) | 0] << 24));
            e[j] = e[j - d] ^ k;
          }
        c = this._invKeySchedule = [];
        for (d = 0; d < a; d++)
          (j = a - d),
            (k = d % 4 ? e[j] : e[j - 4]),
            (c[d] =
              4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[(k >>> 16) & 255]] ^ q[l[(k >>> 8) & 255]] ^ n[l[k & 255]]);
      },
      encryptBlock: function (a, b) {
        this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
      },
      decryptBlock: function (a, c) {
        var d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
        this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
        d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
      },
      _doCryptBlock: function (a, b, c, d, e, j, l, f) {
        for (
          var m = this._nRounds,
            g = a[b] ^ c[0],
            h = a[b + 1] ^ c[1],
            k = a[b + 2] ^ c[2],
            n = a[b + 3] ^ c[3],
            p = 4,
            r = 1;
          r < m;
          r++
        )
          var q = d[g >>> 24] ^ e[(h >>> 16) & 255] ^ j[(k >>> 8) & 255] ^ l[n & 255] ^ c[p++],
            s = d[h >>> 24] ^ e[(k >>> 16) & 255] ^ j[(n >>> 8) & 255] ^ l[g & 255] ^ c[p++],
            t = d[k >>> 24] ^ e[(n >>> 16) & 255] ^ j[(g >>> 8) & 255] ^ l[h & 255] ^ c[p++],
            n = d[n >>> 24] ^ e[(g >>> 16) & 255] ^ j[(h >>> 8) & 255] ^ l[k & 255] ^ c[p++],
            g = q,
            h = s,
            k = t;
        q = ((f[g >>> 24] << 24) | (f[(h >>> 16) & 255] << 16) | (f[(k >>> 8) & 255] << 8) | f[n & 255]) ^ c[p++];
        s = ((f[h >>> 24] << 24) | (f[(k >>> 16) & 255] << 16) | (f[(n >>> 8) & 255] << 8) | f[g & 255]) ^ c[p++];
        t = ((f[k >>> 24] << 24) | (f[(n >>> 16) & 255] << 16) | (f[(g >>> 8) & 255] << 8) | f[h & 255]) ^ c[p++];
        n = ((f[n >>> 24] << 24) | (f[(g >>> 16) & 255] << 16) | (f[(h >>> 8) & 255] << 8) | f[k & 255]) ^ c[p++];
        a[b] = q;
        a[b + 1] = s;
        a[b + 2] = t;
        a[b + 3] = n;
      },
      keySize: 8,
    }));
  u.AES = p._createHelper(d);
})();
var CryptoJS =
  CryptoJS ||
  (function (h, r) {
    var k = {},
      l = (k.lib = {}),
      n = function () {},
      f = (l.Base = {
        extend: function (a) {
          n.prototype = this;
          var b = new n();
          a && b.mixIn(a);
          b.hasOwnProperty('init') ||
            (b.init = function () {
              b.$super.init.apply(this, arguments);
            });
          b.init.prototype = b;
          b.$super = this;
          return b;
        },
        create: function () {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function () {},
        mixIn: function (a) {
          for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
          a.hasOwnProperty('toString') && (this.toString = a.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      }),
      j = (l.WordArray = f.extend({
        init: function (a, b) {
          a = this.words = a || [];
          this.sigBytes = b != r ? b : 4 * a.length;
        },
        toString: function (a) {
          return (a || s).stringify(this);
        },
        concat: function (a) {
          var b = this.words,
            d = a.words,
            c = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (c % 4)
            for (var e = 0; e < a; e++)
              b[(c + e) >>> 2] |= ((d[e >>> 2] >>> (24 - 8 * (e % 4))) & 255) << (24 - 8 * ((c + e) % 4));
          else if (65535 < d.length) for (e = 0; e < a; e += 4) b[(c + e) >>> 2] = d[e >>> 2];
          else b.push.apply(b, d);
          this.sigBytes += a;
          return this;
        },
        clamp: function () {
          var a = this.words,
            b = this.sigBytes;
          a[b >>> 2] &= 4294967295 << (32 - 8 * (b % 4));
          a.length = h.ceil(b / 4);
        },
        clone: function () {
          var a = f.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function (a) {
          for (var b = [], d = 0; d < a; d += 4) b.push((4294967296 * h.random()) | 0);
          return new j.init(b, a);
        },
      })),
      m = (k.enc = {}),
      s = (m.Hex = {
        stringify: function (a) {
          var b = a.words;
          a = a.sigBytes;
          for (var d = [], c = 0; c < a; c++) {
            var e = (b[c >>> 2] >>> (24 - 8 * (c % 4))) & 255;
            d.push((e >>> 4).toString(16));
            d.push((e & 15).toString(16));
          }
          return d.join('');
        },
        parse: function (a) {
          for (var b = a.length, d = [], c = 0; c < b; c += 2)
            d[c >>> 3] |= parseInt(a.substr(c, 2), 16) << (24 - 4 * (c % 8));
          return new j.init(d, b / 2);
        },
      }),
      p = (m.Latin1 = {
        stringify: function (a) {
          var b = a.words;
          a = a.sigBytes;
          for (var d = [], c = 0; c < a; c++) d.push(String.fromCharCode((b[c >>> 2] >>> (24 - 8 * (c % 4))) & 255));
          return d.join('');
        },
        parse: function (a) {
          for (var b = a.length, d = [], c = 0; c < b; c++) d[c >>> 2] |= (a.charCodeAt(c) & 255) << (24 - 8 * (c % 4));
          return new j.init(d, b);
        },
      }),
      t = (m.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(p.stringify(a)));
          } catch (b) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function (a) {
          return p.parse(unescape(encodeURIComponent(a)));
        },
      }),
      q = (l.BufferedBlockAlgorithm = f.extend({
        reset: function () {
          this._data = new j.init();
          this._nDataBytes = 0;
        },
        _append: function (a) {
          'string' == typeof a && (a = t.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process: function (a) {
          var b = this._data,
            d = b.words,
            c = b.sigBytes,
            e = this.blockSize,
            f = c / (4 * e),
            f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
          a = f * e;
          c = h.min(4 * a, c);
          if (a) {
            for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
            g = d.splice(0, a);
            b.sigBytes -= c;
          }
          return new j.init(g, c);
        },
        clone: function () {
          var a = f.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0,
      }));
    l.Hasher = q.extend({
      cfg: f.extend(),
      init: function (a) {
        this.cfg = this.cfg.extend(a);
        this.reset();
      },
      reset: function () {
        q.reset.call(this);
        this._doReset();
      },
      update: function (a) {
        this._append(a);
        this._process();
        return this;
      },
      finalize: function (a) {
        a && this._append(a);
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (a) {
        return function (b, d) {
          return new a.init(d).finalize(b);
        };
      },
      _createHmacHelper: function (a) {
        return function (b, d) {
          return new u.HMAC.init(a, d).finalize(b);
        };
      },
    });
    var u = (k.algo = {});
    return k;
  })(Math);
window.MunViewer = (function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((e.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & n && 'string' != typeof t))
        for (var i in t)
          e.d(
            r,
            i,
            function (n) {
              return t[n];
            }.bind(null, i)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ''),
    e((e.s = 121))
  );
})([
  function (t, n, e) {
    var r = e(1),
      i = e(7),
      o = e(14),
      a = e(11),
      c = e(17),
      s = 'prototype',
      u = function (t, n, e) {
        var f,
          l,
          h,
          d,
          v = t & u.F,
          p = t & u.G,
          g = t & u.S,
          w = t & u.P,
          y = t & u.B,
          x = p ? r : g ? r[n] || (r[n] = {}) : (r[n] || {})[s],
          m = p ? i : i[n] || (i[n] = {}),
          b = m[s] || (m[s] = {});
        for (f in (p && (e = n), e))
          (h = ((l = !v && x && void 0 !== x[f]) ? x : e)[f]),
            (d = y && l ? c(h, r) : w && 'function' == typeof h ? c(Function.call, h) : h),
            x && a(x, f, h, t & u.U),
            m[f] != h && o(m, f, d),
            w && b[f] != h && (b[f] = h);
      };
    (r.core = i),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u);
  },
  function (t, n) {
    var e = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = e);
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, n, e) {
    var r = e(4);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function (t, n) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function (t, n, e) {
    var r = e(48)('wks'),
      i = e(29),
      o = e(1).Symbol,
      a = 'function' == typeof o;
    (t.exports = function (t) {
      return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
    }).store = r;
  },
  function (t, n, e) {
    var r = e(19),
      i = Math.min;
    t.exports = function (t) {
      return 0 < t ? i(r(t), 9007199254740991) : 0;
    };
  },
  function (t, n) {
    var e = (t.exports = { version: '2.6.11' });
    'number' == typeof __e && (__e = e);
  },
  function (t, n, e) {
    t.exports = !e(2)(function () {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, n, e) {
    var r = e(3),
      i = e(88),
      o = e(26),
      a = Object.defineProperty;
    n.f = e(8)
      ? Object.defineProperty
      : function (t, n, e) {
          if ((r(t), (n = o(n, !0)), r(e), i))
            try {
              return a(t, n, e);
            } catch (t) {}
          if ('get' in e || 'set' in e) throw TypeError('Accessors not supported!');
          return 'value' in e && (t[n] = e.value), t;
        };
  },
  function (t, n, e) {
    var r = e(24);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, n, e) {
    var r = e(1),
      i = e(14),
      o = e(13),
      a = e(29)('src'),
      c = e(126),
      s = 'toString',
      u = ('' + c).split(s);
    (e(7).inspectSource = function (t) {
      return c.call(t);
    }),
      (t.exports = function (t, n, e, c) {
        var s = 'function' == typeof e;
        s && (o(e, 'name') || i(e, 'name', n)),
          t[n] !== e &&
            (s && (o(e, a) || i(e, a, t[n] ? '' + t[n] : u.join(String(n)))),
            t === r ? (t[n] = e) : c ? (t[n] ? (t[n] = e) : i(t, n, e)) : (delete t[n], i(t, n, e)));
      })(Function.prototype, s, function () {
        return ('function' == typeof this && this[a]) || c.call(this);
      });
  },
  function (t, n, e) {
    function r(t, n, e, r) {
      var i = String(a(t)),
        o = '<' + n;
      return '' !== e && (o += ' ' + e + '="' + String(r).replace(c, '&quot;') + '"'), o + '>' + i + '</' + n + '>';
    }
    var i = e(0),
      o = e(2),
      a = e(24),
      c = /"/g;
    t.exports = function (t, n) {
      var e = {};
      (e[t] = n(r)),
        i(
          i.P +
            i.F *
              o(function () {
                var n = ''[t]('"');
                return n !== n.toLowerCase() || 3 < n.split('"').length;
              }),
          'String',
          e
        );
    };
  },
  function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n);
    };
  },
  function (t, n, e) {
    var r = e(9),
      i = e(28);
    t.exports = e(8)
      ? function (t, n, e) {
          return r.f(t, n, i(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        };
  },
  function (t, n, e) {
    var r = e(44),
      i = e(24);
    t.exports = function (t) {
      return r(i(t));
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(2);
    t.exports = function (t, n) {
      return (
        !!t &&
        r(function () {
          n ? t.call(null, function () {}, 1) : t.call(null);
        })
      );
    };
  },
  function (t, n, e) {
    var r = e(18);
    t.exports = function (t, n, e) {
      if ((r(t), void 0 === n)) return t;
      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e);
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function (e, r, i) {
            return t.call(n, e, r, i);
          };
      }
      return function () {
        return t.apply(n, arguments);
      };
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function (t, n) {
    var e = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (0 < t ? r : e)(t);
    };
  },
  function (t, n, e) {
    var r = e(45),
      i = e(28),
      o = e(15),
      a = e(26),
      c = e(13),
      s = e(88),
      u = Object.getOwnPropertyDescriptor;
    n.f = e(8)
      ? u
      : function (t, n) {
          if (((t = o(t)), (n = a(n, !0)), s))
            try {
              return u(t, n);
            } catch (t) {}
          if (c(t, n)) return i(!r.f.call(t, n), t[n]);
        };
  },
  function (t, n, e) {
    var r = e(0),
      i = e(7),
      o = e(2);
    t.exports = function (t, n) {
      var e = (i.Object || {})[t] || Object[t],
        a = {};
      (a[t] = n(e)),
        r(
          r.S +
            r.F *
              o(function () {
                e(1);
              }),
          'Object',
          a
        );
    };
  },
  function (t, n, e) {
    var r = e(17),
      i = e(44),
      o = e(10),
      a = e(6),
      c = e(104);
    t.exports = function (t, n) {
      var e = 1 == t,
        s = 2 == t,
        u = 3 == t,
        f = 4 == t,
        l = 6 == t,
        h = 5 == t || l,
        d = n || c;
      return function (n, c, v) {
        for (
          var p, g, w = o(n), y = i(w), x = r(c, v, 3), m = a(y.length), b = 0, _ = e ? d(n, m) : s ? d(n, 0) : void 0;
          b < m;
          b++
        )
          if ((h || b in y) && ((g = x((p = y[b]), b, w)), t))
            if (e) _[b] = g;
            else if (g)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return p;
                case 6:
                  return b;
                case 2:
                  _.push(p);
              }
            else if (f) return !1;
        return l ? -1 : u || f ? f : _;
      };
    };
  },
  function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
      return e.call(t).slice(8, -1);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, n, e) {
    'use strict';
    var r,
      i,
      o,
      a,
      c,
      s,
      u,
      f,
      l,
      h,
      d,
      v,
      p,
      g,
      w,
      y,
      x,
      m,
      b,
      _,
      S,
      M,
      O,
      E,
      C,
      P,
      j,
      F,
      T,
      k,
      I,
      A,
      V,
      $,
      G,
      L,
      N,
      R,
      D,
      X,
      z,
      B,
      U,
      W,
      H,
      q,
      J,
      Y,
      K,
      Z,
      Q,
      tt,
      nt,
      et,
      rt,
      it,
      ot,
      at,
      ct,
      st,
      ut,
      ft,
      lt,
      ht,
      dt,
      vt,
      pt,
      gt,
      wt,
      yt,
      xt,
      mt,
      bt,
      _t,
      St,
      Mt,
      Ot,
      Et,
      Ct,
      Pt,
      jt,
      Ft,
      Tt,
      kt,
      It,
      At,
      Vt,
      $t,
      Gt,
      Lt,
      Nt,
      Rt,
      Dt,
      Xt,
      zt,
      Bt,
      Ut,
      Wt;
    e(8)
      ? ((r = e(30)),
        (i = e(1)),
        (o = e(2)),
        (a = e(0)),
        (c = e(59)),
        (s = e(84)),
        (u = e(17)),
        (f = e(42)),
        (l = e(28)),
        (h = e(14)),
        (d = e(43)),
        (v = e(19)),
        (p = e(6)),
        (g = e(115)),
        (w = e(32)),
        (y = e(26)),
        (x = e(13)),
        (m = e(46)),
        (b = e(4)),
        (_ = e(10)),
        (S = e(76)),
        (M = e(33)),
        (O = e(35)),
        (E = e(34).f),
        (C = e(78)),
        (P = e(29)),
        (j = e(5)),
        (F = e(22)),
        (T = e(49)),
        (k = e(47)),
        (I = e(80)),
        (A = e(40)),
        (V = e(52)),
        ($ = e(41)),
        (G = e(79)),
        (L = e(106)),
        (N = e(9)),
        (R = e(20)),
        (D = N.f),
        (X = R.f),
        (z = i.RangeError),
        (B = i.TypeError),
        (U = i.Uint8Array),
        (H = 'Shared' + (W = 'ArrayBuffer')),
        (q = 'BYTES_PER_ELEMENT'),
        (J = 'prototype'),
        (Y = Array[J]),
        (K = s.ArrayBuffer),
        (Z = s.DataView),
        (Q = F(0)),
        (tt = F(2)),
        (nt = F(3)),
        (et = F(4)),
        (rt = F(5)),
        (it = F(6)),
        (ot = T(!0)),
        (at = T(!1)),
        (ct = I.values),
        (st = I.keys),
        (ut = I.entries),
        (ft = Y.lastIndexOf),
        (lt = Y.reduce),
        (ht = Y.reduceRight),
        (dt = Y.join),
        (vt = Y.sort),
        (pt = Y.slice),
        (gt = Y.toString),
        (wt = Y.toLocaleString),
        (yt = j('iterator')),
        (xt = j('toStringTag')),
        (mt = P('typed_constructor')),
        (bt = P('def_constructor')),
        (_t = c.CONSTR),
        (St = c.TYPED),
        (Mt = c.VIEW),
        (Ot = 'Wrong length!'),
        (Et = F(1, function (t, n) {
          return Tt(k(t, t[bt]), n);
        })),
        (Ct = o(function () {
          return 1 === new U(new Uint16Array([1]).buffer)[0];
        })),
        (Pt =
          !!U &&
          !!U[J].set &&
          o(function () {
            new U(1).set({});
          })),
        (jt = function (t, n) {
          var e = v(t);
          if (e < 0 || e % n) throw z('Wrong offset!');
          return e;
        }),
        (Ft = function (t) {
          if (b(t) && St in t) return t;
          throw B(t + ' is not a typed array!');
        }),
        (Tt = function (t, n) {
          if (!b(t) || !(mt in t)) throw B('It is not a typed array constructor!');
          return new t(n);
        }),
        (kt = function (t, n) {
          return It(k(t, t[bt]), n);
        }),
        (It = function (t, n) {
          for (var e = 0, r = n.length, i = Tt(t, r); e < r; ) i[e] = n[e++];
          return i;
        }),
        (At = function (t, n, e) {
          D(t, n, {
            get: function () {
              return this._d[e];
            },
          });
        }),
        (Vt = function (t, n, e) {
          var r,
            i,
            o,
            a,
            c,
            s,
            f = _(t),
            l = arguments.length,
            h = 1 < l ? n : void 0,
            d = void 0 !== h,
            v = C(f);
          if (null != v && !S(v)) {
            for (s = v.call(f), o = [], r = 0; !(c = s.next()).done; r++) o.push(c.value);
            f = o;
          }
          for (d && 2 < l && (h = u(h, e, 2)), r = 0, i = p(f.length), a = Tt(this, i); r < i; r++)
            a[r] = d ? h(f[r], r) : f[r];
          return a;
        }),
        ($t = function () {
          for (var t = 0, n = arguments.length, e = Tt(this, n); t < n; ) e[t] = arguments[t++];
          return e;
        }),
        (Gt =
          !!U &&
          o(function () {
            wt.call(new U(1));
          })),
        (Lt = function () {
          return wt.apply(Gt ? pt.call(Ft(this)) : Ft(this), arguments);
        }),
        (Nt = {
          copyWithin: function (t, n, e) {
            return L.call(Ft(this), t, n, 2 < arguments.length ? e : void 0);
          },
          every: function (t, n) {
            return et(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          fill: function (t) {
            return G.apply(Ft(this), arguments);
          },
          filter: function (t, n) {
            return kt(this, tt(Ft(this), t, 1 < arguments.length ? n : void 0));
          },
          find: function (t, n) {
            return rt(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          findIndex: function (t, n) {
            return it(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          forEach: function (t, n) {
            Q(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          indexOf: function (t, n) {
            return at(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          includes: function (t, n) {
            return ot(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          join: function (t) {
            return dt.apply(Ft(this), arguments);
          },
          lastIndexOf: function (t) {
            return ft.apply(Ft(this), arguments);
          },
          map: function (t, n) {
            return Et(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          reduce: function (t) {
            return lt.apply(Ft(this), arguments);
          },
          reduceRight: function (t) {
            return ht.apply(Ft(this), arguments);
          },
          reverse: function () {
            for (var t, n = this, e = Ft(n).length, r = Math.floor(e / 2), i = 0; i < r; )
              (t = n[i]), (n[i++] = n[--e]), (n[e] = t);
            return n;
          },
          some: function (t, n) {
            return nt(Ft(this), t, 1 < arguments.length ? n : void 0);
          },
          sort: function (t) {
            return vt.call(Ft(this), t);
          },
          subarray: function (t, n) {
            var e = Ft(this),
              r = e.length,
              i = w(t, r);
            return new (k(e, e[bt]))(
              e.buffer,
              e.byteOffset + i * e.BYTES_PER_ELEMENT,
              p((void 0 === n ? r : w(n, r)) - i)
            );
          },
        }),
        (Rt = function (t, n) {
          return kt(this, pt.call(Ft(this), t, n));
        }),
        (Dt = function (t, n) {
          Ft(this);
          var e = jt(n, 1),
            r = this.length,
            i = _(t),
            o = p(i.length),
            a = 0;
          if (r < o + e) throw z(Ot);
          for (; a < o; ) this[e + a] = i[a++];
        }),
        (Xt = {
          entries: function () {
            return ut.call(Ft(this));
          },
          keys: function () {
            return st.call(Ft(this));
          },
          values: function () {
            return ct.call(Ft(this));
          },
        }),
        (zt = function (t, n) {
          return b(t) && t[St] && 'symbol' != typeof n && n in t && String(+n) == String(n);
        }),
        (Bt = function (t, n) {
          return zt(t, (n = y(n, !0))) ? l(2, t[n]) : X(t, n);
        }),
        (Ut = function (t, n, e) {
          return !(zt(t, (n = y(n, !0))) && b(e) && x(e, 'value')) ||
            x(e, 'get') ||
            x(e, 'set') ||
            e.configurable ||
            (x(e, 'writable') && !e.writable) ||
            (x(e, 'enumerable') && !e.enumerable)
            ? D(t, n, e)
            : ((t[n] = e.value), t);
        }),
        _t || ((R.f = Bt), (N.f = Ut)),
        a(a.S + a.F * !_t, 'Object', { getOwnPropertyDescriptor: Bt, defineProperty: Ut }),
        o(function () {
          gt.call({});
        }) &&
          (gt = wt =
            function () {
              return dt.call(this);
            }),
        (Wt = d({}, Nt)),
        d(Wt, Xt),
        h(Wt, yt, Xt.values),
        d(Wt, { slice: Rt, set: Dt, constructor: function () {}, toString: gt, toLocaleString: Lt }),
        At(Wt, 'buffer', 'b'),
        At(Wt, 'byteOffset', 'o'),
        At(Wt, 'byteLength', 'l'),
        At(Wt, 'length', 'e'),
        D(Wt, xt, {
          get: function () {
            return this[St];
          },
        }),
        (t.exports = function (t, n, e, s) {
          function u(t, e) {
            D(t, e, {
              get: function () {
                return (t = e), (r = this._d).v[d](t * n + r.o, Ct);
                var t, r;
              },
              set: function (t) {
                return (
                  (r = e),
                  (i = t),
                  (o = this._d),
                  s && (i = (i = Math.round(i)) < 0 ? 0 : 255 < i ? 255 : 255 & i),
                  void o.v[v](r * n + o.o, i, Ct)
                );
                var r, i, o;
              },
              enumerable: !0,
            });
          }
          var l = t + ((s = !!s) ? 'Clamped' : '') + 'Array',
            d = 'get' + t,
            v = 'set' + t,
            w = i[l],
            y = w || {},
            x = w && O(w),
            _ = !w || !c.ABV,
            S = {},
            C = w && w[J];
          _
            ? ((w = e(function (t, e, r, i) {
                f(t, w, l, '_d');
                var o,
                  a,
                  c,
                  s,
                  d = 0,
                  v = 0;
                if (b(e)) {
                  if (!(e instanceof K || (s = m(e)) == W || s == H)) return St in e ? It(w, e) : Vt.call(w, e);
                  (o = e), (v = jt(r, n));
                  var y = e.byteLength;
                  if (void 0 === i) {
                    if (y % n) throw z(Ot);
                    if ((a = y - v) < 0) throw z(Ot);
                  } else if (y < (a = p(i) * n) + v) throw z(Ot);
                  c = a / n;
                } else (c = g(e)), (o = new K((a = c * n)));
                for (h(t, '_d', { b: o, o: v, l: a, e: c, v: new Z(o) }); d < c; ) u(t, d++);
              })),
              (C = w[J] = M(Wt)),
              h(C, 'constructor', w))
            : (o(function () {
                w(1);
              }) &&
                o(function () {
                  new w(-1);
                }) &&
                V(function (t) {
                  new w(), new w(null), new w(1.5), new w(t);
                }, !0)) ||
              ((w = e(function (t, e, r, i) {
                var o;
                return (
                  f(t, w, l),
                  b(e)
                    ? e instanceof K || (o = m(e)) == W || o == H
                      ? void 0 !== i
                        ? new y(e, jt(r, n), i)
                        : void 0 !== r
                        ? new y(e, jt(r, n))
                        : new y(e)
                      : St in e
                      ? It(w, e)
                      : Vt.call(w, e)
                    : new y(g(e))
                );
              })),
              Q(x !== Function.prototype ? E(y).concat(E(x)) : E(y), function (t) {
                t in w || h(w, t, y[t]);
              }),
              (w[J] = C),
              r || (C.constructor = w));
          var P = C[yt],
            j = !!P && ('values' == P.name || null == P.name),
            F = Xt.values;
          h(w, mt, !0),
            h(C, St, l),
            h(C, Mt, !0),
            h(C, bt, w),
            (s ? new w(1)[xt] == l : xt in C) ||
              D(C, xt, {
                get: function () {
                  return l;
                },
              }),
            (S[l] = w),
            a(a.G + a.W + a.F * (w != y), S),
            a(a.S, l, { BYTES_PER_ELEMENT: n }),
            a(
              a.S +
                a.F *
                  o(function () {
                    y.of.call(w, 1);
                  }),
              l,
              { from: Vt, of: $t }
            ),
            q in C || h(C, q, n),
            a(a.P, l, Nt),
            $(l),
            a(a.P + a.F * Pt, l, { set: Dt }),
            a(a.P + a.F * !j, l, Xt),
            r || C.toString == gt || (C.toString = gt),
            a(
              a.P +
                a.F *
                  o(function () {
                    new w(1).slice();
                  }),
              l,
              { slice: Rt }
            ),
            a(
              a.P +
                a.F *
                  (o(function () {
                    return [1, 2].toLocaleString() != new w([1, 2]).toLocaleString();
                  }) ||
                    !o(function () {
                      C.toLocaleString.call([1, 2]);
                    })),
              l,
              { toLocaleString: Lt }
            ),
            (A[l] = j ? P : F),
            r || j || h(C, yt, F);
        }))
      : (t.exports = function () {});
  },
  function (t, n, e) {
    var r = e(4);
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, i;
      if (n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
      if ('function' == typeof (e = t.valueOf) && !r((i = e.call(t)))) return i;
      if (!n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, n, e) {
    function r(t) {
      c(t, i, { value: { i: 'O' + ++s, w: {} } });
    }
    var i = e(29)('meta'),
      o = e(4),
      a = e(13),
      c = e(9).f,
      s = 0,
      u =
        Object.isExtensible ||
        function () {
          return !0;
        },
      f = !e(2)(function () {
        return u(Object.preventExtensions({}));
      }),
      l = (t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function (t, n) {
          if (!o(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
          if (!a(t, i)) {
            if (!u(t)) return 'F';
            if (!n) return 'E';
            r(t);
          }
          return t[i].i;
        },
        getWeak: function (t, n) {
          if (!a(t, i)) {
            if (!u(t)) return !0;
            if (!n) return !1;
            r(t);
          }
          return t[i].w;
        },
        onFreeze: function (t) {
          return f && l.NEED && u(t) && !a(t, i) && r(t), t;
        },
      });
  },
  function (t, n) {
    t.exports = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    };
  },
  function (t, n) {
    var e = 0,
      r = Math.random();
    t.exports = function (t) {
      return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++e + r).toString(36));
    };
  },
  function (t, n) {
    t.exports = !1;
  },
  function (t, n, e) {
    var r = e(90),
      i = e(63);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, n, e) {
    var r = e(19),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, n) {
      return (t = r(t)) < 0 ? i(t + n, 0) : o(t, n);
    };
  },
  function (t, n, e) {
    function r() {}
    var i = e(3),
      o = e(91),
      a = e(63),
      c = e(62)('IE_PROTO'),
      s = 'prototype',
      u = function () {
        var t,
          n = e(60)('iframe'),
          r = a.length;
        for (
          n.style.display = 'none',
            e(64).appendChild(n),
            n.src = 'javascript:',
            (t = n.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            u = t.F;
          r--;

        )
          delete u[s][a[r]];
        return u();
      };
    t.exports =
      Object.create ||
      function (t, n) {
        var e;
        return (
          null !== t ? ((r[s] = i(t)), (e = new r()), (r[s] = null), (e[c] = t)) : (e = u()), void 0 === n ? e : o(e, n)
        );
      };
  },
  function (t, n, e) {
    var r = e(90),
      i = e(63).concat('length', 'prototype');
    n.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, n, e) {
    var r = e(13),
      i = e(10),
      o = e(62)('IE_PROTO'),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = i(t)),
          r(t, o)
            ? t[o]
            : 'function' == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function (t, n, e) {
    var r = e(5)('unscopables'),
      i = Array.prototype;
    null == i[r] && e(14)(i, r, {}),
      (t.exports = function (t) {
        i[r][t] = !0;
      });
  },
  function (t, n, e) {
    var r = e(4);
    t.exports = function (t, n) {
      if (!r(t) || t._t !== n) throw TypeError('Incompatible receiver,' + n + ' required!');
      return t;
    };
  },
  function (t, n, e) {
    var r = e(9).f,
      i = e(13),
      o = e(5)('toStringTag');
    t.exports = function (t, n, e) {
      t && !i((t = e ? t : t.prototype), o) && r(t, o, { configurable: !0, value: n });
    };
  },
  function (t, n, e) {
    function r(t, n, e) {
      var r = {},
        o = a(function () {
          return !!c[t]() || '​' != '​'[t]();
        }),
        s = (r[t] = o ? n(l) : c[t]);
      e && (r[e] = s), i(i.P + i.F * o, 'String', r);
    }
    var i = e(0),
      o = e(24),
      a = e(2),
      c = e(66),
      s = '[' + c + ']',
      u = RegExp('^' + s + s + '*'),
      f = RegExp(s + s + '*$'),
      l = (r.trim = function (t, n) {
        return (t = String(o(t))), 1 & n && (t = t.replace(u, '')), 2 & n && (t = t.replace(f, '')), t;
      });
    t.exports = r;
  },
  function (t, n) {
    t.exports = {};
  },
  function (t, n, e) {
    'use strict';
    var r = e(1),
      i = e(9),
      o = e(8),
      a = e(5)('species');
    t.exports = function (t) {
      var n = r[t];
      o &&
        n &&
        !n[a] &&
        i.f(n, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, n) {
    t.exports = function (t, n, e, r) {
      if (!(t instanceof n) || (void 0 !== r && r in t)) throw TypeError(e + ':incorrect invocation!');
      return t;
    };
  },
  function (t, n, e) {
    var r = e(11);
    t.exports = function (t, n, e) {
      for (var i in n) r(t, i, n[i], e);
      return t;
    };
  },
  function (t, n, e) {
    var r = e(23);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return 'String' == r(t) ? t.split('') : Object(t);
        };
  },
  function (t, n) {
    n.f = {}.propertyIsEnumerable;
  },
  function (t, n, e) {
    var r = e(23),
      i = e(5)('toStringTag'),
      o =
        'Arguments' ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var n, e, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (e = (function (t, n) {
            try {
              return t[n];
            } catch (t) {}
          })((n = Object(t)), i))
        ? e
        : o
        ? r(n)
        : 'Object' == (a = r(n)) && 'function' == typeof n.callee
        ? 'Arguments'
        : a;
    };
  },
  function (t, n, e) {
    var r = e(3),
      i = e(18),
      o = e(5)('species');
    t.exports = function (t, n) {
      var e,
        a = r(t).constructor;
      return void 0 === a || null == (e = r(a)[o]) ? n : i(e);
    };
  },
  function (t, n, e) {
    var r = e(7),
      i = e(1),
      o = '__core-js_shared__',
      a = i[o] || (i[o] = {});
    (t.exports = function (t, n) {
      return a[t] || (a[t] = void 0 !== n ? n : {});
    })('versions', []).push({
      version: r.version,
      mode: e(30) ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, n, e) {
    var r = e(15),
      i = e(6),
      o = e(32);
    t.exports = function (t) {
      return function (n, e, a) {
        var c,
          s = r(n),
          u = i(s.length),
          f = o(a, u);
        if (t && e != e) {
          for (; f < u; ) if ((c = s[f++]) != c) return !0;
        } else for (; f < u; f++) if ((t || f in s) && s[f] === e) return t || f || 0;
        return !t && -1;
      };
    };
  },
  function (t, n) {
    n.f = Object.getOwnPropertySymbols;
  },
  function (t, n, e) {
    var r = e(23);
    t.exports =
      Array.isArray ||
      function (t) {
        return 'Array' == r(t);
      };
  },
  function (t, n, e) {
    var r = e(5)('iterator'),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function () {
        i = !0;
      }),
        Array.from(o, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, n) {
      if (!n && !i) return !1;
      var e = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function () {
          return { done: (e = !0) };
        }),
          (o[r] = function () {
            return a;
          }),
          t(o);
      } catch (t) {}
      return e;
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(3);
    t.exports = function () {
      var t = r(this),
        n = '';
      return (
        t.global && (n += 'g'),
        t.ignoreCase && (n += 'i'),
        t.multiline && (n += 'm'),
        t.unicode && (n += 'u'),
        t.sticky && (n += 'y'),
        n
      );
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(46),
      i = RegExp.prototype.exec;
    t.exports = function (t, n) {
      var e = t.exec;
      if ('function' == typeof e) {
        var o = e.call(t, n);
        if ('object' != typeof o)
          throw new TypeError('RegExp exec method returned something other than an Object or null');
        return o;
      }
      if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
      return i.call(t, n);
    };
  },
  function (t, n, e) {
    'use strict';
    e(108);
    var r = e(11),
      i = e(14),
      o = e(2),
      a = e(24),
      c = e(5),
      s = e(81),
      u = c('species'),
      f = !o(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: '7' }), t;
          }),
          '7' !== ''.replace(t, '$<a>')
        );
      }),
      l = (function () {
        var t = /(?:)/,
          n = t.exec;
        t.exec = function () {
          return n.apply(this, arguments);
        };
        var e = 'ab'.split(t);
        return 2 === e.length && 'a' === e[0] && 'b' === e[1];
      })();
    t.exports = function (t, n, e) {
      var h,
        d,
        v,
        p,
        g = c(t),
        w = !o(function () {
          var n = {};
          return (
            (n[g] = function () {
              return 7;
            }),
            7 != ''[t](n)
          );
        }),
        y = w
          ? !o(function () {
              var n = !1,
                e = /a/;
              return (
                (e.exec = function () {
                  return (n = !0), null;
                }),
                'split' === t &&
                  ((e.constructor = {}),
                  (e.constructor[u] = function () {
                    return e;
                  })),
                e[g](''),
                !n
              );
            })
          : void 0;
      (w && y && ('replace' !== t || f) && ('split' !== t || l)) ||
        ((h = /./[g]),
        (v = (d = e(a, g, ''[t], function (t, n, e, r, i) {
          return n.exec === s
            ? w && !i
              ? { done: !0, value: h.call(n, e, r) }
              : { done: !0, value: t.call(e, n, r) }
            : { done: !1 };
        }))[0]),
        (p = d[1]),
        r(String.prototype, t, v),
        i(
          RegExp.prototype,
          g,
          2 == n
            ? function (t, n) {
                return p.call(t, this, n);
              }
            : function (t) {
                return p.call(t, this);
              }
        ));
    };
  },
  function (t, n, e) {
    var r = e(17),
      i = e(103),
      o = e(76),
      a = e(3),
      c = e(6),
      s = e(78),
      u = {},
      f = {};
    ((n = t.exports =
      function (t, n, e, l, h) {
        var d,
          v,
          p,
          g,
          w = h
            ? function () {
                return t;
              }
            : s(t),
          y = r(e, l, n ? 2 : 1),
          x = 0;
        if ('function' != typeof w) throw TypeError(t + ' is not iterable!');
        if (o(w)) {
          for (d = c(t.length); x < d; x++)
            if ((g = n ? y(a((v = t[x]))[0], v[1]) : y(t[x])) === u || g === f) return g;
        } else for (p = w.call(t); !(v = p.next()).done; ) if ((g = i(p, y, v.value, n)) === u || g === f) return g;
      }).BREAK = u),
      (n.RETURN = f);
  },
  function (t, n, e) {
    var r = e(1).navigator;
    t.exports = (r && r.userAgent) || '';
  },
  function (t, n, e) {
    'use strict';
    var r = e(1),
      i = e(0),
      o = e(11),
      a = e(43),
      c = e(27),
      s = e(56),
      u = e(42),
      f = e(4),
      l = e(2),
      h = e(52),
      d = e(38),
      v = e(67);
    t.exports = function (t, n, e, p, g, w) {
      function y(t) {
        var n = C[t];
        o(
          C,
          t,
          'delete' == t || 'has' == t
            ? function (t) {
                return !(w && !f(t)) && n.call(this, 0 === t ? 0 : t);
              }
            : 'get' == t
            ? function (t) {
                return w && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
              }
            : 'add' == t
            ? function (t) {
                return n.call(this, 0 === t ? 0 : t), this;
              }
            : function (t, e) {
                return n.call(this, 0 === t ? 0 : t, e), this;
              }
        );
      }
      var x,
        m,
        b,
        _,
        S,
        M = r[t],
        O = M,
        E = g ? 'set' : 'add',
        C = O && O.prototype,
        P = {};
      return (
        'function' == typeof O &&
        (w ||
          (C.forEach &&
            !l(function () {
              new O().entries().next();
            })))
          ? ((m = (x = new O())[E](w ? {} : -0, 1) != x),
            (b = l(function () {
              x.has(1);
            })),
            (_ = h(function (t) {
              new O(t);
            })),
            (S =
              !w &&
              l(function () {
                for (var t = new O(), n = 5; n--; ) t[E](n, n);
                return !t.has(-0);
              })),
            _ ||
              (((O = n(function (n, e) {
                u(n, O, t);
                var r = v(new M(), n, O);
                return null != e && s(e, g, r[E], r), r;
              })).prototype = C).constructor = O),
            (b || S) && (y('delete'), y('has'), g && y('get')),
            (S || m) && y(E),
            w && C.clear && delete C.clear)
          : ((O = p.getConstructor(n, t, g, E)), a(O.prototype, e), (c.NEED = !0)),
        d(O, t),
        (P[t] = O),
        i(i.G + i.W + i.F * (O != M), P),
        w || p.setStrong(O, t, g),
        O
      );
    };
  },
  function (t, n, e) {
    for (
      var r,
        i = e(1),
        o = e(14),
        a = e(29),
        c = a('typed_array'),
        s = a('view'),
        u = !(!i.ArrayBuffer || !i.DataView),
        f = u,
        l = 0,
        h =
          'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
            ','
          );
      l < 9;

    )
      (r = i[h[l++]]) ? (o(r.prototype, c, !0), o(r.prototype, s, !0)) : (f = !1);
    t.exports = { ABV: u, CONSTR: f, TYPED: c, VIEW: s };
  },
  function (t, n, e) {
    var r = e(4),
      i = e(1).document,
      o = r(i) && r(i.createElement);
    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  },
  function (t, n, e) {
    n.f = e(5);
  },
  function (t, n, e) {
    var r = e(48)('keys'),
      i = e(29);
    t.exports = function (t) {
      return r[t] || (r[t] = i(t));
    };
  },
  function (t, n) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  function (t, n, e) {
    var r = e(1).document;
    t.exports = r && r.documentElement;
  },
  function (t, n, e) {
    function r(t, n) {
      if ((o(t), !i(n) && null !== n)) throw TypeError(n + ":can't set as prototype!");
    }
    var i = e(4),
      o = e(3);
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function (t, n, i) {
              try {
                (i = e(17)(Function.call, e(20).f(Object.prototype, '__proto__').set, 2))(t, []),
                  (n = !(t instanceof Array));
              } catch (t) {
                n = !0;
              }
              return function (t, e) {
                return r(t, e), n ? (t.__proto__ = e) : i(t, e), t;
              };
            })({}, !1)
          : void 0),
      check: r,
    };
  },
  function (t, n) {
    t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
  },
  function (t, n, e) {
    var r = e(4),
      i = e(65).set;
    t.exports = function (t, n, e) {
      var o,
        a = n.constructor;
      return a !== e && 'function' == typeof a && (o = a.prototype) !== e.prototype && r(o) && i && i(t, o), t;
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(19),
      i = e(24);
    t.exports = function (t) {
      var n = String(i(this)),
        e = '',
        o = r(t);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; 0 < o; (o >>>= 1) && (n += n)) 1 & o && (e += n);
      return e;
    };
  },
  function (t, n) {
    t.exports =
      Math.sign ||
      function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
  },
  function (t, n) {
    var e = Math.expm1;
    t.exports =
      !e || 22025.465794806718 < e(10) || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17)
        ? function (t) {
            return 0 == (t = +t) ? t : -1e-6 < t && t < 1e-6 ? t + (t * t) / 2 : Math.exp(t) - 1;
          }
        : e;
  },
  function (t, n, e) {
    var r = e(19),
      i = e(24);
    t.exports = function (t) {
      return function (n, e) {
        var o,
          a,
          c = String(i(n)),
          s = r(e),
          u = c.length;
        return s < 0 || u <= s
          ? t
            ? ''
            : void 0
          : (o = c.charCodeAt(s)) < 55296 || 56319 < o || s + 1 === u || (a = c.charCodeAt(s + 1)) < 56320 || 57343 < a
          ? t
            ? c.charAt(s)
            : o
          : t
          ? c.slice(s, s + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function (t, n, e) {
    'use strict';
    function r() {
      return this;
    }
    var i = e(30),
      o = e(0),
      a = e(11),
      c = e(14),
      s = e(40),
      u = e(102),
      f = e(38),
      l = e(35),
      h = e(5)('iterator'),
      d = !([].keys && 'next' in [].keys()),
      v = 'values';
    t.exports = function (t, n, e, p, g, w, y) {
      function x(t) {
        if (!d && t in E) return E[t];
        switch (t) {
          case 'keys':
          case v:
            return function () {
              return new e(this, t);
            };
        }
        return function () {
          return new e(this, t);
        };
      }
      u(e, n, p);
      var m,
        b,
        _,
        S = n + ' Iterator',
        M = g == v,
        O = !1,
        E = t.prototype,
        C = E[h] || E['@@iterator'] || (g && E[g]),
        P = C || x(g),
        j = g ? (M ? x('entries') : P) : void 0,
        F = ('Array' == n && E.entries) || C;
      if (
        (F &&
          (_ = l(F.call(new t()))) !== Object.prototype &&
          _.next &&
          (f(_, S, !0), i || 'function' == typeof _[h] || c(_, h, r)),
        M &&
          C &&
          C.name !== v &&
          ((O = !0),
          (P = function () {
            return C.call(this);
          })),
        (i && !y) || (!d && !O && E[h]) || c(E, h, P),
        (s[n] = P),
        (s[S] = r),
        g)
      )
        if (((m = { values: M ? P : x(v), keys: w ? P : x('keys'), entries: j }), y))
          for (b in m) b in E || a(E, b, m[b]);
        else o(o.P + o.F * (d || O), n, m);
      return m;
    };
  },
  function (t, n, e) {
    var r = e(74),
      i = e(24);
    t.exports = function (t, n, e) {
      if (r(n)) throw TypeError('String#' + e + " doesn't accept regex!");
      return String(i(t));
    };
  },
  function (t, n, e) {
    var r = e(4),
      i = e(23),
      o = e(5)('match');
    t.exports = function (t) {
      var n;
      return r(t) && (void 0 !== (n = t[o]) ? !!n : 'RegExp' == i(t));
    };
  },
  function (t, n, e) {
    var r = e(5)('match');
    t.exports = function (t) {
      var n = /./;
      try {
        '/./'[t](n);
      } catch (e) {
        try {
          return (n[r] = !1), !'/./'[t](n);
        } catch (t) {}
      }
      return !0;
    };
  },
  function (t, n, e) {
    var r = e(40),
      i = e(5)('iterator'),
      o = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(9),
      i = e(28);
    t.exports = function (t, n, e) {
      n in t ? r.f(t, n, i(0, e)) : (t[n] = e);
    };
  },
  function (t, n, e) {
    var r = e(46),
      i = e(5)('iterator'),
      o = e(40);
    t.exports = e(7).getIteratorMethod = function (t) {
      if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(10),
      i = e(32),
      o = e(6);
    t.exports = function (t, n, e) {
      for (
        var a = r(this),
          c = o(a.length),
          s = arguments.length,
          u = i(1 < s ? n : void 0, c),
          f = 2 < s ? e : void 0,
          l = void 0 === f ? c : i(f, c);
        u < l;

      )
        a[u++] = t;
      return a;
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(36),
      i = e(107),
      o = e(40),
      a = e(15);
    (t.exports = e(72)(
      Array,
      'Array',
      function (t, n) {
        (this._t = a(t)), (this._i = 0), (this._k = n);
      },
      function () {
        var t = this._t,
          n = this._k,
          e = this._i++;
        return !t || e >= t.length
          ? ((this._t = void 0), i(1))
          : i(0, 'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function (t, n, e) {
    'use strict';
    var r,
      i,
      o = e(53),
      a = RegExp.prototype.exec,
      c = String.prototype.replace,
      s = a,
      u = 'lastIndex',
      f = ((r = /a/), (i = /b*/g), a.call(r, 'a'), a.call(i, 'a'), 0 !== r[u] || 0 !== i[u]),
      l = void 0 !== /()??/.exec('')[1];
    (f || l) &&
      (s = function (t) {
        var n,
          e,
          r,
          i,
          s = this;
        return (
          l && (e = new RegExp('^' + s.source + '$(?!\\s)', o.call(s))),
          f && (n = s[u]),
          (r = a.call(s, t)),
          f && r && (s[u] = s.global ? r.index + r[0].length : n),
          l &&
            r &&
            1 < r.length &&
            c.call(r[0], e, function () {
              for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (t.exports = s);
  },
  function (t, n, e) {
    'use strict';
    var r = e(71)(!0);
    t.exports = function (t, n, e) {
      return n + (e ? r(t, n).length : 1);
    };
  },
  function (t, n, e) {
    function r() {
      var t,
        n = +this;
      x.hasOwnProperty(n) && ((t = x[n]), delete x[n], t());
    }
    function i(t) {
      r.call(t.data);
    }
    var o,
      a,
      c,
      s = e(17),
      u = e(96),
      f = e(64),
      l = e(60),
      h = e(1),
      d = h.process,
      v = h.setImmediate,
      p = h.clearImmediate,
      g = h.MessageChannel,
      w = h.Dispatch,
      y = 0,
      x = {},
      m = 'onreadystatechange';
    (v && p) ||
      ((v = function (t) {
        for (var n = [], e = 1; e < arguments.length; ) n.push(arguments[e++]);
        return (
          (x[++y] = function () {
            u('function' == typeof t ? t : Function(t), n);
          }),
          o(y),
          y
        );
      }),
      (p = function (t) {
        delete x[t];
      }),
      'process' == e(23)(d)
        ? (o = function (t) {
            d.nextTick(s(r, t, 1));
          })
        : w && w.now
        ? (o = function (t) {
            w.now(s(r, t, 1));
          })
        : g
        ? ((c = (a = new g()).port2), (a.port1.onmessage = i), (o = s(c.postMessage, c, 1)))
        : h.addEventListener && 'function' == typeof postMessage && !h.importScripts
        ? ((o = function (t) {
            h.postMessage(t + '', '*');
          }),
          h.addEventListener('message', i, !1))
        : (o =
            m in l('script')
              ? function (t) {
                  f.appendChild(l('script'))[m] = function () {
                    f.removeChild(this), r.call(t);
                  };
                }
              : function (t) {
                  setTimeout(s(r, t, 1), 0);
                })),
      (t.exports = { set: v, clear: p });
  },
  function (t, n, e) {
    'use strict';
    var r = e(1),
      i = e(8),
      o = e(30),
      a = e(59),
      c = e(14),
      s = e(43),
      u = e(2),
      f = e(42),
      l = e(19),
      h = e(6),
      d = e(115),
      v = e(34).f,
      p = e(9).f,
      g = e(79),
      w = e(38),
      y = 'ArrayBuffer',
      x = 'DataView',
      m = 'prototype',
      b = 'Wrong index!',
      _ = r[y],
      S = r[x],
      M = r.Math,
      O = r.RangeError,
      E = r.Infinity,
      C = _,
      P = M.abs,
      j = M.pow,
      F = M.floor,
      T = M.log,
      k = M.LN2,
      I = 'byteLength',
      A = 'byteOffset',
      V = i ? '_b' : 'buffer',
      $ = i ? '_l' : I,
      G = i ? '_o' : A;
    function L(t, n, e) {
      var r,
        i,
        o,
        a = new Array(e),
        c = 8 * e - n - 1,
        s = (1 << c) - 1,
        u = s >> 1,
        f = 23 === n ? j(2, -24) - j(2, -77) : 0,
        l = 0,
        h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
      for (
        (t = P(t)) != t || t === E
          ? ((i = t != t ? 1 : 0), (r = s))
          : ((r = F(T(t) / k)),
            t * (o = j(2, -r)) < 1 && (r--, (o *= 2)),
            2 <= (t += 1 <= r + u ? f / o : f * j(2, 1 - u)) * o && (r++, (o /= 2)),
            s <= r + u
              ? ((i = 0), (r = s))
              : 1 <= r + u
              ? ((i = (t * o - 1) * j(2, n)), (r += u))
              : ((i = t * j(2, u - 1) * j(2, n)), (r = 0)));
        8 <= n;
        a[l++] = 255 & i, i /= 256, n -= 8
      );
      for (r = (r << n) | i, c += n; 0 < c; a[l++] = 255 & r, r /= 256, c -= 8);
      return (a[--l] |= 128 * h), a;
    }
    function N(t, n, e) {
      var r,
        i = 8 * e - n - 1,
        o = (1 << i) - 1,
        a = o >> 1,
        c = i - 7,
        s = e - 1,
        u = t[s--],
        f = 127 & u;
      for (u >>= 7; 0 < c; f = 256 * f + t[s], s--, c -= 8);
      for (r = f & ((1 << -c) - 1), f >>= -c, c += n; 0 < c; r = 256 * r + t[s], s--, c -= 8);
      if (0 === f) f = 1 - a;
      else {
        if (f === o) return r ? NaN : u ? -E : E;
        (r += j(2, n)), (f -= a);
      }
      return (u ? -1 : 1) * r * j(2, f - n);
    }
    function R(t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
    }
    function D(t) {
      return [255 & t];
    }
    function X(t) {
      return [255 & t, (t >> 8) & 255];
    }
    function z(t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
    }
    function B(t) {
      return L(t, 52, 8);
    }
    function U(t) {
      return L(t, 23, 4);
    }
    function W(t, n, e) {
      p(t[m], n, {
        get: function () {
          return this[e];
        },
      });
    }
    function H(t, n, e, r) {
      var i = d(+e);
      if (i + n > t[$]) throw O(b);
      var o = t[V]._b,
        a = i + t[G],
        c = o.slice(a, a + n);
      return r ? c : c.reverse();
    }
    function q(t, n, e, r, i, o) {
      var a = d(+e);
      if (a + n > t[$]) throw O(b);
      for (var c = t[V]._b, s = a + t[G], u = r(+i), f = 0; f < n; f++) c[s + f] = u[o ? f : n - f - 1];
    }
    if (a.ABV) {
      if (
        !u(function () {
          _(1);
        }) ||
        !u(function () {
          new _(-1);
        }) ||
        u(function () {
          return new _(), new _(1.5), new _(NaN), _.name != y;
        })
      ) {
        for (
          var J,
            Y = ((_ = function (t) {
              return f(this, _), new C(d(t));
            })[m] = C[m]),
            K = v(C),
            Z = 0;
          K.length > Z;

        )
          (J = K[Z++]) in _ || c(_, J, C[J]);
        o || (Y.constructor = _);
      }
      var Q = new S(new _(2)),
        tt = S[m].setInt8;
      Q.setInt8(0, 2147483648),
        Q.setInt8(1, 2147483649),
        (!Q.getInt8(0) && Q.getInt8(1)) ||
          s(
            S[m],
            {
              setInt8: function (t, n) {
                tt.call(this, t, (n << 24) >> 24);
              },
              setUint8: function (t, n) {
                tt.call(this, t, (n << 24) >> 24);
              },
            },
            !0
          );
    } else
      (_ = function (t) {
        f(this, _, y);
        var n = d(t);
        (this._b = g.call(new Array(n), 0)), (this[$] = n);
      }),
        (S = function (t, n, e) {
          f(this, S, x), f(t, _, x);
          var r = t[$],
            i = l(n);
          if (i < 0 || r < i) throw O('Wrong offset!');
          if (r < i + (e = void 0 === e ? r - i : h(e))) throw O('Wrong length!');
          (this[V] = t), (this[G] = i), (this[$] = e);
        }),
        i && (W(_, I, '_l'), W(S, 'buffer', '_b'), W(S, I, '_l'), W(S, A, '_o')),
        s(S[m], {
          getInt8: function (t) {
            return (H(this, 1, t)[0] << 24) >> 24;
          },
          getUint8: function (t) {
            return H(this, 1, t)[0];
          },
          getInt16: function (t, n) {
            var e = H(this, 2, t, n);
            return (((e[1] << 8) | e[0]) << 16) >> 16;
          },
          getUint16: function (t, n) {
            var e = H(this, 2, t, n);
            return (e[1] << 8) | e[0];
          },
          getInt32: function (t, n) {
            return R(H(this, 4, t, n));
          },
          getUint32: function (t, n) {
            return R(H(this, 4, t, n)) >>> 0;
          },
          getFloat32: function (t, n) {
            return N(H(this, 4, t, n), 23, 4);
          },
          getFloat64: function (t, n) {
            return N(H(this, 8, t, n), 52, 8);
          },
          setInt8: function (t, n) {
            q(this, 1, t, D, n);
          },
          setUint8: function (t, n) {
            q(this, 1, t, D, n);
          },
          setInt16: function (t, n, e) {
            q(this, 2, t, X, n, e);
          },
          setUint16: function (t, n, e) {
            q(this, 2, t, X, n, e);
          },
          setInt32: function (t, n, e) {
            q(this, 4, t, z, n, e);
          },
          setUint32: function (t, n, e) {
            q(this, 4, t, z, n, e);
          },
          setFloat32: function (t, n, e) {
            q(this, 4, t, U, n, e);
          },
          setFloat64: function (t, n, e) {
            q(this, 8, t, B, n, e);
          },
        });
    w(_, y), w(S, x), c(S[m], a.VIEW, !0), (n[y] = _), (n[x] = S);
  },
  function (t, n) {
    var e = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = e);
  },
  function (t, n) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function (t, n, e) {
    t.exports = !e(120)(function () {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, n, e) {
    t.exports =
      !e(8) &&
      !e(2)(function () {
        return (
          7 !=
          Object.defineProperty(e(60)('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, n, e) {
    var r = e(1),
      i = e(7),
      o = e(30),
      a = e(61),
      c = e(9).f;
    t.exports = function (t) {
      var n = i.Symbol || (i.Symbol = (!o && r.Symbol) || {});
      '_' == t.charAt(0) || t in n || c(n, t, { value: a.f(t) });
    };
  },
  function (t, n, e) {
    var r = e(13),
      i = e(15),
      o = e(49)(!1),
      a = e(62)('IE_PROTO');
    t.exports = function (t, n) {
      var e,
        c = i(t),
        s = 0,
        u = [];
      for (e in c) e != a && r(c, e) && u.push(e);
      for (; n.length > s; ) r(c, (e = n[s++])) && (~o(u, e) || u.push(e));
      return u;
    };
  },
  function (t, n, e) {
    var r = e(9),
      i = e(3),
      o = e(31);
    t.exports = e(8)
      ? Object.defineProperties
      : function (t, n) {
          i(t);
          for (var e, a = o(n), c = a.length, s = 0; s < c; ) r.f(t, (e = a[s++]), n[e]);
          return t;
        };
  },
  function (t, n, e) {
    var r = e(15),
      i = e(34).f,
      o = {}.toString,
      a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return a && '[object Window]' == o.call(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(r(t));
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(8),
      i = e(31),
      o = e(50),
      a = e(45),
      c = e(10),
      s = e(44),
      u = Object.assign;
    t.exports =
      !u ||
      e(2)(function () {
        var t = {},
          n = {},
          e = Symbol(),
          r = 'abcdefghijklmnopqrst';
        return (
          (t[e] = 7),
          r.split('').forEach(function (t) {
            n[t] = t;
          }),
          7 != u({}, t)[e] || Object.keys(u({}, n)).join('') != r
        );
      })
        ? function (t, n) {
            for (var e = c(t), u = arguments.length, f = 1, l = o.f, h = a.f; f < u; )
              for (var d, v = s(arguments[f++]), p = l ? i(v).concat(l(v)) : i(v), g = p.length, w = 0; w < g; )
                (d = p[w++]), (r && !h.call(v, d)) || (e[d] = v[d]);
            return e;
          }
        : u;
  },
  function (t, n) {
    t.exports =
      Object.is ||
      function (t, n) {
        return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
      };
  },
  function (t, n, e) {
    'use strict';
    var r = e(18),
      i = e(4),
      o = e(96),
      a = [].slice,
      c = {};
    t.exports =
      Function.bind ||
      function (t) {
        var n = r(this),
          e = a.call(arguments, 1),
          s = function () {
            var r = e.concat(a.call(arguments));
            return this instanceof s
              ? (function (t, n, e) {
                  if (!(n in c)) {
                    for (var r = [], i = 0; i < n; i++) r[i] = 'a[' + i + ']';
                    c[n] = Function('F,a', 'return new F(' + r.join(',') + ')');
                  }
                  return c[n](t, e);
                })(n, r.length, r)
              : o(n, r, t);
          };
        return i(n.prototype) && (s.prototype = n.prototype), s;
      };
  },
  function (t, n) {
    t.exports = function (t, n, e) {
      var r = void 0 === e;
      switch (n.length) {
        case 0:
          return r ? t() : t.call(e);
        case 1:
          return r ? t(n[0]) : t.call(e, n[0]);
        case 2:
          return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
        case 3:
          return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
        case 4:
          return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
      }
      return t.apply(e, n);
    };
  },
  function (t, n, e) {
    var r = e(1).parseInt,
      i = e(39).trim,
      o = e(66),
      a = /^[-+]?0[xX]/;
    t.exports =
      8 !== r(o + '08') || 22 !== r(o + '0x16')
        ? function (t, n) {
            var e = i(String(t), 3);
            return r(e, n >>> 0 || (a.test(e) ? 16 : 10));
          }
        : r;
  },
  function (t, n, e) {
    var r = e(1).parseFloat,
      i = e(39).trim;
    t.exports =
      1 / r(e(66) + '-0') != -1 / 0
        ? function (t) {
            var n = i(String(t), 3),
              e = r(n);
            return 0 === e && '-' == n.charAt(0) ? -0 : e;
          }
        : r;
  },
  function (t, n, e) {
    var r = e(23);
    t.exports = function (t, n) {
      if ('number' != typeof t && 'Number' != r(t)) throw TypeError(n);
      return +t;
    };
  },
  function (t, n, e) {
    var r = e(4),
      i = Math.floor;
    t.exports = function (t) {
      return !r(t) && isFinite(t) && i(t) === t;
    };
  },
  function (t, n) {
    t.exports =
      Math.log1p ||
      function (t) {
        return -1e-8 < (t = +t) && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
      };
  },
  function (t, n, e) {
    'use strict';
    var r = e(33),
      i = e(28),
      o = e(38),
      a = {};
    e(14)(a, e(5)('iterator'), function () {
      return this;
    }),
      (t.exports = function (t, n, e) {
        (t.prototype = r(a, { next: i(1, e) })), o(t, n + ' Iterator');
      });
  },
  function (t, n, e) {
    var r = e(3);
    t.exports = function (t, n, e, i) {
      try {
        return i ? n(r(e)[0], e[1]) : n(e);
      } catch (n) {
        var o = t.return;
        throw (void 0 !== o && r(o.call(t)), n);
      }
    };
  },
  function (t, n, e) {
    var r = e(216);
    t.exports = function (t, n) {
      return new (r(t))(n);
    };
  },
  function (t, n, e) {
    var r = e(18),
      i = e(10),
      o = e(44),
      a = e(6);
    t.exports = function (t, n, e, c, s) {
      r(n);
      var u = i(t),
        f = o(u),
        l = a(u.length),
        h = s ? l - 1 : 0,
        d = s ? -1 : 1;
      if (e < 2)
        for (;;) {
          if (h in f) {
            (c = f[h]), (h += d);
            break;
          }
          if (((h += d), s ? h < 0 : l <= h)) throw TypeError('Reduce of empty array with no initial value');
        }
      for (; s ? 0 <= h : h < l; h += d) h in f && (c = n(c, f[h], h, u));
      return c;
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(10),
      i = e(32),
      o = e(6);
    t.exports =
      [].copyWithin ||
      function (t, n, e) {
        var a = r(this),
          c = o(a.length),
          s = i(t, c),
          u = i(n, c),
          f = 2 < arguments.length ? e : void 0,
          l = Math.min((void 0 === f ? c : i(f, c)) - u, c - s),
          h = 1;
        for (u < s && s < u + l && ((h = -1), (u += l - 1), (s += l - 1)); 0 < l--; )
          u in a ? (a[s] = a[u]) : delete a[s], (s += h), (u += h);
        return a;
      };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return { value: n, done: !!t };
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(81);
    e(0)({ target: 'RegExp', proto: !0, forced: r !== /./.exec }, { exec: r });
  },
  function (t, n, e) {
    e(8) && 'g' != /./g.flags && e(9).f(RegExp.prototype, 'flags', { configurable: !0, get: e(53) });
  },
  function (t, n, e) {
    'use strict';
    function r() {}
    function i(t) {
      var n;
      return !(!g(t) || 'function' != typeof (n = t.then)) && n;
    }
    function o(t, n) {
      var e;
      t._n ||
        ((t._n = !0),
        (e = t._c),
        _(function () {
          for (
            var r = t._v,
              o = 1 == t._s,
              a = 0,
              c = function (n) {
                var e,
                  a,
                  c,
                  s = o ? n.ok : n.fail,
                  u = n.resolve,
                  f = n.reject,
                  l = n.domain;
                try {
                  s
                    ? (o || (2 == t._h && L(t), (t._h = 1)),
                      !0 === s ? (e = r) : (l && l.enter(), (e = s(r)), l && (l.exit(), (c = !0))),
                      e === n.promise ? f(P('Promise-chain cycle')) : (a = i(e)) ? a.call(e, u, f) : u(e))
                    : f(r);
                } catch (n) {
                  l && !c && l.exit(), f(n);
                }
              };
            e.length > a;

          )
            c(e[a++]);
          (t._c = []), (t._n = !1), n && !t._h && $(t);
        }));
    }
    function a(t) {
      var n = this;
      n._d || ((n._d = !0), ((n = n._w || n)._v = t), (n._s = 2), n._a || (n._a = n._c.slice()), o(n, !0));
    }
    var c,
      s,
      u,
      f,
      l = e(30),
      h = e(1),
      d = e(17),
      v = e(46),
      p = e(0),
      g = e(4),
      w = e(18),
      y = e(42),
      x = e(56),
      m = e(47),
      b = e(83).set,
      _ = e(236)(),
      S = e(111),
      M = e(237),
      O = e(57),
      E = e(112),
      C = 'Promise',
      P = h.TypeError,
      j = h.process,
      F = j && j.versions,
      T = (F && F.v8) || '',
      k = h[C],
      I = 'process' == v(j),
      A = (s = S.f),
      V = !!(function () {
        try {
          var t = k.resolve(1),
            n = ((t.constructor = {})[e(5)('species')] = function (t) {
              t(r, r);
            });
          return (
            (I || 'function' == typeof PromiseRejectionEvent) &&
            t.then(r) instanceof n &&
            0 !== T.indexOf('6.6') &&
            -1 === O.indexOf('Chrome/66')
          );
        } catch (t) {}
      })(),
      $ = function (t) {
        b.call(h, function () {
          var n,
            e,
            r,
            i = t._v,
            o = G(t);
          if (
            (o &&
              ((n = M(function () {
                I
                  ? j.emit('unhandledRejection', i, t)
                  : (e = h.onunhandledrejection)
                  ? e({ promise: t, reason: i })
                  : (r = h.console) && r.error && r.error('Unhandled promise rejection', i);
              })),
              (t._h = I || G(t) ? 2 : 1)),
            (t._a = void 0),
            o && n.e)
          )
            throw n.v;
        });
      },
      G = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      L = function (t) {
        b.call(h, function () {
          var n;
          I ? j.emit('rejectionHandled', t) : (n = h.onrejectionhandled) && n({ promise: t, reason: t._v });
        });
      },
      N = function (t) {
        var n,
          e = this;
        if (!e._d) {
          (e._d = !0), (e = e._w || e);
          try {
            if (e === t) throw P("Promise can't be resolved itself");
            (n = i(t))
              ? _(function () {
                  var r = { _w: e, _d: !1 };
                  try {
                    n.call(t, d(N, r, 1), d(a, r, 1));
                  } catch (t) {
                    a.call(r, t);
                  }
                })
              : ((e._v = t), (e._s = 1), o(e, !1));
          } catch (t) {
            a.call({ _w: e, _d: !1 }, t);
          }
        }
      };
    V ||
      ((k = function (t) {
        y(this, k, C, '_h'), w(t), c.call(this);
        try {
          t(d(N, this, 1), d(a, this, 1));
        } catch (t) {
          a.call(this, t);
        }
      }),
      ((c = function () {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = e(43)(k.prototype, {
        then: function (t, n) {
          var e = A(m(this, k));
          return (
            (e.ok = 'function' != typeof t || t),
            (e.fail = 'function' == typeof n && n),
            (e.domain = I ? j.domain : void 0),
            this._c.push(e),
            this._a && this._a.push(e),
            this._s && o(this, !1),
            e.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (u = function () {
        var t = new c();
        (this.promise = t), (this.resolve = d(N, t, 1)), (this.reject = d(a, t, 1));
      }),
      (S.f = A =
        function (t) {
          return t === k || t === f ? new u() : s(t);
        })),
      p(p.G + p.W + p.F * !V, { Promise: k }),
      e(38)(k, C),
      e(41)(C),
      (f = e(7)[C]),
      p(p.S + p.F * !V, C, {
        reject: function (t) {
          var n = A(this);
          return (0, n.reject)(t), n.promise;
        },
      }),
      p(p.S + p.F * (l || !V), C, {
        resolve: function (t) {
          return E(l && this === f ? k : this, t);
        },
      }),
      p(
        p.S +
          p.F *
            !(
              V &&
              e(52)(function (t) {
                k.all(t).catch(r);
              })
            ),
        C,
        {
          all: function (t) {
            var n = this,
              e = A(n),
              r = e.resolve,
              i = e.reject,
              o = M(function () {
                var e = [],
                  o = 0,
                  a = 1;
                x(t, !1, function (t) {
                  var c = o++,
                    s = !1;
                  e.push(void 0),
                    a++,
                    n.resolve(t).then(function (t) {
                      s || ((s = !0), (e[c] = t), --a || r(e));
                    }, i);
                }),
                  --a || r(e);
              });
            return o.e && i(o.v), e.promise;
          },
          race: function (t) {
            var n = this,
              e = A(n),
              r = e.reject,
              i = M(function () {
                x(t, !1, function (t) {
                  n.resolve(t).then(e.resolve, r);
                });
              });
            return i.e && r(i.v), e.promise;
          },
        }
      );
  },
  function (t, n, e) {
    'use strict';
    var r = e(18);
    function i(t) {
      var n, e;
      (this.promise = new t(function (t, r) {
        if (void 0 !== n || void 0 !== e) throw TypeError('Bad Promise constructor');
        (n = t), (e = r);
      })),
        (this.resolve = r(n)),
        (this.reject = r(e));
    }
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, n, e) {
    var r = e(3),
      i = e(4),
      o = e(111);
    t.exports = function (t, n) {
      if ((r(t), i(n) && n.constructor === t)) return n;
      var e = o.f(t);
      return (0, e.resolve)(n), e.promise;
    };
  },
  function (t, n, e) {
    'use strict';
    function r(t, n) {
      var e,
        r = v(n);
      if ('F' !== r) return t._i[r];
      for (e = t._f; e; e = e.n) if (e.k == n) return e;
    }
    var i = e(9).f,
      o = e(33),
      a = e(43),
      c = e(17),
      s = e(42),
      u = e(56),
      f = e(72),
      l = e(107),
      h = e(41),
      d = e(8),
      v = e(27).fastKey,
      p = e(37),
      g = d ? '_s' : 'size';
    t.exports = {
      getConstructor: function (t, n, e, f) {
        var l = t(function (t, r) {
          s(t, l, n, '_i'),
            (t._t = n),
            (t._i = o(null)),
            (t._f = void 0),
            (t._l = void 0),
            (t[g] = 0),
            null != r && u(r, e, t[f], t);
        });
        return (
          a(l.prototype, {
            clear: function () {
              for (var t = p(this, n), e = t._i, r = t._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
              (t._f = t._l = void 0), (t[g] = 0);
            },
            delete: function (t) {
              var e,
                i,
                o = p(this, n),
                a = r(o, t);
              return (
                a &&
                  ((e = a.n),
                  (i = a.p),
                  delete o._i[a.i],
                  (a.r = !0),
                  i && (i.n = e),
                  e && (e.p = i),
                  o._f == a && (o._f = e),
                  o._l == a && (o._l = i),
                  o[g]--),
                !!a
              );
            },
            forEach: function (t, e) {
              p(this, n);
              for (var r, i = c(t, 1 < arguments.length ? e : void 0, 3); (r = r ? r.n : this._f); )
                for (i(r.v, r.k, this); r && r.r; ) r = r.p;
            },
            has: function (t) {
              return !!r(p(this, n), t);
            },
          }),
          d &&
            i(l.prototype, 'size', {
              get: function () {
                return p(this, n)[g];
              },
            }),
          l
        );
      },
      def: function (t, n, e) {
        var i,
          o,
          a = r(t, n);
        return (
          a
            ? (a.v = e)
            : ((t._l = a = { i: (o = v(n, !0)), k: n, v: e, p: (i = t._l), n: void 0, r: !1 }),
              t._f || (t._f = a),
              i && (i.n = a),
              t[g]++,
              'F' !== o && (t._i[o] = a)),
          t
        );
      },
      getEntry: r,
      setStrong: function (t, n, e) {
        f(
          t,
          n,
          function (t, e) {
            (this._t = p(t, n)), (this._k = e), (this._l = void 0);
          },
          function () {
            for (var t = this, n = t._k, e = t._l; e && e.r; ) e = e.p;
            return t._t && (t._l = e = e ? e.n : t._t._f)
              ? l(0, 'keys' == n ? e.k : 'values' == n ? e.v : [e.k, e.v])
              : ((t._t = void 0), l(1));
          },
          e ? 'entries' : 'values',
          !e,
          !0
        ),
          h(n);
      },
    };
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      return t._l || (t._l = new w());
    }
    function i(t, n) {
      return v(t.a, function (t) {
        return t[0] === n;
      });
    }
    var o = e(43),
      a = e(27).getWeak,
      c = e(3),
      s = e(4),
      u = e(42),
      f = e(56),
      l = e(22),
      h = e(13),
      d = e(37),
      v = l(5),
      p = l(6),
      g = 0,
      w = function () {
        this.a = [];
      };
    (w.prototype = {
      get: function (t) {
        var n = i(this, t);
        if (n) return n[1];
      },
      has: function (t) {
        return !!i(this, t);
      },
      set: function (t, n) {
        var e = i(this, t);
        e ? (e[1] = n) : this.a.push([t, n]);
      },
      delete: function (t) {
        var n = p(this.a, function (n) {
          return n[0] === t;
        });
        return ~n && this.a.splice(n, 1), !!~n;
      },
    }),
      (t.exports = {
        getConstructor: function (t, n, e, i) {
          var c = t(function (t, r) {
            u(t, c, n, '_i'), (t._t = n), (t._i = g++), (t._l = void 0), null != r && f(r, e, t[i], t);
          });
          return (
            o(c.prototype, {
              delete: function (t) {
                if (!s(t)) return !1;
                var e = a(t);
                return !0 === e ? r(d(this, n)).delete(t) : e && h(e, this._i) && delete e[this._i];
              },
              has: function (t) {
                if (!s(t)) return !1;
                var e = a(t);
                return !0 === e ? r(d(this, n)).has(t) : e && h(e, this._i);
              },
            }),
            c
          );
        },
        def: function (t, n, e) {
          var i = a(c(n), !0);
          return !0 === i ? r(t).set(n, e) : (i[t._i] = e), t;
        },
        ufstore: r,
      });
  },
  function (t, n, e) {
    var r = e(19),
      i = e(6);
    t.exports = function (t) {
      if (void 0 === t) return 0;
      var n = r(t),
        e = i(n);
      if (n !== e) throw RangeError('Wrong length!');
      return e;
    };
  },
  function (t, n, e) {
    var r = e(34),
      i = e(50),
      o = e(3),
      a = e(1).Reflect;
    t.exports =
      (a && a.ownKeys) ||
      function (t) {
        var n = r.f(o(t)),
          e = i.f;
        return e ? n.concat(e(t)) : n;
      };
  },
  function (t, n, e) {
    var r = e(6),
      i = e(68),
      o = e(24);
    t.exports = function (t, n, e, a) {
      var c = String(o(t)),
        s = c.length,
        u = void 0 === e ? ' ' : String(e),
        f = r(n);
      if (f <= s || '' == u) return c;
      var l = f - s,
        h = i.call(u, Math.ceil(l / u.length));
      return h.length > l && (h = h.slice(0, l)), a ? h + c : c + h;
    };
  },
  function (t, n, e) {
    var r = e(8),
      i = e(31),
      o = e(15),
      a = e(45).f;
    t.exports = function (t) {
      return function (n) {
        for (var e, c = o(n), s = i(c), u = s.length, f = 0, l = []; f < u; )
          (e = s[f++]), (r && !a.call(c, e)) || l.push(t ? [e, c[e]] : c[e]);
        return l;
      };
    };
  },
  function (t, n) {
    var e = (t.exports = { version: '2.6.11' });
    'number' == typeof __e && (__e = e);
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, n, e) {
    e(122), (t.exports = e(308));
  },
  function (t, n, e) {
    'use strict';
    e(123);
    var r,
      i = (r = e(295)) && r.__esModule ? r : { default: r };
    i.default._babelPolyfill &&
      'undefined' != typeof console &&
      console.warn &&
      console.warn(
        '@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once,use @babel/polyfill/noConflict instead to bypass the warning.'
      ),
      (i.default._babelPolyfill = !0);
  },
  function (t, n, e) {
    'use strict';
    e(124), e(267), e(269), e(272), e(274), e(276), e(278), e(280), e(282), e(284), e(286), e(288), e(290), e(294);
  },
  function (t, n, e) {
    e(125),
      e(128),
      e(129),
      e(130),
      e(131),
      e(132),
      e(133),
      e(134),
      e(135),
      e(136),
      e(137),
      e(138),
      e(139),
      e(140),
      e(141),
      e(142),
      e(143),
      e(144),
      e(145),
      e(146),
      e(147),
      e(148),
      e(149),
      e(150),
      e(151),
      e(152),
      e(153),
      e(154),
      e(155),
      e(156),
      e(157),
      e(158),
      e(159),
      e(160),
      e(161),
      e(162),
      e(163),
      e(164),
      e(165),
      e(166),
      e(167),
      e(168),
      e(169),
      e(171),
      e(172),
      e(173),
      e(174),
      e(175),
      e(176),
      e(177),
      e(178),
      e(179),
      e(180),
      e(181),
      e(182),
      e(183),
      e(184),
      e(185),
      e(186),
      e(187),
      e(188),
      e(189),
      e(190),
      e(191),
      e(192),
      e(193),
      e(194),
      e(195),
      e(196),
      e(197),
      e(198),
      e(199),
      e(200),
      e(201),
      e(202),
      e(203),
      e(204),
      e(206),
      e(207),
      e(209),
      e(210),
      e(211),
      e(212),
      e(213),
      e(214),
      e(215),
      e(217),
      e(218),
      e(219),
      e(220),
      e(221),
      e(222),
      e(223),
      e(224),
      e(225),
      e(226),
      e(227),
      e(228),
      e(229),
      e(80),
      e(230),
      e(108),
      e(231),
      e(109),
      e(232),
      e(233),
      e(234),
      e(235),
      e(110),
      e(238),
      e(239),
      e(240),
      e(241),
      e(242),
      e(243),
      e(244),
      e(245),
      e(246),
      e(247),
      e(248),
      e(249),
      e(250),
      e(251),
      e(252),
      e(253),
      e(254),
      e(255),
      e(256),
      e(257),
      e(258),
      e(259),
      e(260),
      e(261),
      e(262),
      e(263),
      e(264),
      e(265),
      e(266),
      (t.exports = e(7));
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      var n = (H[t] = F(N[X]));
      return (n._k = t), n;
    }
    function i(t, n) {
      M(t);
      for (var e, r = _((n = C(n))), i = 0, o = r.length; i < o; ) nt(t, (e = r[i++]), n[e]);
      return t;
    }
    function o(t) {
      var n = U.call(this, (t = P(t, !0)));
      return (
        !(this === J && f(H, t) && !f(q, t)) && (!(n || !f(this, t) || !f(H, t) || (f(this, z) && this[z][t])) || n)
      );
    }
    function a(t, n) {
      if (((t = C(t)), (n = P(n, !0)), t !== J || !f(H, n) || f(q, n))) {
        var e = $(t, n);
        return !e || !f(H, n) || (f(t, z) && t[z][n]) || (e.enumerable = !0), e;
      }
    }
    function c(t) {
      for (var n, e = L(C(t)), r = [], i = 0; e.length > i; ) f(H, (n = e[i++])) || n == z || n == v || r.push(n);
      return r;
    }
    function s(t) {
      for (var n, e = t === J, r = L(e ? q : C(t)), i = [], o = 0; r.length > o; )
        !f(H, (n = r[o++])) || (e && !f(J, n)) || i.push(H[n]);
      return i;
    }
    var u = e(1),
      f = e(13),
      l = e(8),
      h = e(0),
      d = e(11),
      v = e(27).KEY,
      p = e(2),
      g = e(48),
      w = e(38),
      y = e(29),
      x = e(5),
      m = e(61),
      b = e(89),
      _ = e(127),
      S = e(51),
      M = e(3),
      O = e(4),
      E = e(10),
      C = e(15),
      P = e(26),
      j = e(28),
      F = e(33),
      T = e(92),
      k = e(20),
      I = e(50),
      A = e(9),
      V = e(31),
      $ = k.f,
      G = A.f,
      L = T.f,
      N = u.Symbol,
      R = u.JSON,
      D = R && R.stringify,
      X = 'prototype',
      z = x('_hidden'),
      B = x('toPrimitive'),
      U = {}.propertyIsEnumerable,
      W = g('symbol-registry'),
      H = g('symbols'),
      q = g('op-symbols'),
      J = Object[X],
      Y = 'function' == typeof N && !!I.f,
      K = u.QObject,
      Z = !K || !K[X] || !K[X].findChild,
      Q =
        l &&
        p(function () {
          return (
            7 !=
            F(
              G({}, 'a', {
                get: function () {
                  return G(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, n, e) {
              var r = $(J, n);
              r && delete J[n], G(t, n, e), r && t !== J && G(J, n, r);
            }
          : G,
      tt =
        Y && 'symbol' == typeof N.iterator
          ? function (t) {
              return 'symbol' == typeof t;
            }
          : function (t) {
              return t instanceof N;
            },
      nt = function (t, n, e) {
        return (
          t === J && nt(q, n, e),
          M(t),
          (n = P(n, !0)),
          M(e),
          f(H, n)
            ? (e.enumerable
                ? (f(t, z) && t[z][n] && (t[z][n] = !1), (e = F(e, { enumerable: j(0, !1) })))
                : (f(t, z) || G(t, z, j(1, {})), (t[z][n] = !0)),
              Q(t, n, e))
            : G(t, n, e)
        );
      };
    Y ||
      (d(
        (N = function (t) {
          if (this instanceof N) throw TypeError('Symbol is not a constructor!');
          var n = y(0 < arguments.length ? t : void 0),
            e = function (t) {
              this === J && e.call(q, t), f(this, z) && f(this[z], n) && (this[z][n] = !1), Q(this, n, j(1, t));
            };
          return l && Z && Q(J, n, { configurable: !0, set: e }), r(n);
        })[X],
        'toString',
        function () {
          return this._k;
        }
      ),
      (k.f = a),
      (A.f = nt),
      (e(34).f = T.f = c),
      (e(45).f = o),
      (I.f = s),
      l && !e(30) && d(J, 'propertyIsEnumerable', o, !0),
      (m.f = function (t) {
        return r(x(t));
      })),
      h(h.G + h.W + h.F * !Y, { Symbol: N });
    for (
      var et =
          'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
        rt = 0;
      et.length > rt;

    )
      x(et[rt++]);
    for (var it = V(x.store), ot = 0; it.length > ot; ) b(it[ot++]);
    h(h.S + h.F * !Y, 'Symbol', {
      for: function (t) {
        return f(W, (t += '')) ? W[t] : (W[t] = N(t));
      },
      keyFor: function (t) {
        if (!tt(t)) throw TypeError(t + ' is not a symbol!');
        for (var n in W) if (W[n] === t) return n;
      },
      useSetter: function () {
        Z = !0;
      },
      useSimple: function () {
        Z = !1;
      },
    }),
      h(h.S + h.F * !Y, 'Object', {
        create: function (t, n) {
          return void 0 === n ? F(t) : i(F(t), n);
        },
        defineProperty: nt,
        defineProperties: i,
        getOwnPropertyDescriptor: a,
        getOwnPropertyNames: c,
        getOwnPropertySymbols: s,
      });
    var at = p(function () {
      I.f(1);
    });
    h(h.S + h.F * at, 'Object', {
      getOwnPropertySymbols: function (t) {
        return I.f(E(t));
      },
    }),
      R &&
        h(
          h.S +
            h.F *
              (!Y ||
                p(function () {
                  var t = N();
                  return '[null]' != D([t]) || '{}' != D({ a: t }) || '{}' != D(Object(t));
                })),
          'JSON',
          {
            stringify: function (t) {
              for (var n, e, r = [t], i = 1; i < arguments.length; ) r.push(arguments[i++]);
              if (((e = n = r[1]), (O(n) || void 0 !== t) && !tt(t)))
                return (
                  S(n) ||
                    (n = function (t, n) {
                      if (('function' == typeof e && (n = e.call(this, t, n)), !tt(n))) return n;
                    }),
                  (r[1] = n),
                  D.apply(R, r)
                );
            },
          }
        ),
      N[X][B] || e(14)(N[X], B, N[X].valueOf),
      w(N, 'Symbol'),
      w(Math, 'Math', !0),
      w(u.JSON, 'JSON', !0);
  },
  function (t, n, e) {
    t.exports = e(48)('native-function-to-string', Function.toString);
  },
  function (t, n, e) {
    var r = e(31),
      i = e(50),
      o = e(45);
    t.exports = function (t) {
      var n = r(t),
        e = i.f;
      if (e) for (var a, c = e(t), s = o.f, u = 0; c.length > u; ) s.call(t, (a = c[u++])) && n.push(a);
      return n;
    };
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Object', { create: e(33) });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S + r.F * !e(8), 'Object', { defineProperty: e(9).f });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S + r.F * !e(8), 'Object', { defineProperties: e(91) });
  },
  function (t, n, e) {
    var r = e(15),
      i = e(20).f;
    e(21)('getOwnPropertyDescriptor', function () {
      return function (t, n) {
        return i(r(t), n);
      };
    });
  },
  function (t, n, e) {
    var r = e(10),
      i = e(35);
    e(21)('getPrototypeOf', function () {
      return function (t) {
        return i(r(t));
      };
    });
  },
  function (t, n, e) {
    var r = e(10),
      i = e(31);
    e(21)('keys', function () {
      return function (t) {
        return i(r(t));
      };
    });
  },
  function (t, n, e) {
    e(21)('getOwnPropertyNames', function () {
      return e(92).f;
    });
  },
  function (t, n, e) {
    var r = e(4),
      i = e(27).onFreeze;
    e(21)('freeze', function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n;
      };
    });
  },
  function (t, n, e) {
    var r = e(4),
      i = e(27).onFreeze;
    e(21)('seal', function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n;
      };
    });
  },
  function (t, n, e) {
    var r = e(4),
      i = e(27).onFreeze;
    e(21)('preventExtensions', function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n;
      };
    });
  },
  function (t, n, e) {
    var r = e(4);
    e(21)('isFrozen', function (t) {
      return function (n) {
        return !r(n) || (!!t && t(n));
      };
    });
  },
  function (t, n, e) {
    var r = e(4);
    e(21)('isSealed', function (t) {
      return function (n) {
        return !r(n) || (!!t && t(n));
      };
    });
  },
  function (t, n, e) {
    var r = e(4);
    e(21)('isExtensible', function (t) {
      return function (n) {
        return !!r(n) && (!t || t(n));
      };
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S + r.F, 'Object', { assign: e(93) });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Object', { is: e(94) });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Object', { setPrototypeOf: e(65).set });
  },
  function (t, n, e) {
    'use strict';
    var r = e(46),
      i = {};
    (i[e(5)('toStringTag')] = 'z'),
      i + '' != '[object z]' &&
        e(11)(
          Object.prototype,
          'toString',
          function () {
            return '[object ' + r(this) + ']';
          },
          !0
        );
  },
  function (t, n, e) {
    var r = e(0);
    r(r.P, 'Function', { bind: e(95) });
  },
  function (t, n, e) {
    var r = e(9).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    'name' in i ||
      (e(8) &&
        r(i, 'name', {
          configurable: !0,
          get: function () {
            try {
              return ('' + this).match(o)[1];
            } catch (t) {
              return '';
            }
          },
        }));
  },
  function (t, n, e) {
    'use strict';
    var r = e(4),
      i = e(35),
      o = e(5)('hasInstance'),
      a = Function.prototype;
    o in a ||
      e(9).f(a, o, {
        value: function (t) {
          if ('function' != typeof this || !r(t)) return !1;
          if (!r(this.prototype)) return t instanceof this;
          for (; (t = i(t)); ) if (this.prototype === t) return !0;
          return !1;
        },
      });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(97);
    r(r.G + r.F * (parseInt != i), { parseInt: i });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(98);
    r(r.G + r.F * (parseFloat != i), { parseFloat: i });
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      var n = s(t, !1);
      if ('string' == typeof n && 2 < n.length) {
        var e,
          r,
          i,
          o = (n = x ? n.trim() : d(n, 3)).charCodeAt(0);
        if (43 === o || 45 === o) {
          if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN;
        } else if (48 === o) {
          switch (n.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +n;
          }
          for (var a, c = n.slice(2), u = 0, f = c.length; u < f; u++)
            if ((a = c.charCodeAt(u)) < 48 || i < a) return NaN;
          return parseInt(c, r);
        }
      }
      return +n;
    }
    var i = e(1),
      o = e(13),
      a = e(23),
      c = e(67),
      s = e(26),
      u = e(2),
      f = e(34).f,
      l = e(20).f,
      h = e(9).f,
      d = e(39).trim,
      v = 'Number',
      p = i[v],
      g = p,
      w = p.prototype,
      y = a(e(33)(w)) == v,
      x = 'trim' in String.prototype;
    if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
      p = function (t) {
        var n = arguments.length < 1 ? 0 : t,
          e = this;
        return e instanceof p &&
          (y
            ? u(function () {
                w.valueOf.call(e);
              })
            : a(e) != v)
          ? c(new g(r(n)), e, p)
          : r(n);
      };
      for (
        var m,
          b = e(8)
            ? f(g)
            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                ','
              ),
          _ = 0;
        b.length > _;
        _++
      )
        o(g, (m = b[_])) && !o(p, m) && h(p, m, l(g, m));
      ((p.prototype = w).constructor = p), e(11)(i, v, p);
    }
  },
  function (t, n, e) {
    'use strict';
    function r(t, n) {
      for (var e = -1, r = n; ++e < 6; ) (r += t * h[e]), (h[e] = r % 1e7), (r = l(r / 1e7));
    }
    function i(t) {
      for (var n = 6, e = 0; 0 <= --n; ) (e += h[n]), (h[n] = l(e / t)), (e = (e % t) * 1e7);
    }
    function o() {
      for (var t, n = 6, e = ''; 0 <= --n; )
        ('' === e && 0 !== n && 0 === h[n]) ||
          ((t = String(h[n])), (e = '' === e ? t : e + u.call('0', 7 - t.length) + t));
      return e;
    }
    var a = e(0),
      c = e(19),
      s = e(99),
      u = e(68),
      f = (1).toFixed,
      l = Math.floor,
      h = [0, 0, 0, 0, 0, 0],
      d = 'Number.toFixed:incorrect invocation!',
      v = function (t, n, e) {
        return 0 === n ? e : n % 2 == 1 ? v(t, n - 1, e * t) : v(t * t, n / 2, e);
      };
    a(
      a.P +
        a.F *
          ((!!f &&
            ('0.000' !== (8e-5).toFixed(3) ||
              '1' !== (0.9).toFixed(0) ||
              '1.25' !== (1.255).toFixed(2) ||
              '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
            !e(2)(function () {
              f.call({});
            })),
      'Number',
      {
        toFixed: function (t) {
          var n,
            e,
            a,
            f,
            l = s(this, d),
            h = c(t),
            p = '',
            g = '0';
          if (h < 0 || 20 < h) throw RangeError(d);
          if (l != l) return 'NaN';
          if (l <= -1e21 || 1e21 <= l) return String(l);
          if ((l < 0 && ((p = '-'), (l = -l)), 1e-21 < l))
            if (
              ((e =
                (n =
                  (function (t) {
                    for (var n = 0, e = t; 4096 <= e; ) (n += 12), (e /= 4096);
                    for (; 2 <= e; ) (n += 1), (e /= 2);
                    return n;
                  })(l * v(2, 69, 1)) - 69) < 0
                  ? l * v(2, -n, 1)
                  : l / v(2, n, 1)),
              (e *= 4503599627370496),
              0 < (n = 52 - n))
            ) {
              for (r(0, e), a = h; 7 <= a; ) r(1e7, 0), (a -= 7);
              for (r(v(10, a, 1), 0), a = n - 1; 23 <= a; ) i(1 << 23), (a -= 23);
              i(1 << a), r(1, 1), i(2), (g = o());
            } else r(0, e), r(1 << -n, 0), (g = o() + u.call('0', h));
          return 0 < h
            ? p + ((f = g.length) <= h ? '0.' + u.call('0', h - f) + g : g.slice(0, f - h) + '.' + g.slice(f - h))
            : p + g;
        },
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(2),
      o = e(99),
      a = (1).toPrecision;
    r(
      r.P +
        r.F *
          (i(function () {
            return '1' !== a.call(1, void 0);
          }) ||
            !i(function () {
              a.call({});
            })),
      'Number',
      {
        toPrecision: function (t) {
          var n = o(this, 'Number#toPrecision:incorrect invocation!');
          return void 0 === t ? a.call(n) : a.call(n, t);
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Number', { EPSILON: Math.pow(2, -52) });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(1).isFinite;
    r(r.S, 'Number', {
      isFinite: function (t) {
        return 'number' == typeof t && i(t);
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Number', { isInteger: e(100) });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Number', {
      isNaN: function (t) {
        return t != t;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(100),
      o = Math.abs;
    r(r.S, 'Number', {
      isSafeInteger: function (t) {
        return i(t) && o(t) <= 9007199254740991;
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(98);
    r(r.S + r.F * (Number.parseFloat != i), 'Number', { parseFloat: i });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(97);
    r(r.S + r.F * (Number.parseInt != i), 'Number', { parseInt: i });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(101),
      o = Math.sqrt,
      a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), 'Math', {
      acosh: function (t) {
        return (t = +t) < 1 ? NaN : 94906265.62425156 < t ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = Math.asinh;
    r(r.S + r.F * !(i && 0 < 1 / i(0)), 'Math', {
      asinh: function t(n) {
        return isFinite((n = +n)) && 0 != n ? (n < 0 ? -t(-n) : Math.log(n + Math.sqrt(n * n + 1))) : n;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), 'Math', {
      atanh: function (t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(69);
    r(r.S, 'Math', {
      cbrt: function (t) {
        return i((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', {
      clz32: function (t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = Math.exp;
    r(r.S, 'Math', {
      cosh: function (t) {
        return (i((t = +t)) + i(-t)) / 2;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(70);
    r(r.S + r.F * (i != Math.expm1), 'Math', { expm1: i });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', { fround: e(170) });
  },
  function (t, n, e) {
    var r = e(69),
      i = Math.pow,
      o = i(2, -52),
      a = i(2, -23),
      c = i(2, 127) * (2 - a),
      s = i(2, -126);
    t.exports =
      Math.fround ||
      function (t) {
        var n,
          e,
          i = Math.abs(t),
          u = r(t);
        return i < s
          ? u * (i / s / a + 1 / o - 1 / o) * s * a
          : c < (e = (n = (1 + a / o) * i) - (n - i)) || e != e
          ? u * (1 / 0)
          : u * e;
      };
  },
  function (t, n, e) {
    var r = e(0),
      i = Math.abs;
    r(r.S, 'Math', {
      hypot: function (t, n) {
        for (var e, r, o = 0, a = 0, c = arguments.length, s = 0; a < c; )
          s < (e = i(arguments[a++])) ? ((o = o * (r = s / e) * r + 1), (s = e)) : (o += 0 < e ? (r = e / s) * r : e);
        return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(o);
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = Math.imul;
    r(
      r.S +
        r.F *
          e(2)(function () {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }),
      'Math',
      {
        imul: function (t, n) {
          var e = 65535,
            r = +t,
            i = +n,
            o = e & r,
            a = e & i;
          return 0 | (o * a + ((((e & (r >>> 16)) * a + o * (e & (i >>> 16))) << 16) >>> 0));
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', {
      log10: function (t) {
        return Math.log(t) * Math.LOG10E;
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', { log1p: e(101) });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', {
      log2: function (t) {
        return Math.log(t) / Math.LN2;
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', { sign: e(69) });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(70),
      o = Math.exp;
    r(
      r.S +
        r.F *
          e(2)(function () {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      'Math',
      {
        sinh: function (t) {
          return Math.abs((t = +t)) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0),
      i = e(70),
      o = Math.exp;
    r(r.S, 'Math', {
      tanh: function (t) {
        var n = i((t = +t)),
          e = i(-t);
        return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (o(t) + o(-t));
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Math', {
      trunc: function (t) {
        return (0 < t ? Math.floor : Math.ceil)(t);
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(32),
      o = String.fromCharCode,
      a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), 'String', {
      fromCodePoint: function (t) {
        for (var n, e = [], r = arguments.length, a = 0; a < r; ) {
          if (((n = +arguments[a++]), i(n, 1114111) !== n)) throw RangeError(n + ' is not a valid code point');
          e.push(n < 65536 ? o(n) : o(55296 + ((n -= 65536) >> 10), (n % 1024) + 56320));
        }
        return e.join('');
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(15),
      o = e(6);
    r(r.S, 'String', {
      raw: function (t) {
        for (var n = i(t.raw), e = o(n.length), r = arguments.length, a = [], c = 0; c < e; )
          a.push(String(n[c++])), c < r && a.push(String(arguments[c]));
        return a.join('');
      },
    });
  },
  function (t, n, e) {
    'use strict';
    e(39)('trim', function (t) {
      return function () {
        return t(this, 3);
      };
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(71)(!0);
    e(72)(
      String,
      'String',
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          n = this._t,
          e = this._i;
        return e >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(71)(!1);
    r(r.P, 'String', {
      codePointAt: function (t) {
        return i(this, t);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(6),
      o = e(73),
      a = 'endsWith',
      c = ''[a];
    r(r.P + r.F * e(75)(a), 'String', {
      endsWith: function (t, n) {
        var e = o(this, t, a),
          r = 1 < arguments.length ? n : void 0,
          s = i(e.length),
          u = void 0 === r ? s : Math.min(i(r), s),
          f = String(t);
        return c ? c.call(e, f, u) : e.slice(u - f.length, u) === f;
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(73),
      o = 'includes';
    r(r.P + r.F * e(75)(o), 'String', {
      includes: function (t, n) {
        return !!~i(this, t, o).indexOf(t, 1 < arguments.length ? n : void 0);
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.P, 'String', { repeat: e(68) });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(6),
      o = e(73),
      a = 'startsWith',
      c = ''[a];
    r(r.P + r.F * e(75)(a), 'String', {
      startsWith: function (t, n) {
        var e = o(this, t, a),
          r = i(Math.min(1 < arguments.length ? n : void 0, e.length)),
          s = String(t);
        return c ? c.call(e, s, r) : e.slice(r, r + s.length) === s;
      },
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('anchor', function (t) {
      return function (n) {
        return t(this, 'a', 'name', n);
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('big', function (t) {
      return function () {
        return t(this, 'big', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('blink', function (t) {
      return function () {
        return t(this, 'blink', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('bold', function (t) {
      return function () {
        return t(this, 'b', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('fixed', function (t) {
      return function () {
        return t(this, 'tt', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('fontcolor', function (t) {
      return function (n) {
        return t(this, 'font', 'color', n);
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('fontsize', function (t) {
      return function (n) {
        return t(this, 'font', 'size', n);
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('italics', function (t) {
      return function () {
        return t(this, 'i', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('link', function (t) {
      return function (n) {
        return t(this, 'a', 'href', n);
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('small', function (t) {
      return function () {
        return t(this, 'small', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('strike', function (t) {
      return function () {
        return t(this, 'strike', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('sub', function (t) {
      return function () {
        return t(this, 'sub', '', '');
      };
    });
  },
  function (t, n, e) {
    'use strict';
    e(12)('sup', function (t) {
      return function () {
        return t(this, 'sup', '', '');
      };
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Date', {
      now: function () {
        return new Date().getTime();
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(10),
      o = e(26);
    r(
      r.P +
        r.F *
          e(2)(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
      'Date',
      {
        toJSON: function () {
          var t = i(this),
            n = o(t);
          return 'number' != typeof n || isFinite(n) ? t.toISOString() : null;
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0),
      i = e(205);
    r(r.P + r.F * (Date.prototype.toISOString !== i), 'Date', { toISOString: i });
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      return 9 < t ? t : '0' + t;
    }
    var i = e(2),
      o = Date.prototype.getTime,
      a = Date.prototype.toISOString;
    t.exports =
      i(function () {
        return '0385-07-25T07:06:39.999Z' != a.call(new Date(-50000000000001));
      }) ||
      !i(function () {
        a.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(o.call(this))) throw RangeError('Invalid time value');
            var t = this,
              n = t.getUTCFullYear(),
              e = t.getUTCMilliseconds(),
              i = n < 0 ? '-' : 9999 < n ? '+' : '';
            return (
              i +
              ('00000' + Math.abs(n)).slice(i ? -6 : -4) +
              '-' +
              r(t.getUTCMonth() + 1) +
              '-' +
              r(t.getUTCDate()) +
              'T' +
              r(t.getUTCHours()) +
              ':' +
              r(t.getUTCMinutes()) +
              ':' +
              r(t.getUTCSeconds()) +
              '.' +
              (99 < e ? e : '0' + r(e)) +
              'Z'
            );
          }
        : a;
  },
  function (t, n, e) {
    var r = Date.prototype,
      i = 'Invalid Date',
      o = 'toString',
      a = r[o],
      c = r.getTime;
    new Date(NaN) + '' != i &&
      e(11)(r, o, function () {
        var t = c.call(this);
        return t == t ? a.call(this) : i;
      });
  },
  function (t, n, e) {
    var r = e(5)('toPrimitive'),
      i = Date.prototype;
    r in i || e(14)(i, r, e(208));
  },
  function (t, n, e) {
    'use strict';
    var r = e(3),
      i = e(26);
    t.exports = function (t) {
      if ('string' !== t && 'number' !== t && 'default' !== t) throw TypeError('Incorrect hint');
      return i(r(this), 'number' != t);
    };
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Array', { isArray: e(51) });
  },
  function (t, n, e) {
    'use strict';
    var r = e(17),
      i = e(0),
      o = e(10),
      a = e(103),
      c = e(76),
      s = e(6),
      u = e(77),
      f = e(78);
    i(
      i.S +
        i.F *
          !e(52)(function (t) {
            Array.from(t);
          }),
      'Array',
      {
        from: function (t, n, e) {
          var i,
            l,
            h,
            d,
            v = o(t),
            p = 'function' == typeof this ? this : Array,
            g = arguments.length,
            w = 1 < g ? n : void 0,
            y = void 0 !== w,
            x = 0,
            m = f(v);
          if ((y && (w = r(w, 2 < g ? e : void 0, 2)), null == m || (p == Array && c(m))))
            for (l = new p((i = s(v.length))); x < i; x++) u(l, x, y ? w(v[x], x) : v[x]);
          else
            for (d = m.call(v), l = new p(); !(h = d.next()).done; x++)
              u(l, x, y ? a(d, w, [h.value, x], !0) : h.value);
          return (l.length = x), l;
        },
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(77);
    r(
      r.S +
        r.F *
          e(2)(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t);
          }),
      'Array',
      {
        of: function () {
          for (var t = 0, n = arguments.length, e = new ('function' == typeof this ? this : Array)(n); t < n; )
            i(e, t, arguments[t++]);
          return (e.length = n), e;
        },
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(15),
      o = [].join;
    r(r.P + r.F * (e(44) != Object || !e(16)(o)), 'Array', {
      join: function (t) {
        return o.call(i(this), void 0 === t ? ',' : t);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(64),
      o = e(23),
      a = e(32),
      c = e(6),
      s = [].slice;
    r(
      r.P +
        r.F *
          e(2)(function () {
            i && s.call(i);
          }),
      'Array',
      {
        slice: function (t, n) {
          var e = c(this.length),
            r = o(this);
          if (((n = void 0 === n ? e : n), 'Array' == r)) return s.call(this, t, n);
          for (var i = a(t, e), u = a(n, e), f = c(u - i), l = new Array(f), h = 0; h < f; h++)
            l[h] = 'String' == r ? this.charAt(i + h) : this[i + h];
          return l;
        },
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(18),
      o = e(10),
      a = e(2),
      c = [].sort,
      s = [1, 2, 3];
    r(
      r.P +
        r.F *
          (a(function () {
            s.sort(void 0);
          }) ||
            !a(function () {
              s.sort(null);
            }) ||
            !e(16)(c)),
      'Array',
      {
        sort: function (t) {
          return void 0 === t ? c.call(o(this)) : c.call(o(this), i(t));
        },
      }
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(0),
      o = e(16)([].forEach, !0);
    r(r.P + r.F * !o, 'Array', {
      forEach: function (t, n) {
        return i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    var r = e(4),
      i = e(51),
      o = e(5)('species');
    t.exports = function (t) {
      var n;
      return (
        i(t) &&
          ('function' != typeof (n = t.constructor) || (n !== Array && !i(n.prototype)) || (n = void 0),
          r(n) && null === (n = n[o]) && (n = void 0)),
        void 0 === n ? Array : n
      );
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(1);
    r(r.P + r.F * !e(16)([].map, !0), 'Array', {
      map: function (t, n) {
        return i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(2);
    r(r.P + r.F * !e(16)([].filter, !0), 'Array', {
      filter: function (t, n) {
        return i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(3);
    r(r.P + r.F * !e(16)([].some, !0), 'Array', {
      some: function (t, n) {
        return i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(4);
    r(r.P + r.F * !e(16)([].every, !0), 'Array', {
      every: function (t, n) {
        return i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(105);
    r(r.P + r.F * !e(16)([].reduce, !0), 'Array', {
      reduce: function (t, n) {
        return i(this, t, arguments.length, n, !1);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(105);
    r(r.P + r.F * !e(16)([].reduceRight, !0), 'Array', {
      reduceRight: function (t, n) {
        return i(this, t, arguments.length, n, !0);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(49)(!1),
      o = [].indexOf,
      a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !e(16)(o)), 'Array', {
      indexOf: function (t, n) {
        return a ? o.apply(this, arguments) || 0 : i(this, t, n);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(15),
      o = e(19),
      a = e(6),
      c = [].lastIndexOf,
      s = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (s || !e(16)(c)), 'Array', {
      lastIndexOf: function (t, n) {
        if (s) return c.apply(this, arguments) || 0;
        var e = i(this),
          r = a(e.length),
          u = r - 1;
        for (1 < arguments.length && (u = Math.min(u, o(n))), u < 0 && (u = r + u); 0 <= u; u--)
          if (u in e && e[u] === t) return u || 0;
        return -1;
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.P, 'Array', { copyWithin: e(106) }), e(36)('copyWithin');
  },
  function (t, n, e) {
    var r = e(0);
    r(r.P, 'Array', { fill: e(79) }), e(36)('fill');
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(5),
      o = 'find',
      a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      r(r.P + r.F * a, 'Array', {
        find: function (t, n) {
          return i(this, t, 1 < arguments.length ? n : void 0);
        },
      }),
      e(36)(o);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(22)(6),
      o = 'findIndex',
      a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      r(r.P + r.F * a, 'Array', {
        findIndex: function (t, n) {
          return i(this, t, 1 < arguments.length ? n : void 0);
        },
      }),
      e(36)(o);
  },
  function (t, n, e) {
    e(41)('Array');
  },
  function (t, n, e) {
    var r = e(1),
      i = e(67),
      o = e(9).f,
      a = e(34).f,
      c = e(74),
      s = e(53),
      u = r.RegExp,
      f = u,
      l = u.prototype,
      h = /a/g,
      d = /a/g,
      v = new u(h) !== h;
    if (
      e(8) &&
      (!v ||
        e(2)(function () {
          return (d[e(5)('match')] = !1), u(h) != h || u(d) == d || '/a/i' != u(h, 'i');
        }))
    ) {
      function p(t) {
        t in u ||
          o(u, t, {
            configurable: !0,
            get: function () {
              return f[t];
            },
            set: function (n) {
              f[t] = n;
            },
          });
      }
      u = function (t, n) {
        var e = this instanceof u,
          r = c(t),
          o = void 0 === n;
        return !e && r && t.constructor === u && o
          ? t
          : i(
              v ? new f(r && !o ? t.source : t, n) : f((r = t instanceof u) ? t.source : t, r && o ? s.call(t) : n),
              e ? this : l,
              u
            );
      };
      for (var g = a(f), w = 0; g.length > w; ) p(g[w++]);
      ((l.constructor = u).prototype = l), e(11)(r, 'RegExp', u);
    }
    e(41)('RegExp');
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      e(11)(RegExp.prototype, c, t, !0);
    }
    e(109);
    var i = e(3),
      o = e(53),
      a = e(8),
      c = 'toString',
      s = /./[c];
    e(2)(function () {
      return '/a/b' != s.call({ source: 'a', flags: 'b' });
    })
      ? r(function () {
          var t = i(this);
          return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !a && t instanceof RegExp ? o.call(t) : void 0);
        })
      : s.name != c &&
        r(function () {
          return s.call(this);
        });
  },
  function (t, n, e) {
    'use strict';
    var r = e(3),
      i = e(6),
      o = e(82),
      a = e(54);
    e(55)('match', 1, function (t, n, e, c) {
      return [
        function (e) {
          var r = t(this),
            i = null == e ? void 0 : e[n];
          return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r));
        },
        function (t) {
          var n = c(e, t, this);
          if (n.done) return n.value;
          var s = r(t),
            u = String(this);
          if (!s.global) return a(s, u);
          for (var f, l = s.unicode, h = [], d = (s.lastIndex = 0); null !== (f = a(s, u)); ) {
            var v = String(f[0]);
            '' === (h[d] = v) && (s.lastIndex = o(u, i(s.lastIndex), l)), d++;
          }
          return 0 === d ? null : h;
        },
      ];
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(3),
      i = e(10),
      o = e(6),
      a = e(19),
      c = e(82),
      s = e(54),
      u = Math.max,
      f = Math.min,
      l = Math.floor,
      h = /\$([$&`']|\d\d?|<[^>]*>)/g,
      d = /\$([$&`']|\d\d?)/g;
    e(55)('replace', 2, function (t, n, e, v) {
      return [
        function (r, i) {
          var o = t(this),
            a = null == r ? void 0 : r[n];
          return void 0 !== a ? a.call(r, o, i) : e.call(String(o), r, i);
        },
        function (t, n) {
          var i = v(e, t, this, n);
          if (i.done) return i.value;
          var l = r(t),
            h = String(this),
            d = 'function' == typeof n;
          d || (n = String(n));
          var g,
            w = l.global;
          w && ((g = l.unicode), (l.lastIndex = 0));
          for (var y = []; ; ) {
            var x = s(l, h);
            if (null === x) break;
            if ((y.push(x), !w)) break;
            '' === String(x[0]) && (l.lastIndex = c(h, o(l.lastIndex), g));
          }
          for (var m, b = '', _ = 0, S = 0; S < y.length; S++) {
            x = y[S];
            for (var M = String(x[0]), O = u(f(a(x.index), h.length), 0), E = [], C = 1; C < x.length; C++)
              E.push(void 0 === (m = x[C]) ? m : String(m));
            var P,
              j = x.groups,
              F = d
                ? ((P = [M].concat(E, O, h)), void 0 !== j && P.push(j), String(n.apply(void 0, P)))
                : p(M, h, O, E, j, n);
            _ <= O && ((b += h.slice(_, O) + F), (_ = O + M.length));
          }
          return b + h.slice(_);
        },
      ];
      function p(t, n, r, o, a, c) {
        var s = r + t.length,
          u = o.length,
          f = d;
        return (
          void 0 !== a && ((a = i(a)), (f = h)),
          e.call(c, f, function (e, i) {
            var c;
            switch (i.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return t;
              case '`':
                return n.slice(0, r);
              case "'":
                return n.slice(s);
              case '<':
                c = a[i.slice(1, -1)];
                break;
              default:
                var f = +i;
                if (0 == f) return e;
                if (u < f) {
                  var h = l(f / 10);
                  return 0 === h ? e : h <= u ? (void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1)) : e;
                }
                c = o[f - 1];
            }
            return void 0 === c ? '' : c;
          })
        );
      }
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(3),
      i = e(94),
      o = e(54);
    e(55)('search', 1, function (t, n, e, a) {
      return [
        function (e) {
          var r = t(this),
            i = null == e ? void 0 : e[n];
          return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r));
        },
        function (t) {
          var n = a(e, t, this);
          if (n.done) return n.value;
          var c = r(t),
            s = String(this),
            u = c.lastIndex;
          i(u, 0) || (c.lastIndex = 0);
          var f = o(c, s);
          return i(c.lastIndex, u) || (c.lastIndex = u), null === f ? -1 : f.index;
        },
      ];
    });
  },
  function (t, n, e) {
    'use strict';
    var r = e(74),
      i = e(3),
      o = e(47),
      a = e(82),
      c = e(6),
      s = e(54),
      u = e(81),
      f = e(2),
      l = Math.min,
      h = [].push,
      d = 'split',
      v = 'length',
      p = 'lastIndex',
      g = 4294967295,
      w = !f(function () {
        RegExp(g, 'y');
      });
    e(55)('split', 2, function (t, n, e, f) {
      var y =
        'c' == 'abbc'[d](/(b)*/)[1] ||
        4 != 'test'[d](/(?:)/, -1)[v] ||
        2 != 'ab'[d](/(?:ab)*/)[v] ||
        4 != '.'[d](/(.?)(.?)/)[v] ||
        1 < '.'[d](/()()/)[v] ||
        ''[d](/.?/)[v]
          ? function (t, n) {
              var i = String(this);
              if (void 0 === t && 0 === n) return [];
              if (!r(t)) return e.call(i, t, n);
              for (
                var o,
                  a,
                  c,
                  s = [],
                  f =
                    (t.ignoreCase ? 'i' : '') +
                    (t.multiline ? 'm' : '') +
                    (t.unicode ? 'u' : '') +
                    (t.sticky ? 'y' : ''),
                  l = 0,
                  d = void 0 === n ? g : n >>> 0,
                  w = new RegExp(t.source, f + 'g');
                (o = u.call(w, i)) &&
                !(
                  l < (a = w[p]) &&
                  (s.push(i.slice(l, o.index)),
                  1 < o[v] && o.index < i[v] && h.apply(s, o.slice(1)),
                  (c = o[0][v]),
                  (l = a),
                  s[v] >= d)
                );

              )
                w[p] === o.index && w[p]++;
              return l === i[v] ? (!c && w.test('')) || s.push('') : s.push(i.slice(l)), s[v] > d ? s.slice(0, d) : s;
            }
          : '0'[d](void 0, 0)[v]
          ? function (t, n) {
              return void 0 === t && 0 === n ? [] : e.call(this, t, n);
            }
          : e;
      return [
        function (e, r) {
          var i = t(this),
            o = null == e ? void 0 : e[n];
          return void 0 !== o ? o.call(e, i, r) : y.call(String(i), e, r);
        },
        function (t, n) {
          var r = f(y, t, this, n, y !== e);
          if (r.done) return r.value;
          var u = i(t),
            h = String(this),
            d = o(u, RegExp),
            v = u.unicode,
            p = (u.ignoreCase ? 'i' : '') + (u.multiline ? 'm' : '') + (u.unicode ? 'u' : '') + (w ? 'y' : 'g'),
            x = new d(w ? u : '^(?:' + u.source + ')', p),
            m = void 0 === n ? g : n >>> 0;
          if (0 == m) return [];
          if (0 === h.length) return null === s(x, h) ? [h] : [];
          for (var b = 0, _ = 0, S = []; _ < h.length; ) {
            x.lastIndex = w ? _ : 0;
            var M,
              O = s(x, w ? h : h.slice(_));
            if (null === O || (M = l(c(x.lastIndex + (w ? 0 : _)), h.length)) === b) _ = a(h, _, v);
            else {
              if ((S.push(h.slice(b, _)), S.length === m)) return S;
              for (var E = 1; E <= O.length - 1; E++) if ((S.push(O[E]), S.length === m)) return S;
              _ = b = M;
            }
          }
          return S.push(h.slice(b)), S;
        },
      ];
    });
  },
  function (t, n, e) {
    var r = e(1),
      i = e(83).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      c = r.Promise,
      s = 'process' == e(23)(a);
    t.exports = function () {
      function t() {
        var t, r;
        for (s && (t = a.domain) && t.exit(); n; ) {
          (r = n.fn), (n = n.next);
          try {
            r();
          } catch (t) {
            throw (n ? f() : (e = void 0), t);
          }
        }
        (e = void 0), t && t.enter();
      }
      var n, e, u, f, l, h;
      return (
        (f = s
          ? function () {
              a.nextTick(t);
            }
          : !o || (r.navigator && r.navigator.standalone)
          ? c && c.resolve
            ? ((u = c.resolve(void 0)),
              function () {
                u.then(t);
              })
            : function () {
                i.call(r, t);
              }
          : ((l = !0),
            (h = document.createTextNode('')),
            new o(t).observe(h, { characterData: !0 }),
            function () {
              h.data = l = !l;
            })),
        function (t) {
          var r = { fn: t, next: void 0 };
          e && (e.next = r), n || ((n = r), f()), (e = r);
        }
      );
    };
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function (t, n, e) {
    'use strict';
    var r = e(113),
      i = e(37);
    t.exports = e(58)(
      'Map',
      function (t) {
        return function (n) {
          return t(this, 0 < arguments.length ? n : void 0);
        };
      },
      {
        get: function (t) {
          var n = r.getEntry(i(this, 'Map'), t);
          return n && n.v;
        },
        set: function (t, n) {
          return r.def(i(this, 'Map'), 0 === t ? 0 : t, n);
        },
      },
      r,
      !0
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(113),
      i = e(37);
    t.exports = e(58)(
      'Set',
      function (t) {
        return function (n) {
          return t(this, 0 < arguments.length ? n : void 0);
        };
      },
      {
        add: function (t) {
          return r.def(i(this, 'Set'), (t = 0 === t ? 0 : t), t);
        },
      },
      r
    );
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      return function (n) {
        return t(this, 0 < arguments.length ? n : void 0);
      };
    }
    var i,
      o = e(1),
      a = e(22)(0),
      c = e(11),
      s = e(27),
      u = e(93),
      f = e(114),
      l = e(4),
      h = e(37),
      d = e(37),
      v = !o.ActiveXObject && 'ActiveXObject' in o,
      p = 'WeakMap',
      g = s.getWeak,
      w = Object.isExtensible,
      y = f.ufstore,
      x = {
        get: function (t) {
          if (l(t)) {
            var n = g(t);
            return !0 === n ? y(h(this, p)).get(t) : n ? n[this._i] : void 0;
          }
        },
        set: function (t, n) {
          return f.def(h(this, p), t, n);
        },
      },
      m = (t.exports = e(58)(p, r, x, f, !0, !0));
    d &&
      v &&
      (u((i = f.getConstructor(r, p)).prototype, x),
      (s.NEED = !0),
      a(['delete', 'has', 'get', 'set'], function (t) {
        var n = m.prototype,
          e = n[t];
        c(n, t, function (n, r) {
          if (!l(n) || w(n)) return e.call(this, n, r);
          this._f || (this._f = new i());
          var o = this._f[t](n, r);
          return 'set' == t ? this : o;
        });
      }));
  },
  function (t, n, e) {
    'use strict';
    var r = e(114),
      i = e(37),
      o = 'WeakSet';
    e(58)(
      o,
      function (t) {
        return function (n) {
          return t(this, 0 < arguments.length ? n : void 0);
        };
      },
      {
        add: function (t) {
          return r.def(i(this, o), t, !0);
        },
      },
      r,
      !1,
      !0
    );
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(59),
      o = e(84),
      a = e(3),
      c = e(32),
      s = e(6),
      u = e(4),
      f = e(1).ArrayBuffer,
      l = e(47),
      h = o.ArrayBuffer,
      d = o.DataView,
      v = i.ABV && f.isView,
      p = h.prototype.slice,
      g = i.VIEW,
      w = 'ArrayBuffer';
    r(r.G + r.W + r.F * (f !== h), { ArrayBuffer: h }),
      r(r.S + r.F * !i.CONSTR, w, {
        isView: function (t) {
          return (v && v(t)) || (u(t) && g in t);
        },
      }),
      r(
        r.P +
          r.U +
          r.F *
            e(2)(function () {
              return !new h(2).slice(1, void 0).byteLength;
            }),
        w,
        {
          slice: function (t, n) {
            if (void 0 !== p && void 0 === n) return p.call(a(this), t);
            for (
              var e = a(this).byteLength,
                r = c(t, e),
                i = c(void 0 === n ? e : n, e),
                o = new (l(this, h))(s(i - r)),
                u = new d(this),
                f = new d(o),
                v = 0;
              r < i;

            )
              f.setUint8(v++, u.getUint8(r++));
            return o;
          },
        }
      ),
      e(41)(w);
  },
  function (t, n, e) {
    var r = e(0);
    r(r.G + r.W + r.F * !e(59).ABV, { DataView: e(84).DataView });
  },
  function (t, n, e) {
    e(25)('Int8', 1, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Uint8', 1, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)(
      'Uint8',
      1,
      function (t) {
        return function (n, e, r) {
          return t(this, n, e, r);
        };
      },
      !0
    );
  },
  function (t, n, e) {
    e(25)('Int16', 2, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Uint16', 2, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Int32', 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Uint32', 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Float32', 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    e(25)('Float64', 8, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r);
      };
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(18),
      o = e(3),
      a = (e(1).Reflect || {}).apply,
      c = Function.apply;
    r(
      r.S +
        r.F *
          !e(2)(function () {
            a(function () {});
          }),
      'Reflect',
      {
        apply: function (t, n, e) {
          var r = i(t),
            s = o(e);
          return a ? a(r, n, s) : c.call(r, n, s);
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0),
      i = e(33),
      o = e(18),
      a = e(3),
      c = e(4),
      s = e(2),
      u = e(95),
      f = (e(1).Reflect || {}).construct,
      l = s(function () {
        function t() {}
        return !(f(function () {}, [], t) instanceof t);
      }),
      h = !s(function () {
        f(function () {});
      });
    r(r.S + r.F * (l || h), 'Reflect', {
      construct: function (t, n, e) {
        o(t), a(n);
        var r = arguments.length < 3 ? t : o(e);
        if (h && !l) return f(t, n, r);
        if (t == r) {
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
          }
          var s = [null];
          return s.push.apply(s, n), new (u.apply(t, s))();
        }
        var d = r.prototype,
          v = i(c(d) ? d : Object.prototype),
          p = Function.apply.call(t, v, n);
        return c(p) ? p : v;
      },
    });
  },
  function (t, n, e) {
    var r = e(9),
      i = e(0),
      o = e(3),
      a = e(26);
    i(
      i.S +
        i.F *
          e(2)(function () {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      'Reflect',
      {
        defineProperty: function (t, n, e) {
          o(t), (n = a(n, !0)), o(e);
          try {
            return r.f(t, n, e), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
  },
  function (t, n, e) {
    var r = e(0),
      i = e(20).f,
      o = e(3);
    r(r.S, 'Reflect', {
      deleteProperty: function (t, n) {
        var e = i(o(t), n);
        return !(e && !e.configurable) && delete t[n];
      },
    });
  },
  function (t, n, e) {
    'use strict';
    function r(t) {
      (this._t = o(t)), (this._i = 0);
      var n,
        e = (this._k = []);
      for (n in t) e.push(n);
    }
    var i = e(0),
      o = e(3);
    e(102)(r, 'Object', function () {
      var t,
        n = this._k;
      do {
        if (this._i >= n.length) return { value: void 0, done: !0 };
      } while (!((t = n[this._i++]) in this._t));
      return { value: t, done: !1 };
    }),
      i(i.S, 'Reflect', {
        enumerate: function (t) {
          return new r(t);
        },
      });
  },
  function (t, n, e) {
    var r = e(20),
      i = e(35),
      o = e(13),
      a = e(0),
      c = e(4),
      s = e(3);
    a(a.S, 'Reflect', {
      get: function t(n, e) {
        var a,
          u,
          f = arguments.length < 3 ? n : arguments[2];
        return s(n) === f
          ? n[e]
          : (a = r.f(n, e))
          ? o(a, 'value')
            ? a.value
            : void 0 !== a.get
            ? a.get.call(f)
            : void 0
          : c((u = i(n)))
          ? t(u, e, f)
          : void 0;
      },
    });
  },
  function (t, n, e) {
    var r = e(20),
      i = e(0),
      o = e(3);
    i(i.S, 'Reflect', {
      getOwnPropertyDescriptor: function (t, n) {
        return r.f(o(t), n);
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(35),
      o = e(3);
    r(r.S, 'Reflect', {
      getPrototypeOf: function (t) {
        return i(o(t));
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Reflect', {
      has: function (t, n) {
        return n in t;
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(3),
      o = Object.isExtensible;
    r(r.S, 'Reflect', {
      isExtensible: function (t) {
        return i(t), !o || o(t);
      },
    });
  },
  function (t, n, e) {
    var r = e(0);
    r(r.S, 'Reflect', { ownKeys: e(116) });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(3),
      o = Object.preventExtensions;
    r(r.S, 'Reflect', {
      preventExtensions: function (t) {
        i(t);
        try {
          return o && o(t), !0;
        } catch (t) {
          return !1;
        }
      },
    });
  },
  function (t, n, e) {
    var r = e(9),
      i = e(20),
      o = e(35),
      a = e(13),
      c = e(0),
      s = e(28),
      u = e(3),
      f = e(4);
    c(c.S, 'Reflect', {
      set: function t(n, e, c) {
        var l,
          h,
          d = arguments.length < 4 ? n : arguments[3],
          v = i.f(u(n), e);
        if (!v) {
          if (f((h = o(n)))) return t(h, e, c, d);
          v = s(0);
        }
        if (a(v, 'value')) {
          if (!1 === v.writable || !f(d)) return !1;
          if ((l = i.f(d, e))) {
            if (l.get || l.set || !1 === l.writable) return !1;
            (l.value = c), r.f(d, e, l);
          } else r.f(d, e, s(0, c));
          return !0;
        }
        return void 0 !== v.set && (v.set.call(d, c), !0);
      },
    });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(65);
    i &&
      r(r.S, 'Reflect', {
        setPrototypeOf: function (t, n) {
          i.check(t, n);
          try {
            return i.set(t, n), !0;
          } catch (t) {
            return !1;
          }
        },
      });
  },
  function (t, n, e) {
    e(268), (t.exports = e(7).Array.includes);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(49)(!0);
    r(r.P, 'Array', {
      includes: function (t, n) {
        return i(this, t, 1 < arguments.length ? n : void 0);
      },
    }),
      e(36)('includes');
  },
  function (t, n, e) {
    e(270), (t.exports = e(7).Array.flatMap);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(271),
      o = e(10),
      a = e(6),
      c = e(18),
      s = e(104);
    r(r.P, 'Array', {
      flatMap: function (t, n) {
        var e,
          r,
          u = o(this);
        return c(t), (e = a(u.length)), (r = s(u, 0)), i(r, u, u, e, 0, 1, t, n), r;
      },
    }),
      e(36)('flatMap');
  },
  function (t, n, e) {
    'use strict';
    var r = e(51),
      i = e(4),
      o = e(6),
      a = e(17),
      c = e(5)('isConcatSpreadable');
    t.exports = function t(n, e, s, u, f, l, h, d) {
      for (var v, p, g = f, w = 0, y = !!h && a(h, d, 3); w < u; ) {
        if (w in s) {
          if (((v = y ? y(s[w], w, e) : s[w]), (p = !1), i(v) && (p = void 0 !== (p = v[c]) ? !!p : r(v)), p && 0 < l))
            g = t(n, e, v, o(v.length), g, l - 1) - 1;
          else {
            if (9007199254740991 <= g) throw TypeError();
            n[g] = v;
          }
          g++;
        }
        w++;
      }
      return g;
    };
  },
  function (t, n, e) {
    e(273), (t.exports = e(7).String.padStart);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(117),
      o = e(57),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)?Safari\//.test(o);
    r(r.P + r.F * a, 'String', {
      padStart: function (t, n) {
        return i(this, t, 1 < arguments.length ? n : void 0, !0);
      },
    });
  },
  function (t, n, e) {
    e(275), (t.exports = e(7).String.padEnd);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(117),
      o = e(57),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)?Safari\//.test(o);
    r(r.P + r.F * a, 'String', {
      padEnd: function (t, n) {
        return i(this, t, 1 < arguments.length ? n : void 0, !1);
      },
    });
  },
  function (t, n, e) {
    e(277), (t.exports = e(7).String.trimLeft);
  },
  function (t, n, e) {
    'use strict';
    e(39)(
      'trimLeft',
      function (t) {
        return function () {
          return t(this, 1);
        };
      },
      'trimStart'
    );
  },
  function (t, n, e) {
    e(279), (t.exports = e(7).String.trimRight);
  },
  function (t, n, e) {
    'use strict';
    e(39)(
      'trimRight',
      function (t) {
        return function () {
          return t(this, 2);
        };
      },
      'trimEnd'
    );
  },
  function (t, n, e) {
    e(281), (t.exports = e(61).f('asyncIterator'));
  },
  function (t, n, e) {
    e(89)('asyncIterator');
  },
  function (t, n, e) {
    e(283), (t.exports = e(7).Object.getOwnPropertyDescriptors);
  },
  function (t, n, e) {
    var r = e(0),
      i = e(116),
      o = e(15),
      a = e(20),
      c = e(77);
    r(r.S, 'Object', {
      getOwnPropertyDescriptors: function (t) {
        for (var n, e, r = o(t), s = a.f, u = i(r), f = {}, l = 0; u.length > l; )
          void 0 !== (e = s(r, (n = u[l++]))) && c(f, n, e);
        return f;
      },
    });
  },
  function (t, n, e) {
    e(285), (t.exports = e(7).Object.values);
  },
  function (t, n, e) {
    var r = e(0),
      i = e(118)(!1);
    r(r.S, 'Object', {
      values: function (t) {
        return i(t);
      },
    });
  },
  function (t, n, e) {
    e(287), (t.exports = e(7).Object.entries);
  },
  function (t, n, e) {
    var r = e(0),
      i = e(118)(!0);
    r(r.S, 'Object', {
      entries: function (t) {
        return i(t);
      },
    });
  },
  function (t, n, e) {
    'use strict';
    e(110), e(289), (t.exports = e(7).Promise.finally);
  },
  function (t, n, e) {
    'use strict';
    var r = e(0),
      i = e(7),
      o = e(1),
      a = e(47),
      c = e(112);
    r(r.P + r.R, 'Promise', {
      finally: function (t) {
        var n = a(this, i.Promise || o.Promise),
          e = 'function' == typeof t;
        return this.then(
          e
            ? function (e) {
                return c(n, t()).then(function () {
                  return e;
                });
              }
            : t,
          e
            ? function (e) {
                return c(n, t()).then(function () {
                  throw e;
                });
              }
            : t
        );
      },
    });
  },
  function (t, n, e) {
    e(291), e(292), e(293), (t.exports = e(7));
  },
  function (t, n, e) {
    function r(t) {
      return function (n, e) {
        var r = 2 < arguments.length,
          i = r && c.call(arguments, 2);
        return t(
          r
            ? function () {
                ('function' == typeof n ? n : Function(n)).apply(this, i);
              }
            : n,
          e
        );
      };
    }
    var i = e(1),
      o = e(0),
      a = e(57),
      c = [].slice,
      s = /MSIE .\./.test(a);
    o(o.G + o.B + o.F * s, { setTimeout: r(i.setTimeout), setInterval: r(i.setInterval) });
  },
  function (t, n, e) {
    var r = e(0),
      i = e(83);
    r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
  },
  function (t, n, e) {
    for (
      var r = e(80),
        i = e(31),
        o = e(11),
        a = e(1),
        c = e(14),
        s = e(40),
        u = e(5),
        f = u('iterator'),
        l = u('toStringTag'),
        h = s.Array,
        d = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        v = i(d),
        p = 0;
      p < v.length;
      p++
    ) {
      var g,
        w = v[p],
        y = d[w],
        x = a[w],
        m = x && x.prototype;
      if (m && (m[f] || c(m, f, h), m[l] || c(m, l, w), (s[w] = h), y)) for (g in r) m[g] || o(m, g, r[g], !0);
    }
  },
  function (t, n, e) {
    var r = (function (t) {
      'use strict';
      var n,
        e = Object.prototype,
        r = e.hasOwnProperty,
        i = 'function' == typeof Symbol ? Symbol : {},
        o = i.iterator || '@@iterator',
        a = i.asyncIterator || '@@asyncIterator',
        c = i.toStringTag || '@@toStringTag';
      function s(t, n, e, r) {
        var i,
          o,
          a,
          c,
          s = n && n.prototype instanceof p ? n : p,
          g = Object.create(s.prototype),
          w = new C(r || []);
        return (
          (g._invoke =
            ((i = t),
            (o = e),
            (a = w),
            (c = f),
            function (t, n) {
              if (c === h) throw new Error('Generator is already running');
              if (c === d) {
                if ('throw' === t) throw n;
                return j();
              }
              for (a.method = t, a.arg = n; ; ) {
                var e = a.delegate;
                if (e) {
                  var r = M(e, a);
                  if (r) {
                    if (r === v) continue;
                    return r;
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if (c === f) throw ((c = d), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                c = h;
                var s = u(i, o, a);
                if ('normal' === s.type) {
                  if (((c = a.done ? d : l), s.arg === v)) continue;
                  return { value: s.arg, done: a.done };
                }
                'throw' === s.type && ((c = d), (a.method = 'throw'), (a.arg = s.arg));
              }
            })),
          g
        );
      }
      function u(t, n, e) {
        try {
          return { type: 'normal', arg: t.call(n, e) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = s;
      var f = 'suspendedStart',
        l = 'suspendedYield',
        h = 'executing',
        d = 'completed',
        v = {};
      function p() {}
      function g() {}
      function w() {}
      var y = {};
      y[o] = function () {
        return this;
      };
      var x = Object.getPrototypeOf,
        m = x && x(x(P([])));
      m && m !== e && r.call(m, o) && (y = m);
      var b = (w.prototype = p.prototype = Object.create(y));
      function _(t) {
        ['next', 'throw', 'return'].forEach(function (n) {
          t[n] = function (t) {
            return this._invoke(n, t);
          };
        });
      }
      function S(t, n) {
        var e;
        this._invoke = function (i, o) {
          function a() {
            return new n(function (e, a) {
              !(function e(i, o, a, c) {
                var s = u(t[i], t, o);
                if ('throw' !== s.type) {
                  var f = s.arg,
                    l = f.value;
                  return l && 'object' == typeof l && r.call(l, '__await')
                    ? n.resolve(l.__await).then(
                        function (t) {
                          e('next', t, a, c);
                        },
                        function (t) {
                          e('throw', t, a, c);
                        }
                      )
                    : n.resolve(l).then(
                        function (t) {
                          (f.value = t), a(f);
                        },
                        function (t) {
                          return e('throw', t, a, c);
                        }
                      );
                }
                c(s.arg);
              })(i, o, e, a);
            });
          }
          return (e = e ? e.then(a, a) : a());
        };
      }
      function M(t, e) {
        var r = t.iterator[e.method];
        if (r === n) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (t.iterator.return && ((e.method = 'return'), (e.arg = n), M(t, e), 'throw' === e.method)) return v;
            (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return v;
        }
        var i = u(r, t.iterator, e.arg);
        if ('throw' === i.type) return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), v;
        var o = i.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
              (e.delegate = null),
              v)
            : o
          : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), v);
      }
      function O(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]), 2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])), this.tryEntries.push(n);
      }
      function E(t) {
        var n = t.completion || {};
        (n.type = 'normal'), delete n.arg, (t.completion = n);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(O, this), this.reset(!0);
      }
      function P(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              a = function e() {
                for (; ++i < t.length; ) if (r.call(t, i)) return (e.value = t[i]), (e.done = !1), e;
                return (e.value = n), (e.done = !0), e;
              };
            return (a.next = a);
          }
        }
        return { next: j };
      }
      function j() {
        return { value: n, done: !0 };
      }
      return (
        (g.prototype = b.constructor = w),
        (w.constructor = g),
        (w[c] = g.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function (t) {
          var n = 'function' == typeof t && t.constructor;
          return !!n && (n === g || 'GeneratorFunction' === (n.displayName || n.name));
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, w)
              : ((t.__proto__ = w), c in t || (t[c] = 'GeneratorFunction')),
            (t.prototype = Object.create(b)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        _(S.prototype),
        (S.prototype[a] = function () {
          return this;
        }),
        (t.AsyncIterator = S),
        (t.async = function (n, e, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new S(s(n, e, r, i), o);
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        _(b),
        (b[c] = 'Generator'),
        (b[o] = function () {
          return this;
        }),
        (b.toString = function () {
          return '[object Generator]';
        }),
        (t.keys = function (t) {
          var n = [];
          for (var e in t) n.push(e);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (t.values = P),
        (C.prototype = {
          constructor: C,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = n),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = n),
              this.tryEntries.forEach(E),
              !t)
            )
              for (var e in this) 't' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function i(r, i) {
              return (c.type = 'throw'), (c.arg = t), (e.next = r), i && ((e.method = 'next'), (e.arg = n)), !!i;
            }
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var a = this.tryEntries[o],
                c = a.completion;
              if ('root' === a.tryLoc) return i('end');
              if (a.tryLoc <= this.prev) {
                var s = r.call(a, 'catchLoc'),
                  u = r.call(a, 'finallyLoc');
                if (s && u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (s) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!u) throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var i = this.tryEntries[e];
              if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                var o = i;
                break;
              }
            }
            o && ('break' === t || 'continue' === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t), (a.arg = n), o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
            );
          },
          complete: function (t, n) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && n && (this.next = n),
              v
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var e = this.tryEntries[n];
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), v;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var e = this.tryEntries[n];
              if (e.tryLoc === t) {
                var r,
                  i = e.completion;
                return 'throw' === i.type && ((r = i.arg), E(e)), r;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: P(t), resultName: e, nextLoc: r }),
              'next' === this.method && (this.arg = n),
              v
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function('r', 'regeneratorRuntime=r')(r);
    }
  },
  function (t, n, e) {
    e(296), (t.exports = e(119).global);
  },
  function (t, n, e) {
    var r = e(297);
    r(r.G, { global: e(85) });
  },
  function (t, n, e) {
    var r = e(85),
      i = e(119),
      o = e(298),
      a = e(300),
      c = e(307),
      s = 'prototype',
      u = function (t, n, e) {
        var f,
          l,
          h,
          d = t & u.F,
          v = t & u.G,
          p = t & u.S,
          g = t & u.P,
          w = t & u.B,
          y = t & u.W,
          x = v ? i : i[n] || (i[n] = {}),
          m = x[s],
          b = v ? r : p ? r[n] : (r[n] || {})[s];
        for (f in (v && (e = n), e))
          ((l = !d && b && void 0 !== b[f]) && c(x, f)) ||
            ((h = l ? b[f] : e[f]),
            (x[f] =
              v && 'function' != typeof b[f]
                ? e[f]
                : w && l
                ? o(h, r)
                : y && b[f] == h
                ? (function (t) {
                    function n(n, e, r) {
                      if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();
                          case 1:
                            return new t(n);
                          case 2:
                            return new t(n, e);
                        }
                        return new t(n, e, r);
                      }
                      return t.apply(this, arguments);
                    }
                    return (n[s] = t[s]), n;
                  })(h)
                : g && 'function' == typeof h
                ? o(Function.call, h)
                : h),
            g && (((x.virtual || (x.virtual = {}))[f] = h), t & u.R && m && !m[f] && a(m, f, h)));
      };
    (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u);
  },
  function (t, n, e) {
    var r = e(299);
    t.exports = function (t, n, e) {
      if ((r(t), void 0 === n)) return t;
      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e);
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function (e, r, i) {
            return t.call(n, e, r, i);
          };
      }
      return function () {
        return t.apply(n, arguments);
      };
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function (t, n, e) {
    var r = e(301),
      i = e(306);
    t.exports = e(87)
      ? function (t, n, e) {
          return r.f(t, n, i(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        };
  },
  function (t, n, e) {
    var r = e(302),
      i = e(303),
      o = e(305),
      a = Object.defineProperty;
    n.f = e(87)
      ? Object.defineProperty
      : function (t, n, e) {
          if ((r(t), (n = o(n, !0)), r(e), i))
            try {
              return a(t, n, e);
            } catch (t) {}
          if ('get' in e || 'set' in e) throw TypeError('Accessors not supported!');
          return 'value' in e && (t[n] = e.value), t;
        };
  },
  function (t, n, e) {
    var r = e(86);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function (t, n, e) {
    t.exports =
      !e(87) &&
      !e(120)(function () {
        return (
          7 !=
          Object.defineProperty(e(304)('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, n, e) {
    var r = e(86),
      i = e(85).document,
      o = r(i) && r(i.createElement);
    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  },
  function (t, n, e) {
    var r = e(86);
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, i;
      if (n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
      if ('function' == typeof (e = t.valueOf) && !r((i = e.call(t)))) return i;
      if (!n && 'function' == typeof (e = t.toString) && !r((i = e.call(t)))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    };
  },
  function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n);
    };
  },
  function (t, n, e) {
    'use strict';
    function r() {
      (this.G_IsExpandedMode = !1),
        (this.G_ViewerMode = 0),
        (this.oneLineHeight = 0),
        (this.canvas = null),
        (this.isActivedCanvas = !1),
        (this.defaultWidth = 590),
        (this.defaultHeight = 632),
        (this.scrollWidth = 30),
        (this.padding = 58),
        (this.G_BackGroundColor = '0xe3efee'),
        (this.G_LinePerScroll = 5),
        (this.G_LinePerKey = 19),
        (this.canvasContainerObj = null),
        (this.canvasParentObj = null),
        (this.canvasObj = null),
        (this.canvasPageObj = null);
      var t = '',
        n = '',
        e = '',
        r = 2,
        i = null,
        o = null,
        a = 0,
        c = 0,
        s = 0,
        u = !0,
        f = [],
        l = [],
        h = [],
        d = !0,
        v = 180,
        p = 0,
        g = 1,
        w = [],
        y = [],
        x = '',
        m = 0,
        b = 0,
        _ = -1,
        S = !0,
        M = !1,
        O = !1,
        E = 'pc',
        C = 1,
        P = '/image/viewer/tran.png';
      (this.drow = function (r, u, d, v, w, _, S) {
        (t = this.canvasObj.data('code')),
          this.canvasObj.attr('data-code', 'code'),
          this.canvasObj.attr('data-url', 'www.munpia.com'),
          null === w && (w = 0),
          null === _ && (_ = 0),
          100 < _ && (_ = 100),
          (E = S),
          (i = this.canvasObj),
          $.each(
            r,
            function (t, n) {
              y.push(n);
            }.bind(this)
          ),
          w >= y.length && (w = y.length - 1),
          (n = this.canvasObj.data('parent')),
          (m = parseInt(w)),
          (e = new Array(y.length)),
          (f = new Array(y.length)),
          (l = new Array(y.length)),
          (h = new Array(y.length)),
          (o = u),
          (a = d),
          (s = c = v),
          50 < (p = parseFloat(_)) && (b = 1),
          (g = (x = {
            Android: function () {
              return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
              return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
              return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
              return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
              return !(this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            },
          }).any()
            ? 1
            : 2),
          this.canvasObj.attr('data-parent', 'parentsView');
        var M =
          '<canvas id="munCanva_temp" width="' +
          (x.any() ? c : $(window).width()) +
          '" height="' +
          a +
          '" style="background-image:url(\'' +
          P +
          '\');"></canvas>';
        i.append(M);
        var O = document.getElementById('munCanva_temp').getContext('2d');
        this.settingCanvas(O);
      }),
        (this.init = function () {
          null == $.xcookie('paragraphSpace')
            ? $.xcookie('paragraphSpace', !1, { expires: 365 })
            : $.xcookie('paragraphSpace', $.xcookie('paragraphSpace'), { expires: 365 }),
            null == $.xcookie('lineEnterPer')
              ? $.xcookie('lineEnterPer', 30, { expires: 365 })
              : $.xcookie('lineEnterPer', $.xcookie('lineEnterPer'), { expires: 365 }),
            null == $.xcookie('XVMode')
              ? $.xcookie('XVMode', this.G_ViewerMode, { expires: 365 })
              : ($.xcookie('XVMode', $.xcookie('XVMode'), { expires: 365 }),
                (this.G_ViewerMode = parseInt($.xcookie('XVMode')))),
            null == $.xcookie('XVFont')
              ? $.xcookie('XVFont', 'Batang,바탕', { expires: 365 })
              : $.xcookie('XVFont', $.xcookie('XVFont'), { expires: 365 }),
            null == $.xcookie('XVFontSize')
              ? $.xcookie('XVFontSize', 17, { expires: 365 })
              : $.xcookie('XVFontSize', $.xcookie('XVFontSize'), { expires: 365 }),
            null == $.xcookie('XVColor')
              ? $.xcookie('XVColor', '0x494949', { expires: 365 })
              : $.xcookie('XVColor', $.xcookie('XVColor'), { expires: 365 }),
            null == $.xcookie('XVLineHeight')
              ? $.xcookie('XVLineHeight', 180, { expires: 365 })
              : $.xcookie('XVLineHeight', $.xcookie('XVLineHeight'), { expires: 365 }),
            null == $.xcookie('XVBackgroundColor')
              ? $.xcookie('XVBackgroundColor', this.G_BackGroundColor, { expires: 365 })
              : ($.xcookie('XVBackgroundColor', $.xcookie('XVBackgroundColor'), { expires: 365 }),
                (this.G_BackGroundColor = $.xcookie('XVBackgroundColor'))),
            null == $.xcookie('aspectRatio') && $.xcookie('aspectRatio', 1, { expires: 365 }),
            null == $.xcookie('viewerPadding')
              ? $.xcookie('viewerPadding', this.padding, { expires: 365 })
              : ((this.padding = $.xcookie('viewerPadding')),
                $.xcookie('viewerPadding', $.xcookie('viewerPadding'), { expires: 365 })),
            (this.canvasContainerObj = $('#viewer_container')),
            (this.canvasParentObj = $('#parentsView')),
            (this.canvasObj = $('#canvasView')),
            (this.canvasPageObj = $('#canvasViewPage')),
            this.canvasContainerObj.css('background-color', '#' + this.removeHex(this.G_BackGroundColor)),
            this.canvasParentObj.css('background-color', '#' + this.removeHex(this.G_BackGroundColor)),
            this.canvasParentObj.css('width', this.defaultWidth),
            this.canvasParentObj.css('height', this.defaultHeight),
            this.canvasObj.css('width', this.defaultWidth + this.scrollWidth),
            0 !== this.G_ViewerMode && this.bindPageMove(),
            this.canvasObj.on(
              'mousewheel DOMMouseScroll',
              function (t, n) {
                var e = this.canvasObj.scrollTop();
                t.preventDefault(),
                  0 !== this.G_ViewerMode
                    ? n < 0
                      ? this.reDrowPageData(0, 'next')
                      : this.reDrowPageData(0, 'pre')
                    : (n < 0
                        ? (e += this.oneLineHeight * this.G_LinePerScroll)
                        : (e -= this.oneLineHeight * this.G_LinePerScroll) < 0 && (e = 0),
                      this.canvasObj.animate({ scrollTop: e }, 0),
                      setTimeout(
                        function () {
                          var t = this.getReadPercent();
                          this.canvasPageObj.html(Math.ceil(t) + ' / 100%');
                        }.bind(this),
                        100
                      ));
              }.bind(this)
            ),
            this.canvasObj && (this.isActivedCanvas = !0),
            $(document).click(
              function (t) {
                'canvasView' === t.target.id ? (this.isActivedCanvas = !0) : (this.isActivedCanvas = !1);
              }.bind(this)
            ),
            $(document).on('keydown', function (t) {
              27 === t.keyCode && t.preventDefault();
            }),
            $(window.document).on('contextmenu', function (t) {
              return !1;
            }),
            $(window.document).on('selectstart', function (t) {
              return !1;
            }),
            $(window.document).on('dragstart', function (t) {
              return !1;
            }),
            'onfullscreenchange' in document &&
              document.addEventListener('fullscreenchange', this.fullScreenHandler.bind(this)),
            'onmozfullscreenchange' in document &&
              document.addEventListener('mozfullscreenchange', this.fullScreenHandler.bind(this)),
            'onwebkitfullscreenchange' in document &&
              document.addEventListener('webkitfullscreenchange', this.fullScreenHandler.bind(this)),
            'onmsfullscreenchange' in document && (document.onmsfullscreenchange = this.fullScreenHandler.bind(this));
          var t = null;
          $(window).resize(
            function () {
              null !== t && clearTimeout(t),
                document.fullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  (t = setTimeout(
                    function () {
                      var t, n;
                      this.G_IsExpandedMode &&
                        ((t = $(window).width()),
                        (n = $(window).height() - 100),
                        t % 2 != 0 && (t += 1),
                        this.canvasParentObj.css({ width: t + 'px', height: n + 'px' }),
                        2 === munpiaViewer.G_ViewerMode
                          ? this.canvasObj.css({ width: t + 'px', height: n + 'px', 'text-align': 'center' })
                          : this.canvasObj.css({ width: t + this.scrollWidth + 'px', height: n + 'px' }),
                        this.reSizeView(t - 2 * munpiaViewer.padding, n, this.G_IsExpandedMode));
                    }.bind(this),
                    100
                  ));
            }.bind(this)
          );
        }),
        (this.settingCanvas = function (t) {
          (C = 'pc' == E ? parseFloat($.xcookie('aspectRatio')) : C),
            (t.fillStyle = '#' + $.xcookie('XVColor').replace('0x', ''));
          var n = Math.ceil(parseInt($.xcookie('XVFontSize')) * g * C);
          (t.font = n + 'px ' + $.xcookie('XVFont') + ',Nanum Gothic'),
            (d = !0),
            (v = parseInt($.xcookie('XVLineHeight')) - 100),
            (this.G_ViewerMode = parseInt($.xcookie('XVMode'))),
            Math.ceil(t.measureText('가').width + t.measureText('가').width * (v / 100)),
            2 === this.G_ViewerMode
              ? (!0 === this.G_IsExpandedMode
                  ? ((c = this.canvasObj.width()), (c /= 2), (c -= 2 * Math.ceil(0.1 * this.canvasObj.width())))
                  : ((c = s), (c /= 2), (c -= this.padding)),
                this.canvasObj.css('padding-left', 0))
              : !0 === this.G_IsExpandedMode
              ? ((c = this.canvasObj.width()), (c -= 2 * Math.ceil(0.1 * this.canvasObj.width())))
              : (c = s),
            $('#viewer_loading').show(),
            this.splitDrowText(t, !0, m, !1, -1, 'start');
        }),
        (this.splitDrowText = function (r, s, u, g, w, x) {
          var O = 0,
            E = Math.ceil(c * C);
          null !== r && (this.canvas = r),
            2 === this.G_ViewerMode
              ? ($('#page_left').css('display', 'block'), $('#page_right').css('display', 'block'))
              : ($('#page_left').css('display', 'none'), $('#page_right').css('display', 'none'));
          var P = Math.ceil(this.canvas.measureText('가').width + this.canvas.measureText('가').width * (v / 100)),
            F = P;
          this.oneLineHeight = P;
          var V = this.canvas.measureText('가').width,
            G = 0,
            L = 0,
            N = 0,
            R = 0 === this.G_ViewerMode ? 7 : 0;
          2 === this.G_ViewerMode && (R = 1);
          var D,
            X = 0,
            z = '';
          z =
            y.length - 1 == u
              ? ((D = y.length - 1 == u ? '' : '\n\n'),
                (z = j(y[u], n, t, 1).replace(/(\n*$)|(\s*$)/gi, '') + D),
                0 != u && '\r\n' != z.substring(0, 2) && (z = '\n' + z),
                z.split(/\r\n|\r|\n/))
              : 0 != u && '\r\n' != j(y[u], n, t, 1).substring(0, 2).substring(0, 2)
              ? ('\n' + j(y[u], n, t, 1)).split(/\r\n|\r|\n/)
              : j(y[u], n, t, 1).split(/\r\n|\r|\n/);
          var B = [];
          (l[u] = []), (h[u] = []);
          for (
            var U,
              W,
              H,
              q,
              J = !(f[u] = []),
              Y = !0,
              K = 0,
              Z = '',
              Q = 0 === this.G_ViewerMode ? 1 : 2,
              tt = !0,
              nt = 0;
            nt < z.length;
            nt++
          ) {
            if ((this.G_ViewerMode, (O = 0), !(E <= 0))) {
              var et = A(z[nt]).split(' '),
                rt = 1,
                it = 0;
              Y = !0;
              if (!0 === k(A(z[nt]))) {
                var ot = I(A(z[nt])),
                  at = (Math.ceil(c * C), (Math.ceil(c * C) * o[ot].height) / o[ot].width);
                if (0 === this.G_ViewerMode) (K += at), (Z += et.join(' '));
                else {
                  at > Math.ceil(a * C) - 2 * O &&
                    ((at = Math.ceil(a * C) - 2 * O), Math.ceil(a * C), o[ot].width, o[ot].height);
                  var ct = K + O * Q + P * N + F * G + 0 * L + at;
                  if (ct > Math.ceil(a * C) && (0 < G || 0 < L)) {
                    (B[X] = Z),
                      (l[u][X] = Math.floor((ct - at) / C)),
                      (h[u][X] = 0 == X ? Math.floor((ct - at) / C) : h[u][X - 1] + Math.floor((ct - at) / C)),
                      1 == s && X == R && ((tt = !1), (e[u] = B), this.drowCanvas(0, R, 'not')),
                      X++,
                      (Z = ''),
                      (K = N = L = G = 0),
                      nt--;
                    continue;
                  }
                  if (((ct = O * Q + P * N + F * G + 0 * L + at), at > Math.ceil(a * C) - 2 * O && 0 == G && 0 == L)) {
                    (B[X] = et.join(' ')),
                      (l[u][X] = Math.floor(ct / C)),
                      (h[u][X] = 0 == X ? Math.floor(ct / C) : h[u][X - 1] + Math.floor(ct / C)),
                      1 == s && X == R && ((tt = !1), (e[u] = B), this.drowCanvas(0, R, 'not')),
                      X++,
                      (Z = ''),
                      (K = N = L = G = 0);
                    continue;
                  }
                  (K += at), (Z += et.join(' '));
                }
              } else {
                for (; 0 < et.length && rt <= et.length; ) {
                  var st = et.slice(0, rt).join(' ');
                  if (E < (1 == d ? V + this.canvas.measureText(st).width : this.canvas.measureText(st).width)) {
                    for (
                      var ut = A(et.slice(0, rt - 1).join(' ')),
                        ft = A(String(et.slice(rt - 1, rt))),
                        lt = '',
                        ht = '',
                        dt = ((J = !1), 1);
                      dt <= ft.length;
                      dt++
                    )
                      if (
                        ((lt = ut + ' ' + ft.substr(0, dt)),
                        E <=
                          (1 == d && 1 == Y
                            ? V + this.canvas.measureText(lt).width
                            : this.canvas.measureText(lt).width))
                      ) {
                        J = !0;
                        var vt = 0;
                        String(lt.substr(0, lt.length - 1)),
                          void ft.substr(dt - 1, 1) && void ft.substr(dt, 1)
                            ? T(ft.substr(dt + 1, 1))
                              ? (1 == ++vt && T(ft.substr(dt, 1)) && vt++,
                                2 == vt && T(ft.substr(dt + 1, 1)) && vt++,
                                void ft.substr(dt - 2, 1) && void ft.substr(dt - 3, 1) ? (ht = '-') : vt++)
                              : (void ft.substr(dt, 1) && void ft.substr(dt - 1, 1) && void ft.substr(dt - 2, 1)
                                  ? (ht = '-')
                                  : vt++,
                                void ft.substr(dt - 2, 1) || vt++)
                            : void ft.substr(dt - 1, 1) && T(ft.substr(dt, 1))
                            ? (vt++,
                              void ft.substr(dt - vt - 1, 1) && void ft.substr(dt - vt - 2)
                                ? ((ht = '-'), vt++)
                                : void ft.substr(dt - vt - 1, 1) && (vt += 2))
                            : (T(ft.substr(dt - 1, 1)) && vt++,
                              1 == vt && T(ft.substr(dt, 1)) && vt++,
                              2 == vt && T(ft.substr(dt - 2, 1)) && vt++,
                              1 == vt ? (vt = 0) : 0 == vt && (vt = 1),
                              2 <= vt &&
                                void ft.substr(dt - vt, 1) &&
                                void ft.substr(dt - vt - 1, 1) &&
                                (vt++,
                                void ft.substr(dt - vt - 1, 1) && void ft.substr(dt - vt - 2, 1)
                                  ? (ht = '-')
                                  : void ft.substr(1) && vt++));
                        var pt =
                            1 == d && 1 == Y
                              ? V + this.canvas.measureText(lt.substr(0, lt.length - vt).replace(/ /gi, '') + ht).width
                              : this.canvas.measureText(lt.substr(0, lt.length - vt).replace(/ /gi, '') + ht).width,
                          gt = A(ft.substr(0, dt - vt)),
                          wt = ut.split(' ').length;
                        for (
                          '' == gt && (wt = ut.split(' ').length - 1),
                            Math.floor((E - pt) / wt),
                            1 == d && 1 == Y && (Y = !1),
                            St = 1;
                          St <= rt;
                          St++
                        ) {
                          var yt = A(String(et.slice(St - 1, St)));
                          !(1 < rt && '' == yt) &&
                            (1 == St
                              ? 1 == rt
                                ? (Z = Z + ' ' + gt)
                                : (Z += et.slice(St - 1, St).join(' '))
                              : (Z = 1 < St && St < rt ? Z + ' ' + et.slice(St - 1, St).join(' ') : Z + ' ' + gt));
                        }
                        et[rt - 1] = ft.substr(dt - vt, ft.length);
                        break;
                      }
                    G++,
                      0 == J && (Z = Z + ' ' + A(ut) + ' ' + A(ft) + ' '),
                      (ct = O * Q + P * (N + 1) + F * G + 0 * L + K) >= Math.ceil(a * C) &&
                        0 != this.G_ViewerMode &&
                        ((B[X] = Z),
                        ft && (f[u][X + 1] = !1),
                        (ct = O * Q + P * N + F * G + 0 * L + K),
                        (ct = Math.ceil(a * C)),
                        (l[u][X] = Math.floor(ct / C)),
                        (h[u][X] = 0 == X ? Math.floor(ct / C) : h[u][X - 1] + Math.floor(ct / C)),
                        1 == s && X == R && ((tt = !1), (e[u] = B), this.drowCanvas(0, R, 'not')),
                        X++,
                        (Z = ''),
                        (K = N = L = G = 0)),
                      (0 != (et = 0 == J ? et.splice(rt) : et.splice(rt - 1)).length && '' != et.join(' ')) || G--,
                      (rt = 1);
                  } else rt++;
                  if (1e3 < it) break;
                  it++;
                }
                (ct = O * Q + P * (N + 1) + F * G + 0 * L + K) >= Math.ceil(a * C) &&
                  0 != this.G_ViewerMode &&
                  ((B[X] = Z),
                  (ct = O * Q + P * N + F * G + 0 * L + K),
                  (ct = Math.ceil(a * C)),
                  (l[u][X] = Math.floor(ct / C)),
                  (h[u][X] = 0 == X ? Math.floor(ct / C) : h[u][X - 1] + Math.floor(ct / C)),
                  1 == s && X == R && ((tt = !1), (e[u] = B), this.drowCanvas(0, R, 'not')),
                  X++,
                  (Z = ''),
                  (K = N = L = G = 0)),
                  0 < rt && (Z += et.join(' '));
              }
              et.join(' '), N++;
            }
            (ct = O * Q + P * (N + 1) + F * G + 0 * ++L + K) >= Math.ceil(a * C)
              ? (et.join(' '),
                (B[X] = Z),
                (ct = O * Q + P * N + F * G + 0 * L + K),
                (ct -= 0 * (L - N)),
                0 != this.G_ViewerMode && (ct = Math.ceil(a * C)),
                (l[u][X] = Math.floor(ct / C)),
                (h[u][X] = 0 == X ? Math.floor(ct / C) : h[u][X - 1] + Math.floor(ct / C)),
                1 == s && X == R && ((tt = !1), (e[u] = B), this.drowCanvas(0, R, 'not')),
                X++,
                (Z = ''),
                (L = (G = 0) == this.G_ViewerMode ? 1 : 0),
                (K = N = 0))
              : 0 != this.G_ViewerMode && (Z += '\n'),
              0 == this.G_ViewerMode && (Z += '\n');
          }
          (ct = O * Q + P * N + F * G + 0 * --L + K) < Math.ceil(a * C) &&
            '' != Z &&
            ((B[X] = Z),
            0 != this.G_ViewerMode && (ct = Math.ceil(a * C)),
            (l[u][X] = Math.floor(ct / C)),
            (h[u][X] = 0 == X ? Math.floor(ct / C) : h[u][X - 1] + Math.floor(ct / C)),
            1 == s && 1 == tt && X <= R && ((e[u] = B), this.drowCanvas(0, X, 'not')),
            X++,
            (Z = '')),
            (e[u] = B),
            (B = null),
            0 == this.G_ViewerMode
              ? setTimeout(
                  function () {
                    var t = this.getReadPercent();
                    this.canvasPageObj.html(Math.ceil(t) + ' / 100%');
                  }.bind(this),
                  100
                )
              : ((W = U = 0),
                e.forEach(
                  function (t, n) {
                    (U += t.length), n < m && (W += t.length);
                  }.bind(this)
                ),
                (H = parseInt(
                  i
                    .find('canvas:first-child')
                    .attr('id')
                    .replace('munCanva_' + m + '_', '')
                )),
                2 == this.G_ViewerMode
                  ? (1 < (W += H + 1) && W % 2 == 0 && --W,
                    1 < U && U % 2 != 0 && U++,
                    W <= U && this.canvasPageObj.html(W + ' / ' + U))
                  : ((W += H), this.canvasPageObj.html(W + 1 + ' / ' + U))),
            (0 < m || (0 == m && 0 < p)) && 1 == s && this.followUp(p, !0),
            -1 < w && 'follow' == x && ((p = this.getNowReadPercent(w)), this.followUp(w, !1)),
            -2 == w && 'follow' == x && this.followUp(p, !0),
            1 == s && h[u][h[u].length - 1] <= a && m + 1 <= y.length - 1 && this.drowCanvas(-1, -1, 'down'),
            'pageNext' == x
              ? (m++, (M = !1), i.html(''), this.drowCanvas(0, 0, 'not'))
              : 'pagePre' == x && ((M = !1), (q = e[(m = u)].length - 1), i.html(''), this.drowCanvas(q, q, 'not')),
            'scrollPre' == x
              ? ((M = !1), this.drowCanvas(-2, -2, 'up'))
              : 'scrollNext' == x && ((M = !1), this.drowCanvas(-1, -1, 'down'));
          for (var xt = -1, mt = -1, bt = !0, _t = !1, St = 0; St < e.length; St++)
            null != e[St] && -1 == xt && (xt = St),
              St < e.length && null != e[St] && null == e[St + 1] && 0 == _t && ((mt = St), (_t = !0)),
              null == e[St] && (bt = !1);
          null != e[e - 1] && (mt = e.length - 1);
          var Mt = 0;
          if (0 == bt)
            (b = 0 == b ? ((Mt = 0 == xt ? mt + 1 : xt - 1), 1) : ((Mt = mt >= e.length - 1 ? xt - 1 : mt + 1), 0)),
              (S = g || S) &&
                setTimeout(
                  function () {
                    var t, n, r, o;
                    this.splitDrowText(null, !1, Mt, !1, -1, 'none'),
                      0 == this.G_ViewerMode
                        ? ((t = this.getReadPercent()), this.canvasPageObj.html(Math.ceil(t) + ' / 100%'))
                        : ((r = n = 0),
                          e.forEach(
                            function (t, e) {
                              (n += t.length), e < m && (r += t.length);
                            }.bind(this)
                          ),
                          (o = parseInt(
                            i
                              .find('canvas:first-child')
                              .attr('id')
                              .replace('munCanva_' + m + '_', '')
                          )),
                          2 == this.G_ViewerMode
                            ? (r += o + 1) <= n && this.canvasPageObj.html(r + ' / ' + n)
                            : ((r += o), this.canvasPageObj.html(r + 1 + ' / ' + n)));
                  }.bind(this),
                  4
                );
          else if (-1 == _) for (St = _ = 0; St < h.length; St++) _ += h[St][h[St].length - 1];
        }),
        (this.drowCanvas = function (t, n, r) {
          if (((w = []), 1 != M)) {
            var s,
              v = 0;
            if (('munCanva_temp' == i.find('canvas').attr('id') && i.html(''), -1 == t && 'down' == r)) {
              if (1 == this.G_ViewerMode) return;
              if (!i.find('canvas:first-child').attr('id')) return;
              var p = i.find('canvas:last-child').attr('id').split('_'),
                b = 0;
              if (
                ((b = parseInt(p[1]) > m ? parseInt(p[1]) : m),
                (n =
                  (t =
                    parseInt(
                      i
                        .find('canvas:last-child')
                        .attr('id')
                        .replace('munCanva_' + b + '_', '')
                    ) + 1) + 1),
                1 == O && b == e.length - 1 && ((O = !1), m++),
                t >= e[b].length && parseInt(p[1]) <= y.length - 1)
              ) {
                if (parseInt(m) == e.length - 1) return;
                if (((m = parseInt(m) + 1), parseInt(p[1]) > m - 1))
                  i.css('overflow-y', 'hidden'), this.canvasObj.unbind('scroll'), this.drowCanvas(t, n, 'nextString');
                else {
                  if (null == e[m])
                    return (
                      m--, (S = !(M = !0)), void this.splitDrowText(null, !1, parseInt(m) + 1, !0, -1, 'scrollNext')
                    );
                  var _ = e[m].length - 1 == 0 ? 0 : 1;
                  this.drowCanvas(0, _, 'nextString');
                }
                return;
              }
              if (n < e[m].length && 3 < i.find('canvas').length)
                for (var j = t; j <= n; j++) i.find('canvas:first-child').remove();
              if (n < 3) return;
              n >= e[m].length && (n = t),
                0 == m && i.find('canvas:first-child').height() <= a && y.length - 1 < 0 && m++;
            }
            if (-2 == t && 'up' == r) {
              if (1 == this.G_ViewerMode) return;
              if (!i.find('canvas:first-child').attr('id')) return;
              if (
                ((p = i.find('canvas:first-child').attr('id').split('_')),
                (b = 0),
                (b = parseInt(p[1]) < m ? parseInt(p[1]) : m),
                0 ==
                  (n =
                    1 +
                    (t =
                      parseInt(
                        i
                          .find('canvas:first-child')
                          .attr('id')
                          .replace('munCanva_' + b + '_', '')
                      ) - 2)) && (n = t = 0),
                t < 0 || parseInt(p[1]) < m)
              ) {
                if (0 == m) return;
                if (((m = parseInt(m) - 1), parseInt(p[1]) < m + 1)) return void this.drowCanvas(t, n, 'preString');
                if (null == e[m])
                  return m++, (S = !(M = !0)), void this.splitDrowText(null, !1, m - 1, !0, -1, 'scrollPre');
                var F = 0 <= e[m].length - 2 ? e[m].length - 2 : e[m].length - 1;
                return void this.drowCanvas(F, e[m].length - 1, 'preString');
              }
              if (3 < i.find('canvas').length) for (j = t; j <= n; j++) i.find('canvas:last-child').remove();
              i.css('overflow-y', 'hidden'), this.canvasObj.unbind('scroll');
              var V = i.find('canvas:last-child').attr('id').split('_');
              V[1] != m && this.canvasObj.find(':last-child').remove(),
                (V = i.find('canvas:last-child').attr('id').split('_'))[1] != m &&
                  this.canvasObj.find(':last-child').remove();
            }
            if (
              ('nextString' == r &&
                (x.iOS() && (i.css('overflow-y', 'hidden'), this.canvasObj.unbind('scroll')),
                this.canvasObj.find(':not(:last-child):not(:nth-last-child(2))').remove()),
              'preString' == r)
            ) {
              if (0 == m && t < 0) return i.css('overflow-y', 'scroll'), void this.bindScroll();
              this.canvasObj.find(':not(:first-child):not(:nth-child(2))').remove();
            }
            'optionChange' == r &&
              ((t = parseInt(
                i
                  .find('canvas:first-child')
                  .attr('id')
                  .replace('munCanva_' + m + '_', '')
              )),
              (n = parseInt(
                i
                  .find('canvas:last-child')
                  .attr('id')
                  .replace('munCanva_' + m + '_', '')
              ))),
              'follow' == r && (i.html(''), (s = n), (n = (t = t) + 3 < e[m].length ? t + 3 : e[m].length - 1));
            var G = t != n;
            if (null != e[m]) {
              for (var L = !1; t <= n; t++) {
                'up' == r && 'mobile' == E && $('.novelist_greeting_wrap').css('display', 'none');
                var N = x.any() ? Math.ceil(c * C) : $(window).width(),
                  R = this.padding,
                  D = 'initial';
                2 == this.G_ViewerMode && 1 == this.G_IsExpandedMode
                  ? (R = Math.ceil(0.1 * this.canvasObj.width()))
                  : 1 == this.G_IsExpandedMode && (R = ($('#parentsView').width() - N) / 2),
                  0 == this.G_ViewerMode || 1 == this.G_ViewerMode
                    ? (D = 'left')
                    : 1 == this.G_IsExpandedMode && (D = t % 2 == 0 ? 'left' : 'right'),
                  R < 0 && (R = Math.ceil(0.1 * this.canvasObj.width()));
                var X,
                  z,
                  B,
                  U,
                  W =
                    '<canvas id="munCanva_' +
                    m +
                    '_' +
                    t +
                    '" width="' +
                    N +
                    '" height="' +
                    Math.ceil(l[m][t] * C) +
                    '" style="background-image:url(\'' +
                    P +
                    "');pointer-events:none; float:" +
                    D +
                    '; padding:0 ' +
                    R +
                    'px; "></canvas>';
                ('not' != r && 'follow' != r && 'down' != r && 'nextString' != r) ||
                  (i.append(W),
                  l[m][t]
                    ? 'down' === r &&
                      !1 === L &&
                      -1 === navigator.userAgent.toLowerCase().indexOf('chrome') &&
                      (this.canvasObj.scrollTop(
                        this.canvasObj.scrollTop() - l[m][t] + munpiaViewer.oneLineHeight * this.G_LinePerScroll
                      ),
                      (L = !0))
                    : ($('#munCanva_' + m + '_' + t).width(c), $('#munCanva_' + m + '_' + t).height(l[m][t - 1]))),
                  ('up' != r && 'preString' != r) ||
                    (t == n && G
                      ? ((z = $('body').scrollTop()),
                        $('#munCanva_' + m + '_' + (t - 1)).after(W),
                        'pc' == E && $('body').scrollTop(z),
                        (X =
                          1 < C
                            ? document.getElementById('canvasView').scrollHeight - Math.ceil(l[m][t] * C) + l[m][t]
                            : document.getElementById('canvasView').scrollHeight),
                        this.canvasObj.height() + this.canvasObj.scrollTop() >= X - 100 &&
                          (('preString' == r && 0 != O) || this.drowCanvas(-2, -2, 'up')))
                      : ((z = $('body').scrollTop()),
                        i.prepend(W),
                        t == n && 0 == G && ((B = Math.ceil(l[m][t])), i.scrollTop(B)),
                        'pc' == E && $('body').scrollTop(z)),
                    -1 === navigator.userAgent.toLowerCase().indexOf('chrome') &&
                      ((B = Math.ceil(l[m][t])), this.canvasObj.scrollTop(this.canvasObj.scrollTop() + B))),
                  t == n && 'follow' == r && i.scrollTop(s),
                  'nextString' == r &&
                    t == n &&
                    ((U = Math.ceil(l[m - 1][l[m - 1].length - 1]) + Math.ceil(l[m - 1][l[m - 1].length - 2]) - a),
                    i.scrollTop(U)),
                  0 == this.G_ViewerMode && this.canvasObj.css('overflow-y', 'scroll'),
                  t == n && this.bindScroll(),
                  (w[t] = document.getElementById('munCanva_' + m + '_' + t).getContext('2d')),
                  'optionChange' == r &&
                    ((N = x.any() ? Math.ceil(c * C) : $(window).width()), w[t].clearRect(0, 0, N, Math.ceil(l[m][t])));
                var H = Math.ceil(parseInt($.xcookie('XVFontSize')) * g * C);
                (w[t].fillStyle = '#' + $.xcookie('XVColor').replace('0x', '')),
                  (w[t].font = H + 'px ' + $.xcookie('XVFont') + ',Nanum Gothic');
                var q = Math.ceil(c * C),
                  J = this.oneLineHeight - 0.1,
                  Y = J;
                v = (this.G_ViewerMode, 0);
                if (void 0 === e[m][t]) return;
                for (
                  var K = w[t].measureText('가').width,
                    Z = 0,
                    Q = 0,
                    tt = 0,
                    nt = e[m][t].split(/\r\n|\r|\n/),
                    et = !1,
                    rt = !0,
                    it = 0,
                    ot = 0;
                  ot < nt.length;
                  ot++
                )
                  if (0 != ot || '' != A(nt[ot])) {
                    if (!(q <= 0)) {
                      var at = A(nt[ot]).split(' '),
                        ct = 1,
                        st = 0;
                      if ((tt++, Q++, (rt = !0), 0 == ot && !1 === f[m][t] && (rt = !1), 1 == k(A(nt[ot])))) {
                        var ut,
                          ft,
                          lt,
                          ht = I(A(nt[ot])),
                          dt = Math.ceil(c * C),
                          vt = (Math.ceil(c * C) * o[ht].height) / o[ht].width;
                        $.extend(o[ht], { loadCheck: 'false' }),
                          1 == u
                            ? $.extend(o[ht], { checkDrowImg: 'true' })
                            : $.extend(o[ht], { checkDrowImg: 'false' }),
                          0 == this.G_ViewerMode
                            ? ((ut = dt < q ? (q - dt) / 2 : 0),
                              ((ft = new Image()).width = dt),
                              (ft.height = vt),
                              (ft.name = ht),
                              (ft.paddingRight = ut),
                              (ft.paddingLeft = t),
                              (ft.position = v + J * tt + Y * Z + 0 * Q + it),
                              (lt = w),
                              (ft.onload = function () {
                                lt[this.paddingLeft].drawImage(
                                  this,
                                  this.paddingRight,
                                  this.position,
                                  this.width,
                                  this.height
                                );
                              }),
                              (ft.src = o[ht].url),
                              w[t].drawImage(ft, ut, v + J * tt + Y * Z + 0 * Q + it, dt, vt))
                            : (vt > Math.ceil(a * C) - 2 * v &&
                                ((vt = Math.ceil(a * C) - 2 * v),
                                (dt = ((Math.ceil(a * C) - 2 * v) * o[ht].width) / o[ht].height)),
                              v + vt > Math.ceil(a * C) ||
                                ((ut = dt < q ? (q - dt) / 2 : 0),
                                ((ft = new Image()).width = dt),
                                (ft.height = vt),
                                (ft.name = ht),
                                (ft.paddingLeft = t),
                                (ft.paddingRight = ut),
                                (ft.position = v + J * tt + Y * Z + 0 * Q + it),
                                (lt = w),
                                (ft.onload = function () {
                                  lt[this.paddingLeft].drawImage(
                                    this,
                                    this.paddingRight,
                                    this.position,
                                    this.width,
                                    this.height
                                  );
                                }),
                                (ft.src = o[ht].url),
                                w[t].drawImage(ft, ut, v + J * tt + Y * Z + 0 * Q + it, dt, vt))),
                          (it += vt);
                      } else {
                        if (q < (1 == d ? K + w[t].measureText(A(nt[ot])).width : w[t].measureText(A(nt[ot])).width)) {
                          for (; 0 < at.length && ct <= at.length; ) {
                            var pt = at.slice(0, ct).join(' ');
                            if (q < (1 == d ? K + w[t].measureText(pt).width : w[t].measureText(pt).width)) {
                              for (
                                var gt = A(at.slice(0, ct - 1).join(' ')),
                                  wt = A(String(at.slice(ct - 1, ct))),
                                  yt = '',
                                  xt = '',
                                  mt = ((et = !1), 1);
                                mt <= wt.length;
                                mt++
                              )
                                if (
                                  ((yt = gt + ' ' + wt.substr(0, mt)),
                                  q <=
                                    (1 == d && 1 == rt ? K + w[t].measureText(yt).width : w[t].measureText(yt).width))
                                ) {
                                  et = !0;
                                  var bt = 0;
                                  String(yt.substr(0, yt.length - 1)),
                                    void wt.substr(mt - 1, 1) && void wt.substr(mt, 1)
                                      ? T(wt.substr(mt + 1, 1))
                                        ? (1 == ++bt && T(wt.substr(mt, 1)) && bt++,
                                          2 == bt && T(wt.substr(mt + 1, 1)) && bt++,
                                          void wt.substr(mt - 2, 1) && void wt.substr(mt - 3, 1) ? (xt = '-') : bt++)
                                        : (void wt.substr(mt, 1) &&
                                          void wt.substr(mt - 1, 1) &&
                                          void wt.substr(mt - 2, 1)
                                            ? (xt = '-')
                                            : bt++,
                                          void wt.substr(mt - 2, 1) || bt++)
                                      : void wt.substr(mt - 1, 1) && T(wt.substr(mt, 1))
                                      ? (bt++,
                                        void wt.substr(mt - bt - 1, 1) && void wt.substr(mt - bt - 2)
                                          ? ((xt = '-'), bt++)
                                          : void wt.substr(mt - bt - 1, 1) && (bt += 2))
                                      : (T(wt.substr(mt - 1, 1)) && bt++,
                                        1 == bt && T(wt.substr(mt, 1)) && bt++,
                                        2 == bt && T(wt.substr(mt - 2, 1)) && bt++,
                                        1 == bt ? (bt = 0) : 0 == bt && (bt = 1),
                                        2 <= bt &&
                                          void wt.substr(mt - bt, 1) &&
                                          void wt.substr(mt - bt - 1, 1) &&
                                          (bt++,
                                          void wt.substr(mt - bt - 1, 1) && void wt.substr(mt - bt - 2, 1)
                                            ? (xt = '-')
                                            : void wt.substr(1) && bt++));
                                  var _t =
                                      1 == d && 1 == rt
                                        ? K +
                                          w[t].measureText(yt.substr(0, yt.length - bt).replace(/ /gi, '') + xt).width
                                        : w[t].measureText(yt.substr(0, yt.length - bt).replace(/ /gi, '') + xt).width,
                                    St = A(wt.substr(0, mt - bt) + xt),
                                    Mt = gt.split(' ').length;
                                  '' == St && (Mt = gt.split(' ').length - 1);
                                  var Ot = (q - _t) / Mt,
                                    Et = 0;
                                  1 == d && 1 == rt && ((Et = K), (rt = !1));
                                  var Ct = 0;
                                  for (j = 1; j <= ct; j++) {
                                    var Pt,
                                      jt,
                                      Ft = A(String(at.slice(j - 1, j)));
                                    1 < ct && '' == Ft
                                      ? Ct++
                                      : 1 == j
                                      ? 1 == ct
                                        ? w[t].fillText(St, 0 + Et, v + J * tt + Y * Z + 0 * Q + it + -2)
                                        : w[t].fillText(
                                            at.slice(j - 1, j),
                                            0 + Et,
                                            v + J * tt + Y * Z + 0 * Q + it + -2
                                          )
                                      : 1 < j && j < ct
                                      ? ((Pt = w[t].measureText(A(at.slice(0, j - 1).join(''))).width),
                                        (Pt += Ot * parseFloat(j - Ct - 1)),
                                        ct == j + 1 && '' == A(St)
                                          ? ((jt = Math.ceil(c * C) - w[t].measureText(at.slice(j - 1, j)).width - 2),
                                            w[t].fillText(at.slice(j - 1, j), jt, v + J * tt + Y * Z + 0 * Q + it + -2))
                                          : w[t].fillText(
                                              at.slice(j - 1, j),
                                              Pt + Et,
                                              v + J * tt + Y * Z + 0 * Q + it + -2
                                            ))
                                      : ((jt = Math.ceil(c * C) - w[t].measureText(St).width),
                                        w[t].fillText(St, jt, v + J * tt + Y * Z + 0 * Q + it + -2));
                                  }
                                  at[ct - 1] = wt.substr(mt - bt, wt.length);
                                  break;
                                }
                              if (0 == et) {
                                var Tt = (Vt = A(gt) + ' ' + A(wt)).split(' ');
                                Et = 0;
                                1 == d && 1 == rt && ((Et = K), (rt = !1)),
                                  (Ot =
                                    (q - (_t = w[t].measureText(Vt.replace(/ /gi, '')).width + Et)) / (Tt.length - 1));
                                for (var kt = 0, It = 0; It < Tt.length; It++) {
                                  var At = kt + Ot * It + Et;
                                  It == Tt.length - 1 && (At = Math.ceil(c * C) - w[t].measureText(Tt[It]).width - 2),
                                    w[t].fillText(Tt[It], At, v + J * tt + Y * Z + 0 * Q + it + -2),
                                    (kt += w[t].measureText(Tt[It]).width);
                                }
                              }
                              Z++,
                                0 == this.G_ViewerMode || this.G_ViewerMode,
                                (0 != (at = 0 == et ? at.splice(ct) : at.splice(ct - 1)).length &&
                                  '' != at.join(' ')) ||
                                  Z--,
                                (ct = 1);
                            } else ct++;
                            if (1e3 < st) break;
                            st++;
                          }
                          if ((0 == this.G_ViewerMode || this.G_ViewerMode, 0 < ct)) {
                            (Et = 0), 1 == d && 1 == rt && ((Et = K), (rt = !1));
                            var Vt = at.join(' ');
                            if (q < (1 == d ? K + w[t].measureText(Vt).width : w[t].measureText(Vt).width))
                              for (
                                Tt = Vt.split(' '),
                                  Et = 0,
                                  1 == d && 1 == rt && ((Et = K), (rt = !1)),
                                  Ot =
                                    (q - (_t = w[t].measureText(Vt.replace(/ /gi, '')).width + Et)) / (Tt.length - 1),
                                  It = kt = 0;
                                It < Tt.length;
                                It++
                              )
                                (At = kt + Ot * It + Et),
                                  It == Tt.length - 1 && (At = Math.ceil(c * C) - w[t].measureText(Tt[It]).width - 2),
                                  w[t].fillText(Tt[It], At, v + J * tt + Y * Z + 0 * Q + it + -2),
                                  (kt += w[t].measureText(Tt[It]).width);
                            else w[t].fillText(A(at.join(' ')), 0 + Et, v + J * tt + Y * Z + 0 * Q + it + -2);
                          }
                        } else if (
                          ((Vt = at.join(' ')),
                          q < (1 == d ? K + w[t].measureText(Vt).width : w[t].measureText(Vt).width))
                        )
                          for (
                            Tt = Vt.split(' '),
                              Et = 0,
                              1 == d && 1 == rt && ((Et = K), (rt = !1)),
                              Ot = (q - (_t = w[t].measureText(Vt.replace(/ /gi, '')).width + Et)) / (Tt.length - 1),
                              It = kt = 0;
                            It < Tt.length;
                            It++
                          )
                            (At = kt + Ot * It + Et),
                              It == Tt.length - 1 && (At = Math.ceil(c * C) - w[t].measureText(Tt[It]).width - 2),
                              w[t].fillText(Tt[It], At, v + J * tt + Y * Z + 0 * Q + it + -2),
                              (kt += w[t].measureText(Tt[It]).width);
                        else
                          (Et = 0),
                            1 == d && 1 == rt && ((Et = K), (rt = !1)),
                            w[t].fillText(A(at.join(' ')), 0 + Et, v + J * tt + Y * Z + 0 * Q + it + -2);
                        0 == this.G_ViewerMode || this.G_ViewerMode;
                      }
                    }
                    0 == this.G_ViewerMode || this.G_ViewerMode,
                      1 < C && ($('#munCanva_' + m + '_' + t).width(c), $('#munCanva_' + m + '_' + t).height(l[m][t]));
                  }
                t === n && $('#viewer_loading').hide();
              }
              1 == O && (m++, (O = !1)),
                null == $.xcookie('bookmarkPos') && $('#bookmark_active').removeClass('on'),
                0 == m && m + 1 <= y.length - 1 && h[m][h[m].length - 1] <= a
                  ? this.drowCanvas(-1, -1, 'down')
                  : 'follow' == r && 0 == i.scrollTop() && 0 < m && ((O = !0), this.drowCanvas(-2, -2, 'up'));
            } else console.log('error');
          }
        }),
        (this.reDrowPageData = function (t, n) {
          if (1 != M) {
            var r = parseInt(
              i
                .find('canvas:first-child')
                .attr('id')
                .replace('munCanva_' + m + '_', '')
            );
            if ('next' == n)
              if ((t = r) < e[m].length - 1) {
                if ((2 == this.G_ViewerMode ? (t += 2) : t++, t > e[m].length - 1 && m < e.length - 1)) {
                  if (null == e[++m])
                    return m--, (S = !(M = !0)), void this.splitDrowText(null, !1, m + 1, !0, -1, 'pageNext');
                  t = 0;
                }
                if (2 == this.G_ViewerMode && t >= e[m].length) return 'next';
              } else {
                if (!(m < e.length - 1)) return 'next';
                if (null == e[++m])
                  return m--, (S = !(M = !0)), void this.splitDrowText(null, !1, m + 1, !0, -1, 'pageNext');
                t = 0;
              }
            if ('pre' == n)
              if (0 < (t = r)) 2 == this.G_ViewerMode ? (t -= 2) : t--;
              else {
                if (0 == m) return 0 == t ? 'pre' : void 0;
                if (null == e[--m])
                  return m++, (S = !(M = !0)), void this.splitDrowText(null, !1, parseInt(m) - 1, !0, -1, 'pagePre');
                t = e[m].length - 1;
              }
            var o = 0,
              a = 0;
            e.forEach(
              function (t, n) {
                (o += t.length), n < m && (a += t.length);
              }.bind(this)
            ),
              2 == this.G_ViewerMode
                ? (1 < (a += t + 1) && a % 2 == 0 && --a,
                  1 < o && o % 2 != 0 && o++,
                  a <= o && this.canvasPageObj.html(a + ' / ' + o))
                : ((a += t), this.canvasPageObj.html(a + 1 + ' / ' + o)),
              t < e[m].length &&
                (i.html(''),
                2 == this.G_ViewerMode
                  ? (1 < t && t % 2 != 0 && --t, a <= o && this.drowCanvas(t, t + 1, 'not'))
                  : this.drowCanvas(t, t, 'not')),
              t == e[m].length - 1 && e.length;
          }
        }),
        (this.getPage = function (t) {
          for (var n = 0; n < l[m].length; n++)
            if (t + a <= l[m][n]) {
              var e = n;
              break;
            }
          return e;
        }),
        (this.getNowReadPercent = function (t) {
          var n = 0,
            e = 0;
          if (-1 != t)
            return (
              (n = h[m][h[m].length - 1]), (e = t), 0 == this.G_ViewerMode ? (e /= n - a) : (e /= n), V((e *= 100), 3)
            );
        }),
        (this.getReadTxtPercent = function () {
          var t = 0,
            n = 0,
            e = 0,
            r = 0,
            o = 0,
            c = a;
          if (null == i) return t;
          if (!i.find('canvas:first-child').attr('id')) return t;
          if ('munCanva_temp' == i.find('canvas:first-child').attr('id')) return t;
          var s = i.find('canvas:first-child').attr('id').split('_'),
            u = m;
          if ((1 < i.find('canvas').size() && (u = i.find('canvas:nth-child(2)').attr('id').split('_')), s[1] == m))
            return (
              (n = h[m][h[m].length - 1]),
              (e =
                (r =
                  parseInt(
                    i
                      .find('canvas:first-child')
                      .attr('id')
                      .replace('munCanva_' + m + '_', '')
                  ) - 1) < 0
                  ? i.scrollTop()
                  : h[m][r] + i.scrollTop()),
              this.G_ViewerMode,
              (e /= n - a),
              (t = (e *= 100).toFixed(3)),
              m + '_' + t
            );
          var f = 0;
          return (
            (o += l[s[1]][s[2]]),
            u[1] != m && (o += l[u[1]][u[2]]),
            (e =
              0 < o && i.scrollTop() < o
                ? ((f = m - 1),
                  (r =
                    parseInt(
                      i
                        .find('canvas:first-child')
                        .attr('id')
                        .replace('munCanva_' + f + '_', '')
                    ) - 1) < 0
                    ? i.scrollTop()
                    : h[f][r] + i.scrollTop())
                : ((f = m), i.scrollTop() - o)),
            (n = h[f][h[f].length - 1]),
            0 == this.G_ViewerMode ? (e /= n - c) : (e /= n),
            100 < (t = V((e *= 100), 3)) && (t = 100),
            f + '_' + t
          );
        }),
        (this.getReadPercent = function () {
          var t = 0,
            n = 0,
            e = 0,
            r = 0;
          if (null == i) return t;
          if (!i.find('canvas:first-child').attr('id')) return t;
          if ('munCanva_temp' == i.find('canvas:first-child').attr('id')) return t;
          var o = i.find('canvas:first-child').attr('id').split('_'),
            c = m;
          if ((1 < i.find('canvas').size() && (c = i.find('canvas:nth-child(2)').attr('id').split('_')), -1 < _)) {
            for (var s = 0, u = ((n = _), 0); u < h.length; u++) u <= m - 1 && (s += h[u][h[u].length - 1]);
            o[1] == m
              ? ((e =
                  (r =
                    parseInt(
                      i
                        .find('canvas:first-child')
                        .attr('id')
                        .replace('munCanva_' + m + '_', '')
                    ) - 1) < 0
                    ? i.scrollTop()
                    : h[m][r] + i.scrollTop()),
                (e += s))
              : o[1] != m && c[1] == m
              ? ((e = i.scrollTop() - l[o[1]][o[2]] + a), (e += s))
              : o[1] != m && c[1] != m && ((e = i.scrollTop() - l[o[1]][o[2]] - l[c[1]][c[2]]), (e += s));
          } else
            (n = h[m][h[m].length - 1] * y.length),
              o[1] == m
                ? ((e =
                    (r =
                      parseInt(
                        i
                          .find('canvas:first-child')
                          .attr('id')
                          .replace('munCanva_' + m + '_', '')
                      ) - 1) < 0
                      ? i.scrollTop()
                      : h[m][r] + i.scrollTop()),
                  (e += m * h[m][h[m].length - 1]))
                : o[1] != m && c[1] == m
                ? ((e = i.scrollTop() - l[o[1]][o[2]]), (e += m * h[m][h[m].length - 1]))
                : o[1] != m &&
                  c[1] != m &&
                  ((e = i.scrollTop() - l[o[1]][o[2]] - l[c[1]][c[2]]), (e += m * h[m][h[m].length - 1]));
          return this.G_ViewerMode, (e /= n - a), (e *= 100).toFixed(3);
        }),
        (this.getPercentHeight = function (t) {
          var n = h[m][h[m].length - 1],
            e = t;
          return (e /= 100), 0 == this.G_ViewerMode ? (e *= n - a) : (e *= n), Math.ceil(e);
        }),
        (this.getOuterPercentHeight = function (t) {
          var n = h[m][h[m].length - 1],
            e = ((n = -1 < _ ? _ : h[m][h[m].length - 1] * y.length), t);
          return (e /= 100), 0 == this.G_ViewerMode ? (e *= n - a) : (e *= n), Math.round(e);
        }),
        (this.reSizeView = function (t, n, r) {
          var o = (o = this.getReadTxtPercent()).split('_');
          $('#viewer_loading').show(),
            (m = parseInt(o[0])),
            (p = parseFloat(o[1])),
            (a = n),
            (c = t),
            (_ = -1),
            (this.G_IsExpandedMode = r),
            (e = null),
            (e = new Array(y.length)),
            (l = []),
            (h = []),
            (f = []),
            (u = !0),
            i.html('');
          var s =
            '<canvas id="munCanva_temp" width="' +
            (x.any() ? c : $(window).width()) +
            '" height="' +
            a +
            '" style="background-image:url(\'' +
            P +
            '\');"></canvas>';
          i.append(s);
          var d = document.getElementById('munCanva_temp').getContext('2d');
          setTimeout(
            function () {
              this.settingCanvas(d);
            }.bind(this),
            0
          );
        }),
        (this.getIsExpandedMode = function () {
          return this.G_IsExpandedMode;
        }),
        (this.followUp = function (t, n) {
          for (var e = 0, r = -1, i = ((e = 1 == n ? this.getPercentHeight(t) : t), 0); i < h[m].length; i++)
            if (e <= h[m][i]) {
              r = i;
              break;
            }
          -1 == r && (r = h[m].length - 1),
            (e = 0 < r ? e - h[m][r - 1] : e),
            0 == this.G_ViewerMode
              ? (this.drowCanvas(r, e, 'follow'),
                setTimeout(
                  function () {
                    var t = this.getReadPercent();
                    this.canvasPageObj.html(Math.ceil(t) + ' / 100%');
                  }.bind(this),
                  100
                ))
              : (2 == this.G_ViewerMode && r % 2 == 1 && --r, this.reDrowPageData(r, 'now'));
        }),
        (this.outerFollowUp = function (t) {
          var n = this.getOuterPercentHeight(t),
            r = 0;
          if (-1 < _) {
            for (var i = 0, o = 0; o < h.length; o++)
              if (n <= (i += h[o][h[o].length - 1])) {
                n -= i - h[(m = o)][h[o].length - 1];
                break;
              }
          } else {
            var a = Math.floor(n / h[parseInt(m)][h[parseInt(m)].length - 1]);
            (n -= h[m][h[m].length - 1] * a), (m = (m = a) >= y.length - 1 ? y.length - 1 : m);
          }
          if (null != h[m])
            for (o = 0; o < h[m].length; o++)
              if (n <= h[m][o]) {
                r = o;
                break;
              }
          if (null == e[m])
            return (
              (S = !1),
              -1 == _ && m == y.length - 1 && ((p = t), (n = -2)),
              void this.splitDrowText(null, !1, m, !0, n, 'follow')
            );
          h[m][r] - n <= 100 && 0 == this.G_ViewerMode
            ? (--r < 0 && (r = 0), (n = l[m][r] + (h[m][r + 1] - n)))
            : (n -= h[m][r - 1]),
            r < 0 && (r = 0),
            0 == this.G_ViewerMode
              ? ('mobile' == E &&
                  0 < $('body').scrollTop() &&
                  ($('.novelist_greeting_wrap').css('display', 'none'), $('body').scrollTop(0)),
                this.drowCanvas(r, n, 'follow'))
              : this.reDrowPageData(r, 'now');
        }),
        (this.changeViewerMode = function (t) {
          var n, e;
          this.G_ViewerMode != t &&
            ((t = parseInt(t)),
            $.xcookie('XVMode', t, { expires: 365 }),
            (this.G_ViewerMode = t),
            (n = navigator.userAgent.toLowerCase()),
            0 === t
              ? -1 != n.indexOf('msie')
                ? this.canvasObj.css('ms-overflow-y', 'scroll')
                : this.canvasObj.css('overflow-y', 'scroll')
              : -1 != n.indexOf('msie')
              ? this.canvasObj.css('ms-overflow-y', 'hidden')
              : this.canvasObj.css('overflow-y', 'hidden'),
            this.G_IsExpandedMode &&
              ((e = $(window).width()),
              2 === t
                ? (e % 2 != 0 && (e += 1), this.canvasObj.css({ width: e + 'px', 'text-align': 'center' }))
                : this.canvasObj.css({ width: e + this.scrollWidth + 'px', 'text-align': 'unset' })),
            this.canvasObj.unbind('click'),
            0 !== this.G_ViewerMode && this.bindPageMove(),
            this.reSizeView(c, a, this.G_IsExpandedMode));
        }),
        (this.changeBackgroundColor = function (t) {
          $.xcookie('XVBackgroundColor', t, { expires: 365 });
        }),
        (this.changeTextColor = function (t) {
          $.xcookie('XVColor', t, { expires: 365 });
          var n = (n = this.getReadTxtPercent()).split('_');
          (m = parseInt(n[0])), (p = parseFloat(n[1])), this.followUp(p, !0);
        }),
        (this.changeThemeColor = function (t, n) {
          $.xcookie('XVBackgroundColor', t, { expires: 365 }),
            $.xcookie('XVColor', n, { expires: 365 }),
            (w.fillStyle = '#' + this.removeHex(n));
          var e = (e = this.getReadTxtPercent()).split('_');
          (m = parseInt(e[0])), (p = parseFloat(e[1])), this.followUp(p, !0);
        }),
        (this.changeParagraphSpace = function (t) {
          $.xcookie('paragraphSpace', t, { expires: 365 }), this.reSizeView(c, a);
        }),
        (this.changeLinePer = function (t) {
          $.xcookie('XVLineHeight', t, { expires: 365 }), this.reSizeView(c, a);
        }),
        (this.changeLineEnterPer = function (t) {
          $.xcookie('lineEnterPer', t, { expires: 365 }), this.reSizeView(c, a);
        }),
        (this.changeTextSize = function (t) {
          $.xcookie('XVFontSize', t, { expires: 365 }), this.reSizeView(c, a);
        }),
        (this.changeAspectRatio = function (t) {
          parseFloat($.xcookie('aspectRatio')) != t &&
            ($.xcookie('aspectRatio', parseFloat(t), { expires: 365 }), this.reSizeView(c, a, this.G_IsExpandedMode));
        }),
        (this.changeTextFont = function (t) {
          $.xcookie('XVFont', t, { expires: 365 }), this.reSizeView(c, a);
        });
      var j = function (t, n, e, r) {
          for (
            var i = (function (t) {
                var n,
                  e,
                  r,
                  i,
                  o,
                  a,
                  c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                  s = '',
                  u = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ''); u < t.length; )
                  (n = (c.indexOf(t.charAt(u++)) << 2) | ((i = c.indexOf(t.charAt(u++))) >> 4)),
                    (e = ((15 & i) << 4) | ((o = c.indexOf(t.charAt(u++))) >> 2)),
                    (r = ((3 & o) << 6) | (a = c.indexOf(t.charAt(u++)))),
                    (s += String.fromCharCode(n)),
                    64 != o && (s += String.fromCharCode(e)),
                    64 != a && (s += String.fromCharCode(r));
                for (var f = '', l = ((u = 0), 0), h = 0; u < s.length; )
                  (l = s.charCodeAt(u)) < 128
                    ? ((f += String.fromCharCode(l)), u++)
                    : 191 < l && l < 224
                    ? ((h = s.charCodeAt(u + 1)), (f += String.fromCharCode(((31 & l) << 6) | (63 & h))), (u += 2))
                    : ((h = s.charCodeAt(u + 1)),
                      (c3 = s.charCodeAt(u + 2)),
                      (f += String.fromCharCode(((15 & l) << 12) | ((63 & h) << 6) | (63 & c3))),
                      (u += 3));
                return f;
              })(t),
              o = '',
              a = 0;
            a < 6;
            a++
          ) {
            var c = i.substr(a, 1);
            o += F(c, r);
          }
          i = i.substr(6, i.length);
          var s = CryptoJS.enc.Utf8.parse(n + o),
            u = CryptoJS.enc.Utf8.parse(e.substr(0, 16));
          return CryptoJS.AES.decrypt(i, s, {
            keySize: 16,
            iv: u,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
          }).toString(CryptoJS.enc.Utf8);
        },
        F = function (t, n) {
          for (
            var e,
              r,
              i,
              o,
              a,
              c,
              s,
              u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
              f = '',
              l = 0,
              h = '',
              d = (d = t).replace(/\r\n/g, '\n'),
              v = 0;
            v < d.length;
            v++
          ) {
            var p = d.charCodeAt(v);
            p < 128
              ? (h += String.fromCharCode(p))
              : (127 < p && p < 2048
                  ? (h += String.fromCharCode((p >> 6) | 192))
                  : ((h += String.fromCharCode((p >> 12) | 224)), (h += String.fromCharCode(((p >> 6) & 63) | 128))),
                (h += String.fromCharCode((63 & p) | 128)));
          }
          for (; l < h.length; )
            (o = (e = h.charCodeAt(l++)) >> 2),
              (a = ((3 & e) << 4) | ((r = h.charCodeAt(l++)) >> 4)),
              (c = ((15 & r) << 2) | ((i = h.charCodeAt(l++)) >> 6)),
              (s = 63 & i),
              isNaN(r) ? (c = s = 64) : isNaN(i) && (s = 64),
              (f = f + u.charAt(o) + u.charAt(a) + u.charAt(c) + u.charAt(s));
          t = f;
          for (
            var g = 0,
              w = 0,
              y = {},
              x = '',
              m = '',
              b = '',
              _ = '',
              S = ((l = 0), 0),
              M = '',
              O = 0,
              E = 0,
              C = 0,
              P = function (t, n, e) {
                for (var r = [], i = t.length; i; --i)
                  for (var o = t[i - 1], a = 8; a; --a) r.push(o % 2 ? 1 : 0), (o >>= 1);
                r.reverse();
                var c = r.join(''),
                  s = (1 << (n - 1)) - 1,
                  u = parseInt(c.substring(0, 1), 2) ? -1 : 1,
                  f = parseInt(c.substring(1, 1 + n), 2),
                  l = parseInt(c.substring(1 + n), 2);
                return f === (1 << n) - 1
                  ? 0 !== l
                    ? NaN
                    : (1 / 0) * u
                  : 0 < f
                  ? u * Math.pow(2, f - s) * (1 + l / Math.pow(2, e))
                  : 0 !== l
                  ? u * Math.pow(2, -(s - 1)) * (l / Math.pow(2, e))
                  : 0 * u;
              };
            g < 'C*'.length;

          ) {
            for (x = 'C*'.charAt(g), m = '', g++; g < 'C*'.length && null !== 'C*'.charAt(g).match(/[\d\*]/); )
              (m += 'C*'.charAt(g)), g++;
            for ('' === m && (m = '1'), b = ''; g < 'C*'.length && '/' !== 'C*'.charAt(g); ) (b += 'C*'.charAt(g)), g++;
            switch (('/' === 'C*'.charAt(g) && g++, x)) {
              case 'a':
              case 'A':
                (m = '*' === m ? t.length - w : parseInt(m, 10)), (_ = t.substr(w, m)), (w += m);
                var j = _.replace(/ +$/, '');
                'a' === x && (j = _.replace(/\0+$/, '')), (y[b] = j);
                break;
              case 'h':
              case 'H':
                for (
                  m = '*' === m ? t.length - w : parseInt(m, 10), _ = t.substr(w, m), w += m, j = '', l = 0;
                  l < _.length;
                  l++
                )
                  (M = _.charCodeAt(l).toString(16)), 'h' === x && (M = M[1] + M[0]), (j += M);
                y[b] = j;
                break;
              case 'c':
              case 'C':
                for (
                  m = '*' === m ? t.length - w : parseInt(m, 10), _ = t.substr(w, m), w += m, l = 0;
                  l < _.length;
                  l++
                )
                  (j = _.charCodeAt(l)), 'c' === x && 128 <= j && (j -= 256), (y[b + (1 < m ? l + 1 : '')] = j);
                break;
              case 'S':
              case 's':
              case 'v':
                for (
                  m = '*' === m ? (t.length - w) / 2 : parseInt(m, 10), _ = t.substr(w, 2 * m), w += 2 * m, l = 0;
                  l < _.length;
                  l += 2
                )
                  (j = ((255 & _.charCodeAt(l + 1)) << 8) + (255 & _.charCodeAt(l))),
                    's' === x && 32768 <= j && (j -= 65536),
                    (y[b + (1 < m ? l / 2 + 1 : '')] = j);
                break;
              case 'n':
                for (
                  m = '*' === m ? (t.length - w) / 2 : parseInt(m, 10), _ = t.substr(w, 2 * m), w += 2 * m, l = 0;
                  l < _.length;
                  l += 2
                )
                  (j = ((255 & _.charCodeAt(l)) << 8) + (255 & _.charCodeAt(l + 1))),
                    (y[b + (1 < m ? l / 2 + 1 : '')] = j);
                break;
              case 'i':
              case 'I':
              case 'l':
              case 'L':
              case 'V':
                for (
                  m = '*' === m ? (t.length - w) / 4 : parseInt(m, 10), _ = t.substr(w, 4 * m), w += 4 * m, l = 0;
                  l < _.length;
                  l += 4
                )
                  (j =
                    ((255 & _.charCodeAt(l + 3)) << 24) +
                    ((255 & _.charCodeAt(l + 2)) << 16) +
                    ((255 & _.charCodeAt(l + 1)) << 8) +
                    (255 & _.charCodeAt(l))),
                    (y[b + (1 < m ? l / 4 + 1 : '')] = j);
                break;
              case 'N':
                for (
                  m = '*' === m ? (t.length - w) / 4 : parseInt(m, 10), _ = t.substr(w, 4 * m), w += 4 * m, l = 0;
                  l < _.length;
                  l += 4
                )
                  (j =
                    ((255 & _.charCodeAt(l)) << 24) +
                    ((255 & _.charCodeAt(l + 1)) << 16) +
                    ((255 & _.charCodeAt(l + 2)) << 8) +
                    (255 & _.charCodeAt(l + 3))),
                    (y[b + (1 < m ? l / 4 + 1 : '')] = j);
                break;
              case 'f':
              case 'd':
                for (
                  E = 8,
                    O = 'f' === x ? 23 : 52,
                    C = 4,
                    'd' === x && ((E = 11), (C = 8)),
                    m = '*' === m ? (t.length - w) / C : parseInt(m, 10),
                    _ = t.substr(w, m * C),
                    w += m * C,
                    l = 0;
                  l < _.length;
                  l += C
                ) {
                  var F = [];
                  for (S = (t = _.substr(l, C)).length - 1; 0 <= S; --S) F.push(t.charCodeAt(S));
                  y[b + (1 < m ? l / 4 + 1 : '')] = P(F, E, O);
                }
                break;
              case 'x':
              case 'X':
              case '@':
                0 < (m = '*' === m ? t.length - w : parseInt(m, 10)) &&
                  ('X' === x ? (w -= m) : 'x' === x ? (w += m) : (w = m));
            }
          }
          var T = 0;
          return (
            $.each(y, function (t, e) {
              t != n || (T = e);
            }),
            String.fromCharCode(T)
          );
        };
      function T(t) {
        return /[.|…|'|"|”|’|)|}|』|>|\]|•|,|·|?|』|〕|」|〉|）|〕|｝|】|》|!]/.test(t);
      }
      function k(t) {
        return /^{@PIC:.*}$/.test(t);
      }
      function I(t) {
        return (t = t.replace(/^{@PIC:/gi, '')).replace(/}$/gi, '');
      }
      function A(t) {
        return t.replace(/(^\s*)|(\s*$)/gi, '');
      }
      function V(t, n) {
        var e = Math.pow(10, n - 1);
        return (t = Math.floor(t * e) / e).toFixed(n);
      }
      (this.isSupportedCanvas = function () {
        var t = document.createElement('canvas');
        return !(!t.getContext || !t.getContext('2d'));
      }),
        (this.removeHex = function (t) {
          return t.replace('0x', '');
        }),
        (this.bindScroll = function () {
          var t = 0,
            n = this.canvasObj,
            e = this;
          this.canvasObj.unbind('scroll'),
            this.canvasObj.on('scroll', function (r) {
              var i, o;
              0 === munpiaViewer.G_ViewerMode &&
                ((i = n.scrollTop()),
                !0,
                (o = t <= i),
                (t = i),
                !0 === o &&
                  this.offsetHeight + this.scrollTop >= this.scrollHeight - 19 * e.oneLineHeight &&
                  e.drowCanvas(-1, -1, 'down'),
                ((!1 === o && i <= 19 * e.oneLineHeight) || (!0 === o && 0 === i && i <= 19 * e.oneLineHeight)) &&
                  e.drowCanvas(-2, -2, 'up'));
            });
        }),
        (this.openFullScreen = function () {
          var t,
            n,
            e,
            r = document.documentElement;
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.msFullscreenEnabled ||
          document.mozFullScreenEnabled
            ? document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement ||
              document.mozFullScreenElement ||
              (r.requestFullscreen
                ? r.requestFullscreen()
                : r.mozRequestFullScreen
                ? r.mozRequestFullScreen()
                : r.webkitRequestFullscreen
                ? r.webkitRequestFullscreen()
                : r.msRequestFullscreen && r.msRequestFullscreen())
            : ((t = $(window).width()),
              (n = $(window).height() - 100),
              t % 2 != 0 && (t += 1),
              this.canvasPageObj.css({ width: t + 'px', height: n + 'px' }),
              this.canvasObj.css({ width: t + 'px', height: n + 'px', 'text-align': 'center' }),
              (e = t - 2 * this.padding),
              this.reSizeView(e, n, !0),
              setTimeout(
                function () {
                  this.changeViewerMode(2);
                }.bind(this),
                100
              ));
        }),
        (this.closeFullScreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.msExitFullscreen && document.msExitFullscreen();
        }),
        (this.fullScreenHandler = function () {
          var t = munpiaViewer.defaultWidth,
            n = munpiaViewer.defaultHeight,
            e = 0;
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
            ? ($('.trigger-contract').removeClass('trigger-contract').addClass('trigger-expand'),
              $('.trigger-viewer,.trigger-twopage,.trigger-onepage,.trigger-scroll,.trigger-expand').css(
                'visibility',
                'hidden'
              ),
              $('body', $(document)).css('overflow', 'hidden'),
              $('.trigger-fullscreen').addClass('active-fullscreen'),
              $('#viewer_wrap', $('#board')).css({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                'z-index': '5000',
              }),
              setTimeout(
                function () {
                  (t = $(window).width()),
                    (n = $(window).height() - 100),
                    t % 2 != 0 && (t += 1),
                    this.canvasParentObj.css({ width: t + 'px', height: n + 'px' }),
                    this.canvasObj.css({ width: t + 'px', height: n + 'px', 'text-align': 'center' }),
                    (r = this.G_ViewerMode),
                    (e = t - 2 * this.padding),
                    this.reSizeView(e, n, !0),
                    setTimeout(
                      function () {
                        this.changeViewerMode(2);
                      }.bind(this),
                      300
                    );
                }.bind(this),
                300
              ))
            : ($('.trigger-contract').removeClass('trigger-contract').addClass('trigger-expand'),
              $('.trigger-viewer,.trigger-twopage,.trigger-onepage,.trigger-scroll,.trigger-expand').css(
                'visibility',
                'visible'
              ),
              $('body', $(document)).css('overflow', 'auto'),
              $('.trigger-fullscreen').removeClass('active-fullscreen'),
              $('#viewer_wrap', $('#board')).css({
                position: 'relative',
                top: '',
                left: '',
                width: '',
                height: '',
                'z-index': '',
              }),
              t % 2 != 0 && (t += 1),
              this.canvasParentObj.css({ width: t + 'px', height: n + 'px' }),
              this.canvasObj.css({ width: t + this.scrollWidth + 'px', height: n + 'px', 'text-align': 'unset' }),
              (e = t - 2 * this.padding),
              munpiaViewer.reSizeView(e, n, !1),
              setTimeout(
                function () {
                  changeViewerMode(r);
                }.bind(this),
                100
              ));
        }),
        (this.bindPageMove = function () {
          this.canvasObj.bind(
            'click',
            function (t) {
              var n = this.canvasObj.width() / 3;
              0 <= t.offsetX && t.offsetX < n
                ? munpiaViewer.reDrowPageData(0, 'pre')
                : (t.offsetX >= n && t.offsetX < 2 * n) || munpiaViewer.reDrowPageData(0, 'next');
            }.bind(this)
          );
        });
    }
    e.r(n),
      e.d(n, 'default', function () {
        return r;
      });
  },
]).default;
var munpiaViewer = new MunViewer();
$(document).ready(function () {
  loadViewer();
});
function loadViewer() {
  if (!munpiaViewer.isSupportedCanvas()) {
    alert('캔버스뷰어를 지원하지 않는 브라우저입니다.');
    viewerLog(0, true);
    return;
  }
  var response = JSON.parse($('#viewerType').val());
  var w = munpiaViewer.defaultWidth - munpiaViewer.padding * 2;
  var h = munpiaViewer.defaultHeight;
  var textPosition = 0;
  var position = 0;
  munpiaViewer.init();
  munpiaViewer.drow(response.viewerObj.text, response.viewerObj.imgObj, h, w, textPosition, position, 'pc');
  $('#MOVEPAGE', $Novel).affixy({
    event: 'scroll',
    className: 'xmoving',
    classTo: $Novel,
    where: 'bottom',
    before: function (e) {
      if (!this.hasClass('afficy-width')) this.width(this.origin.width).addClass('afficy-width');
      if (e.type === 'resize') this.width(this.origin.width - (this.origin.outerWidth - $Novel.width()));
    },
    boundaryTop: '#FDUMMY',
  });
  $(window).triggerHandler('scroll');
  $('#focusViewer').focus();
}
function changeViewerMode(mode) {
  munpiaViewer.changeViewerMode(mode);
}
function changeViewerRatio(value) {
  munpiaViewer.changeAspectRatio(value);
}
function changeFullScreenMode() {
  if ($('.trigger-fullscreen').hasClass('active-fullscreen')) {
    munpiaViewer.closeFullScreen();
  } else {
    munpiaViewer.openFullScreen();
  }
}
