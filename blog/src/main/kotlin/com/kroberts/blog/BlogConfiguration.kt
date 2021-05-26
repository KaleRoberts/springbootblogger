package com.kroberts.blog

import org.springframework.boot.ApplicationRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class BlogConfiguration {
    @Bean
    fun databaseInitializer(userRepository: UserRepository, articleRepository: ArticleRepository) =
        ApplicationRunner {
            val kroberts = userRepository.save(User("kroberts", "Kale", "Roberts"))
                articleRepository.save(
                    Article(
                    title = "React is great",
                    headline = "See what makes React so great!",
                    content = "Some cool stuff about React",
                    author = kroberts
                ))
                articleRepository.save(Article(
                    title = "JavaScript is the coolest",
                    headline = "See what makes JavaScript so useful",
                    content = "Some cool stuff about JavaScript",
                    author = kroberts
                ))
        }
}