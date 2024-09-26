import { MemoryRouter } from "react-router-dom";
import { BuckinghumBanner, LatexPillow1, Memofy1, Preference1 } from "../../assets";


  // MATTRESSES
  // ----Banner & specifications--------

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" --->Orthomed
  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258748/orthospeci_lh112h.png"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" --->Mileange
  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/Milangespeci_vxpzgf.jpg"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" --->Preference1
  // " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258376/preference2speci_a4bggp.jpg"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258372/Buckinghum_banner_btbi9w.jpg" --->BuckinghumBanner
  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258373/Buckinghumspeci_qtm7da.jpg"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258371/Aloevera_banner_hluwdr.jpg "---->alovera with LatexPillow1
  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/OrthopedicAloeveralatexSpeci_je7qrx.jpg"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258371/Aloevera_banner_hluwdr.jpg" ----> Alovera with MemoryRouter
  // " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/OrthopedicAloeveramemorySpeci_kxuqaa.jpg"

  // "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" --->Memofy1
  // " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258373/Memofyspeci_hexrqt.jpg"

  export const productImages = {


  orthomed: [
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" ,//banner
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259353/DSC02103_podoia.jpg",
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259355/DSC02107_m7js1b.jpg",
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259359/DSC02102_bl637n.jpg",
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258748/orthospeci_lh112h.png", //Specifications 
  ],


  milange: [
              "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" , //banner
              "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259571/DSC02176_jvowve.jpg",
              "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259572/DSC02177_ypqmcq.jpg",
              "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259574/DSC02181_rympvo.jpg",
              "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/Milangespeci_vxpzgf.jpg",//Spf
    
  ],

  preference :[
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png", //Banner 
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259646/DSC02094_zshc82.jpg",
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259648/DSC02096_osbotc.jpg",
                "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259649/DSC02101_joqube.jpg ",
                " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258376/preference2speci_a4bggp.jpg", //Spf                   
  ],

  buckingham:[
               "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258372/Buckinghum_banner_btbi9w.jpg" ,//Banner
               "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259809/DSC02088_xulnzz.jpg",
               "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259830/DSC02089_yk4zt4.jpg",
               "https://res.cloudinary.com/dpsmbluby/image/upload/v1727259833/DSC02092_teesok.jpg",
               "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258373/Buckinghumspeci_qtm7da.jpg",//spf

  ],

  orthopedic_alovera_latex:[

                   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258371/Aloevera_banner_hluwdr.jpg",//Banner
                   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260013/DSC02058_y8rz3g.jpg ",
                   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260014/DSC02060_tug0yd.jpg",
                   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260065/DSC02061_d88ey8.jpg",
                   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/OrthopedicAloeveralatexSpeci_je7qrx.jpg,"//spf
  ],


  orthopedic_alovera_memory:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258371/Aloevera_banner_hluwdr.jpg", // Banner
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260128/DSC02137_ts4tze.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260130/DSC02138_obuxug.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260131/DSC02145_khuuqm.jpg",
   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258374/OrthopedicAloeveramemorySpeci_kxuqaa.jpg,"//spf

                  
  ],

  memofy:[
    
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1727258580/banner1_qzowbo.png" ,//Banner
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260363/Memofy1_eaue2l.jpg ",
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260365/Memofy2_rh2zwo.jpg",
      " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260366/Memofy3_l5z1oz.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727258373/Memofyspeci_hexrqt.jpg",//spf

  ],


  // ---------------Ortho-Bonnel-Spring -Collection------------------

  thehotel:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260629/Thehotel1_nqzqbf.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260631/Thehotel2_mb9anr.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260632/Thehotel3_aquteb.jpg",

  ],

  oxford:[

     "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260731/DSC02109_dhdcxm.jpg",
     "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260733/DSC02112_je6rpz.jpg ",
     "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260734/DSC02117_ioy5np.jpg ",

  ],

  Love_Land_Pillow_Top:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260805/DSC02146_ix6k6g.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260806/DSC02147_dgnjcy.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260808/DSC02151_cpwvd2.jpg",

  ],
  Romantic_Euroton:[

    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260904/DSC02075_nbp4vg.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260905/DSC02076a_suxx4l.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260907/DSC02081_h0nbp3.jpg",

  ],
  Aloe_Vera_With_Latex:[

   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260013/DSC02058_y8rz3g.jpg ",
   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260014/DSC02060_tug0yd.jpg",
  " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260065/DSC02061_d88ey8.jpg",

  ],

  Aloe_Vera_With_Memory:[

   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260128/DSC02137_ts4tze.jpg ",
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260130/DSC02138_obuxug.jpg ",
   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260131/DSC02145_khuuqm.jpg",

  ],


  // ---------Pocketed-Spring-Collection--------



  insperation:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727261282/DSC02082_ikx7ky.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727261283/DSC02083_s5dzo3.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727261278/DSC02086_iejmho.jpg",
  ],

  Eternity_Euroton:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261422/DSC02120_bjf9km.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727261423/DSC02123_gwykre.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727261425/DSC02123a_xasmnc.jpg",
  ],
  Aloe_Vera_With_Latex:[

    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260013/DSC02058_y8rz3g.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260014/DSC02060_tug0yd.jpg",
   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260065/DSC02061_d88ey8.jpg",
 
   ],
 
   Aloe_Vera_With_Memory:[
 
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260128/DSC02137_ts4tze.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727260130/DSC02138_obuxug.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727260131/DSC02145_khuuqm.jpg",
 
   ],


  //  -------------HR-PU-FOAM--------------------


  gravity:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261603/DSC02152_n4qzkd.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261604/DSC02154_cf3usg.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261606/DSC02157_t44xyz.jpg",
  ],
  space:[
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261603/DSC02152_n4qzkd.jpg",
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261604/DSC02154_cf3usg.jpg",
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261606/DSC02157_t44xyz.jpg",
  ],
  plush:[
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261603/DSC02152_n4qzkd.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261604/DSC02154_cf3usg.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261606/DSC02157_t44xyz.jpg",
  ],
  techniko:[
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261603/DSC02152_n4qzkd.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261604/DSC02154_cf3usg.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727261606/DSC02157_t44xyz.jpg",
  ],
  

  // --------------------Beds---------------

  denver_model_with_storage:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262733/DenverModel1_gmjei6.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262729/DenverModel2_scz2ap.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262730/DenverModel3_ntraw6.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262732/DenverModel4_roihmm.jpg",
  ],
  denver_model_without_storage:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262733/DenverModel1_gmjei6.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262729/DenverModel2_scz2ap.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262730/DenverModel3_ntraw6.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727262732/DenverModel4_roihmm.jpg",
  ],
  

  pk_model_withstorage:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263016/PKModel1_bvz0ru.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263017/PKModel2_cbqzn1.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263019/PKModel3_xbonrq.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263021/PKModel4_wc7pjz.jpg",
  ],

  pk_model_without_storage:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263016/PKModel1_bvz0ru.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263017/PKModel2_cbqzn1.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263019/PKModel3_xbonrq.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263021/PKModel4_wc7pjz.jpg",
  ],

  diamond_with_storage:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263171/DiamondModel1_lyglos.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263173/DiamondModel2_h03jse.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263175/DiamondModel3_k6gfml.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263177/DiamondModel4_tuxtfp.jpg",
  ],

  diamond_without_storage:[
   "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263171/DiamondModel1_lyglos.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263173/DiamondModel2_h03jse.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263175/DiamondModel3_k6gfml.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263177/DiamondModel4_tuxtfp.jpg",
  ],

  //-----------------Sofa--------------
  //Standard

  chesterfield:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263399/chesterfield1_mp45ak.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263401/chesterfield2_u5mtqo.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263402/chesterfield3_ztjv4e.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263404/chesterfield4_frodwm.jpg",
  ],
  lawson:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263443/lawson1_yqx1ix.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263445/lawson2_wab0ro.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263447/lawson3_v0b7b7.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263449/lawson4_f4wtgs.jpg",
  ],
  tuxedo:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263477/Tuxedo1_c2ug3c.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263480/Tuxedo2_q6cbyk.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263482/Tuxedo3_acnhw9.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263484/Tuxedo4_laufie.jpg",
  ],
  //-------Sectional

  Lshaped:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263610/LshapedSofa1_lokpag.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263612/LshapedSofa2_ijmfpt.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263615/LshapedSofa3_uylqnf.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263617/LshapedSofa4_zlrict.jpg ",
  ],
  Ushaped:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263679/UshapedSofa1_v4agk7.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263681/UshapedSofa2_d7c2z2.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263683/UshapedSofa3_by5bxe.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263686/UshapedSofa4_batjq8.jpg",
  ],
  Lshapedsofa_cumbed:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263743/lshapedsofacumbed1_x8z7ek.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263746/lshapedsofacumbed2_ir94qi.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263748/lshapedsofacumbed3_tzkrel.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263750/lshapedsofacumbed4_h9i3pa.jpg ",
  ],
  Ushapedsofa_cumbed:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263798/ushapedsofacumbed1_zzr0p5.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263801/ushapedsofacumbed2_urejkp.png",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263804/ushapedsofacumbed3_jd3kqq.png ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263806/ushapedsofacumbed4_oed6vf.png",
  ],
  modular:[
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263896/ModularSofa1_tr9gy2.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263899/ModularSofa2_now7ko.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727263901/ModularSofa3_su0otc.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727263903/ModularSofa4_xtx5di.jpg ",
  ],
  //----------Accessories------
  //protectors
  waterproof_protectors:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264076/BaffleBox_qq0ojm.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264078/SewnThrough_lk0in9.jpg",
    
  ],
  Quilted_protectors:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264076/BaffleBox_qq0ojm.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264078/SewnThrough_lk0in9.jpg",
    
  ],
  fitted_protectors:[
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264076/BaffleBox_qq0ojm.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264078/SewnThrough_lk0in9.jpg",
    
  ],

  //Pillow

  Memory_pillow:[

    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264286/Memoryfoam_Pillow1_vqewfs.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264289/Memoryfoam_Pillow2_evrsjy.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264291/Memoryfoam_Pillow3_iqfkra.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264294/Memoryfoam_Pillow4_nzk3ls.jpg",
   
  ],
  latexy_pillow:[

    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264360/LatexPillow1_spx6l4.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727264363/LatexPillow2_hneeoa.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264365/LatexPillow3_bhxjmg.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727264368/LatexPillow4_ftovke.jpg",
   
  ],
  foam_pillow:[

    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727265486/Foampillow1_pcmsww.jpg",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727265483/Foampillow2_rxnwgn.jpg",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727265485/Foampillow3_q0uijk.jpg ",
    " https://res.cloudinary.com/dpsmbluby/image/upload/v1727265490/Foampillow4_mcdvvc.jpg",
    
  ],
  polyfiber_pillow:[

    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727266047/AloveraPolyfiberPillow2_jrtovb.jpg ",
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727266048/AloveraPolyfiberPillow3_sisgsh.jpg ",
   " https://res.cloudinary.com/dpsmbluby/image/upload/v1727265490/Foampillow4_mcdvvc.jpg",
   
  ],
 








  
};