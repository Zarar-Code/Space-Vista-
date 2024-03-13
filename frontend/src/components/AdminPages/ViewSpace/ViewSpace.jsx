import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideNavbar from '../../Admin/AdminPanel/Navside/SideNav'
import BounceLoader from "react-spinners/BounceLoader";

const ViewSpace = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState(null);

  const getSpace = async () => {
    try {
      const response = await axios.get(`/api/v1/admin/adminSpace/${spaceId}`);
      setSpace(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSpace();
  }, [spaceId]);

  return (
    <>
    <SideNavbar/>
    <div className='main-admin-container'>
        <div className="container">
      {space ? (
        <>
          <div className="detail_container detail_Main">
     
       
     <div className="container ">
     <div className="row">
       <div className='col-lg-8 col-md-6 col-12 p-3'>
       <img className="img-fluid rounded shadow" src={space.interiorImages[0]}  alt="img" />
       <h2 className='mt-3'>{space.selectedWorkspace}</h2>
       <p className='text-muted mt-4'>{space.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iure architecto illo eos dicta saepe amet doloremque optio quis autem est hic porro magni provident facere, distinctio eum alias officia!
       Consectetur nesciunt, praesentium deserunt sunt ad sapiente officia ut iste eligendi quo maiores nulla quidem error hic voluptates esse natus officiis vitae exercitationem ullam odio nemo reiciendis atque unde! Doloribus?
      
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
        <div className="loader">
                <BounceLoader color="#725AC1" />
            </div>
      )}
      </div>
      </div>
    </>
  );
};

export default ViewSpace;
