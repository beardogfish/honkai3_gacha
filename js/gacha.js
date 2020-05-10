// CLAIM: at least one 'material' type should exist!
var ids = [
	//valkyries
    {'type':'valkyrie', 'name':'White Comet', 'rare':3, 'img':'valkyrie2/kiana_3_WC.png'},
    {'type':'valkyrie', 'name':'Valkyrie Ranger', 'rare':4, 'img':'valkyrie2/kiana_4_VR.png'},
    {'type':'valkyrie', 'name':'Divine Prayer', 'rare':4, 'img':'valkyrie2/kiana_4_DP.png'},
    {'type':'valkyrie', 'name':'Knight Moonbeam', 'rare':5, 'img':'valkyrie2/kiana_5_KMB.png'},
    {'type':'valkyrie', 'name':'Herrscher of the Void', 'rare':5, 'img':'valkyrie2/kiana_5_HotV.png'},
    
    {'type':'valkyrie', 'name':'Crimson Impulse', 'rare':3, 'img':'valkyrie2/mei_3_CI.png'},
    {'type':'valkyrie', 'name':'Valkyrie Bladestrike', 'rare':4, 'img':'valkyrie2/mei_4_VB.png'},
    {'type':'valkyrie', 'name':'Shadow Dance', 'rare':4, 'img':'valkyrie2/mei_4_SD.png'},
    {'type':'valkyrie', 'name':'Lightning Empress', 'rare':5, 'img':'valkyrie2/mei_5_LE.png'},
    
    {'type':'valkyrie', 'name':'Valkyrie Chariot', 'rare':3, 'img':'valkyrie2/bronya_3_VC.png'},
    {'type':'valkyrie', 'name':'Yamabuki Armor', 'rare':4, 'img':'valkyrie2/bronya_4_YA.png'},
    {'type':'valkyrie', 'name':'Snowy Sniper', 'rare':4, 'img':'valkyrie2/bronya_4_SS.png'},
    {'type':'valkyrie', 'name':'Dimension Breaker', 'rare':5, 'img':'valkyrie2/bronya_5_DB.png'},
    {'type':'valkyrie', 'name':'Wolf\'s Dawn', 'rare':4, 'img':'valkyrie2/bronya_5_WD.png'},
    {'type':'valkyrie', 'name':'Black Nucleus', 'rare':5, 'img':'valkyrie2/bronya_5_BN.png'},
    {'type':'valkyrie', 'name':'Herrscher of Reason', 'rare':5, 'img':'valkyrie2/bronya_5_HoR.png', special:true},
	
    {'type':'valkyrie', 'name':'Battle Storm', 'rare':3, 'img':'valkyrie2/himeko_3_BS.png'},
    {'type':'valkyrie', 'name':'Scarlet Fusion', 'rare':4, 'img':'valkyrie2/himeko_4_SF.png'},
    {'type':'valkyrie', 'name':'Valkyrie Triumph', 'rare':4, 'img':'valkyrie2/himeko_4_VT.png'},
    {'type':'valkyrie', 'name':'Arctic Kriegmesser', 'rare':4, 'img':'valkyrie2/himeko_4_AK.png'},
    {'type':'valkyrie', 'name':'Blood Rose', 'rare':5, 'img':'valkyrie2/himeko_5_BR.png'},
    {'type':'valkyrie', 'name':'Vermilion Knight: Eclipse', 'rare':5, 'img':'valkyrie2/himeko_5_VKE.png', special:true},
    
    {'type':'valkyrie', 'name':'Gyakushinn Miko', 'rare':4, 'img':'valkyrie2/sakura_4_GM.png'},
    {'type':'valkyrie', 'name':'Flame Sakitama', 'rare':4, 'img':'valkyrie2/sakura_4_FS.png'},
    {'type':'valkyrie', 'name':'Darkbolt Jonin', 'rare':4, 'img':'valkyrie2/battlesuit.png', 'special':true},
    {'type':'valkyrie', 'name':'Goushinnso Memento', 'rare':5, 'img':'valkyrie2/sakura_5_GM.png'},
    
    {'type':'valkyrie', 'name':'Valkyrie Pledge', 'rare':4, 'img':'valkyrie2/theresa_4_VP.png'},
    {'type':'valkyrie', 'name':'Sakuno Rondo', 'rare':4, 'img':'valkyrie2/theresa_4_SR.png'},
    {'type':'valkyrie', 'name':'Luna Kindred', 'rare':4, 'img':'valkyrie2/theresa_4_LK.png'},
    {'type':'valkyrie', 'name':'Violet Executor', 'rare':5, 'img':'valkyrie2/theresa_5_VE.png'},
    {'type':'valkyrie', 'name':'Celestial Hymn', 'rare':5, 'img':'valkyrie2/theresa_5_CH.png'},

    {'type':'valkyrie', 'name':'Valkyrie Accipiter', 'rare':4, 'img':'valkyrie2/fuhua_4_VA.png'},
    {'type':'valkyrie', 'name':'Night Squire', 'rare':4, 'img':'valkyrie2/fuhua_4_NS.png'},
    {'type':'valkyrie', 'name':'Shadow Knight', 'rare':5, 'img':'valkyrie2/fuhua_5_SK.png'},
    {'type':'valkyrie', 'name':'Phoenix', 'rare':5, 'img':'valkyrie2/fuhua_5_PX.png'},
    {'type':'valkyrie', 'name':'Azure Empyrea', 'rare':5, 'img':'valkyrie2/battlesuit.png', special:true},
	
    {'type':'valkyrie', 'name':'Ritual Imayoh', 'rare':4, 'img':'valkyrie2/kallen_4_RI.png'},
    {'type':'valkyrie', 'name':'Sundenjager', 'rare':4, 'img':'valkyrie2/kallen_4_SJ.png', special:true},
    {'type':'valkyrie', 'name':'Sixth Serenade', 'rare':5, 'img':'valkyrie2/kallen_5_6S.png'},
	
    {'type':'valkyrie', 'name':'Umbral Rose', 'rare':4, 'img':'valkyrie2/rita_4_UR.png', special:true},
    {'type':'valkyrie', 'name':'Phantom Iron', 'rare':4, 'img':'valkyrie2/rita_4_PI.png', special:true},
    {'type':'valkyrie', 'name':'Argent Knight: Artemis', 'rare':5, 'img':'valkyrie2/rita_5_AKA.png', special:true},

    {'type':'valkyrie', 'name':'Blueberry Blitz', 'rare':4, 'img':'valkyrie2/liliya_4_BB.png', special:true},
	
    {'type':'valkyrie', 'name':'Molotov Cherry', 'rare':5, 'img':'valkyrie2/rozaliya_5_MC.png', special:true},

    {'type':'valkyrie', 'name':'Swallowtail Phantasm', 'rare':4, 'img':'valkyrie2/seele_4_SP.png', special:true},
    {'type':'valkyrie', 'name':'Stygian Nymph', 'rare':5, 'img':'valkyrie2/battlesuit.png', special:true},	

    {'type':'valkyrie', 'name':'Valkyrie Gloria', 'rare':4, 'img':'valkyrie2/battlesuit.png', special:true},
	
	
	//fragments
    {'type':'valkyrie_piece', 'name':'White Comet Fragment', 'rare':3, 'img':'valkyrie2/kiana_3_WC_frag.png'},
    {'type':'valkyrie_piece', 'name':'Valkyrie Ranger Fragment', 'rare':4, 'img':'valkyrie2/kiana_4_VR_frag.png'},
    {'type':'valkyrie_piece', 'name':'Divine Prayer Fragment', 'rare':4, 'img':'valkyrie2/kiana_4_DP_frag.png'},
    {'type':'valkyrie_piece', 'name':'Knight Moonbeam Fragment', 'rare':5, 'img':'valkyrie2/kiana_5_KMB_frag.png'},
    {'type':'valkyrie_piece', 'name':'Herrscher of the Void Soul', 'rare':5, 'img':'valkyrie2/kiana_5_HotV_soul.png'},
    
    {'type':'valkyrie_piece', 'name':'Crimson Impulse Fragment', 'rare':3, 'img':'valkyrie2/mei_3_CI_frag.png'},
    {'type':'valkyrie_piece', 'name':'Valkyrie Bladestrike Fragment', 'rare':4, 'img':'valkyrie2/mei_4_VB_frag.png'},
    {'type':'valkyrie_piece', 'name':'Shadow Dance Fragment', 'rare':4, 'img':'valkyrie2/mei_4_SD_frag.png'},
    {'type':'valkyrie_piece', 'name':'Lightning Empress Fragment', 'rare':5, 'img':'valkyrie2/mei_5_LE_frag.png'},
    
    {'type':'valkyrie_piece', 'name':'Valkyrie Chariot Fragment', 'rare':3, 'img':'valkyrie2/bronya_3_VC_frag.png'},
    {'type':'valkyrie_piece', 'name':'Yamabuki Armor Fragment', 'rare':4, 'img':'valkyrie2/bronya_4_YA_frag.png'},
    {'type':'valkyrie_piece', 'name':'Snowy Sniper Fragment', 'rare':4, 'img':'valkyrie2/bronya_4_SS_frag.png'},
    {'type':'valkyrie_piece', 'name':'Dimension Breaker Fragment', 'rare':5, 'img':'valkyrie2/bronya_5_DB_frag.png'},
	{'type':'valkyrie_piece', 'name':'Wolf\'s Dawn Soul', 'rare':4, 'img':'valkyrie2/bronya_5_WD_soul.png'},
    {'type':'valkyrie_piece', 'name':'Black Nucleus Soul', 'rare':5, 'img':'valkyrie2/bronya_5_BN_soul.png'},
    {'type':'valkyrie_piece', 'name':'Herrscher of Reason Soul', 'rare':5, 'img':'valkyrie2/bronya_5_HoR_soul.png', special:true},
    
    {'type':'valkyrie_piece', 'name':'Battle Storm Fragment', 'rare':3, 'img':'valkyrie2/himeko_3_BS_frag.png'},
    {'type':'valkyrie_piece', 'name':'Scarlet Fusion Fragment', 'rare':4, 'img':'valkyrie2/himeko_4_SF_frag.png'},
    {'type':'valkyrie_piece', 'name':'Valkyrie Triumph Fragment', 'rare':4, 'img':'valkyrie2/himeko_4_VT_frag.png'},
    {'type':'valkyrie_piece', 'name':'Arctic Kriegmesser Soul', 'rare':4, 'img':'valkyrie2/himeko_4_AK_soul.png'},
    {'type':'valkyrie_piece', 'name':'Blood Rose Fragment', 'rare':5, 'img':'valkyrie2/himeko_5_BR_frag.png'},
    {'type':'valkyrie_piece', 'name':'Vermilion Knight: Eclipse Soul', 'rare':4, 'img':'valkyrie2/himeko_5_VKE_soul.png', special:true},
    
    {'type':'valkyrie_piece', 'name':'Gyakushinn Miko Soul', 'rare':4, 'img':'valkyrie2/sakura_4_GM_soul.png'},
    {'type':'valkyrie_piece', 'name':'Flame Sakitama Soul', 'rare':4, 'img':'valkyrie2/sakura_4_FS_soul.png'},
    {'type':'valkyrie_piece', 'name':'Darkbolt Jonin Fragment', 'rare':4, 'img':'valkyrie2/fragment.png', 'special':true},
    {'type':'valkyrie_piece', 'name':'Goushinnso Memento Soul', 'rare':5, 'img':'valkyrie2/sakura_5_GM_soul.png'},
    
    {'type':'valkyrie_piece', 'name':'Valkyrie Pledge Fragment', 'rare':4, 'img':'valkyrie2/theresa_4_VP_frag.png'},
    {'type':'valkyrie_piece', 'name':'Sakuno Rondo Fragment', 'rare':4, 'img':'valkyrie2/theresa_4_SR_frag.png'},
    {'type':'valkyrie_piece', 'name':'Luna Kindred Soul', 'rare':4, 'img':'valkyrie2/theresa_4_LK_soul.png'},
    {'type':'valkyrie_piece', 'name':'Violet Executor Fragment', 'rare':5, 'img':'valkyrie2/theresa_5_VE_frag.png'},
    {'type':'valkyrie_piece', 'name':'Celestial Hymn Fragment', 'rare':5, 'img':'valkyrie2/theresa_5_CH_frag.png'},

    {'type':'valkyrie_piece', 'name':'Valkyrie Accipiter Fragment', 'rare':4, 'img':'valkyrie2/fuhua_4_VA_frag.png'},
    {'type':'valkyrie_piece', 'name':'Night Squire Fragment', 'rare':4, 'img':'valkyrie2/fuhua_4_NS_frag.png'},
    {'type':'valkyrie_piece', 'name':'Shadow Knight Fragment', 'rare':5, 'img':'valkyrie2/fuhua_5_SK_frag.png'},
    {'type':'valkyrie_piece', 'name':'Phoenix Fragment', 'rare':5, 'img':'valkyrie2/fuhua_5_PX_frag.png'},
    {'type':'valkyrie_piece', 'name':'Azure Empyrea Soul', 'rare':5, 'img':'valkyrie2/frag.png', special:true},
	
    {'type':'valkyrie_piece', 'name':'Ritual Imayoh Soul', 'rare':4, 'img':'valkyrie2/kallen_4_RI_soul.png'},
    {'type':'valkyrie_piece', 'name':'Sundenjager Soul', 'rare':4, 'img':'valkyrie2/kallen_4_SJ_soul.png', special:true},
    {'type':'valkyrie_piece', 'name':'Sixth Serenade Soul', 'rare':5, 'img':'valkyrie2/kallen_5_6S_soul.png'},
		
    {'type':'valkyrie_piece', 'name':'Umbral Rose Fragment', 'rare':4, 'img':'valkyrie2/rita_4_UR_frag.png', special:true},
    {'type':'valkyrie_piece', 'name':'Phantom Iron Fragment', 'rare':4, 'img':'valkyrie2/rita_4_PI_frag.png', special:true},
    {'type':'valkyrie_piece', 'name':'Argent Knight: Artemis Fragment', 'rare':5, 'img':'valkyrie2/rita_5_AKA_frag.png', special:true},

    {'type':'valkyrie_piece', 'name':'Blueberry Blitz Fragment', 'rare':4, 'img':'valkyrie2/liliya_4_BB_frag.png', special:true},

    {'type':'valkyrie_piece', 'name':'Molotov Cherry Fragment', 'rare':5, 'img':'valkyrie2/rozaliya_5_MC_frag.png', special:true},

    {'type':'valkyrie_piece', 'name':'Swallowtail Phantasm Fragment', 'rare':4, 'img':'valkyrie2/seele_4_SP_frag.png', special:true},
    {'type':'valkyrie_piece', 'name':'Stygian Nymph Fragment', 'rare':5, 'img':'valkyrie2/frag.png', special:true},

    {'type':'valkyrie_piece', 'name':'Valkyrie Gloria Fragment', 'rare':4, 'img':'valkyrie2/frag.png', special:true},	
    
	
    // weapons
    {'type':'weapon', 'name':'USP45', 'rare':2, 'img':'weapon2/1_pistol_usp45.png'},
    {'type':'weapon', 'name':'Seishuu Muramasa', 'rare':2, 'img':'weapon2/1_blade_seishuu_muramasa.png'},
    {'type':'weapon', 'name':'SU-22 Howitzer', 'rare':2, 'img':'weapon2/1_heavy_su_22_howitzer.png'},
    {'type':'weapon', 'name':'Greatsword', 'rare':2, 'img':'weapon2/1_2hand_greatsword.png'},
    {'type':'weapon', 'name':'Cross', 'rare':2, 'img':'weapon2/1_cross_cross.png'},
    {'type':'weapon', 'name':'Armored Bracers', 'rare':2, 'img':'weapon2/1_fist_armored_bracers.png'},
    {'type':'weapon', 'name':'Scythe', 'rare':2, 'img':'weapon2/1_scythe_scythe.png'},
	
    {'type':'weapon', 'name':'USP EX', 'rare':3, 'img':'weapon2/2_pistol_usp_ex.png'},
    {'type':'weapon', 'name':'M1911', 'rare':3, 'img':'weapon2/2_pistol_m1911.png'},
    {'type':'weapon', 'name':'Desert Eagle', 'rare':3, 'img':'weapon2/2_pistol_desert_eagle.png'},
    {'type':'weapon', 'name':'Colt Anaconda EX', 'rare':3, 'img':'weapon2/2_pistol_colt_anaconda_ex.png'},
    {'type':'weapon', 'name':'Horikawa Kunihiro', 'rare':3, 'img':'weapon2/2_blade_horikawa_kunihiro.png'},
    {'type':'weapon', 'name':'Amemura Bloodlust', 'rare':3, 'img':'weapon2/2_blade_amemura_bloodlust.png'},
    {'type':'weapon', 'name':'Muramasa Bloodlust', 'rare':3, 'img':'weapon2/2_blade_muramasa_bloodlust.png'},
    {'type':'weapon', 'name':'Willow', 'rare':3, 'img':'weapon2/2_blade_willow.png'},
    {'type':'weapon', 'name':'SU-30 Cannon', 'rare':3, 'img':'weapon2/2_heavy_su_30_cannon.png'},
    {'type':'weapon', 'name':'MiG-11', 'rare':3, 'img':'weapon2/2_heavy_mig_11.png'},
    {'type':'weapon', 'name':'MiG-13', 'rare':3, 'img':'weapon2/2_heavy_mig_13.png'},
    {'type':'weapon', 'name':'MiG-7', 'rare':3, 'img':'weapon2/2_heavy_mig_7.png'},
    {'type':'weapon', 'name':'Nuclear PRI', 'rare':3, 'img':'weapon2/2_2hand_nuclear_pri.png'},
    {'type':'weapon', 'name':'Energy Greatsword', 'rare':3, 'img':'weapon2/2_2hand_energy_greatsword.png'},
    {'type':'weapon', 'name':'Fusion Sword EX', 'rare':3, 'img':'weapon2/2_2hand_fusion_sword_ex.png'},
    {'type':'weapon', 'name':'Hybrid Type-27', 'rare':3, 'img':'weapon2/2_2hand_hybrid_type_27.png'},
    {'type':'weapon', 'name':'AP Turret', 'rare':3, 'img':'weapon2/2_cross_ap_turret.png'},
    {'type':'weapon', 'name':'Hailstone', 'rare':3, 'img':'weapon2/2_cross_hailstone.png'},
    {'type':'weapon', 'name':'Brimstone', 'rare':3, 'img':'weapon2/2_cross_brimstone.png'},
    {'type':'weapon', 'name':'Oath of Ice', 'rare':3, 'img':'weapon2/2_cross_oath_of_ice.png'},
	
    {'type':'weapon', 'name':'Water Spirit Type-I', 'rare':4, 'img':'weapon2/3_pistol_water_spirit_type_i.png'},
    {'type':'weapon', 'name':'Water Spirit Type-II', 'rare':4, 'img':'weapon2/3_pistol_water_spirit_type_ii.png'},
    {'type':'weapon', 'name':'Fire Spirit Type-I', 'rare':4, 'img':'weapon2/3_pistol_fire_spirit_type_i.png'},
    {'type':'weapon', 'name':'Fire Spirit Type-II', 'rare':4, 'img':'weapon2/3_pistol_fire_spirit_type_ii.png'},
    {'type':'weapon', 'name':'Lightning Soul', 'rare':4, 'img':'weapon2/3_blade_lightning_soul.png'},
    {'type':'weapon', 'name':'Hell\'s Thunder', 'rare':4, 'img':'weapon2/3_blade_hells_thunder.png'},
    {'type':'weapon', 'name':'Pulse Katana Type-17', 'rare':4, 'img':'weapon2/3_blade_pulse_katana_type_17.png'},
    {'type':'weapon', 'name':'Pulse Katana Type-19', 'rare':4, 'img':'weapon2/3_blade_pulse_katana_type_19.png'},
    {'type':'weapon', 'name':'Markov Type A', 'rare':4, 'img':'weapon2/3_heavy_markov_type_a.png'},
    {'type':'weapon', 'name':'Markov Type C', 'rare':4, 'img':'weapon2/3_heavy_markov_type_c.png'},
    {'type':'weapon', 'name':'Cathode Type-07', 'rare':4, 'img':'weapon2/3_heavy_cathode_type_07.png'},
    {'type':'weapon', 'name':'Cathode Type-09', 'rare':4, 'img':'weapon2/3_heavy_cathode_type_09.png'},
    {'type':'weapon', 'name':'Vanguard', 'rare':4, 'img':'weapon2/3_2hand_vanguard.png'},
    {'type':'weapon', 'name':'Ion Resonance', 'rare':4, 'img':'weapon2/3_2hand_ion_resonance.png'},
    {'type':'weapon', 'name':'Nitro Crystal', 'rare':4, 'img':'weapon2/3_2hand_nitro_crystal.png'},
    {'type':'weapon', 'name':'King Cobra', 'rare':4, 'img':'weapon2/3_2hand_king_cobra.png'},
    {'type':'weapon', 'name':'The Dark Crusher', 'rare':4, 'img':'weapon2/3_cross_the_dark_crusher.png'},
    {'type':'weapon', 'name':'Fire Angel', 'rare':4, 'img':'weapon2/3_cross_fire_angel.png'},
    {'type':'weapon', 'name':'Lightning Angel', 'rare':4, 'img':'weapon2/3_cross_lightning_angel.png'},
    {'type':'weapon', 'name':'CAS-X Saints', 'rare':4, 'img':'weapon2/3_fist_cas_x_saints.png'},
    {'type':'weapon', 'name':'White Star Banishers', 'rare':4, 'img':'weapon2/3_fist_white_star_banishers.png'},
    {'type':'weapon', 'name':'Obsidian Reaper', 'rare':4, 'img':'weapon2/3_scythe_obsidian_reaper.png'},
    {'type':'weapon', 'name':'Plasma Lance', 'rare':4, 'img':'weapon2/weapon.png'},
       
    {'type':'weapon', 'name':'2nd Sacred Relic', 'rare':5, 'img':'weapon2/4_pistol_2nd_sacred_relic.png'},
    {'type':'weapon', 'name':'Mjolnir', 'rare':5, 'img':'weapon2/4_pistol_mjolnir.png'},
    {'type':'weapon', 'name':'Hyper Railguns', 'rare':5, 'img':'weapon2/4_pistol_hyper_railguns.png'},
    {'type':'weapon', 'name':'Thunder Kikaku', 'rare':5, 'img':'weapon2/4_pistol_thunder_kikaku.png'},
    {'type':'weapon', 'name':'Tranquil Arias', 'rare':5, 'img':'weapon2/4_pistol_tranquil_arias.png'},
    {'type':'weapon', 'name':'Keys of the Void', 'rare':5, 'img':'weapon2/4_pistol_keys_of_the_void.png'},
    {'type':'weapon', 'name':'Fafnir Flame', 'rare':5, 'img':'weapon2/4_pistol_fafnir_flame.png', special:true},
    {'type':'weapon', 'name':'Energy Leapers', 'rare':5, 'img':'weapon2/4_pistol_energy_leapers.png', special:true},
    {'type':'weapon', 'name':'Light and Shadow', 'rare':5, 'img':'weapon2/4_pistol_light_and_shadow.png', special:true},
    {'type':'weapon', 'name':'Shennong\'s Guardians', 'rare':5, 'img':'weapon2/4_pistol_shennongs_guardians.png', special:true},
    {'type':'weapon', 'name':'Proto Alberich\'s Bows', 'rare':5, 'img':'weapon2/4_pistol_proto_alberichs_bows.png', special:true},
    {'type':'weapon', 'name':'ARC Serratus', 'rare':5, 'img':'weapon2/4_pistol_arc_serratus.png', special:true},
    {'type':'weapon', 'name':'Blaze Destroyer', 'rare':5, 'img':'weapon2/4_pistol_blaze_destroyer.png', special:true},
    {'type':'weapon', 'name':'Blooded Saints', 'rare':5, 'img':'weapon2/4_pistol_blooded_saints.png', special:true},
    {'type':'weapon', 'name':'Jingwei\s Wings', 'rare':5, 'img':'weapon2/4_pistol_jingweis_wings.png', special:true}, 
    {'type':'weapon', 'name':'PSY - Bows of Hel', 'rare':5, 'img':'weapon2/4_pistol_psy_bows_of_hel.png', special:true},
    {'type':'weapon', 'name':'Usurpers', 'rare':5, 'img':'weapon2/4_pistol_usurpers.png', special:true},
	{'type':'weapon', 'name':'3rd Sacred Relic', 'rare':5, 'img':'weapon2/4_blade_3rd_sacred_relic.png'},
    {'type':'weapon', 'name':'MagStorm', 'rare':5, 'img':'weapon2/4_blade_magstorm.png'},
    {'type':'weapon', 'name':'Sakura Blossom', 'rare':5, 'img':'weapon2/4_blade_sakura_blossom.png'},
    {'type':'weapon', 'name':'Demonblade - Florid Sakura', 'rare':5, 'img':'weapon2/4_blade_demonblade_florid_sakura.png'},
    {'type':'weapon', 'name':'Void Blade', 'rare':5, 'img':'weapon2/4_blade_void_blade.png'},
    {'type':'weapon', 'name':'Raikiri', 'rare':5, 'img':'weapon2/4_blade_raikiri.png', special:true},
    {'type':'weapon', 'name':'Vibro Cutter', 'rare':5, 'img':'weapon2/4_blade_vibro_cutter.png', special:true},
    {'type':'weapon', 'name':'Osahoko', 'rare':5, 'img':'weapon2/4_blade_osahoko.png', special:true},
    {'type':'weapon', 'name':'Plasma Kagehide', 'rare':5, 'img':'weapon2/4_blade_plasma_kagehide.png', special:true},
    {'type':'weapon', 'name':'Fairy Sword Silven', 'rare':5, 'img':'weapon2/4_blade_fairy_sword_silven.png', special:true},
    {'type':'weapon', 'name':'Futsunushi-To', 'rare':5, 'img':'weapon2/4_blade_futsunushi_to.png', special:true},
    {'type':'weapon', 'name':'Ice Epiphyllum', 'rare':5, 'img':'weapon2/4_blade_ice_epiphyllum.png', special:true},
    {'type':'weapon', 'name':'Nuwa\'s Sword', 'rare':5, 'img':'weapon2/4_blade_nuwas_sword.png', special:true},
    {'type':'weapon', 'name':'Pledge of Rain', 'rare':5, 'img':'weapon2/4_blade_pledge_of_rain.png', special:true},
    {'type':'weapon', 'name':'Sky Breaker', 'rare':5, 'img':'weapon2/4_blade_sky_breaker.png', special:true},
    {'type':'weapon', 'name':'Vorpal Sword Type-11', 'rare':5, 'img':'weapon2/4_blade_vorpal_sword_type_11.png', special:true},
    {'type':'weapon', 'name':'Dawn Breaker - Talwar', 'rare':5, 'img':'weapon2/4_blade_dawn_breaker_talwar.png', special:true},
    {'type':'weapon', 'name':'5th Sacred Relic', 'rare':5, 'img':'weapon2/4_heavy_5th_sacred_relic.png'},
    {'type':'weapon', 'name':'Flint Sanada', 'rare':5, 'img':'weapon2/4_heavy_flint_sanada.png'},
    {'type':'weapon', 'name':'Hand of Tyr', 'rare':5, 'img':'weapon2/4_heavy_hand_of_tyr.png'},
    {'type':'weapon', 'name':'Cyclops PRI', 'rare':5, 'img':'weapon2/4_heavy_cyclops_pri.png', special:true},
    {'type':'weapon', 'name':'Briareus PRI', 'rare':5, 'img':'weapon2/4_heavy_briareus PRI.png', special:true},
    {'type':'weapon', 'name':'Project Bunny 19C', 'rare':5, 'img':'weapon2/4_heavy_project_bunny_19c.png', special:true},
    {'type':'weapon', 'name':'Core Evoker Delta', 'rare':5, 'img':'weapon2/4_heavy_core_evoker_delta.png', special:true},
    {'type':'weapon', 'name':'Hand of Ymir', 'rare':5, 'img':'weapon2/4_heavy_hand_of_ymir.png', special:true},
    {'type':'weapon', 'name':'Chiyou Cannon', 'rare':5, 'img':'weapon2/4_heavy_chiyou_cannon.png', special:true},
    {'type':'weapon', 'name':'Quantum Destroyer Type-II', 'rare':5, 'img':'weapon2/4_heavy_quantum_destroyer_type_ii.png', special:true},
    {'type':'weapon', 'name':'Hellfire Type-III', 'rare':5, 'img':'weapon2/4_heavy_hellfire_type_iii.png', special:true},
    {'type':'weapon', 'name':'Key of Reason', 'rare':5, 'img':'weapon2/4_heavy_key_of_reason.png', special:true},
    {'type':'weapon', 'name':'M134 Vulcan Minigun', 'rare':5, 'img':'weapon2/4_heavy_m134_vulcan_minigun.png', special:true},
    {'type':'weapon', 'name':'Star Destroyer 19C', 'rare':5, 'img':'weapon2/4_heavy_star_destroyer_19c.png', special:true},
    {'type':'weapon', 'name':'Star Shatterer - Vikrant', 'rare':5, 'img':'weapon2/4_heavy_star_shatterer_vikrant.png', special:true},
    {'type':'weapon', 'name':'Blood Dance', 'rare':5, 'img':'weapon2/4_2hand_blood_dance.png'},
    {'type':'weapon', 'name':'Nidhogg\'s Claws', 'rare':5, 'img':'weapon2/4_2hand_nidhoggs_claws.png', special:true},
    {'type':'weapon', 'name':'7th Sacred Relic', 'rare':5, 'img':'weapon2/4_2hand_7th_sacred_relic.png', special:true},
    {'type':'weapon', 'name':'Sunfire', 'rare':5, 'img':'weapon2/4_2hand_sunfire.png', special:true},
    {'type':'weapon', 'name':'Schiffschneider', 'rare':5, 'img':'weapon2/4_2hand_schiffschneider.png', special:true},
    {'type':'weapon', 'name':'Gyukikiri Nagamitsu', 'rare':5, 'img':'weapon2/4_2hand_gyukikiri_nagamitsu.png', special:true},
    {'type':'weapon', 'name':'Balmung', 'rare':5, 'img':'weapon2/4_2hand_balmung.png', special:true},
    {'type':'weapon', 'name':'Dark Xuanyuan Sword', 'rare':5, 'img':'weapon2/4_2hand_dark_xuanyuan_sword.png', special:true},
    {'type':'weapon', 'name':'Dragon Spine', 'rare':5, 'img':'weapon2/4_2hand_dragon_spine.png', special:true},
    {'type':'weapon', 'name':'Godslayer - Surtr', 'rare':5, 'img':'weapon2/4_2hand_godslayer_surtr.png', special:true},
    {'type':'weapon', 'name':'Hrungnir', 'rare':5, 'img':'weapon2/4_2hand_hrungnir.png', special:true},
    {'type':'weapon', 'name':'Judgment by Dawn', 'rare':5, 'img':'weapon2/4_2hand_judgment_by_dawn.png', special:true},
    {'type':'weapon', 'name':'Might of An-Utu', 'rare':5, 'img':'weapon2/4_2hand_might_of_an_utu.png', special:true},
    {'type':'weapon', 'name':'Sleeping Beauty', 'rare':5, 'img':'weapon2/4_2hand_sleeping_beauty.png', special:true},
    {'type':'weapon', 'name':'Swan Lake', 'rare':5, 'img':'weapon2/4_2hand_swan_lake.png', special:true},
    {'type':'weapon', 'name':'Xuanyuan Sword', 'rare':5, 'img':'weapon2/4_2hand_xuanyuan_sword.png', special:true},
    {'type':'weapon', 'name':'Oath of Judah', 'rare':5, 'img':'weapon2/4_cross_oath_of_judah.png'},
    {'type':'weapon', 'name':'Blood Embrace', 'rare':5, 'img':'weapon2/4_cross_blood_embrace.png'},
    {'type':'weapon', 'name':'11th Sacred Relic', 'rare':5, 'img':'weapon2/4_cross_11th_sacred_relic.png'},
    {'type':'weapon', 'name':'Eliudnir', 'rare':5, 'img':'weapon2/4_cross_eliudnir.png', special:true},
    {'type':'weapon', 'name':'Hekate\'s Gloom', 'rare':5, 'img':'weapon2/4_cross_hekates_gloom.png', special:true},
    {'type':'weapon', 'name':'Pledge of Sakura', 'rare':5, 'img':'weapon2/4_cross_pledge_of_sakura.png', special:true},
    {'type':'weapon', 'name':'Selune\'s Elegy', 'rare':5, 'img':'weapon2/4_cross_selunes_elegy.png', special:true},
    {'type':'weapon', 'name':'Silver Reaper', 'rare':5, 'img':'weapon2/4_cross_sliver_reaper.png', special:true},
    {'type':'weapon', 'name':'Super-\*-Sonata', 'rare':5, 'img':'weapon2/4_cross_super_sonata.png', special:true},
    {'type':'weapon', 'name':'Cinder Hawk', 'rare':5, 'img':'weapon2/4_fist_cinder_hawk.png'},
    {'type':'weapon', 'name':'Skoll and Hati', 'rare':5, 'img':'weapon2/4_fist_skoll_and_hati.png'},
    {'type':'weapon', 'name':'Nuada\'s Grief', 'rare':5, 'img':'weapon2/4_fist_nuadas_grief.png'},
    {'type':'weapon', 'name':'Cygnus Gauntlets', 'rare':5, 'img':'weapon2/4_fist_cygnus_gauntlets.png', special:true},
    {'type':'weapon', 'name':'Jade Bloom', 'rare':5, 'img':'weapon2/4_fist_jade_bloom.png', special:true},
    {'type':'weapon', 'name':'Nebulous Duality', 'rare':5, 'img':'weapon2/4_fist_nebulous_duality.png', special:true},
    {'type':'weapon', 'name':'Stellar Vortex', 'rare':5, 'img':'weapon2/4_fist_stellar_vortex.png', special:true},
    {'type':'weapon', 'name':'Aphrodite', 'rare':5, 'img':'weapon2/4_scythe_aphrodite.png', special:true},
    {'type':'weapon', 'name':'Genome Reaper', 'rare':5, 'img':'weapon2/4_scythe_genome_reaper.png', special:true},
    {'type':'weapon', 'name':'Onyx Iron', 'rare':5, 'img':'weapon2/4_scythe_onyx_iron.png', special:true},
    {'type':'weapon', 'name':'Path to Acheron', 'rare':5, 'img':'weapon2/weapon.png', special:true},
    {'type':'weapon', 'name':'Skadi Ondurgud', 'rare':5, 'img':'weapon2/4_scythe_skadi_ondurgud.png', special:true},
    {'type':'weapon', 'name':'Undine\'s Tale', 'rare':5, 'img':'weapon2/4_scythe_undines_tale.png', special:true},
    {'type':'weapon', 'name':'Lucia', 'rare':5, 'img':'weapon2/weapon.png', special:true},
    {'type':'weapon', 'name':'Eos Gloria', 'rare':5, 'img':'weapon2/weapon.png', special:true},
	

    // stigmatas
    {'type':'stigmata', 'name':'Selena (T)', 'rare':2, 'img':'stigmata2/1_selena_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Selena (M)', 'rare':2, 'img':'stigmata2/1_selena_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Selena (B)', 'rare':2, 'img':'stigmata2/1_selena_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Charlotte (T)', 'rare':2, 'img':'stigmata2/1_charlotte_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Charlotte (M)', 'rare':2, 'img':'stigmata2/1_charlotte_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Charlotte (B)', 'rare':2, 'img':'stigmata2/1_charlotte_B.png', 'pos':'B'},
	
    {'type':'stigmata', 'name':'Hannah (T)', 'rare':3, 'img':'stigmata2/2_hannah_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Hannah (M)', 'rare':3, 'img':'stigmata2/2_hannah_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Hannah (B)', 'rare':3, 'img':'stigmata2/2_hannah_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Octavia (T)', 'rare':3, 'img':'stigmata2/2_octavia_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Octavia (M)', 'rare':3, 'img':'stigmata2/2_octavia_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Octavia (B)', 'rare':3, 'img':'stigmata2/2_octavia_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Lucia (T)', 'rare':3, 'img':'stigmata2/2_lucia_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Lucia (M)', 'rare':3, 'img':'stigmata2/2_lucia_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Lucia (B)', 'rare':3, 'img':'stigmata2/2_lucia_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Viola (T)', 'rare':3, 'img':'stigmata2/2_viola_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Viola (M)', 'rare':3, 'img':'stigmata2/2_viola_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Viola (B)', 'rare':3, 'img':'stigmata2/2_viola_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Victoria (T)', 'rare':3, 'img':'stigmata2/2_victoria_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Victoria (M)', 'rare':3, 'img':'stigmata2/2_victoria_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Victoria (B)', 'rare':3, 'img':'stigmata2/2_victoria_B.png', 'pos':'B'},
	
    {'type':'stigmata', 'name':'Elizabeth Bathory (T)', 'rare':4, 'img':'stigmata2/3_elizabeth_bathory_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Elizabeth Bathory (M)', 'rare':4, 'img':'stigmata2/3_elizabeth_bathory_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Elizabeth Bathory (B)', 'rare':4, 'img':'stigmata2/3_elizabeth_bathory_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Wang Zhaojun (T)', 'rare':4, 'img':'stigmata2/3_wang_zhaojun_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Wang Zhaojun (M)', 'rare':4, 'img':'stigmata2/3_wang_zhaojun_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Wang Zhaojun (B)', 'rare':4, 'img':'stigmata2/3_wang_zhaojun_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Attila (T)', 'rare':4, 'img':'stigmata2/3_attila_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Attila (M)', 'rare':4, 'img':'stigmata2/3_attila_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Attila (B)', 'rare':4, 'img':'stigmata2/3_attila_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Charlemagne (T)', 'rare':4, 'img':'stigmata2/3_charlemagne_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Charlemagne (M)', 'rare':4, 'img':'stigmata2/3_charlemagne_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Charlemagne (B)', 'rare':4, 'img':'stigmata2/3_charlemagne_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Ogier (T)', 'rare':4, 'img':'stigmata2/3_ogier_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Ogier (M)', 'rare':4, 'img':'stigmata2/3_ogier_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Ogier (B)', 'rare':4, 'img':'stigmata2/3_ogier_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Sakamoto Ryoma (T)', 'rare':4, 'img':'stigmata2/3_sakamoto_ryoma_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Sakamoto Ryoma (M)', 'rare':4, 'img':'stigmata2/3_sakamoto_ryoma_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Sakamoto Ryoma (B)', 'rare':4, 'img':'stigmata2/3_sakamoto_ryoma_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nikola Tesla (T)', 'rare':4, 'img':'stigmata2/3_nikola_tesla_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nikola Tesla (M)', 'rare':4, 'img':'stigmata2/3_nikola_tesla_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nikola Tesla (B)', 'rare':4, 'img':'stigmata2/3_nikola_tesla_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Rinaldo (T)', 'rare':4, 'img':'stigmata2/3_rinaldo_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Rinaldo (M)', 'rare':4, 'img':'stigmata2/3_rinaldo_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Rinaldo (B)', 'rare':4, 'img':'stigmata2/3_rinaldo_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Shigure Kira (T)', 'rare':4, 'img':'stigmata2/3_shigure_kira_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Shigure Kira (M)', 'rare':4, 'img':'stigmata2/3_shigure_kira_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Shigure Kira (B)', 'rare':4, 'img':'stigmata2/3_shigure_kira_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Galileo (T)', 'rare':4, 'img':'stigmata2/3_galileo_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Galileo (M)', 'rare':4, 'img':'stigmata2/3_galileo_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Galileo (B)', 'rare':4, 'img':'stigmata2/3_galileo_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Ryunosuke Akutagawa (T)', 'rare':4, 'img':'stigmata2/3_ryunosuke_akutagawa_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Ryunosuke Akutagawa (M)', 'rare':4, 'img':'stigmata2/3_ryunosuke_akutagawa_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Ryunosuke Akutagawa (B)', 'rare':4, 'img':'stigmata2/3_ryunosuke_akutagawa_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Roald Amundsen (T)', 'rare':4, 'img':'stigmata2/3_roald_amundsen_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Roald Amundsen (M)', 'rare':4, 'img':'stigmata2/3_roald_amundsen_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Roald Amundsen (B)', 'rare':4, 'img':'stigmata2/3_roald_amundsen_B.png', 'pos':'B'},
    
    {'type':'stigmata', 'name':'Cleopatra (T)', 'rare':5, 'img':'stigmata2/4_cleopatra_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Cleopatra (M)', 'rare':5, 'img':'stigmata2/4_cleopatra_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Cleopatra (B)', 'rare':5, 'img':'stigmata2/4_cleopatra_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Dark Jixuanyuan (T)', 'rare':5, 'img':'stigmata2/4_dark_jixuanyuan_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Dark Jixuanyuan (M)', 'rare':5, 'img':'stigmata2/4_dark_jixuanyuan_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Dark Jixuanyuan (B)', 'rare':5, 'img':'stigmata2/4_dark_jixuanyuan_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Shakespeare (T)', 'rare':5, 'img':'stigmata2/4_shakespeare_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Shakespeare (M)', 'rare':5, 'img':'stigmata2/4_shakespeare_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Shakespeare (B)', 'rare':5, 'img':'stigmata2/4_shakespeare_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Ekaterina (T)', 'rare':5, 'img':'stigmata2/4_ekaterina_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Ekaterina (M)', 'rare':5, 'img':'stigmata2/4_ekaterina_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Ekaterina (B)', 'rare':5, 'img':'stigmata2/4_ekaterina_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Lier (T)', 'rare':5, 'img':'stigmata2/4_lier_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Lier (M)', 'rare':5, 'img':'stigmata2/4_lier_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Lier (B)', 'rare':5, 'img':'stigmata2/4_lier_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Fuxi (T)', 'rare':5, 'img':'stigmata2/4_fuxi_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Fuxi (M)', 'rare':5, 'img':'stigmata2/4_fuxi_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Fuxi (B)', 'rare':5, 'img':'stigmata2/4_fuxi_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nuwa (T)', 'rare':5, 'img':'stigmata2/4_nuwa_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nuwa (M)', 'rare':5, 'img':'stigmata2/4_nuwa_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nuwa (B)', 'rare':5, 'img':'stigmata2/4_nuwa_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Shennong (T)', 'rare':5, 'img':'stigmata2/4_shennong_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Shennong (M)', 'rare':5, 'img':'stigmata2/4_shennong_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Shennong (B)', 'rare':5, 'img':'stigmata2/4_shennong_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Isaac Newton (T)', 'rare':5, 'img':'stigmata2/4_isaac_newton_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Isaac Newton (M)', 'rare':5, 'img':'stigmata2/4_isaac_newton_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Isaac Newton (B)', 'rare':5, 'img':'stigmata2/4_isaac_newton_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Schrodinger (T)', 'rare':5, 'img':'stigmata2/4_schrodinger_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Schrodinger (M)', 'rare':5, 'img':'stigmata2/4_schrodinger_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Schrodinger (B)', 'rare':5, 'img':'stigmata2/4_schrodinger_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Planck (T)', 'rare':5, 'img':'stigmata2/4_planck_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Planck (M)', 'rare':5, 'img':'stigmata2/4_planck_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Planck (B)', 'rare':5, 'img':'stigmata2/4_planck_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Lier Scarlet (T)', 'rare':5, 'img':'stigmata2/4_lier_scarlet_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Lier Scarlet (M)', 'rare':5, 'img':'stigmata2/4_lier_scarlet_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Lier Scarlet (B)', 'rare':5, 'img':'stigmata2/4_lier_scarlet_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Kallen Pledge (T)', 'rare':5, 'img':'stigmata2/4_kallen_pledge_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Kallen Pledge (M)', 'rare':5, 'img':'stigmata2/4_kallen_pledge_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Kallen Pledge (B)', 'rare':5, 'img':'stigmata2/4_kallen_pledge_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Sanada Yukimura (T)', 'rare':5, 'img':'stigmata2/4_sanada_yukimura_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Sanada Yukimura (M)', 'rare':5, 'img':'stigmata2/4_sanada_yukimura_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Sanada Yukimura (B)', 'rare':5, 'img':'stigmata2/4_sanada_yukimura_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Siegfried Kaslana (T)', 'rare':5, 'img':'stigmata2/4_siegfried_kaslana_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Siegfried Kaslana (M)', 'rare':5, 'img':'stigmata2/4_siegfried_kaslana_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Siegfried Kaslana (B)', 'rare':5, 'img':'stigmata2/4_siegfried_kaslana_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Cecilia Schariac (T)', 'rare':5, 'img':'stigmata2/4_cecilia_schariac_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Cecilia Schariac (M)', 'rare':5, 'img':'stigmata2/4_cecilia_schariac_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Cecilia Schariac (B)', 'rare':5, 'img':'stigmata2/4_cecilia_schariac_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nohime (T)', 'rare':5, 'img':'stigmata2/4_nohime_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nohime (M)', 'rare':5, 'img':'stigmata2/4_nohime_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nohime (B)', 'rare':5, 'img':'stigmata2/4_nohime_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Einstein Band (T)', 'rare':5, 'img':'stigmata2/4_einstein_band_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Einstein Band (M)', 'rare':5, 'img':'stigmata2/4_einstein_band_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Einstein Band (B)', 'rare':5, 'img':'stigmata2/4_einstein_band_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Kepler (T)', 'rare':5, 'img':'stigmata2/4_kepler_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Kepler (M)', 'rare':5, 'img':'stigmata2/4_kepler_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Kepler (B)', 'rare':5, 'img':'stigmata2/4_kepler_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Higokumaru (T)', 'rare':5, 'img':'stigmata2/4_higokumaru_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Higokumaru (M)', 'rare':5, 'img':'stigmata2/4_higokumaru_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Higokumaru (B)', 'rare':5, 'img':'stigmata2/4_higokumaru_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Dracula (T)', 'rare':5, 'img':'stigmata2/4_dracula_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Dracula (M)', 'rare':5, 'img':'stigmata2/4_dracula_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Dracula (B)', 'rare':5, 'img':'stigmata2/4_dracula_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Jixuanyuan (T)', 'rare':5, 'img':'stigmata2/4_jixuanyuan_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Jixuanyuan (M)', 'rare':5, 'img':'stigmata2/4_jixuanyuan_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Jixuanyuan (B)', 'rare':5, 'img':'stigmata2/4_jixuanyuan_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Jingwei (T)', 'rare':5, 'img':'stigmata2/4_jingwei_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Jingwei (M)', 'rare':5, 'img':'stigmata2/4_jingwei_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Jingwei (B)', 'rare':5, 'img':'stigmata2/4_jingwei_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Zhuge Kongming (T)', 'rare':5, 'img':'stigmata2/4_zhuge_kongming_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Zhuge Kongming (M)', 'rare':5, 'img':'stigmata2/4_zhuge_kongming_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Zhuge Kongming (B)', 'rare':5, 'img':'stigmata2/4_zhuge_kongming_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Yae Sakura (T)', 'rare':5, 'img':'stigmata2/4_yae_sakura_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Yae Sakura (M)', 'rare':5, 'img':'stigmata2/4_yae_sakura_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Yae Sakura (B)', 'rare':5, 'img':'stigmata2/4_yae_sakura_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Seele Vollerei (T)', 'rare':5, 'img':'stigmata2/4_seele_vollerei_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Seele Vollerei (M)', 'rare':5, 'img':'stigmata2/4_seele_vollerei_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Seele Vollerei (B)', 'rare':5, 'img':'stigmata2/4_seele_vollerei_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nagamitsu (T)', 'rare':5, 'img':'stigmata2/4_nagamitsu_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nagamitsu (M)', 'rare':5, 'img':'stigmata2/4_nagamitsu_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nagamitsu (B)', 'rare':5, 'img':'stigmata2/4_nagamitsu_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Bronya: Shadow (T)', 'rare':5, 'img':'stigmata2/4_bronya_shadow_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Bronya: Shadow (M)', 'rare':5, 'img':'stigmata2/4_bronya_shadow_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Bronya: Shadow (B)', 'rare':5, 'img':'stigmata2/4_bronya_shadow_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Sin Mal (T)', 'rare':5, 'img':'stigmata2/4_sin_mal_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Sin Mal (M)', 'rare':5, 'img':'stigmata2/4_sin_mal_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Sin Mal (B)', 'rare':5, 'img':'stigmata2/4_sin_mal_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Otto Apocalypse (T)', 'rare':5, 'img':'stigmata2/4_otto_apocalypse_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Otto Apocalypse (M)', 'rare':5, 'img':'stigmata2/4_otto_apocalypse_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Otto Apocalypse (B)', 'rare':5, 'img':'stigmata2/4_otto_apocalypse_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Picasso (T)', 'rare':5, 'img':'stigmata2/4_picasso_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Picasso (M)', 'rare':5, 'img':'stigmata2/4_picasso_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Picasso (B)', 'rare':5, 'img':'stigmata2/4_picasso_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Sirin (T)', 'rare':5, 'img':'stigmata2/4_sirin_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Sirin (M)', 'rare':5, 'img':'stigmata2/4_sirin_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Sirin (B)', 'rare':5, 'img':'stigmata2/4_sirin_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Kallen - Hymn (T)', 'rare':5, 'img':'stigmata2/4_kallen_hymn_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Kallen - Hymn (M)', 'rare':5, 'img':'stigmata2/4_kallen_hymn_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Kallen - Hymn (B)', 'rare':5, 'img':'stigmata2/4_kallen_hymn_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Cocolia (T)', 'rare':5, 'img':'stigmata2/4_cocolia_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Cocolia (M)', 'rare':5, 'img':'stigmata2/4_cocolia_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Cocolia (B)', 'rare':5, 'img':'stigmata2/4_cocolia_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Michelangelo (T)', 'rare':5, 'img':'stigmata2/4_michelangelo_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Michelangelo (M)', 'rare':5, 'img':'stigmata2/4_michelangelo_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Michelangelo (B)', 'rare':5, 'img':'stigmata2/4_michelangelo_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Mary Shelley (T)', 'rare':5, 'img':'stigmata2/4_mary_shelley_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Mary Shelley (M)', 'rare':5, 'img':'stigmata2/4_mary_shelley_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Mary Shelley (B)', 'rare':5, 'img':'stigmata2/4_mary_shelley_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Tesla Band (T)', 'rare':5, 'img':'stigmata2/4_tesla_band_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Tesla Band (M)', 'rare':5, 'img':'stigmata2/4_tesla_band_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Tesla Band (B)', 'rare':5, 'img':'stigmata2/4_tesla_band_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Schrodinger Band (T)', 'rare':5, 'img':'stigmata2/4_schrodinger_band_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Schrodinger Band (M)', 'rare':5, 'img':'stigmata2/4_schrodinger_band_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Schrodinger Band (B)', 'rare':5, 'img':'stigmata2/4_schrodinger_band_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Caravaggio (T)', 'rare':5, 'img':'stigmata2/4_caravaggio_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Caravaggio (M)', 'rare':5, 'img':'stigmata2/4_caravaggio_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Caravaggio (B)', 'rare':5, 'img':'stigmata2/4_caravaggio_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Jin Shengtan (T)', 'rare':5, 'img':'stigmata2/4_jin_shengtan_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Jin Shengtan (M)', 'rare':5, 'img':'stigmata2/4_jin_shengtan_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Jin Shengtan (B)', 'rare':5, 'img':'stigmata2/4_jin_shengtan_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nuwa Figurine Master (T)', 'rare':5, 'img':'stigmata2/4_nuwa_figurine_master_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nuwa Figurine Master (M)', 'rare':5, 'img':'stigmata2/4_nuwa_figurine_master_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nuwa Figurine Master (B)', 'rare':5, 'img':'stigmata2/4_nuwa_figurine_master_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Monet (T)', 'rare':5, 'img':'stigmata2/4_monet_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Monet (M)', 'rare':5, 'img':'stigmata2/4_monet_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Monet (B)', 'rare':5, 'img':'stigmata2/4_monet_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Fu Hua Musician (T)', 'rare':5, 'img':'stigmata2/4_fu_hua_musician_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Fu Hua Musician (M)', 'rare':5, 'img':'stigmata2/4_fu_hua_musician_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Fu Hua Musician (B)', 'rare':5, 'img':'stigmata2/4_fu_hua_musician_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Zorro (T)', 'rare':5, 'img':'stigmata2/4_zorro_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Zorro (M)', 'rare':5, 'img':'stigmata2/4_zorro_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Zorro (B)', 'rare':5, 'img':'stigmata2/4_zorro_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Gustav Klimt (T)', 'rare':5, 'img':'stigmata2/4_gustav_klimt_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Gustav Klimt (M)', 'rare':5, 'img':'stigmata2/4_gustav_klimt_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Gustav Klimt (B)', 'rare':5, 'img':'stigmata2/4_gustav_klimt_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Sirin: Ascendant (T)', 'rare':5, 'img':'stigmata2/4_sirin_ascendant_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Sirin: Ascendant (M)', 'rare':5, 'img':'stigmata2/4_sirin_ascendant_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Sirin: Ascendant (B)', 'rare':5, 'img':'stigmata2/4_sirin_ascendant_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Edwin Hubble (T)', 'rare':5, 'img':'stigmata2/4_edwin_hubble_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Edwin Hubble (M)', 'rare':5, 'img':'stigmata2/4_edwin_hubble_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Edwin Hubble (B)', 'rare':5, 'img':'stigmata2/4_edwin_hubble_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Wilde (T)', 'rare':5, 'img':'stigmata2/4_wilde_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Wilde (M)', 'rare':5, 'img':'stigmata2/4_wilde_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Wilde (B)', 'rare':5, 'img':'stigmata2/4_wilde_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Darwin (T)', 'rare':5, 'img':'stigmata2/4_darwin_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Darwin (M)', 'rare':5, 'img':'stigmata2/4_darwin_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Darwin (B)', 'rare':5, 'img':'stigmata2/4_darwin_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Thales (T)', 'rare':5, 'img':'stigmata2/4_thales_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Thales (M)', 'rare':5, 'img':'stigmata2/4_thales_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Thales (B)', 'rare':5, 'img':'stigmata2/4_thales_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Robert Peary (T)', 'rare':5, 'img':'stigmata2/4_robert_peary_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Robert Peary (M)', 'rare':5, 'img':'stigmata2/4_robert_peary_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Robert Peary (B)', 'rare':5, 'img':'stigmata2/4_robert_peary_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Beethoven (T)', 'rare':5, 'img':'stigmata2/4_beethoven_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Beethoven (M)', 'rare':5, 'img':'stigmata2/4_beethoven_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Beethoven (B)', 'rare':5, 'img':'stigmata2/4_beethoven_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Nobel (T)', 'rare':5, 'img':'stigmata2/4_nobel_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Nobel (M)', 'rare':5, 'img':'stigmata2/4_nobel_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Nobel (B)', 'rare':5, 'img':'stigmata2/4_nobel_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Mendeleev (T)', 'rare':5, 'img':'stigmata2/4_mendeleev_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Mendeleev (M)', 'rare':5, 'img':'stigmata2/4_mendeleev_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Mendeleev (B)', 'rare':5, 'img':'stigmata2/4_mendeleev_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Dirac (T)', 'rare':5, 'img':'stigmata2/4_dirac_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Dirac (M)', 'rare':5, 'img':'stigmata2/4_dirac_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Dirac (B)', 'rare':5, 'img':'stigmata2/4_dirac_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Welt Yang (T)', 'rare':5, 'img':'stigmata2/4_welt_yang_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Welt Yang (M)', 'rare':5, 'img':'stigmata2/4_welt_yang_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Welt Yang (B)', 'rare':5, 'img':'stigmata2/4_welt_yang_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Rasputin (T)', 'rare':5, 'img':'stigmata2/4_rasputin_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Rasputin (M)', 'rare':5, 'img':'stigmata2/4_rasputin_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Rasputin (B)', 'rare':5, 'img':'stigmata2/4_rasputin_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Marco Polo (T)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Marco Polo (M)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Marco Polo (B)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Kafka (T)', 'rare':5, 'img':'stigmata2/4_kafka_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Kafka (M)', 'rare':5, 'img':'stigmata2/4_kafka_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Kafka (B)', 'rare':5, 'img':'stigmata2/4_kafka_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Allan Poe (T)', 'rare':5, 'img':'stigmata2/4_allan_poe_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Allan Poe (M)', 'rare':5, 'img':'stigmata2/4_allan_poe_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Allan Poe (B)', 'rare':5, 'img':'stigmata2/4_allan_poe_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Ishikawa Goemon (T)', 'rare':5, 'img':'stigmata2/4_ishikawa_goemon_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Ishikawa Goemon (M)', 'rare':5, 'img':'stigmata2/4_ishikawa_goemon_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Ishikawa Goemon (B)', 'rare':5, 'img':'stigmata2/4_ishikawa_goemon_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Fu Hua: Margrave (T)', 'rare':5, 'img':'stigmata2/4_fu_hua_margrave_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Fu Hua: Margrave (M)', 'rare':5, 'img':'stigmata2/4_fu_hua_margrave_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Fu Hua: Margrave (B)', 'rare':5, 'img':'stigmata2/4_fu_hua_margrave_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Leeuwenhoek (T)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Leeuwenhoek (M)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Leeuwenhoek (B)', 'rare':5, 'img':'stigmata2/stigmata2.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Zhangheng (T)', 'rare':5, 'img':'stigmata2/4_zhangheng_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Zhangheng (M)', 'rare':5, 'img':'stigmata2/4_zhangheng_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Zhangheng (B)', 'rare':5, 'img':'stigmata2/4_zhangheng_B.png', 'pos':'B'},
    {'type':'stigmata', 'name':'Einstein (T)', 'rare':5, 'img':'stigmata2/4_einstein_T.png', 'pos':'T'},
    {'type':'stigmata', 'name':'Einstein (M)', 'rare':5, 'img':'stigmata2/4_einstein_M.png', 'pos':'M'},
    {'type':'stigmata', 'name':'Einstein (B)', 'rare':5, 'img':'stigmata2/4_einstein_B.png', 'pos':'B'},
	

	//materials
	{'type':'material', 'name':'ADV EXP Chip', 'rare':4, 'img':'material2/chip.png'},
	{'type':'material', 'name':'Super EXP Chip', 'rare':5, 'img':'material2/chip.png'},

	{'type':'material', 'name':'Soul Crystal', 'rare':4, 'img':'material2/equip_3_soul_crystal.png'},
	{'type':'material', 'name':'Twin Soul Crystal', 'rare':5, 'img':'material2/equip_4_twin_soul_crystal.png'},

	{'type':'material', 'name':'Microreactor', 'rare':4, 'img':'material2/com_3_microreactor.png'},
	{'type':'material', 'name':'Phase Shifter', 'rare':5, 'img':'material2/com_4_phase_shifter.png'},
	
	{'type':'material', 'name':'Normal Crystal Core', 'rare':4, 'img':'material2/adv_3_normal_crystal_core.png'},
	{'type':'material', 'name':'Reroll Device: ATK', 'rare':5, 'img':'material2/adv_4_reroll_device_atk.png'},
	{'type':'material', 'name':'Asterite', 'rare':5, 'img':'material2/adv_4_asterite.png'},
	{'type':'material', 'name':'Spirit Jade', 'rare':5, 'img':'material2/adv_4_spirit_jade.png'},
	{'type':'material', 'name':'Advanced Skill Material', 'rare':5, 'img':'material2/adv_4_advanced_skill_material.png'},

	{'type':'material', 'name':'HOLA Chest', 'rare':3, 'img':'material2/coin_2_hola_chest.png'},
	{'type':'material', 'name':'HOLI Chest', 'rare':4, 'img':'material2/coin_3_holi_chest.png'},
	{'type':'material', 'name':'HOMU Chest', 'rare':4, 'img':'material2/coin_3_homu_chest.png'},
	{'type':'material', 'name':'HOMEI Chest', 'rare':5, 'img':'material2/coin_4_homei_chest.png'},
	{'type':'material', 'name':'HOMI Chest', 'rare':5, 'img':'material2/coin_4_homi_chest.png'},
];


