
<!--<meta name="viewport" content="width=1900">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>
<?
if(is_category()) {
	single_cat_title();
} else {
	the_title();
}
?>
</title>
<meta name="keywords" content="">
<meta name="description" content="">

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
<link type="image/x-icon" href="/favicon.ico" rel="icon" />

<link href="<?php echo $this->path('css');?>/site.css?update=<?=date("Ymd");?>" rel="stylesheet">
<link href="<?php echo $this->path('css');?>/pagination.css" rel="stylesheet" />

<link href="//www.onlinetours.ru/assets/showcase.css" rel="stylesheet" type="text/css" />

<script src="https://yastatic.net/jquery/2.1.4/jquery.min.js"></script>
<script>
if(typeof window.jQuery === 'undefined') {
	document.write(
	unescape("%3Cscript src='<?php echo $this->path('js');?>/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
	);
}
</script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>

<script src="<?php echo $this->path('js');?>/storage.js" ></script>
<script src="<?php echo $this->path('js');?>/jquery-plugin/jquery.jqfeScrollTo.js" ></script>
<script src="<?php echo $this->path('js');?>/jquery-plugin/jquery.jqfeChangeClassEvent.js" ></script>
<script src="<?php echo $this->path('js');?>/document-ready.js" ></script>
