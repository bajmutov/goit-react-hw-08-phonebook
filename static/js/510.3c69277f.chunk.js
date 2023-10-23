"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{930:function(e,i,n){n.d(i,{l:function(){return m}});var a=n(1413),r=n(4925),l=n(9657),t=n(5597),s=n(6516),o=n(2996),d=n(1665),u=n(6992),c=n(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,t.G)((function(e,i){var n,t=(0,s.mq)("FormLabel",e),m=(0,o.Lr)(e),p=(m.className,m.children),h=m.requiredIndicator,Z=void 0===h?(0,c.jsx)(f,{}):h,x=m.optionalIndicator,b=void 0===x?null:x,y=(0,r.Z)(m,v),I=(0,l.NJ)(),R=null!=(n=null==I?void 0:I.getLabelProps(y,i))?n:(0,a.Z)({ref:i},y);return(0,c.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},R),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,a.Z)({display:"block",textAlign:"start"},t),children:[p,(null==I?void 0:I.isRequired)?Z:b]}))}));m.displayName="FormLabel";var f=(0,t.G)((function(e,i){var n=(0,l.NJ)(),r=(0,l.e)();if(!(null==n?void 0:n.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,i)),{},{__css:r.requiredIndicator,className:t}))}));f.displayName="RequiredIndicator"},9657:function(e,i,n){n.d(i,{NI:function(){return g},NJ:function(){return N},e:function(){return y}});var a=n(1413),r=n(4925),l=n(9439),t=n(9886),s=n(4591),o=n(5597),d=n(6516),u=n(2996),c=n(1665),v=n(6992),m=n(2791),f=n(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],Z=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,l.Z)(Z,2),b=x[0],y=x[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),R=(0,l.Z)(I,2),k=R[0],N=R[1];var g=(0,o.G)((function(e,i){var n=(0,d.jC)("Form",e),t=function(e){var i=e.id,n=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,p),c=(0,m.useId)(),f=i||"field-".concat(c),h="".concat(f,"-label"),Z="".concat(f,"-feedback"),x="".concat(f,"-helptext"),b=(0,m.useState)(!1),y=(0,l.Z)(b,2),I=y[0],R=y[1],k=(0,m.useState)(!1),N=(0,l.Z)(k,2),g=N[0],q=N[1],F=(0,m.useState)(!1),_=(0,l.Z)(F,2),O=_[0],P=_[1],C=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,s.lq)(i,(function(e){e&&q(!0)}))})}),[x]),j=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(O),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,o,O,t,d,h]),S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:Z},e),{},{ref:(0,s.lq)(i,(function(e){e&&R(!0)})),"aria-live":"polite"})}),[Z]),E=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:i,role:"group"})}),[u]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!O,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:I,setHasFeedbackText:R,hasHelpText:g,setHasHelpText:q,id:f,labelId:h,feedbackId:Z,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:S,getRootProps:E,getLabelProps:j,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),o=t.getRootProps,Z=(t.htmlProps,(0,r.Z)(t,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,f.jsx)(k,{value:Z,children:(0,f.jsx)(b,{value:n,children:(0,f.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},o({},i)),{},{className:x,__css:n.container}))})})}));g.displayName="FormControl",(0,o.G)((function(e,i){var n=N(),r=y(),l=(0,v.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getHelpTextProps(e,i)),{},{__css:r.helperText,className:l}))})).displayName="FormHelperText"},6336:function(e,i,n){n.d(i,{I:function(){return h}});var a=n(1413),r=n(4925),l=n(9657),t=n(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var i=function(e){var i,n,s,d=(0,l.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,f=e.isRequired,p=e.isInvalid,h=e.isReadOnly,Z=e.isDisabled,x=e.onFocus,b=e.onBlur,y=(0,r.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},y),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(i=null!=c?c:Z)?i:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=v?v:h)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=m?m:f)?s:null==d?void 0:d.isRequired,isInvalid:null!=p?p:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,b)})}(e),n=i.isDisabled,d=i.isInvalid,u=i.isReadOnly,c=i.isRequired,v=(0,r.Z)(i,s);return(0,a.Z)((0,a.Z)({},v),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=n(5597),c=n(6516),v=n(2996),m=n(1665),f=n(184),p=["htmlSize"],h=(0,u.G)((function(e,i){var n=e.htmlSize,l=(0,r.Z)(e,p),s=(0,c.jC)("Input",l),o=d((0,v.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,f.jsx)(m.m.input,(0,a.Z)((0,a.Z)({size:n},o),{},{__css:s.field,ref:i,className:u}))}));h.displayName="Input",h.id="Input"},5736:function(e,i,n){n.d(i,{M:function(){return h}});var a=n(4925),r=n(1413),l={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var t={enter:{duration:.2,ease:l.easeOut},exit:{duration:.1,ease:l.easeIn}},s=function(e,i){return(0,r.Z)((0,r.Z)({},e),{},{delay:"number"===typeof i?i:null==i?void 0:i.enter})},o=function(e,i){return(0,r.Z)((0,r.Z)({},e),{},{delay:"number"===typeof i?i:null==i?void 0:i.exit})},d=n(6992),u=n(3791),c=n(66),v=n(2791),m=n(184),f=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],p={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(e){var i,n=e.reverse,a=e.initialScale,l=e.transition,s=e.transitionEnd,d=e.delay;return(0,r.Z)((0,r.Z)({opacity:0},n?{scale:a,transitionEnd:null==s?void 0:s.exit}:{transitionEnd:(0,r.Z)({scale:a},null==s?void 0:s.exit)}),{},{transition:null!=(i=null==l?void 0:l.exit)?i:o(t.exit,d)})},enter:function(e){var i,n=e.transitionEnd,a=e.transition,r=e.delay;return{opacity:1,scale:1,transition:null!=(i=null==a?void 0:a.enter)?i:s(t.enter,r),transitionEnd:null==n?void 0:n.enter}}}},h=(0,v.forwardRef)((function(e,i){var n=e.unmountOnExit,l=e.in,t=e.reverse,s=void 0===t||t,o=e.initialScale,v=void 0===o?.95:o,h=e.className,Z=e.transition,x=e.transitionEnd,b=e.delay,y=(0,a.Z)(e,f),I=!n||l&&n,R=l||n?"enter":"exit",k={initialScale:v,reverse:s,transition:Z,transitionEnd:x,delay:b};return(0,m.jsx)(u.M,{custom:k,children:I&&(0,m.jsx)(c.E.div,(0,r.Z)((0,r.Z)({ref:i,className:(0,d.cx)("chakra-offset-slide",h)},p),{},{animate:R,custom:k},y))})}));h.displayName="ScaleFade"}}]);
//# sourceMappingURL=510.3c69277f.chunk.js.map