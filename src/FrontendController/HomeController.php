<?php

namespace App\FrontendController;

use App\Entity\Characters;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="view_home_frontend")
     */
    public function index(): Response
    {
        return $this->render('frontend/index.html.twig');
    }

    /**
     * @Route("/characters",name="view_characters_frontend")
     */
    public function charactersAction()
    {
        $character = [];
       // $character =  $this->get('doctrine')->getRepository(Characters::class)->findAll();

        return $this->render('frontend/characters.html.twig', [
            'characters' => $character
        ]);
    }

}
