import React,{useEffect} from 'react'
import "./EachSpace.css"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectSpaceById, getAllSpaces } from '../../features/allSpacesSlice'

const EachSpace = () => {

  const { spaceId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpaces());
  }, [dispatch]);

  const space = useSelector((state) => selectSpaceById(state, spaceId));
  // console.log(space)

  return (
    <>
     {space ? (
      <>
    <div className="detail-space-section-bg">
    <div className="overlay"></div>
    <div className="detail-space-content-container">
        <div className='detail-space-heading'>{space.selectedWorkspace}</div>
        <div className="breadcrumb-position d-inline-block">
          <ul>
        <li className='text-black'><Link to="/allSpace">All Spaces</Link></li>
        <li className='text-black'>{space.selectedWorkspace}</li>
        </ul>
        </div>
    </div>
    </div>
    <div className="detail_container detail_Main">
     
       
        <div className="container ">
        <div className="row">
          <div className='col-lg-8 col-md-6 col-12 p-3'>
          <img className="img-fluid rounded shadow" src={space.interiorImages[0]}  alt="img" />
          <h2 className='mt-3'>{space.selectedWorkspace}</h2>
          <p className='text-muted mt-4'>{space.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iure architecto illo eos dicta saepe amet doloremque optio quis autem est hic porro magni provident facere, distinctio eum alias officia!
          Consectetur nesciunt, praesentium deserunt sunt ad sapiente officia ut iste eligendi quo maiores nulla quidem error hic voluptates esse natus officiis vitae exercitationem ullam odio nemo reiciendis atque unde! Doloribus?
          Molestias qui similique expedita tenetur magni debitis voluptatem corrupti? Excepturi animi suscipit, error architecto minima aspernatur explicabo tempore tempora delectus sunt ullam recusandae unde optio minus inventore? Vel, vitae fugiat?
          Incidunt quisquam sapiente tenetur quas fugit laboriosam repellat libero sequi vel molestiae, iusto facilis voluptate voluptates ratione quasi dolorum eaque quibusdam eos nostrum perferendis voluptatem numquam! Distinctio dignissimos laboriosam qui!
          Pariatur modi, qui possimus commodi et ut. Cum itaque molestiae commodi et quibusdam, blanditiis repellendus eaque ut, recusandae, impedit velit porro eius! Reiciendis suscipit tempore cumque natus blanditiis iste nesciunt.
          Est, consectetur ipsum aliquam dignissimos facere fuga? Quo numquam ex possimus dolorem ab ullam ut neque aut deleniti recusandae! Reprehenderit nam impedit laborum iure doloremque neque quam repellat, ut deserunt?
          Sint mollitia doloribus ullam reiciendis, molestiae distinctio quasi perferendis laboriosam praesentium assumenda nesciunt labore, fugit quis modi repellendus esse excepturi explicabo vel facilis veniam non nostrum blanditiis? Minima, dolorem libero!
          Magni, ullam! Sequi debitis ipsum optio nisi. Tenetur veritatis excepturi est corrupti cupiditate harum dolore, fugit eaque, beatae illo quia molestias aliquid. Eligendi dolorum asperiores temporibus fuga officia praesentium provident?
          Necessitatibus, autem! Ipsum quis autem recusandae libero aperiam laboriosam adipisci iusto? Deserunt doloribus maxime quibusdam possimus ratione eligendi velit ullam? Ut maxime autem exercitationem neque perferendis eaque! Aperiam, maxime adipisci.
          Aspernatur non praesentium iste eligendi, quasi tempora? Sint expedita soluta nobis fuga debitis incidunt dicta, vel veritatis ipsum modi eius? Totam, maiores! Facere, in? Dicta repudiandae ducimus possimus quae tenetur?
          Accusantium ex quam explicabo tempora aperiam laborum quis rerum temporibus placeat at saepe, atque pariatur voluptatem quisquam odit deserunt aliquid perferendis asperiores fuga culpa velit, itaque sint eveniet sunt! Laudantium.
          A repellendus odit tempore architecto illo aut excepturi totam facilis ad, repudiandae magni, iusto deleniti dolore? Quis maxime aperiam quasi, voluptatibus quibusdam natus, error nesciunt nam distinctio animi possimus amet!
          Repudiandae aspernatur voluptate quaerat atque veritatis eaque suscipit facere, enim praesentium, molestias consequatur dolor possimus omnis ullam obcaecati quis inventore esse! Ut nemo nisi veniam, sapiente dolorem minus saepe quasi!
          Ex, nulla, ullam consequuntur natus recusandae eaque voluptates distinctio, inventore deserunt dolore omnis. Sit quibusdam, vitae blanditiis provident dolore excepturi fugit, voluptatibus voluptates id porro fugiat nostrum cum enim. Labore!
          Maiores incidunt molestias quia eos! Commodi, earum? Atque, voluptatum ratione! Rerum assumenda quam sequi deleniti natus temporibus harum pariatur iure aliquid, possimus necessitatibus quis consectetur laboriosam! Accusantium perspiciatis eaque repellat.
          Ipsa nostrum sunt modi omnis amet sequi corporis ab numquam, voluptas officia, pariatur dolore nihil, ea iste magni! Modi pariatur earum quo natus. Sed explicabo odit, unde ab molestias aliquam.
          Itaque neque perferendis eos reprehenderit cupiditate ducimus voluptatem delectus maiores id repellat nostrum consequuntur minus officia ut eum, esse cumque excepturi unde dicta. Expedita minima exercitationem itaque quibusdam assumenda nam!
          Odio mollitia, laborum nostrum minima quas, quae error dolorum repellendus eos expedita excepturi dignissimos ea? Harum quod quo debitis temporibus, hic repellendus officiis fugit commodi dolores quaerat atque et doloremque?
          Aut nostrum numquam iste beatae in soluta neque, reprehenderit voluptatibus impedit ea aliquam maxime labore. Magni inventore expedita ullam fuga blanditiis doloribus esse labore placeat excepturi amet totam, eligendi sunt?
          Voluptatum culpa, consequatur totam vero quia eum, esse odit nesciunt a ipsam, molestias voluptates ut quae ad porro aliquid deleniti accusamus excepturi. Quos maiores suscipit deleniti, a atque quod nulla.
          Exercitationem, ullam laudantium. Ut nihil nemo iste fugit. Animi, reprehenderit repellendus. Repellendus fugit quam necessitatibus inventore quis perferendis ipsam ex nostrum, libero, facere, qui nisi asperiores pariatur soluta possimus tempora?
          Non enim dicta aut officia voluptate? Praesentium rem, distinctio ad autem sunt tenetur numquam et voluptatibus porro laudantium unde minus blanditiis iste possimus neque quibusdam quam explicabo architecto culpa sed!
          Ratione dignissimos facilis architecto cupiditate voluptatum temporibus fuga, sapiente quisquam earum ipsam consectetur praesentium aliquid itaque explicabo laudantium totam aspernatur ut! Praesentium ipsam voluptates quos dolorum similique sapiente impedit sint!
          Consequuntur placeat nostrum quis magni adipisci dolorem odit velit ipsam, ea accusamus nulla cumque eos magnam neque in ipsa dolore facere, repellendus consectetur. Magni eius, iste repudiandae animi officiis vitae?
          Quasi rerum commodi, exercitationem harum fuga sunt libero atque, minus qui quaerat optio necessitatibus quisquam illum blanditiis autem recusandae at labore veniam accusantium eius nobis? Quod non molestiae corrupti vero!
          Aliquid sapiente, enim at dolores assumenda veritatis hic quia sunt omnis quos expedita ut et nulla voluptate nostrum nisi beatae reprehenderit velit quidem quam ducimus qui doloremque iste tempora! Nam?
          Veniam tempore ex blanditiis temporibus, quasi recusandae quia soluta quas saepe, delectus sequi exercitationem quibusdam dignissimos voluptas odit incidunt, enim molestias ratione nesciunt laborum culpa rem praesentium quaerat. Laudantium, sit.
          Blanditiis rem sed suscipit repudiandae commodi doloremque debitis non modi neque asperiores illo repellat nihil iusto, hic esse mollitia enim sequi pariatur facilis ad temporibus! Dolore tempore totam quis dicta.
          Quae temporibus, amet nobis velit nesciunt labore suscipit soluta sit at voluptates ipsam laborum aspernatur qui exercitationem error. Pariatur, omnis sequi? Eaque laboriosam sequi incidunt aut soluta, quas dolorum? Id!
          Quia corrupti eos, nostrum, necessitatibus adipisci aut voluptates error provident recusandae in dignissimos quo ducimus exercitationem tempore placeat amet asperiores! Iusto molestias dolores pariatur eos perspiciatis delectus commodi, voluptate eveniet.
          Eos non fuga atque, earum optio minus quia iste, consequuntur soluta magnam nam illo autem architecto officia ullam ad debitis ipsum eius accusamus in? Ullam eligendi fugiat qui voluptas a.
          Eveniet explicabo suscipit esse impedit accusantium unde dolor repudiandae? Ipsam numquam ipsa facere aspernatur. Quo dolore dicta, reprehenderit, assumenda quis asperiores, sapiente dolor voluptate temporibus minima deleniti nesciunt itaque officia!
          Obcaecati in debitis illo aperiam. Voluptas quae modi sapiente aspernatur unde reiciendis dolores assumenda ex quam ipsum aliquam cupiditate doloribus vel, obcaecati explicabo error, itaque provident repellat sunt mollitia omnis?
          Officia iste laborum facere ratione, cumque placeat temporibus, fugiat animi neque blanditiis excepturi tempora consectetur fugit est aspernatur eligendi architecto! Minus est illo dicta veritatis ipsum beatae sequi amet ducimus.
          Ratione porro distinctio culpa maiores quas omnis fugiat ullam nostrum suscipit eius modi soluta optio, tempore accusantium quia ex eveniet esse voluptatibus voluptatum nobis. Reprehenderit quod repudiandae nemo voluptatum eligendi.
          Illum ut esse id aliquam! Voluptatem error, aspernatur cum id quaerat nemo dolor harum eveniet pariatur magni ipsa sint obcaecati a voluptatum provident debitis? Laboriosam quaerat officia impedit illo fugiat.
          Iste amet eos impedit sed neque? Alias id molestias, architecto ex qui sint placeat veniam explicabo dignissimos, repudiandae magni iste totam recusandae voluptatum iusto quas necessitatibus rerum pariatur delectus hic?
          Facere dolore corrupti cumque fugit nisi, quae molestiae eos minima nam expedita omnis provident at totam esse voluptate? Tempore, sit inventore fugiat atque corporis maiores eum fuga consectetur provident suscipit!
          Quisquam unde, cum deserunt minima commodi neque aperiam harum maiores minus doloremque. Rem ratione velit blanditiis quas quis accusantium cum cupiditate illum aspernatur itaque, quia excepturi! Dolorum aut delectus blanditiis?
          Mollitia consequuntur magni debitis asperiores dolorem, expedita repudiandae repellendus odio similique natus! Culpa velit, at ratione ea, minus quidem dolorum voluptates corporis reprehenderit quisquam quia voluptatibus id amet maiores qui!
          Quaerat, earum perferendis minima cum laborum sequi saepe accusantium soluta esse exercitationem tempore dignissimos. Rem blanditiis dolorem quaerat explicabo ullam beatae perspiciatis dolorum vel quam, voluptas cupiditate nemo, mollitia consequatur.
          A laudantium illo porro error quidem aperiam, sit in doloremque quibusdam architecto voluptas dignissimos, ad neque, vel incidunt culpa molestiae delectus? Velit aut voluptas quos consequatur rem doloremque, quis magnam!
          Consequatur, voluptatibus quidem doloribus dolores est necessitatibus aliquam suscipit, iusto assumenda eligendi facilis fuga earum rem quibusdam voluptatem culpa deleniti exercitationem! Et cupiditate cum labore repellendus voluptatibus officia deleniti fuga?
          Dolore nobis ipsa expedita enim rerum vitae accusamus recusandae dolores fuga repellendus mollitia consequatur voluptatem sapiente, est natus? Deserunt facere pariatur et nihil alias iste aperiam reprehenderit sapiente animi nam.
          Odio vel consequatur repellat accusantium dolor sequi fugit tenetur sapiente est velit iste provident rerum voluptatem reiciendis dicta similique nostrum officiis ducimus a debitis odit, veniam possimus. Excepturi, dolorum exercitationem.
          Harum voluptate veritatis delectus amet quaerat culpa atque magnam accusantium beatae assumenda velit sunt aliquid expedita natus consectetur mollitia ea odit, dignissimos nostrum cupiditate esse? Iure tempore perferendis aliquam error!
          Et, excepturi! Sed placeat aliquam voluptatum reprehenderit explicabo, similique veniam officiis quisquam nihil repellendus nobis ullam reiciendis eos sequi quibusdam nulla voluptas dolor provident ex tenetur, facilis officia. Labore, odit?
          Animi porro laborum, consequatur officiis modi unde rerum voluptatibus vel earum omnis dolore obcaecati in adipisci, incidunt nisi soluta fugit laboriosam? Quae voluptatem sint consectetur deleniti numquam, beatae tempora vel.
          Quisquam alias, eveniet eius fugit, laborum inventore odio sit, rem harum unde animi architecto sed similique? Minus facere quas, voluptatem tempore atque aut beatae! Error aliquid tempora dolores magni velit.
          Accusantium nemo at quas odio optio temporibus consequuntur dignissimos et voluptates modi culpa, omnis assumenda fuga quia impedit animi ea quisquam mollitia praesentium quaerat asperiores perspiciatis? Doloribus dolor voluptas esse!
          At dolorum deserunt ipsum laboriosam aliquam eius id, illo, vel odio nam obcaecati ea! Vel veritatis qui eveniet debitis porro blanditiis minus nulla? Consectetur quod quo assumenda modi, sequi reprehenderit.
          Quibusdam et suscipit facere, porro libero exercitationem, distinctio accusantium obcaecati impedit rerum tempore veritatis tempora incidunt natus? Debitis soluta perferendis repellendus architecto rem iusto aliquid temporibus reiciendis, numquam accusantium doloremque?
          Iure modi voluptatum vitae ipsum itaque ipsa consequatur provident, quisquam tempora assumenda placeat, optio possimus expedita esse distinctio fugit ut dolorum at nemo maiores. Itaque aut iste laborum quaerat voluptates.
          Est aperiam animi possimus sint nulla non, quidem ipsum voluptas ex ratione odit provident reiciendis deleniti dicta soluta, nobis rerum vel id, fuga fugiat consequuntur sed omnis. Ex, consequuntur dolorem?
          Consectetur aspernatur suscipit minima sapiente distinctio quod odio labore alias, corrupti animi incidunt, commodi sint harum quaerat iste omnis recusandae deserunt, facilis ut eum adipisci unde assumenda culpa! Cum, placeat?
          Perferendis, eligendi neque! Vero dignissimos deleniti adipisci modi exercitationem. Unde enim, nemo ex beatae impedit fugit consectetur velit, minima asperiores blanditiis libero aliquid nobis ut numquam expedita labore, distinctio officiis?
          Quae maxime nostrum, tempora porro magni optio magnam, aspernatur, ipsa neque odit facere possimus saepe iste soluta laboriosam? Harum dolore illum omnis nostrum eius est corporis perferendis dolores dolorum quisquam.
          Numquam reprehenderit eligendi consequatur corrupti impedit blanditiis maiores itaque culpa, excepturi explicabo eos sapiente libero eaque expedita autem ab accusantium perferendis placeat consectetur. Totam incidunt aut eum obcaecati quam? Eveniet.
          Pariatur cum autem dolorem neque officiis vel minima perferendis distinctio fugiat provident ab, eveniet alias similique animi ratione aliquid exercitationem. Earum dicta impedit quos dolor doloremque eligendi deserunt. Iure, sit?
          Hic asperiores natus earum error voluptates ipsa illo fugit! Doloremque iste voluptate facere, veritatis modi ut delectus quia, eius molestiae expedita similique ea maiores officiis? Velit dolorum expedita cum iste.
          Ducimus nemo sequi molestias, porro adipisci animi qui delectus quam labore et laborum tempore nostrum nesciunt in aspernatur sed? Doloremque commodi assumenda veniam nihil a laboriosam sint excepturi temporibus numquam.
          Explicabo atque culpa possimus delectus aperiam ab nam nostrum, ratione, quisquam animi quidem doloribus eum officia voluptate exercitationem ut consequuntur debitis sint! Eius fuga necessitatibus distinctio quia laborum corrupti beatae.
          Voluptates dignissimos qui rem impedit, eum natus possimus ipsum tempore nisi nihil vero voluptatem quisquam veniam alias blanditiis eveniet! Explicabo quos veniam mollitia dolor fugit animi voluptate eaque distinctio cumque.
          Magnam, sit! Cumque amet pariatur doloremque labore expedita voluptatem magnam iusto obcaecati aliquam libero facilis laboriosam sunt magni reiciendis ea minima quasi, illo nobis iure vero illum nisi? Assumenda, similique.
          Aliquam repellendus tempore ex, corrupti quisquam deleniti rerum voluptas quidem ab maiores molestiae aperiam doloribus amet est? Magnam id, consectetur suscipit ut vero, ad, perferendis fugiat sit accusamus corrupti recusandae?
          Sint, cumque temporibus voluptate ab consequatur numquam. Debitis nam amet mollitia ratione, impedit beatae eligendi voluptate dolorum quisquam. Aut minima quidem optio cumque, magni accusamus dicta delectus cupiditate expedita a!
          Nulla optio officia, corporis cumque aperiam molestias fugiat et, illum, cum quisquam expedita repudiandae. Voluptatum laborum repellat nobis vitae facere eos voluptatem vel. Nulla pariatur corporis exercitationem odit, nobis iure.
          Eos aliquid minus, magnam voluptatem dignissimos fugiat vero deserunt eveniet ex explicabo hic nostrum vitae quaerat minima repudiandae, dolores harum non delectus! Ad nulla nostrum aspernatur asperiores quibusdam maiores numquam!
          Et eaque voluptatem cum, fugiat impedit consectetur adipisci iusto eum iure assumenda nobis unde animi recusandae quaerat nihil omnis cumque, aperiam excepturi deserunt ullam magni voluptatibus nisi. Libero, a incidunt.
          Recusandae consequuntur quisquam delectus sapiente doloremque incidunt eius enim vel autem odit! Dolores laboriosam, est ut necessitatibus dolor cum totam obcaecati explicabo voluptatem sint vitae, similique repellat incidunt sed neque!
          Aspernatur, delectus maxime sapiente temporibus reiciendis ad nihil ipsum dicta recusandae eaque quas vel deleniti soluta incidunt placeat facere asperiores amet saepe minus consequuntur commodi excepturi! Accusantium minima ullam quam.
          Sed maiores pariatur unde quia tempore modi? Accusantium quibusdam impedit ipsa. Quibusdam, laboriosam ea quo autem non enim placeat nesciunt harum? Molestias aperiam amet incidunt deserunt a corrupti repudiandae magni.
          Maiores rerum reprehenderit aliquam, eum quod architecto repudiandae aliquid dignissimos, dolor, placeat laudantium ea iure? Veniam dolore accusantium molestias quo quidem quia pariatur error, autem nam ducimus perferendis repellendus a?
          Aperiam possimus iure optio. Nulla, illo amet. Deleniti pariatur hic fuga eveniet tenetur. Eveniet velit repudiandae, amet tempore quia architecto ex quam laboriosam facere accusamus necessitatibus eaque quaerat. Ex, laboriosam?
          Tenetur provident eum ut repellendus molestiae libero iusto illum voluptatem, asperiores quae doloremque placeat dolore consequuntur incidunt sint amet distinctio quis vel consequatur inventore odit, nisi error? Voluptatibus, quae fugiat?
          Nobis pariatur iste reprehenderit aut vel illum sunt quaerat architecto illo vitae, eos consequatur totam mollitia accusamus quam cumque iusto, tenetur quos eligendi. Est tenetur aperiam, fugiat temporibus aliquam placeat.
          Officia totam eius, magni autem veritatis fugit asperiores quaerat rem laudantium laborum, culpa atque placeat recusandae pariatur expedita nisi voluptatem qui dolorem facilis odio inventore reprehenderit ad quibusdam voluptate. Reiciendis.
          Iusto unde explicabo ut quas exercitationem? Dolor suscipit ipsum impedit atque, molestiae illum enim quas officia quisquam nisi, fugiat omnis, consequuntur reprehenderit harum dolorem consequatur explicabo laudantium repellat! Saepe, perferendis.
          Ipsum tempore adipisci expedita consectetur ea error maxime distinctio reprehenderit perspiciatis, consequuntur veniam quo odit blanditiis, corrupti iste! Voluptates quam doloribus repellat obcaecati at corporis tempore, cumque itaque minima harum.
          Mollitia explicabo quis veniam impedit odio inventore sequi recusandae placeat eum minus, corporis quae dolores voluptas ea, unde temporibus quas voluptate amet tenetur non a expedita adipisci, autem laborum? Vel?
          Nihil, voluptates! Recusandae nihil optio est dicta ut eum, distinctio voluptatum adipisci expedita reiciendis culpa ea. Voluptates debitis velit ad corporis dolores nemo voluptas voluptatum rem! Obcaecati voluptatibus animi quae.
          Perferendis ad nulla quia animi, mollitia iure tenetur blanditiis, voluptatem, placeat obcaecati provident! Deleniti iure ex laudantium nemo culpa. Autem eveniet esse rem sit excepturi dolores sapiente totam, consequuntur iusto!
          Nemo quod quasi saepe mollitia blanditiis, nostrum voluptas magni quis, rerum est dicta aliquid itaque voluptatibus possimus recusandae voluptate libero qui autem quaerat modi animi! Assumenda tempore laborum rem veritatis.
          Odio, eligendi laborum quidem neque autem fugit quibusdam. Aliquam eum saepe molestias consectetur maxime, rem minus eveniet ad aut? Cupiditate maiores ex laboriosam impedit aperiam tenetur, esse explicabo inventore labore!
          Voluptatum quam cumque, quae, illo eveniet accusantium explicabo dolorem harum reiciendis dolores quas quo numquam sequi nostrum tempore natus. Sequi repellendus sint illum voluptatem odit asperiores ducimus facilis itaque tempore?
          Voluptatibus, ab! Dolore ipsam vel hic natus quia velit non autem dolorum recusandae quasi asperiores ea, fugit placeat cum amet repellat quis pariatur aliquam. Neque distinctio ipsum laboriosam repellat totam.
          Autem consectetur vero, quidem explicabo eveniet labore, eius voluptas maiores officia, corporis nemo optio! Harum, praesentium tempore? Fugiat quia aliquam doloremque porro modi itaque! Nulla dolore tempora officiis culpa totam.</p>
          </div>
         
          <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 p-3 ">
            <div className='sidebar sticky-sidebar border rounded '>
              <div className='p-4 mt-4 text-center'>
              <img className="" src={space.exteriorImages[0]}  alt="img" />
              <div className="mt-4">
                <div className="text-muted mb-0">Land Owner</div>
                <h3>Zarar Haider</h3>
                <button className='btn btn-primary mt-2'>Contact Us</button>
              </div>
              </div>
              </div>
            </div> 
          </div>
          </div>
      </div>
      </>
      ) : (
        <p>Space not found</p>
      )}
    </>
  )
}

export default EachSpace