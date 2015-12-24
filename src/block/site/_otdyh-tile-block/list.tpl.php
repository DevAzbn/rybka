<?
/*
$query = new WP_Query(array(
	'post_type' => 'azbnelement',
	'tax_query' => array(array(
		'taxonomy' => 'azbnelement_taxonomies',
		'field' => 'slug',
		'terms' => array(
			'review-scan',
		),
		//operator
		//include_children
	)),
));
*/
//var_dump($query);

?>
	
	
	<div class="fluid-block arrow-slider imaged-block h480 without-control without-title-date " >
		
		<div class="img-block " >
			<div class="item " style="background-image:url('<?=$this->path('img');?>/tpl/top-img-block-bg9.jpg');" ></div>
		</div>
		
		<div class="adaptive-block grid grid-12" >
			<div class="grid-row" >
				
				<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 text-content" >
					&nbsp;
					{html}
				</div>
				
				<div class="clear" ></div>
				
			</div>
		</div>
		
		<div class="title-block bottom-44  " >
			<div class="date font-gl" >{date}</div>
			<div class="title font-gb" >Отдых</div>
			<div class="preview font-gl" >Главная &rarr; О клубе &rarr; Услуги</div>
			<div class="venzel" >&nbsp;</div>
		</div>
		
		
		<div class="arrow-block " >
			
			<div class="point-line" ><!--<a class="item" href="#-" ><span class="point" ></span></a>--></div>
			
			<a href="#left" class="btn-arrow left" ><span class="picture" ></span></a>
			<a href="#right" class="btn-arrow right" ><span class="picture" ></span></a>
			
		</div>
		
		<div class="clear" ></div>
		
	</div>
	 
	
		
	<div class="fluid-block otdyh-welcome" >
		<div class="adaptive-block margin-center grid grid-12" >
			
			<div class="grid-row " >
				
				<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 welcome-container" >
					
					<div class="title " >
						Клуб «Золотая Рыбка» –
						<br />
						это великолепное место, где люди
						<br />
						разных увлечений получают
						<br />
						именно то, что им по душе
					</div>
					<!--<div class="title small " >Русская народная поговорка</div>-->
					<div class="title " ><img class="venzel " src="<?=$this->path('img');?>/tpl/about-main-text-title-venzel.png" /></div>
					
					<div class="text " >
						&nbsp;
					</div>
					
				</div>
				
				<div class="clear" ></div>
					
			</div>
			
		</div>
	</div>
	
	
		
	<div class="fluid-block otdyh-tile-block " >
		<div class="white-bg " >
			
			<div class="adaptive-block grid grid-12 mrg-btm " >
				<div class="grid-row" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-8 clmn-lg-8 h375 variant " >
						<a class="mrg-right modal-item-btn " href="#rc-i-prokat-vert" style="background-image:url('<?=$this->path('img');?>/tpl/vert-tile-item-bg.jpg');" ><span >Трансфер и аэропрогулки на вертолете</span></a>
					</div>
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 h375 variant " >
						<?
						$id = get_field('b2', $this->post['id']);
						$id = $id[0];
						$img_sm = $this->Imgs->postImg($id, 'post-recreation-preview');
						?>
						<a class="modal-item-btn" href="#recreation-b2" style="background-image:url('<?=$img_sm;?>');" ><span ><?=get_the_title($id);?></span></a>
						<!--<a href="<?=l($id);?>" style="background-image:url('<?=$img_sm;?>');" ><span ><?=get_the_title($id);?></span></a>-->
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
			<div class="adaptive-block grid grid-12 mrg-btm " >
				<div class="grid-row" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-6 clmn-lg-6 h450 variant " >
						<a class="modal-item-btn " href="#rc-i-btr-uaz" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-btr.jpg');" ><span >Поездки на БТР</span></a>
					</div>
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-6 clmn-lg-6 h450 " >
						<div class="mrg-left pos rel h450 " >
							
							<div class="variant a-lt h210 small " >
								<a class="modal-item-btn " href="#rc-i-uslugi-bani" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-banya.jpg');" ><span >Баня</span></a>
							</div>
							
							<div class="variant a-lb h210 small " >
								<?
								$id = get_field('b5', $this->post['id']);
								$id = $id[0];
								$img_sm = $this->Imgs->postImg($id, 'post-recreation-preview');
								?>
								<a class="modal-item-btn" href="#recreation-b5" style="background-image:url('<?=$img_sm;?>');" ><span ><?=get_the_title($id);?></span></a>
								<!--<a class="no-info" href="#vert" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-football.jpg');" ><span >Футбол, волейбол</span></a>-->
							</div>
							
							<div class="variant a-rb h210 small " >
								<?
								$id = get_field('b6', $this->post['id']);
								$id = $id[0];
								$img_sm = $this->Imgs->postImg($id, 'post-recreation-preview');
								?>
								<a class="modal-item-btn" href="#recreation-b6" style="background-image:url('<?=$img_sm;?>');" ><span ><?=get_the_title($id);?></span></a>
								<!--<a class="no-info" href="#vert" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-massage.jpg');" ><span >Массаж</span></a>-->
							</div>
							
						</div>
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
			<div class="adaptive-block margin-center grid grid-12 about-rest mrg-btm " >
				<div class="grid-row" >
					
					<div class="clmn-xs-12 clmn-sm-12 clmn-md-8 clmn-lg-8 " >
						<img class="image resp" src="<?=$this->path('img');?>/tpl/otdyh-rest-image.jpg" /> 
					</div>
					
					<div class="clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 " >
						
						<div class="title" >
							Ресторан
							<div class="stick-container" ><div class="stick" ></div></div>
						</div>
						
						<div class="short" >Ресторан, бар и караоке – здесь вы сможете вкусно покушать и весело провести время!</div>
						<div class="short" >Хотите сами приготовить свои трофеи? Зона барбекю в вашем распоряжении</div>
						
						<div class="more " >
							<a href="<?=l(9);?>" class="hover-color " >Подробнее о ресторане</a>
						</div>
						
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
			<div class="adaptive-block grid grid-12 mrg-btm " >
				<div class="grid-row" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 h450 variant " >
						<?
						$id = get_field('b7', $this->post['id']);
						$id = $id[0];
						$img_sm = $this->Imgs->postImg($id, 'post-recreation-preview');
						?>
						<a class="modal-item-btn" href="#recreation-b7" style="background-image:url('<?=$img_sm;?>');" ><span ><?=get_the_title($id);?></span></a>
						<!--<a class="modal-item-btn " href="#rc-i-prochie-uslugi" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-other.jpg');" ><span >Прочие услуги</span></a>-->
					</div>
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-8 clmn-lg-8 h450 variant " >
						<a class="mrg-left modal-item-btn " href="#rc-i-prokat-lodok" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-prokat.jpg');" ><span >Прокат лодок, транспорта и другого оборудования</span></a>
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
			<div class="adaptive-block grid grid-12 mrg-top " >
				<div class="grid-row" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 h360 variant semi-small " >
						<!--<a class="no-info" href="#vert" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-bassein.jpg');" ><span >Бассейн</span></a>-->
						<a class="modal-item-btn " href="#rc-i-prochie-uslugi" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-other.jpg');" ><span >Прочие услуги</span></a>
					</div>
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 h360 variant semi-small " >
						<a class="mrg-left mrg-right modal-item-btn" href="#rc-i-obrabotka-trofeev" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-obr.jpg');" ><span >Обработка трофеев</span></a>
					</div>
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-4 clmn-lg-4 h360 variant semi-small " >
						<a  class="no-info" href="#vert" style="background-image:url('<?=$this->path('img');?>/tpl/recreation-item-child.jpg');" ><span >Детская площадка</span></a>
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
			
			<div class="adaptive-block margin-center grid grid-12 " >
				<div class="grid-row" >
					
					<div class="clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12	text-on-orange " >
						Мы сделали всё, чтобы гостям было уютно и спокойно в нашем клубе – территория отеля оборудована системой видеонаблюдения и круглосуточно контролируется службой безопасности.
					</div>
					
					<div class="clear" ></div>
					
				</div>
			</div>
			
		</div>
	</div>
	
	
	<?
	$this->tpl('recreation-center/service/recreation/modal', array());
	?>
<?
//wp_reset_postdata();