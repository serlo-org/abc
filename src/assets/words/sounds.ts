import { ISoundAsset } from '../../types/assets';

const sounds: { [id: string]: () => ISoundAsset } = {
  abend_long: () => require('./sounds/abend_long.mp3'),
  abend_short: () => require('./sounds/abend_short.mp3'),
  acht_short: () => require('./sounds/acht_short.mp3'),
  affe_long: () => require('./sounds/affe_long.mp3'),
  affe_short: () => require('./sounds/affe_short.mp3'),
  ampel_short: () => require('./sounds/ampel_short.mp3'),
  ananas_long: () => require('./sounds/ananas_long.mp3'),
  ananas_short: () => require('./sounds/ananas_short.mp3'),
  ankreuzen_short: () => require('./sounds/ankreuzen_short.mp3'),
  apfel_long: () => require('./sounds/apfel_long.mp3'),
  apfel_short: () => require('./sounds/apfel_short.mp3'),
  aquarium_short: () => require('./sounds/aquarium_short.mp3'),
  arm_long: () => require('./sounds/arm_long.mp3'),
  arm_short: () => require('./sounds/arm_short.mp3'),
  arzt_short: () => require('./sounds/arzt_short.mp3'),
  arztpraxis_short: () => require('./sounds/arztpraxis_short.mp3'),
  asyl_short: () => require('./sounds/asyl_short.mp3'),
  aufzug_short: () => require('./sounds/aufzug_short.mp3'),
  ausweis_short: () => require('./sounds/ausweis_short.mp3'),
  baby_short: () => require('./sounds/baby_short.mp3'),
  bach_short: () => require('./sounds/bach_short.mp3'),
  bad_short: () => require('./sounds/bad_short.mp3'),
  baecker_short: () => require('./sounds/baecker_short.mp3'),
  baeckerei_short: () => require('./sounds/baeckerei_short.mp3'),
  baer_short: () => require('./sounds/baer_short.mp3'),
  baeume_short: () => require('./sounds/baeume_short.mp3'),
  bahn_long: () => require('./sounds/bahn_long.mp3'),
  bahn_short: () => require('./sounds/bahn_short.mp3'),
  ball_short: () => require('./sounds/ball_short.mp3'),
  banane_long: () => require('./sounds/banane_long.mp3'),
  banane_short: () => require('./sounds/banane_short.mp3'),
  bank_short: () => require('./sounds/bank_short.mp3'),
  bart_long: () => require('./sounds/bart_long.mp3'),
  bart_short: () => require('./sounds/bart_short.mp3'),
  bauch_short: () => require('./sounds/bauch_short.mp3'),
  baum_short: () => require('./sounds/baum_short.mp3'),
  bein_short: () => require('./sounds/bein_short.mp3'),
  besen_short: () => require('./sounds/besen_short.mp3'),
  bett_long: () => require('./sounds/bett_long.mp3'),
  bett_short: () => require('./sounds/bett_short.mp3'),
  bier_long: () => require('./sounds/bier_long.mp3'),
  bier_short: () => require('./sounds/bier_short.mp3'),
  bild_short: () => require('./sounds/bild_short.mp3'),
  birne_short: () => require('./sounds/birne_short.mp3'),
  blatt_short: () => require('./sounds/blatt_short.mp3'),
  blau_short: () => require('./sounds/blau_short.mp3'),
  blut_short: () => require('./sounds/blut_short.mp3'),
  bohne_short: () => require('./sounds/bohne_short.mp3'),
  braun_short: () => require('./sounds/braun_short.mp3'),
  brot_long: () => require('./sounds/brot_long.mp3'),
  brot_short: () => require('./sounds/brot_short.mp3'),
  buch_short: () => require('./sounds/buch_short.mp3'),
  bus_short: () => require('./sounds/bus_short.mp3'),
  club_short: () => require('./sounds/club_short.mp3'),
  computer_short: () => require('./sounds/computer_short.mp3'),
  dach_short: () => require('./sounds/dach_short.mp3'),
  decke_short: () => require('./sounds/decke_short.mp3'),
  disco_short: () => require('./sounds/disco_short.mp3'),
  doener_short: () => require('./sounds/doener_short.mp3'),
  dose_long: () => require('./sounds/dose_long.mp3'),
  dose_short: () => require('./sounds/dose_short.mp3'),
  drei_short: () => require('./sounds/drei_short.mp3'),
  dusche_short: () => require('./sounds/dusche_short.mp3'),
  ei_short: () => require('./sounds/ei_short.mp3'),
  eins_short: () => require('./sounds/eins_short.mp3'),
  eis_short: () => require('./sounds/eis_short.mp3'),
  elefant_long: () => require('./sounds/elefant_long.mp3'),
  elefant_short: () => require('./sounds/elefant_short.mp3'),
  ente_long: () => require('./sounds/ente_long.mp3'),
  ente_short: () => require('./sounds/ente_short.mp3'),
  esel_long: () => require('./sounds/esel_long.mp3'),
  esel_short: () => require('./sounds/esel_short.mp3'),
  essen_long: () => require('./sounds/essen_long.mp3'),
  essen_short: () => require('./sounds/essen_short.mp3'),
  fahren_short: () => require('./sounds/fahren_short.mp3'),
  familie_short: () => require('./sounds/familie_short.mp3'),
  fernseher_short: () => require('./sounds/fernseher_short.mp3'),
  feuer_short: () => require('./sounds/feuer_short.mp3'),
  finger_short: () => require('./sounds/finger_short.mp3'),
  fisch_short: () => require('./sounds/fisch_short.mp3'),
  flasche_short: () => require('./sounds/flasche_short.mp3'),
  fleisch_short: () => require('./sounds/fleisch_short.mp3'),
  floete_short: () => require('./sounds/floete_short.mp3'),
  flugzeug_short: () => require('./sounds/flugzeug_short.mp3'),
  fluss_short: () => require('./sounds/fluss_short.mp3'),
  foehn_short: () => require('./sounds/foehn_short.mp3'),
  fotos_long: () => require('./sounds/fotos_long.mp3'),
  fotos_short: () => require('./sounds/fotos_short.mp3'),
  fuenf_short: () => require('./sounds/fuenf_short.mp3'),
  fusz_short: () => require('./sounds/fusz_short.mp3'),
  gabel_short: () => require('./sounds/gabel_short.mp3'),
  garten_short: () => require('./sounds/garten_short.mp3'),
  gesicht_short: () => require('./sounds/gesicht_short.mp3'),
  grosz_short: () => require('./sounds/grosz_short.mp3'),
  gruen_short: () => require('./sounds/gruen_short.mp3'),
  guertel_short: () => require('./sounds/guertel_short.mp3'),
  guten_abend_short: () => require('./sounds/guten_abend_short.mp3'),
  guten_morgen_short: () => require('./sounds/guten_morgen_short.mp3'),
  guten_tag_short: () => require('./sounds/guten_tag_short.mp3'),
  haar_long: () => require('./sounds/haar_long.mp3'),
  haar_short: () => require('./sounds/haar_short.mp3'),
  haeuser_short: () => require('./sounds/haeuser_short.mp3'),
  hahn_short: () => require('./sounds/hahn_short.mp3'),
  handy_short: () => require('./sounds/handy_short.mp3'),
  haus_short: () => require('./sounds/haus_short.mp3'),
  heft_short: () => require('./sounds/heft_short.mp3'),
  heiszen_short: () => require('./sounds/heiszen_short.mp3'),
  hemd_short: () => require('./sounds/hemd_short.mp3'),
  henne_short: () => require('./sounds/henne_short.mp3'),
  herz_short: () => require('./sounds/herz_short.mp3'),
  hochhaus_short: () => require('./sounds/hochhaus_short.mp3'),
  holz_short: () => require('./sounds/holz_short.mp3'),
  hose_long: () => require('./sounds/hose_long.mp3'),
  hose_short: () => require('./sounds/hose_short.mp3'),
  huegel_short: () => require('./sounds/huegel_short.mp3'),
  hut_short: () => require('./sounds/hut_short.mp3'),
  igel_long: () => require('./sounds/igel_long.mp3'),
  igel_short: () => require('./sounds/igel_short.mp3'),
  insel_long: () => require('./sounds/insel_long.mp3'),
  insel_short: () => require('./sounds/insel_short.mp3'),
  ja_short: () => require('./sounds/ja_short.mp3'),
  jahr_short: () => require('./sounds/jahr_short.mp3'),
  jung_short: () => require('./sounds/jung_short.mp3'),
  kabel_short: () => require('./sounds/kabel_short.mp3'),
  kaefer_short: () => require('./sounds/kaefer_short.mp3'),
  kaefich_short: () => require('./sounds/kaefich_short.mp3'),
  kaefig_short: () => require('./sounds/kaefig_short.mp3'),
  kaese_short: () => require('./sounds/kaese_short.mp3'),
  kaffee_long: () => require('./sounds/kaffee_long.mp3'),
  kaffee_short: () => require('./sounds/kaffee_short.mp3'),
  kakao_short: () => require('./sounds/kakao_short.mp3'),
  kanne_long: () => require('./sounds/kanne_long.mp3'),
  kanne_short: () => require('./sounds/kanne_short.mp3'),
  karneval_short: () => require('./sounds/karneval_short.mp3'),
  karotte_long: () => require('./sounds/karotte_long.mp3'),
  karotte_short: () => require('./sounds/karotte_short.mp3'),
  katze_short: () => require('./sounds/katze_short.mp3'),
  keks_short: () => require('./sounds/keks_short.mp3'),
  kerze_short: () => require('./sounds/kerze_short.mp3'),
  kette_long: () => require('./sounds/kette_long.mp3'),
  kette_short: () => require('./sounds/kette_short.mp3'),
  kind_long: () => require('./sounds/kind_long.mp3'),
  kind_short: () => require('./sounds/kind_short.mp3'),
  kino_long: () => require('./sounds/kino_long.mp3'),
  kino_short: () => require('./sounds/kino_short.mp3'),
  kiosk_short: () => require('./sounds/kiosk_short.mp3'),
  kirche_short: () => require('./sounds/kirche_short.mp3'),
  kissen_long: () => require('./sounds/kissen_long.mp3'),
  kissen_short: () => require('./sounds/kissen_short.mp3'),
  kita_long: () => require('./sounds/kita_long.mp3'),
  kita_short: () => require('./sounds/kita_short.mp3'),
  kiwi_long: () => require('./sounds/kiwi_long.mp3'),
  kiwi_short: () => require('./sounds/kiwi_short.mp3'),
  klavier_short: () => require('./sounds/klavier_short.mp3'),
  kleid_short: () => require('./sounds/kleid_short.mp3'),
  klein_short: () => require('./sounds/klein_short.mp3'),
  klingel_short: () => require('./sounds/klingel_short.mp3'),
  klinik_short: () => require('./sounds/klinik_short.mp3'),
  kneipe_short: () => require('./sounds/kneipe_short.mp3'),
  knoedel_short: () => require('./sounds/knoedel_short.mp3'),
  kochen_short: () => require('./sounds/kochen_short.mp3'),
  krawatte_short: () => require('./sounds/krawatte_short.mp3'),
  krokodil_short: () => require('./sounds/krokodil_short.mp3'),
  kuchen_short: () => require('./sounds/kuchen_short.mp3'),
  kueche_short: () => require('./sounds/kueche_short.mp3'),
  kuh_long: () => require('./sounds/kuh_long.mp3'),
  kuh_short: () => require('./sounds/kuh_short.mp3'),
  kuss_short: () => require('./sounds/kuss_short.mp3'),
  lachen_short: () => require('./sounds/lachen_short.mp3'),
  laden_short: () => require('./sounds/laden_short.mp3'),
  lamm_short: () => require('./sounds/lamm_short.mp3'),
  lampe_short: () => require('./sounds/lampe_short.mp3'),
  lastwagen_short: () => require('./sounds/lastwagen_short.mp3'),
  lift_short: () => require('./sounds/lift_short.mp3'),
  lila_short: () => require('./sounds/lila_short.mp3'),
  limo_short: () => require('./sounds/limo_short.mp3'),
  lippe_short: () => require('./sounds/lippe_short.mp3'),
  loeffel_short: () => require('./sounds/loeffel_short.mp3'),
  maeuse_short: () => require('./sounds/maeuse_short.mp3'),
  malen_short: () => require('./sounds/malen_short.mp3'),
  mama_short: () => require('./sounds/mama_short.mp3'),
  mauer_short: () => require('./sounds/mauer_short.mp3'),
  maus_short: () => require('./sounds/maus_short.mp3'),
  mond_short: () => require('./sounds/mond_short.mp3'),
  morgen_long: () => require('./sounds/morgen_long.mp3'),
  morgen_short: () => require('./sounds/morgen_short.mp3'),
  muell_short: () => require('./sounds/muell_short.mp3'),
  muenze_short: () => require('./sounds/muenze_short.mp3'),
  muesli_short: () => require('./sounds/muesli_short.mp3'),
  muetze_short: () => require('./sounds/muetze_short.mp3'),
  nadel_long: () => require('./sounds/nadel_long.mp3'),
  nadel_short: () => require('./sounds/nadel_short.mp3'),
  nagel_short: () => require('./sounds/nagel_short.mp3'),
  name_short: () => require('./sounds/name_short.mp3'),
  nase_long: () => require('./sounds/nase_long.mp3'),
  nase_short: () => require('./sounds/nase_short.mp3'),
  nebel_short: () => require('./sounds/nebel_short.mp3'),
  neun_short: () => require('./sounds/neun_short.mp3'),
  nudeln_long: () => require('./sounds/nudeln_long.mp3'),
  nudeln_short: () => require('./sounds/nudeln_short.mp3'),
  nuss_short: () => require('./sounds/nuss_short.mp3'),
  obst_long: () => require('./sounds/obst_long.mp3'),
  obst_short: () => require('./sounds/obst_short.mp3'),
  ofen_long: () => require('./sounds/ofen_long.mp3'),
  ofen_short: () => require('./sounds/ofen_short.mp3'),
  ohr_long: () => require('./sounds/ohr_long.mp3'),
  ohr_short: () => require('./sounds/ohr_short.mp3'),
  olive_short: () => require('./sounds/olive_short.mp3'),
  oma_long: () => require('./sounds/oma_long.mp3'),
  oma_short: () => require('./sounds/oma_short.mp3'),
  opa_long: () => require('./sounds/opa_long.mp3'),
  opa_short: () => require('./sounds/opa_short.mp3'),
  papier_short: () => require('./sounds/papier_short.mp3'),
  pass_long: () => require('./sounds/pass_long.mp3'),
  pass_short: () => require('./sounds/pass_short.mp3'),
  pilz_short: () => require('./sounds/pilz_short.mp3'),
  pizza_short: () => require('./sounds/pizza_short.mp3'),
  puppe_short: () => require('./sounds/puppe_short.mp3'),
  qualle_short: () => require('./sounds/qualle_short.mp3'),
  rad_short: () => require('./sounds/rad_short.mp3'),
  raetsel_short: () => require('./sounds/raetsel_short.mp3'),
  regal_short: () => require('./sounds/regal_short.mp3'),
  regen_short: () => require('./sounds/regen_short.mp3'),
  reis_short: () => require('./sounds/reis_short.mp3'),
  rezept_short: () => require('./sounds/rezept_short.mp3'),
  rose_long: () => require('./sounds/rose_long.mp3'),
  rose_short: () => require('./sounds/rose_short.mp3'),
  rot_long: () => require('./sounds/rot_long.mp3'),
  rot_short: () => require('./sounds/rot_short.mp3'),
  saft_long: () => require('./sounds/saft_long.mp3'),
  saft_short: () => require('./sounds/saft_short.mp3'),
  salami_short: () => require('./sounds/salami_short.mp3'),
  salat_long: () => require('./sounds/salat_long.mp3'),
  salat_short: () => require('./sounds/salat_short.mp3'),
  salz_short: () => require('./sounds/salz_short.mp3'),
  sand_short: () => require('./sounds/sand_short.mp3'),
  schaf_short: () => require('./sounds/schaf_short.mp3'),
  schal_short: () => require('./sounds/schal_short.mp3'),
  schere_short: () => require('./sounds/schere_short.mp3'),
  schlange_short: () => require('./sounds/schlange_short.mp3'),
  schreiben_short: () => require('./sounds/schreiben_short.mp3'),
  schuhe_short: () => require('./sounds/schuhe_short.mp3'),
  schule_short: () => require('./sounds/schule_short.mp3'),
  schwein_short: () => require('./sounds/schwein_short.mp3'),
  sechs_short: () => require('./sounds/sechs_short.mp3'),
  see_long: () => require('./sounds/see_long.mp3'),
  see_short: () => require('./sounds/see_short.mp3'),
  sessel_long: () => require('./sounds/sessel_long.mp3'),
  sessel_short: () => require('./sounds/sessel_short.mp3'),
  sieben_short: () => require('./sounds/sieben_short.mp3'),
  silvester_short: () => require('./sounds/silvester_short.mp3'),
  singen_short: () => require('./sounds/singen_short.mp3'),
  socke_short: () => require('./sounds/socke_short.mp3'),
  sofa_long: () => require('./sounds/sofa_long.mp3'),
  sofa_short: () => require('./sounds/sofa_short.mp3'),
  sohn_long: () => require('./sounds/sohn_long.mp3'),
  sohn_short: () => require('./sounds/sohn_short.mp3'),
  sonne_long: () => require('./sounds/sonne_long.mp3'),
  sonne_short: () => require('./sounds/sonne_short.mp3'),
  sosze_short: () => require('./sounds/sosze_short.mp3'),
  strasze_short: () => require('./sounds/strasze_short.mp3'),
  suppe_short: () => require('./sounds/suppe_short.mp3'),
  syrien_short: () => require('./sounds/syrien_short.mp3'),
  tag_long: () => require('./sounds/tag_long.mp3'),
  tag_short: () => require('./sounds/tag_short.mp3'),
  tasche_short: () => require('./sounds/tasche_short.mp3'),
  tasse_long: () => require('./sounds/tasse_long.mp3'),
  tasse_short: () => require('./sounds/tasse_short.mp3'),
  taxi_short: () => require('./sounds/taxi_short.mp3'),
  tee_long: () => require('./sounds/tee_long.mp3'),
  tee_short: () => require('./sounds/tee_short.mp3'),
  teller_short: () => require('./sounds/teller_short.mp3'),
  text_short: () => require('./sounds/text_short.mp3'),
  tier_long: () => require('./sounds/tier_long.mp3'),
  tier_short: () => require('./sounds/tier_short.mp3'),
  tisch_short: () => require('./sounds/tisch_short.mp3'),
  tomate_long: () => require('./sounds/tomate_long.mp3'),
  tomate_short: () => require('./sounds/tomate_short.mp3'),
  tonne_long: () => require('./sounds/tonne_long.mp3'),
  tonne_short: () => require('./sounds/tonne_short.mp3'),
  topf_long: () => require('./sounds/topf_long.mp3'),
  topf_short: () => require('./sounds/topf_short.mp3'),
  tor_long: () => require('./sounds/tor_long.mp3'),
  tor_short: () => require('./sounds/tor_short.mp3'),
  treppe_short: () => require('./sounds/treppe_short.mp3'),
  tuer_short: () => require('./sounds/tuer_short.mp3'),
  tuete_short: () => require('./sounds/tuete_short.mp3'),
  turm_short: () => require('./sounds/turm_short.mp3'),
  uhr_long: () => require('./sounds/uhr_long.mp3'),
  uhr_short: () => require('./sounds/uhr_short.mp3'),
  vier_short: () => require('./sounds/vier_short.mp3'),
  waesche_short: () => require('./sounds/waesche_short.mp3'),
  wagen_short: () => require('./sounds/wagen_short.mp3'),
  wandern_short: () => require('./sounds/wandern_short.mp3'),
  wanderweg_short: () => require('./sounds/wanderweg_short.mp3'),
  wasser_long: () => require('./sounds/wasser_long.mp3'),
  wasser_short: () => require('./sounds/wasser_short.mp3'),
  weg_short: () => require('./sounds/weg_short.mp3'),
  wein_short: () => require('./sounds/wein_short.mp3'),
  weisz_short: () => require('./sounds/weisz_short.mp3'),
  werkzeug_short: () => require('./sounds/werkzeug_short.mp3'),
  wuerfel_short: () => require('./sounds/wuerfel_short.mp3'),
  zaeune_short: () => require('./sounds/zaeune_short.mp3'),
  zange_short: () => require('./sounds/zange_short.mp3'),
  zaun_short: () => require('./sounds/zaun_short.mp3'),
  zehn_short: () => require('./sounds/zehn_short.mp3'),
  zeitung_short: () => require('./sounds/zeitung_short.mp3'),
  zug_short: () => require('./sounds/zug_short.mp3'),
  zwei_short: () => require('./sounds/zwei_short.mp3'),
  zwiebel_short: () => require('./sounds/zwiebel_short.mp3')
};

export default sounds;
