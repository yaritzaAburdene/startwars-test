<?php

namespace App\DataFixtures;

use App\Entity\Characters;
use App\Entity\Movies;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        //Create movie
        $movie = new Movies();
        $movie->setName("Start Wars");
        $manager->persist($movie);
        $manager->flush();


        //create Characters
        $character1 = new Characters();
        $character1->setName("Baby Yoda");
        $character1->setMass(30);
        $character1->setHeight(50);
        $character1->setPicture('assets/frontend/img/characters/baby_yoda.png');
        $manager->persist($character1);
        $manager->flush();
    }
}