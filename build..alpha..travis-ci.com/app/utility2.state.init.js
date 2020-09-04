(function (state) {
let utility2 = globalThis.utility2;
utility2.assetsDict = utility2.assetsDict || {};
utility2.env = utility2.env || {};
Object.assign(utility2.assetsDict, state.assetsDict);
Object.assign(utility2.env, state.env);
}(
{"assetsDict":{"/assets.example.html":"","/assets.example.js":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\nexample.js\n\nthis script will run node-demo of sqlite3-lite\n\ninstruction\n    1. save this script as example.js\n    2. run shell-command:\n        $ npm install sqlite3-lite && \\\n            PORT=8081 node example.js\n    3. edit this script to suit your needs\n*/\n\n\n/* istanbul instrument in package sqlite3 */\n/* jslint utility2:true */\n/* istanbul ignore next */\n// run shared js-env code - init-local\n(function () {\n    \"use strict\";\n    let db;\n    let sqlite3;\n    sqlite3 = (\n        globalThis.utility2_rollup\n        || globalThis.utility2_jslint\n        || globalThis.utility2_moduleExports\n    );\n    db = new sqlite3.Database(\":memory:\");\n    db.serialize(function () {\n        let ii;\n        let stmt;\n        db.run(\"CREATE TABLE lorem (info TEXT)\");\n        stmt = db.prepare(\"INSERT INTO lorem VALUES (?)\");\n        ii = 0;\n        while (ii < 10) {\n            stmt.run(\"Ipsum \" + ii);\n            ii += 1;\n        }\n        stmt.finalize();\n        db.each(\"SELECT rowid AS id, info FROM lorem\", function (err, row) {\n            if (err) {\n                throw err;\n            }\n            console.log(row.id + \": \" + row.info);\n        });\n    });\n    db.close();\n}());\n","/assets.test.js":"/* istanbul instrument in package sqlite3 */\n// assets.utility2.header.js - start\n/* jslint utility2:true */\n/* istanbul ignore next */\n// run shared js-env code - init-local\n(function () {\n    \"use strict\";\n    let isBrowser;\n    let isWebWorker;\n    let local;\n    // init debugInline\n    if (!globalThis.debugInline) {\n        let consoleError;\n        consoleError = console.error;\n        globalThis.debugInline = function (...argList) {\n        /*\n         * this function will both print <argList> to stderr\n         * and return <argList>[0]\n         */\n            consoleError(\"\\n\\ndebugInline\");\n            consoleError(...argList);\n            consoleError(\"\\n\");\n            return argList[0];\n        };\n    }\n    // init isBrowser\n    isBrowser = (\n        typeof globalThis.XMLHttpRequest === \"function\"\n        && globalThis.navigator\n        && typeof globalThis.navigator.userAgent === \"string\"\n    );\n    // init isWebWorker\n    isWebWorker = (\n        isBrowser && typeof globalThis.importScripts === \"function\"\n    );\n    // init function\n    function objectDeepCopyWithKeysSorted(obj) {\n    /*\n     * this function will recursively deep-copy <obj> with keys sorted\n     */\n        let sorted;\n        if (typeof obj !== \"object\" || !obj) {\n            return obj;\n        }\n        // recursively deep-copy list with child-keys sorted\n        if (Array.isArray(obj)) {\n            return obj.map(objectDeepCopyWithKeysSorted);\n        }\n        // recursively deep-copy obj with keys sorted\n        sorted = {};\n        Object.keys(obj).sort().forEach(function (key) {\n            sorted[key] = objectDeepCopyWithKeysSorted(obj[key]);\n        });\n        return sorted;\n    }\n    function assertJsonEqual(aa, bb) {\n    /*\n     * this function will assert JSON.stringify(<aa>) === JSON.stringify(<bb>)\n     */\n        aa = JSON.stringify(objectDeepCopyWithKeysSorted(aa));\n        bb = JSON.stringify(objectDeepCopyWithKeysSorted(bb));\n        if (aa !== bb) {\n            throw new Error(JSON.stringify(aa) + \" !== \" + JSON.stringify(bb));\n        }\n    }\n    function assertOrThrow(passed, msg) {\n    /*\n     * this function will throw <msg> if <passed> is falsy\n     */\n        if (passed) {\n            return;\n        }\n        throw (\n            (\n                msg\n                && typeof msg.message === \"string\"\n                && typeof msg.stack === \"string\"\n            )\n            // if msg is err, then leave as is\n            ? msg\n            : new Error(\n                typeof msg === \"string\"\n                // if msg is string, then leave as is\n                ? msg\n                // else JSON.stringify(msg)\n                : JSON.stringify(msg, undefined, 4)\n            )\n        );\n    }\n    function coalesce(...argList) {\n    /*\n     * this function will coalesce null, undefined, or \"\" in <argList>\n     */\n        let arg;\n        let ii;\n        ii = 0;\n        while (ii < argList.length) {\n            arg = argList[ii];\n            if (arg !== undefined && arg !== null && arg !== \"\") {\n                return arg;\n            }\n            ii += 1;\n        }\n        return arg;\n    }\n    function identity(val) {\n    /*\n     * this function will return <val>\n     */\n        return val;\n    }\n    function nop() {\n    /*\n     * this function will do nothing\n     */\n        return;\n    }\n    function objectAssignDefault(tgt = {}, src = {}, depth = 0) {\n    /*\n     * this function will if items from <tgt> are null, undefined, or \"\",\n     * then overwrite them with items from <src>\n     */\n        let recurse;\n        recurse = function (tgt, src, depth) {\n            Object.entries(src).forEach(function ([\n                key, bb\n            ]) {\n                let aa;\n                aa = tgt[key];\n                if (aa === undefined || aa === null || aa === \"\") {\n                    tgt[key] = bb;\n                    return;\n                }\n                if (\n                    depth !== 0\n                    && typeof aa === \"object\" && aa && !Array.isArray(aa)\n                    && typeof bb === \"object\" && bb && !Array.isArray(bb)\n                ) {\n                    recurse(aa, bb, depth - 1);\n                }\n            });\n        };\n        recurse(tgt, src, depth | 0);\n        return tgt;\n    }\n    function onErrorThrow(err) {\n    /*\n     * this function will throw <err> if exists\n     */\n        if (err) {\n            throw err;\n        }\n    }\n    // bug-workaround - throw unhandledRejections in node-process\n    if (\n        typeof process === \"object\" && process\n        && typeof process.on === \"function\"\n        && process.unhandledRejections !== \"strict\"\n    ) {\n        process.unhandledRejections = \"strict\";\n        process.on(\"unhandledRejection\", function (err) {\n            throw err;\n        });\n    }\n    // init local\n    local = {};\n    local.local = local;\n    globalThis.globalLocal = local;\n    local.assertJsonEqual = assertJsonEqual;\n    local.assertOrThrow = assertOrThrow;\n    local.coalesce = coalesce;\n    local.identity = identity;\n    local.isBrowser = isBrowser;\n    local.isWebWorker = isWebWorker;\n    local.nop = nop;\n    local.objectAssignDefault = objectAssignDefault;\n    local.objectDeepCopyWithKeysSorted = objectDeepCopyWithKeysSorted;\n    local.onErrorThrow = onErrorThrow;\n}());\n// assets.utility2.header.js - end\n\n\n/* jslint utility2:true */\n(function (local) {\n\"use strict\";\n\n\n/* istanbul ignore next */\n// run shared js-env code - init-before\n(function () {\n// init local\nlocal = globalThis.utility2 || require(\"utility2\");\nlocal = local.requireReadme();\nglobalThis.local = local;\n// init test\nlocal.testRunDefault(local);\n}());\n\n\n// run shared js-env code - function\n(function () {\nlocal.testCase_buildApp_default = function (opt, onError) {\n/*\n * this function will test buildApp's default handling-behavior\n */\n    local._testCase_buildApp_default({\n        assetsList: [\n            {\n                file: \"/\" + local.sqlite3_binding_file,\n                url: \"/\" + local.sqlite3_binding_file\n            }\n        ]\n    }, onError, opt);\n};\n}());\n}());\n","/index.rollup.html":"<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!-- \"assets.utility2.template.html\" -->\n<title>sqlite3-lite (2020.8.19)</title>\n<style>\n/* jslint utility2:true */\n/*csslint\n*/\n/* csslint ignore:start */\n*,\n*:after,\n*:before {\n    box-sizing: border-box;\n}\n.uiAnimateSlide {\n    overflow-y: hidden;\n    transition: max-height ease-in 250ms, min-height ease-in 250ms, padding-bottom ease-in 250ms, padding-top ease-in 250ms;\n}\n/* csslint ignore:end */\n@keyframes uiAnimateSpin {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\na {\n    overflow-wrap: break-word;\n}\nbody {\n    background: #f7f7f7;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: small;\n    margin: 0 40px;\n}\nbody > div,\nbody > input,\nbody > pre,\nbody > .button,\nbody > .textarea {\n    margin-bottom: 20px;\n    margin-top: 0;\n}\nbody > input,\nbody > .button {\n    width: 20rem;\n}\nbody > .readonly {\n    background: #ddd;\n}\nbody > .textarea {\n    height: 10rem;\n    resize: vertical;\n    width: 100%;\n}\ncode,\npre,\n.textarea {\n    font-family: Consolas, Menlo, monospace;\n    font-size: smaller;\n}\npre {\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n}\n.button {\n    background: #ddd;\n    border: 1px solid #999;\n    color: #000;\n    cursor: pointer;\n    display: inline-block;\n    padding: 2px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n.button:hover {\n    background: #bbb;\n}\n.colorError {\n    color: #d00;\n}\n.textarea {\n    background: #fff;\n    border: 1px solid #999;\n    border-radius: 0;\n    cursor: auto;\n    overflow: auto;\n    padding: 2px;\n}\n.zeroPixel {\n    border: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    width: 0;\n}\n</style>\n</head>\n<body>\n<div class=\"uiAnimateSpin\" style=\"animation: uiAnimateSpin 2s linear infinite; border: 5px solid #999; border-radius: 50%; border-top: 5px solid #7d7; display: none; height: 25px; vertical-align: middle; width: 25px;\"></div>\n<script>\n/* jslint utility2:true */\n// polyfill globalThis\n(function () {\n/*\n * this function will polyfill globalThis\n */\n    \"use strict\";\n    window.globalThis = window.globalThis || globalThis;\n}());\n\n\n// init domOnEventWindowOnloadTimeElapsed\n(function () {\n/*\n * this function will measure and print time-elapsed for window.onload\n */\n    \"use strict\";\n    if (!(\n        typeof window === \"object\" && window && window.document\n        && typeof document.addEventListener === \"function\"\n    ) || window.domOnEventWindowOnloadTimeElapsed) {\n        return;\n    }\n    window.domOnEventWindowOnloadTimeElapsed = Date.now() + 100;\n    window.addEventListener(\"load\", function () {\n        setTimeout(function () {\n            window.domOnEventWindowOnloadTimeElapsed = (\n                Date.now()\n                - window.domOnEventWindowOnloadTimeElapsed\n            );\n            console.error(\n                \"domOnEventWindowOnloadTimeElapsed = \"\n                + window.domOnEventWindowOnloadTimeElapsed\n            );\n        }, 100);\n    });\n}());\n\n\n// init domOnEventAjaxProgressUpdate\n(function () {\n/*\n * this function will display incrementing ajax-progress-bar\n */\n    \"use strict\";\n    let opt;\n    let styleBar0;\n    let styleBar;\n    let styleModal0;\n    let styleModal;\n    let timeStart;\n    let timerInterval;\n    let timerTimeout;\n    let tmp;\n    let width;\n    try {\n        if (\n            window.domOnEventAjaxProgressUpdate\n            || !document.getElementById(\"domElementAjaxProgressBar1\").style\n        ) {\n            return;\n        }\n    } catch (ignore) {\n        return;\n    }\n    window.domOnEventAjaxProgressUpdate = function (gotoState, onError) {\n        gotoState = (gotoState | 0) + 1;\n        switch (gotoState) {\n        // ajaxProgress - show\n        case 1:\n            // init timerInterval and timerTimeout\n            if (!timerTimeout) {\n                timeStart = Date.now();\n                timerInterval = setInterval(opt, 2000, 1, onError);\n                timerTimeout = setTimeout(opt, opt.timeout, 2, onError);\n            }\n            // show ajaxProgressBar\n            if (width !== -1) {\n                styleBar.background = styleBar0.background;\n            }\n            setTimeout(opt, 50, gotoState, onError);\n            break;\n        // ajaxProgress - increment\n        case 2:\n            // show ajaxProgressBar\n            if (width === -1) {\n                break;\n            }\n            styleBar.background = styleBar0.background;\n            // reset ajaxProgress if it reaches end\n            if ((styleBar.width.slice(0, -1) | 0) > 95) {\n                width = 0;\n            }\n            // this algorithm will indefinitely increment ajaxProgress\n            // with successively smaller increments without reaching 100%\n            width += 1;\n            styleBar.width = Math.max(\n                100 - 75 * Math.exp(-0.125 * width),\n                styleBar.width.slice(0, -1) | 0\n            ) + \"%\";\n            // show ajaxProgressModal\n            styleModal.height = \"100%\";\n            styleModal.opacity = styleModal0.opacity;\n            if (!opt.cnt) {\n                setTimeout(opt, 0, gotoState, onError);\n            }\n            break;\n        // ajaxProgress - 100%\n        case 3:\n            width = -1;\n            styleBar.width = \"100%\";\n            setTimeout(opt, 1000, gotoState, onError);\n            break;\n        // ajaxProgress - hide\n        case 4:\n            // debug timeElapsed\n            tmp = Date.now();\n            console.error(\n                \"domOnEventAjaxProgressUpdate - timeElapsed - \"\n                + (tmp - timeStart)\n                + \" ms\"\n            );\n            // cleanup timerInterval and timerTimeout\n            timeStart = tmp;\n            clearInterval(timerInterval);\n            timerInterval = undefined;\n            clearTimeout(timerTimeout);\n            timerTimeout = undefined;\n            // hide ajaxProgressBar\n            styleBar.background = \"transparent\";\n            // hide ajaxProgressModal\n            styleModal.opacity = \"0\";\n            if (onError) {\n                onError();\n            }\n            setTimeout(opt, 250, gotoState);\n            break;\n        // ajaxProgress - reset\n        default:\n            opt.cnt = 0;\n            width = 0;\n            styleBar.width = \"0%\";\n            styleModal.height = \"0\";\n        }\n    };\n    opt = window.domOnEventAjaxProgressUpdate;\n    opt.end = function (onError) {\n        opt.cnt = 0;\n        window.domOnEventAjaxProgressUpdate(2, onError);\n    };\n    // init styleBar\n    styleBar = document.getElementById(\"domElementAjaxProgressBar1\").style;\n    styleBar0 = Object.assign({}, styleBar);\n    Object.entries({\n        background: \"#d00\",\n        height: \"2px\",\n        left: \"0\",\n        margin: \"0\",\n        padding: \"0\",\n        position: \"fixed\",\n        top: \"0\",\n        transition: \"background 250ms, width 750ms\",\n        width: \"0%\",\n        \"z-index\": \"1\"\n    }).forEach(function (entry) {\n        styleBar[entry[0]] = styleBar[entry[0]] || entry[1];\n    });\n    // init styleModal\n    styleModal = document.getElementById(\"domElementAjaxProgressModal1\") || {};\n    styleModal = styleModal.style || {};\n    styleModal0 = Object.assign({}, styleModal);\n    Object.entries({\n        height: \"0\",\n        left: \"0\",\n        margin: \"0\",\n        padding: \"0\",\n        position: \"fixed\",\n        top: \"0\",\n        transition: \"opacity 125ms\",\n        width: \"100%\",\n        \"z-index\": \"1\"\n    }).forEach(function (entry) {\n        styleModal[entry[0]] = styleModal[entry[0]] || entry[1];\n    });\n    // init state\n    width = 0;\n    opt.cnt = 0;\n    opt.timeout = 30000;\n    // init ajaxProgress\n    window.domOnEventAjaxProgressUpdate();\n}());\n\n\n// init domOnEventDelegateDict\n(function () {\n/*\n * this function will handle delegated dom-evt\n */\n    \"use strict\";\n    let debounce;\n    let timerTimeout;\n    debounce = function () {\n        return setTimeout(function () {\n            timerTimeout = undefined;\n        }, 30);\n    };\n    if (!(\n        typeof window === \"object\" && window && window.document\n        && typeof document.addEventListener === \"function\"\n    ) || window.domOnEventDelegateDict) {\n        return;\n    }\n    window.domOnEventDelegateDict = {};\n    window.domOnEventDelegateDict.domOnEventDelegate = function (evt) {\n        evt.targetOnEvent = evt.target.closest(\"[data-onevent]\");\n        if (\n            !evt.targetOnEvent\n            || evt.targetOnEvent.dataset.onevent === \"domOnEventNop\"\n            || evt.target.closest(\".disabled,.readonly\")\n        ) {\n            return;\n        }\n        // filter evt-change\n        switch (evt.type !== \"change\" && evt.target.type) {\n        case \"checkbox\":\n        case \"file\":\n        case \"select-one\":\n        case \"radio\":\n            return;\n        }\n        // filter evt-keyup\n        switch (evt.type) {\n        case \"keyup\":\n            if (!timerTimeout && (\n                evt.target.tagName === \"INPUT\"\n                || evt.target.tagName === \"TEXTAREA\"\n            )) {\n                timerTimeout = debounce();\n                if (evt.target.dataset.valueOld !== evt.target.value) {\n                    evt.target.dataset.valueOld = evt.target.value;\n                    break;\n                }\n            }\n            return;\n        }\n        switch (evt.targetOnEvent.tagName) {\n        case \"BUTTON\":\n        case \"FORM\":\n            evt.preventDefault();\n            break;\n        }\n        evt.stopPropagation();\n        // handle domOnEventClickTarget\n        if (evt.targetOnEvent.dataset.onevent === \"domOnEventClickTarget\") {\n            document.querySelector(\n                evt.targetOnEvent.dataset.clickTarget\n            ).click();\n            return;\n        }\n        window.domOnEventDelegateDict[evt.targetOnEvent.dataset.onevent](evt);\n    };\n    // handle evt\n    [\n        \"change\",\n        \"click\",\n        \"keyup\",\n        \"submit\"\n    ].forEach(function (eventType) {\n        document.addEventListener(\n            eventType,\n            window.domOnEventDelegateDict.domOnEventDelegate\n        );\n    });\n}());\n\n\n// init domOnEventSelectAllWithinPre\n(function () {\n/*\n * this function will limit select-all within <pre tabIndex=\"0\"> elem\n * https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse\n */\n    \"use strict\";\n    if (!(\n        typeof window === \"object\" && window && window.document\n        && typeof document.addEventListener === \"function\"\n    ) || window.domOnEventSelectAllWithinPre) {\n        return;\n    }\n    window.domOnEventSelectAllWithinPre = function (evt) {\n        let range;\n        let selection;\n        if (\n            evt && (evt.ctrlKey || evt.metaKey) && evt.key === \"a\"\n            && evt.target.closest(\"pre\")\n        ) {\n            range = document.createRange();\n            range.selectNodeContents(evt.target.closest(\"pre\"));\n            selection = window.getSelection();\n            selection.removeAllRanges();\n            selection.addRange(range);\n            evt.preventDefault();\n        }\n    };\n    // handle evt\n    document.addEventListener(\n        \"keydown\",\n        window.domOnEventSelectAllWithinPre\n    );\n}());\n</script>\n<h1>\n\n<a\n    \n    href=\"https://github.com/kaizhu256/node-sqlite3-lite\"\n    \n    target=\"_blank\"\n>\n\n    sqlite3-lite (2020.8.19)\n\n</a>\n\n</h1>\n<h3>this zero-dependency package will provide pre-built version of node-sqlite3 (v5.0.0)</h3>\n\n<a class=\"button\" download href=\"assets.app.js\">download standalone app</a><br>\n<button class=\"button\" data-onevent=\"testRunBrowser\" id=\"buttonTestRun1\">run browser-tests</button><br>\n<div class=\"uiAnimateSlide\" id=\"htmlTestReport1\" style=\"border-bottom: 0; border-top: 0; margin-bottom: 0; margin-top: 0; max-height: 0; padding-bottom: 0; padding-top: 0;\"></div>\n\n\n\n<!-- custom-html-start -->\n<label>stderr and stdout</label>\n<textarea class=\"onevent-reset-output readonly textarea\" id=\"outputStdout1\" readonly></textarea>\n<!-- custom-html-end -->\n\n\n\n\n<script src=\"assets.app.js\"></script>\n\n\n<div style=\"text-align: center;\">\n    [\n    this app was created with\n    <a\n        href=\"https://github.com/kaizhu256/node-utility2\" target=\"_blank\"\n    >utility2</a>\n    ]\n</div>\n</body>\n</html>\n"},"env":{"NODE_ENV":"test","npm_package_description":"this zero-dependency package will provide pre-built version of node-sqlite3 (v5.0.0)","npm_package_homepage":"https://github.com/kaizhu256/node-sqlite3-lite","npm_package_name":"sqlite3-lite","npm_package_nameLib":"sqlite3","npm_package_version":"2020.8.19"},"init":"(function (state) {\nlet utility2 = globalThis.utility2;\nutility2.assetsDict = utility2.assetsDict || {};\nutility2.env = utility2.env || {};\nObject.assign(utility2.assetsDict, state.assetsDict);\nObject.assign(utility2.env, state.env);\n}({}));\n"}
));
