<? include("_inc/head_top.php"); ?>
<script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="js/main_visual.js"></script>
<!--popup-->
<script language="JavaScript" type="text/javascript"> 
function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

function closeLayer(div, chk, cookname) {
  if ( document.getElementById(chk).checked  ) {
    setCookie( cookname, "done" , 1 );
  }
  document.getElementById(div).style.visibility = "hidden";

}
</script>
<style type="text/css">
/*popup common style*/
.popup a {cursor:pointer;}
.popup .chk {width:100%; height:30px; font-size:12px; color:#fff; line-height:30px; text-align:right; vertical-align:middle; background:#333;}
.popup .chk input {vertical-align:middle;}
.popup .chk a {color:inherit; font-size:inherit; margin-right:5px; line-height:30px;}
.circle_pop .chk {background:none !important; color:#999; text-align:center;} /*원형 팝업용*/

#popup1 {position:absolute; left:0px; top:190px; z-index:100; width:450px;} /* height값 :image height + 30 */
#popup2 {position:absolute; left:950px; top:190px; z-index:100; width:400px; } /* height값 :image height + 30 */
#popup3 {position:absolute; left:450px; top:190px; z-index:100; /*width:450px;*/} /* height값 :image height + 30 */
#popup4 {position:absolute; left:950px; top:190px; z-index:100; width:432px;*/} /* height값 :image height + 30 */

.hd_class0, .hd_class1, .hd_class2 {display:none}
</style>
</head>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCBDGG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="wrap">

  <div id="popup1" class="popup">
        <p><a onClick="closeLayer('popup1', 'chkbox1', 'maindiv')" title="닫기"><img src="/new2020/images/popup/pop_210113.jpg" alt="상담팝업" border="0" ></a></p>
        <p class="chk" ><input type="checkbox" id="chkbox1" name="chkbox1"> 오늘 하루 이 창 열지 않음&nbsp;<a onClick="closeLayer('popup1', 'chkbox1', 'maindiv')">[닫기]</a></p>
    </div>
      
	<!--<div id="popup2" class="popup">
			<p><a onClick="closeLayer('popup2', 'chkbox2', 'maindiv')" title="닫기"><img src="/new2020/images/popup/230707_1.jpg" alt="휴진" border="0" style="width:400px"></a></p>
			<p class="chk" ><input type="checkbox" id="chkbox2" name="chkbox1"> 오늘 하루 이 창 열지 않음&nbsp;<a onClick="closeLayer('popup2', 'chkbox2', 'maindiv')">[닫기]</a></p>
	</div>-->
	
	<div id="popup3" class="popup">
	        <p><a onClick="closeLayer('popup3', 'chkbox3', 'maindiv')" title="닫기"><img src="/new2020/images/popup/pop_210514.jpg" alt="유로리프트/예약제" border="0" ></a></p>
	        <p class="chk" ><input type="checkbox" id="chkbox3" name="chkbox3"> 오늘 하루 이 창 열지 않음&nbsp;<a onClick="closeLayer('popup3', 'chkbox3', 'maindiv')">[닫기]</a></p>
	    </div> 


	<!--	<div id="popup4" class="popup">
	        <p><a onClick="closeLayer('popup4', 'chkbox4', 'maindiv')" title="닫기"><img src="/new2020/images/popup/pop_230922.jpg" alt="휴진안내" border="0" style="width:432px"></a></p>
	        <p class="chk" ><input type="checkbox" id="chkbox4" name="chkbox4"> 오늘 하루 이 창 열지 않음&nbsp;<a onClick="closeLayer('popup4', 'chkbox4', 'maindiv')">[닫기]</a></p>
	    </div>-->

    <script language="JavaScript">
    cookiedata = document.cookie;
    if ( cookiedata.indexOf("maindiv=done") < 0 ) {
    document.all['popup1'].style.visibility = "visible";
    } else {
    document.all['popup1'].style.visibility = "hidden";
    }
    </script>
    <!--/popup-->

<? include("_inc/header.php"); ?>
    <div id="content_wrap">
    	<div id="main_visual" class="slider">
		<div id="arrows">
                <div class="prev"><a class="arrow"><img src="images/main/visual_arrow_left.png" width="52" height="68" alt="prev" /></a></div>
                <div class="next"><a class="arrow"><img src="images/main/visual_arrow_right.png" width="52" height="68" alt="next" /></a></div>
        	</div>

            <div class="imgbox bd">
                <ul>			
					
					<li><img src="images/main/visual01.jpg" alt="" /></li>
					<li><img src="images/main/visual02.jpg" alt="" /></li>	
					<li><img src="images/main/visual03.jpg" alt="" /></li>
					<li><a href="mn03/mn03_04.php"><img src="images/main/visual04.jpg" alt="" /></a></li>

                </ul>
            </div>
            <script type="text/javascript">
				jQuery(".slider .bd li").first().before( jQuery(".slider .bd li").last() );
				jQuery(".slider").hover(function(){
				jQuery(this).find(".arrow").stop(true,true).fadeIn(300)
				},function(){
				jQuery(this).find(".arrow").fadeOut(300) });
				jQuery(".slider").slide(
				{ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",autoPlay:true, vis:3, autoPage:true, trigger:"click"}
				
				);
				
				function classOn(n){
					var len = $(".slider .hd ul li").length;
					for(i=0; i<len; i++){
						if(i == n) {
							var img = "images/main/visual_btn"+n+"_o.gif"
							$('.hd_class'+n).attr({"src":img});
						}
						else{
							var img = "images/main/visual_btn"+i+".gif"
							$('.hd_class'+i).attr({"src":img});
						}
					}
				}
            </script>
        </div>



			

        	<div id="urolift_banner">
				<div class="cnt_tit">
					<p class="clinic_eg">zaii urology hospital</p>
					<h2 class="clinic_tit">유로리프트 <span>시술 중심</span></h2>
				</div>
				<div class="banner2000">
					<ul>
						<li><a href="mn04/mn04_01.php"><img src="images/main/main_photo.jpg" alt="" /></a></li>
					</ul>
                </div>
			</div>

			<div id="main_banner">
				<div class="cnt_tit">
					<p class="clinic_eg">zaii urology hospital</p>
					<h2 class="clinic_tit">자이비뇨의학과 병원 <span>Main Clinic</span></h2>
				</div>
				<div class="banner_img">
					<ul>
						<li>
							<a href="mn03/mn03_01.php">
								<img src="images/main/main_banner01.jpg" alt="전립선비대증" />
								<div class="txt">
									<span>전립선 비대증을<br>짧은 시간에 치료하다.</span>
									<p>전립선 비대증</p>
								</div>
							</a>
						</li>
						<li>
							<a href="mn03/mn03_02.php">
								<img src="images/main/main_banner02.jpg" alt="전립선염" />
								<div class="txt" style="margin-left:-71px;">
									<span>황산화요법의 결합<br>이제 치료의속도가 빨라지다. </span>
									<p style="color:#fff;">전립선염</p>
								</div>
							</a>
						</li>
						<li>
							<a href="mn03/mn03_03.php">
								<img src="images/main/main_banner03.jpg" alt="전립선암" />
								<div class="txt" style="margin-left:-90px;">
									<span>정기적인 진단으로 조기발견<br>진단과 치료부분을 설명하다.</span>
									<p>전립선암</p>
								</div>
							</a>
						</li>
					</ul>
                </div>
				
			</div>

			<div id="main_bottom">
				<ul>
					<li>
						<a href="mn04/mn04_01.php"><img src="images/main/main_bottom.jpg" alt="전립선 질환에 강하다! 2020년 현재 유로리프트 400례 달성" /></a>
					</li>
				</ul>
			</div>


			<div id="main_bot">
				<div class="info">
					<ul>
						<li class="consulting">
							<div class="map_tit con_tit">온라인 상담</div>
							<p class="con_text">ONLINE COUNSULTATION</p>
							<div class="councel_in">
								<form>
									<table>
										<colgroup>
											<col width="70%">
											<col width="30%">
										</colgroup>
										<tbody>

											<? include $path."/latest/online.php"; ?>	
										</tbody>
									</table>
								</form>
								<p class="con_botton"><a href="mn06/mn06_01.php">상담하기</a></p>
							</div>

						</li>
						<!-- <li class="kakao">
							<a href="https://pf.kakao.com/_vIcKxb" target="_blank">
								<p class="kakao_tit">id : 자이비뇨기과</p>
								<p class="kakao_text">카카오톡에서 친구 추가하시면<br>빠른 상담이 가능합니다.</p>
							</a>
						</li> -->

						<li class="line"><p class="right_line"></p></li>

						<li class="time">
							<p class="map_tit">진료시간 / 예약제 운영</p>
							<p class="con_text">진료 및 예약접수 마감시간 안내</p>
						<!-- <p class="map_tel">02) 6207 5678</p> -->
							<div class="day">
								<span class="medi_day">평일 오전</span>
								<span class="medi_day">평일 오후</span>
								<span class="medi_day">토요일<br><span style="font-size:14px; line-height:100%">(매달 셋째주)</span></span>
								<span class="medi_day">점심시간</span>
							</div>
							<span class="medi_time">am 09 : 00 ~ pm 12:00 <span class="reserve">(오전11시 30분 마감)</span><br> pm 01 : 00 ~ pm 06:00  <span class="reserve">(오후5시 30분 마감)</span>
							<br>am 09 : 00 ~ pm 06:00  <span class="reserve">(오후5시 30분 마감)</span><br><span class="medi_time" style="line-height:300%">pm 12:00 ~ pm 01:00 <br></span></span>
							<span class="holyday">공휴일, 일요일은 휴진입니다.</span>
							<span class="holyday">※원활한 진료를 위해서 예약제를 실시하고 있습니다.<br>&nbsp&nbsp&nbsp&nbsp당일 방문이라도 예약을 부탁드립니다.</span>
						</li>

						<li class="line"><p class="right_line"></p></li>

						<li class="medi_icon">
							<ul>
								<li class="notice">
									<a href="mn07/mn07_01.php">
										<p><img src="images/main/notice.jpg" alt="공지사항"></p>
										<p class="icon_text">공지사항</p>
									</a>
								</li>
								<li class="case">
									<a href="mn07/mn07_02.php">
										<p><img src="images/main/case.jpg" alt="치료케이스"></p>
										<p class="icon_text">치료케이스</p>
									</a>
								</li>
							</ul>
							<ul>
								<li class="media">
									<a href="mn07/mn07_03.php">
										<p><img src="images/main/media.jpg" alt="보도자료"></p>
										<p class="icon_text">보도자료</p>
									</a>
								</li>
								<li class="blog">
									<a href="#">
										<p><img src="images/main/blog.jpg" alt="자이블로그"></p>
										<p class="icon_text">자이블로그</p>
									</a>
								</li>
							</ul>
						</li>
						<!-- <li class="main_click">
							<p class="map_tit">찾아오시는길</p>
							<p class="map_text">서울특별시 중랑구 면목로 481, 501호<br>(상봉동, 외 1필지 오렌지타워)</p>
							<p class="map_img"><img src="images/main/tel.jpg" alt="전화번호"></p>
							<div class="map_click">
								<p class="naver_c"><a target="_blank" href="http://naver.me/5uuSIzUH"><img src="images/main/map_naver.jpg" alt="네이버지도"></a></p>
								<p class="daum_c"><a target="_blank" href="http://kko.to/J2fe9z7jo"><img src="images/main/map_daum.jpg" alt="다음지도"></a></p>
							</div>
						</li> -->
					</ul>
			</div>
			</div>
		</div>

<? include("_inc/counsel.php"); ?>
<!---"_inc/counsel.php");--->
    </div><!--/content_wrap-->
<? include("_inc/footer.php"); ?>
</div>
</body>
</html>
