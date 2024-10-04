---
sticky: 99999
---
# 逆向工具
IDA PRO 查看汇编代码：https://down.52pojie.cn/Tools/Disassemblers/IDA_Pro_v8.3_Portable.zip

VSCODE（编写代码）

算法助手 pro（直接 HOOK JAVA 函数 部分 JS 加密也可 HOOK 并输出调用堆栈）https://www.123pan.com/s/7G8aTd-g3T4H.html 提取码:u7Zn

reqable（抓包）https://reqable.com/zh-CN/

JADX （反编译 APK）https://github.com/skylot/jadx

frida 调试 SO 代码

```javascript
function hookFunc() {
  var dumpOffset = "0x41FC"; //偏移量 可以在IDA Pro 查看 具体函数偏移量

  var argBufferSize = 500;

  var address = Module.findBaseAddress("libsignature.so"); // SO名称
  console.log("\n\nbaseAddress: " + address.toString());

  var codeOffset = address.add(dumpOffset);
  /* console.log('codeOffset: ' + codeOffset.toString())
     console.log('')
     console.log('Wait..... ')*/
  Interceptor.attach(codeOffset, {
    onEnter: function (args) {
      console.log("");
      console.log("--------------------------------------------|");
      console.log("\n    Hook Function: " + dumpOffset);
      console.log("");
      console.log("--------------------------------------------|");
      console.log("");

      for (var argStep = 0; argStep < 100; argStep++) {
        try {
          console.log(
            "Argument" + argStep + "address" + args[argStep].toString()
          );
          dumpArgs(argStep, args[argStep], argBufferSize);
        } catch (e) {
          break;
        }
      }
    },
    onLeave: function (retval) {
      console.log("RETURN : " + retval);
      dumpArgs(0, retval, 500);
    },
  });
}

function dumpArgs(step, address, bufSize) {
  var buf = Memory.readByteArray(address, bufSize);

  console.log(
    "Argument " +
      step +
      " address " +
      address.toString() +
      " " +
      "buffer: " +
      bufSize.toString() +
      "\n\n Value:\n" +
      hexdump(buf, {
        offset: 0,
        length: bufSize,
        header: false,
        ansi: false,
      })
  );

  console.log("");
  console.log("----------------------------------------------------");
  console.log("");
}

setTimeout(hookFunc, 1000);
```
frida调试JS脚本 命令
```shell
frida -U -f com.test.test -l frida.js
```