iosCheckbox.js
==============

A jQuery plugin that transform any checkbox element into a beautiful ios style checkbox.

![alt tag](http://s15.postimg.org/gbyj9pzk7/ios_Checbox.png)

#### Full demo and usage
https://rawgit.com/PsychoMark/iosCheckbox.js/master/demo.html


#### Quick start
Include the css

```
<link rel="stylesheet" type="text/css" href="iosCheckbox.css" />
```

Add some checkboxs to your page

```
<input type="checkbox" class="ios" checked />
<input type="checkbox" class="ios" />
```

Load jQuery and iosCheckbox

```
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="iosCheckbox.min.js"></script>
```

Transform all checkboxs with the class of `ios`

```
<script type="text/javascript">
	jQuery(function ($){
	     $(".ios").iosCheckbox();
	});
</script>
```

Many thanks to Ron Masas for the base code and style, refer to the source fork for the original.
