"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenLine, Loader2 } from 'lucide-react'

// Definindo o schema de validação
const formSchema = z.object({
  title: z.string().min(2, "O título deve ter pelo menos 2 caracteres"),
  imageUrl: z.string().url("Por favor, insira um URL válido"),
  author: z.string().min(2, "O autor deve ter pelo menos 2 caracteres"),
  link: z.string().url("Por favor, insira um URL válido"),
  content: z.string().min(10, "O conteúdo deve ter pelo menos 10 caracteres")
})

export default function ContentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Inicializando o useForm com o schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      author: "",
      link: "",
      content: ""
    }
  })

  // Função de submissão
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulando API
      console.log(data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary/10 animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <PenLine className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            Preencha o formulario da noticia!!!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-base font-medium">Titulo</label>
              <Input
                {...register('title')}
                placeholder="Insira o titulo aqui"
                className="h-12 text-lg transition-all duration-200 focus:scale-[1.01]"
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium">Imagem URL</label>
              <Input
                {...register('imageUrl')}
                placeholder="Insira a imagem aqui"
                className="h-12 transition-all duration-200 focus:scale-[1.01]"
              />
              {errors.imageUrl && (
                <p className="text-sm text-red-500">{errors.imageUrl.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-base font-medium">Autor</label>
                <Input
                  {...register('author')}
                  placeholder="Insira o nome do ator aqui"
                  className="h-12 transition-all duration-200 focus:scale-[1.01]"
                />
                {errors.author && (
                  <p className="text-sm text-red-500">{errors.author.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium">Link</label>
                <Input
                  {...register('link')}
                  placeholder="insira o link aqui"
                  className="h-12 transition-all duration-200 focus:scale-[1.01]"
                />
                {errors.link && (
                  <p className="text-sm text-red-500">{errors.link.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium">Conteudo</label>
              <Textarea
                {...register('content')}
                placeholder="Insira o conteudo aqui"
                className="min-h-[200px] resize-none text-base p-4 transition-all duration-200 focus:scale-[1.01]"
              />
              {errors.content && (
                <p className="text-sm text-red-500">{errors.content.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Enviando...
                  <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                </>
              ) : (
                'Enviar'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

