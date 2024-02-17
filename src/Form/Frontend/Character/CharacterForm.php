<?php


namespace App\Form\Frontend\Character;

use App\Entity\Characters;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class CharacterForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('mass', NumberType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
            ])
            ->add('height', NumberType::class, [
                'attr' => [
                    'placeholder' => 'example@correo.com',
                    'class' => 'form-control',
                ]
            ])
            ->add('gender', NumberType::class, [
                'attr' => [
                    'rows' => '5',
                    'cols' => '5',
                    'class' => 'form-control',
                ],
                'required' => false,
            ])
            ->add('picture', FileType::class,[
                'label' => false,
                'mapped' => false,
                'required' => false,
                'multiple' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/*',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image',
                    ])
                ],
                'data_class' => null
            ])

            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-warning btn-lg text-dark',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Characters::class,
        ]);
    }

}