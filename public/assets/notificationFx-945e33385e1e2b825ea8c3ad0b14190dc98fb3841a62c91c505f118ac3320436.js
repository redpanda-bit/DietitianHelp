function NotificationFx(t){this.options=extend({},this.options),extend(this.options,t),this._init()}NotificationFx.prototype.options={wrapper:document.body,message:"yo!",layout:"growl",effect:"slide",type:"error",ttl:6e3,onClose:function(){return!1},onOpen:function(){return!1}},NotificationFx.prototype._init=function(){this.ntf=document.createElement("div"),this.ntf.className="ns-box ns-"+this.options.layout+" ns-effect-"+this.options.effect+" ns-type-"+this.options.type;var t='<div class="ns-box-inner">';t+=this.options.message,t+="</div>",t+='<span class="ns-close"></span></div>',this.ntf.innerHTML=t,this.options.wrapper.insertBefore(this.ntf,this.options.wrapper.firstChild);var e=this;this.dismissttl=setTimeout(function(){e.active&&e.dismiss()},this.options.ttl),this._initEvents()},NotificationFx.prototype._initEvents=function(){var t=this;this.ntf.querySelector(".ns-close").addEventListener("click",function(){t.dismiss()})},NotificationFx.prototype.show=function(){console.log("show"),this.active=!0,classie.remove(this.ntf,"ns-hide"),classie.add(this.ntf,"ns-show"),this.options.onOpen()},NotificationFx.prototype.dismiss=function(){console.log("dismiss");var t=this;this.active=!1,clearTimeout(this.dismissttl),classie.remove(this.ntf,"ns-show"),setTimeout(function(){classie.add(t.ntf,"ns-hide"),t.options.onClose()},25);var e=function(i){if(support.animations){if(i.target!==t.ntf)return!1;this.removeEventListener(animEndEventName,e)}t.options.wrapper.removeChild(this)};support.animations?this.ntf.addEventListener(animEndEventName,e):e()},window.NotificationFx=NotificationFx,window;