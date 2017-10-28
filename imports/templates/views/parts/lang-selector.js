/**
 * Created by locvd on 2017/10/25.
 */
Template.langSelector.helpers({
  currentLang: function () {
    var preferredLang = 'ja';
    var storageKey = 'jq-appLang';

    // detect saved language or use default
    var currLang = $.localStorage.get(storageKey) || preferredLang;
    return currLang === 'ja'? '日本語':'Tiếng Việt';
  }
});