var gacha_dist_normal = {					//Dorm Supply
    's_valkyrie' : 1.5, // 1.5 --> 0.94
    's_valkyrie_piece': 1.27,
    'a_valkyrie': 13.5,  // 13.5 --> 8.46
    'a_valkyrie_piece': 10.19,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.73,
    'a_weapon': 7.50,
    'a_stigmata': 22.50,
    'b_weapon': 12.44,
    'b_stigmata': 24.40,
    'pickups': [],
    'material': 36.85,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie = {				//Expansion Supply
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8,   // 4.5 --> 2.82
        1.88, 4.0, 1.88, 4.0, 1.88, 4.0,   // 3 --> 1.88
    ],
    'material': 58.75,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie2 = {			//EXPA Supply (not yet implemented)
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8, 2.82, 4.8,   // 4.5 --> 2.82
        1.41, 1.41, 1.41, 1.41, 2.82, 0.94,   // 2.25 --> 1.41
    ],
    'material': 57,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_weapon = {				//Focused Supply
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 16.275,
    'a_stigmata': 23.912,
    'b_weapon': 29.239,
    'b_stigmata': 22.179,
    // weapon, stigmata
    // weapon_others,
    // stigmata_others
    'pickups': [
        0.97, 0.485, 0.485, 0.485,
        0.16,0.16,0.16,0.16,0.16,0.16,
        0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,
    ],
    'material': 87.62,
    'special': false,
    'ensure_type': "pickups",
    'ensure_level': 5,
};


/*
 * utility function
 */

function get_gacha_dist(type)
{
    var server_normal = {
        'normal': gacha_dist_normal,
        'extended': gacha_dist_valkyrie,
        'extended2': gacha_dist_valkyrie2,
        'weapon': gacha_dist_weapon
    };
	return server_normal[type]
}

function get_object_idx(name)
{
    for (var i=0; i<ids.length; i++)
    {
        if (ids[i].name == name)
            return i;
    }
    console.error('cannot find name: ' + name);
    return -1;
}




/*
 * main class Gacha
 */

var Gacha = function(dist, pickup_ids)
{
    /*
     * pickup object is excluded from general gacha!
     * (calculated with exclusive probability)
     */

    // ASSERT
    if (dist.pickups.length != pickup_ids.length)
    {
        console.error('pickup length mismatch!!');
        return;
    }

    // ensure 4-STAR gacha per 10 count
    var count = 0;
    // is previously choosed one pick-up?
    var is_pickup = false;
    var ensure_type = null;
    var ensure_level = 4;

    // generate pickup table, according to given distribution
    var range_table = {
        'valkyrie': [0,0,0,0,0],
        'valkyrie_piece': [0,0,0,0,0],
        'weapon': [0,0,0,0,0],
        'stigmata': [0,0,0,0,0],
        'pickups': [ ],
    };
    var pickup_table = {
        'valkyrie': [ [],[],[],[],[] ],
        'valkyrie_piece': [ [],[],[],[],[] ],
        'weapon': [ [],[],[],[],[] ],
        'stigmata': [ [],[],[],[],[] ],
        'material': [],
        'pickups': [ ],
    };
    // generate: category range.
    var prob_accumlated = 0;
    var prob_sum = 0;
    var prob_recalc = {'pickups':[]};
    var prob_dicts = [
        's_valkyrie','a_valkyrie','b_valkyrie',
        's_valkyrie_piece','a_valkyrie_piece',
        's_weapon', 's_stigmata','a_weapon', 'a_stigmata','b_weapon', 'b_stigmata',
        'material',
    ];
    ensure_type = dist['ensure_type'];
    ensure_level = dist['ensure_level'];
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_sum += dist[d];
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_sum += dist['pickups'][i];
    }
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_recalc[d] = dist[d] / prob_sum;
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_recalc['pickups'].push( dist['pickups'][i] / prob_sum );
    }
    prob_accumlated += prob_recalc['b_valkyrie'];
    range_table['valkyrie'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie'];
    range_table['valkyrie'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie'];
    range_table['valkyrie'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie_piece'];
    range_table['valkyrie_piece'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie_piece'];
    range_table['valkyrie_piece'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_weapon'];
    range_table['weapon'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_weapon'];
    range_table['weapon'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_weapon'];
    range_table['weapon'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_stigmata'];
    range_table['stigmata'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_stigmata'];
    range_table['stigmata'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_stigmata'];
    range_table['stigmata'][4] = prob_accumlated;
    // generate: pickup
    for (var i=0; i<prob_recalc['pickups'].length; i++)
    {
        prob_accumlated += prob_recalc['pickups'][i];
        range_table['pickups'].push( prob_accumlated );
    }
    // generate: table lists
    for (var i=0; i<ids.length; i++)
    {
        var obj = ids[i];
        if (i in pickup_ids) { continue; }       // exclude pickup from general list
        if (obj.type == 'material')
        {
            // material - treated differently
            pickup_table[ obj.type ].push(obj);
            continue;
        }
        if (dist.special == false && obj.special == true) {
            // exclude some special characters (ex: sakura yae)
            continue;
        }
        pickup_table[ obj.type ][ obj.rare-1 ].push(obj);
    }
    for (var i=0; i<pickup_ids.length; i++)
    {
        pickup_table['pickups'].push( [ ids[ pickup_ids[i] ] ] );
    }
    console.log(range_table);
    console.log(pickup_table);

    var gacha = new function() {
        this._gacha = function (rnd_val) {
            var types = ['valkyrie', 'valkyrie_piece', 'weapon', 'stigmata', 'pickups'];
            var _rnd = (rnd_val===undefined)?Math.random():rnd_val;
            for (var i=0; i<types.length; i++) {
                var t = range_table[types[i]];
                for (var j=0; j< t.length; j++ )
                {
                    // is category in range?
                    if (_rnd <= t[j])
                    {
                        var lst = pickup_table[types[i]][j];
                        // prevent bug: if indicated table is empty,
                        // then exit loop
                        if (lst.length == 0)
                        {
                            console.error('indicated table is empty: '+types[i]+','+j);
                            break;
                        }
                        // if then, select in that category!
                        var _rnd = Math.random();
                        var _idx = Math.floor(lst.length * _rnd);
                        var obj = lst[_idx];
                        // if valkyrie & rank >= 4,
                        // clear count.
                        if ((types[i] == ensure_type || obj.type == ensure_type) && obj.rare >= ensure_level)
                        {
                            //console.log('가챠 스택 초기화');
                            count = 0;
                            is_pickup = true;
                        } else {
                            is_pickup = false;
                        }
                        return obj;
                    }
                }
            }
            // nothing? then you're in material!
            lst = pickup_table['material'];
            var _rnd = Math.random();
            var _idx = Math.floor(lst.length * _rnd);
            return lst[_idx];
        }

        this.ensure_gacha = function() {
            //return this._gacha(4-1);
            // repeat gacha until get 4 STAR
            while (true)
            {
                var g = this._gacha();
                if (is_pickup)
                    return g;
            }
        }

        this.gacha = function() {
            count ++;
            if (count % 10 == 0 && ensure_type != null) {
                count = 0;
                //console.log('확정 가챠 수행');
                return this.ensure_gacha();
            }
            return this._gacha();
        }
        
        this.gacha_material = function() {
            return this._gacha(999);
        }

        /*
        // re-create object instead of running clear method.
        this.clear = function() {
            count = 0;
        }
        */
    }
    return gacha;
};