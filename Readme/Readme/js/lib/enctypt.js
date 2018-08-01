/**
 * Created by dong on 2016/11/15.
 */
/* createString生成随机字符串
** length:生成的字符串长度
 */
function createString(length) {
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789中文标准十五字测试";
    var n = length, s = "";
    for(var i = 0; i < n; i++){
        var rand = Math.floor(Math.random() * str.length);
        s += str.charAt(rand);
    }
    return s;
}
/*Encrypt:使用AES将data加密
 *data:要加密的数据
 *key:加密密钥
 *iv：初始向量
 * encrypted：要解密的密文
*/
var AES={
    Encrypt: function(data,key,iv) {
        var key=CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Latin1.parse(iv);
        return CryptoJS.AES.encrypt(data, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    },
    Decrypt: function(encrypted,key,iv) {
        var key = CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Latin1.parse(iv);
        return CryptoJS.AES.decrypt(encrypted, key, { iv: iv, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);
    }
}

